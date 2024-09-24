---
dia: 2024-09-10
tags:
  - embebidos/Diseño-desarrollo-y-depuración
  - nota/facultad
aliases:
  - State Machine
  - Finite State Machine
  - FSM
  - Máquina de estados finitos
referencias:
  - "240"
---
# Definición
---
Una máquina de estados es un [[Modelo|modelo]] de comportamiento. Consta de un número finito de estados y, por lo tanto, también se denomina máquina de estados finitos

Según el estado actual y una entrada determinada, la máquina realiza transiciones de estado y produce resultados

Hay tipos básicos como las [[Máquina Mealy|máquinas Mealy]] y [[Máquina de Moore|Moore]] y tipos más complejos como los [[Diagrama de estado Harel|diagrama de estado Harel]] y [[Unified modelling language#Diagrama de estado|UML]]

## Componentes
---
Los componentes básicos de una máquina de estados son
* Los estados
* Las transiciones

Un estado es una situación de un sistema que depende de entradas anteriores y provoca una reacción a las entradas siguientes

Un estado está marcado como estado inicial, aquí es donde comienza la ejecución de la máquina

Una transición de estados define para qué entrada se cambia un estado de uno a otro

Dependiendo del tipo de máquina de estados, los estados y/o transiciones producen salidas

## Implementación
---
Tenemos múltiples opciones para codificar en [[algo 1/Lenguaje C/Resumen|C]] diagramas de estados finito, a saber
* Mediante combinaciones de [[Switch statement#En C|switch]], múltiples [[If statement#En C|if]] o punteros a función
* Tablas de estados de una o dos dimensiones
* [[Patrones de diseño (Gang of four)|Patrones de diseños]] de estado [[Programación oientada a objetos (OOP) (POO)|orientados a objetos]]
* Otras técnicas que combinan a las anteriores ([[Framework|frameworks]])

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1, transform shape, thick]
    \tikzmath { \ancho = 1.4; \alto = 0.6; }
    
    \foreach \i [count=\x from 0] in {1, ..., 4} {
        \foreach \j [count=\y from 0] in {2, 1} {
            \draw ({\x * 2 * \ancho}, {\y * 2 * \alto})
                rectangle ++({2 * \ancho}, {2 * \alto})
                    node[midway] (mid-\i\j) {};
        }
        \draw ({\x * 2 * \ancho}, {4 * \alto})
            rectangle ++({2 * \ancho}, \alto);
        \path ({\x * 2 * \ancho}, {4.5 * \alto}) node (mid-\i3) {};
    }
    \draw (0, {5 * \alto}) rectangle ++({8 * \ancho}, \alto);
    \path (0, {5.5 * \alto}) node (mid-14) {};
    
    
    \begin{scope}[font=\bfseries]
        \tikzmath { \total = 1.5 * \ancho; \porcen = 0.25; }
        \draw (-\total, 0) rectangle ++({\porcen * \total}, {4 * \alto})
            node[midway, rotate=-90] {State $\to$};
        \draw (0, 0) rectangle ++({(\porcen - 1) * \total}, {2 * \alto})
            node[midway] {Timing};
        \draw (0, {2 * \alto}) 
            rectangle ++({(\porcen - 1) * \total}, {2 * \alto})
                node[midway] {Setting};
    \end{scope}
    
    \begin{scope}[opacity=0.8, align=center, font=\sffamily]
        \path (mid-11) node {setting\_UP(),\\setting};
        \path (mid-12) node {timing\_UP(),\\timing};
        
        \path (mid-21) node {setting\_DOWN(),\\setting};
        \path (mid-22) node {timing\_DOWN(),\\timing};
        
        \path (mid-31) node {setting\_ARM(),\\timing};
        \path (mid-32) node {timing\_ARM(),\\setting(*)};
        
        \path (mid-41) node {empty(),\\setting};
        \path (mid-42) node {timing\_TICK(),\\timing(**)};
    \end{scope}
    
    \begin{scope}[font=\bfseries]
        \tikzmath { \sep = 0.05cm; }
        \path (mid-13) node[right=\sep] {UP};
        \path (mid-23) node[right=\sep] {DOWN};
        \path (mid-33) node[right=\sep] {ARM};
        \path (mid-43) node[right=\sep] {TICK};
        
        \path (mid-14) node[right=\sep] {Events $\to$};
    \end{scope}


\end{tikzpicture}
\end{document}
```

Notas
* `(*)` La transición a `setting` se ejecuta cuando `me->code == me->defuse`
* `(**)` La autotransición a `timing` se ejecuta cuando `(e->fine_time == 0) and (me->timeout != 0)`

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```