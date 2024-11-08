---
dia: 2023-04-03
etapa: ampliar
referencias:
  - "196"
  - "196"
tags:
  - nota/investigacion
  - algoritmos
  - matemática/encoding/lossless-compression-encoding
  - ingeniería-en-informática/orga/Compresión
orden: 355
aliases:
  - Huffman Codes
  - Huffman Coding
  - Huffman's algorithm
  - Huffman Encoding Algorithm
  - Codificación de Huffman
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });;
```
# Definición
---
Este proceso de compresión, no se pierde [[Información|información]], es decir que entra en la categoría de [[Lossless Compression|lossless compression]]. También tiene las propiedades de que por cada símbolo existe un único código representándolo, y que solo exista una única forma de decodificarlo

Este es un método de codificación donde optimiza la cantidad de [[Información#Bit|bits]] enteros para conseguir la [[Entropía de shannon|entropía de shannon]]

Dado una cadena de símbolos, y creamos para cada simbolo un [[Árbol binario|árbol binario]] donde la raíz es la cantidad de veces que aparece y la hoja el simbolo correspondiente

Ahora se crea una lista ordenada de menor a mayor, siempre agarrando los primeros dos, creando un árbol binario donde las hojas de ese árbol son los dos árboles agarrados y la raíz es la suma de las raíces de los dos árboles agarrados. Cuando se termina este proceso, se vuelve agregar ordenadamente este nuevo árbol a la lista

Por ejemplo, si se tiene un árbol $(3, \text{'A'})$ y $(4, \text{'B'})$ el nuevo árbol va a ser $(7, (\text{'A'}, \text{'B'}))$.

Cuando se termina el proceso, es decir que en la lista solo hay un árbol, este es la representación de Huffman, donde todas las ramas que vayan para la izquierda se codifican agregando un $0$ y a la derecha agregando un $1$

## Ejemplo
---
Podemos pensarlo como dado un [[Conjunto|conjunto]] de símbolos, que preguntas deberíamos hacer para determinar que símbolo se envío. Como vamos a usar bits solo se puede preguntas donde la respuesta puede ser sí o no

Tomemos el conjunto $$ X = \begin{cases} 
    A \to \mathbb{P}(A) = 0.25 \\
    B \to \mathbb{P}(B) = 0.25 \\
    C \to \mathbb{P}(C) = 0.25 \\
    D \to \mathbb{P}(D) = 0.25 \\
\end{cases} $$
Por lo tanto podemos hacer las siguientes preguntas 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    
    \tikzmath { \largo = 1; \reduccion = 0.7; }
    \coordinate (dirIzq) at ({-2 * \largo}, {-1.5 * \largo});
    \coordinate (dirDer) at ({ 2 * \largo}, {-1.5 * \largo});
    
    \coordinate (centro) at (0, 0);
    \coordinate (preguntaIzq) at ($ (dirIzq) + (-\largo, -\largo) $);
    \coordinate (preguntaDer) at ($ (dirDer) + ( \largo, -\largo) $);
    
    \foreach \posicion/\escala in 
        {centro/1, preguntaIzq/\reduccion, preguntaDer/\reduccion} 
    {
        \draw[cyan] ($ (\posicion) + (\largo, 0) $)
            -- ++(-\largo,  \largo)
            -- ++(-\largo, -\largo)
            -- ++( \largo, -\largo)
            -- ++( \largo,  \largo);
        
        \draw[green] ($ (\posicion) + (-\largo, 0) $)
            -- ++($ (0, 0)!\escala!(dirIzq |- 0, 0) $)
                node[midway, above=2pt, black] {$1$}
            -- ++(dirIzq -| 0, 0);
        \draw[red] ($ (\posicion) + (\largo, 0) $)
            -- ++($ (0, 0)!\escala!(dirDer |- 0, 0) $)
                node[midway, above=2pt, black] {$0$}
            -- ++(dirDer -| 0, 0);
    }
    
    \path (centro) node[align=center, scale=0.8] {$X = A$\\ó\\$X = B$?};
    \path (preguntaIzq) node[scale=0.8] {$X = A$?};
    \path (preguntaDer) node[scale=0.8] {$X = C$?};
    
    \coordinate (A) at ($
        (preguntaIzq) + (0, 0)!\reduccion!(dirIzq |- 0, 0) + (dirIzq -| -\largo, 0)
    $);
    \coordinate (B) at ($
        (preguntaIzq) + (0, 0)!\reduccion!(dirDer |- 0, 0) + (dirDer -|  \largo, 0)
    $);
    \coordinate (C) at ($
        (preguntaDer) + (0, 0)!\reduccion!(dirIzq |- 0, 0) + (dirIzq -| -\largo, 0)
    $);
    \coordinate (D) at ($
        (preguntaDer) + (0, 0)!\reduccion!(dirDer |- 0, 0) + (dirDer -|  \largo, 0)
    $);
    
    \tikzmath { \largo = 1; \alto = 0.6; }
    \foreach \letra/\repre in {A/11, B/10, C/01, D/00} {
        \draw[rounded corners] ($ (\letra) + ({-\largo/2}, {-\alto}) $)
            rectangle ++(\largo, \alto);
        \path ($ (\letra) + (0, {-\alto/2}) $)  node[scale=0.8] {$\letra$};
        \path ($ (\letra) + (0, -\alto) $) node[below=2pt, scale=0.8] {$\repre$};
    }

\end{tikzpicture}
\end{document}
```


Si tenemos otro caso donde las probabilidades no son todas iguales, como el siguiente $$ X = \begin{cases} 
    A \to \mathbb{P}(A) = \frac{2}{11} \\
    B \to \mathbb{P}(B) = \frac{3}{11} \\
    C \to \mathbb{P}(C) = \frac{1}{11} \\
    D \to \mathbb{P}(D) = \frac{5}{11} \\
\end{cases} $$ notemos que si multiplicamos por $11$ las probabilidades, sigue manteniendo el orden, y lo podemos relacionar a las apariciones de cada símbolo en un mensaje

Entonces construimos el árbol de abajo para arriba, con los nodos menos probables al fondo

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    
    \tikzmath { \radio = 0.5; \alto = 2 * \radio; \ancho = 0.7 * \alto; }
    \coordinate (dirIzq) at ({ -2 * \alto }, { -2 * \alto });
    \coordinate (dirDer) at ({  2 * \alto }, { -2 * \alto });
    
    \coordinate (nodo11) at (0, 0);
    
    \coordinate (D) at ($ (nodo11) + (dirIzq) $);
    \coordinate (nodo6) at ($ (nodo11) + (dirDer) $);
    
    \coordinate (B) at ($ (nodo6) + (dirIzq) $);
    \coordinate (nodo3) at ($ (nodo6) + (dirDer) $);
    
    \coordinate (C) at ($ (nodo3) + (dirIzq) $);
    \coordinate (A) at ($ (nodo3) + (dirDer) $);
    
    \foreach \num in {3, 6, 11} {
        \draw[yellow] (nodo\num) circle (\radio) node {$\num$};
    }
    
    \tikzmath { \porcen = 0.7; }
    \foreach \letra/\num in {A/2, B/3, C/1, D/5} {
        \draw[cyan] ($ (\letra) + ({-\ancho/2}, {-\alto/2}) $) 
            rectangle ++(\ancho, {\porcen * \alto})
                node[midway] {\letra};
        
        \draw[yellow] ($ (\letra) + ({-\ancho/2}, {\alto/2}) $) 
            rectangle ++(\ancho, {(\porcen - 1) * \alto})
                node[midway, scale=0.8] {$\num$};
    }
    \tikzmath { \sep = 0.2 cm; }
    \begin{scope}[shorten >=\sep, shorten <=\sep, ultra thick]
        \draw ($ (nodo11) + ({-\radio / sqrt(2)}, {-\radio / sqrt(2)}) $)
            -- ($ (D) + (0, { \alto / 2 }) $);
        \draw ($ (nodo6) + ({-\radio / sqrt(2)}, {-\radio / sqrt(2)}) $)
            -- ($ (B) + (0, { \alto / 2 }) $);
        \draw ($ (nodo3) + ({-\radio / sqrt(2)}, {-\radio / sqrt(2)}) $)
            -- ($ (C) + (0, { \alto / 2 }) $);
        \draw ($ (nodo3) + ({ \radio / sqrt(2)}, {-\radio / sqrt(2)}) $)
            -- ($ (A) + (0, { \alto / 2 }) $);
            
        \draw ($ (nodo11) + ({ \radio / sqrt(2)}, {-\radio / sqrt(2)}) $)
            -- ($ (nodo6) + ({-\radio / sqrt(2)}, { \radio / sqrt(2)}) $);
        \draw ($ (nodo6) + ({ \radio / sqrt(2)}, {-\radio / sqrt(2)}) $)
            -- ($ (nodo3) + ({-\radio / sqrt(2)}, { \radio / sqrt(2)}) $);
    \end{scope}

\end{tikzpicture}
\end{document}
```

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```