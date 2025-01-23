---
dia: 2025-01-08
etapa: ampliar
referencias:
  - "701"
  - "837"
tags:
  - curso/introduction-to-algorithms/Sorting-and-Trees
  - nota/curso
  - investigación/ciencias-de-la-computación/algoritmos/Sorting-algorithms
aliases:
  - Ordenamiento por inserción
  - Binary Insertion Sort
  - Ordenamiento por inserción binaria
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El ordenamiento por inserción es una manera muy natural de ordenar para un ser humano y puede usarse fácilmente para ordenar un mazo de cartas numeradas en forma arbitraria. Requiere $O\left(n^2\right)$ (en [[Big O Notation|notación big O]]) operaciones para ordenar una lista de $n$ elementos

Inicialmente, se tiene un solo elemento que, obviamente, es un [[Conjunto|conjunto]] ordenado. Después, cuando hay $k$ elementos ordenados de menor a mayor se toma el elemento $k + 1$ y se compara con todos los elementos ya ordenados, deteniéndose cuando se encuentra un elemento menor (todos los elementos mayores han sido desplazados una posición a la derecha) o cuando ya no se encuentran elementos (todos los elementos fueron desplazados y este es el más pequeño). En este punto se inserta el elemento $k + 1$ debiendo desplazarse los demás elementos<sup><a href="#ref-837" style="color: inherit; text-decoration: none;">[837]</a></sup>

```
function InsertionSort :: array: Integer[], n: Integer -> Integer[]
    for i in 1..n then
        let j = i + 1
        while j > 0 and array[j] > array[j - 1] then
            Swap array[j], array[j - 1]
            j -= 1
        end    
    end
    
    return array
end
```

Notemos que tanto por la cantidad de swaps como de comparaciones, es un [[Algoritmo|algoritmo]] con una [[Worse-case complexity|worse-case complexity]] de $\Theta\left( n^2 \right)$ 

Esto se puede mejorar, donde en vez de hacer una búsqueda lineal para encontrar que la posición debe ir, podemos hacer [[Búsqueda binaria|búsqueda binaria]], reduciendo la worse-case complexity de las comparaciones a $\Theta(n ~ log_2(n))$ pero mantiene la misma complejidad para los swaps

## Ejemplo
---
Por definición la posición $0$ ya esta ordenada, por lo que vamos a tener la key en $1$, tendremos que swappear las posiciones $0$ y el $1$ ya que $5 \not < 2$ 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \key = 1; \swapBy = 0; \caida = 0.8; }
    
    \foreach \valor [count=\i from 0] in {5, 2, 4, 6, 1, 3} {
        \draw (\i, 0) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, 0) -- ++(1, 0) 
            node[midway, below=2pt] {$\i$}
            node[midway, below=0.5cm] (pos_\i) {};
    }
    
    \draw[<-, ultra thick] ({\key + 0.5}, 1.2) -- ++(0, 0.6)
        node[scale=0.8, above=2pt] {Key};
    
    \draw[<->, ultra thick] (pos_\swapBy.center) 
        .. controls ($ (pos_\swapBy.center) + (0, -\caida) $) and 
            ($ (pos_\key.center) + (0, -\caida) $)
        .. (pos_\key.center);
    

\end{tikzpicture}
\end{document}
```

Ahora la key pasa a ser $2$ y tendremos que swappear las posiciones $1$ y $2$ ya que $5 \not < 4$

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \key = 2; \swapBy = 1; \caida = 0.8; }
    
    \foreach \valor [count=\i from 0] in {2, 5, 4, 6, 1, 3} {
        \draw (\i, 0) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, 0) -- ++(1, 0) 
            node[midway, below=2pt] {$\i$}
            node[midway, below=0.5cm] (pos_\i) {};
    }
    
    \draw[<-, ultra thick] ({\key + 0.5}, 1.2) -- ++(0, 0.6)
        node[scale=0.8, above=2pt] {Key};
    
    \draw[<->, ultra thick] (pos_\swapBy.center) 
        .. controls ($ (pos_\swapBy.center) + (0, -\caida) $) and 
            ($ (pos_\key.center) + (0, -\caida) $)
        .. (pos_\key.center);
    

\end{tikzpicture}
\end{document}
```
En el siguiente caso, no es necesario swappear, ya que $5 < 6$, y por lo tanto pasamos a cuando la key es $4$. En esta situación se va comparando con todos los indices menores a la key hasta encontrar uno que se cumpla la desigualdad

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \key = 4; \caida = 0.8; }
    
    \foreach \valor [count=\i from 0] in {2, 4, 5, 6, 1, 3} {
        \draw (\i, 0) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, 0) -- ++(1, 0) 
            node[midway, below=2pt] {$\i$}
            node[midway, below=0.5cm] (pos_\i) {};
    }
    
    \draw[<-, ultra thick] ({\key + 0.5}, 1.2) -- ++(0, 0.6)
        node[scale=0.8, above=2pt] {Key};
    
    \foreach \swapBy in {0, 1, 2, 3} {
        \tikzmath { \nuevaCaida = 0.2 * (4 - \swapBy) + \caida; }
        \draw[<->, ultra thick] (pos_\swapBy.center) 
            .. controls ($ (pos_\swapBy.center) + (0, {-\nuevaCaida}) $) and 
                ($ (pos_\key.center) + (0, -\nuevaCaida) $)
            .. (pos_\key.center);
    }

\end{tikzpicture}
\end{document}
```

Lo mismo ocurre con la key $5$, donde va a ir comparando hasta que se cumpla la desigualdad

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \key = 5; \caida = 0.8; }
    
    \foreach \valor [count=\i from 0] in {1, 2, 4, 5, 6, 3} {
        \draw (\i, 0) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, 0) -- ++(1, 0) 
            node[midway, below=2pt] {$\i$}
            node[midway, below=0.5cm] (pos_\i) {};
    }
    
    \draw[<-, ultra thick] ({\key + 0.5}, 1.2) -- ++(0, 0.6)
        node[scale=0.8, above=2pt] {Key};
    
    \foreach \swapBy in {2, 3, 4} {
        \tikzmath { \nuevaCaida = 0.2 * (4 - \swapBy + 1) + \caida; }
        \draw[<->, ultra thick] (pos_\swapBy.center) 
            .. controls ($ (pos_\swapBy.center) + (0, {-\nuevaCaida}) $) and 
                ($ (pos_\key.center) + (0, -\nuevaCaida) $)
            .. (pos_\key.center);
    }

\end{tikzpicture}
\end{document}
```

Resultando finalmente en un [[Array|array]] ordenado

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]    
    \foreach \valor [count=\i from 0] in {1, 2, 3, 4, 5, 6} {
        \draw (\i, 0) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, 0) -- ++(1, 0) 
            node[midway, below=2pt] {$\i$}
            node[midway, below=0.5cm] (pos_\i) {};
    }

\end{tikzpicture}
\end{document}
```

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```