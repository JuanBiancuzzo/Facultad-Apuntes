---
dia: 2025-01-21
etapa: empezado
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
Se basa en la estructura de [[Árbol de Adelson-Velsky y Landis|árbol AVL]] como la fuente de generar el ordenamiento

Los pasos son
1. [[Árbol de Adelson-Velsky y Landis#Insert|Insertar]] todos los elementos del [[Array|array]] en el árbol
2. [[Árbol de Adelson-Velsky y Landis#InorderWalk|Recorrer]] el árbol y conseguir el array ordenado

```
function AVLSort :: array: Key[] n: Integer -> Key[]
    let tree = BuildTree
    for i in 0..n then
        Insert tree array[i]
    end

    return InorderWalk tree
end
```

Observemos que como insertar tiene [[Big O Notation|complejidad]] $O(h)$ donde $h$ es la altura del árbol, y como el AVL mantiene que la altura es $O(\log_2(n))$, y tenemos que insertar $n$ elementos, podemos concluir que su complejidad es $O(n ~ \log_2(n))$

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
        \radio = 0.5; \raiz = 5; \alturaRaiz = 0;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {$\raiz$};
    \path (0, -\radio) node[below=2pt] {$h = \alturaRaiz$};
    
    \path (\infIzqX, \infIzqY) node (inf_izq_0) {};
    \path (\infDerX, \infDerY) node (inf_der_0) {};
    \path (\supIzqX, \supIzqY) node (sup_izq_0) {};
    \path (\supDerX, \supDerY) node (sup_der_0) {};
    
\end{tikzpicture}
\end{document}
``` 

Insertando $2$ no invalida la invarianza, pero al agregar $4$ tenemos la situación

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos  {{5,  2, 4}}
    \def\padres     {{0,  0, 1}}
    \def\direcciones{{0, -1, 1}}
    \def\niveles    {{0,  1, 2}}
    \def\alturas    {{2,  1, 0}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo)); \raiz = \elementos[0];
        \radio = 0.5; \sepX = 1.3 * \cantNiveles; \sepY = 1.8;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
        
        \raiz = \elementos[0]; \alturaRaiz = \alturas[0];
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {$\raiz$};
    \path (0, -\radio) node[below=2pt] {$h = \alturaRaiz$};
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
            \altura = \alturas[\indice];
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \draw (pos) circle (\radio) node (centro_\indice) {$\valor$};
        \path ($ (pos) + (0, \radio) $) node[above=2pt] {$h = \altura$};
        
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

Para mantener la invarianza, necesitamos hacer dos [[Rotación de árboles|rotaciones]], resultando en

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos  {{4,  2, 5}}
    \def\padres     {{0,  0, 0}}
    \def\direcciones{{0, -1, 1}}
    \def\niveles    {{0,  1, 1}}
    \def\alturas    {{1,  0, 0}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo)); \raiz = \elementos[0];
        \radio = 0.5; \sepX = 1.3 * \cantNiveles; \sepY = 1.8;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
        
        \raiz = \elementos[0]; \alturaRaiz = \alturas[0];
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {$\raiz$};
    \path (0, -\radio) node[below=2pt] {$h = \alturaRaiz$};
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
            \altura = \alturas[\indice];
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \draw (pos) circle (\radio) node (centro_\indice) {$\valor$};
        \path ($ (pos) + (0, \radio) $) node[above=2pt] {$h = \altura$};
        
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

Agregamos $8$ como hijo derecho de $5$, pero al agregar $6$ se rompe la invarianza

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos  {{4,  2, 5, 8,  6}}
    \def\padres     {{0,  0, 0, 2,  3}}
    \def\direcciones{{0, -1, 1, 1, -1}}
    \def\niveles    {{0,  1, 1, 2,  3}}
    \def\alturas    {{3,  0, 2, 1,  0}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo)); \raiz = \elementos[0];
        \radio = 0.5; \sepX = 1.3 * \cantNiveles; \sepY = 1.8;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
        
        \raiz = \elementos[0]; \alturaRaiz = \alturas[0];
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {$\raiz$};
    \path (0, -\radio) node[below=2pt] {$h = \alturaRaiz$};
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
            \altura = \alturas[\indice];
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \draw (pos) circle (\radio) node (centro_\indice) {$\valor$};
        \path ($ (pos) + (0, \radio) $) node[above=2pt] {$h = \altura$};
        
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

Haciendo dos rotaciones, resultando en 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos  {{4,  2, 6, 8,  5}}
    \def\padres     {{0,  0, 0, 2,  2}}
    \def\direcciones{{0, -1, 1, 1, -1}}
    \def\niveles    {{0,  1, 1, 2,  2}}
    \def\alturas    {{2,  0, 1, 0,  0}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo)); \raiz = \elementos[0];
        \radio = 0.5; \sepX = 1.3 * \cantNiveles; \sepY = 1.8;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
        
        \raiz = \elementos[0]; \alturaRaiz = \alturas[0];
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {$\raiz$};
    \path (0, -\radio) node[below=2pt] {$h = \alturaRaiz$};
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
            \altura = \alturas[\indice];
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \draw (pos) circle (\radio) node (centro_\indice) {$\valor$};
        \path ($ (pos) + (0, \radio) $) node[above=2pt] {$h = \altura$};
        
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

Ahora, agregando $7$ volvemos a romper la invarianza

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos  {{4,  2, 6, 8,  5,  7}}
    \def\padres     {{0,  0, 0, 2,  2,  3}}
    \def\direcciones{{0, -1, 1, 1, -1, -1}}
    \def\niveles    {{0,  1, 1, 2,  2,  3}}
    \def\alturas    {{3,  0, 2, 1,  0,  0}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo)); \raiz = \elementos[0];
        \radio = 0.5; \sepX = 1.3 * \cantNiveles; \sepY = 1.8;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
        
        \raiz = \elementos[0]; \alturaRaiz = \alturas[0];
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {$\raiz$};
    \path (0, -\radio) node[below=2pt] {$h = \alturaRaiz$};
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
            \altura = \alturas[\indice];
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \draw (pos) circle (\radio) node (centro_\indice) {$\valor$};
        \path ($ (pos) + (0, \radio) $) node[above=2pt] {$h = \altura$};
        
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

Como el punto en el que se rompe la invarianza es la raíz, tenemos que conseguir la hoja más a la izquierda del subárbol derecho, en esta caso es el $5$ y ahí resolverlo

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos  {{5,  4, 6, 8,  7,  2}}
    \def\padres     {{0,  0, 0, 2,  3,  1}}
    \def\direcciones{{0, -1, 1, 1, -1, -1}}
    \def\niveles    {{0,  1, 1, 2,  3,  2}}
    \def\alturas    {{3,  1, 2, 1,  0,  0}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo)); \raiz = \elementos[0];
        \radio = 0.5; \sepX = 1.3 * \cantNiveles; \sepY = 1.8;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
        
        \raiz = \elementos[0]; \alturaRaiz = \alturas[0];
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {$\raiz$};
    \path (0, -\radio) node[below=2pt] {$h = \alturaRaiz$};
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
            \altura = \alturas[\indice];
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \draw (pos) circle (\radio) node (centro_\indice) {$\valor$};
        \path ($ (pos) + (0, \radio) $) node[above=2pt] {$h = \altura$};
        
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

Ahora arreglamos el subárbol derecho, resultando en

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos  {{5,  4, 7,  2,  6, 8}}
    \def\padres     {{0,  0, 0,  1,  2, 2}}
    \def\direcciones{{0, -1, 1, -1, -1, 1}}
    \def\niveles    {{0,  1, 1,  2,  2, 2}}
    \def\alturas    {{2,  1, 1,  0,  0, 0}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo)); \raiz = \elementos[0];
        \radio = 0.5; \sepX = 1.3 * \cantNiveles; \sepY = 1.8;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
        
        \raiz = \elementos[0]; \alturaRaiz = \alturas[0];
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {$\raiz$};
    \path (0, -\radio) node[below=2pt] {$h = \alturaRaiz$};
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
            \altura = \alturas[\indice];
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \draw (pos) circle (\radio) node (centro_\indice) {$\valor$};
        \path ($ (pos) + (0, \radio) $) node[above=2pt] {$h = \altura$};
        
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

Insertando $3$ rompe la invarianza 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos  {{5,  4, 7,  2,  6, 8, 3}}
    \def\padres     {{0,  0, 0,  1,  2, 2, 3}}
    \def\direcciones{{0, -1, 1, -1, -1, 1, 1}}
    \def\niveles    {{0,  1, 1,  2,  2, 2, 3}}
    \def\alturas    {{3,  2, 1,  1,  0, 0, 0}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo)); \raiz = \elementos[0];
        \radio = 0.5; \sepX = 1.3 * \cantNiveles; \sepY = 1.8;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
        
        \raiz = \elementos[0]; \alturaRaiz = \alturas[0];
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {$\raiz$};
    \path (0, -\radio) node[below=2pt] {$h = \alturaRaiz$};
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
            \altura = \alturas[\indice];
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \draw (pos) circle (\radio) node (centro_\indice) {$\valor$};
        \path ($ (pos) + (0, \radio) $) node[above=2pt] {$h = \altura$};
        
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

Haciendo dos rotaciones, resultando en 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos  {{5,  2, 7,  3,  6, 8, 4}}
    \def\padres     {{0,  0, 0,  1,  2, 2, 1}}
    \def\direcciones{{0, -1, 1, -1, -1, 1, 1}}
    \def\niveles    {{0,  1, 1,  2,  2, 2, 2}}
    \def\alturas    {{2,  1, 1,  0,  0, 0, 0}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo)); \raiz = \elementos[0];
        \radio = 0.5; \sepX = 1.3 * \cantNiveles; \sepY = 1.8;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
        
        \raiz = \elementos[0]; \alturaRaiz = \alturas[0];
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {$\raiz$};
    \path (0, -\radio) node[below=2pt] {$h = \alturaRaiz$};
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
            \altura = \alturas[\indice];
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \draw (pos) circle (\radio) node (centro_\indice) {$\valor$};
        \path ($ (pos) + (0, \radio) $) node[above=2pt] {$h = \altura$};
        
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

Por último agregando el $1$ mantiene la invarianza, y por lo tanto tenemos el árbol completo, con lo que el resultado termina siendo el recorrido inorder del siguiente árbol

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos  {{5,  2, 7,  3,  6, 8, 4,  1}}
    \def\padres     {{0,  0, 0,  1,  2, 2, 1,  3}}
    \def\direcciones{{0, -1, 1, -1, -1, 1, 1, -1}}
    \def\niveles    {{0,  1, 1,  2,  2, 2, 2,  3}}
    \def\alturas    {{3,  2, 1,  1,  0, 0, 0,  0}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo)); \raiz = \elementos[0];
        \radio = 0.5; \sepX = 1.3 * \cantNiveles; \sepY = 1.8;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
        
        \raiz = \elementos[0]; \alturaRaiz = \alturas[0];
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {$\raiz$};
    \path (0, -\radio) node[below=2pt] {$h = \alturaRaiz$};
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
            \altura = \alturas[\indice];
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \draw (pos) circle (\radio) node (centro_\indice) {$\valor$};
        \path ($ (pos) + (0, \radio) $) node[above=2pt] {$h = \altura$};
        
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

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```