---
dia: 2024-01-13
tags:
  - proba/Teoría-de-probabilidades
  - nota/facultad
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
---
# Definición
---
Sea $A_n = \set{ a_1,~ \cdots,~ a_n }$ un [[Conjunto|conjunto]] con $n$ elementos. Para $0 \le k \le n$, se nota con el símbolo $\binom{n}{k}$, que se llama el número combinatorio $\binom{n}{k}$, la cantidad de [[Subconjunto|subconjuntos]] con $k$ elementos que tiene $A_n$ (o lo que es lo mismo, la cantidad de formas que tenemos de elegir $k$ elementos en un conjunto $A_n$ con $n$ elementos) es igual a $$ \binom{n}{k} = \frac{n!}{(n-r)! ~ r!} = C_{n, r} $$
> [!quote]+ Demostración
> Probaremos esta fórmula por [[Principio de inducción#Inducción "corrida"|inducción corrida]] a $n \ge 0$, usando la 


## Observaciones
---
* $\binom{n}{0} = \binom{n}{n} = 1$ pues el único subconjunto de $A_n$ con $0$ elementos es el [[Conjunto#^conjunto-vacio|conjunto vacío]] $\emptyset$, y el único subconjunto de $A_n$ con $n$ elementos es $A_n$ mismo

* $\binom{n}{1} = n$ pues los subconjuntos de $A_n$ con $1$ elementos son los subconjuntos $$ \set{a_1},~ \set{a_2},~ \cdots,~ \set{a_{n-1}},~ \set{a_n} $$

* Podemos darnos cuenta que $\binom{n}{n - 1} = n$ también ya que dar un subconjunto de $A_n$ con $n - 1$ elementos es lo mismo que elegir cuál elemento $a_i$ quedó afuera del subconjunto: por ejemplo el subconjunto $\set{ a_1,~ \cdots,~ a_{n-1} }$ es el que corresponde a haber dejado $a_n$ afuera

* Con el mismo razonamiento, $\binom{n}{k} = \binom{n}{n - k}$, $\forall k, ~ 0 \le k \le n$, ya que a cada subconjunto $B_k$ de $A_n$ con $k$ elementos, podemos asignarle el [[Operador NOT|subconjunto complementario]] $B_k'$ que tiene $n - k$ elementos, y esta asignación es una [[Función biyectiva|función biyectiva]]

* Más aún, dado que $\binom{n}{k}$, $0 \le k \le n$, cuenta la cantidad de subconjuntos con $k$ elementos en el conjunto $A_n$ con $n$ elementos, y que sabemos que la cantidad total de subconjuntos que hay en $A_n$ es $2^n$, se tiene $$ 2^n = \binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{n - 1} + \binom{n}{n} = \sum_{k = 0}^n \binom{n}{k}, ~~~ \forall n \in \mathbb{N}_0 $$