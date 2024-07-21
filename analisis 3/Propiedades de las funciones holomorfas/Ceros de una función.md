---
dia: 2022-11-25
capitulo: 6
tags:
  - analisis-3/Propiedades-de-las-funciones-holomorfas
---
### Definición
---
Sea $f : D \to \mathbb{C}$ una función [[Holomorfa]] en un abierto $D \subseteq \mathbb{C}$. Un cero de $f$ es un punto $z_0 \in D$ tal que $f(z_0) = 0$. Ahora, por ser $f$ holomorfa en $D$, es [[Función analitica|analitica]] en este abierto, por lo que admite un desarrollo en [[Serie de Taylor]], para todo $z_0 \in D(z_0, r)$ con $r > 0$ :

$$ f(z) = f(z_0) + f'(z_0) \cdot (z - z_0) + \frac{f''(z_0)}{2!} \cdot (z - z_0)^2 + \frac{f^{(3)}(z_0)}{3!} \cdot (z - z_0)^3 + \cdots $$

Como $f(z_0) = 0$ entonces: $$ \begin{align} 
f(z) &= \overbrace{f(z_0)}^{= 0} + f'(z_0) \cdot (z - z_0) + \frac{f''(z_0)}{2!} \cdot (z - z_0)^2 + \frac{f^{(3)}(z_0)}{3!} \cdot (z - z_0)^3 + \cdots \\

&= (z - z_0) \cdot \overbrace{\bigg( f'(z_0) + \frac{f''(z_0)}{2!} \cdot (z - z_0) + \frac{f^{(3)}(z_0)}{3!} \cdot (z - z_0)^2 + \cdots \bigg)}^{f_1(z)}
\end{align} $$ donde $f_1(z)$ es [[Holomorfa]] en $D$, y para $\forall z \in D - \set{z_0}$ $f_1(z) = \frac{f(z)}{z - z_0}$. 
Llamaremos $z_0$ un cero simple o de orden 1 si $f_1(z_0) \ne 0$. 

En el caso donde $f_1(z_0) = 0$ entonces: $$ f(z) = (z - z_0)^2 \cdot \overbrace{\bigg( \frac{f''(z_0)}{2!} + \frac{f^{(3)}(z_0)}{3!} \cdot (z - z_0) + 
\frac{f^{(4)}(z_0)}{4!} \cdot (z - z_0)^2 + \cdots \bigg)}^{f_2(z)} $$ donde $f_2(z)$ es [[Holomorfa]] en $D$, y para $\forall z \in D - \set{z_0}$ $f_2(z) = \frac{f(z)}{(z - z_0)^2}$. 
Llamaremos $z_0$ un cero doble o de orden 2 si $f_2(z_0) \ne 0$.

Y asi sucesivamente, donde $f(z) = (z - z_0)^k \cdot f_k(z)$ para todo $z \in D$ y $f_k$ [[Holomorfa]] en $D$ tal que $f_k(z_0) \ne 0$, caso en que diremos que $z_0$ es un cero de orden $k$ de $f$.

En el caso donde para $f(z_0) = 0$ y $f^{(n)}(z_0) = 0$ entonces $f$ es identicamente nula. 