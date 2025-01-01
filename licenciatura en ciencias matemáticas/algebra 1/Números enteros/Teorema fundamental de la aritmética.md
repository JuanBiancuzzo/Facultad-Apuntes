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
> [!teorema]+ Teorema 1.1.1 (Teorema fundamental de la aritmética)
> Sea $a \in \mathbb{Z}$, $a \ne 0,~ \pm 1$. Entonces $a$ se escribe en forma única como producto de [[Número primo|primos]] (positivos), (o se factoriza en forma única como producto de primos (positivos)) es decir
> 
> * $\forall a \in \mathbb{Z}$, $a \ne 0,~ \pm 1$, existe $r \in \mathbb{N}$ y existen primos positivos $p_1,~ \cdots,~ p_r$ distintos y $m_1,~ \cdots,~ m_r \in \mathbb{N}$ tales que $$ a = \pm p_1^{m_1} \cdot p_2^{m_2} \cdots p_r^{m_r} $$
> 
> * Esta escritura es única salvo permutación de los primos
> 
> > [!demostracion]- Demostración
> > ## Existencia
> > ---
> > Alcanza con probar el teorema para $a$ positivo, y se formaliza por [[Principio de inducción completa|inducción]] en $a$, $a \ge 2$ $$ p(a): ~~ a ~ \text{admite una factorización como producto de primos} $$
> > 
> > * Caso base $p(2)$ es Verdadera
> >     * Vemos que $2 = +2^1$ por lo que si es Verdadera
> > * Paso inductivo:
> >     * Si $a$ es un primo $p$, $p(a)$ es Verdadera ya que $a = p = +p^1$
> >     * Si $a$ no es primo, como se enuncia ![[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Números enteros#^e1bdbb|entero divisible por primo]]específicamente un número primo más chico que $a$, y por lo tanto el cociente $k = \frac{a}{p}$ satisface $2 \le k \le a - 1$. Por hipótesis inductiva, $k$ admite una factorización como producto de primos, en la forma $k = \pm p_1^{m_1} \cdots p_r^{m_r}$. Por lo tanto $a$ admite la factorización $$ a = \pm p \cdot p_1^{m_1} \cdot p_2^{m_2} \cdots p_r^{m_r} $$
> > 
> > ## Unicidad
> > ---
> > Supongamos que $a = \pm p_1^{m_1} \cdots p_r^{m_r} = \pm q_1^{n_1} \cdots q_s^{n_s}$ en las condiciones del enunciado. Queremos probar que entonces los signos, los primos y los exponentes coinciden
> > 
> > Claramente los signos coinciden, así que podemos suponer $a$ positivo
> > 
> > En la expresión $p_1^{m_1} \cdots p_r^{m_r} = q_1^{n_1} \cdots q_s^{n_s}$, simplifiquemos todos los primos comunes (que aparecen de los dos lados) a la menor potencia a la que aparecen.
> > 
> > Si al hacer eso no sobra nada, o sea obtenemos $1 = 1$, es que todos los primos y las potencias coincidían.
> > 
> > Si no pasa eso y sobra algo de algún lado al menos, obtenemos una expresión del mismo tipo, pero donde $p_i \ne q_j$ (pues son todos los que sobraron). Podemos suponer sin pérdida de generalidad que del lado izquierdo sobró un $p_i$. Entonces tenemos que $p_i$ divide a lo que sobró del lado derecho o al $1$ si no sobró nada. O sea $p_i \mid 1$ (lo que es absurdo) o $p_i \mid q_1^{n_1} \cdots q_s^{n_s}$. En este último caso, por la siguiente proposición ![[Número primo#^3f0b15|proposicion de la propiedad fundamental]] existe $j$ tal que $p_i \mid q_j$ pero $p_i$ y $q_j$ son primos distintos. Contradicción, que proviene de suponer que sobró un primo de algún lado
^teo-1-1-1

## Primos de productos y potencias
---
> [!observacion]+ Observación 1.1.2 (Primos de productos y potencias)
> Sean $a,~ b \in \mathbb{Z}$ no nulos de la forma $$ \begin{align} 
>   a &= \pm p_1^{m_1} \cdots p_r^{m_r} & \text{con}& ~ m_1,~ \cdots,~ m_r \in \mathbb{N}_0 \\
>   b &= \pm p_1^{n_1} \cdots p_r^{n_r} & \text{con}& ~ n_1,~ \cdots,~ n_r \in \mathbb{N}_0 \\
> \end{align} $$
> 
> Entonces
>  * $a \cdot b = (\pm p_1^{m_1} \cdots p_r^{m_r}) \cdot (\pm p_1^{n_1} \cdots p_r^{n_r}) = \pm p_1^{m_1 + n_1} \cdots p_r^{m_r + n_r}$. Es decir $a \cdot b$ tiene exactamente los primos de $a$ y de $b$ en su factorización y los exponentes se suman
>  * $a^n = (\pm p_1^{m_1} \cdots p_r^{m_r})^n = (\pm 1)^n p_1^{n ~ m_1} \cdots p_r^{n ~ m_r}$ es la factorización en primos de $a^n$, para todo $n \in \mathbb{N}$. Es decir $a^n$ tiene exactamente los mismo primos que $a$ en su factorización, y los exponentes van multiplicados por $n$
^obs-1-1-2

## Divisores de un número y cantidad
---
> [!proposicion]+ Proposición 1.1.3 (Divisores de un número y cantidad)
> Sea $a \in \mathbb{Z}$, $a \ne 0,~ \pm 1$, y sea $a = \pm p_1^{m_1} \cdots p_r^{m_r}$ la factorización en primos de $a$. Entonces
> 1. $d \mid a \iff d = \pm p_1^{n_1} \cdots p_r^{n_r}$ con $0 \le n_1 \le m_1, \cdots, 0 \le n_r \le m_r$
> 2. $\# \text{Div}_{+}(a) = (m_1 + 1) \cdots (m_r + 1)$ y $\# \text{Div}(a) = 2 ~ (m_1 + 1) \cdots (m_r + 1)$
> 
> > [!demostracion]- Demostración
> > Es claro que alcanza con probar la [[Proposición|proposición]] para $a = p_1^{m_1} \cdots p_r^{m_r}$ positivo
> > 1. $(\implies)$ $d \mid a \iff \exists k \in \mathbb{Z}$, tal que $a = k \cdot d$. Luego la factorización en primos de $k \cdot d$ tiene que ser igual a la de $a$ $$ k \cdot d = p_1^{m_1} \cdots p_r^{m_r} $$
> >  Teniendo en cuenta lo siguiente ![[Teorema fundamental de la aritmética#^obs-1-1-2]]
^pro-1-1-3

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```