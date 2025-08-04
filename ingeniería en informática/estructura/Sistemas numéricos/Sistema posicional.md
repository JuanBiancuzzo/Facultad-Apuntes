---
dia: 2023-03-14
tags:
  - carrera/ingeniería-electrónica/estructura/Sistemas-numéricos
  - carrera/ingeniería-en-informática/estructura/Sistemas-numéricos
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - nota/facultad
aliases:
  - Desarrollo de un número entero en base d
referencias:
  - "414"
etapa: ampliar
vinculoFacultad:
  - "[[ingeniería en informática/estructura/Sistemas numéricos/Resumen.md]]"
  - "[[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
> [!teorema]+ Teorema 1.2.26 (Desarrollo de base d)
> Sea $d \in \mathbb{N}$ con $d \ge 2$. Todo número $a \in \mathbb{N}_0$ admite un desarrollo en [[Base númerica|base]] $d$ de la forma $$ a = r_n ~ d^n + r_{n - 1} ~ d^{n - 1} + \cdots + r_1 ~ d + r_0 $$ con $0 \le r_i < d$ para $0 \le i \le n$ y $r_n \ne 0$ si $a \ne 0$
> 
> Además dicho desarrollo, con las exigencias $0 \le r_i < d$ impuestas para los [[Símbolo|símbolos]], es único
> 
> Se nota $a = (r_n ~ \cdots ~ r_0)_d$
> 
> > [!demostracion]- Demostración
> > ## Existencia
> > ---
> > La idea intuitiva es ir dividiendo iteradamente el número $a$ y los sucesivos [[Algoritmo de división|cocientes]] por $d$. Para formalizar la prueba se puede hacer por [[Principio de inducción completa|inducción]] en $a \in \mathbb{N}_0$
> >  * Para $a = 0$
> >      * Se tiene $0 = (0)_d$, es decir estamos en el único caso en que todos los dígitos son cero
> >  * Para $a \ge 1$
> >      * La hipótesis inductiva es que todo [[Números Naturales|número natural]] o cero menor que $a$ admite un desarrollo en base $d$. Queremos probar que entonces $a$ admite también un desarrollo en base $d$
> >        Usando el [[Algoritmo de división|algoritmo de visión]], dividimos $a$ por $d$, y obtenemos un cociente $k$ que satisface $0 \ge k < a$ y un resto $r_0$ que satisface $0 \le r_0 < d$
> >        Por hipótesis inductiva, al ser $0 \le k < a$, $k$ admite un desarrollo en base $d$ que notamos por conveniencia en la forma $$ k = r_n ~ d^{n - 1} + \cdots + r_2  ~ d + r_1,~~~ \text{con} ~ 0 \le r_n,~ \cdots,~ r_1 < d $$
> >        Entonces $$ \begin{align} 
> >        a &= k ~ d + r_0 \\ 
> >         &= \left(r_n ~ d^{n - 1} + \cdots + r_2  ~ d + r_1\right) ~ d + r_0 \\
> >         &= r_n ~ d^n + r_{n - 1} ~ d^{n - 1} + \cdots + r_1 ~ d + r_0
> >     \end{align} $$ donde $0 \le r_i < d$ para $0 \le i \le n$ como se quiere
> > 
> > Así, todo $a \in \mathbb{N}$ admite un desarrollo en base $d$ 
> > 
> > ## Unicidad
> > ---
> > Es una consecuencia de la unicidad del resto y del cociente en el algoritmo de división: $r_0$ es el resto de la división de $a$ por $d$ y por lo tanto es único, $r_1$ es el resto de la división de $(a - r_0) / d$ por $d$ y es único también, etc. Como antes, podemos formalizar esto por inducción en $a \in \mathbb{N}_0$
> >  * Para $a = 0$
> >      * El único desarrollo es claramente $0 = (0)_d$
> >  * Para $a \ge 1$
> >      * Supongamos que $$ a = r_n ~ d^n + r_{n - 1} ~ d^{n - 1} + \cdots + r_1 ~ d + r_0 = s_m ~ d^m + s_{m - 1} ~ d^{m - 1} + \cdots + s_1 ~ d + s_0 $$ con $0 \le r_i$, $s_j < d$ para $0 \le i \le n$, $0 \le j \le m$ y $r_n \ne 0$, $s_m \ne 0$. Ahora bien, está claro que $r_d(a) = r_0 = s_0$, y además, el cociente de dividir $a$ por $d$ (que es único) es $$ k = r_n ~ d^{n - 1} + \cdots + r_1 = s_m ~ d^{m - 1} + \cdots + s_1 $$
> >        Por hipótesis inductiva, el desarrollo en base $d$ del cociente $k$ es único, luego $n = m$ y $r_i = s_i$, $1 \le i \le n$
> > 
> > Así concluimos que para todo $a \in \mathbb{N}_0$, el desarrollo en base $d$ de $a$ es único
^teo-1-2-26

> [!observacion]+ Observación 1.2.27 
> En el caso de desarrollo en base $10$, $(a)_{10}$ se nota simplemente $a$, en la forma que estamos acostumbrados
^obs-1-2-27
## Ejemplo
---
En el sistema decimal el $42$ en diferentes bases son $(101010)_2$, $(1120)_3$, $(52)_8$ y $(2A)_{16}$ 

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```