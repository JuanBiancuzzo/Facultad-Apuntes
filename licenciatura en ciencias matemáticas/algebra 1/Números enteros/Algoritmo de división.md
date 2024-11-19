---
dia: 2024-11-12
etapa: empezado
referencias:
  - "414"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - nota/facultad
  - algoritmos
aliases:
  - Cociente
  - Resto
  - Dividendo
  - Divisor
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dados $a,~ d \in \mathbb{Z}$ con $d \ne 0$, existen $k,~ r \in \mathbb{Z}$ que satisfacen $$ a = k \cdot d + r, ~~~ \text{con} ~ 0 \le r z < |d| $$
Además, $k$ y $r$ son únicos en tales condiciones

Se dice que $k$ es el cociente y $r$ es el resto de la división de $a$ por $d$ ($a$ es el dividendo y $d$ el divisor)

Al resto $r$ lo notaremos $r_d(a)$ para especificar que es el "resto de $a$ al dividir por $d$"

> [!quote]+ Demostración
> El teorema consta de dos afirmaciones, la parte existencial, que requiere mostrar que existen $k$ y $r$ en las condiciones del teorema, y luego la unicidad: mostrar que no puede haber dos pares distintos de cocientes y resto para $a$ y $d$ dados
> 
> ### Existencia
> ---
> Vamos a probar primero en detalle el caso $a \ge 0$, $d > 0$, ya que, los otros casos se reducen a ese
> 
> #### Case $a \ge 0$, $d > 0$
> ---
> Aquí, $|d| = d$. La idea intuitiva es considerar los elementos $$ a,~ a - d,~ a - 2d,~ a - 3d,~ \cdots $$ hasta que caigamos en algún elemento menor que $d$ pero aún mayor o igual que cero. Este será el resto. Formalizamos esta idea de la siguiente manera
> 
> Sea $A$ el [[Subconjunto|subconjunto]] de $\mathbb{N}_0 := \mathbb{N} \cup \set{0}$ formado por los números de la forma $a - j ~ d$ para algún $j \in \mathbb{Z}$, es decir $$ A = \set{ a - j~ d,~~ j \in \mathbb{Z} } \cap \mathbb{N}_0 $$
> 
> Claramente $A$ es un subconjunto de $\mathbb{N}_0$ que no es vacío ya que $a = a - 0 ~ d$ pertenece a $A$ (estamos considerando el caso $a \ge 0$). Luego, el [[Conjunto|conjunto]] $A$ tiene un [[Mínimo|mínimo]]. Llamemos $r$ es menor o igual que todos los demás elementos de $A$
> 
> Como $r \in A$, existe un [[Números enteros|entero]], llamémoslo $k$, que satisface que $r = a - k ~ d$, o sea $a = k ~ d + r$
> 
> Falta probar que $0 \le r < d$ (ya que $|d| = d$ en el caso que estamos considerando):
> 
> Claramente $r \ge 0$ ya que pertenece a $A$ que es un subconjunto de $\mathbb{N}_0$
> 
> Si $r$ fuese mayor o igual que $d$, entonces $r - d \ge 0$ aún. Luego se tendría que el elemento $r - d = a - r ~ d - d = a - (k + 1) ~ k$ está también en el conjunto $A$ pero es menor que $r$. Eso contradice que $r$ sea el mínimo. Así, se concluye que no puede ocurrir que $r \ge d$, luego $r < d$
> 
> #### Caso $a \ge 0$, $d < 0$
> ---
> En este caso, $-d > 0$ (y por lo tanto $|d| = -d$) y se tiene que por el caso anterior, existen $k'$, $r'$ tal que $a = k' ~ (-d) + r'$ con $0 \ge r' < |d|$. Se obtiene directamente $a = (-k') ~ d + r'$, luego $k = -k'$, $r = r'$
> 
> #### Caso $a < 0$
> ---
> En este caso, tenemos $-a > 0$, y de los casos anteriores existen $k'$, $r'$ tal que $-a = k' ~ d + r'$ con $0 \le r' < |d|$. Luego $a = (-k') ~ d - r'$. Si $r' = 0$, $r'$ cumple la condición de resto y se obtiene $k = -k'$, $r = r' = 0$
> 
> Pero si $r' \ne 0$, hay que corregirlo restando y sumando $|d|$ a la expresión $$ a = (-k') ~ d - r' = ((-k') ~ d - |d|) + (|d| - r') $$
> 
> Así, si se define $k := -k' \pm 1$ según si $d < 0$ o $d > 0$, y $r := |d| - r'$, se tiene $a = k ~ d + r$ con $0 < r < |d|$, ya que $$ \begin{align} 
>     0 < r' < |d| &\iff -|d| < -r' < 0 \\
>     &\implies |d|- |d| < |d| - r' < |d| - 0 \\
>     &\implies 0 < r < |d|
> \end{align} $$
> 
> ### Unicidad
> ---
> Supongamos que tenemos dos pares de cocientes y restos, $k$, $r$ y $k'$, $r'$. Vamos a probar que entonces $k = k'$ y $r = r'$
> 
> Sin perdida de generalidad, podemos suponer que $r \le r'$, y luego $$ a = k ~ d + r = k' ~ d + r' ~~~~ \text{con} ~ 0 \le r \le r' < |d| $$
> 
> Así, $(k - k') ~ d = r' - r \implies d \mid r' - r \implies |d| \mid r' - r$


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```