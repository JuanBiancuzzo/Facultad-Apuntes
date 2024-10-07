---
dia: 2024-07-08
etapa: empezado
referencias:
  - "23"
  - "24"
  - "154"
aliases:
  - Animación procedural con inverse kinematics
  - Animación procedural con IK
tags:
  - nota/investigacion
  - animation
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
El principal motivo por el cual se usa animación procedural es la libertad de crear animaciones que sean demandadas por la situación actual, pero perdemos características de la animación tradicional como
* [[Keyframe#Curvas de interpolación|Curvas de interpolación entre keyframes]]

En el caso especifico de las curvas de interpolación, podemos crear una alternativa, donde podemos crear una [[Función|función]] $f: ~ \mathbb{R}^n \to \mathbb{R}^n$ , donde $x \in \mathbb{R}^n$ es el input dinámico dado por la situación, y $f(x)$ sigue el input dinámico pero agregando una característica, similar a las que podía dar una curva de interpolación

El extremo es tener la [[Función identidad|función identidad]] por lo que sigue perfectamente al input, pero nos permite ver que si partimos de acá, sabemos que tenemos que mantener que $$ \lim_{t \to \infty} f(x) - x = 0 $$ es decir, que siempre tiene que seguir a $x$

Podemos crear un [[Sistema dinámico|sistema dinámico]] de segundo orden, para reflejar un movimiento real, ya que tenemos aceleración y velocidad, donde por simplicidad llamaremos $y$ a $f(x)$ $$ y + k_1 \dot{y} + k_2 \ddot{y} = x + k_3 \dot{x} $$


Variando $k_1$,  $k_2$ y $k_3$, podemos crear distintas dinámicas, como
* Arrastrar un [[Cuerpo rígido|cuerpo rígido]] con masa $m$, con un [[Resorte|resorte]] de parámetro $k$ $$ y + \frac{b}{k} \dot{y} + \frac{m}{k} \ddot{y} = x + \frac{b}{k} \dot{x} $$
Dándole un mejor significado a estas variables $$ \begin{align} 
    f &= \frac{1}{2\pi\sqrt{k_2}} &&&
    \zeta &= \frac{k_1}{2\sqrt{k_2}} &&&
    r &= \frac{2k_3}{k_1} \\\\
    k_1 &= \frac{\zeta}{\pi f} &&&
    k_2 &= \frac{1}{(2\pi f)^2} &&&
    k_3 &= \frac{r\zeta}{2\pi f} 
\end{align} $$
Donde $f$ es la [[Función periódica#Frecuencia|frecuencia]] del [[Sistema|sistema]] en $Hz$, donde representa la velocidad con la que el sistema va a responder

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]    
    \tikzmath {
        \error = 0.01;
        
        \aIx = -100;  \aIy = -100;
        \aIIx = -100; \aIIy = -100;
        \ax = -100;   \ay = -100;
        
        \AIx = -100;   \AIy = -100;
        \AIIx = -100;  \AIIy = -100;
        \AIIIx = -100; \AIIIy = -100;
        
        function mulReal(\primerox, \primeroy, \segundox, \segundoy) {
            return \primerox * \segundox - \primeroy * \segundoy;
        };
        
        function mulImg(\primerox, \primeroy, \segundox, \segundoy) {
            return \primerox * \segundoy - \primeroy * \segundox;
        };
        
        function divReal(\numx, \numy) {
            return \numx / (\numx^2 + \numy^2);
        };
        
        function divImg(\numx, \numy) {
            return -\numy / (\numx^2 + \numy^2);
        };
   
        function sim(\primero, \segundo) {
            return ((\primero + \error) > \segundo) 
                && (\segundo > (\primero - \error));
        };
          
        function u(\t) {
            if \t < 0 then {
                return 0;
            } else {
                return 1;
            };
        };
        
        \maximoSeguro = 16382;
        function magnitudSegura(\primero, \segundo) {
            \resultado = \maximoSeguro;
            if \primero <= \maximoSeguro && \primero <= sqrt(\maximoSeguro) then {
                \primeroCuadrado = \primero^2;
                
                if \segundo <= \maximoSeguro 
                    && \segundo <= sqrt(\maximoSeguro) then {
                    \segundoCuadrado = \segundo^2;
                    
                    \temp = \maximoSeguro - \segundoCuadrado;
                    if \primeroCuadrado <= \temp then {
                        \resultado = \primeroCuadrado + \segundoCuadrado;
                    };
                };
            };
            
            return \resultado;
        };
        
        function yReal(\t, \f, \z, \r) {
            \kI = \z / ( pi * \f );
            \kII = 1 / ( (2 * pi * \f)^2 );
            \kIII = (\r * \z) / ( 2 * pi * \f ); 
            
            \aIx = \kI / (2 * \kII) + (\kI^2 / 4 >= \kII) 
                    * sqrt(abs(\kI^2 - 4 * \kII)) / (2 * \kII);
            \aIy = (\kI^2 / 4 < \kII) 
                * sqrt(abs(\kI^2 - 4 * \kII)) / (2 * \kII);
            
            \aIIx = \kI / (2 * \kII) - (\kI^2 / 4 >= \kII) 
                    * sqrt(abs(\kI^2 - 4 * \kII)) / (2 * \kII);
            \aIIy = -\aIy;
            
            \ax = \aIx;
            \ay = \aIy;
            
            \iguales = int(sim(\aIx, \aIIx) && sim(\aIy, \aIIy));
            
            if \iguales == 0 then {
                \tempx = \aIx * \aIIx - \aIy * \aIIy;
                \tempy = \aIx * \aIIy + \aIx * \aIIy;
                \AIx = \tempx / magnitudSegura(\tempx, \tempy);
                          
                \tempx = \aIx * \aIIx - \aIx^2 - \aIy * \aIIy + \aIy^2;
                \tempy = \aIx * \aIIy - 2 * \aIx * \aIy + \aIy * \aIIx;
                \AIIx = (\tempx * \aIx * \kIII - \tempx + \tempy)
                    / magnitudSegura(\tempx, \tempy);
                
                
                \tempx = \aIx - \aIIx^2 - \aIy * \aIIy + \aIIy^2;
                \tempy = \aIx * \aIIy - 2 * \aIIx * \aIIy + \aIy * \aIIx;
                \AIIIx = (\tempx * \aIIx * \kIII - \tempx + \tempy)
                    / magnitudSegura(\tempx, \tempy);
                
            } else {
                \AIx = 1 / (\ax^2);
                \AIy = 0;
                
                \AIIx = -\AIx;
                \AIIy = 0;
                
                \AIIIx = \kIII - 1 / \ax;
                \AIIIy = 0;
            };
            
            if \iguales == 1 then {
                return (\AIx + \AIIx 
                        * exp(-\aIx * \t) * cos(rad(-\aIy * \t))
                    + \AIIIx 
                        * exp(-\aIIx * \t) * cos(rad(-\aIIy * \t))
                ) * u(\t);
            } else {
                return (\AIx + \AIIx 
                        * exp(-\ax * \t) * cos(rad(-\ay * \t))
                    + \AIIIx 
                        * \t * exp(-\ax * \t) * cos(rad(-\ay * \t))
                ) * u(\t);
            };
        };
    }
    
    \draw[->] (-2, 0) -- (0, 0) -- (6, 0)
        node[pos=0, below={2pt+0.1cm}] {$0$}
        node[midway, below=0.5cm] {tiempo};
    \foreach \x in {-1, 1, 2, ..., 5} {
        \draw (\x, 0.1) -- ++(0, -0.2) node[below=2pt] {$\x$};
    }
    \draw[->] (0, 0) -- (0, 3)
        node[midway, rotate=90, above=2pt] {Posición};
    
    \tikzmath { \definicion = 0.05; \inicio = -.5; \final = 1; }
    
    \tikzmath { \f = 2; \z = 0.5; \r = 0; }
    \foreach \x [parse=true, remember=\x as \xp (initially \inicio)] in 
        {\inicio + \definicion, \inicio + 2 * \definicion, ..., \final} 
    {         
        \draw[green, ultra thick] (\xp, {u(\xp) + 0.5}) 
            -- (\x, {u(\x) + 0.5});
        \draw[cyan, ultra thick] (\xp, {yReal(\xp, \f, \z, \r) * 10 + 0.5}) 
            -- (\x, {yReal(\x, \f, \z, \r) * 10 + 0.5});
    };
    
\end{tikzpicture}
\end{document}
```
%%  Crear graficos usando la teoria de señales, para crejar la respuesta al escalon %%

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    \tikzmath{
        
       coordinate \c;
       \c = (0, 1);
       
       \maximoSeguro = 16381;
        function magnitudSegura(\primero, \segundo) {
            \resultado = \maximoSeguro;
            if \primero <= \maximoSeguro && \primero <= sqrt(\maximoSeguro) then {
                \primeroCuadrado = \primero^2;
                
                if \segundo <= \maximoSeguro 
                    && \segundo <= sqrt(\maximoSeguro) then {
                    \segundoCuadrado = \segundo^2;
                    
                    \temp = \maximoSeguro - \segundoCuadrado;
                    if \primeroCuadrado <= \temp then {
                        \resultado = \primeroCuadrado + \segundoCuadrado;
                    };
                };
            };
            
            return \resultado;
        };
        
        \resultado = magnitudSegura(16381, 2);
    }
    \draw (0, 0) -- (\cx,\cy)
        node[midway, right=2pt] {$\resultado$};
\end{tikzpicture}
\end{document}
```

Donde $\zeta$ representa como se atenúa el sistema
* Si $\zeta = 0$ no se atenúa, y por lo tanto el sistema queda [[Resonancia|resonando]]
* Si $\zeta \in (0,~1)$, el sistema queda [[Circuito de segundo orden#Sobreamortiguado|sobreamortiguado]]
* Si $\zeta = 1$, el sistema queda [[Circuito de segundo orden#Críticamente amortiguado|críticamente amortiguado]]
* Si $\zeta > 1$ el sistema queda [[Circuito de segundo orden#Subamortiguado|subamortiguado]]

Donde $r$ representa la respuesta inicial del sistema
* Si $r = 0$, el sistema reacciona lento al [[Delta de Dirac|impulso]] 
* Si $r \in (0,~1]$, el sistema responde inmediatamente al impulso
* Si $r > 1$, el sistema se sobrepasa y vuelve al valor
* Si $r < 0$, el sistema anticipa el movimiento, que permite seguir el [[The Illusion of Life de Frank Thomas, Ollie Johnston#Anticipation|principio de anticipación]]

Para resolverla esta ecuación diferencial, podemos usar [[matemática/integrator/Índice|integradores]] que son métodos iterativos para la aproximación de soluciones de [[Ecuación diferencial ordinaria\|ecuaciones diferenciales ordinarias]], concretamente, del [[Problema de valor inicial|problema de valor inicial]] 

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```