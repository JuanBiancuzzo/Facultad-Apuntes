---
dia: 2024-08-29
tags:
  - ingeniería-en-informática/estructura/Microarquitectura
  - nota/facultad
aliases:
  - MIR en la arquitectura ARC
---
# Definición
---
```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.1, transform shape, thick]
    \tikzmath { 
        \ancho = 0.3; \alto = 3 * \ancho; 
        \sep = 0.1;
    }
    \foreach \i in {0, ..., 40} {
        \draw ({\i * \ancho}, 0) rectangle ++(\ancho, \alto);
    }
    
    \path (0, 0) node (temp) {};
    \foreach \largo [count=\i] in {6, 1, 6, 1, 6, 1, 1, 1, 4, 3, 11} {
        \fill[white] ($ (temp.center) + (\sep, \sep) $) 
            rectangle ++({\largo * \ancho - 2 * \sep}, {\alto - 2 * \sep});
        \path ($ (temp.center) + (0, \alto) $) -- ++({\largo * \ancho}, 0)
            node[midway] (centro\i) {};
        \path (temp.center) -- ++({\largo * \ancho}, 0)
            node (temp) {};
    }
    
    \path (centro1) node[above=2pt] {A};
    \path (centro2) node[align=center, above=2pt] {A\\M\\U\\X};
    \path (centro3) node[above=2pt] {B};
    \path (centro4) node[align=center, above=2pt] {B\\M\\U\\X};
    \path (centro5) node[above=2pt] {C};
    \path (centro6) node[align=center, above=2pt] {C\\M\\U\\X};
    
    \path (centro7) node[align=center, above=2pt] {R\\D};
    \path (centro8) node[align=center, above=2pt] {W\\R};
    
    \path (centro9) node[above=2pt] {ALU};
    \path (centro10) node[above=2pt] {COND};
    \path (centro11) node[above=2pt] {JUMP ADDR};
\end{tikzpicture}
\end{document}
```

Cada parte de la MIR tiene un propósito distinto
* A: Contiene la información que debe ser enviada por el [[Bus|bus]] A en caso de ser necesario
* Amux: Contiene un 1 si la información de A debe ser cargada en el bus A
* B: Contiene la información que debe ser enviada por el bus B en cado de ser necesario
* Bmux: Contiene un 1 si la información de B debe ser cargada en el bus B
* C: Contiene la información que debe ser enviada por el bus A en cado de ser necesario
* Cmux: Contiene un 1 si la información de C debe ser cargada en el bus C
* RD: Contiene un 1 si la instrucción es de lectura de la [[Memoria|memoria]]
* WR: Contiene un 1 si la instrucción es de escritura en memoria
* [[Unidad Aritmético Lógica|ALU]]: Contiene el código de la instrucción de la ALU a ser ejecutada. Si no se necesita ninguna instrucción se realiza alguna que no altere [[Unidad Aritmético Lógica#Flags|flags]]
* COND: Indica el tipo de salto que debe hacer luego de realizar la instrucción
* JUMP ADDR: Indica la dirección a la cual saltar en caso de que la condición lo indique

La [[Arquitectura del microprocesador#^decode|instrucción DECODE]] lee la instrucción del registro IR y determina la instrucción de la ROM que se debe ejecutar

Para obtener que instrucción de la [[Read Only Memory|ROM]] se debe realizar, se utiliza el OP, seguido del OP$3$. Con un total de $8$ bits. Como las instrucciones están en $11$ bits. El primer bit siempre vale $1$, mientras que los últimos dos bits siempre están en $0$

Para las [[Lenguaje assembler|instrucciones de Assembly]] que no contienen OP$3$, se le asigna a toda instrucción posible un mismo microcódigo, delegándole al mismo identificar cuál operación es. Por ejemplo
* branches
* sethi
* call

Para no repetir el microcódigo en cada instrucción, se puede utilizar la nanoprogramación. Consiste en remplazar la tabla de $2048$ words x $41$ bits por una tabla de $2048$ words x $7$ bits, donde se redirige a una nueva tabla de $100$ words x $41$ bits, la cual contiene el microcódigo para cada operación

### Tablas de operaciones
---
Los códigos de condición son los siguientes

| $C_2$ | $C_1$ | $C_0$ | Operación                        |
| :---: | :---: | :---: | :------------------------------- |
|  $0$  |  $0$  |  $0$  | Usar NEXT ADDR                   |
|  $0$  |  $0$  |  $1$  | Usar JUMP ADDR if n $= 1$        |
|  $0$  |  $1$  |  $0$  | Usar JUMP ADDR if z $= 1$        |
|  $0$  |  $1$  |  $1$  | Usar JUMP ADDR if v $= 1$        |
|  $1$  |  $0$  |  $0$  | Usar JUMP ADDR if c $= 1$        |
|  $1$  |  $0$  |  $1$  | Usar JUMP ADDR if IR\[13\] $= 1$ |
|  $1$  |  $1$  |  $0$  | Usar JUMP ADDR                   |
|  $1$  |  $1$  |  $1$  | DECODE                           |

Códigos de la ALU son los siguientes

| $F_3$ | $F_2$ | $F_1$ | $F_0$ | Operación     | Cambia el código de condición |
| ----- | ----- | ----- | ----- | ------------- | :---------------------------: |
| $0$   | $0$   | $0$   | $0$   | `ANDCC(A, B)` |              Si               |
| $0$   | $0$   | $0$   | $1$   | `ORCC(A, B)`  |              Si               |
| $0$   | $0$   | $1$   | $0$   | `NORCC(A, B)` |              Si               |
| $0$   | $0$   | $1$   | $1$   | `ADDCC(A, B)` |              Si               |
| $0$   | $1$   | $0$   | $0$   | `SRL(A, B)`   |              No               |
| $0$   | $1$   | $0$   | $1$   | `AND(A, B)`   |              No               |
| $0$   | $1$   | $1$   | $0$   | `OR(A, B)`    |              No               |
| $0$   | $1$   | $1$   | $1$   | `NOR(A, B)`   |              No               |
| $1$   | $0$   | $0$   | $0$   | `ADD(A, B)`   |              No               |
| $1$   | $0$   | $0$   | $1$   | `LSHIFT2(A)`  |              No               |
| $1$   | $0$   | $1$   | $0$   | `LSHIFT10(A)` |              No               |
| $1$   | $0$   | $1$   | $1$   | `SIMM13(A)`   |              No               |
| $1$   | $1$   | $0$   | $0$   | `SEXT13(A)`   |              No               |
| $1$   | $1$   | $0$   | $1$   | `INC(A)`      |              No               |
| $1$   | $1$   | $1$   | $0$   | `INCPC(A)`    |              No               |
| $1$   | $1$   | $1$   | $1$   | `RSHIFT5(A)`  |              No               |
