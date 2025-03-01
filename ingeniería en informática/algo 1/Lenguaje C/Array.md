---
dia: 2024-07-28
tags:
  - ingeniería-en-informática/algo-1/Lenguaje-C
  - nota/facultad
  - data-structures
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - carrera/ingeniería-electrónica/algo-1/Lenguaje-C
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-zig
etapa: ampliar
aliases:
  - Arreglo
  - Vector unidimensional
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se define un array como una colección de elementos, contigua en [[Memoria|memoria]], tiene la ventaja de ser eficiente por la utilización del [[Cache|cache]] en los [[Procesador|procesadores]]

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \largo = 8; }
    
    \foreach \valor [count=\i from 0] in {5, 2, 4, 8, 6, 7, 3, 1} {
        \draw (\i, 0) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, 1) -- ++(1, 0) node[midway, above=2pt] {$\i$};
        \path (\i, 0) -- ++(1, 0) 
            node[pos=0, below=0.3cm] (izq_\i) {}
            node[pos=1, below=0.3cm] (der_\i) {};
    }
    
    \draw[<->, shorten <= 0.1cm, shorten >= 0.1cm] (izq_0) 
        -- (der_7) node[midway, below=2pt, scale=0.8] 
            {La longitud del array es $\largo$};

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

Una vez inicializado, se puede acceder de la siguiente forma

```c
// inicializado
int vector[8] = {5, 2, 4, 8, 6, 7, 3, 1};

// Modificando el primer elemento al vector
vector[0] = 1; // estado del vector {1, 2, 4, 8, 6, 7, 3, 1}
```

## En Zig
---
