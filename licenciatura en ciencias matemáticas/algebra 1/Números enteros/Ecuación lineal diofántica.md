---
dia: 2025-02-10
etapa: terminado
referencias:
  - "415"
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
Es un caso particular de la [[Ecuación diofántica|ecuación diofántica]] donde tienen la forma $$ a \cdot X + b \cdot Y = c $$ con $a,~b,~c \in \mathbb{Z}$, donde $a$ y $b$ no son ambos nulos, y la solución es $(x,~y) \in \mathbb{Z}^2$

Primero queremos ver si existe una solución [[Números enteros|entera]] $(x_0,~y_0) \in \mathbb{Z}^2$ 


> [!observacion]+ Observación 1.5.1  
> Si $a = 0$ o $b = 0$ (pongamos $b = 0$), el problema se vuelve un problema de [[Divisibilidad|divisibilidad]] $$ a \cdot X + 0 \cdot Y = c $$ tiene solución entera si y solo si $a \mid c$, y en caso las soluciones son todos los pares $(c / a,~j)$, $j \in \mathbb{Z}$. Esto hace que los casos donde ambos son no nulos, son los que tenemos que definir con mayor detalle
^obs-1-5-1

> [!proposicion]+ Proposición 1.5.2 (Ecuación diofántica y máximo común divisor) 
> Sean $a,~b,~c \in \mathbb{Z}$ con $a,~b$ no nulos. La ecuación diofántica $$ a ~ X + b ~ Y = c $$ admite soluciones enteras si y solo si $(a ~:~ b) \mid c$. Es decir $$ \exists (x_0,~y_0) \in \mathbb{Z}^2 : a ~ x_0 + b ~ y_0 = c \iff (a ~:~ b) \mid c $$
> 
>> [!demostracion]- Demostración
>> $(\implies)$ Sea $(x_0,~y_0) \in \mathbb{Z}^2$ una solución entera, entonces, como siempre, dado que $(a ~:~ b) \mid a$ y $(a ~:~ b) \mid b$, se concluye que $(a ~:~ b) \mid a ~ x_0 + b ~ y_0 = c$, es decir, $(a ~:~ b) \mid c$
>> 
>> $(\impliedby)$ Sabemos que existen (por [[Combinación entera|combinación entera]]) $s,~t \in \mathbb{Z}$ tales que $(a ~:~ b) = s ~ a + t ~ b$. Luego, dado que $(a ~:~ b) \mid c$, existe $k \in \mathbb{Z}$ tal que $c = k ~ (a ~:~ b)$, y por lo tanto se tiene que $c = a ~ (k ~ s) + b ~ (k ~ t)$. Podemos tomar $x_0 := k ~ s$, $y_0 := k ~ t$
^prop-1-5-2

Como $1 \mid c$, $\forall c \in \mathbb{Z}$, se obtiene inmediatamente el corolario siguiente


> [!corolario]+ Corolario 1.5.3 (Ecuación diofántica con $a$ y $b$ coprimos)  - [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Ecuación lineal diofántica#^prop-1-5-2|Proposición 1.5.2 (Ecuación diofántica y máximo común divisor)]]
> Sean $a,~b \in \mathbb{Z}$ no nulos y [[Número coprimo|coprimos]]. Entonces la ecuación diofántica $$ a ~ X + b ~ Y = c $$ tiene soluciones enteras, para todo $c \in \mathbb{Z}$
^cor-1-5-3

La [[Ecuación lineal diofántica#^prop-1-5-2|Proposición 1.5.2]] da además una forma de conseguir una solución $(x_0,~y_0)$ particular (si existe): cuando no se consigue a ojo o fácilmente, podemos aplicar el [[Algoritmo de Euclides|algoritmo de Euclides]] para escribir el [[Máximo común divisor|mcd]] como [[Combinación entera|combinación entera]]. Y luego de allí obtener la combinación entera que da $c$. Pero siempre es más fácil trabajar directamente con la ecuación "[[Número coprimo#^prop-1-1-5|coprimizada]]", como veremos en lo que sigue


> [!observacion]+ Observación 1.5.4 (Ecuación diofántica y ecuación "coprimizada") 
> Sean $a,~ b,~ c \in \mathbb{Z}$ con $a,~ b$ no nulos tales que $(a ~:~ b) \mid c$
> Definimos $\displaystyle a' = \frac{a}{(a ~:~ b)}$, $\displaystyle b' = \frac{b}{(a ~:~ b)}$ y $\displaystyle c' = \frac{c}{(a ~:~ b)}$. Entonces son [[Ecuación diofántica equivalente|equivalentes]] $$ a ~ X + b ~ Y = c \leftrightsquigarrow a' ~ X + b' ~ Y = c' $$
> 
>> [!demostracion]- Demostración
>> Cuando $(a ~:~ b) \mid c$, es claro que $\forall (x,~y) \in \mathbb{Z}^2$, $ax + by = c \iff a'x + b'y = c'$. Luego las dos ecuaciones tienen exactamente las mismas soluciones
^obs-1-5-4

El siguiente paso es encontrar todas las soluciones enteras de una ecuación diofántica que admite al menos una solución entera

Para ello vamos a tratar primero en detalle un caso particular, el caso $c = 0$, es decir el caso de una ecuación diofántica de tipo $$ aX + bY = 0 $$ que siempre tiene solución pues $(a ~:~ b) \mid 0$ independientemente de quién es $(a ~:~ b)$

> [!proposicion]+ Proposición 1.5.5 (La ecuación diofántica $a \cdot X + b \cdot Y = 0$) 
> Sean $a,~ b \in \mathbb{Z}$, no nulos. El conjunto $\mathcal{S}_0$ de soluciones enteras de la ecuación diofántica $ax + by = 0$ es $$ \mathcal{S}_0 = \Set{ (x,~ y) : x = b'k,~ y = -a'k,~ k \in \mathbb{Z} },~~ \text{donde} ~ a' := \frac{a}{(a ~:~ b)} ~ \text{y} ~ b' = \frac{b}{(a ~:~ b)} $$
>
>> [!demostracion]- Demostración
>> Se tiene $$ aX + bY = 0 \leftrightsquigarrow a'X + b'Y = 0 $$ donde $a' = a/(a ~:~ b)$ y $b' = b/(a ~:~ b)$ son coprimos
>> 
>> Ahora bien, sea $(x,~ y) \in \mathbb{Z}^2$ solución $$ \begin{align} 
>>     a'x + b'y = 0 \iff& a'x = -b'y \\
>>     \implies& a' \mid b'y ~~ \text{y} ~~ b' \mid a'x \\
>>     \underset{a' \perp b'}{\implies}& a' \mid a ~~ \text{y} ~~ b' \mid x \\
>>     \implies& \exists j,~ k \in \mathbb{Z}: y  ja' ~~ \text{y} ~~ x = kb'
>> \end{align} $$
>> 
>> Volviendo al primer renglón, resulta $$ a'(kb') = -b'(ja') \implies j = -k $$. Es  decir que $a = b'k$ e $y = -a'k$ para algún $k \in \mathbb{Z}$
>> 
>> Hemos probado: $(x,~ y)$ solución entera $\implies$ existe $k \in \mathbb{Z}$ tal que $x = b'k$ e $y = -a'k$
>> 
>> Verifiquemos la [[Demostración de equivalencia#Usando proposiciones|recíproca]]: Si $x = b'k$ e $y = -a'k$ para el mismo $k \in \mathbb{Z}$, entonces $(x,~ y)$ es solución de ecuación. Efectivamente, se tiene $a'x + b'y = a'(b'k) + b'(-a'k) = 0$
^prop-1-5-5

La resolución completa de este caso particular nos sirve para resolver completamente una ecuación lineal diofántica arbitraria

> [!teorema]+ Teorema 1.5.6 (La ecuación lineal diofántica $a \cdot X + b \cdot Y = c$) 
> Sean $a,~ b,~ c \in \mathbb{Z}$, con $a,~ b$ no nulos. El conjunto $\mathcal{S}$ de soluciones enteras de la ecuación lineal diofántica $aX + bY = c$ es 
>  * $\mathcal{S} = \emptyset$ cuando $(a ~:~ b) \not\mid c$
>  * $\mathcal{S} = \Set{ (x,~ y) : x = x_0 + b'k, ~~ y = y_0 - a'k; ~~ k \in \mathbb{Z} }$ donde $(x_0,~ y_0)$ es una solución particular cualquiera de la ecuación y $\displaystyle a' := \frac{a}{(a ~:~ b)}$, $\displaystyle b' := \frac{b}{(a ~:~ b)}$ cuando $(a ~:~ b) \mid c$
>  
>> [!demostracion]- Demostración
>> Sabemos que si $(a ~:~ b) \not\mid c$, la ecuación no admite solución luego $\mathcal{S} = \emptyset$ en ese caso. Cuando $(a ~:~ b) \mid c$, tenemos al menos una solución particular $(x_0, ~y_0) \in \mathbb{Z}^2$ de la ecuación, es decir $a ~ x_0 + b ~ y_0 = c$. Sea ahora $(x,~ b) \in \mathbb{Z}^2$ una solución cualquiera Se tiene $$ ax + yb = c \iff ax + by = a ~ x_0 + b ~ y_0 \iff a(x - x_0) + b(y - y_0) = 0 $$
>> 
>> Es decir $(x,~ y)$ es solución de $aX + bY = c$ si y solo si $(x - x_0,~ y - y_0)$ es solución de $aX + bY = 0$, es decir, por la [[Ecuación lineal diofántica#^prop-1-5-5|Proposición 1.5.5]], si y solo si existe $k \in \mathbb{Z}$ tal que $$ x - x_0 = b'k, ~ y - y_0 = -a'k, ~~~ \text{o sea} ~ x = x_0 + b'k, ~~ y = y_0 - a'k $$
^teo-1-5-6

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```