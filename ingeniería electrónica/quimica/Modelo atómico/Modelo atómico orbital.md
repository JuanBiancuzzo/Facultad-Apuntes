---
dia: 2026-03-05
etapa: empezado
referencias: []
aliases: 
  - Número cuántico principal#^numero-principa
  - Número cuántico azimutal#^numero-azimutal
  - Número cuántico magnético#^numero-magnetico
  - Número cuántico de Spin#^numero-spin
tags:
  - carrera/ingeniería-electrónica/quimica/modelo-atómico
  - nota/facultad
vinculoFacultad:
  - tema: Modelo atómico
    capitulo: 1
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Partiendo del [[ingeniería electrónica/quimica/Modelo atómico/Modelo de Bohr|modelo de Bohr]] se agregan $3$ postulados que lo confirman, expanden y profundizan
1. Naturaleza Ondulatoria de la Materia, o principio de De Broglie
    * Toda partícula material, en movimiento, posee simultáneamente propiedades ondulatorias
2. [[ingeniería electrónica/fisica 3/Postulados y operadores de la mecánica cuántica/Principio de incertidumbre de Heisenberg|Principio de incertidumbre de Heisenberg]] 
    * Es imposible conocer simultáneamente y con precisión, la posición y la velocidad de una micropartícula
3. [[Función de onda|Ecuación de onda]]
    * Propone una ecuación que brinda [[ingeniería en informática/algo 1/Introducción a la programación/Información|información]] sobre la región donde es más probable encontrar al [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrón]]
4. [[Principio de exclusión de Pauli|Principio de exclusión de Pauli]]
    * En un átomo, no pueden existir dos electrones con los mismo valores de sus cuatro números cuánticos

La solución de la ecuación de onda asociada a cada electrón da como resultado $4$ [[ingeniería en informática/algebra 2/Autovalores y autovectores/Autovalor|autovalores]] y que se los conoce como números cuánticos. Con estos $4$ números cuánticos se puede representar completamente un átomo
1. Número cuántico principal $n$ ^numero-principa
    * Sólo puede tomar valores [[licenciatura en ciencias matemáticas/algebra 1/Números naturales e Inducción/Números Naturales|naturales]]
    * Caracteriza el tamaño del orbital
    * Se puede interpretar como el nivel energético
2. Número cuántico azimutal $l$ ^numero-azimutal
    *  Sólo puede tomar valores [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Números enteros|enteros]] entre $0$ y $n - 1$ 
    * Caracteriza la forma del orbital
        * Para $l = 0$ tienen forma de esfera
        * Para $l = 1$ tienen forma lobular
    * Se puede interpretar como el subnivel energético
    * Se simboliza con letras
        * $0$ representado por $s$
        * $1$ representado por $p$
        * $2$ representado por $d$
        * $3$ representado por $f$
        * $4$ representado por $g$
3. Número cuántico magnético $m$ ^numero-magnetico
    *  Sólo puede tomar valores enteros entre $-l$ y $+l$
    * Caracteriza la orientación del orbital
        * Para un mismo subnivel (mismo $l$) puede haber varios orbitales que sólo difieren en su disposición espacial
    * Representa cantidad de orbitales con la misma energía
4. Número cuántico de Spin $s$ ^numero-spin
    *  Sólo puede los valores $-\frac{1}{2}$ y $+\frac{1}{2}$
    * Caracteriza el sentido de giro del electrón de un orbital
    * Por orbital entran $2$ electrones, por el principio de exclusión de Pauli mencionado antes

Por lo que podemos armar la tabla

```tikz
\usetikzlibrary{fit, matrix}
\usetikzlibrary{math}

\begin{document}
\definecolor{azul}{RGB}{0, 127, 204}

\tikzset{ 
    table/.style={
	    matrix of nodes,    
	    text depth=0.5ex,
        text height=2ex,
        nodes in empty cells,
            
        nodes={
            % rectangle,
            % draw=black,
            align=center,
            text width=4em,
            font=\bfseries
        },        

        row 1/.style={
            nodes={
                fill=azul,
                draw=black,
                font=\bfseries
            }
        },
        
        column 3/.style={
            nodes={ text width=15em }
        },
        column 4/.style={
            nodes={ text width=6em }
        }
    }
}
\begin{tikzpicture}
    \tikzmath { \n = 5; \filas = (\n * (\n + 1)) / 2 + 1; }

    \matrix (table) [table] {
        $n$ & $l$ & $m$ & Orbitales \\
        $1$ & $0$ & $0$ & $1$s \\ % 1
        
        & $0$ & $0$ & $2$s \\ % 2
        & $1$ & $-1,~ 0,~ 1$ & $3 \times 2$p \\
        
        & $0$ & $0$ & $3$s \\ % 3
        & $1$ & $-1,~ 0,~ 1$ & $3 \times 3$p \\ 
        & $2$ & $-2,~ -1,~ 0,~ 1,~ 2$ & $5 \times 3$d \\ 
        
        & $0$ & $0$ & $4$s \\ % 4
        & $1$ & $-1,~ 0,~ 1$ & $3 \times 4$p \\ 
        & $2$ & $-2,~ -1,~ 0,~ 1,~ 2$ & $5 \times 4$d \\ 
        & $3$ & $-3,~ -2,~ -1,~ 0,~ 1,~ 2,~ 3$ & $7 \times 4$f \\ 
        
        & $0$ & $0$ & $5$s \\ % 5
        & $1$ & $-1,~ 0,~ 1$ & $3 \times 5$p \\ 
        & $2$ & $-2,~ -1,~ 0,~ 1,~ 2$ & $5 \times 5$d \\ 
        & $3$ & $-3,~ -2,~ -1,~ 0,~ 1,~ 2,~ 3$ & $7 \times 5$f \\ 
        & $3$ & $-4,~ -3,~ -2,~ -1,~ 0,~ 1,~ 2,~ 3,~ 4$ & $9 \times 5$g\\ 
    };
    
    \foreach \x in {1, ..., \filas} {
        \foreach \y in {2, 3, 4} {
            \draw (table-\x-\y.north -| table-\x-\y.east)
                rectangle (table-\x-\y.south -| table-\x-\y.west);
        }
    }
    \foreach \x in {1, 2} {
        \draw (table-\x-1.north -| table-\x-1.east)
            rectangle (table-\x-1.south -| table-\x-1.west);
    }

    \foreach \desde/\hasta [count=\i from 2] in {3/4, 5/7, 8/11, 12/16} {
        \draw (table-\desde-1.north -| table-\desde-1.east)
            rectangle (table-\hasta-1.south -| table-\hasta-1.west)
                node[midway, font=\bfseries, align=center] {$\i$};
    }

\end{tikzpicture}
\end{document}
```
