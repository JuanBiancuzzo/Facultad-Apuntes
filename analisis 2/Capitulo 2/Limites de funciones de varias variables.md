---
dia: 2023-01-22
materia: analisis 2
capitulo: 2
---
### Definición
---
El concepto de limite [[Función]] es el mismo que para funciones de una variable, por lo menos en esencia

Pero volveremos a plantear el concepto de cercania, para que se adapte a funciones de varias variables

### Herramientas
 * La herramienta mas basica que usaremos es [[Disco abierto]], que es
![[Disco abierto#Definición]]

 * Tambien vamos a definir que determinamos como un [[Conjunto abierto]]
![[Conjunto abierto#Definición]]

# Definicion
Sea $f : U \subseteq \mathbb{R}^n \to \mathbb{R}$, con $U$ siendo un [[Conjunto abierto]], y $x_0$ un punto de $U$o bien un [[analisis 2/Capitulo 2/Punto frontera]] de $U$

$$ \lim_{x \to x_0} f(x) = L $$

si dado cualquier $\epsilon > 0$ existe un $\delta  > 0$ tal que 

$$ x \in B(x_0, \delta) \cap U(x \ne x_0) \iff f(x) \in B(L, \epsilon) $$

![[Límites de una función de varias variables.webp]]


## Formas de resolver limites
 * ![[Limites iterados]]
 * ![[Aproximaciones por curvas]]

## Operaciones
Tomando que $f, g : U \subseteq \mathbb{R}^n \to \mathbb{R}$ dos funciones definidas en el abierto $U$ de $\mathbb{R}^n$ y sea $x_0$ un punto de $U$ o un [[analisis 2/Capitulo 2/Punto frontera]] de $U$. Suponiendo que 

$$ \lim_{x \to x_0} f(x) = L, ~~ \lim_{x \to x_0} g(x) = M $$

Es decir que la suma de los limites es la suma de los limites individuales
![[Suma de limites#Definicion]] ![[Producto de limites#Definicion]] ![[Cociente de limites#Definición]]