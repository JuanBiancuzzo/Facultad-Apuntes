---
dia: 2025-01-18
etapa: empezado
tags:
  - investigación/ciencias-de-la-computación/data-structures
  - nota/colección
  - colección/data-structures/estructura
  - curso/introduction-to-algorithms/Sorting-and-Trees
nombreEstructura: Árbol binario de búsqueda
estrucutrasRelacionadas:
  - nombre: BinarySearchTree
    descripcion: Representa el árbol y tiene la raíz del mismo
    campos:
      - nombre: rootNode
        type:
          - BinarySearchNode
        default: 
        descripcion: Es la ráiz del árbol, por lo que tiene como hijo a todos los demás nodos
    herencia: 
  - nombre: BinarySearchNode
    descripcion: Representa individualmente los nodos del árbol, mantiene los hijos y la key
    campos:
      - nombre: element
        type:
          - Key
        default: 
        descripcion: Es la key guardada
      - nombre: leftNode
        type:
          - BinarySearchNode
        default: None
        descripcion: Es el hijo izquierdo de este nodo
      - nombre: rightNode
        type:
          - BinarySearchNode
        default: None
        descripcion: Es el hijo derecho de este nodo
    herencia: 
métodos:
  - nombre: BuildTree
    descripcion: Crea un árbol de un array de elementos, o un árbol vacio si el array lo está
    parametros:
      - nombre: array
        type:
          - Key[]
        default: "[]"
        descripcion: Son los elementos que se quieren insertar al árbol al crearlo
    return:
      type:
        - BinarySearchTree
      descripcion: 
  - nombre: Insert
    descripcion: Permite insertar un elemento al árbol dado
    parametros:
      - nombre: tree
        type:
          - BinarySearchTree
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
  - nombre: Delete
    descripcion: Permite eliminar un elemento del árbol dado
    parametros:
      - nombre: tree
        type:
          - BinarySearchTree
        default: 
        descripcion: Es el árbol en el cual se va a eliminar el elemento
      - nombre: element
        type:
          - Key
        default: 
        descripcion: Es el elemento a eliminar
    return:
      type:
        - bool
      descripcion: Devuelve true si se pudo eliminar
  - nombre: Search
    descripcion: Búsca un elemento en el árbol dado
    parametros:
      - nombre: tree
        type:
          - BinarySearchTree
        default: 
        descripcion: Es el árbol en el cual se va a búscar el elemento
      - nombre: element
        type:
          - Key
        default: 
        descripcion: Es el elemento a búscar
    return:
      type:
        - bool
      descripcion: Devuelve true si el elemento existe en el árbol
  - nombre: InorderWalk
    descripcion: Devuelve un array con todos los elementos del árbol recorriendolos en sentido Inorder
    parametros:
      - nombre: tree
        type:
          - BinarySearchTree
        default: 
        descripcion: Es el árbol en el cual se va a recorrer en sentido Inorder
    return:
      type:
        - Key[]
      descripcion: 
  - nombre: PreorderWalk
    descripcion: Devuelve un array con todos los elementos del árbol recorriendolos en sentido Preorder
    parametros:
      - nombre: tree
        type:
          - BinarySearchTree
        default: 
        descripcion: Es el árbol en el cual se va a recorrer en sentido Preorder
    return:
      type:
        - Key[]
      descripcion: 
  - nombre: PostorderWalk
    descripcion: Devuelve un array con todos los elementos del árbol recorriendolos en sentido Postorder
    parametros:
      - nombre: tree
        type:
          - BinarySearchTree
        default: 
        descripcion: Es el árbol en el cual se va a recorrer en sentido Postorder
    return:
      type:
        - Key[]
      descripcion: 
aliases:
  - ABB
  - Binary Search Tree
  - BST
referencias:
  - "701"
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
> Se basa en la estructura de un [[Árbol binario|árbol binario]] pero donde además establece un [[Relación de orden|orden]] la cual impone una invariante
> 
> La invariante de esta estructura es que para todo nodo $x$, si $y$ esta en la rama izquierda del [[Árbol|subárbol]] de $x$, entonces la key de $y$ es menor o igual que la key de $x$, es decir, $\text{key}(y) \le \text{key}(x)$. Si $y$ esta en la rama derecha del subárbol de $x$, entonces la key de $y$ es mayor o igual que la key de $x$, es decir, $\text{key}(y) \ge \text{key}(x)$
^descripcion

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos  {{30, 17, 40, 14, 20, 60, 25, 50}}
    \def\padres     {{ 0,  0,  0,  1,  1,  2,  4,  5}}
    \def\direcciones{{ 0,  -1, 1, -1,  1,  1,  1, -1}}
    \def\niveles    {{ 0,  1,  1,  2,  2,  2,  3,  3}}
    \tikzmath { \indiceMasIzquierda = 3; \indiceMasBajo = 6; }

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo)); \radio = 0.5; 
        \sepX = 1 * \cantNiveles; \sepY = 2;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
        
        \raiz = \elementos[0];
    }
    
    \draw[<-, ultra thick, shorten <=0.2cm, shorten >=0.2] (0, \radio) 
        -- ++(0, 1) node[above=2pt] {Raiz};
    
    \draw (0, 0) circle (\radio) node (centro_0) {$\raiz$};
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
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \draw (pos) circle (\radio) node (centro_\indice) {$\valor$};
        
        \path ($ (pos) + (\infIzqX, \infIzqY) $) node (inf_izq_\indice) {};
        \path ($ (pos) + (\infDerX, \infDerY) $) node (inf_der_\indice) {};
        \path ($ (pos) + (\supIzqX, \supIzqY) $) node (sup_izq_\indice) {};
        \path ($ (pos) + (\supDerX, \supDerY) $) node (sup_der_\indice) {};
        
        \draw[<-, shorten <=0.1cm, shorten >=0.1] (sup_\dir_\indice)
            -- (inf_\dirPadre_\indicePadre);
    }
    
    \tikzmath { 
        int \izquierda, \bajo;
        \izquierda = \indiceMasIzquierda; \bajo = \indiceMasBajo;
        \separacion = 1;
    }
    \coordinate (equinaSup) at (sup_izq_0 -| inf_izq_\izquierda);
    \coordinate (equinaInf) at (inf_izq_\bajo -| inf_izq_\izquierda);
    
    \draw[<->, ultra thick] ($ (equinaSup) + (-\separacion, 0) $)
        -- ($ (equinaInf) + (-\separacion, 0) $)
            node[midway, left=2pt] {$h$};
    
\end{tikzpicture}
\end{document}
``` 
^representacion

## Operaciones
---
Vamos a ver las operaciones que deben existir para que se pueda usar esta estructura

### BuildTree
---
```dataviewjs

```

```
function BuildTree :: array: Key[] -> BinarySearchTree 
    let tree: BinarySearchTree = { .rootNode = None }
    
    for element in array then
        Insert tree element
    end
    
    return tree
end
```

### Insert
---
```dataviewjs

```

```
function Insert :: tree: BinarySearchTree element: Key -> void
    InsertNode tree.rootNode element
end

function InsertNode :: node: BinarySearchNode element: Key -> void
    /* 
     * De forma arbitraria vamos a ingresar a la derecha datos del mismo valor
     */
     
    if node.element < element then
        if node.leftNode == None then
            node.leftNode = { .element = element }
            
        else 
            InsertNode node.leftNode element
        end
          
    else
        if node.rightNode == None then
            node.rightNode = { .element = element }
            
        else 
            InsertNode node.rightNode element
        end  
    end    
end
```

### Delete
---


### Search
---


### InorderWalk
---


### PreorderWalk
---


### PostorderWalk
---



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```