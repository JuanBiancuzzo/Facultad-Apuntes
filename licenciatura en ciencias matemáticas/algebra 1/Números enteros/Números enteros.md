---
dia: 2024-11-11
etapa: empezado
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

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```