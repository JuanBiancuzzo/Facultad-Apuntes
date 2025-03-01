---
dia: 2025-01-09
etapa: empezado
referencias: 
tags:
  - ingeniería-en-informática/algo-1/Punteros
  - carrera/ingeniería-electrónica/algo-1/Punteros
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - nota/facultad
  - investigación/ciencias-de-la-computación/algoritmos/Sorting-algorithms
aliases:
  - Binary Search
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este [[Algoritmo|algoritmo]] de búsqueda puede ser utilizado únicamente cuando el [[Array|array]] en el cual se realiza la operación tiene sus elementos ordenados. Este método es muy bueno para reducir la cantidad de comparaciones en una búsqueda significativamente, aplicando $log_2(n)$ comparaciones siendo $n$ el largo del array

```
function BusquedaBinaria :: 
    array: Integer[], 
    n: Integer, 
    elemento: Integer, 
-> Opcion<Interger>
    
    let inicio = 0
    let fin = n - 1
    
    while inicio <= fin then
        let centro = (fin + inicio) / 2
        
        if array[centro] == elemento then
            return Some centro
        
        else if elemento < array[centro] then
            fin = centro - 1
        
        else 
            inicio = centro + 1
        end
    end
    
    return None
end
```

## Ejemplo
---
Veamos un ejemplo donde tenemos el array $[2,~ 4,~ 5,~ 12,~ 17,~ 18,~ 29,~ 30,~ 31,~ 42,~ 53,~ 54,~ 88]$ y queremos buscar el $54$

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \sepY = 2.6; \largo = 13; }
    
    \foreach \valor [count=\i from 0] in 
        {2, 4, 5,12, 17, 18, 29, 30, 31, 42, 53, 54, 88} 
    {
        \tikzmath { \j = 0; \posY = -\j * \sepY; }
        \draw (\i, \posY) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, {\posY + 1}) -- ++(1, 0)  node[midway, above=2pt] {$\i$};
        \path (\i, \posY) -- ++(1, 0) 
            node[pos=0] (infIzq_\j_\i) {} node[pos=1] (infDer_\j_\i) {};
    }
    
    \foreach \valor [count=\i from 6] in {29, 30, 31, 42, 53, 54, 88} {
        \tikzmath { \j = 1; \posY = -\j * \sepY; }
        \draw (\i, \posY) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, {\posY + 1}) -- ++(1, 0) 
            node[pos=0] (supIzq_\j_\i) {} node[pos=1] (supDer_\j_\i) {};
        \path (\i, \posY) -- ++(1, 0) 
            node[pos=0] (infIzq_\j_\i) {} node[pos=1] (infDer_\j_\i) {};
    }
    
    \foreach \valor [count=\i from 9] in {42, 53, 54, 88} {
        \tikzmath { \j = 2; \posY = -\j * \sepY; }
        \draw (\i, \posY) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, {\posY + 1}) -- ++(1, 0) 
            node[pos=0] (supIzq_\j_\i) {} node[pos=1] (supDer_\j_\i) {};
        \path (\i, \posY) -- ++(1, 0) 
            node[pos=0] (infIzq_\j_\i) {} node[pos=1] (infDer_\j_\i) {};
    }
    
    \foreach \valor [count=\i from 11] in {54, 88} {
        \tikzmath { \j = 3; \posY = -\j * \sepY; }
        \draw (\i, \posY) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, {\posY + 1}) -- ++(1, 0) 
            node[pos=0] (supIzq_\j_\i) {} node[pos=1] (supDer_\j_\i) {};
        \path (\i, \posY) -- ++(1, 0) 
            node[pos=0] (infIzq_\j_\i) {} node[pos=1] (infDer_\j_\i) {};
    }
    
    \foreach \valor [count=\i from 11] in {54} {
        \tikzmath { \j = 4; \posY = -\j * \sepY; }
        \draw (\i, \posY) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, {\posY + 1}) -- ++(1, 0) 
            node[pos=0] (supIzq_\j_\i) {} node[pos=1] (supDer_\j_\i) {};
        \path (\i, \posY) -- ++(1, 0) 
            node[pos=0] (infIzq_\j_\i) {} node[pos=1] (infDer_\j_\i) {};
    }
    
    \begin{scope}[shorten <= 0.15cm, shorten >= 0.15cm, dashed]
        \draw (infIzq_0_6) -- (supIzq_1_6);
        \draw (infDer_0_12) -- (supDer_1_12);
        
        \draw (infIzq_1_6) -- (supIzq_2_9);
        \draw (infDer_1_12) -- (supDer_2_12);
        
        \draw (infIzq_2_9) -- (supIzq_3_11);
        \draw (infDer_2_12) -- (supDer_3_12);
        
        \draw (infIzq_3_11) -- (supIzq_4_11);
        \draw (infDer_3_12) -- (supDer_4_11);
    \end{scope}    

\end{tikzpicture}
\end{document}
```
