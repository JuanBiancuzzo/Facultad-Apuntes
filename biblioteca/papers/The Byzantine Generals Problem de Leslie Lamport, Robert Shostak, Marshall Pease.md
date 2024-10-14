---
dia: 2024-10-14
etapa: empezado
tipoCita: Paper
numReferencia: 348
autores:
  - apellido: Lamport
    nombre: Leslie
  - apellido: Shostak
    nombre: Robert
  - apellido: Pease
    nombre: Marshall
tituloInforme: The Byzantine Generals Problem
numeroInforme: 
anio: "1982"
editores: 
url: 
tags:
  - referencia/paper
  - biblioteca/paper
  - nota/investigacion
aliases:
  - Problema de los generales bizantinos
  - The Byzantine Generals Problem
referencias:
  - "347"
  - "286"
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Resumen
---
El problema de los generales bizantinos es un experimento mental para plantear, de una forma metafórica, el problema que se da entre un conjunto de sistemas informáticos que tienen un objetivo común. Deben encontrar un plan de acción común a partir de una estructura jerárquica, donde uno de los sistemas que tiene mayor rango proporciona una orden a partir de la cual el resto de sistemas tiene que operar (fijar su decisión). Además es posible que alguno de ellos no sea fiable y provea información falsa de forma intencionada<sup><a href="#ref-347" style="color: inherit; text-decoration: none;">[347]</a></sup> 

Para resolver el problema tenemos que buscar algoritmos que nos permitan conseguir alguno de los siguiente objetivos
1. Todos los tenientes leales toman la misma decisión
2. Si el comandante es leal, entonces todos los tenientes leales realizan la orden que él decidió

## Resultados imposibles
---
Suponiendo que el [[Paquete|mensaje]] no tiene forma de perderse ni corromperse, no hay solución que sirva salvo que más de $2/3$ de los nodos sean fiables

Veamos el caso donde solo hay $3$ [[Nodo|nodos]], no hay solución que funcione si uno de los $3$ no es fiable. Considerando que solo hay dos mensajes (haciendo alusión a la analogía del problema) "atacar" y "retirarse", veamos el siguiente escenario donde el nodo no fiable no es el comandante, sino que es uno de los dos tenientes no es fiable

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    \tikzmath {
        \radio = 0.9; \distancia = 3 + 2 * \radio; \angulo = 40; \sep = \radio / 2;
    }
    
    \coordinate (dirPos) at ({cos(270 + \angulo)}, {sin(270 + \angulo)});
    \coordinate (dirNeg) at ({cos(270 - \angulo)}, {sin(270 - \angulo)});
    \coordinate (comandante) at (0, 0);
    
    \draw (comandante) circle (\radio) node[scale=0.8] {Comandante};
    \draw ($ (comandante)!\distancia!(dirNeg) $) circle (\radio) 
        node[scale=0.8, align=center] {Teniente $1$};
    \begin{scope}[cm={1, 0, 0, 1, ($ (comandante)!\distancia!(dirPos) $)}]        
        \draw (0, 0) circle (\radio);
        \clip (0, 0) circle (\radio);
        \tikzmath { \inter = 0.2; }
        \foreach \x [parse=true] in 
            {-3 * \radio - \inter, -3 * \radio, ..., \radio + \inter} 
        {
            \draw[thin] (\x, -\radio) -- ++({2 * \radio}, {2 * \radio});
        }
        
        \path (0, 0) node[scale=0.8, fill=white, align=center] {Teniente $2$};
    \end{scope}
    
    \draw[->, ultra thick, shorten >=\sep cm, shorten <=\sep cm] 
        ($ (comandante) + (0, 0)!\radio!(dirPos) $) 
            -- ($ (comandante)!\distancia - \radio!(dirPos) $)
        node[midway, above=2pt, rotate=270 + \angulo, scale=0.8] {"Atacar"};
    
    \draw[->, ultra thick, shorten >=\sep cm, shorten <=\sep cm] 
        ($ (comandante) + (0, 0)!\radio!(dirNeg) $) 
            -- ($ (comandante)!\distancia - \radio!(dirNeg) $)
        node[midway, above=2pt, rotate=90 - \angulo, scale=0.8] {"Atacar"};
        
    \draw[->, ultra thick, shorten >=\sep cm, shorten <=\sep cm] 
        ($ (comandante)!\distancia!(dirPos) + (-\radio, 0) $)
            -- ($ (comandante)!\distancia!(dirNeg) + (\radio, 0) $)
        node[midway, above=2pt, scale=0.7] {Dijo "Retirarse"};
    
\end{tikzpicture}
\end{document}
```

A pesar que el comandante le dijo "atacar" a ambos, como el teniente $2$ le dice al teniente $1$ de retirarse

Ahora consideremos el escenario donde el comandante es el que no es confiable

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    \tikzmath {
        \radio = 0.9; \distancia = 3 + 2 * \radio; \angulo = 40; \sep = \radio / 2;
    }
    
    \coordinate (dirPos) at ({cos(270 + \angulo)}, {sin(270 + \angulo)});
    \coordinate (dirNeg) at ({cos(270 - \angulo)}, {sin(270 - \angulo)});
    \coordinate (comandante) at (0, 0);
    
    \begin{scope}[cm={1, 0, 0, 1, (comandante)}]        
        \draw (0, 0) circle (\radio);
        \clip (0, 0) circle (\radio);
        \tikzmath { \inter = 0.2; }
        \foreach \x [parse=true] in 
            {-3 * \radio - \inter, -3 * \radio, ..., \radio + \inter} 
        {
            \draw[thin] (\x, -\radio) -- ++({2 * \radio}, {2 * \radio});
        }
        
        \path (0, 0) node[scale=0.8, fill=white, align=center] {Comandante};
    \end{scope}
    
    \draw ($ (comandante)!\distancia!(dirNeg) $) circle (\radio) 
        node[scale=0.8, align=center] {Teniente $1$};
    \draw ($ (comandante)!\distancia!(dirPos) $) circle (\radio) 
        node[scale=0.8, align=center] {Teniente $2$};
    
    \draw[->, ultra thick, shorten >=\sep cm, shorten <=\sep cm] 
        ($ (comandante) + (0, 0)!\radio!(dirPos) $) 
            -- ($ (comandante)!\distancia - \radio!(dirPos) $)
        node[midway, above=2pt, rotate=270 + \angulo, scale=0.8] {"Retirarse"};
    
    \draw[->, ultra thick, shorten >=\sep cm, shorten <=\sep cm] 
        ($ (comandante) + (0, 0)!\radio!(dirNeg) $) 
            -- ($ (comandante)!\distancia - \radio!(dirNeg) $)
        node[midway, above=2pt, rotate=90 - \angulo, scale=0.8] {"Atacar"};
        
    \draw[->, ultra thick, shorten >=\sep cm, shorten <=\sep cm] 
        ($ (comandante)!\distancia!(dirPos) + (-\radio, 0) $)
            -- ($ (comandante)!\distancia!(dirNeg) + (\radio, 0) $)
        node[midway, above=2pt, scale=0.7] {Dijo "Retirarse"};
    
\end{tikzpicture}
\end{document}
```


En este caso, el comandante manda el mensaje de atacar al teniente $1$ y de retirarse al teniente $2$, haciendo que el teniente $2$ reporte que se deberían retirar al teniente $1$

Como los nodos confiables no saben cuales son los nodos no confiables, ambos escenarios son exactamente iguales para el teniente $1$, por lo tanto siguiendo el objetivo $2$ debe hacer lo que dice el comandante, y por lo tanto si no es confiable el comandante, no se cumple el objetivo $1$

Para una justificación formal ver [[Reaching Agreement in the Presence of Faults de Marshall Pease, Robert Shostak, Leslie Lamport|Reaching Agreement in the Presence of Faults de Marshall Pease, Robert Shostak, Leslie Lamport]]




# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```