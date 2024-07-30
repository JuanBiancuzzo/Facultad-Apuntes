---
dia: 2023-01-22
tags:
  - algebra-2/Espacios-Vectoriales
  - nota/facultad
---
### Definición
---
En los espacios vectoriales vamos a poder definir dos operaciones [[Ley de composición interna]] ($+$) y [[Ley de composición externa]] ($\cdot$). 

Entonces definiremos un espacio vectorial con un [[Cuerpo]] $\mathbb{K}$ y sea $\mathbb{V}$ el conjunto no vacío donde se define las operación $+$ entre dos elementos de $\mathbb{V}$ y $\cdot$ entre un elemento de $\mathbb{V}$ y un elemento de $\mathbb{K}$

Lo podremos escribir como $(\mathbb{V}, +, \mathbb{K}, \cdot)$ es un $\mathbb{K}$*-espacio vectorial* si cumple lo puesto anteriormente en las características necesarias del cuerpo
![[Ley de composición interna#Características de la composición interna]]

![[Ley de composición externa#Características de la composición externa]]

#### Ejemplos
---
* Sea $L_2(\mathbb{R})$ el espacio de las [[Señal|señales]] $f : \mathbb{R} \to \mathbb{C}$ tales que $$ \int_{- \infty}^{\infty} | f(t) |^2 dt < \infty $$ es decir las señales con [[Medida de una señal#Energía|energía]] finita en toda la recta
* Sea $L_2(B)$ con $B \subset \mathbb{R}$ el espacio de las [[Señal|señales]] $f : B \to \mathbb{C}$ tales que $$ \int_B | f(t) |^2 dt < \infty $$
* Sea $l^2(\mathbb{Z})$ el espacio de las señales de tiempo discreto $x[n] : \mathbb{Z} \to \mathbb{C}$ tales que $$ \sum_{n = -\infty}^{\infty} | x[n] | ^2 $$
* Sea $\mathbb{P}(n)$ el conjunto de los [[Función polinomica|polinomios]] de grado menor o igual a $n$.