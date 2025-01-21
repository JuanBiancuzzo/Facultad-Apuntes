---
dia: 2025-01-21
etapa: empezado
tags:
  - investigación/ciencias-de-la-computación/data-structures
  - colección/data-structures
  - nota/colección
  - colección/data-structures/estructura
nombreEstructura: Árbol de Adelson-Velsky y Landis
estrucutrasRelacionadas:
  - nombre: AVLTree
    descripcion: Es una estructura que tiene los beneficios de un [[Árbol binario de Búsqueda|BST]], pero se mantiene [[Árbol Balanceado|balanceado]]
    campos:
      - nombre: rootNode
        type:
          - AVLNode
        default: 
        descripcion: Es la ráiz del árbol, la cual tiene como hijos a todos los elementos guardados
    herencia: 
  - nombre: AVLNode
    descripcion: Es la estructra que representa cada nodo del árbol
    campos:
      - nombre: element
        type:
          - Key
        default: 
        descripcion: Es la key que usa el árbol
      - nombre: height
        type:
          - UInteger
        default: 
        descripcion: Se puede definir como el [[Camino#Camino simple (Path)|path]] más largo desde ese nodo y sus hijos, solo descendiendo
      - nombre: leftNode
        type:
          - AVLNode
        default: 
        descripcion: Es el nodo a la izquierda de este nodo
      - nombre: leftNode
        type:
          - AVLNode
        default: 
        descripcion: Es el nodo a la derecha de este nodo
    herencia: 
métodos:
  - nombre: BuildTree
    descripcion: Es la forma de crear el árbol a partir de una lista de elementos o uno vacio en el caso que la lista sea vacia
    parametros:
      - nombre: array
        type:
          - Key[]
        default: "[]"
        descripcion: "Es una lista de elemento no necesariamente ordenada "
    return:
      type:
        - AVLTree
      descripcion: 
  - nombre: Insert
    descripcion: Permite insertar un elemento al árbol dado
    parametros:
      - nombre: tree
        type:
          - AVLTree
        default: 
        descripcion: Es el árbol al cual se inserta el elemento dado
      - nombre: element
        type:
          - Key
        default: 
        descripcion: Es el elemento a insertar al árbol
    return:
      type:
        - void
      descripcion: 
  - nombre: InorderWalk
    descripcion: Devuelve un array con todos los elementos del árbol recorriendolos en sentido Inorder
    parametros:
      - nombre: tree
        type:
          - AVLTree
        default: 
        descripcion: Es el árbol en el cual se va a recorrer en sentido Inorder
    return:
      type:
        - Key[]
      descripcion: 
  - nombre: PostorderWalk
    descripcion: Devuelve un array con todos los elementos del árbol recorriendolos en sentido Postorder
    parametros:
      - nombre: tree
        type:
          - AVLTree
        default: 
        descripcion: Es el árbol en el cual se va a recorrer en sentido Postorder
    return:
      type:
        - Key[]
      descripcion: 
  - nombre: PostorderWalk
    descripcion: Devuelve un array con todos los elementos del árbol recorriendolos en sentido Postorder
    parametros:
      - nombre: tree
        type:
          - AVLTree
        default: 
        descripcion: Es el árbol en el cual se va a recorrer en sentido Postorder
    return:
      type:
        - Key[]
      descripcion: 
aliases:
  - Árbol AVL
  - AVL Tree
  - Adelson-Velsky and Landis Tree
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
> Se basa en la estructura de un [[Árbol binario de búsqueda|árbol binario de búsqueda]] manteniendo su invarianza, pero agregando que si consideramos altura de los [[Nodo#En teoría de grafos|nodos]] hijos, donde se define altura como el [[Camino#Camino simple (Path)|path]] más largo desde se nodo hasta las hojas siempre descendiendo, y siendo $h_i$ la altura del hijo izquierdo y $h_d$ la altura del hijo derecho, entonces se tiene que mantener que $$ |h_i - h_d| \le 1 $$ 
^descripcion

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos  {{30, 17, 40, 14, 20, 60, 25}}
    \def\padres     {{ 0,  0,  0,  1,  1,  2,  4}}
    \def\direcciones{{ 0,  -1, 1, -1,  1,  1,  1}}
    \def\niveles    {{ 0,  1,  1,  2,  2,  2,  3}}
    \def\alturas    {{ 3,  2,  1,  0,  1,  0,  0}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo)); \radio = 0.5; 
        \sepX = 1 * \cantNiveles; \sepY = 2;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
        
        \alturaMaxima = 3;
        \raiz = \elementos[0];
        \alturaRaiz = \alturas[0];
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
            
            \dirAltura = (int(\direccion) < 0) ? "left" : "right";
            \posAltura = int(\direccion) * \radio;
            \altura = \alturas[\indice];
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \draw (pos) circle (\radio) node (centro_\indice) {$\valor$};
        \path ($ (pos) + (\posAltura, 0) $) node[\dirAltura=2pt] {$h = \altura$};
        
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
^representacion

Manteniendo la invarianza, nos debería hacer que el árbol sea [[Árbol balanceado|balanceado]]

%% Completar la forma de la resolución de la sucesión recursiva %%
> [!demostracion]- Demostración
> Para probar que esta balanceado, podemos ver el peor caso donde se mantiene la invarianza y mostrar que en ese caso se cumple que esta balanceado. La peor situación es cuando para todos los nodos $h_i = h_d + 1$ o $h_d = h_i + 1$
> 
> Si fijamos la altura, siendo esta $h$, podemos calcular la cantidad de nodos que debería tener y ver si cumple o no la condición de árbol balanceado
> 
> Para calcular la cantidad de nodos, podemos ver que para $h = 1$ la cantidad es $1$, y para $h = 2$ la cantidad es $2$. Ahora para el resto, necesitamos una expresión [[Recurso|recursiva]], la cual podemos ver que es $$ N(h) = 1 + N(h - 1) + N(h - 2) $$
> 
> Notemos que es una [[Sucesión de Fibonacci|sucesión como la de Fibonacci]], pero notemos que ese término constante hace que no sea una [[Sucesión de Lucas|sucesión de Lucas]]
> 
> Por lo tanto llegamos a la solución de que es $1.44 ~ log_2(n)$ cumpliéndose así que es balanceado, incluso en la peor situación

## Operaciones
---
Vamos a ver las operaciones que deben existir para que se pueda usar esta estructura

### BuildTree
---


### Insert
---


### InorderWalk
---

### PreorderWalk
---

### PostorderWalk
---