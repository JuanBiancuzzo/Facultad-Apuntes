---
dia: 2025-01-18
etapa: empezado
tags:
  - investigación/ciencias-de-la-computación/data-structures
  - nota/colección
  - curso/introduction-to-algorithms/Sorting-and-Trees
  - colección/data-structures/estructura
nombreEstructura: Árbol binario de búsqueda
aliases:
  - ABB
  - Binary Search Tree
  - BST
referencias:
  - "701"
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
> Se basa en la estructura de un [[Árbol binario|árbol binario]] pero donde además establece un [[Relación de orden|orden]] la cual impone una invariante
> 
> La invariante de esta estructura es que para todo nodo $x$, si $y$ esta en la rama izquierda del [[Árbol|subárbol]] de $x$, entonces la key de $y$ es menor o igual que la key de $x$, es decir, $\text{key}(y) \le \text{key}(x)$. Si $y$ esta en la rama derecha del subárbol de $x$, entonces la key de $y$ es mayor o igual que la key de $x$, es decir, $\text{key}(y) \ge \text{key}(x)$
^descripcion

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos  {{30, 17, 40, 14, 20, 60, 25, 50}}
    \def\padres     {{ 0,  0,  0,  1,  1,  2,  4,  5}}
    \def\direcciones{{ 0,  -1, 1, -1,  1,  1,  1, -1}}
    \def\niveles    {{ 0,  1,  1,  2,  2,  2,  3,  3}}
    \tikzmath { \indiceMasIzquierda = 3; \indiceMasBajo = 6; }

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo)); \raiz = \elementos[0];
        \radio = 0.5; \sepX = 1 * \cantNiveles; \sepY = 2;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
        
        \raiz = \elementos[0];
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {$\raiz$};
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
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \draw (pos) circle (\radio) node (centro_\indice) {$\valor$};
        
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
^representacion

## Operaciones
---
Vamos a ver las operaciones que deben existir para que se pueda usar esta estructura

### Insert
---

### Recorrer
---


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```