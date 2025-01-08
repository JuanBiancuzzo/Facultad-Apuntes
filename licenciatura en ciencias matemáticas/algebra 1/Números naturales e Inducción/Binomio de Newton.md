---
dia: 2024-11-11

referencias:
  - "413"
  - "503"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El teorema del binomio es una fórmula que proporciona el desarrollo de la $n$-ésima [[Función potencia|potencia]] de un binomio, siendo $n \in \mathbb{Z}^+$. De acuerdo con el teorema, es posible expandir la potencia $(x + y)^n$ en una suma que implica términos de la forma $a ~ x^b ~ y^c$, donde los exponentes $b,~c \in \mathbb{N}$, es decir, son [[Números Naturales|números naturales]] con $b + c = n$, y el coeficiente $a$ de cada término es un [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Números enteros|número entero]] positivo que depende de $n$ y $b$<sup><a href="#ref-503" style="color: inherit; text-decoration: none;">[503]</a></sup> 

Por ejemplo, si calculamos los desarrollos para los primeros valores de $n$ $$ \begin{align} 
    (x + y)^0 &= 1 \\
    (x + y)^1 &= x + y \\
    (x + y)^2 &= x^2 + 2xy + y^2 \\
    (x + y)^3 &= x^3 + 3x^2y + 3xy^2 + y^3 \\
    (x + y)^4 &= x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4 \\
    (x + y)^5 &= x^5 + 5x^4y + 10x^3y^2 + 10x^3y^3 + 5xy^4 + y^5 \\
\end{align} $$
Pareciera que van apareciendo como coeficientes de los monomios $x^i ~ y^j$ los [[Número combinatorio|números combinatorios]] que aparecen en el [[Triángulo de Pascal|triángulo de Pascal]]. O sea pareciera que se tiene

$$ \begin{align} 
    (x + y)^n &= x^n + \binom{n}{1} ~ x^{n - 1}y + \binom{n}{2} x^{n - 2}y^2 + \cdots + \binom{n}{n - 1} ~ x y^{n - 1} + y^n \\
     &= \sum_{k = 0}^{n} \binom{n}{k} ~ x^{n - k} y^k, ~~~ \forall n \in \mathbb{N}_0
\end{align} $$ o lo que es lo mismo, ya que los números combinatorios son simétricos $$ (x + y)^n = \sum_{k = 0}^{n} \binom{n}{k} ~ x^k y^{n - k}, ~~~ \forall n \in \mathbb{N}_0 $$

> [!quote]- Demostración
> Haremos una demostración combinatoria, o sea "contando". Pensemos que $$ (x + y)^n = \underbrace{ (x + y) \cdot (x + y) \cdots (x + y) \cdot (x + y) }_{n ~ \text{factores}} $$
> 
> Cuando aplicamos la [[Distributividad|distributividad]], en cada paréntesis podemos elegir un $x$ o un $y$ (pero no los dos a la vez). Como en total hay $n$ paréntesis terminaremos eligiendo $k$ veces $x$ y $n - k$ veces $y$, para algún valor de $k$, $0 \le k \le n$. Por ejemplo si no elegimos ninguna vez $x$ y $n$ veces $y$, obtenemos (al realizar el producto) el monomio $y^n$, y si elegimos $1$ vez $x$ y $n - 1$ veces $y$, obtenemos el monomio $xy^{n - 1}$. ¿Pero cuántas veces aparece cada uno de esos monomios?
> 
>  * ¿Cuántas veces se obtiene el monomio $y^n$? Para ello tenemos que elegir solo el $y$ de cada uno de los paréntesis: hay una única forma de hacer eso, y por lo tanto se obtiene una vez el monomio $y^n$
>  * ¿Cuántas veces se obtiene el monomio $xy^{n - 1}$? Para ello tenemos que elegir en alguno de los paréntesis el $x$ y en todos los demás paréntesis el $y$: como hay $n$ paréntesis, hay $n$ formas de elegir el $x$ (o bien del $1$er paréntesis, o bien del $2$do, o bien del $3$ro, etc.) y de los demás paréntesis saco el $y$. Por lo tanto se obtiene $n = \binom{n}{1}$ veces del monomio $x y^{n  1}$
>  * En general, dado $k$, $0 \le k \le n$, ¿cuántas veces se obtiene el monomio $x^k y^{n - k}$? Para ello tenemos que elegir en $k$ paréntesis el $x$ y en todos los $n - k$ paréntesis restantes el $y$: como hay $n$ paréntesis y tenemos que elegir de cuáles $k$ paréntesis extraemos un $x$, hay $\binom{n}{k}$ formas de elegir de qué paréntesis saco $x$ (y de los demás paréntesis saco el $y$). Por lo tanto se obtiene $\binom{n}{k}$ veces el monomio $x^k y^{n - k}$
> 
> En definitiva, tenemos la suma de $n + 1$ términos de la forma $\binom{n}{k}$ ~ x^k y^{n - k}$ lo que prueba lo que queríamos probar

## Observación
---
* Con la fórmula del binomio de newton, se recupera fácilmente la expresión $$ 2^n = (1 + 1)^n = \sum_{k = 0}^{n} \binom{n}{k} 1^k ~ 1^{n - k} =  $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```