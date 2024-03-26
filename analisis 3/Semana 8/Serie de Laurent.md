---
dia: 2022-11-25
materia: analisis 3
capitulo: 8
---
### Definición
---
Es una [[Serie]] donde $$ \sum_{n = - \infty}^{\infty} c_n \cdot (z - z_0)^n $$
Donde sus partes son:
1) Para cada $n \in \mathbb{Z}$, $c_n$ es un numero complejo denominado coeficiente n-ésimo de la serie de Laurent. Estos coeficientes forman una [[Sucesión]] $(c_n)^{\infty}_{n = -\infty}$.
2) $z_0$ es un numero complejo, denominado centro de la serie
3) $z$ es un numero complejo variable. Esto sugiere que puede haber una función $f : D \to \mathbb{C}$ definida por $f(z) =  \displaystyle\sum_{n = - \infty}^{\infty} c_n \cdot (z - z_0)^n$ para cada $z \in D$, siendo $D \subset \mathbb{D}$ un dominio de convergencia.
4) ![[Serie principal de Laurent#Definición]]

Donde su dominio de convergencia, la podemos estudiar como $$ \begin{align} 
f(z) &= f_1(z) + f_2(z) \\
f_1(z) &= \sum_{n = 0}^\infty c_n \cdot (z - z_0)^n \\
f_2(z) &= \sum_{n = 1}^\infty c_{-n} \cdot (z - z_0)^{-n}
\end{align} $$ donde podemos analizar el [[Radio de convergencia]] de las [[Serie de potencias]] de las funciones $f_1(z)$ y $f_2(z)$, dejando que para $f_1(z)$ esta definida para $f_1 : D(z_0, r_1) \to \mathbb{C}$ y para $f_2(z)$ tenemos que $$ E\bigg(z_0, \frac{1}{r_2}\bigg) = \Set{z \in \mathbb{C} : |z - z_0| > \frac{1}{r_2}} $$ entonces esta definida para $f_2 : E\bigg(z_0, \frac{1}{r_2}\bigg) \to \mathbb{C}$. 

Por lo tanto para $f(z)$ su [[Dominio de convergencia]] es $D = D(z_0, r_1) \bigcup E\bigg(z_0, \frac{1}{r_2}\bigg)$ 