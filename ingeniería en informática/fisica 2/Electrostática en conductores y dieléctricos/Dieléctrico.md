---
dia: 2024-09-01
tags:
  - ingeniería-en-informática/fisica-2/Electrostática-en-conductores-y-dieléctricos
  - nota/facultad
aliases:
  - Aislante
---
# Definición
---
Los aislantes o dieléctricos no poseen [[Electrón|electrones]] libres, por lo que no será posible el desplazamiento de [[Carga eléctrica|carga]] a través de ellos

## Modelo elemental
---
* Cada [[Molécula|molécula]] del material adquiere un [[Momento dipolar dieléctrico|momento dipolar eléctrico]] inducido proporcional al [[Campo eléctrico|campo]] externo $\vec{E}$
* Las moléculas poseen una distribución de carga positiva y negativa, por lo que son reorientadas por el campo externo, en lugar de estar orientadas al azar

## Polarización
---
El dieléctrico se polariza por acción del campo eléctrico externo

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 

\definecolor{azul}{RGB}{135, 209, 244} 
\definecolor{azulOscuro}{RGB}{88, 166, 189} 
\definecolor{rojo}{RGB}{241, 186, 141} 
\definecolor{rojoOscuro}{RGB}{188, 143, 85} 
\definecolor{naranja}{RGB}{186, 91, 25}

\begin{tikzpicture}[scale=1.1, transform shape, thick]
    \tikzmath { 
        \scaleX = 3; \scaleY = 1.5; 
        \sigL1 = 0.05; \sigL2 = 0.25;
        \largo = 2; \alto = 0.8;
        \espesor = 0.05;
        \paso = 0.4;
    }
    
    \foreach \y [parse=true] in 
        {-2 * \alto, -2 * \alto + \paso, ..., (3 * \scaleY) + (2 * \alto)} 
    {
        \draw[naranja, opacity=0.8, ->] ({-1.5 * \largo}, \y) 
            -- ({2 * \scaleX + 1.5 * \largo}, \y);
    }
    \path ({-1.5 * \largo}, {-2 * \alto})
        -- ({2 * \scaleX + 1.5 * \largo}, {-2 * \alto})
            node[pos=0.8, below=2pt, scale=1.5] {$\vec{E}_0$};

    \foreach \angulo [count=\i from 0] in 
        {-10, 5, -15, 20, -8, 18, -12, 14, 12, 10, -2, 15} 
    {
        \tikzmath {
            \distX = \scaleX * mod(\i, 3);
            \distY = \scaleY * floor(\i / 3);
        }
        
        \begin{scope}[cm={cos(\angulo), -sin(-\angulo), sin(-\angulo), cos(\angulo), (\distX cm, \distY cm)}] 
        
        \filldraw[black] (0, 0) 
                circle ({\largo / 2 + \espesor} and {\alto / 2 + \espesor});
    
        \begin{scope}
            \clip ({-\largo / 2 - \espesor}, {-\alto / 2 - \espesor}) 
                rectangle (0, {\alto / 2 + \espesor});
            
            \fill[azul] (0, 0) 
                circle ({\largo / 2} and {\alto / 2});
            \draw[azulOscuro, ultra thick] (0, 0) 
                circle ({\largo / 2} and {\alto / 2});
            \fill[darkgray] ({- \sigL2 / 2 - \largo / 4}, {-\sigL1 / 2})
                rectangle ++(\sigL2, \sigL1);
        \end{scope}
        \begin{scope}
            \clip (0, {-\alto / 2 - \espesor}) 
                rectangle ({\largo / 2 + \espesor}, {\alto / 2 + \espesor});
            
            \fill[rojo] (0, 0) 
                circle ({\largo / 2} and {\alto / 2});
            \draw[rojoOscuro, ultra thick] (0, 0) 
                circle ({\largo / 2} and {\alto / 2});
                
            \fill[darkgray] ({-\sigL1 / 2 + \largo / 4}, {-\sigL2 / 2}) 
                rectangle ++(\sigL1, \sigL2);
            \fill[darkgray] ({- \sigL2 / 2 + \largo / 4}, {-\sigL1 / 2})
                rectangle ++(\sigL2, \sigL1);
        \end{scope}
        
        \draw[opacity=0.8] (0, {-\alto / 2}) -- ++(0, \alto);
        
        \end{scope}
    }
    
\end{tikzpicture}
\end{document}
```
Entonces podemos diferenciar dos tipos de cargas
* $Q_\text{libres}$: Vacío, [[Conductor|conductores]], dieléctricos 
* $Q_\text{polarización}$: Dieléctricos: $\delta_p$, $\sigma_p$

Ahora queremos calcular el campo eléctrico, a partir de la [[Teorema de Gauss#Para el campo eléctrico|ley de Gauss]] $$ {\subset\!\supset} \llap{\iint}_{S} \vec{E} ~ d\vec{s} = \frac{Q_{enc}}{\epsilon_0} $$
Como no sabemos las cargas de polarización, entonces vamos a asignar a cada tipo de carga un campo eléctrico
* [[Campo de desplazamiento]] ![[Campo de desplazamiento#^bcec0e]]  
* [[Campo de polarización]] ![[Campo de polarización#^e697cd]]

Si combinamos estas definiciones, llegamos a las [[Relación constitutiva#Para campo eléctrico|relación constitutiva]]