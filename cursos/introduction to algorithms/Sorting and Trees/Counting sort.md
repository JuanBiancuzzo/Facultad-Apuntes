---
dia: 2025-01-22
etapa: ampliar
referencias:
  - "701"
tags:
  - curso/introduction-to-algorithms/Sorting-and-Trees
  - nota/curso
  - investigación/ciencias-de-la-computación/algoritmos/Sorting-algorithms
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dado $n$ keys que son [[Números enteros|enteros]], los cuales pertenecen al rango de $\set{a,~ ...,~ k + a - 1}$, el cual tiene $k$ elementos y puede ser transformado a $\set{0,~ ...,~ k - 1}$ por simplicidad y por último se asume que cada key, puede entrar en una [[Palabra|palabra]]

```
function CountingSort :: array: Element[], n: Integer, k: Integer -> Element[]
    where GetKey Element -> Integer
then
    let arrayTemporal: any[k][] = []
    
    for i in 0..n then 
        // Agregar array[i] al array en la posicion de la key de array[i]
        Append arrayTemporal[ GetKey array[i] ], array[i]
    end
    
    let output: any[n] = []
    for i in 0..k then
        Concat output, arrayTemporal[i]
    end
    
    return output
end
```

Este [[Algoritmo|algoritmo]] tiene [[Big O Notation|complejidad]] de $O(k + n)$ en tiempo

## Ejemplo
---
Veamos un ejemplo donde tenemos el array $[5,~ 2,~ 4,~ 8,~ 6,~ 7,~ 3,~ 1,~ 3,~ 6,~ 8]$ y lo tenemos que ordenar de menor a mayor con  $k = 10$ 

Tenemos inicialmente el [[Array|array]] y la lista temporal, donde no tienen nada

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos{{5, 2, 4, 8, 6, 7, 3, 1, 3, 6, 8}}
    \tikzmath { \n = dim(\elementos); \k = 10; \indice = 0; }
    
    \tikzmath { 
        \alto = 1; \ancho = 1; \radio = 0.05; 
        \distArray = 3; \distPuntero = 2;
    }
    \foreach \i [parse=true] in {0, ..., \n - 1} {
        \tikzmath { \valor = \elementos[\i]; }
        \draw (\i, 0) rectangle ++(\ancho, \alto) node[midway] {$\valor$};
        \draw (\i, \alto) -- ++(\ancho, 0) 
            node[midway, above=2pt] (indice_\i) {$\i$};
        \path (\i, 0) -- ++(\ancho, \alto)
            node[pos=0] (inf_izq_\i) {}
            node[pos=1] (sup_der_\i) {};
    }
    
    \draw[<-, shorten <=0.2cm, ultra thick] (indice_\indice) 
        -- ++(0, 1) node[above=2pt] {i};
    
    \tikzmath {
        int \indiceIni, \indiceFin;
        \indiceIni = 0; \indiceFin = \n - 1;
    }
    \path (inf_izq_\indiceIni) -- (inf_izq_\indiceFin |- sup_der_\indiceFin)
        node[midway] (centro_array) {};
    \coordinate (inicio) at 
        ($ (centro_array) + ({-(\k - 1) * \ancho / 2}, -\distArray) $);
    
    \foreach \i [parse=true] in {0, ..., \k - 1} {
        \draw ($ (inicio) + (\i, 0) $) rectangle ++(\ancho, \alto) 
            node[midway] (centro_\i) {};
        \draw ($ (inicio) + (\i, \alto) $) -- ++(\ancho, 0) 
            node[midway, above=2pt] {$\i$};
        
        \fill (centro_\i) circle (\radio);
        \draw[->, ultra thick] (centro_\i) -- ++(0, -\distPuntero) 
            node[below=2pt] (final_\i) {None};
    }

\end{tikzpicture}
\end{document}
```

Iterando por todos los elementos, resulta en

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos{{5, 2, 4, 8, 6, 7, 3, 1, 3, 6, 8}}
    \def\cantidades{{0, 1, 1, 2, 1, 1, 2, 1, 2, 0}}
    \tikzmath { \n = dim(\elementos); \k = 10; }
    
    \tikzmath { 
        \alto = 1; \ancho = 1; \radio = 0.05; 
        \distArray = 3; \distPuntero = 2;
    }
    \foreach \i [parse=true] in {0, ..., \n - 1} {
        \tikzmath { \valor = \elementos[\i]; }
        \draw (\ancho * \i, 0) rectangle ++(\ancho, \alto) node[midway] {$\valor$};
        \draw (\ancho * \i, \alto) -- ++(\ancho, 0) 
            node[midway, above=2pt] (indice_\i) {$\i$};
        \path (\i, 0) -- ++(\ancho, \alto)
            node[pos=0] (inf_izq_\i) {}
            node[pos=1] (sup_der_\i) {};
    }
    
    \tikzmath {
        int \indiceIni, \indiceFin;
        \indiceIni = 0; \indiceFin = \n - 1;
    }
    \path (inf_izq_\indiceIni) -- (inf_izq_\indiceFin |- sup_der_\indiceFin)
        node[midway] (centro_array) {};
    \coordinate (inicio) at 
        ($ (centro_array) + ({-(\k - 1) * \ancho / 2}, -\distArray) $);
    
    \foreach \i [parse=true] in {0, ..., \k - 1} {
        \draw ($ (inicio) + (\ancho * \i, 0) $) rectangle ++(\ancho, \alto) 
            node[midway] (centro_\i) {};
        \draw ($ (inicio) + (\ancho * \i, \alto) $) -- ++(\ancho, 0) 
            node[midway, above=2pt] {$\i$};
        
        \fill (centro_\i) circle (\radio);
        \draw[->, ultra thick] (centro_\i) -- ++(0, -\distPuntero) 
            node[below=2pt] (final_\i) {};
    }
    
    \foreach \i in {0, 9} {
        \path (final_\i.center) node {None};
    }
    
    \foreach \i in {1, ..., 8} {
        \tikzmath { \cantidad = \cantidades[\i]; }
        \coordinate (esquina_\i) at ($ (final_\i.center) + ({-\ancho / 2}, 0) $);
        
        \foreach \j [parse=true] in {0, ..., \cantidad - 1} {
            \draw ($ (esquina_\i) + (0, -\j * \alto) $) 
                rectangle ++(\ancho, -\alto)
                    node[midway] {$\i$};
        }
    }

\end{tikzpicture}
\end{document}
```

Por lo tanto los tenemos ordenas

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```