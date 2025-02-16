---
dia: 2023-04-29
tags:
  - ingeniería-en-informática/estructura/Registros-y-contadores
  - nota/facultad
  - ingeniería-electrónica/estructura/Registros-y-contadores
aliases:
  - Acumulador
referencias:
  - "665"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Tienen la capacidad de guardar información, y su estructura se conforma por $n$ [[Flip-Flop D sincrónico|flip-flop operando sincrónicamente]] y [[Compuerta lógica|compuertas lógicas]]

Veamos un ejemplo con [[Flip-Flop D sincrónico|flip-flop d sincrónicos]]

```tikz
\usepackage{circuitikz} 

\tikzset{
  flipflop D mod/.style={
    flipflop,
    flipflop def={ t1=D, t6=Q, c3=1, td={RES}, nd=1}
  },
}

\begin{document} 
\begin{circuitikz}[american, voltage shift=0.5, scale=1.1, transform shape, thick]

%%% NODES
	\node[flipflop D mod] (d0) {};
	\node[flipflop D mod] (d1) at ($ (d0.center) + (3, 0) $) {};
	\node[flipflop D mod] (d2) at ($ (d1.center) + (3, 0) $) {};
	\node[flipflop D mod] (d3) at ($ (d2.center) + (3, 0) $) {};

	\node[not port, scale = 0.7] (not) at ($ (d0.pin 3) + (-1.25, -1.5) $) {};
%%% DRAW
	\draw ($ (d0.pin 3) + (-2, -1.5) $) node[left=2pt] {Clr}
		to[short, o-] (not.in);
	\draw (not.out) 
		to ($ (not.out -| 0, 0) + (d3.down |- 0, 0) $)
		to (d3.down);

	\draw ($ (d0.pin 3) + (-2, -2.3) $) node[left=2pt] {Ck}
		to[short, o-] ($ (d0.pin 3 -| 0, 0) + (-0.1, -2.3) + (d3.pin 3 |- 0, 0) $)
		to ($ (d3.pin 3) + (-0.1, 0) $)
		to (d3.pin 3);
	

	\foreach \d/\Q in {d0/0, d1/1, d2/2, d3/3} {
		\draw (\d.pin 1)
			to ($ (\d.pin 1) + (-0.1, 0) $)
			to[short, -o] ($ (\d.pin 1) + (-0.1, 1) $)
			node[above=2pt] {D\Q};
		\draw (\d.pin 6)
			to ($ (\d.pin 6) + (0.1, 0) $)
			to[short, -o] ($ (\d.pin 6) + (0.1, -4.7) $)
			node[below=2pt] {Q\Q};
	}

	\foreach \d in {d0, d1, d2} {
		\draw (\d.pin 3)
			to ($ (\d.pin 3) + (-0.1, 0) $)
			to[short, -*] ($ (\d.pin 3) + (-0.1, -2.3) $);
		\draw (\d.down)
			to[short, -*] ($ (\d.down |- 0, 0) + (0, -1.5) + (\d.pin 3 -| 0, 0) $);
	}
	

\end{circuitikz}
\end{document}
```

Este [[Circuito secuencial|circuito secuencial]] nos permite guardar 4 bits de información cada vez que se active el reloj

A diferencia de los [[Registro de desplazamiento|registros de desplazamiento]], es decir en serie, estos registros nos permiten leer la información en paralelo, es decir que leemos todos los bits al mismo tiempo

Este tipo de registro permite reducir el costo en tiempo para la comunicación, en intercambio por los cables adicionales que se necesitan

## Registro usando núcleos magnéticos
---
Anteriormente, se usaban núcleos magnéticos para guardar información, donde se hace pasar una corriente entrante o saliente, para producir un [[Ley de Faraday#Ley de Faraday-Lenz|flujo]] en dirección horaria, o antihoraria respectivamente

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    \tikzmath { 
        \radioInt = 0.2; \radioExt = 0.5;
        \separacion = 1.5;
    }
    
    \foreach \dir [count=\i] in {1, -1, -1, 1} {
        \tikzmath { 
            \posX = \i * \separacion; 
            \flecha = \dir > 0 ? "<-" : "->";
            \escalaX = cos(45); \escalaY = sin(45);
        }
        
        \begin{scope}[cm={1, 0, 0, 1, (\posX, 0)}]
        
        \draw (0, 0) circle (\radioInt);
        \draw (0, 0) circle (\radioExt);
        
        \draw ({\escalaX * \radioExt}, {\escalaY * \radioExt}) 
            -- ++({\radioExt / 2}, {\radioExt / 2});
        \draw ({\escalaX * \radioInt}, {\escalaY * \radioInt}) 
            -- ({-1.5 * \escalaX * \radioExt}, {-1.5 * \escalaY * \radioExt});
        
        \draw[\flecha] (
            {-1.7 * \escalaX * \radioExt}, 
            {-1.7 * \escalaY * \radioExt}
        ) -- ++(-0.3, -0.3) node[below left=2pt, scale=0.8] {$\i$};
        
        \tikzmath { 
            \radio = (\radioExt + \radioInt) / 2; 
            \angInicial = 45; \angFinal = 120;
        }
        \draw[\flecha] ({cos(\angInicial) * \radio}, {sin(\angInicial) * \radio}) 
            arc (\angInicial : \angFinal : \radio);
        
        \end{scope}
    }

\end{tikzpicture}
\end{document}
```

Los núcleos mantienen el flujo magnético, incluso cuando no hay corriente que los magnetice ya que tienen una [[Curva de Histéresis|curva de histéresis]] en cuanto a su magnetización

## Registro usando transistores
---
Se puede crear un registro simple usando un [[Transistor bipolar de juntura|TBJ]] de la siguiente forma 

```tikz
\usepackage[
	straightvoltages,
	americancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester
]{circuitikz} 

\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
	inductors/scale=0.7,
	cute inductors,
}

\begin{document} 
	\begin{circuitikz}[
		voltage shift=0.5, scale=1.3, transform shape, thick,
		loops/.style={circuitikz/inductors/coils=#1}
	]
	
    	\coordinate (cT1) at (0, 0) {};
    	\coordinate (cT2) at (4, 0) {};
    	
    	\tikzmath { \radio = 0.75; \sep = 0.15; }
    	\begin{scope}
        	\draw (cT1) circle (\radio);
        	\clip (cT1) circle (\radio);
        	\foreach \x [parse=true] in 
            	{-3 * \radio, -3 * \radio + \sep, ..., \radio} 
            {
            	\draw[thin] ($ (cT1) + (\x, -\radio) $) 
                	-- ++({2 * \radio}, {2 * \radio});
        	}
    	\end{scope}
    	
    	\filldraw[fill=gray] (cT2) circle (0.75);
	
    	\draw (cT1) node[npn, yscale=1.5] (T1) {};
    	\path ($ (cT1) + (0.3, 0) $) node {T1};
    	\draw (cT2) node[npn, yscale=1.5] (T2) {};
    	\path ($ (cT2) + (0.3, 0) $) node {T2};
    	
    	\draw (T1.C) to[short, -o] ++(0.5, 0) node[right=2pt] {$5$ V};
    	\draw (T1.C) to[R, l^=$1$ K] ++(0, 2) node (temp) {}
        	to[short] (temp.center -| T2.C)
        	to[short, -o] ++(2, 0) node[right=2pt] (fuente) {$5$ V};
        \draw (T1.E) node[tlground] {};
        \draw (T1.B) to ++(-0.5, 0) to[R, l_=$10$ K] ++(0, -2.5)
            node[tlground] {};
        
        \draw (T2.C) to[short, -o] ++(0.5, 0) node[right=2pt] {$\approx 0$ V};
        \draw (T2.C) to[R, l^=$1$ K, -*] (T2.C |- fuente.center);
        \draw (T2.E) node[tlground] {};
        \draw (T2.B) to ++(-0.5, 0) to[R, l_=$10$ K] ++(0, -2.5)
            node[tlground] {};
        
	
	\end{circuitikz}
\end{document}
```

Ya que en el colector de T1 esta a $5~V$ este termina estando [[Corte del transistor bipolar de juntura|cortado]], mientras que T2 esta en [[Saturación del transistor bipolar de juntura|saturación]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```