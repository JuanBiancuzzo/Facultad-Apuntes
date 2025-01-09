---
dia: 2025-01-09
etapa: ampliar
referencias: 
tags:
  - ingeniería-en-informática/algo-1/Punteros
  - ingeniería-electrónica/algo-1/Punteros
  - nota/facultad
  - investigación/ciencias-de-la-computación/algoritmos/Sorting-algorithms
aliases:
  - Ordenamiento por selección
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este [[Algoritmo de ordenamiento|método de ordenamiento]] es un [[Algoritmo|algoritmo]] simple con los siguientes pasos

1. Se busca el elemento de menor valor en el [[Array|arreglo]] y se lo intercambia con el elemento que está en la primera posición del arreglo
2. Posteriormente se busca el segundo elemento más pequeño del arreglo y se lo intercambia con el elemento de la segunda posición del arreglo
3. Se continua así hasta que todos los elementos del arreglo están ordenados

```
function SelectionSort :: array: Integer[] n: Integer -> Interger[]
    
    for let i in 0 .. n - 1 then
        let posicionMenor = i
        for let j in i + 1 .. n - 1 then
            if array[j] < array[posicionMenor] then
                posicionMenor = j
            end
        end
        
        let temporario = array[posicionMenor]
        array[posicionMenor] = array[i]
        array[i] = temporario
    end        
    
    return array
end
```

## Ejemplo
---
Veamos el ejemplo donde tenemos el array $[5,~ 2,~ 4,~ 8,~ 6,~ 7,~ 3,~ 1]$

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \sepY = 3; \largo = 8; \caida = 0.75; \subida = 1.25; }
    
    \foreach \valor [count=\i from 0] in {5, 2, 4, 8, 6, 7, 3, 1} {
        \tikzmath { \j = 0; \posY = -\j * \sepY; }
        \draw (\i, \posY) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, {\posY + 1}) -- ++(1, 0)  node[midway, above=2pt] {$\i$};
        \path (\i, \posY) -- ++(1, 0) node[midway] (inf_\j_\i) {};
    }
    
    \foreach \valor [count=\i from 0] in {1, 2, 4, 8, 6, 7, 3, 5} {
        \tikzmath { \j = 1; \posY = -\j * \sepY; }
        \draw (\i, \posY) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, {\posY + 1}) -- ++(1, 0) node[midway, above=2pt] (temp) {$\i$};
        \path ($ (temp.center) + (0, 0.1) $) node (sup_\j_\i) {};
        \path (\i, \posY) -- ++(1, 0) node[midway] (inf_\j_\i) {};
    }
    
    \foreach \valor [count=\i from 0] in {1, 2, 4, 8, 6, 7, 3, 5} {
        \tikzmath { \j = 2; \posY = -\j * \sepY; }
        \draw (\i, \posY) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, {\posY + 1}) -- ++(1, 0) node[midway, above=2pt] (temp) {$\i$};
        \path ($ (temp.center) + (0, 0.1) $) node (sup_\j_\i) {};
        \path (\i, \posY) -- ++(1, 0) node[midway] (inf_\j_\i) {};
    }
    
    \foreach \valor [count=\i from 0] in {1, 2, 3, 8, 6, 7, 4, 5} {
        \tikzmath { \j = 3; \posY = -\j * \sepY; }
        \draw (\i, \posY) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, {\posY + 1}) -- ++(1, 0) node[midway, above=2pt] (temp) {$\i$};
        \path ($ (temp.center) + (0, 0.1) $) node (sup_\j_\i) {};
        \path (\i, \posY) -- ++(1, 0) node[midway] (inf_\j_\i) {};
    }
    
    \foreach \valor [count=\i from 0] in {1, 2, 3, 4, 6, 7, 8, 5} {
        \tikzmath { \j = 4; \posY = -\j * \sepY; }
        \draw (\i, \posY) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, {\posY + 1}) -- ++(1, 0) node[midway, above=2pt] (temp) {$\i$};
        \path ($ (temp.center) + (0, 0.1) $) node (sup_\j_\i) {};
        \path (\i, \posY) -- ++(1, 0) node[midway] (inf_\j_\i) {};
    }
    
    \foreach \valor [count=\i from 0] in {1, 2, 3, 4, 5, 7, 8, 6} {
        \tikzmath { \j = 5; \posY = -\j * \sepY; }
        \draw (\i, \posY) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, {\posY + 1}) -- ++(1, 0) node[midway, above=2pt] (temp) {$\i$};
        \path ($ (temp.center) + (0, 0.1) $) node (sup_\j_\i) {};
        \path (\i, \posY) -- ++(1, 0) node[midway] (inf_\j_\i) {};
    }
    
    \foreach \valor [count=\i from 0] in {1, 2, 3, 4, 5, 6, 8, 7} {
        \tikzmath { \j = 6; \posY = -\j * \sepY; }
        \draw (\i, \posY) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, {\posY + 1}) -- ++(1, 0) node[midway, above=2pt] (temp) {$\i$};
        \path ($ (temp.center) + (0, 0.1) $) node (sup_\j_\i) {};
        \path (\i, \posY) -- ++(1, 0) node[midway] (inf_\j_\i) {};
    }
    
    \foreach \valor [count=\i from 0] in {1, 2, 3, 4, 5, 6, 7, 8} {
        \tikzmath { \j = 7; \posY = -\j * \sepY; }
        \draw (\i, \posY) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, {\posY + 1}) -- ++(1, 0) node[midway, above=2pt] (temp) {$\i$};
        \path ($ (temp.center) + (0, 0.1) $) node (sup_\j_\i) {};
        \path (\i, \posY) -- ++(1, 0) node[midway] (inf_\j_\i) {};
    }
    
    
    \begin{scope}[->, shorten <= 0.15cm, shorten >= 0.15cm, dashed, ultra thick]
        \foreach \nivel/\nextNivel/\swapBy in 
            {0/1/7, 1/2/1, 2/3/6, 3/4/6, 4/5/7, 5/6/7, 6/7/7} 
        {
            \draw (inf_\nivel_\nivel)
                .. controls ($ (inf_\nivel_\nivel) + (0, -\caida) $) and 
                    ($ (sup_\nextNivel_\swapBy) + (0, \subida) $)
                .. (sup_\nextNivel_\swapBy);
            
            \draw (inf_\nivel_\swapBy)
                .. controls ($ (inf_\nivel_\swapBy) + (0, -\caida) $) and 
                    ($ (sup_\nextNivel_\nivel) + (0, \subida) $)
                .. (sup_\nextNivel_\nivel);
        }
    \end{scope}    

\end{tikzpicture}
\end{document}
```
