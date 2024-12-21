---
dia: 2024-11-12
etapa: ampliar
referencias:
  - "414"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sean $a,~ d \in \mathbb{Z}$ con $d \ne 0$. Se dice que $d$ divide a $a$, y se nota $d ~|~ a$, si existe un elemento $k \in \mathbb{Z}$ tal que $a = k \cdot d$ (o sea si el [[Algoritmo de división|cociente]] $\frac{a}{d}$ es un [[Números enteros|número entero]]). También se dice en ese caso que $a$ es divisible por $d$, o que $a$ es múltiplo de $d$. O sea $$ d \mid a \iff \exists k \in \mathbb{Z}: ~ a = k \cdot d $$
En caso contrario, se dice que $d$ no divide a $a$, y se nota $d \nmid a$. Eso es cuando el cociente $\frac{a}{d} \in \mathbb{Z}$, o sea no existe ningún entero $k \in \mathbb{Z}$ tal que $a = k \cdot d$

El [[Conjunto|conjunto]] de los divisores positivos y negativos de un entero $a$ se notará por $\text{Div}(a)$ y el de los divisores positivos por $\text{Div}_+(a)$ 

## Propiedades
---
* Todo número entero $d \ne 0$ satisface que $d \mid 0$ pues $0 = 0 \cdot d$. Así el $0$ tiene infinitos divisores $$ \text{Div}(0) = \mathbb{Z} \setminus \set{0} $$
* Se concluye que $d \mid a \iff |d| \mid |a|$ (donde $|x|$ denota el [[Norma|módulo]] o valor absoluto de $x$) 
    * $d \mid a \iff -d \mid a \iff d \mid -a \iff -d \mid -a$
    * El [[Cardinalidad|cardinal]] de $\text{Div}(a)$ es el doble de $\text{Div}_+(a)$
* Si $a \ne 0$, $d \mid a \iff |d| \le |a|$. En particular, todo número entero $a$ no nulo tiene sólo un número finito de divisores, todos pertenecientes al conjunto $$ \set{ -|a|,~ \cdots,~ -1,~ 1,~ \cdots,~ |a| } $$ O sea $\text{Div}_+(a) \subset \set{1,~ \cdots,~ |a|}$
* Ahor podemos probar fácilmente que los únicos números enteros que son inversibles son $1$ y $-1$. Es claro que tanto $1$ como $-1$ son inversibles. Por otro lado, si $a \in \mathbb{Z}$ inversible, entonces existe $b \in \mathbb{Z}$ tal que $a ~ b = 1$. Esto implica que $a \ne 0$ (pues $0 \cdot b = 0,~ \forall b \in \mathbb{Z}$), y por lo tanto $a | 1$. Pero por lo anterior, esto implica que $|a| \le 1$, es decir $a = \pm 1$
* $d \mid a ~\text{y}~ a \mid d \iff a = \pm d$ 
* Para todo $a \in \mathbb{Z}$, se tiene $1 \mid a$ y $-1 \mid a$, y también $a \mid a$ y $-a \mid a$

Sean $a,~ b,~ d \in \mathbb{Z}$, $d \ne 0$
* $d \mid a ~\text{y}~ d \mid b \implies d \mid a + b$
    * Pues si $a = k \cdot c$ y $b = j \cdot c$ con $k,~ j \in \mathbb{Z}$, entonces $a + b = (k + j) \cdot c$, donde $k + j \in \mathbb{Z}$
    * $d \mid a + b$ no implica que $d \mid a$ y $d \mid b$
    * Si $d \mid a + b$ y se sabe que $d \mid a$, entonces $d \mid b$
* $d \mid a ~\text{y}~ d \mid b \implies d \mid a - b$
* $d \mid a \implies d \mid c \cdot a, ~\forall c \in \mathbb{Z}$
    * $d \mid a \cdot b$ no implica $d \mid a$ o $d \mid b$
* $d \mid a \implies d^2 \mid a^2 ~\text{y}~ d^m \mid a^n, ~\forall n \in \mathbb{N}$
    * Pues si $a = k \cdot d$, entonces $a^2 = k^2 \cdot d^2$ y $a^n = k^n \cdot d^m$


## Propiedades esenciales con coprimalidad
---
Sean $a,~ b,~ c,~ d \in \mathbb{Z}$ con $c \ne 0$ y $d \ne 0$. Entonces 
1. Sea $c \perp d$. Entonces $c \mid a$, $d \mid a \iff c ~ d \mid a$

> [!quote]+ Demostración
> $c \perp d$ por definición $1 = s ~ c + t ~ d$ y esto implica $a = s ~ (c ~ a) + t ~ (d ~ a)$, pero $d \mid a \implies c ~ d \mid c ~ a$ y $c \mid a \implies c ~ d \mid d ~ a$, luego $c ~ d \mid s ~ (c ~ a) + t ~ (d ~ a) = a$ 

2. Sea $d \perp a$. Entonces $d \mid a ~ b \iff a \mid b$

> [!quote]+ Demostración
> $d \perp a$ por definición $1 = s ~ d + t ~ a$, luego $b = (s ~ b) ~ d + t ~ (a ~ b)$, pero $d \mid a ~ b$, y $d \mid d$. Por lo tanto, $d \mid  (s ~ b) ~ d + t ~ (a ~ b) = b$ 

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```