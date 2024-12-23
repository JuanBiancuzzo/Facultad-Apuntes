---
dia: 2024-12-23
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
Sea $a \in \mathbb{Z}$, $a \ne 0,~ \pm 1$. Entonces $a$ se escribe en forma única como producto de [[Número primo|primos]] (positivos), (o se factoriza en forma única como producto de primos (positivos)) es decir

* $\forall a \in \mathbb{Z}$, $a \ne 0,~ \pm 1$, existe $r \in \mathbb{N}$ y existen primos positivos $p_1,~ \cdots,~ p_r$ distintos y $m_1,~ \cdots,~ m_r \in \mathbb{N}$ tales que $$ a = \pm p_1^{m_1} \cdot p_2^{m_2} \cdots p_r^{m_r} $$
* Esta escritura es única salvo permutación de los primos

> [!quote]+ Demostración
> ## Existencia
> ---
> Alcanza con probar el teorema para $a$ positivo, y se formaliza por [[Principio de inducción completa|inducción]] en $a$, $a \ge 2$ $$ p(a): ~~ a ~ \text{admite una factorización como producto de primos} $$
> 
> * Caso base $p(2)$ es Verdadera
>     * Vemos que $2 = +2^1$ por lo que si es Verdadera
> * Paso inductivo:
>     * Si $a$ es un primo $p$, $p(a)$ es Verdadera ya que $a = p = +p^1$
>     * Si $a$ no es primo, como se enuncia ![[Números enteros#^e1bdbb|entero divisible por primo]]específicamente un número primo más chico que $a$, y por lo tanto el cociente $k = \frac{a}{p}$ satisface $2 \le k \le a - 1$. Por hipótesis inductiva, $k$ admite una factorización como producto de primos, en la forma $k = \pm p_1^{m_1} \cdots p_r^{m_r}$. Por lo tanto $a$ admite la factorización $$ a = \pm p \cdot p_1^{m_1} \cdot p_2^{m_2} \cdots p_r^{m_r} $$
> 
> ## Unicidad
> ---
> 


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```