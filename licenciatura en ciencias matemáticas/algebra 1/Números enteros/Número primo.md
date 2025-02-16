---
dia: 2024-12-22
etapa: ampliar
referencias:
  - "414"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un número $p \in \mathbb{Z}$ es primo si y solo si es $\ne 0,~ \pm 1$ y tiene únicamente $4$ [[Algoritmo de división|divisores]], o, lo que es lo mismo, si y solo si tiene únicamente $2$ divisores positivos

También se lo puede definir, usando la propiedad fundamental, $p$ es primo si y solo si cada vez que $p$ divide a un producto divide a alguno de los factores

Estas dos definiciones
* $p$ tiene únicamente $2$ divisores positivos
* $\forall a,~b,~ p \mid a \cdot b \implies p \mid a ~~ \lor ~~ p \mid b$
son equivalentes

## Observación
---
Si $p$ es un número primo (positivo), y $a \in \mathbb{Z}$ es cualquiera, entonces $\text{Div}_{+}(p) = \set{1,~ p}$ y por lo tanto $\text{DivCom}_{+}(\set{ p,~a}) \subset \set{1,~p}$: es igual a $\set{1,~p}$ cuando $p \mid a$ y es igual a $\set{1}$ cuando $p \not \mid a$. Por lo tanto el [[Máximo común divisor|máximo común divisor]] entre $p$ y $a$, es igual a $p$ cuando $p \mid a$ y es igual a $1$ cuando $p \not \mid a$ 

$$ (p ~:~ a) = \begin{cases} 
    p & \text{si} ~ p \mid a \\
    1 & \text{si} ~ p \not \mid a \\
\end{cases}~, ~~~~~ \text{y por lo tanto} ~~ p \perp a \iff p \not \mid a$$

^7da588

## Propiedad fundamental
---
> [!teorema]+ Teorema 1.1.8 (Propiedad fundamental de los números primos)
> Sea $p$ un primo y sean $a,~ b \in \mathbb{Z}$. Entonces  $$ p \mid a \cdot b \implies p \mid a ~~ \lor ~~ p \mid b $$
> 
> > [!demostracion]- Demostración
> > Usando la propiedad ![[Divisibilidad#^prop-1-1-4|divisibilidad con coprimos]] y la observación ![[Número primo#^7da588|anterior]] podemos ver que $p \perp a$ es equivalente a $p \not \mid a$ por lo que reformulando la propiedad, esta diría $p \mid a \cdot b$ y $p \not \mid a$ entonces $p \mid b$
> > 
> > Ahora usando esta reformulación, vemos que las dos opciones ya están, si $p \mid a$ es una de las posibilidades y si $p \not \mid a$ entonces $p \mid b$
^teo-1-1-8

> [!proposicion]+ Proposición 1.1.9 
> Sea $p$ un número primo y sean $a_1,~ \cdots,~ a_n \in \mathbb{Z}$, con $n \ge 2$. Entonces $$ p \mid a_1 \cdots a_n \implies p \mid a_i ~ \text{para algún} ~ i,~ 1 \le i \le n $$
> En particular, dado $a \in \mathbb{Z}$, si $p \mid a^n$ entonces $p \mid a$ 
> 
> > [!demostracion]- Demostración
> > Por [[Principio de inducción|inducción]] en $n$, empezando en $n = 2$ $$ p(n): ~ \forall a_1,~ \cdots, a_n \in \mathbb{Z},~ p \mid a_1 \cdots a_n \implies p \mid a_i ~ \text{para algún} ~ i,~ 1 \le i \le n $$
> > 
> > * Caso base $p(2)$ es Verdadera
> >     * Sí, por la propiedad fundamental ![[Número primo#^468cff|propiedad]]
> > * Paso inductivo: Dado $h \ge 2$, si $p(h)$ es Verdadera, ver si $p(h + 1)$ es Verdadera
> >     * HI: $\forall a_1,~ \cdots, a_h \in \mathbb{Z},~ p \mid a_1 \cdots a_h \implies p \mid a_i ~ \text{para algún} ~ i,~ 1 \le i \le h$
> >     * Qpq: $\forall a_1,~ \cdots, a_{h + 1} \in \mathbb{Z},~ p \mid a_1 \cdots a_{h + 1} \implies p \mid a_i ~ \text{para algún} ~ i,~ 1 \le i \le h + 1$
> > 
> > Llamemos $b = a_1 \cdots a_h$. Entonces $p \mid a_1 \cdots a_{h + 1} \iff p \mid b \cdot a_{h + 1}$. Luego por la propiedad fundamental mencionada anteriormente aplicada a $b$ y $a_{h + 1}$, $p \mid b \cdot a_{h + 1} \implies p \mid b ~~ \lor ~~ p \mid a_{h + 1}$
> > 
> > Si $p \mid a_{h + 1}$, ya está. Y si $p \mid b = a_1 \cdots a_h$, por HI, $p \mid a_i$ para algún $i$, $1 \le i \le h$
> > 
> > Es decir hemos probado tanto el caso base como el paso inductivo. Se concluye que $p(n)$ es Verdadero, $\forall n \ge 2$
^prop-1-1-9

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```