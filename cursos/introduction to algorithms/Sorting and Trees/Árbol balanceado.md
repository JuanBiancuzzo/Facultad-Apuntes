---
dia: 2025-01-21
etapa: empezado
referencias:
  - "701"
tags:
  - curso/introduction-to-algorithms/Sorting-and-Trees
  - nota/curso
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se puede definir un [[Árbol|árbol]] balanceado cuando su altura esta dada por $\log_{\# \text{hijos}}(n)$ siendo $n$ la cantidad de [[Nodo#En teoría de grafos|nodos]] en el árbol

En el caso de un [[Árbol binario|árbol binario]] la cantidad de hijos son $2$ por lo que se define balanceado si cumple que la altura es $\log_2(n)$

## Árbol balanceado
---
```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\padres     {{0, 0,  0,  1,  1,  2,  2,  3,  3,  4,  4,  5,  5,  6,  6}}
    \def\direcciones{{0, 1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1, -1}}
    \def\niveles    {{0, 1,  1,  2,  2,  2,  2,  3,  3,  3,  3,  3,  3,  3,  3}}
    \tikzmath { \indiceMasIzquierda = 14; \indiceMasBajo = 14; }

    \tikzmath { 
        \largo = dim(\padres);
        \cantNiveles = ceil(log2(\largo)); \radio = 0.4; 
        \sepX = 0.8 * \cantNiveles; \sepY = 2;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {};
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
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \draw (pos) circle (\radio) node (centro_\indice) {};
        
        \path ($ (pos) + (\infIzqX, \infIzqY) $) node (inf_izq_\indice) {};
        \path ($ (pos) + (\infDerX, \infDerY) $) node (inf_der_\indice) {};
        \path ($ (pos) + (\supIzqX, \supIzqY) $) node (sup_izq_\indice) {};
        \path ($ (pos) + (\supDerX, \supDerY) $) node (sup_der_\indice) {};
        
        \draw[<-, shorten <=0.1cm, shorten >=0.1] (sup_\dir_\indice)
            -- (inf_\dirPadre_\indicePadre);
    }
    
    \tikzmath { 
        int \izquierda, \bajo;
        \izquierda = \indiceMasIzquierda; \bajo = \indiceMasBajo;
        \separacion = 1;
    }
    \coordinate (equinaSup) at (sup_izq_0 -| inf_izq_\izquierda);
    \coordinate (equinaInf) at (inf_izq_\bajo -| inf_izq_\izquierda);
    
    \draw[<->, ultra thick] ($ (equinaSup) + (-\separacion, 0) $)
        -- ($ (equinaInf) + (-\separacion, 0) $)
            node[midway, left=2pt] {$h$};
    
\end{tikzpicture}
\end{document}
``` 

## Árbol no balanceado
---
```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\padres     {{ 0,  0,  0,  1,  2,  3,  4,  5}}
    \def\direcciones{{ 0,  -1, 1,  1,  1,  1, -1, -1}}
    \def\niveles    {{ 0,  1,  1,  2,  2,  3,  3, 4}}
    \tikzmath { \indiceMasIzquierda = 1; \indiceMasBajo = 7; }

    \tikzmath { 
        \largo = dim(\padres);
        \cantNiveles = ceil(log2(\largo)); \radio = 0.5; 
        \sepX = 1.2 * \cantNiveles; \sepY = 2;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {};
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
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \draw (pos) circle (\radio) node (centro_\indice) {};
        
        \path ($ (pos) + (\infIzqX, \infIzqY) $) node (inf_izq_\indice) {};
        \path ($ (pos) + (\infDerX, \infDerY) $) node (inf_der_\indice) {};
        \path ($ (pos) + (\supIzqX, \supIzqY) $) node (sup_izq_\indice) {};
        \path ($ (pos) + (\supDerX, \supDerY) $) node (sup_der_\indice) {};
        
        \draw[<-, shorten <=0.1cm, shorten >=0.1] (sup_\dir_\indice)
            -- (inf_\dirPadre_\indicePadre);
    }
    
    \tikzmath { 
        int \izquierda, \bajo;
        \izquierda = \indiceMasIzquierda; \bajo = \indiceMasBajo;
        \separacion = 1;
    }
    \coordinate (equinaSup) at (sup_izq_0 -| inf_izq_\izquierda);
    \coordinate (equinaInf) at (inf_izq_\bajo -| inf_izq_\izquierda);
    
    \draw[<->, ultra thick] ($ (equinaSup) + (-\separacion, 0) $)
        -- ($ (equinaInf) + (-\separacion, 0) $)
            node[midway, left=2pt] {$h$};
    
\end{tikzpicture}
\end{document}
``` 

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```