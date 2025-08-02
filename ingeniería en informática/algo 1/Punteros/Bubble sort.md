---
dia: 2025-02-10
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-electrónica/algo-1/Punteros
  - carrera/ingeniería-en-informática/algo-1/Punteros
  - investigación/ciencias-de-la-computación/algoritmos/Sorting-algorithms
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - nota/facultad
  - nota/investigacion
aliases:
  - Ordenamiento de burbuja
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este [[Algoritmo de ordenamiento|método de burbujeo]] tiene como idea principal consiste en ir comparando a cada elemento de un [[Array|vector]] `array[]`, con su adyacente y si estos están en el orden equivocado se intercambian

```
function BubbleSort :: array: Integer[], n: Integer -> Integer[]
    for i in 0..n then
        for j in 0..n - i then
            if array[i] > array[j] then
                let temp = array[j]
                array[j] = array[i]
                array[i] = temp
            end
        end    
    end
    
    return array
end
```

Tiene [[Big O Notation|complejidad]] $O(n^2)$

## Ejemplo
---
Veamos un ejemplo donde tenemos el array $[5,~ 2,~ 4,~ 8,~ 6,~ 7,~ 3,~ 1]$ y lo tenemos que ordenar de  menor a mayor

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\definecolor{verde}{RGB}{24, 134, 75} 
\begin{tikzpicture}[scale=1.1, transform shape, thick]
    \tikzmath { \sepX = 1; \sepY = 3; \largo = 8; }
    
    \foreach \lista/\indiceMayor [count=\i from 0] in {
        {2, 5, 4, 8, 6, 7, 3, 1}/3,
        {2, 4, 5, 8, 6, 7, 3, 1}/3,
        {2, 4, 5, 8, 6, 7, 3, 1}/3,
        {2, 4, 5, 6, 8, 7, 3, 1}/4,
        {2, 4, 5, 6, 7, 8, 3, 1}/5,
        {2, 4, 5, 6, 7, 3, 8, 1}/6,
        {2, 4, 5, 6, 7, 3, 1, 8}/7,
    } {
        \foreach \valor [count=\j from 0] in \lista {
            \tikzmath { \fondo = \j == \indiceMayor ? "verde" : "white"; }
            \filldraw[fill=\fondo] ({2 * \i}, -\j) rectangle ++(1, -1) 
                node[midway] {$\valor$};
            \path ({2 * \i}, -\j) -- ++(0, -1) node[midway, left=2pt] {$\j$};
            \path ({2 * \i + 1}, -\j) -- ++(0, -1) node[pos=0.5] (cen_\i_\j) {};
        }
        
        \tikzmath { 
            int \siguiente; \siguiente = \i + 1; 
            \largo = dim(\lista);
        }
        \ifthenelse{\siguiente < \largo}{
            \draw[<->] (cen_\i_\i) .. controls
                    ($ (cen_\i_\i) + (0.5, 0) $) and
                    ($ (cen_\i_\siguiente) + (0.5, 0) $)
                .. (cen_\i_\siguiente);
        }{}
    }    

\end{tikzpicture}
\end{document}
```


Ahora que aseguramos la última posición, y seguimos ordenando 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\definecolor{verde}{RGB}{24, 134, 75} 
\begin{tikzpicture}[scale=1.1, transform shape, thick]
    \tikzmath { \sepX = 1; \sepY = 3; \indAsegurada = 7; }
    
    \foreach \lista/\indiceMayor [count=\i from 0] in {
        {2, 4, 5, 6, 7, 3, 1, 8}/4, 
        {2, 4, 5, 6, 7, 3, 1, 8}/4,
        {2, 4, 5, 6, 7, 3, 1, 8}/4,
        {2, 4, 5, 6, 7, 3, 1, 8}/4,
        {2, 4, 5, 6, 3, 7, 1, 8}/5,
        {2, 4, 5, 6, 3, 1, 7, 8}/6,
    } {
        \foreach \valor [count=\j from 0] in \lista {
            \tikzmath { 
                \fondo = \j == \indiceMayor || \j >= \indAsegurada 
                    ? "verde" : "white"; 
            }
            \filldraw[fill=\fondo] ({2 * \i}, -\j) rectangle ++(1, -1) 
                node[midway] {$\valor$};
            \path ({2 * \i}, -\j) -- ++(0, -1) node[midway, left=2pt] {$\j$};
            \path ({2 * \i + 1}, -\j) -- ++(0, -1) node[pos=0.5] (cen_\i_\j) {};
        }
        
        \tikzmath { 
            int \siguiente; \siguiente = \i + 1; 
            \largo = dim(\lista);
        }
        \ifthenelse{\siguiente < \largo}{
            \draw[<->] (cen_\i_\i) .. controls
                    ($ (cen_\i_\i) + (0.5, 0) $) and
                    ($ (cen_\i_\siguiente) + (0.5, 0) $)
                .. (cen_\i_\siguiente);
        }{}
    }    

\end{tikzpicture}
\end{document}
```

En cada iteración, aseguramos un número más

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\definecolor{verde}{RGB}{24, 134, 75} 
\begin{tikzpicture}[scale=1.1, transform shape, thick]
    \tikzmath { \sepX = 1; \sepY = 3; \indAsegurada = 6; }
    
    \foreach \lista/\indiceMayor [count=\i from 0] in {
        {2, 4, 5, 6, 3, 1, 7, 8}/3,
        {2, 4, 5, 6, 3, 1, 7, 8}/3,
        {2, 4, 5, 6, 3, 1, 7, 8}/3,
        {2, 4, 5, 3, 6, 1, 7, 8}/4,
        {2, 4, 5, 3, 1, 6, 7, 8}/5,
    } {
        \foreach \valor [count=\j from 0] in \lista {
            \tikzmath { 
                \fondo = \j == \indiceMayor || \j >= \indAsegurada 
                    ? "verde" : "white"; 
            }
            \filldraw[fill=\fondo] ({2 * \i}, -\j) rectangle ++(1, -1) 
                node[midway] {$\valor$};
            \path ({2 * \i}, -\j) -- ++(0, -1) node[midway, left=2pt] {$\j$};
            \path ({2 * \i + 1}, -\j) -- ++(0, -1) node[pos=0.5] (cen_\i_\j) {};
        }
        
        \tikzmath { 
            int \siguiente; \siguiente = \i + 1; 
            \largo = dim(\lista);
        }
        \ifthenelse{\siguiente < \largo}{
            \draw[<->] (cen_\i_\i) .. controls
                    ($ (cen_\i_\i) + (0.5, 0) $) and
                    ($ (cen_\i_\siguiente) + (0.5, 0) $)
                .. (cen_\i_\siguiente);
        }{}
    }    

\end{tikzpicture}
\end{document}
```

Seguimos hasta terminar

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\definecolor{verde}{RGB}{24, 134, 75} 
\begin{tikzpicture}[scale=1.1, transform shape, thick]
    \tikzmath { \sepX = 1; \sepY = 3; \indAsegurada = 5; }
    
    \foreach \lista/\indiceMayor [count=\i from 0] in {
        {2, 4, 5, 3, 1, 6, 7, 8}/2,
        {2, 4, 5, 3, 1, 6, 7, 8}/2,
        {2, 4, 3, 5, 1, 6, 7, 8}/3,
        {2, 4, 3, 1, 5, 6, 7, 8}/4,
    } {
        \foreach \valor [count=\j from 0] in \lista {
            \tikzmath { 
                \fondo = \j == \indiceMayor || \j >= \indAsegurada 
                    ? "verde" : "white"; 
            }
            \filldraw[fill=\fondo] ({2 * \i}, -\j) rectangle ++(1, -1) 
                node[midway] {$\valor$};
            \path ({2 * \i}, -\j) -- ++(0, -1) node[midway, left=2pt] {$\j$};
            \path ({2 * \i + 1}, -\j) -- ++(0, -1) node[pos=0.5] (cen_\i_\j) {};
        }
        
        \tikzmath { 
            int \siguiente; \siguiente = \i + 1; 
            \largo = dim(\lista);
        }
        \ifthenelse{\siguiente < \largo}{
            \draw[<->] (cen_\i_\i) .. controls
                    ($ (cen_\i_\i) + (0.5, 0) $) and
                    ($ (cen_\i_\siguiente) + (0.5, 0) $)
                .. (cen_\i_\siguiente);
        }{}
    }    

\end{tikzpicture}
\end{document}
```

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\definecolor{verde}{RGB}{24, 134, 75} 
\begin{tikzpicture}[scale=1.1, transform shape, thick]
    \tikzmath { \sepX = 1; \sepY = 3; \indAsegurada = 4; }
    
    \foreach \lista/\indiceMayor [count=\i from 0] in {
        {2, 4, 3, 1, 5, 6, 7, 8}/1,
        {2, 3, 4, 1, 5, 6, 7, 8}/2,
        {2, 3, 1, 4, 5, 6, 7, 8}/3,
    } {
        \foreach \valor [count=\j from 0] in \lista {
            \tikzmath { 
                \fondo = \j == \indiceMayor || \j >= \indAsegurada 
                    ? "verde" : "white"; 
            }
            \filldraw[fill=\fondo] ({2 * \i}, -\j) rectangle ++(1, -1) 
                node[midway] {$\valor$};
            \path ({2 * \i}, -\j) -- ++(0, -1) node[midway, left=2pt] {$\j$};
            \path ({2 * \i + 1}, -\j) -- ++(0, -1) node[pos=0.5] (cen_\i_\j) {};
        }
        
        \tikzmath { 
            int \siguiente; \siguiente = \i + 1; 
            \largo = dim(\lista);
        }
        \ifthenelse{\siguiente < \largo}{
            \draw[<->] (cen_\i_\i) .. controls
                    ($ (cen_\i_\i) + (0.5, 0) $) and
                    ($ (cen_\i_\siguiente) + (0.5, 0) $)
                .. (cen_\i_\siguiente);
        }{}
    }    

\end{tikzpicture}
\end{document}
```

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\definecolor{verde}{RGB}{24, 134, 75} 
\begin{tikzpicture}[scale=1.1, transform shape, thick]
    \tikzmath { \sepX = 1; \sepY = 3; \indAsegurada = 3; }
    
    \foreach \lista/\indiceMayor [count=\i from 0] in {
        {2, 3, 1, 4, 5, 6, 7, 8}/1,
        {2, 1, 3, 4, 5, 6, 7, 8}/2,
    } {
        \foreach \valor [count=\j from 0] in \lista {
            \tikzmath { 
                \fondo = \j == \indiceMayor || \j >= \indAsegurada 
                    ? "verde" : "white"; 
            }
            \filldraw[fill=\fondo] ({2 * \i}, -\j) rectangle ++(1, -1) 
                node[midway] {$\valor$};
            \path ({2 * \i}, -\j) -- ++(0, -1) node[midway, left=2pt] {$\j$};
            \path ({2 * \i + 1}, -\j) -- ++(0, -1) node[pos=0.5] (cen_\i_\j) {};
        }
        
        \tikzmath { 
            int \siguiente; \siguiente = \i + 1; 
            \largo = dim(\lista);
        }
        \ifthenelse{\siguiente < \largo}{
            \draw[<->] (cen_\i_\i) .. controls
                    ($ (cen_\i_\i) + (0.5, 0) $) and
                    ($ (cen_\i_\siguiente) + (0.5, 0) $)
                .. (cen_\i_\siguiente);
        }{}
    }    

\end{tikzpicture}
\end{document}
```

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\definecolor{verde}{RGB}{24, 134, 75} 
\begin{tikzpicture}[scale=1.1, transform shape, thick]
    \tikzmath { \sepX = 1; \sepY = 3; }
    
    \foreach \lista [count=\i from 0] in {
        {1, 2, 3, 4, 5, 6, 7, 8},
    } {
        \foreach \valor [count=\j from 0] in \lista {
            \filldraw[fill=verde] ({2 * \i}, -\j) rectangle ++(1, -1) 
                node[midway] {$\valor$};
            \path ({2 * \i}, -\j) -- ++(0, -1) node[midway, left=2pt] {$\j$};
            \path ({2 * \i + 1}, -\j) -- ++(0, -1) node[pos=0.5] (cen_\i_\j) {};
        }
        
        \tikzmath { 
            int \siguiente; \siguiente = \i + 1; 
            \largo = dim(\lista);
        }
        \ifthenelse{\siguiente < \largo}{
            \draw[<->] (cen_\i_\i) .. controls
                    ($ (cen_\i_\i) + (0.5, 0) $) and
                    ($ (cen_\i_\siguiente) + (0.5, 0) $)
                .. (cen_\i_\siguiente);
        }{}
    }

\end{tikzpicture}
\end{document}
```

Obteniendo finalmente un array ordenado
