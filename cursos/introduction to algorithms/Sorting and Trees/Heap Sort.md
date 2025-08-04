---
dia: 2025-01-17
etapa: terminado
referencias:
  - "701"
tags:
  - curso/introduction-to-algorithms/Sorting-and-Trees
  - investigación/ciencias-de-la-computación/algoritmos/Sorting-algorithms
  - nota/curso
  - nota/investigacion
vinculoCurso:
  - "[[cursos/introduction to algorithms/Sorting and Trees/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El [[Algoritmo|algoritmo]] de ordenamiento que usa la [[Heap|estructura Heap]] como la fuente de generar el ordenamiento

Los pasos son
1. [[Heap#Crear Max-Heap|Crear Max-Heap]] a partir del [[Array|array]]
2. Encontramos el [[Máximo|máximo]] que es la raíz del árbol `array[0]`
3. Intercambiar `array[n - 1]` con `array[0]`
    * Esto hace que el máximo este al final de array
4. Reducimos el tamaño de $n$ por uno, eliminando el máximo
5. La nueva raíz viola la propiedad de Max-Heap, pero los hijos la mantienen, por lo que se puede aplicar [[Heap#Max-Heapify|Max-Heapify]] para reestablecer la propiedad
6. Volver al paso $2$ si todavía el tamaño no es nulo


```
function HeapSort :: array: Key[], n: Integer -> Key[]
    
    let heapfyArray = CrearMaxHeap array, n
    let arrayOrdenado: Key[] = []
    let indice = 0
    
    while n > 0 then
        // Encontramos el máximo
        arrayOrdenado[indice] = array[0]
        indice += 1
        
        // Descartamos el máximo
        array[0] = array[n - 1]
        n -= 1
        
        // Reestablecemos la propiedad de Max-Heap
        MaxHeapify array, n, 0    
    end
    
    return arrayOrdenado
end
```

## Observaciones
---
La [[Big O Notation|complejidad]] de este algoritmo es $O(n ~ \log_2(n))$, ya que tenemos $n$ pasos y `MaxHeapify` tiene una complejidad de $O(log_2(n))$

Actualmente ocupa $O(2n)$ en espacio de [[Memoria|memoria]] por crear el array ordenado. Pero notemos que si pusiéramos el máximo en la última posición, el array termina estando ordenado de menor a mayor. Entonces podemos modificar el algoritmo para tener un algoritmo in place

```
function HeapSort :: array: Key[] n: Integer -> void
    
    let heapfyArray = CrearMinHeap array, n
        
    while n > 0 then        
        // Intercambiamos el mínimo con el último
        let temp = array[0]
        array[0] = array[n - 1]
        array[n - 1] = temp
        
        n -= 1
        
        // Reestablecemos la propiedad de min-Heap
        MinHeapify array, n, 0    
    end
end
```

## Ejemplo
---
Veamos un ejemplo donde tenemos el array $[5,~ 2,~ 4,~ 8,~ 6,~ 7,~ 3,~ 1]$ y lo tenemos que ordenar de  mayor a menor

Veamos la representación de este array como heap

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos{{5, 2, 4, 8, 6, 7, 3, 1}}
    \tikzmath { \largo = dim(\elementos); }
    
    \foreach \i [parse=true] in {0, ..., \largo - 1} {
        \tikzmath { \valor = \elementos[\i]; }
        \draw (\i, 0) rectangle ++(1, 1) node[midway] {$\valor$};
        \path (\i, 0) -- ++(1, 0) node[midway, below=2pt] {$\i$};
    }
    
    \draw[->, ultra thick] ({\largo / 2}, -0.75) -- ++(0, -1.2);
    
    \begin{scope}[cm={1, 0, 0, 1, ({\largo / 2}, -3)}]
        \tikzmath { 
            \cantNiveles = ceil(log2(\largo + 1)); \raiz = \elementos[0];
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


Notamos que no cumple la propiedad de Max-Heap, por lo que haremos el algoritmo de `Crear Max-Heap`, y obtenemos 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos{{8, 6, 7, 2, 5, 4, 3, 1}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo + 1)); \raiz = \elementos[0];
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

\end{tikzpicture}
\end{document}
```


Ahora podemos seguir el algoritmo planteado, obtenemos el máximo que en este caso es el $8$, lo intercambiamos al índice $7$ y aplicamos `Max-Heapify` produciendo 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos{{7, 6, 4, 2, 5, 1, 3}}
    \def\ordenados{{8}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo + 1)); \raiz = \elementos[0];
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
    \path (\supIzqX, \supIzqY) node (sup_izq_0_0) {};
    \path (\supDerX, \supDerY) node (sup_der_0_0) {};
    
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
    
    \tikzmath { 
        \separacion = 2; \cantOrdenados = dim(\ordenados);
        int \ultimoNivel;
        \ultimoNivel = \cantNiveles - 1;
    }
    \coordinate (equinaSup) at (sup_izq_0_0 -| inf_izq_\ultimoNivel_0);
    \coordinate (equinaInf) at (inf_izq_\ultimoNivel_0);
    \path (equinaSup) -- (equinaInf) node[midway] (centro) {};
    
    \coordinate (inicio) at ($ (centro) + (-\separacion, {\cantOrdenados / 2}) $);
    
    \path ($ (inicio) + (0, 0) $) -- ++(1, 0) 
        node[midway, above=2pt] {Resultado};
    \foreach \i [parse=true] in {0, ..., \cantOrdenados - 1} {
        \tikzmath { \valor = \ordenados[\i]; }
        \draw ($ (inicio) + (0, -\i) $) rectangle ++(1, -1) 
            node[midway] {$\valor$};
    }

\end{tikzpicture}
\end{document}
```


Ahora vamos repitiendo este proceso, obtenemos la raíz, la intercambiamos con el último elemento, y aplicamos `Max-Heapify` para volver a tener la propiedad de Max-Heap

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos{{6, 5, 4, 2, 3, 1}}
    \def\ordenados{{8, 7}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo + 1)); \raiz = \elementos[0];
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
    \path (\supIzqX, \supIzqY) node (sup_izq_0_0) {};
    \path (\supDerX, \supDerY) node (sup_der_0_0) {};
    
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
    
    \tikzmath { 
        \separacion = 2; \cantOrdenados = dim(\ordenados);
        int \ultimoNivel;
        \ultimoNivel = \cantNiveles - 1;
    }
    \coordinate (equinaSup) at (sup_izq_0_0 -| inf_izq_\ultimoNivel_0);
    \coordinate (equinaInf) at (inf_izq_\ultimoNivel_0);
    \path (equinaSup) -- (equinaInf) node[midway] (centro) {};
    
    \coordinate (inicio) at ($ (centro) + (-\separacion, {\cantOrdenados / 2}) $);
    
    \path ($ (inicio) + (0, 0) $) -- ++(1, 0) 
        node[midway, above=2pt] {Resultado};
    \foreach \i [parse=true] in {0, ..., \cantOrdenados - 1} {
        \tikzmath { \valor = \ordenados[\i]; }
        \draw ($ (inicio) + (0, -\i) $) rectangle ++(1, -1) 
            node[midway] {$\valor$};
    }

\end{tikzpicture}
\end{document}
```

Cambiando la raíz con el índice $5$

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos{{5, 3, 4, 2, 1}}
    \def\ordenados{{8, 7, 6}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo + 1)); \raiz = \elementos[0];
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
    \path (\supIzqX, \supIzqY) node (sup_izq_0_0) {};
    \path (\supDerX, \supDerY) node (sup_der_0_0) {};
    
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
    
    \tikzmath { 
        \separacion = 2; \cantOrdenados = dim(\ordenados);
        int \ultimoNivel;
        \ultimoNivel = \cantNiveles - 1;
    }
    \coordinate (equinaSup) at (sup_izq_0_0 -| inf_izq_\ultimoNivel_0);
    \coordinate (equinaInf) at (inf_izq_\ultimoNivel_0);
    \path (equinaSup) -- (equinaInf) node[midway] (centro) {};
    
    \coordinate (inicio) at ($ (centro) + (-\separacion, {\cantOrdenados / 2}) $);
    
    \path ($ (inicio) + (0, 0) $) -- ++(1, 0) 
        node[midway, above=2pt] {Resultado};
    \foreach \i [parse=true] in {0, ..., \cantOrdenados - 1} {
        \tikzmath { \valor = \ordenados[\i]; }
        \draw ($ (inicio) + (0, -\i) $) rectangle ++(1, -1) 
            node[midway] {$\valor$};
    }

\end{tikzpicture}
\end{document}
```

Cambiando la raíz con el índice $4$

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos{{4, 3, 1, 2}}
    \def\ordenados{{8, 7, 6, 5}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo + 1)); \raiz = \elementos[0];
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
    \path (\supIzqX, \supIzqY) node (sup_izq_0_0) {};
    \path (\supDerX, \supDerY) node (sup_der_0_0) {};
    
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
    
    \tikzmath { 
        \separacion = 2; \cantOrdenados = dim(\ordenados);
        int \ultimoNivel;
        \ultimoNivel = \cantNiveles - 1;
    }
    \coordinate (equinaSup) at (sup_izq_0_0 -| inf_izq_\ultimoNivel_0);
    \coordinate (equinaInf) at (inf_izq_\ultimoNivel_0);
    \path (equinaSup) -- (equinaInf) node[midway] (centro) {};
    
    \coordinate (inicio) at ($ (centro) + (-\separacion, {\cantOrdenados / 2}) $);
    
    \path ($ (inicio) + (0, 0) $) -- ++(1, 0) 
        node[midway, above=2pt] {Resultado};
    \foreach \i [parse=true] in {0, ..., \cantOrdenados - 1} {
        \tikzmath { \valor = \ordenados[\i]; }
        \draw ($ (inicio) + (0, -\i) $) rectangle ++(1, -1) 
            node[midway] {$\valor$};
    }

\end{tikzpicture}
\end{document}
```

Cambiando la raíz con el índice $3$

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos{{3, 2, 1}}
    \def\ordenados{{8, 7, 6, 5, 4}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo + 1)); \raiz = \elementos[0];
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
    \path (\supIzqX, \supIzqY) node (sup_izq_0_0) {};
    \path (\supDerX, \supDerY) node (sup_der_0_0) {};
    
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
    
    \tikzmath { 
        \separacion = 2; \cantOrdenados = dim(\ordenados);
        int \ultimoNivel;
        \ultimoNivel = \cantNiveles - 1;
    }
    \coordinate (equinaSup) at (sup_izq_0_0 -| inf_izq_\ultimoNivel_0);
    \coordinate (equinaInf) at (inf_izq_\ultimoNivel_0);
    \path (equinaSup) -- (equinaInf) node[midway] (centro) {};
    
    \coordinate (inicio) at ($ (centro) + (-\separacion, {\cantOrdenados / 2}) $);
    
    \path ($ (inicio) + (0, 0) $) -- ++(1, 0) 
        node[midway, above=2pt] {Resultado};
    \foreach \i [parse=true] in {0, ..., \cantOrdenados - 1} {
        \tikzmath { \valor = \ordenados[\i]; }
        \draw ($ (inicio) + (0, -\i) $) rectangle ++(1, -1) 
            node[midway] {$\valor$};
    }

\end{tikzpicture}
\end{document}
```

Cambiando la raíz con el índice $2$

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos{{2, 1}}
    \def\ordenados{{8, 7, 6, 5, 4, 3}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo + 1)); \raiz = \elementos[0];
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
    \path (\supIzqX, \supIzqY) node (sup_izq_0_0) {};
    \path (\supDerX, \supDerY) node (sup_der_0_0) {};
    
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
    
    \tikzmath { 
        \separacion = 2; \cantOrdenados = dim(\ordenados);
        int \ultimoNivel;
        \ultimoNivel = \cantNiveles - 1;
    }
    \coordinate (equinaSup) at (sup_izq_0_0 -| inf_izq_\ultimoNivel_0);
    \coordinate (equinaInf) at (inf_izq_\ultimoNivel_0);
    \path (equinaSup) -- (equinaInf) node[midway] (centro) {};
    
    \coordinate (inicio) at ($ (centro) + (-\separacion, {\cantOrdenados / 2}) $);
    
    \path ($ (inicio) + (0, 0) $) -- ++(1, 0) 
        node[midway, above=2pt] {Resultado};
    \foreach \i [parse=true] in {0, ..., \cantOrdenados - 1} {
        \tikzmath { \valor = \ordenados[\i]; }
        \draw ($ (inicio) + (0, -\i) $) rectangle ++(1, -1) 
            node[midway] {$\valor$};
    }

\end{tikzpicture}
\end{document}
```


Cambiando la raíz con el índice $1$

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos{{1}}
    \def\ordenados{{8, 7, 6, 5, 4, 3, 2}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo + 1)); \raiz = \elementos[0];
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
    \path (\supIzqX, \supIzqY) node (sup_izq_0_0) {};
    \path (\supDerX, \supDerY) node (sup_der_0_0) {};
    
    \tikzmath { 
        \separacion = 2; \cantOrdenados = dim(\ordenados);
        int \ultimoNivel;
        \ultimoNivel = \cantNiveles - 1;
    }
    \coordinate (equinaSup) at (sup_izq_0_0 -| inf_izq_\ultimoNivel_0);
    \coordinate (equinaInf) at (inf_izq_\ultimoNivel_0);
    \path (equinaSup) -- (equinaInf) node[midway] (centro) {};
    
    \coordinate (inicio) at ($ (centro) + (-\separacion, {\cantOrdenados / 2}) $);
    
    \path ($ (inicio) + (0, 0) $) -- ++(1, 0) 
        node[midway, above=2pt] {Resultado};
    \foreach \i [parse=true] in {0, ..., \cantOrdenados - 1} {
        \tikzmath { \valor = \ordenados[\i]; }
        \draw ($ (inicio) + (0, -\i) $) rectangle ++(1, -1) 
            node[midway] {$\valor$};
    }

\end{tikzpicture}
\end{document}
```


Por último, obtenemos la raíz y obtenemos el array ordenado

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```