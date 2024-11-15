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
> $a_1 \equiv b_1 ~ (\text{mod} ~ d)$ y $a_2 \equiv b_2 ~ (\text{mod} ~ d)$ implica por definición $d \mid a_1 - b_1$ y $d \mid a_2 - b_2$. Por lo tanto $d \mid (a_1 - b_1) + (a_2 - b_2) = d \mid (a_1 + a_2) - (b_1 + b_2)$, es decir $a_1 + a_2 \equiv b_1 + b_2 ~ (\text{mod} ~ d)$

2. Para todo $n \in \mathbb{N}$, $a_1,~ \cdots,~ a_n,~ b_1,~ \cdots,~ b_n \in \mathbb{Z}$ $$ \begin{cases}
       a_1 \equiv b_1 ~ (\text{mod} ~ d) \\
       ~~~~~~\vdots \\
       a_n \equiv b_n ~ (\text{mod} ~ d) \\
   \end{cases} \implies a_1 + \cdots + a_n \equiv b_1 + \cdots + b_n ~ (\text{mod} ~ d) $$
> [!quote]+ Demostración
> Podemos probarlo usando [[Principio de inducción completa|inducción completa]], donde definimos $$ p(n): ~~~ \begin{cases}
>      a_1 \equiv b_1 ~ (\text{mod} ~ d) \\
>      ~~~~~~\vdots \\
>      a_n \equiv b_n ~ (\text{mod} ~ d) \\
>  \end{cases} \implies a_1 + \cdots + a_n \equiv b_1 + \cdots + b_n ~ (\text{mod} ~ d) $$
>  
>  * El caso base: Es el punto anterior, por lo que $p(n = 1)$ es Verdadera
>  * Paso inductivo: Dado $h \in \mathbb{N}$ 
>      * HI: $$ \begin{cases} a_1 \equiv b_1 ~ (\text{mod} ~ d) \\ ~~~~~~\vdots \\ a_k \equiv b_k ~ (\text{mod} ~ d) \\ \end{cases} \implies a_1 + \cdots + a_k \equiv b_1 + \cdots + b_k ~ (\text{mod} ~ d), ~~~~ 1 \le k \le h $$
>      * Qpq: $$ \begin{cases} a_1 \equiv b_1 ~ (\text{mod} ~ d) \\ ~~~~~~\vdots \\ a_{h + 1} \equiv b_{h + 1} ~ (\text{mod} ~ d) \\ \end{cases} \implies a_1 + \cdots + a_{h + 1} \equiv b_1 + \cdots + b_{h + 1} ~ (\text{mod} ~ d) $$
> 
> Pero para $h \ge 1$ se tiene $$ \begin{cases}
>     ~~~~ a_1 \equiv b_1 ~ (\text{mod} ~ d) \\
>     ~~~~~~~~~~\vdots \\
>     ~~~~ a_h \equiv b_h ~ (\text{mod} ~ d) \\
>     a_{h+1} \equiv b_{h + 1} ~ (\text{mod} ~ d) \\
> \end{cases} \underset{HI}{=} \begin{cases}
>     a_1 + \cdots + a_h \equiv b_1 + \cdots + b_h ~ (\text{mod} ~ d) \\
>     ~~~~~~~~~~~~~~~ a_{h+1} \equiv b_{h + 1} ~ (\text{mod} ~ d) \\
> \end{cases} $$
> 
> $a_1 + \cdots + a_h \equiv b_1 + \cdots + b_h ~ (\text{mod} ~ d)$ y $a_{h + 1} \equiv b_{h + 1} ~ (\text{mod} ~ d)$ implica por definición $d \mid (a_1 + \cdots + a_h) - (b_1 + \cdots + b_h)$ y $d \mid a_{h + 1} - b_{h + 1}$. Por lo tanto $d \mid ((a_1 + \cdots + a_h) - (b_1 + \cdots + b_h)) + (a_{h + 1} - b_{h + 1}) = d \mid (a_1 + \cdots + a_{h + 1}) - (b_1 + \cdots + b_{h + 1})$, es decir $a_1 + \cdots + a_{h + 1} \equiv b_1 + \cdots + b_{h + 1} ~ (\text{mod} ~ d)$. Que es lo que queríamos probar
> 
> Por lo que podemos concluir que $p(n)$ es Verdadera para todo $n \in \mathbb{N}$

3. $\forall a,~ b,~ c \in \mathbb{Z}$, $$ a \equiv b ~ (\text{mod} ~d) \implies c ~ a \equiv c ~ b ~ (\text{mod} ~d) $$
> [!quote]+ Demostración
> $a \equiv b ~ (\text{mod} ~ d)$ implica por definición $d \mid a - b$, y por propiedad de la [[Divisibilidad|divisibilidad]] podemos decir $d \mid c ~ (a - b)$, por lo tanto $d \mid c ~ a - c ~ b$, es decir $c ~ a \equiv c ~b ~ (\text{mod} ~ d)$

4. $\forall a_1,~ a_2,~ b_1,~ b_2 \in \mathbb{Z}$, $$ a_1 \equiv b_1 ~ (\text{mod} ~ d) ~~ \text{y} ~~ a_2 \equiv b_2 ~ (\text{mod} ~ d) ~~ \text{y} \implies a_1 ~ a_2 \equiv b_1 ~ b_2 ~ (\text{mod} ~ d) $$
> [!quote]+ Demostración
> Como $a_1 \equiv b_1 ~ (\text{mod} ~ d)$, entonces $a_1 ~ a_2 \equiv b_1 ~ a_2 ~ (\text{mod} ~ d)$ (multiplicado por $a_2$)
> Por otro lado, como $a_2 \equiv b_2 ~ (\text{mod} ~ d)$, se tiene $b_1 ~ a_2 \equiv b_1 ~ b_2 ~ (\text{mod} ~ d)$ (multiplicado por $b_2$)
> Finalmente por transitividad, se concluye que $a_1 ~ a_2 \equiv b_1 ~ b_2 ~ (\text{mod} ~ d)$

5. Para todo $n \in \mathbb{N}$, $a_1,~ \cdots,~ a_n,~ b_1,~ \cdots,~ b_n \in \mathbb{Z}$ $$ \begin{cases}
       a_1 \equiv b_1 ~ (\text{mod} ~ d) \\
       ~~~~~~\vdots \\
       a_n \equiv b_n ~ (\text{mod} ~ d) \\
   \end{cases} \implies a_1 ~ \cdots ~ a_n \equiv b_1 ~ \cdots ~ b_n ~ (\text{mod} ~ d) $$
> [!quote]+ Demostración
> Podemos probarlo usando [[Principio de inducción completa|inducción completa]], donde definimos $$ p(n): ~~~ \begin{cases}
>      a_1 \equiv b_1 ~ (\text{mod} ~ d) \\
>      ~~~~~~\vdots \\
>      a_n \equiv b_n ~ (\text{mod} ~ d) \\
>  \end{cases} \implies a_1 \cdots a_n \equiv b_1 \cdots b_n ~ (\text{mod} ~ d) $$
>  
>  * El caso base: Es el punto anterior, por lo que $p(n = 1)$ es Verdadera
>  * Paso inductivo: Dado $h \in \mathbb{N}$ 
>      * HI: $$ \begin{cases} a_1 \equiv b_1 ~ (\text{mod} ~ d) \\ ~~~~~~\vdots \\ a_k \equiv b_k ~ (\text{mod} ~ d) \\ \end{cases} \implies a_1 \cdots a_k \equiv b_1 \cdots b_k ~ (\text{mod} ~ d), ~~~~ 1 \le k \le h $$
>      * Qpq: $$ \begin{cases} a_1 \equiv b_1 ~ (\text{mod} ~ d) \\ ~~~~~~\vdots \\ a_{h + 1} \equiv b_{h + 1} ~ (\text{mod} ~ d) \\ \end{cases} \implies a_1 \cdots a_{h + 1} \equiv b_1 \cdots b_{h + 1} ~ (\text{mod} ~ d) $$
> 
> Pero para $h \ge 1$ se tiene $$ \begin{cases}
>     ~~~~ a_1 \equiv b_1 ~ (\text{mod} ~ d) \\
>     ~~~~~~~~~~\vdots \\
>     ~~~~ a_h \equiv b_h ~ (\text{mod} ~ d) \\
>     a_{h+1} \equiv b_{h + 1} ~ (\text{mod} ~ d) \\
> \end{cases} \underset{HI}{=} \begin{cases}
>     a_1 \cdots a_h \equiv b_1 \cdots b_h ~ (\text{mod} ~ d) \\
>     ~~~~~~ a_{h+1} \equiv b_{h + 1} ~ (\text{mod} ~ d) \\
> \end{cases} $$
> 
> Como $a_1 \cdots a_h \equiv b_1 \cdots b_h ~ (\text{mod} ~ d)$, entonces $a_1 \cdots a_{h + 1} \equiv a_{h + 1} \cdot b_1 \cdots b_h ~ (\text{mod} ~ d)$ (multiplicado por $a_{h + 1}$)
> Por otro lado, como $a_{h + 1} \equiv b_{h + 1} ~ (\text{mod} ~ d)$, se tiene $b_1 \cdots b_h \cdot a_{h + 1} \equiv b_1 \cdots b_{h + 1} ~ (\text{mod} ~ d)$ (multiplicado por $b_1 \cdots b_h$)
> Finalmente por transitividad, se concluye que $a_1 \cdots a_{h + 1} \equiv b_1 \cdots b_{h + 1} ~ (\text{mod} ~ d)$. Que es lo que queríamos probar
> 
> Por lo que podemos concluir que $p(n)$ es Verdadera para todo $n \in \mathbb{N}$

6. $\forall a,~ b \in \mathbb{Z}$, $n \in \mathbb{N}$, $$ a \equiv b ~ (\text{mod} ~ d) \implies a^n \equiv b^n ~ (\text{mod} ~ d) $$
> [!quote]+ Demostración
> Tomando el punto anterior, notemos que es el caso especifico donde $a_1 = a_2 = \cdots = a_n = a$ y $b_1 = b_2 = \cdots = b_n = b$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```