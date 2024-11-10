---
dia: 2024-11-07
etapa: empezado
referencias:
  - "413"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El triángulo de Pascal se puede visualizar

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick, scale=0.9]
    \tikzmath { \niveles = 7; \sepX = 1; \sepY = 0.7; }
    
    \path (0, 0) node {$0 \choose 0$};
    \foreach \nivel in {1, ..., \niveles} {
        \tikzmath { \inicio = \nivel * \sepX / 2; }
        
        \foreach \i in {0, ..., \nivel} {
            \path ({-\inicio + \i * \sepX}, {-\sepY * \nivel}) 
                node {$\nivel \choose \i$};
        }   
    }

\end{tikzpicture}
\end{document}
```
^9201cf

Donde cada uno de los valores del triángulo es el [[Número combinatorio|número combinatorio]]

Usando la expresión recursiva que vemos en el calculo del número combinatorio ![[Número combinatorio#^a26f48]]
Notemos que los dos bordes de este triángulo siempre valen $1$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick, scale=0.9]
    \tikzmath { \niveles = 7; \sepX = 1; \sepY = 0.7; }
    
    \path (0, 0) node {$1$};
    \path ({-\sepX / 2}, -\sepY) node {$1$};
    \path ({ \sepX / 2}, -\sepY) node {$1$};
    \foreach \nivel in {2, ..., \niveles} {
        \tikzmath { \inicio = \nivel * \sepX / 2; }
        
        \path (-\inicio, {-\sepY * \nivel}) node {$1$};
        \path ({-\inicio + \nivel * \sepX}, {-\sepY * \nivel}) node {$1$};
        \foreach \i [parse=true] in {1, ..., \nivel - 1} {
            \path ({-\inicio + \i * \sepX}, {-\sepY * \nivel}) 
                node {$\nivel \choose \i$};
        }   
    }


\end{tikzpicture}
\end{document}
```

Como cada término de una file, o sea $\binom{n + 1}{k}$, se obtiene como la suma de los $2$ términos de la fila anterior que están "encima", o sea $\binom{n}{k - 1}$ y $\binom{n}{k}$, esto permite ir deduciendo file a fila los valores

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick, scale=0.9]
    \tikzmath { 
        function numFactorial(\n) {
            if \n == 0 then {
                return 1;
            } else {
                return \n * numFactorial(\n - 1);
            };
        };
        function numCombinatorio(\n, \k) {
            if \k == 0 || \n == \k then {
                return 1;
            } else {
                return int(numFactorial(\n) / (numFactorial(\k) * numFactorial(\n - \k)));
            };
        };
    }
    \tikzmath { \niveles = 7; \sepX = 1; \sepY = 0.7;  }
    
    \path (0, 0) node {$1$};
    \foreach \nivel in {1, ..., \niveles} {
        \tikzmath { \inicio = \nivel * \sepX / 2; }
        
        \foreach \i in {0, ..., \nivel} {
            \tikzmath { \valor = numCombinatorio(\nivel, \i); }
            \path ({-\inicio + \i * \sepX}, {-\sepY * \nivel}) 
                node {$\valor$};
        }   
    }

\end{tikzpicture}
\end{document}
```

^ea51b0

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```