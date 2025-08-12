---
dia: 2023-11-20
tags:
  - carrera/ingeniería-en-informática/sisop/Virtualización-de-memoria
  - colección/data-structures/estructura
  - curso/introduction-to-algorithms/Sorting-and-Trees
  - investigación/ciencias-de-la-computación/data-structures
  - nota/colección
  - nota/curso
  - nota/facultad
  - nota/investigacion
aliases:
  - Max-Heap
  - Min-Heap
referencias:
  - "701"
etapa: ampliar
nombreEstructura: Heap
vinculoFacultad:
  - tema: Virtualización de memoria
    capitulo: 3
    materia: Sistemas operativos
    carrera: Ingeniería en informática
vinculoCurso:
  - "[[cursos/introduction to algorithms/Sorting and Trees/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este tipo de [[Memoria|memoria]] es aquel que es obtenida y liberada explícitamente por el programador.

## Estructura de datos
---
> El heap es una implementación de una [[Priority Queue|cola con prioridad]], que usa un [[Array|array]] donde se lo puede visualizar como un [[Árbol binario|árbol binario]]
> 
> Un [[Máximo|Max]]-Heap tiene la propiedad donde cada key de cada [[Nodo|nodo]] es mayor o igual ($\ge$) a las keys de los hijos. Esta es una definición [[Recursividad|recursiva]]. Para un [[Mínimo|Min]]-Heap es igual  donde la key de cada nodo es menor o igual ($\le$) a las keys de los hijos
^descripcion

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos{{16, 14, 10, 8, 7, 9, 3, 2, 4, 1, 2, 5, 4, 1}}
    \tikzmath { \largo = dim(\elementos); }
    
    \foreach \i [parse=true] in {0, ..., \largo - 1} {
        \tikzmath { \valor = \elementos[\i]; }
        \draw (\i, 0) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, 0) -- ++(1, 0) node[midway, below=2pt] {$\i$};
    }
    
    \draw[->, ultra thick] ({\largo / 2}, -0.75) -- ++(0, -1.2);
    
    \begin{scope}[cm={1, 0, 0, 1, ({\largo / 2}, -3)}]
        \tikzmath { 
            \cantNiveles = ceil(log2(\largo)); \raiz = \elementos[0];
            \radio = 0.5; \sepX = \cantNiveles * 0.9; \sepY = 2;
            
            \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
            \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
            \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
            \infDerX = \supDerX; \infDerY = -\supDerY;
        }
        
        \draw (0, 0) circle (\radio) node (centro_0_0) {$\raiz$};
        \path (0, \radio) node[above=2pt] {$0$};
        \path (\infIzqX, \infIzqY) node (inf_izq_0_0) {};
        \path (\infDerX, \infDerY) node (inf_der_0_0) {};
        
        \foreach \j [parse=true] in {1, ..., \cantNiveles - 1} {
            \tikzmath { 
                \nodosPorNivel = 2^\j;
                \nodosRestantes = \largo - (\nodosPorNivel - 1);
                \cantNodos = min(\nodosPorNivel, \nodosRestantes);
            }
            
            \foreach \i [parse=true] in {0, ..., \cantNodos - 1} {
                \tikzmath { 
                    \indice = int(2^\j - 1 + \i);
                    \valor = \elementos[\indice];
                    
                    int \nivelPadre, \padre;
                    \nivelPadre = \j - 1; \padre = int(\i / 2);
                    \sepActual = ((mod(\indice, 2) == 0) ? 1 : -1) * \sepX / \j;
                }
                \coordinate (padre) at (centro_\nivelPadre_\padre);
                \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
                
                \draw (pos) circle (\radio) node (centro_\j_\i) {$\valor$};
                \path ($ (pos) + (0, \radio) $) node[above=2pt] {$\indice$};
                
                \path ($ (pos) + (\infIzqX, \infIzqY) $) node (inf_izq_\j_\i) {};
                \path ($ (pos) + (\infDerX, \infDerY) $) node (inf_der_\j_\i) {};
                \path ($ (pos) + (\supIzqX, \supIzqY) $) node (sup_izq_\j_\i) {};
                \path ($ (pos) + (\supDerX, \supDerY) $) node (sup_der_\j_\i) {};
            }
        }
        
        \begin{scope}[<-, shorten <=0.1cm, shorten >=0.1]
            \foreach \j [parse=true] in {1, ..., \cantNiveles - 1} {
                \tikzmath { 
                    \nodosPorNivel = 2^\j;
                    \nodosRestantes = \largo - (\nodosPorNivel - 1);
                    \cantNodos = min(\nodosPorNivel, \nodosRestantes);
                }
            
                \foreach \i [parse=true] in {0, ..., \cantNodos - 1} {
                    \tikzmath {
                        \indice = int(2^\j - 1 + \i);
                        \dir = (mod(\indice, 2) == 0) ? "izq" : "der";
                        \dirPadre = (mod(\indice, 2) == 0) ? "der" : "izq";
                        
                        int \nivel, \actual, \nivelPadre, \padre;
                        \nivel = \j; \nivelPadre = \j - 1;
                        \actual = \i; \padre = int(\i / 2);
                    }
                    
                    \draw (sup_\dir_\nivel_\actual) 
                        -- (inf_\dirPadre_\nivelPadre_\padre);
                }
            }
        \end{scope}
    \end{scope}

\end{tikzpicture}
\end{document}
```
^representacion

Esta visualización nos permite ver lo siguiente
* La raíz del árbol es el elemento en el índice $i = 0$
* El índice del padre es $i / 2$
    * El índice del hijo izquierdo es $2i + 1$
    * El índice del hijo derecho es $2i + 2$

### Operaciones
---
Vamos a ver que operaciones debe tener un heap para mantener la propiedad de Max-Heap. Para mantener la propiedad de Min-Heap vamos a tener en cuenta la diferencia entre las dos

#### Crear Max-Heap
---
Produce un Max-Heap de un array arbitrario 

```
function CrearMaxHeap :: array: Key[] n : Integer -> Key[]

    for i in (n / 2 - 1) .. 1 then
        MaxHeapify array n i
    end

    return array
end
```

Notemos que todas las keys entre $\frac{n}{2}$ hasta $n - 1$ son hojas por lo que ya cumplen la propiedad

Este [[Algoritmo|algoritmo]] tiene una [[Big O Notation|complejidad]] $O(n \log_2(n))$, pero haciendo un análisis más detallado 

Observemos que
* Para `MaxHeapify` toma $O(1)$ si es un nodo hoja, y si en general toma $O(l)$ para nodos que están $l$ niveles arriba de las hojas
* La raíz esta a un nivel $log_2(n)$, para los $2$ nodos siguientes $log_2(n) - 1$, para los $4$ nodos siguientes $log_2(n) - 2$, etc.  

Por lo tanto, podemos sumar todos los niveles de la siguiente forma $$ \frac{n}{4} ~ (1 ~ C) + \frac{n}{8} ~ (2 ~ C) + \frac{n}{16} ~ (3 ~ C) + \cdots + 1 ~ (\log_2(n) ~ C) $$ donde $C$ es el tiempo de trabajo constante dado por hacer las comparaciones y los swaps

Si tomamos que $\frac{n}{4} = 2^k$ podemos reducir esta sumatoria a lo siguiente $$ 
    2^kC \left( \frac{1}{2^0} + \frac{2}{2^1} + \frac{3}{2^2} + \cdots + \frac{k + 1}{2^k} \right) = 2^kC ~ \sum_{i=0}^{k} \frac{i + 1}{2^i}
$$ donde esta [[Serie|serie]] es una [[Convergencia absoluta|serie convergente]] y esta acotada por una constante $A$  por lo que la complejidad esta dada por $$ 2^kCA $$ y recordemos que $\frac{n}{4} = 2^k$ por lo tanto $$ \frac{n}{4} CA $$ dándonos una complejidad de $$ O(n) $$

#### Max-Heapify
---
Corrige una única violación de la propiedad en la raíz de un subárbol dado

```
function MaxHeapify :: array : Key[] n : Integer i : Integer -> void

    let hijoIzquierdo = Izquierdo i
    let hijoDerecho = Derecho i
    
    let masGrande = i
    
    if hijoIzquierdo < n and array[hijoIzquierdo] > array[i] then
        masGrande = hijoIzquierdo
    end
    
    if hijoDerecho < n and array[hijoDerecho] > array[masGrande] then
        masGrande = hijoDerecho
    end
    
    if masGrande != i then
        Swap array i masGrande 
        MaxHeapify array n masGrande
    end    
end
```

Esta tiene una complejidad esta dada por $O(\log_2(n))$, esto lo podemos razonar viendo que el árbol binario que usamos como visualización, es un [[Árbol balanceado|árbol balanceado]] por construcción, por lo que la cantidad de niveles que tiene es $\lceil \log_2(n) \rceil$ y como este algoritmo tiene como máximo $\lceil \log_2(n) \rceil$ llamados recursivos, y suponiendo $O(1)$ para la operación de `Swap`, obtenemos el resultado mencionado anteriormente


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```