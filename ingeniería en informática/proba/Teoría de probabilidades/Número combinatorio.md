---
dia: 2024-01-13
tags:
  - ingeniería-en-informática/proba/Teoría-de-probabilidades
  - nota/facultad
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - ingeniería-electrónica/proba/Teoría-de-probabilidades
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
referencias:
  - "413"
etapa: terminado
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $A_n = \set{ a_1,~ \cdots,~ a_n }$ un [[Conjunto|conjunto]] con $n$ elementos. Para $0 \le k \le n$, se nota con el símbolo $\binom{n}{k}$, que se llama el número combinatorio $\binom{n}{k}$, la cantidad de [[Subconjunto|subconjuntos]] con $k$ elementos que tiene $A_n$ (o lo que es lo mismo, la cantidad de formas que tenemos de elegir $k$ elementos en un conjunto $A_n$ con $n$ elementos) es igual a $$ \binom{n}{k} = \frac{n!}{k! ~ (n - k)!} = C_{n,~ k} $$
> [!demostracion]- Demostración
> Probaremos esta fórmula por [[Principio de inducción#Inducción "corrida"|inducción corrida]] a $n \ge 0$. Para $n \ge 0$, se tiene $$ p(n): ~ \binom{n}{k} = \frac{n!}{k! ~ (n - k)!}, ~~~ \text{para} ~ 0 \le k \le n $$
> 
>  * Caso base $p(0)$: Para $n = 0$ solo hay que verificar qué pasa para $k = 0$ $$ \frac{0!}{0! ~ 0!} = 1 = \binom{0}{0} $$
> 
>  * Paso inductivo: Dado $h \ge 0$
>      * HI: Para $0 \le k \le h$ se tiene $\binom{h}{k} = \frac{h!}{k! ~ (h - k)!}$
>      * Qpq para $0 \le k \le h + 1$ se tiene $\binom{h + 1}{k} = \frac{(h + 1)!}{k! ~ (h + 1 - k)!}$
> 
> Usando la expresión recurrente ![[Número combinatorio#^a26f48]]
> 
> Por lo tanto podemos plantear $$ \begin{align}
>     \binom{h + 1}{k} &= \binom{h}{k - 1} + \binom{h}{k} \\
>     &\underset{HI}{=} \frac{h!}{(k - 1)! ~ (h - (k - 1))!} + \frac{h!}{k! ~ (h - k)!} \\
>     &= \frac{k ~ h!}{k ~ (k - 1)! ~ (h + 1 - k)!} + \frac{(h + 1 - k) ~ h!}{k! ~ (h + 1 - k) ~ (h - k)!} \\
>     &= \frac{k ~ h! + (h + 1 - k) ~ h!}{k! ~ (h + 1 - k)!} \\
>     &= \frac{(k + (h + 1 - k)) ~ h!}{k! ~ (h + 1 - k)!} \\
>     &= \frac{(h + 1) ~ h!}{k! ~ (h + 1 - k)!} \\
>     &= \frac{(h + 1)!}{k! ~ (h + 1 - k)!}
> \end{align} $$ como se quería probar
> 
> Faltan entonces los casos $k = 0$ y $k = h + 1$, en esos casos sabemos que $$ \binom{h + 1}{0} = 1 = \binom{h + 1}{h + 1} $$ que coincide con $$ \frac{(h + 1)!}{0! ~ (h + 1 - 0)!} ~~~~ \text{y} ~~~~ \frac{(h + 1)!}{(h + 1)! ~ (h + 1 - (h + 1))!} $$
> 
> Se concluye que $p(n)$ es Verdadera, $\forall n \in \mathbb{N}_0$

## Observaciones
---
* $\binom{n}{0} = \binom{n}{n} = 1$ pues el único subconjunto de $A_n$ con $0$ elementos es el [[Conjunto#^conjunto-vacio|conjunto vacío]] $\emptyset$, y el único subconjunto de $A_n$ con $n$ elementos es $A_n$ mismo

* $\binom{n}{1} = n$ pues los subconjuntos de $A_n$ con $1$ elementos son los subconjuntos $$ \set{a_1},~ \set{a_2},~ \cdots,~ \set{a_{n-1}},~ \set{a_n} $$

* Podemos darnos cuenta que $\binom{n}{n - 1} = n$ también ya que dar un subconjunto de $A_n$ con $n - 1$ elementos es lo mismo que elegir cuál elemento $a_i$ quedó afuera del subconjunto: por ejemplo el subconjunto $\set{ a_1,~ \cdots,~ a_{n-1} }$ es el que corresponde a haber dejado $a_n$ afuera

* Con el mismo razonamiento, $\binom{n}{k} = \binom{n}{n - k}$, $\forall k, ~ 0 \le k \le n$, ya que a cada subconjunto $B_k$ de $A_n$ con $k$ elementos, podemos asignarle el [[Operador NOT|subconjunto complementario]] $B_k'$ que tiene $n - k$ elementos, y esta asignación es una [[Función biyectiva|función biyectiva]]

* Más aún, dado que $\binom{n}{k}$, $0 \le k \le n$, cuenta la cantidad de subconjuntos con $k$ elementos en el conjunto $A_n$ con $n$ elementos, y que sabemos que la cantidad total de subconjuntos que hay en $A_n$ es $2^n$, se tiene $$ 2^n = \binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{n - 1} + \binom{n}{n} = \sum_{k = 0}^n \binom{n}{k}, ~~~ \forall n \in \mathbb{N}_0 $$
## Calcular
---
Para encontrar la expresión, vamos a intentar encontrar una forma [[Recurrencia|recurrente]] para poder encontrar la expresión de esa

Notemos que si tenemos $A_5 = \set{ a_1,~ a_2,~ a_3,~ a_4,~ a_5}$ un conjunto con $5$ elementos. Supongamos que queremos calcular $\binom{5}{3}$ sin listar todos los subconjuntos con $3$ elementos de $A_5$. Podemos razonar de la manera siguiente

Sea $B_3$ un subconjunto con $3$ elementos de $A_5$. Entonces
* O bien $a_5 \in B_3$, con lo cual para determina $B_3$ hay que elegir los $2$ elementos que faltan en el conjunto $A_4 = \set{ a_1,~ a_2,~ a_3,~ a_4 }$. Y por lo tanto hay que encontrar $\binom{4}{2}$
* O bien $a_5 \notin B_3$, con lo cual para determina $B_3$ hay que elegir los $3$ elementos que faltan en el conjunto $A_4 = \set{ a_1,~ a_2,~ a_3,~ a_4 }$. Y por lo tanto hay que encontrar $\binom{4}{3}$

Como estos dos casos son disjuntos (o bien $a_5 \in B_3$ o bien $a_5 \notin B_3$), la cantidad total de subconjuntos $B_3$ con $3$ elementos de $A_5$ es igual a la suma de $\binom{4}{2}$ y $\binom{4}{3}$

Y este razonamiento se generaliza sin dificultad a un conjunto $A_{n + 1} = \set{a_1,~ \cdots,~ a_{n + 1}}$ con $n + 1$ elementos. Ya sabemos que $\binom{n + 1}{0} = \binom{n + 1}{n + 1} = 1$ . Queremos ahora calcular $\binom{n + 1}{k}$ para un $k$ cualquiera, $1 \le k \le n$

Sea $B_k$ un subconjunto con $k$ elementos de $A_{n + 1}$. Entonces
* O bien $a_{n + 1} \in B_k$, con lo cual para determinar $B_k$ hay que elegir los $k - 1$ elementos que faltan en el conjunto $A_n = \set{ a_1,~ \cdots,~ a_n }$. Y ya sabemos que hay $\binom{n}{k - 1}$ formas de elegir $k - 1$ elementos en $A_n$ (Aquí interviene la condición $k \ge 1$ para que $k - 1 \ge 0$ tenga sentido)
* O bien $a_{n + 1} \notin B_k$, con lo cual para determinar $B_k$ hay que elegir los $k$ elementos que faltan en el conjunto $A_n = \set{ a_1,~ \cdots,~ a_n }$. Y ya sabemos que hay $\binom{n}{k}$ formas de elegir $k$ elementos en $A_n$ (Aquí interviene la condición $k \le n$ para que tenga sentido)

Como estos dos casos son disjuntos (o bien $a_{n + 1} \in B_k$ o bien $a_{n + 1} \notin B_k$), la cantidad total de subconjuntos $B_k$ con $k$ elementos de $A_{n + 1}$ es igual a la suma $\binom{n + 1}{k - 1} + \binom{n + 1}{k}$, es decir se satisface $$ \binom{n + 1}{k} = \binom{n}{k - 1} + \binom{n}{k}, ~~~~ \text{para} ~ 1 \le k \le n $$
### Expresión recursiva
---
Se tiene 

$$ \begin{matrix} 
    \displaystyle \binom{0}{0} = 1, ~~~ \binom{n + 1}{0} = \binom{n + 1}{n + 1} = 1 ~~~~ \text{y} \\
    \displaystyle \binom{n + 1}{k} = \binom{n}{k - 1} + \binom{n}{k} ~~ \text{para} ~ 1 \le k \le n, ~ \forall n \in \mathbb{N}
\end{matrix} $$
^a26f48

Esto da el [[Triángulo de Pascal|triángulo de Pascal]] ![[Triángulo de Pascal#^9201cf]]
Usando la expresión recursiva obtenemos ![[Triángulo de Pascal#^ea51b0]]
### Expresión final
---
Busquemos cuál es el término general (no recursivo) del número combinatorio $\binom{n}{k}$ conjeturando una fórmula y probándola por inducción

Si queremos contar la cantidad de subconjuntos $B_3$ con $3$ elementos que tiene el conjunto $A_5 = \set{ a_1,~ a_2,~ a_3,~ a_4,~ a_5 }$ con $5$ elementos, tenemos que elegir los $3$ elementos que van a formar parte del subconjunto $B_3$. Pongámosle por ahora un orden a esos elementos, para el $1$er elemento de $B_3$ tenemos $5$ posibilidades. Pero luego para el $2$do elemento nos quedan $4$ posibilidades y para el $3$er elemento nos quedan solo $3$ posibilidades. Así tenemos $5 \cdot 4 \cdot 3  = 5! / 2!$ elecciones

Pero en realidad al hacer esto estamos contando las ternas ordenadas de elementos $(b_1,~ b_2,~ b_3)$ formadas con elementos distintos de $A_5$, y no los subconjuntos (donde no importa el orden). Por ejemplo el subconjunto $\set{ a_1,~ a_2,~ a_3 }$ aparece aquí $3! = 6$ veces si contamos las ternas formadas por estos elementos

Entonces podemos decir $$ 3! ~ \binom{5}{3} = \frac{5!}{(5 - 3)!} \implies \binom{5}{3} = \frac{5!}{3! ~ (5 - 3)!} $$
Con el mismo razonamiento para el caso general, podemos conjeturar entonces para todo $n \in \mathbb{N}_0$ la fórmula $$ \binom{n}{k} = \frac{n!}{k! ~ (n - k)!} $$





# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```