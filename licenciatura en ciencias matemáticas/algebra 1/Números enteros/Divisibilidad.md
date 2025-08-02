---
dia: 2024-11-12
etapa: ampliar
referencias:
  - "414"
tags:
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sean $a,~ d \in \mathbb{Z}$ con $d \ne 0$. Se dice que $d$ divide a $a$, y se nota $d ~|~ a$, si existe un elemento $k \in \mathbb{Z}$ tal que $a = k \cdot d$ (o sea si el [[Algoritmo de división|cociente]] $\frac{a}{d}$ es un [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Números enteros|número entero]]). También se dice en ese caso que $a$ es divisible por $d$, o que $a$ es múltiplo de $d$. O sea $$ d \mid a \iff \exists k \in \mathbb{Z}: ~ a = k \cdot d $$
En caso contrario, se dice que $d$ no divide a $a$, y se nota $d \nmid a$. Eso es cuando el cociente $\frac{a}{d} \in \mathbb{Z}$, o sea no existe ningún entero $k \in \mathbb{Z}$ tal que $a = k \cdot d$

El [[Conjunto|conjunto]] de los divisores positivos y negativos de un entero $a$ se notará por $\text{Div}(a)$ y el de los divisores positivos por $\text{Div}_+(a)$ 

## Propiedades
---
> [!proposicion]+ Proposición 1.2.1 
> Todo número entero $d \ne 0$ satisface que $d \mid 0$ pues $0 = 0 \cdot d$. Así el $0$ tiene infinitos divisores $$ \text{Div}(0) = \mathbb{Z} \setminus \set{0} $$
^prop-1-2-1

> [!proposicion]+ Proposición 1.2.2
> $d \mid a \iff -d \mid a$ (pues $a = k \cdot d \iff a = (-k) \cdot (-d)$).
> 
> De la misma manera $d \mid a \iff -d \mid a \iff d \mid -a \iff -d \mid -a$
> 
> Se concluye que $d \mid a \iff |d| \mid |a|$ (donde $|x|$ denota el [[Norma|módulo]] o valor absoluto de $x$) 
>  * El [[Cardinalidad|cardinal]] de $\text{Div}(a)$ es el doble de $\text{Div}_+(a)$
^prop-1-2-2

> [!proposicion]+ Proposición 1.2.3
> Si $a \ne 0$, $d \mid a \iff |d| \le |a|$. En particular, todo número entero $a$ no nulo tiene sólo un número finito de divisores, todos pertenecientes al conjunto $$ \set{ -|a|,~ \cdots,~ -1,~ 1,~ \cdots,~ |a| } $$ O sea $\text{Div}_+(a) \subset \set{1,~ \cdots,~ |a|}$
^prop-1-2-3

> [!proposicion]+ Proposición 1.2.4
> Ahor podemos probar fácilmente que los únicos números enteros que son inversibles son $1$ y $-1$. Es claro que tanto $1$ como $-1$ son inversibles. Por otro lado, si $a \in \mathbb{Z}$ inversible, entonces existe $b \in \mathbb{Z}$ tal que $a ~ b = 1$. Esto implica que $a \ne 0$ (pues $0 \cdot b = 0,~ \forall b \in \mathbb{Z}$), y por lo tanto $a | 1$. Pero por lo anterior, esto implica que $|a| \le 1$, es decir $a = \pm 1$
^prop-1-2-4

> [!proposicion]+ Proposición 1.2.5
> $d \mid a ~\text{y}~ a \mid d \iff a = \pm d$  (pues $a = k \cdot d$ y $d = j \cdot a$ implica que $a = (k \cdot j) \cdot a$, por lo tanto $k$ y $j$ son dos números enteros que satisfacen $k \cdot j = 1$, o sea, $k = \pm 1$)
^prop-1-2-5

> [!proposicion]+ Proposición 1.2.6
> Para todo $a \in \mathbb{Z}$, se tiene $1 \mid a$ y $-1 \mid a$, y también $a \mid a$ y $-a \mid a$
^prop-1-2-6

> [!proposicion]+ Proposición 1.2.7
> Sean $a,~ b,~ d \in \mathbb{Z}$, $d \ne 0$. $d \mid a ~\text{y}~ d \mid b \implies d \mid a + b$
> * Pues si $a = k \cdot c$ y $b = j \cdot c$ con $k,~ j \in \mathbb{Z}$, entonces $a + b = (k + j) \cdot c$, donde $k + j \in \mathbb{Z}$
> * $d \mid a + b$ no implica que $d \mid a$ y $d \mid b$
> * Si $d \mid a + b$ y se sabe que $d \mid a$, entonces $d \mid b$
^prop-1-2-7

> [!proposicion]+ Proposición 1.2.8
> Sean $a,~ b,~ d \in \mathbb{Z}$, $d \ne 0$. $d \mid a ~\text{y}~ d \mid b \implies d \mid a - b$
^prop-1-2-8

> [!proposicion]+ Proposición 1.2.9
> Sean $a,~ b,~ d \in \mathbb{Z}$, $d \ne 0$. $d \mid a \implies d \mid c \cdot a, ~\forall c \in \mathbb{Z}$
> * $d \mid a \cdot b$ no implica $d \mid a$ o $d \mid b$
^prop-1-2-9

> [!proposicion]+ Proposición 1.2.10
> Sean $a,~ b,~ d \in \mathbb{Z}$, $d \ne 0$. $d \mid a \implies d^2 \mid a^2 ~\text{y}~ d^m \mid a^n, ~\forall n \in \mathbb{N}$
> * Pues si $a = k \cdot d$, entonces $a^2 = k^2 \cdot d^2$ y $a^n = k^n \cdot d^m$
^prop-1-2-10

## Propiedades esenciales con coprimalidad
---
> [!proposicion]+ Proposición 1.1.4 (Propiedad esenciales de divisibilidad con coprimidad)
> Sean $a,~ b,~ c,~ d \in \mathbb{Z}$ con $c \ne 0$ y $d \ne 0$. Entonces 
>  1. Sea $c \perp d$. Entonces $c \mid a$, $d \mid a \iff c ~ d \mid a$
>     
> > [!demostracion]- Demostración
> $c \perp d$ por definición $1 = s ~ c + t ~ d$ y esto implica $a = s ~ (c ~ a) + t ~ (d ~ a)$, pero $d \mid a \implies c ~ d \mid c ~ a$ y $c \mid a \implies c ~ d \mid d ~ a$, luego $c ~ d \mid s ~ (c ~ a) + t ~ (d ~ a) = a$ 
> 
> 2. Sea $d \perp a$. Entonces $d \mid a ~ b \iff a \mid b$
> 
> > [!demostracion]- Demostración
> $d \perp a$ por definición $1 = s ~ d + t ~ a$, luego $b = (s ~ b) ~ d + t ~ (a ~ b)$, pero $d \mid a ~ b$, y $d \mid d$. Por lo tanto, $d \mid  (s ~ b) ~ d + t ~ (a ~ b) = b$ 
^prop-1-1-4

## Divisores  y potencias
---
> [!proposicion]+ Proposición 1.1.10 (Divisores y potencias)
> Sean $a, ~d \in \mathbb{Z}$ con $d \ne 0$, y sea $n \in \mathbb{N}$. Entonces $$ d \mid a \iff d^n \mid a^n $$
> 
> > [!demostracion]- Demostración
> > Solo falta probar ($\impliedby$), que si $d^n \mid a^n$ entonces $d \mid a$
> >  * Para $a = 0$ no hay nada que probar porque $d \mid 0$, $\forall d \ne 0$
> >  * Para $a = \pm 1$, casi tampoco, ya que si $d^n \mid (\pm 1)^n$, entonces $d^n = \pm 1$, luego $d = \pm 1$, que divide a $a = \pm 1$
> >  * En caso $a \ne 0,~ \pm 1$ es el interesante. Si $a = \pm p_1^{m_1} \cdots p_r^{m_r}$, entonces $$ a^n = (\pm p_1^{m_1} \cdots p_r^{m_r})^n = \pm p_1^{n \cdot m_1} \cdots p_r^{n \cdot m_r} $$
> >    Ahora bien, la condición $d^n \mid a^n$ implica que $d \mid a^n$. Por lo tanto $d = \pm p_1^{n_1} \cdots p_r^{n_r}$ no tiene más primos en su [[Teorema fundamental de la aritmética|factorización]] que los de $a$. Pero entonces $$ d^n = \pm p_1^{n \cdot n_1} \cdots p_r^{n \cdot n_r} \mid a^n $$ implica por la [[Teorema fundamental de la aritmética#^pro-1-1-3|proposición 1.1.3]] que $0 \le n \cdot n_1 \le n \cdot m_1,~ \cdots,~ 0 \le n \cdot n_r \le n \cdot m_r$, es decir, simplificando el $n$, que $$ 0 \le n_1 \le m_1,~ \cdots,~ 0 \le n_r \le m_r $$
> >    Esto prueba, nuevamente por la proposición 1.1.3, que $d \mid a$
^prop-1-1-10

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```