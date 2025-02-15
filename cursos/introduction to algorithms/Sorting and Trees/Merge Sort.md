---
dia: 2025-01-09
etapa: ampliar
referencias:
  - "701"
  - "838"
tags:
  - curso/introduction-to-algorithms/Sorting-and-Trees
  - nota/curso
  - investigación/ciencias-de-la-computación/algoritmos/Sorting-algorithms
aliases:
  - Ordenamiento por mezcla
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El [[Algoritmo|algoritmo]] de ordenamiento por mezcla es un algoritmo de ordenamiento externo estable basado en la técnica [[Divide and Conquer|divide y vencerás]]. Es de [[Big O Notation|complejidad]] $O(n ~ log_2 n)$

```
function MergeSort :: array: Integer[], n: Integer -> Interger[]
    
    if n <= 1 then
        return array
    end
    
    let arrayIzquierda = MergeSort array[0 : n / 2], n/2
    let arrayDerecha = MergeSort array[n / 2 : n], n/2
    
    let posIzquierda = 0
    let posDerecha = 0
    let resultado: Integer[n]
    
    while (n / 2) > posIzquierda and (n / 2) > posDerecha then
        if arrayIzquierda[posIzquierda] <= arrayDerecha[posDerecha] then
            resultado[posIzquierda + posDerecha] = arrayIzquierda[posIzquierda]
            posIzquierda += 1
        else
            resultado[posIzquierda + posDerecha] = arrayDerecha[posDerecha]
            posDerecha += 1
        end
    end
    
    while (n / 2) > posIzquierda then
        resultado[posIzquierda + posDerecha] = arrayIzquierda[posIzquierda]
        posIzquierda += 1
    end
    
    while (n / 2) > posDerecha then
        resultado[posIzquierda + posDerecha] = arrayDerecha[posDerecha]
        posDerecha += 1
    end
    
    return resultado
end
```

En este [[Pseudocódigo|pseudocódigo]] se muestra que se usa otros [[Array|arrays]] para resolverlo, implicando una complejidad en el [[Memoria|espacio de memoria]] de $O(n)$

Con un manejo de [[Puntero|punteros]] podemos llegar a tener un merge sort donde este sea "in-place" y por lo tanto una complejidad en el espacio de memoria de $O(1)$

## Ejemplo
---
Veamos un ejemplo donde tenemos el array $[5,~ 2,~ 4,~ 8,~ 6,~ 7,~ 3,~ 1]$ y lo tenemos que ordenar de menor a mayor

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \sepX = 1; \sepY = 3; \largo = 8; }
    
    \foreach \valor [count=\i from 0] in {5, 2, 4, 8, 6, 7, 3, 1} {
        \draw (\i, 0) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, 0) -- ++(1, 0) 
            node[midway, below=2pt] {$\i$}
            node[pos=0] (supIzq_\i) {}
            node[pos=1] (supDer_\i) {};
    }
    
    \begin{scope}[shorten <= 0.2cm, shorten >= 0.2cm]
        \draw (supIzq_0) -- ++(-\sepX, {1 - \sepY});
        \draw (supDer_3) -- ++(-\sepX, {1 - \sepY});
        \draw (supIzq_4) -- ++( \sepX, {1 - \sepY});
        \draw (supDer_7) -- ++( \sepX, {1 - \sepY});
    \end{scope}
    
    \foreach \valor [count=\i from 0] in {5, 2, 4, 8, 6, 7, 3, 1} {
        \tikzmath { \distX = (2 * int(\i / 4) - 1) * \sepX; }
        \draw ({\i + \distX}, -\sepY) rectangle ++(1, 1) node[midway] {$\valor$};
        \path ({\i + \distX}, -\sepY) -- ++(1, 0) 
            node[midway, below=2pt] {$\i$}
            node[pos=0] (supIzq_\i) {}
            node[pos=1] (supDer_\i) {};
    }
    
    \begin{scope}[shorten <= 0.2cm, shorten >= 0.2cm]
        \draw (supIzq_0) -- ++({-\sepX / 2}, {1 - \sepY});
        \draw (supDer_1) -- ++({-\sepX / 2}, {1 - \sepY});
        \draw (supIzq_2) -- ++({ \sepX / 2}, {1 - \sepY});
        \draw (supDer_3) -- ++({ \sepX / 2}, {1 - \sepY});
        \draw (supIzq_4) -- ++({-\sepX / 2}, {1 - \sepY});
        \draw (supDer_5) -- ++({-\sepX / 2}, {1 - \sepY});
        \draw (supIzq_6) -- ++({ \sepX / 2}, {1 - \sepY});
        \draw (supDer_7) -- ++({ \sepX / 2}, {1 - \sepY});
    \end{scope}
    
    \foreach \valor [count=\i from 0] in {5, 2, 4, 8, 6, 7, 3, 1} {
        \tikzmath { \distX = (int(\i / 2) - 1.5) * \sepX; }
        \draw ({\i + \distX}, {-2 * \sepY}) rectangle ++(1, 1) 
            node[midway] {$\valor$};
        \path ({\i + \distX}, {-2 * \sepY}) -- ++(1, 0) 
            node[midway, below=2pt] {$\i$}
            node[pos=0] (supIzq_\i) {}
            node[pos=1] (supDer_\i) {};
    }
    
    \begin{scope}[shorten <= 0.2cm, shorten >= 0.2cm]
        \draw (supIzq_0) -- ++(0, {1 - \sepY});
        \path (supDer_0) -- ++(0, {1 - \sepY}) 
            node[midway, scale=0.8] {merge};
        \draw (supDer_1) -- ++(0, {1 - \sepY});
        \draw (supIzq_2) -- ++(0, {1 - \sepY});
        \path (supDer_2) -- ++(0, {1 - \sepY}) 
            node[midway, scale=0.8] {merge};
        \draw (supDer_3) -- ++(0, {1 - \sepY});
        \draw (supIzq_4) -- ++(0, {1 - \sepY});
        \path (supDer_4) -- ++(0, {1 - \sepY}) 
            node[midway, scale=0.8] {merge};
        \draw (supDer_5) -- ++(0, {1 - \sepY});
        \draw (supIzq_6) -- ++(0, {1 - \sepY});
        \path (supDer_6) -- ++(0, {1 - \sepY}) 
            node[midway, scale=0.8] {merge};
        \draw (supDer_7) -- ++(0, {1 - \sepY});
    \end{scope}
    
    \foreach \valor [count=\i from 0] in {2, 5, 4, 8, 6, 7, 1, 3} {
        \tikzmath { \distX = (int(\i / 2) - 1.5) * \sepX; }
        \draw ({\i + \distX}, {-3 * \sepY}) rectangle ++(1, 1) 
            node[midway] {$\valor$};
        \path ({\i + \distX}, {-3 * \sepY}) -- ++(1, 0) 
            node[midway, below=2pt] {$\i$}
            node[pos=0] (supIzq_\i) {}
            node[pos=1] (supDer_\i) {};
    }
    
    \begin{scope}[shorten <= 0.2cm, shorten >= 0.2cm]
        \draw (supIzq_0) -- ++({ \sepX / 2}, {1 - \sepY});
        \path (supDer_0) -- ++({ \sepX / 2}, {1 - \sepY})
            node[midway, scale=0.8] {merge};
        \draw (supDer_1) -- ++({ \sepX / 2}, {1 - \sepY});
        
        \draw (supIzq_2) -- ++({-\sepX / 2}, {1 - \sepY});
        \path (supDer_2) -- ++({-\sepX / 2}, {1 - \sepY})
            node[midway, scale=0.8] {merge};
        \draw (supDer_3) -- ++({-\sepX / 2}, {1 - \sepY});
        
        \draw (supIzq_4) -- ++({ \sepX / 2}, {1 - \sepY});
        \path (supDer_4) -- ++({ \sepX / 2}, {1 - \sepY})
            node[midway, scale=0.8] {merge};
        \draw (supDer_5) -- ++({ \sepX / 2}, {1 - \sepY});
        
        \draw (supIzq_6) -- ++({-\sepX / 2}, {1 - \sepY});
        \path (supDer_6) -- ++({-\sepX / 2}, {1 - \sepY})
            node[midway, scale=0.8] {merge};
        \draw (supDer_7) -- ++({-\sepX / 2}, {1 - \sepY});
    \end{scope}
    
    \foreach \valor [count=\i from 0] in {2, 4, 5, 8, 1, 3, 6, 7} {
        \tikzmath { \distX = (2 * int(\i / 4) - 1) * \sepX; }
        \draw ({\i + \distX}, {-4 * \sepY}) rectangle ++(1, 1) 
            node[midway] {$\valor$};
        \path ({\i + \distX}, {-4 * \sepY}) -- ++(1, 0) 
            node[midway, below=2pt] {$\i$}
            node[pos=0] (supIzq_\i) {}
            node[pos=1] (supDer_\i) {};
    }
    
    \begin{scope}[shorten <= 0.2cm, shorten >= 0.2cm]
        \draw (supIzq_0) -- ++(\sepX, {1 - \sepY});        
        \path (supIzq_2) -- ++(\sepX, {1 - \sepY})
            node[midway, scale=0.8] {merge};
        \draw (supDer_3) -- ++(\sepX, {1 - \sepY});
        
        \draw (supIzq_4) -- ++(-\sepX, {1 - \sepY});
        \path (supIzq_6) -- ++(-\sepX, {1 - \sepY})
            node[midway, scale=0.8] {merge};
        \draw (supDer_7) -- ++(-\sepX, {1 - \sepY});
    \end{scope}
    
    \foreach \valor [count=\i from 0] in {1, 2, 3, 4, 5, 6, 7, 8} {
        \draw (\i, {-5 * \sepY}) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, {-5 * \sepY}) -- ++(1, 0) node[midway, below=2pt] {$\i$};
    }

\end{tikzpicture}
\end{document}
```

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```