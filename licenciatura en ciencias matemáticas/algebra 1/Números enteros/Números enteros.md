---
dia: 2024-11-11
etapa: ampliar
referencias:
  - "414"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - nota/facultad
aliases:
  - Número entero
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El [[Conjunto|conjunto]] de los números enteros es $$ \mathbb{Z} = \set{ ~...,~ -3,~ -2,~ -1,~ 0,~ 1,~ 2,~ 3,~ \cdots~ } = -\mathbb{N} \cup \set{0} \cup \mathbb{N} $$ donde $-\mathbb{N} := \set{ -n;~ n \in \mathbb{N} }$

Una de las razones de la necesidad de trabajar con estos números es que en los [[Números Naturales|naturales]] $\mathbb{N}$ no se puede restar (en general), es decir la ecuación $x + a = b$ con $a > b \in \mathbb{N}$ no tiene solución en $\mathbb{N}$. Así $\mathbb{Z}$ se obtiene a partir de $\mathbb{N}$ agregándole los números negativos

En $\mathbb{Z}$ la operación $+$ cumple que para todo $a,~ b \in \mathbb{Z}$, $a + b \in \mathbb{Z}$, y satisface además las siguientes propiedades, que le dan una estructura de [[Grupo conmutativo|grupo conmutativo]]
* Asociatividad ![[Asociatividad#^a74742]]
* Elemento de identidad ![[Elemento neutro#^319ab6]]
* Elemento inverso ![[Complementario#^8e8cca]]
* Conmutatividad ![[Conmutatividad#^c795df]]

En $\mathbb{Z}$ también se puede multiplicar: la operación $\cdot$ cumple que para todo $a,~ b \in \mathbb{Z}$, $a \cdot b \in \mathbb{Z}$. Y además cumple propiedades parecidas a $+$, aunque no todas
* Asociatividad ![[Asociatividad#^502cc2]]
* Elemento de identidad ![[Elemento neutro#^d3b9e8]]
* Conmutatividad ![[Conmutatividad#^c795df]]
La propiedad siguiente relaciona el producto con la suma
* Distributividad del producto sobre la suma ![[Distributividad#^b3ee21]]
La tripla $(\mathbb{Z},~ +,~ \cdot)$ tiene una estructura que se llama un [[Anillo conmutativo|anillo conmutativo]]

El conjunto de los números enteros $\mathbb{Z}$ con el producto también cumple otra importante propiedad $$ \forall a,~ b \in \mathbb{Z}: ~~ a \cdot b = 0 \implies a = 0 ~~ \text{o} ~~ b = 0 $$ que lo convierte en un [[Dominio íntegro|dominio íntegro]]. Esto propiedad es la que permite simplificar un factor común no nulo

Recordemos otras propiedades que ya conocemos de $\mathbb{Z}$ o también de subconjuntos de $\mathbb{Z}$
* $\mathbb{Z}$ es un [[Conjunto inductivo|conjunto inductivo]], que contiene estrictamente a $\mathbb{Z}$ y para el cual no vale así nomás el [[Principio de inducción|principio de inducción]] ya que no tiene primer elemento por el cual empezar la inducción
* Si fija $n_0 \in \mathbb{Z}$, en $\mathbb{Z}_{n_0} := \set{ m \in \mathbb{Z}; ~ m \ge n_0 }$ vale el principio de inducción empezando en $n_0$
* Equivalentemente, $\mathbb{Z}_{n_0}$ y $\mathbb{N}_{0}$ son [[Principio de Buen Ordenación|conjuntos bien ordenados]], o sea, cualquier [[Subconjunto|subconjunto]] no vacío tiene primer elemento o [[Mínimo|mínimo]]

## Todo número entero es divisible por algún primo
---
Sea $a \in \mathbb{Z}$, $a \ne 0,~ \pm 1$. Entonces existe un [[Número primo|número primo]] (positivo) $p$ tal que $p \mid a$ ^e1bdbb

> [!quote]+ Demostración
> Claramente alcanza probar para $a$ positivo, es decir para $a \ge 2$ (pues $a \ne 0,~ \pm 1$) pues sabemos que $p \mid a \iff p \mid |a|$ $$ p(a): ~~ \exists p ~ \text{primo positivo} ~ : ~ p \mid a $$
> 
>  * Caso base p(2) es Verdadera: Sí, pues $p := 2 \mid 2$
>  * Paso inductivo: Dado $a > 2$, $p(a)$ es Verdadera para $1 \le k \le a - 1$  $\implies p(a)$ Verdadera
>      * HI: $\forall d, ~ 1 < d < a$, existe un primo (positivo) $p$ tal que $p \mid d$
>      * Qpq existe un primo (positivo) $p$ tal que $p \mid a$
>
>    Se tiene
>      * Si $a$ es primo, $p(a)$ es verdadera pues $p := a \mid a$
>      * Si $a$ no es primo, entonces es [[Número compuesto|compuesto]], y por lo tanto existe $d \in \mathbb{Z}$ con $1 < d < a$ tal que $d \mid a$. Por hipótesis inductiva, como $1 < d < a$, existe un primo positivo $p$ tal que $p \mid d$. Se concluye que $p \mid a$ por transitividad de la [[Divisibilidad|divisibilidad]]
> 
> Es decir hemos probado tanto el caso base como el paso inductivo. Se concluye que $p(a)$ es Verdadero, $\forall a \ge 0$. Así, todo número distinto de $0,~ \pm 1$ es divisible por algún primo positivo

Una consecuencia de este hecho es que hay infinitos primos distintos

> [!quote]+ Demostración
> Supongamos que no es así y que hay sólo n número finito $N$ de primos positivos. O sea que el conjunto $\mathcal{P}$ de primos positivos es $\mathcal{P} = \set{ p_1,~ \cdots,~ p_N }$. Consideremos entonces el siguiente [[Números Naturales|número natural]] $M$ $$ M := p_1 \cdot p_2 \cdots p_N + 1 $$
> 
> Dado que $M \ge 2$ pues $2 \in \mathcal{P}$, existe un primo positivo $p_i \in \mathcal{P}$ que divide a $M$. Pero $$ \begin{matrix} 
>     p_i \mid M & \text{y} & p_i \mid p_1 \cdot p_2 \cdots p_N & \implies p_i \mid 1
> \end{matrix} $$ contradicción que proviene de suponer que hay sólo finitos primos

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```