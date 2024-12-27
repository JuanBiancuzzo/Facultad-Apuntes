---
dia: 2024-07-28
tags:
  - ingeniería-en-informática/algo-1/Lenguaje-C
  - nota/facultad
  - data-structures
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - ingeniería-electrónica/algo-1/Lenguaje-C
etapa: ampliar
aliases:
  - Arreglo
  - Vector unidimensional
---
# Definición
---
Se define un array como una colección de elementos, contigua en [[Memoria|memoria]], tiene la ventaja de ser eficiente por la utilización del [[Cache|cache]] en los [[Procesador|procesadores]]

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    
    

\end{tikzpicture}
\end{document}
```
^representacion-visual

## En C
---
[[American National Standards Institute (ANSI) (Instituto Nacional Estadounidense de Estándares)|ANSI]] C proporciona un [[Tipo de dato compuesto|tipo de dato estructurado]] capaz de almacenar una colección secuencial y finita de elementos del mismo tipo de datos

Para declarar un vector en [[Lenguaje C|C]], se debe especificar el tipo de dato de los componentes y el número de elementos 

```c
tipo_de_dato nombre_del_vector[ tamaño ];
```

Cabe aclarar que no se puede modificar el tamaño de un array. También como observación, se puede hacer una referencia a un array mediante un puntero, ya que sabemos que se tiene una region contigua de memoria por lo que ir al siguiente elemento es avanzar el tamaño del tipo de dato, a esto se lo conoce como [[Aritmética de punteros|aritmética de punteros]]