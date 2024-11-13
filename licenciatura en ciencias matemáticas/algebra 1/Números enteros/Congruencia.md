---
dia: 2024-11-12
etapa: empezado
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
Sea $d \in \mathbb{Z}$, $d \ne 0$. Dados $a,~ b \in \mathbb{Z}$, se dice que $a$ es congruente a $b$ módulo $d$ si $d \mid a - b$

Se nota $a \equiv b~ (\text{mod}~ d)$ o también $a \equiv b ~ (d)$. O sea $$ a \equiv b~ (\text{mod}~ d) \iff d \mid a - b $$
En caso contrario se nota $a \not \equiv b~ (\text{mod}~ d)$ o $a \not \equiv b ~ (d)$

## La congruencia es una relación de equivalencia
---
Sea $d \in \mathbb{Z}$, $d \ne 0$. Sea $\mathcal{R}$ la [[Relación|relación]] en $\mathbb{Z}$ dada por $$ a \mathcal{R} b \iff a \equiv b ~ (\text{mod} ~ d), ~~~ \forall a,~ b \in \mathbb{Z} $$
Entonces $\mathcal{R}$ es una [[Relación de equivalencia|relación de equivalencia]]

> [!quote]+ Demostración
> Para demostrarlo tenemos que probar que $\mathcal{R}$ es [[Relación reflexiva|reflexiva]], [[Relación simétrica|simétrica]] y [[Relación transitiva|transitiva]]
>  * Reflexividad
>      * Para todo $a \in \mathbb{Z}$, $a \equiv a ~ (\text{mod} ~ d)$ pues $d \mid a - a$
>  * Simetría
>      * Hay que probar que para todo $a,~ b \in \mathbb{Z}$ tales que $a \equiv b ~ (\text{mod} ~ d)$, entonces $b \equiv a ~ (\text{mod} ~ d)$. Pero $a \equiv b ~ (\text{mod} ~ d)$ significa que $d \mid a - b$, y por lo tanto $d \mid -(a - b) = b - a$, luego $b \equiv a ~ (\text{mod} ~ d)$
>  * Transitividad
>      * Hay que probar que para todo $a,~ b,~ c \in \mathbb{Z}$ tales que $a \equiv b ~ (\text{mod} ~ d)$ y $b \equiv c ~ (\text{mod} ~ d)$ entonces $a \equiv c ~ (\text{mod} ~ d)$. Pero $a \equiv b ~ (\text{mod} ~ d)$ significa que $d \mid a - b$, y $b \equiv c ~ (\text{mod} ~ d)$ significa que $d \mid b - c$. Por lo tanto $d \mid (a - b) + (b - c) = a - c$, es decir $a \equiv c ~ (\text{mod} ~ d)$

## Propiedades
---
Sea $d \in \mathbb{Z}$, $d \ne 0$. Entonces 

1. $\forall a_1,~ a_2,~ b_1,~ b_2 \in \mathbb{Z}$ $$ a_1 \equiv b_1 ~ (\text{mod} ~ d) ~~ \text{y} ~~ a_2 \equiv b_2 ~ (\text{mod} ~ d) ~~ \text{y} \implies a_1 + a_2 \equiv b_1 + b_2 ~ (\text{mod} ~ d) $$
> [!quote]+ Demostración
> 

2. Para todo $n \in \mathbb{N}$, $a_1,~ \cdots,~ a_n,~ b_1,~ \cdots,~ b_n \in \mathbb{Z}$ $$ \begin{cases}
       a_1 \equiv b_1 ~ (\text{mod} ~ d) \\
       ~~~~~~\vdots \\
       a_n \equiv b_n ~ (\text{mod} ~ d) \\
   \end{cases} \implies a_1 + \cdots + a_n \equiv b_1 + \cdots + b_n ~ (\text{mod} ~ d) $$
> [!quote]+ Demostración
> 

3. $\forall a,~ b,~ c \in \mathbb{Z}$, $$ a \equiv b ~ (\text{mod} ~d) \implies c ~ a \equiv c ~ b ~ (\text{mod} ~d) $$
> [!quote]+ Demostración
> 

4. $\forall a_1,~ a_2,~ b_1,~ b_2 \in \mathbb{Z}$, $$ a_1 \equiv b_1 ~ (\text{mod} ~ d) ~~ \text{y} ~~ a_2 \equiv b_2 ~ (\text{mod} ~ d) ~~ \text{y} \implies a_1 ~ a_2 \equiv b_1 ~ b_2 ~ (\text{mod} ~ d) $$
> [!quote]+ Demostración
> 

5. Para todo $n \in \mathbb{N}$, $a_1,~ \cdots,~ a_n,~ b_1,~ \cdots,~ b_n \in \mathbb{Z}$ $$ \begin{cases}
       a_1 \equiv b_1 ~ (\text{mod} ~ d) \\
       ~~~~~~\vdots \\
       a_n \equiv b_n ~ (\text{mod} ~ d) \\
   \end{cases} \implies a_1 ~ \cdots ~ a_n \equiv b_1 ~ \cdots ~ b_n ~ (\text{mod} ~ d) $$
> [!quote]+ Demostración
> 

6. $\forall a,~ b \in \mathbb{Z}$, $n \in \mathbb{N}$, $$ a \equiv b ~ (\text{mod} ~ d) \implies a^n \equiv b^n ~ (\text{mod} ~ d) $$
> [!quote]+ Demostración
> 

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```