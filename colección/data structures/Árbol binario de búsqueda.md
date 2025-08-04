---
dia: 2025-01-18
etapa: empezado
tags:
  - colección/data-structures/estructura
  - curso/introduction-to-algorithms/Sorting-and-Trees
  - investigación/ciencias-de-la-computación/data-structures
  - nota/colección
  - nota/curso
  - nota/investigacion
nombreEstructura: Árbol binario de búsqueda
métodos:
  - nombre: BuildTree
    descripcion: Crea un árbol vacio
    parametros: []
    return:
      type:
        id: DHmriNsSEhvX8EkD4SKZGztBlfugy67PGmrjrwfIif194huv5w
        type: Struct
  - nombre: Insert
    descripcion: Permite insertar un elemento al árbol
    parametros:
      - nombre: tree
        descripcion: Es el árbol al cual se inserta el elemento dado
        type:
          id: DHmriNsSEhvX8EkD4SKZGztBlfugy67PGmrjrwfIif194huv5w
          type: Struct
      - nombre: element
        descripcion: Es el elemento a insertar al árbol
        type:
          id: YjydW7ULIbVHDVSp4pQQ3vE8Vvj08GiiysaOfmCKT0UqJIS2ej
          type: Generico
  - nombre: Delete
    descripcion: Permite eliminar un elemento del árbol dado
    parametros:
      - nombre: tree
        descripcion: Es el árbol en el cual se va a eliminar el elemento
        type:
          id: DHmriNsSEhvX8EkD4SKZGztBlfugy67PGmrjrwfIif194huv5w
          type: Struct
      - nombre: element
        descripcion: Es el elemento a eliminar
        type:
          id: YjydW7ULIbVHDVSp4pQQ3vE8Vvj08GiiysaOfmCKT0UqJIS2ej
          type: Generico
    return:
      type:
        id: sZl2xEyXNUS14X1pWEKivsuiOdyflBBj8zuonV6I9tQZzla7f5
        type: Primitivo
      descripcion: Devuelve true si se pudo eliminar
  - nombre: Search
    descripcion: Dúsca un elemento en el árbol dado
    parametros:
      - nombre: tree
        descripcion: Es el árbol en el cual se va a búscar el elemento
        type:
          id: DHmriNsSEhvX8EkD4SKZGztBlfugy67PGmrjrwfIif194huv5w
          type: Struct
      - nombre: element
        descripcion: Es el elemento a búscar
        type:
          id: YjydW7ULIbVHDVSp4pQQ3vE8Vvj08GiiysaOfmCKT0UqJIS2ej
          type: Generico
    return:
      type:
        id: sZl2xEyXNUS14X1pWEKivsuiOdyflBBj8zuonV6I9tQZzla7f5
        type: Primitivo
      descripcion: Devuelve true si el elemento existe en el árbol
  - nombre: InorderWalk
    descripcion: Devuelve un array con todos los elementos del árbol recorriendolos en sentido Inorder
    parametros:
      - nombre: tree
        descripcion: Es el árbol en el cual se va a recorrer en sentido Inorder
        type:
          id: DHmriNsSEhvX8EkD4SKZGztBlfugy67PGmrjrwfIif194huv5w
          type: Struct
    return:
      type:
        id: 
        type: Array
        valor:
          type:
            id: YjydW7ULIbVHDVSp4pQQ3vE8Vvj08GiiysaOfmCKT0UqJIS2ej
            type: Generico
  - nombre: PreorderWalk
    descripcion: Devuelve un array con todos los elementos del árbol recorriendolos en sentido Preorder
    parametros:
      - nombre: tree
        descripcion: Es el árbol en el cual se va a recorrer en sentido Preorder
        type:
          id: DHmriNsSEhvX8EkD4SKZGztBlfugy67PGmrjrwfIif194huv5w
          type: Struct
    return:
      type:
        id: 
        type: Array
        valor:
          type:
            id: YjydW7ULIbVHDVSp4pQQ3vE8Vvj08GiiysaOfmCKT0UqJIS2ej
            type: Generico
  - nombre: PostorderWalk
    descripcion: Devuelve un array con todos los elementos del árbol recorriendolos en sentido Postorder
    parametros:
      - nombre: tree
        descripcion: Es el árbol en el cual se va a recorrer en sentido Postorder
        type:
          id: DHmriNsSEhvX8EkD4SKZGztBlfugy67PGmrjrwfIif194huv5w
          type: Struct
    return:
      type:
        id: 
        type: Array
        valor:
          type:
            id: YjydW7ULIbVHDVSp4pQQ3vE8Vvj08GiiysaOfmCKT0UqJIS2ej
            type: Generico
estructuras:
  - valor:
      nombre: BinarySearchTree
      descripcion: Representa el árbol y tiene la raíz del mismo
      campos:
        - nombre: rootNode
          descripcion: Es la ráiz del árbol, por lo que tiene como hijo a todos los demás nodos
          type:
            id: IyATEANol8IFifj1Mj3chzO8zBgDT9mgBNYWL7uuR4qRrs56bz
            type: Struct
    apariciones: 8
    id: DHmriNsSEhvX8EkD4SKZGztBlfugy67PGmrjrwfIif194huv5w
  - valor:
      nombre: BinarySearchNode
      descripcion: Representa individualmente los nodos del árbol, mantiene los hijos y la key
      campos:
        - nombre: element
          descripcion: Es la key guardada
          type:
            id: YjydW7ULIbVHDVSp4pQQ3vE8Vvj08GiiysaOfmCKT0UqJIS2ej
            type: Generico
        - nombre: leftNode
          descripcion: Es el hijo izquierdo de este nodo
          default: None
          type:
            id: IyATEANol8IFifj1Mj3chzO8zBgDT9mgBNYWL7uuR4qRrs56bz
            type: Struct
        - nombre: rightNode
          descripcion: Es el hijo derecho de este nodo
          default: None
          type:
            id: IyATEANol8IFifj1Mj3chzO8zBgDT9mgBNYWL7uuR4qRrs56bz
            type: Struct
    apariciones: 3
    id: IyATEANol8IFifj1Mj3chzO8zBgDT9mgBNYWL7uuR4qRrs56bz
interfaces:
  - valor:
      nombre: Element
      metodos:
        - nombre: GetKey
          descripcion: Dado un elemento, devuelve su representación con un número entero
          parametros:
            - nombre: self
              descripcion: El elemento en sí
              type:
                id: YjydW7ULIbVHDVSp4pQQ3vE8Vvj08GiiysaOfmCKT0UqJIS2ej
                type: Generico
          return:
            type:
              id: Lx1Opin3ZE5kW9eKGSnGGm8pGjkFyU9kjuB7kM1cMmLBKRh71I
              type: Primitivo
    apariciones: 8
    id: YjydW7ULIbVHDVSp4pQQ3vE8Vvj08GiiysaOfmCKT0UqJIS2ej
aliases:
  - ABB
  - Binary Search Tree
  - BST
referencias:
  - "701"
vinculoCurso:
  - "[[cursos/introduction to algorithms/Sorting and Trees/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
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
```
function BuildTree :: () -> BinarySearchTree 
    let tree: BinarySearchTree = { .rootNode = None }
    
    return tree
end
```

### Insert
---
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
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```