---
dia: 2025-01-21
etapa: empezado
tags:
  - investigación/ciencias-de-la-computación/data-structures
  - nota/colección
  - colección/data-structures/estructura
nombreEstructura: Árbol de Adelson-Velsky y Landis
métodos:
  - nombre: BuildTree
    descripcion: Crea un árbol vacio
    parametros: []
    return:
      type:
        id: GHeyzSIb1UYVXc4bAVTRT27m2TxoFPxa85VRRShUWIol0Y4l2t
        type: Struct
  - nombre: Insert
    descripcion: Permite insertar un elemento en el árbol dado
    parametros:
      - nombre: tree
        descripcion: Es el árbol al cual se inserta el elemento dado
        type:
          id: GHeyzSIb1UYVXc4bAVTRT27m2TxoFPxa85VRRShUWIol0Y4l2t
          type: Struct
      - nombre: element
        descripcion: Es el elemento a insertar al árbol
        type:
          id: vmnBSIAkrqivR6i2b1ZL8FDpemsgCQXK3X06AYlWnPfGaoRdT8
          type: Generico
  - nombre: Delete
    descripcion: Permite eliminar un elemento al árbol dado
    parametros:
      - nombre: tree
        descripcion: Es el árbol al cual se va a eliminar el elemento dado
        type:
          id: GHeyzSIb1UYVXc4bAVTRT27m2TxoFPxa85VRRShUWIol0Y4l2t
          type: Struct
      - nombre: element
        descripcion: Es el elemento a eliminar
        type:
          id: vmnBSIAkrqivR6i2b1ZL8FDpemsgCQXK3X06AYlWnPfGaoRdT8
          type: Generico
    return:
      type:
        id: sZl2xEyXNUS14X1pWEKivsuiOdyflBBj8zuonV6I9tQZzla7f5
        type: Primitivo
      descripcion: Devuelve true si pudo eliminarlo
  - nombre: Search
    descripcion: Permite búscar un elemento al árbol dado
    parametros:
      - nombre: tree
        descripcion: Es el árbol al cual se va a búscar el elemento dado
        type:
          id: GHeyzSIb1UYVXc4bAVTRT27m2TxoFPxa85VRRShUWIol0Y4l2t
          type: Struct
      - nombre: element
        descripcion: Es el elemento a búscar
        type:
          id: vmnBSIAkrqivR6i2b1ZL8FDpemsgCQXK3X06AYlWnPfGaoRdT8
          type: Generico
    return:
      type:
        id: sZl2xEyXNUS14X1pWEKivsuiOdyflBBj8zuonV6I9tQZzla7f5
        type: Primitivo
      descripcion: Devuelve true si lo pudo encontrar
  - nombre: InorderWalk
    descripcion: Devuelve un array con todos los elementos del árbol recorriendolos en sentido Inorder
    parametros:
      - nombre: tree
        descripcion: Es el árbol en el cual se va a recorrer en sentido Inorder
        type:
          id: GHeyzSIb1UYVXc4bAVTRT27m2TxoFPxa85VRRShUWIol0Y4l2t
          type: Struct
    return:
      type:
        id: 
        type: Array
        valor:
          type:
            id: vmnBSIAkrqivR6i2b1ZL8FDpemsgCQXK3X06AYlWnPfGaoRdT8
            type: Generico
  - nombre: PostorderWalk
    descripcion: Devuelve un array con todos los elementos del árbol recorriendolos en sentido Postorder
    parametros:
      - nombre: tree
        descripcion: Es el árbol en el cual se va a recorrer en sentido Postorder
        type:
          id: GHeyzSIb1UYVXc4bAVTRT27m2TxoFPxa85VRRShUWIol0Y4l2t
          type: Struct
    return:
      type:
        id: 
        type: Array
        valor:
          type:
            id: vmnBSIAkrqivR6i2b1ZL8FDpemsgCQXK3X06AYlWnPfGaoRdT8
            type: Generico
  - nombre: PostorderWalk
    descripcion: Devuelve un array con todos los elementos del árbol recorriendolos en sentido Postorder
    parametros:
      - nombre: tree
        descripcion: Es el árbol en el cual se va a recorrer en sentido Postorder
        type:
          id: GHeyzSIb1UYVXc4bAVTRT27m2TxoFPxa85VRRShUWIol0Y4l2t
          type: Struct
    return:
      type:
        id: 
        type: Array
        valor:
          type:
            id: vmnBSIAkrqivR6i2b1ZL8FDpemsgCQXK3X06AYlWnPfGaoRdT8
            type: Generico
estructuras:
  - valor:
      nombre: AVLTree
      descripcion: Es una estructura que tiene los beneficios de un [[Árbol binario de Búsqueda|BST]], pero se mantiene [[Árbol Balanceado|balanceado]]
      campos:
        - nombre: rootNode
          descripcion: Es la ráiz del árbol, la cual tiene como hijos a todos los elementos guardados
          type:
            id: SBOPv7Xvx4C0ZrsPX8jU1INIkRaCc4tZAiNe0XMowg68JlGNBC
            type: Struct
    apariciones: 8
    id: GHeyzSIb1UYVXc4bAVTRT27m2TxoFPxa85VRRShUWIol0Y4l2t
  - valor:
      nombre: AVLNode
      descripcion: Es la estructra que representa cada nodo del árbol
      campos:
        - nombre: element
          descripcion: Es la key que usa el árbol
          type:
            id: vmnBSIAkrqivR6i2b1ZL8FDpemsgCQXK3X06AYlWnPfGaoRdT8
            type: Generico
        - nombre: height
          descripcion: Se puede definir como el [[Camino#Camino simple (Path)|path]] más largo desde ese nodo y sus hijos, solo descendiendo
          type:
            id: HQtW4MbJNXWEiECxJLWgU1KSm1T7BK2CaAaiIM7xcBmADPChfA
            type: Primitivo
        - nombre: leftNode
          descripcion: Es el nodo a la izquierda de este nodo
          type:
            id: SBOPv7Xvx4C0ZrsPX8jU1INIkRaCc4tZAiNe0XMowg68JlGNBC
            type: Struct
        - nombre: rightNode
          descripcion: Es el nodo a la derecha de este nodo
          type:
            id: SBOPv7Xvx4C0ZrsPX8jU1INIkRaCc4tZAiNe0XMowg68JlGNBC
            type: Struct
    apariciones: 3
    id: SBOPv7Xvx4C0ZrsPX8jU1INIkRaCc4tZAiNe0XMowg68JlGNBC
interfaces:
  - valor:
      nombre: Elemenet
      metodos:
        - nombre: GetKey
          descripcion: Devuelve la representación con un número entero
          parametros:
            - nombre: self
              descripcion: El elemento en sí
              type:
                id: vmnBSIAkrqivR6i2b1ZL8FDpemsgCQXK3X06AYlWnPfGaoRdT8
                type: Generico
          return:
            type:
              id: Lx1Opin3ZE5kW9eKGSnGGm8pGjkFyU9kjuB7kM1cMmLBKRh71I
              type: Primitivo
    apariciones: 8
    id: vmnBSIAkrqivR6i2b1ZL8FDpemsgCQXK3X06AYlWnPfGaoRdT8
aliases:
  - Árbol AVL
  - AVL Tree
  - Adelson-Velsky and Landis Tree
referencias:
  - "701"
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
```
function BuildTree :: array: Key[] -> AVLTree 
    let tree: AVLTree = { .rootNode = None }
    
    return tree
end
```

### Insert
---
Para insertar, lo haremos de la misma manera que un árbol binario de búsqueda, y después arreglaremos los problemas que pueden ocurrir

Veamos que problemas, donde notemos que existe una simetría en el árbol y por lo tanto vamos a analizar solo los casos que no sean simetrías de otras

La primera situación es donde tenemos 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\tikzset{
    pics/Triangulo/.style args={#1}{
	    code={
		    \tikzmath { \base = 1.3; \altura = 1.5; }

			\draw (0, 0) 
        			node (-sup) {}
    			 -- ++({-\base / 2}, -\altura)
        			node[midway] (-izq) {}
                -- ++(\base, 0)
                    node[midway] (-abajo) {}
                -- cycle
                    node[midway] (-der) {};
            \path (0, {-0.6 * \altura}) node (-centro) {#1};
	    }
	},
	pics/Router/.default={A}
}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \radio = 0.5; \base = 1.3; \altura = 1.5; \sep = 1.2; }
    
    \draw (0, 0) circle (\radio) node {$x$};
    \path (\radio, 0) node[right=2pt] {$h = k + 2$};
        
    \draw ({\sep + cos(-45) * \radio}, {-\sep + sin(-45) * \radio}) 
        circle (\radio) node (centro_y) {$y$};
    \path ($ (centro_y.center) + (\radio, 0) $) node[right=2pt] {$h = k + 1$};
    
    \draw pic (tA) at (-\sep, -\sep) {Triangulo={A}};
    \draw pic (tB) at ($ (centro_y.center) + (-\sep, -\sep) $) {Triangulo={B}};
    \draw pic (tC) at ($ (centro_y.center) + ( \sep, -\sep) $) {Triangulo={C}};
    
    \path (tA-izq) node[left=2pt] {$h = k - 1$};
    \path (tB-izq) node[left=2pt] {$h = k - 1$};
    \path (tC-der) node[right=2pt] {$h = k$};
        
    \tikzmath { \distSep = \radio + 0.3; }
    \begin{scope}[->, shorten <= \distSep cm, ultra thick]
        \draw[shorten >= \distSep cm] (0, 0) -- (centro_y.center);
        
        \draw (0, 0) -- (tA-sup);
        \draw (centro_y.center) -- (tB-sup);
        \draw (centro_y.center) -- (tC-sup);
    \end{scope}
    
\end{tikzpicture}
\end{document}
```  

Notemos que para el nodo $x$, $|h_i - h_d| = 2$ por lo que se rompe la invarianza, esto se resuelve con una [[Rotación de árboles|rotación]], en este caso un `LeftRotation(x)`. Lo cual resulta en el siguiente árbol

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\tikzset{
    pics/Triangulo/.style args={#1}{
	    code={
		    \tikzmath { \base = 1.3; \altura = 1.5; }

			\draw (0, 0) 
        			node (-sup) {}
    			 -- ++({-\base / 2}, -\altura)
        			node[midway] (-izq) {}
                -- ++(\base, 0)
                    node[midway] (-abajo) {}
                -- cycle
                    node[midway] (-der) {};
            \path (0, {-0.6 * \altura}) node (-centro) {#1};
	    }
	},
	pics/Router/.default={A}
}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { \radio = 0.5; \base = 1.3; \altura = 1.5; \sep = 1.2; }
    
    \draw (0, 0) circle (\radio) node {$y$};
    \path (-\radio, 0) node[left=2pt] {$h = k$};
    
    \draw ({-\sep - cos(-45) * \radio}, {-\sep + sin(-45) * \radio}) 
        circle (\radio) node (centro_x) {$x$};
    \path ($ (centro_x.center) + (-\radio, 0) $) node[left=2pt] {$h = k$};
        
    \draw pic (tA) at ($ (centro_x.center) + (-\sep, -\sep) $) {Triangulo={A}};
    \draw pic (tB) at ($ (centro_x.center) + ( \sep, -\sep) $) {Triangulo={B}};
    \draw pic (tC) at ( \sep, -\sep) {Triangulo={C}};
    
    \path (tA-izq) node[left=2pt] {$h = k - 1$};
    \path (tB-der) node[right=2pt] {$h = k - 1$};
    \path (tC-der) node[right=2pt] {$h = k$};
    
    \tikzmath { \distSep = \radio + 0.3; }
    \begin{scope}[->, shorten <= \distSep cm, ultra thick]
        \draw[shorten >= \distSep cm] (0, 0) -- (centro_x.center);
        
        \draw (0, 0) -- (tC-sup);
        \draw (centro_x.center) -- (tA-sup);
        \draw (centro_x.center) -- (tB-sup);
    \end{scope}
    
\end{tikzpicture}
\end{document}
```  

Como observación, se puede dar el caso donde $B$ tenga una altura de $k$ en la cual la resolución de este es la misma

Otra situación, es la siguiente

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\tikzset{
    pics/Triangulo/.style args={#1}{
	    code={
		    \tikzmath { \base = 1.3; \altura = 1.5; }

			\draw (0, 0) 
        			node (-sup) {}
    			 -- ++({-\base / 2}, -\altura)
        			node[midway] (-izq) {}
                -- ++(\base, 0)
                    node[midway] (-abajo) {}
                -- cycle
                    node[midway] (-der) {};
            \path (0, {-0.6 * \altura}) node (-centro) {#1};
	    }
	},
	pics/Router/.default={A}
}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \radio = 0.5; \base = 1.3; \altura = 1.5; \sep = 1.5; 
        \desvCirc = \radio * sqrt(2) / 2;
    }
    
    \draw (0, 0) circle (\radio) node (centro_x) {$x$};
    \path (\radio, 0) node[right=2pt] {$h = k + 2$};
        
    \draw ($ (centro_x.center) + ({\sep + \desvCirc}, {-\sep - \desvCirc}) $) 
        circle (\radio) node (centro_z) {$z$};
    \path ($ (centro_z.center) + (\radio, 0) $) node[right=2pt] {$h = k + 1$};
    
    \draw ($ (centro_z.center) + ({-\sep - \desvCirc}, {-\sep - \desvCirc}) $) 
        circle (\radio) node (centro_y) {$y$};
    \path ($ (centro_y.center) + (\radio, 0) $) node[right=2pt] {$h = k$};
    
    \draw pic (tA) at (-\sep, -\sep) {Triangulo={A}};
    \draw pic (tB) at ($ (centro_y.center) + (-\sep, -\sep) $) {Triangulo={B}};
    \draw pic (tC) at ($ (centro_y.center) + ( \sep, -\sep) $) {Triangulo={C}};
    \draw pic (tD) at ($ (centro_z.center) + ( \sep, -\sep) $) {Triangulo={D}};
    
    \path (tA-izq) node[left=2pt]  {$h = k - 1$};
    \path (tB-izq) node[left=2pt]  {$h = k - 1$};
    \path (tC-der) node[right=2pt] {$h = k - 2$};
    \path (tD-der) node[right=2pt] {$h = k - 1$};
        
    \tikzmath { \distSep = \radio + 0.3; }
    \begin{scope}[->, shorten <= \distSep cm, ultra thick]
        \draw[shorten >= \distSep cm] (centro_x.center) -- (centro_z.center);
        \draw[shorten >= \distSep cm] (centro_z.center) -- (centro_y.center);
        
        \draw (centro_x.center) -- (tA-sup);
        \draw (centro_y.center) -- (tB-sup);
        \draw (centro_y.center) -- (tC-sup);
        \draw (centro_z.center) -- (tD-sup);
    \end{scope}
    
\end{tikzpicture}
\end{document}
```  

Para resolverlo, tendremos que aplicar dos rotaciones, primero `RightRotation(z)` que resulta en 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\tikzset{
    pics/Triangulo/.style args={#1}{
	    code={
		    \tikzmath { \base = 1.3; \altura = 1.5; }

			\draw (0, 0) 
        			node (-sup) {}
    			 -- ++({-\base / 2}, -\altura)
        			node[midway] (-izq) {}
                -- ++(\base, 0)
                    node[midway] (-abajo) {}
                -- cycle
                    node[midway] (-der) {};
            \path (0, {-0.6 * \altura}) node (-centro) {#1};
	    }
	},
	pics/Router/.default={A}
}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \radio = 0.5; \base = 1.3; \altura = 1.5; \sep = 1.5; 
        \desvCirc = \radio * sqrt(2) / 2;
    }
    
    \draw (0, 0) circle (\radio) node (centro_x) {$x$};
    \path (\radio, 0) node[right=2pt] {$h = k + 2$};
        
    \draw ($ (centro_x.center) + ({\sep + \desvCirc}, {-\sep - \desvCirc}) $) 
        circle (\radio) node (centro_y) {$y$};
    \path ($ (centro_y.center) + (\radio, 0) $) node[right=2pt] {$h = k + 1$};
    
    \draw ($ (centro_y.center) + ({\sep + \desvCirc}, {-\sep - \desvCirc}) $) 
        circle (\radio) node (centro_z) {$z$};
    \path ($ (centro_z.center) + (\radio, 0) $) node[right=2pt] {$h = k$};
    
    \draw pic (tA) at (-\sep, -\sep) {Triangulo={A}};
    \draw pic (tB) at ($ (centro_y.center) + (-\sep, -\sep) $) {Triangulo={B}};
    \draw pic (tC) at ($ (centro_z.center) + (-\sep, -\sep) $) {Triangulo={C}};
    \draw pic (tD) at ($ (centro_z.center) + ( \sep, -\sep) $) {Triangulo={D}};
    
    \path (tA-izq) node[left=2pt]  {$h = k - 1$};
    \path (tB-izq) node[left=2pt]  {$h = k - 1$};
    \path (tC-der) node[right=2pt] {$h = k - 2$};
    \path (tD-der) node[right=2pt] {$h = k - 1$};
        
    \tikzmath { \distSep = \radio + 0.3; }
    \begin{scope}[->, shorten <= \distSep cm, ultra thick]
        \draw[shorten >= \distSep cm] (centro_x.center) -- (centro_y.center);
        \draw[shorten >= \distSep cm] (centro_y.center) -- (centro_z.center);
        
        \draw (centro_x.center) -- (tA-sup);
        \draw (centro_y.center) -- (tB-sup);
        \draw (centro_z.center) -- (tC-sup);
        \draw (centro_z.center) -- (tD-sup);
    \end{scope}
    
\end{tikzpicture}
\end{document}
```  

Ahora, es similar a la situación previa, que resolvemos haciendo `LeftRotation(x)` que resulta en

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\tikzset{
    pics/Triangulo/.style args={#1}{
	    code={
		    \tikzmath { \base = 1.3; \altura = 1.5; }

			\draw (0, 0) 
        			node (-sup) {}
    			 -- ++({-\base / 2}, -\altura)
        			node[midway] (-izq) {}
                -- ++(\base, 0)
                    node[midway] (-abajo) {}
                -- cycle
                    node[midway] (-der) {};
            \path (0, {-0.6 * \altura}) node (-centro) {#1};
	    }
	},
	pics/Router/.default={A}
}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \radio = 0.5; \base = 1.3; \altura = 1.5; \sep = 1.5; 
        \desvCirc = \radio * sqrt(2) / 2;
    }
    
    \draw (0, 0) circle (\radio) node (centro_y) {$y$};
    \path (\radio, 0) node[right=2pt] {$h = k + 1$};
        
    \draw ($ (centro_y.center) + ({-2 * \sep - \desvCirc}, {-\sep - \desvCirc}) $) 
        circle (\radio) node (centro_x) {$x$};
    \path ($ (centro_x.center) + (-\radio, 0) $) node[left=2pt] {$h = k$};
    
    \draw ($ (centro_y.center) + ({2 * \sep + \desvCirc}, {-\sep - \desvCirc}) $) 
        circle (\radio) node (centro_z) {$z$};
    \path ($ (centro_z.center) + (\radio, 0) $) node[right=2pt] {$h = k$};
    
    \draw pic (tA) at ($ (centro_x.center) + (-\sep, -\sep) $) {Triangulo={A}};
    \draw pic (tB) at ($ (centro_x.center) + ( \sep, -\sep) $) {Triangulo={B}};
    \draw pic (tC) at ($ (centro_z.center) + (-\sep, -\sep) $) {Triangulo={C}};
    \draw pic (tD) at ($ (centro_z.center) + ( \sep, -\sep) $) {Triangulo={D}};
    
    \path (tA-izq)   node[left=2pt]  {$h = k - 1$};
    \path (tB-abajo) node[below=2pt] {$h = k - 1$};
    \path (tC-abajo) node[below=2pt] {$h = k - 2$};
    \path (tD-der)   node[right=2pt] {$h = k - 1$};
        
    \tikzmath { \distSep = \radio + 0.3; }
    \begin{scope}[->, shorten <= \distSep cm, ultra thick]
        \draw[shorten >= \distSep cm] (centro_y.center) -- (centro_x.center);
        \draw[shorten >= \distSep cm] (centro_y.center) -- (centro_z.center);
        
        \draw (centro_x.center) -- (tA-sup);
        \draw (centro_x.center) -- (tB-sup);
        \draw (centro_z.center) -- (tC-sup);
        \draw (centro_z.center) -- (tD-sup);
    \end{scope}
    
\end{tikzpicture}
\end{document}
```  

Como el otro caso, tenemos que hacer la observación que puede intercambiarse $C$ y $D$, o incluso con la altura de $C$ con $h = k - 1$, y es la misma resolución

### Delete
---


### Search
---


### InorderWalk
---


### PostorderWalk
---


### PostorderWalk
---



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```