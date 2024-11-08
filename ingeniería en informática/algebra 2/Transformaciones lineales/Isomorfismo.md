---
dia: 2023-01-22
tags:
  - ingeniería-en-informática/algebra-2/Transformaciones-lineales
  - nota/facultad
  - ingeniería-en-informática/discreta/Álgebra-de-Boole
  - ingeniería-en-informática/discreta/Grafos
referencias:
  - "192"
---
# Definición
---
El concepto matemático de isomorfismo pretende captar la idea de tener la misma estructura <sup><a href="#ref-192" style="color: inherit; text-decoration: none;">[192]</a></sup> 

## Álgebra de Boole
---
Sean $B_1$ y $B_2$ dos [[Álgebra de Boole|álgebra de Boole]], se dice que son isomorfas si preservan sus tres leyes a través de $f : B_1 \to B_2$ [[Función biyectiva|biyectiva]] tal que

1. $\forall x, y \in B_1: ~~~~ f(x +_1 y) = f(x) +_2 f(y)$
2. $\forall x, y \in B_1: ~~~~ f(x \cdot_1 y) = f(x) \cdot_2 f(y)$
3. $\forall x \in B_1: ~~~~ f(x^{'_1}) = f(x)^{'_2}$

Se puede demostrar que si preserva algunas dos de las tres leyes mostradas, entonces preserva las tres, se lo puede ya que $(+,~\cdot,~')$ es un [[Juego completo|juego completo]]

Si se cumplen estas tres leyes, entonces podemos demostrar que se preservan también los siguientes elementos

* [[Elemento neutro|Neutro]]
	* $f(0_{B_1}) = 0_{B_2}$
* Orden
	* $\forall x, ~y \in B_1: ~~~~ x \le_1 y \to f(x) \le_2 f(y)$
* [[Átomo|Átomos]]
	* Si $a$ es átomo de $B_1$, entonces $f(a)$ es átomo de $B_2$

Como cualquier elemento del álgebra de Boole se puede escribir como combinación de los átomos, entonces para definir un isomorfismo basta con definir la [[Transformación|transformación]] de sus átomos. De esta forma definimos la cantidad de isomorfismos posible entre dos álgebras como $n!$, siendo $n$ la cantidad de átomos

## Transformaciones lineales
---
Una [[Transformación lineal|transformación lineal]] es isomorfismo si es un [[Monomorfismo|monomorfismo]] y un [[Epimorfismo|epimorfismo]]

Viendo [[Matriz de una transformación lineal|matriz de una TL]], se puede definir $T$ isomorfismo si y solo si, $dim(\mathbb{V}) = dim(\mathbb{W})$ y $[T]_{B_1}^{B_2}$ es inversible

## Grafos
---
Dos [[Grafo|grafos]] se consideran iguales si coinciden los tres elementos de la terna que los definen. En cambio, dos [[Grafo simple|grafos simples]] son isomorfos si preservan todos sus [[Invariante de un grafo|invariantes]], pero la [[Demostración de equivalencia#Usando proposiciones|recíproca]] es falsa

Dado dos grafos simples $G$ y $H$, se considera que son isomorfos con $G \cong H \iff \exists\theta: ~~ V(G) \to V(H) (H)$ [[Función biyectiva|biyectiva]] tal que $uv \in E(G) \iff \theta(u)\theta(v) \in E(H)$. Es decir, si preserva las adyacencias

Además, $G \cong H$ con el isomorfismo definido por $\theta: ~~ V(G) \to V(H)$ si y solo si la correspondiente [[Matriz|matriz]] de permutación $P\in\Set{0,~1}^{n \times n}$ satisface $A_G = P^{-1}A_H P$ donde $A_G$ es la [[Matriz de adyacencia|matriz de adyacencia]] de $G$, y $A_H$ la de $H$

Para calcular $P$, permutaremos las filas de la matriz identidad $I_n$ como indica la permutación $\theta$


# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```