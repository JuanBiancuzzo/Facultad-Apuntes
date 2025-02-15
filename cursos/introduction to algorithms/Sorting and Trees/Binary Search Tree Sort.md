---
dia: 2025-01-18
etapa: empezado
referencias:
  - "701"
tags:
  - curso/introduction-to-algorithms/Sorting-and-Trees
  - nota/curso
  - investigación/ciencias-de-la-computación/algoritmos/Sorting-algorithms
aliases:
  - Ordenamiento con árbol binario de búsqueda
  - BST Sort
  - Ordenamiento con ABB
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se basa en la estructura de [[Árbol binario de búsqueda|árbol binario de búsqueda]] como la fuente de generar el ordenamiento

Los pasos son
1. [[Árbol binario de búsqueda#Insert|Insertar]] todos los elementos del [[Array|array]] en el árbol
2. [[Árbol binario de búsqueda#InorderWalk|Recorrer]] el árbol y conseguir el array ordenado

```
function BSTSort :: array: Key[], n: Integer -> Key[]
    let tree = BuildTree
    for i in 0..n then
        Insert tree, array[i]
    end

    return InorderWalk tree
end
```

Observemos que como insertar tiene [[Big O Notation|complejidad]] $O(h)$ donde $h$ es la altura del árbol, y como tenemos que insertar $n$ elementos, podemos concluir que su complejidad es $O(n ~ h)$. Esto hace que si el árbol está [[Árbol balanceado|balanceado]], entonces por definición de balanceado es $O(n ~ h)$ pero en el caso contrario, el [[Worse-case complexity|worse-case complexity]] termina siendo $O\left(n^2\right)$ 

## Ejemplo
---
Veamos un ejemplo donde tenemos el array $[5,~ 2,~ 4,~ 8,~ 6,~ 7,~ 3,~ 1]$ y lo tenemos que ordenar de  menor a mayor

Insertamos primero el número $5$ obteniendo el árbol

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \radio = 0.5; \raiz = 5;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {$\raiz$};
    \path (\infIzqX, \infIzqY) node (inf_izq_0) {};
    \path (\infDerX, \infDerY) node (inf_der_0) {};
    \path (\supIzqX, \supIzqY) node (sup_izq_0) {};
    \path (\supDerX, \supDerY) node (sup_der_0) {};
    
\end{tikzpicture}
\end{document}
``` 

Después seguimos insertando cada elemento, resultando en la siguiente iteraciones de árboles

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos  {{5,  2, 4, 8,  6, 7,  3,  1}}
    \def\padres     {{0,  0, 1, 0,  3, 4,  2,  1}}
    \def\direcciones{{0, -1, 1, 1, -1, 1, -1, -1}}
    \def\niveles    {{0,  1, 2, 1,  2, 3,  3,  2}}
    \def\indices    {{4,  1, 3, 7,  5, 6,  2,  0}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo)); \raiz = \elementos[0];
        \radio = 0.5; \sepX = 1 * \cantNiveles; \sepY = 2;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
        
        \raiz = \elementos[0]; \indiceRaiz = \indices[0];
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {$\raiz$};
    \path (0, -\radio) node[below=2pt] {$\indiceRaiz$};
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
            \indiceNodo = \indices[\indice];
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \draw (pos) circle (\radio) node (centro_\indice) {$\valor$};
        \path ($ (pos) + (0, \radio) $) node[above=2pt] {$\indiceNodo$};
        
        \path ($ (pos) + (\infIzqX, \infIzqY) $) node (inf_izq_\indice) {};
        \path ($ (pos) + (\infDerX, \infDerY) $) node (inf_der_\indice) {};
        \path ($ (pos) + (\supIzqX, \supIzqY) $) node (sup_izq_\indice) {};
        \path ($ (pos) + (\supDerX, \supDerY) $) node (sup_der_\indice) {};
        
        \draw[<-, shorten <=0.1cm, shorten >=0.1] (sup_\dir_\indice)
            -- (inf_\dirPadre_\indicePadre);
    }
    
\end{tikzpicture}
\end{document}
``` 


Finalmente recorriendo el árbol siempre yendo a la izquierda si es posible, luego el nodo actual y por último al nodo de la derecha, conseguimos una lista ordenada

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```