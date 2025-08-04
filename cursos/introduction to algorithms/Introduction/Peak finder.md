---
dia: 2024-12-22
etapa: empezado
referencias:
  - 700
tags:
  - curso/introduction-to-algorithms/Introduction
  - investigación/ciencias-de-la-computación/algoritmos
  - nota/curso
  - nota/investigacion
vinculoCurso:
  - "[[cursos/introduction to algorithms/Introduction/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este problema tiene versiones para $n$ dimensiones, donde se establece un espacio o grilla de valores $f$, cada uno indexado como $X = (x_1,~ x_2,~ x_3,~ \cdots,~ x_n)$, donde $X \in U \subset \mathbb{Z}^n$. Este problema propone buscar, si existe un pico, obtener un pico o obtener todos los picos

Para este problema se define pico de la siguiente forma $$ X ~ \text{es un pico sii} ~ \forall i \in [1,~ n] : f(X + e_i) \le f(X) \land f(X - e_i) \le f(X) $$ donde $e_i$ es $0$ para todas las posiciones distintas de $i$ y es $1$ en esa posición

Cabe mencionar para el caso donde $U \ne \mathbb{Z}^n$, la [[Conjunto frontera|frontera]] solo se tiene que comparar con los adyacentes que pertenezcan a $U$

También se puede definir usando mayor estricto ($<$), haciendo que la pregunta de si existe un pico sea no trivial

## Ejemplo de una dimensión
---
Dado un [[Array|array]] de $n = 11$ elementos, donde sus valores están en la siguiente forma

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \n = 11; }
    
    \foreach \i [parse=true] in {0, ..., \n - 1} {
        \tikzmath { \valor = int((\n - 1) / 2 - abs(\i - (\n - 1) / 2)); }
        \draw (\i, 0) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, 1) -- ++(1, 0) node[midway, above=2pt] {$\i$};
    }
    
    \path (0.5, -1.5) -- ++({\n - 1}, 0) 
        node[pos=0] (inicio) {}
        node[midway, above=0.8cm] (medio) {}
        node[pos=1] (final) {};
    \draw (inicio.center) -- (medio.center) -- (final.center);
    \draw[dashed, ->] (0, -1.5) -- ++(\n, 0);

\end{tikzpicture}
\end{document}
```

Buscamos algún pico, y tomando el caso del $\le$, por lo que si o si existe un pico

Una forma de resolver es haciendo una búsqueda lineal de izquierda a derecha. En este caso solo tuvimos que buscar hasta la mitad $\frac{n}{2}$ pero podríamos tener un caso donde el pico sea en el extremos por el cual no empezamos

Incluso si se elige un punto de entrada al array, siempre vamos a poder encontrar un caso donde el único pico este en la última posición que busquemos. Por lo tanto su [[Worse-case complexity|worse-case complexity]] es de $\Theta(n)$ 

Una mejor forma de resolver lo es usado la estrategia de [[Divide and Conquer|Divide and Conquer]], haciendo una [[Búsqueda binaria|búsqueda binaria]], veámoslo en [[Pseudocódigo|pseudocódigo]]

```
function 1DPeakFinder :: array: Integer[] n: Integer -> Integer
    
    if array[n / 2] < a[n / 2 - 1] then
        return 1DPeakFinder array[0 : n / 2 - 1] (n / 2)
    
    else if array[n / 2] < a[n / 2 + 1] then
        return 1DPeakFinder array[n / 2 + 1 : n - 1] (n / 2)
    
    else 
        return n / 2    
    end
end
```

Esto reduce el worse-case complexity a $\Theta(\log_2(n))$ 

## Ejemplo en dos dimensiones
---
Dado una matriz de $n$ por $m$, donde de nuevo tenemos una búsqueda lineal, donde se inicia en un punto $(i,~ j)$, se tiene que la worse-case complexity es de $\Theta(nm)$

Usando la estrategia de Divide and Conquer, se plantea 

```
function 2DPeakFinder :: matrix: Integer[][] n: Integer m: Integer -> Integer Integer
    let indiceMaximo := Max matrix[m / 2][:]
    
    if matrix[m / 2 - 1][indiceMaximo] > matrix[m / 2][indiceMaximo] then
        return 2DPeakFinder matrix[0 : m / 2 - 1][:] n (m / 2)
    
    else if matrix[m / 2 + 1][indiceMaximo] > matrix[m / 2][indiceMaximo] then
        return 2DPeakFinder matrix[m / 2 - 1 : m - 1][:] n (m / 2)
    
    else 
        return (m / 2) indiceMaximo
    end
end
```

El cual termina dando un worse-case complexity de $\Theta(n ~ \log_2(m))$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```