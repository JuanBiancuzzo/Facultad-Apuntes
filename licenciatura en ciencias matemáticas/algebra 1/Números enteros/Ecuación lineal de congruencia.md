---
dia: 2025-02-13
etapa: empezado
referencias:
  - "415"
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
Dado $m \in \mathbb{N}$, la ecuación tiene la forma $$ aX \equiv c ~ (\text{mod} ~ m) $$ para $a,~ c \in \mathbb{Z}$


> [!proposicion]+ Proposición 1.6.1 (Ecuación de congruencia, mcd y ecuación "coprimizada") 
> Sea $m \in \mathbb{N}$. Dados $a,~ c \in \mathbb{Z}$, la ecuación de [[Congruencia|congruencia]] $aX \equiv c ~ (\text{mod} ~ m)$ tiene soluciones enteras si y solo si $(a ~:~ m) \mid c$
> 
> Si ese es el caso, sean $\displaystyle a' := \frac{a}{(a ~:~ m)}$ $\displaystyle c' := \frac{c}{(a ~:~ m)}$ y $\displaystyle m' := \frac{m}{(a ~:~ m)}$. Entonces $$ aX \equiv c ~ (\text{mod} ~ m) \leftrightsquigarrow a'X \equiv c' ~ (\text{mod} ~ m) $$
> 
>> [!demostracion]- Demostración
>> Si $(a ~:~ m) \mid c$, entonces la [[Ecuación lineal diofántica|ecuación diofántica]] $aX - mY = c$ admite al menos una solución particular $(x_0,~ y_0) \in \mathbb{Z}^2$. Es decir, $a x_0 - m y_0 = c$, o equivalentemente $a x_0 - c = m y_0$. Por lo tanto $m \mid a x_0 - c$, o lo que es lo mismo, $a x_0 \equiv c ~ (\text{mod} ~ m)$. Luego $x_0 \in \mathbb{Z}$ es una solución particular de la ecuación de congruencia $aX \equiv c ~ (\text{mod} ~ m)$
>> 
>> [[Demostración de equivalencia#Usando proposiciones|Recíprocamente]],  si $x_0 \in \mathbb{Z}$ es una solución particular de la ecuación de congruencia $aX \equiv ~ (\text{mod} ~ m)$, entonces existe $y_0 \in \mathbb{Z}$ tal que $a x_0 - c = m y_0$, por lo cual la ecuación diofántica $aX - mY = c$ admite la solución particular $(x_0,~ y_0) \in \mathbb{Z}^2$. Por lo visto en la sección anterior, esta ecuación diofántica tiene solución si y sólo si $(a ~:~ -m) = (a ~:~ m) \mid c$
>> 
>> Finalmente, cuando $(a ~:~ m) \mid c$, se aplica la [[Ecuación lineal de congruencia#^obs-1-6-2|observación 1.6.2]] para $d = (a ~:~ m)$, $a = da'$, $c = dc'$ y $m = dm'$, luego $$ \forall x \in \mathbb{Z}, ~~~ ax \equiv c ~ (\text{mod} ~ m) \iff a'x \equiv c' ~ (\text{mod} ~ m') $$
>> 
>> Es decir las dos ecuaciones de congruencia tienen exactamente las mismas soluciones
^prop-1-6-1

> [!observacion]+ Observación 1.6.2 (Simplificando factores comunes de ecuación de congruencia-I) 
> Sean $m' \in \mathbb{N}$ y $a',~ c',~ d \in \mathbb{Z}$ no nulos. Entonces, $$ \forall x \in \mathbb{Z}, ~~~ (da') x \equiv d c' ~ (\text{mod} ~ (dm')) \iff a'x \equiv c' ~ (\text{mod} ~ m') $$
> 
>> [!demostracion]- Demostración
>> Por definición de [[Congruencia|congruencia]], sabemos que $$ \begin{align} 
>>     (da') x \equiv dc' ~ (\text{mod} ~ (dm')) \iff& dm' \mid (da') x - dc'\\
>>     =~~& m' \mid a'x - c' \\
>>     \iff& a'x \equiv c' ~ (\text{mod} ~ m')
>> \end{align} $$
^obs-1-6-2

> [!corolario]+ Corolario 1.6.3 (Ecuación de congruencia con $a$ y $m$ coprimos)  - [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Ecuación lineal de congruencia#^prop-1-6-1|Proposición 1.6.1 (Ecuación de congruencia, mcd y ecuación "coprimizada")]]
> Sean $m \in \mathbb{N}$ y $a \in \mathbb{Z}$ tal que $a$ y $m$ son [[Número coprimo|coprimos]]. Entonces, la ecuación de congruencia $aX \equiv c ~ (\text{mod} ~ m)$ tiene soluciones enteras, cualquiera sea $c \in \mathbb{Z}$
^cor-1-6-3

> [!teorema]+ Teorema 1.6.4 (La ecuación de congruencia $aX \equiv c ~ (\text{mod} ~ m)$) 
> Sea $m \in \mathbb{N}$ y sean $a,~ c \in \mathbb{Z}$ con $a \ne 0$. El conjunto $\mathcal{S}$ de soluciones enteras de la ecuación de congruencia $$ aX \equiv c ~ (\text{mod} ~ m) $$ es
>  * $\mathcal{S} = \emptyset$, cuando $(a ~:~ m) \not\mid c$
>  * $\mathcal{S} = \Set{ x \in \mathbb{Z} : x \equiv x_0 ~ (\text{mod} ~ m') }$ donde $x_0 \in \mathbb{Z}$ es una solución particular cualquiera de la ecuación $ax \equiv c ~ (\text{mod} ~ m)$ o de la [[Ecuación de congruencia equivalente|ecuación equivalente]] $a'x \equiv c' ~ (\text{mod} ~ m')$ donde $\displaystyle a' = \frac{a}{(a ~:~ m)}$, $\displaystyle c' = \frac{c}{(a ~:~ m)}$ y $\displaystyle m' = \frac{m}{(a ~:~ m)}$, cuando $(a ~:~ m) \mid c$, ya que $$ aX \equiv c ~ (\text{mod} ~ m) \leftrightsquigarrow X \equiv x_0 ~ (\text{mod} ~ m') $$
> 
> Más aún, existe una única solución $x_0 \in \mathbb{Z}$ que satisface $0 \le x_0 < m'$
> 
>> [!demostracion]- Demostración
>> Sabemos por la [[Ecuación lineal de congruencia#^prop-1-6-1|proposición 1.6.1]] que si $(a ~:~ m) \not\mid c$, no hay solución, luego $\mathcal{S} = \emptyset$ en ese caso. Sea entonces el caso $(a ~:~ m) \mid c$. Tenemos que probar que $$ aX \equiv c ~ (\text{mod} ~ m) \leftrightsquigarrow X \equiv x_0 ~ (\text{mod} ~ m') $$
>> 
>> Pero ya sabemos que en ese caso, $$ aX \equiv c ~ (\text{mod} ~ m) \leftrightsquigarrow a'X \equiv c' ~ (\text{mod} ~ m') $$
>> 
>> Por lo tanto alcanza con probar que $$ a'X \equiv c' ~ (\text{mod} ~ m') \leftrightsquigarrow X \equiv x_0 ~ (\text{mod} ~ m') $$ o sea tienen las mismas soluciones enteras
>> 
>>  * Verifiquemos primero que si $x \in \mathbb{Z}$ es solución de la ecuación $X \equiv x_0 ~ (\text{mod} ~ m')$, es decir satisface $x \equiv x_0 ~ (\text{mod} ~ m')$, entonces es también solución de la ecuación $a'X \equiv c' ~ (\text{mod} ~ m')$:
>> 
>> Se tiene que $x \equiv x_0 ~ (\text{mod} ~ m')$ implica $a'x \equiv a' x_0 ~ (\text{mod} ~ m')$. Como $x_0 \in \mathbb{Z}$ es una solución particular de la ecuación $a'X \equiv c' ~ (\text{mod} ~ m')$, o sea vale $a' x_0 \equiv c' ~ (\text{mod} ~ m')$, por transitivdad se cumple $a' x \equiv c' ~ (\text{mod} ~ m')$
>> 
>>  * Verifiquemos ahora que una solución $x$ cualquiera de la ecuación $a'X \equiv c' ~ (\text{mod} ~ m')$ es también solución de la ecuación $X \equiv x_0 ~ (\text{mod} ~ m')$
>> 
>> Si $x \in \mathbb{Z}$ es una solución cualquiera de la ecuación de congruencia $a'x \equiv c' ~ (\text{mod} ~ m')$, entonces existe $y \in \mathbb{Z}$ tal que $(x,~ y)$ es solución de la ecuación diofántica $a' X - m' Y = c'$. Por el [[Ecuación lineal diofántica#^teo-1-5-6|teorema 1.5.6]], $x = x_0 + (-m')k$ e $y = y_0 - a'k$ donde $(x_0,~ y_0)$ es una solución particular cualquiera de la ecuación diofántica y $k \in \mathbb{Z}$. En particular $m' \mid x - x_0$, es decir $x \equiv x_0 ~ (\text{mod} ~ m')$ como se quería probar
>> 
>> Para terminar, mostremos que hay una única solución $x_0$ con $0 \le x_0 < m'$. Que existe es obvio pues si la solución encontrada $x_0$ no está en esas condiciones, se toma $r_{m'}(x_0)$ que satisface la misma ecuación de congruencia ya que $x_0 \equiv r_{m'}(x_0) ~ (\text{mod} ~ m')$. Cualquier otra solución $x$ satisface $x \equiv r_{m'}(x_0) ~ (\text{mod} ~ m')$, y por lo tanto no puede haber otra solución $x \ne r_{m'}(x_0)$ con $0 \le x < m'$
^teo-1-6-4

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```