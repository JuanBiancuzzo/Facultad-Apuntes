---
dia: 2023-04-03
etapa: ampliar
referencias:
  - "196"
  - "196"
tags:
  - carrera/ingeniería-en-informática/orga/Compresión
  - investigación/ciencias-de-la-computación/algoritmos
  - investigación/matemática/encoding/lossless-compression-encoding
  - nota/facultad
  - nota/investigacion
aliases:
  - Huffman Codes
  - Huffman Coding
  - Huffman's algorithm
  - Huffman Encoding Algorithm
  - Codificación de Huffman
vinculoFacultad:
  - tema: Compresión
    capitulo: 4
    materia: Organización de datos
    carrera: Ingeniería en informática
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });;
```
# Definición
---
Este proceso de compresión, no se pierde [[Información|información]], es decir que entra en la categoría de [[Lossless Compression|lossless compression]]. Este método logra generar un [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Código óptimo|código óptimo]]

Dado una [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Fuente discreta sin memoria|fuente discreta sin memoria]] con el [[ingeniería en informática/discreta/Autómatas/Alfabeto|alfabeto]] $\set{s_0,~ s_1,~ \cdots,~ s_{K - 1}}$ con la [[ingeniería en informática/orga/Visualizaciones/Distribución discreta|distribución]] $\set{p_0,~ p_1,~ \cdots,~ p_{K - 1}}$ y se quiere generar un [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Código de fuente|código]] $r$-ario, es decir que el código de una palabra este compuesto por [[ingeniería en informática/estructura/Sistemas numéricos/Símbolo|símbolos]] de [[ingeniería en informática/estructura/Sistemas numéricos/Base numérica|base]] $r$, que sea un código óptimo. Vamos a detallar el caso donde las [[ingeniería en informática/discreta/Autómatas/Palabra|palabra]] esta hecha con $r = 2$, es decir con [[ingeniería en informática/algo 1/Introducción a la programación/Información#Bit|bit]] y después lo vamos a ampliar a un $r$ arbitrario

La idea se basa en dar códigos más largos a símbolos menos probables, como muestra la idea de la información como tal. Para lograr esto, lo que se va a hacer de forma iterativa es obtener los dos símbolos menos probables, asignar uno un $0$ y otro un $1$, combinar sus probabilidades, y proponerlo como un nuevo símbolo. Finalmente para cada símbolo original se tiene un código siguiendo las combinaciones que se hicieron y los valores asignador

En el caso de que $r \ne 2$ se aplica el siguiente artificio, se agregan al alfabeto original, símbolos ficticios con probabilidad nula, hasta que el número de símbolos sea $r + \alpha ~ (r - 1)$ con $\alpha$ entero. Luego se aplica el método de Huffman agrupando de a $r$ símbolos cada vez

Es necesario hacer esto, ya que al agrupar de a $r$ símbolos para crear un símbolo nuevo, esta la posibilidad que después de las iteraciones, en el último paso no haya $r$ símbolos para combinar. Por lo tanto si se tienen $N$ símbolos inicialmente, por cada iteración se reducen por $r - 1$, y se quiere que al final se tengan $r$ símbolos, se obtiene la ecuación $$ N = r + \alpha ~ (r - 1), ~~ \alpha \in \mathbb{N} $$ donde podemos decir que $\alpha$ es la cantidad de iteraciones del método

En ambos casos se puede plantear la idea de crear un [[ingeniería en informática/discreta/Grafos/Árbol|árbol]] $r$-ario para cada símbolo, incluyendo los de probabilidad nula, y se insertan en una lista. De forma iterativa se agarran $r$ árboles de esta lista con la menor probabilidad, se crea un nodo con esos $r$ elementos como hijos, donde cada [[Arista|arista]] representa un número del $0$ al $r - 1$, y se inserta este nodo, que representa la suma de probabilidades de sus hijos, en la lista. Cuando haya $1$ elemento, se terminó el método obteniendo un árbol donde el [[ingeniería en informática/discreta/Grafos/Camino|camino]] de la raíz hasta cualquier símbolo representa su código

## Ejemplo símbolos equiprobables
---
Podemos pensarlo como dado un [[Conjunto|conjunto]] de símbolos [[ingeniería en informática/proba/Teoría de probabilidades/Evento equiprobable|equiprobables]], que preguntas deberíamos hacer para determinar que símbolo se envío. Como vamos a usar bits solo se puede preguntas donde la respuesta puede ser sí o no

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


## Ejemplo ocurrencias
---
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

## Ejemplo binario
---
Veamos un ejemplo donde se tiene el alfabeto $\set{ s_0,~ s_1,~ \cdots,~ s_4 }$ se puede construir los códigos a mano de la siguiente forma 

```tikz
\usetikzlibrary{decorations.pathreplacing}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{arrows.meta}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \ancho = 2; \alto = .8; \sep = .3; 
        \cantSimbolos = 5; \cantIteraciones = \cantSimbolos;
        \largo = 0.5;
    }
    
    \path (0, 0) node (punto) {};
    
    \path ($ (punto.center) + (0, \sep) $) rectangle ++(\ancho, \alto)
        node[midway] {Símbolos};
    \foreach \i [parse=true] in {0, ..., \cantSimbolos - 1} {
        \path ($ (punto.center) + (0, {-\i * \alto}) $) 
            rectangle ++(\ancho, -\alto) node[midway] {$s_\i$};
    }
    \path ($ (punto.center) + (\ancho, 0) $) node (punto) {};
    
    \foreach \probas/\sigue/\comb/\final [count=\it] in {
        {0.3, 0.3, 0.2, 0.1, 0.1}/{0/0, 1/1, 2/3}/{0/3, 1/4}/2, 
        {0.3, 0.3, 0.2, 0.2}/{0/1, 1/2}/{0/2, 1/3}/0,
        {0.4, 0.3, 0.3}/{0/1}/{0/1, 1/2}/0,
        {0.6, 0.4}/{}/{0/0, 1/1}/0} {        
        \path ($ (punto.center) + (0, \sep) $) rectangle ++(\ancho, \alto)
            node[midway] {Columna $\it$};
        
        \foreach \proba [count=\i from 0] in \probas {
            \path ($ (punto.center) + (0, {-\i * \alto}) $) 
                rectangle ++(\ancho, -\alto) node[midway] {$\proba$};
        }
        
        \foreach \actual/\siguiente in \sigue {
            \draw[->, shorten >=\largo cm] ($ (punto.center) 
                + ({\ancho / 2 + \largo}, {-(\actual + .5) * \alto}) $) 
                    -- ++({\ancho - \largo}, { (\actual - \siguiente) * \alto });
        }
        
        \foreach \bit/\indice in \comb {
            \draw ($ (punto.center) 
                + ({\ancho / 2 + \largo}, {-(\indice + .5) * \alto}) $)
                    -- ++({ \ancho / 2 - \largo }, 0)
                        node[midway, above=2pt] {$\bit$}
                    -- ++(0, { (\indice - \final) * \alto });
        }
        \draw[->, shorten >=\largo cm]
            ($ (punto.center) + (\ancho, {-(\final + .5) * \alto}) $)
                -- ++({\ancho / 2}, 0);
        
        
        \path ($ (punto.center) + (\ancho, 0) $) node (punto) {};
    }
    
    \path ($ (punto.center) + (0, \sep) $) rectangle ++(\ancho, \alto)
        node[midway] {Columna $\cantIteraciones$};
    \path (punto.center) rectangle ++(\ancho, -\alto) node[midway] {$1$};
    
    
    
\end{tikzpicture}
\end{document}
```

Generando, finalmente, los códigos, que se puede construir recorriendo el camino de cada símbolo, acumulando cada dígito que aparece y finalmente invirtiendo su orden. Para ilustrar mejor las instrucciones de generar un árbol, el resultado final se puede visualizar de la siguiente forma

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    
    %                 0   1    2    3     4      5      6      7     8  
    \def\elementos  {{1, 0.6, 0.4, 0.2, "s_0", "s_1", "s_2", "s_3", "s_4"}}
    \def\padres     {{0,   0,   0,   2,     1,     1,     2,     3,     3}}
    \def\direcciones{{0,  -1,   1,   1,    -1,     1,    -1,    -1,     1}}
    \def\niveles    {{0,   1,   1,   2,     2,     2,     2,     3,     3}}
    \def\bits       {{0,   0,   1,   1,     0,     1,     0,     0,     1}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo)); \raiz = \elementos[0];
        \radio = 0.5; \sepX = .9 * \cantNiveles; \sepY = 2;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
        
        \raiz = \elementos[0];
    }
    
    \draw (0, 0) circle (\radio) node (centro_0) {$\raiz$};
    \path (0, -\radio) node (nodo_0) {};
    \path (\infIzqX, \infIzqY) node (inf_izq_0) {};
    \path (\infDerX, \infDerY) node (inf_der_0) {};
    \path (\supIzqX, \supIzqY) node (sup_izq_0) {};
    \path (\supDerX, \supDerY) node (sup_der_0) {};
    
    \foreach \indice [parse=true] in {1, ..., \largo - 1} {
        \tikzmath { 
            int \indicePadre;
            \indicePadre = \padres[\indice];
            \nivelActual = \niveles[\indice];
            \direccion = \direcciones[\indice];
            
            \dir = (int(\direccion) > 0) ? "izq" : "der";
            \dirPadre = (int(\direccion) > 0) ? "der" : "izq";
            \sepActual = int(\direccion) * \sepX/int(\nivelActual);
            \valor = \elementos[\indice];
            \bit = \bits[\indice];
            
            coordinate \pos, \arista;
            \pos = (centro_\indicePadre) + (\sepActual, -\sepY);
            \arista = (inf_\dirPadre_\indicePadre) - (\pos) - (
                {int(\direccion) > 0 ? \supIzqX : \supDerX}, 
                {int(\direccion) > 0 ? \supIzqY : \supDerY}
            );
            \angulo = atan(\aristay / \aristax);
        }
                
        \draw (\pos) circle (\radio) node (centro_\indice) {$\valor$};
        \path ($ (\pos) + (0, -\radio) $) node (nodo_\indice) {};
        
        \path ($ (\pos) + (\infIzqX, \infIzqY) $) node (inf_izq_\indice) {};
        \path ($ (\pos) + (\infDerX, \infDerY) $) node (inf_der_\indice) {};
        \path ($ (\pos) + (\supIzqX, \supIzqY) $) node (sup_izq_\indice) {};
        \path ($ (\pos) + (\supDerX, \supDerY) $) node (sup_der_\indice) {};
        
        \draw[<-, shorten <=0.1cm, shorten >=0.1cm] (sup_\dir_\indice)
            -- (inf_\dirPadre_\indicePadre)
                node[midway, rotate=\angulo, above=.1cm] (temp) {};
        \path (temp) node {$\bit$};
    }
   
    \path (nodo_4) node[below=2pt] {$00$};
    \path (nodo_5) node[below=2pt] {$01$};
    \path (nodo_6) node[below=2pt] {$11$};
    \path (nodo_7) node[below=2pt] {$100$};
    \path (nodo_8) node[below=2pt] {$101$};
    
    
\end{tikzpicture}
\end{document}
``` 

## Ejemplo cuaternario
---
Veamos un ejemplo donde se tiene el alfabeto $\set{ s_0,~ s_1,~ \cdots,~ s_4 }$, pero en este caso como el código es cuaternario ($r = 4$), y por lo tanto necesitamos que se cumpla $r + \alpha ~ (r - 1)$ se tiene que agregar $2$ símbolos extras con probabilidad $0$, y con el mismo procedimiento que antes tenemos lo siguiente

```tikz
\usetikzlibrary{decorations.pathreplacing}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{arrows.meta}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \ancho = 2; \alto = .8; \sep = .3; 
        \cantSimbolos = 5;  \r = 4;
        \alfa = ceil((\cantSimbolos - \r) / (\r - 1));
        \extra = \r + \alfa * (\r - 1) - \cantSimbolos;
        \cantIteraciones = int(\alfa + 1); 
        \largo = 0.5;
    }
    
    \path (0, 0) node (punto) {};
    
    \path ($ (punto.center) + (0, \sep) $) rectangle ++(\ancho, \alto)
        node[midway] {Símbolos};
    \foreach \i [parse=true] in {0, ..., \cantSimbolos + \extra - 1} {
        \path ($ (punto.center) + (0, {-\i * \alto}) $) 
            rectangle ++(\ancho, -\alto) node[midway] {$s_\i$};
    }
    \path ($ (punto.center) + (\ancho, 0) $) node (punto) {};
    
    \foreach \probas/\sigue/\comb/\final [count=\it] in {
        {0.3, 0.3, 0.2, 0.1, 0.1, 0, 0}/{0/0, 1/1, 2/3}/{0/3, 1/4, 2/5, 3/6}/2, 
        {0.3, 0.25, 0.25, 0.2}/{}/{0/0, 1/1, 2/2, 3/3}/0} {        
        \path ($ (punto.center) + (0, \sep) $) rectangle ++(\ancho, \alto)
            node[midway] {Columna $\it$};
        
        \foreach \proba [count=\i from 0] in \probas {
            \path ($ (punto.center) + (0, {-\i * \alto}) $) 
                rectangle ++(\ancho, -\alto) node[midway] {$\proba$};
        }
        
        \foreach \actual/\siguiente in \sigue {
            \draw[->, shorten >=\largo cm] ($ (punto.center) 
                + ({\ancho / 2 + \largo}, {-(\actual + .5) * \alto}) $) 
                    -- ++({\ancho - \largo}, { (\actual - \siguiente) * \alto });
        }
        
        \foreach \bit/\indice in \comb {
            \draw ($ (punto.center) 
                + ({\ancho / 2 + \largo}, {-(\indice + .5) * \alto}) $)
                    -- ++({ \ancho / 2 - \largo }, 0)
                        node[midway, above=2pt] {$\bit$}
                    -- ++(0, { (\indice - \final) * \alto });
        }
        \draw[->, shorten >=\largo cm]
            ($ (punto.center) + (\ancho, {-(\final + .5) * \alto}) $)
                -- ++({\ancho / 2}, 0);
        
        
        \path ($ (punto.center) + (\ancho, 0) $) node (punto) {};
    }
    
    \path ($ (punto.center) + (0, \sep) $) rectangle ++(\ancho, \alto)
        node[midway] {Columna $\cantIteraciones$};
    \path (punto.center) rectangle ++(\ancho, -\alto) node[midway] {$1$};
    
    
    
\end{tikzpicture}
\end{document}
```

Dando la tabla de códigos

| Símbolos | Código |
| -------- | ------ |
| $s_0$    | $0$    |
| $s_1$    | $1$    |
| $s_2$    | $3$    |
| $s_3$    | $20$   |
| $s_4$    | $21$   |

Notemos que no es necesario asignar códigos a los símbolos agregados ya que por tener probabilidad $0$ conceptualmente no van a aparecer y además por el método son valores que no aparecieron

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```