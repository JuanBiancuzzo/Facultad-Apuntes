---
dia: 2025-02-10
etapa: empezado
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
Es un caso particular de la [[Ecuación diofántica|ecuación diofántica]] donde tienen la forma $$ a \cdot x + b \cdot y = c $$ con $a,~b,~c \in \mathbb{Z}$, donde $a$ y $b$ no son ambos nulos, y la solución es $(x,~y) \in \mathbb{Z}^2$

Primero queremos ver si existe una solución [[Números enteros|entera]] $(x_0,~y_0) \in \mathbb{Z}^2$ 


> [!observacion]+ Observación 1.5.1  
> Si $a = 0$ o $b = 0$ (pongamos $b = 0$), el problema se vuelve un problema de [[Divisibilidad|divisibilidad]] $$ a \cdot x + 0 \cdot y = c $$ tiene solución entera si y solo si $a \mid c$, y en caso las soluciones son todos los pares $(c / a,~j)$, $j \in \mathbb{Z}$. Esto hace que los casos donde ambos son no nulos, son los que tenemos que definir con mayor detalle
^obs-1-5-1

> [!proposicion]+ Proposición 1.5.2 (Ecuación diofántica y máximo común divisor) 
> Sean $a,~b,~c \in \mathbb{Z}$ con $a,~b$ no nulos. La ecuación diofántica $$ a ~ x + b ~ y = c $$ admite soluciones enteras si y solo si $(a ~:~ b) \mid c$. Es decir $$ \exists (x_0,~y_0) \in \mathbb{Z}^2 : a ~ x_0 + b ~ y_0 = c \iff (a ~:~ b) \mid c $$
> 
>> [!demostracion]- Demostración
>> $(\implies)$ Sea $(x_0,~y_0) \in \mathbb{Z}^2$ una solución entera, entonces, como siempre, dado que $(a ~:~ b) \mid a$ y $(a ~:~ b) \mid b$, se concluye que $(a ~:~ b) \mid a ~ x_0 + b ~ y_0 = c$, es decir, $(a ~:~ b) \mid c$
>> 
>> $(\impliedby)$ Sabemos que existen (por [[Combinación entera|combinación entera]]) $s,~t \in \mathbb{Z}$ tales que $(a ~:~ b) = s ~ a + t ~ b$. Luego, dado que $(a ~:~ b) \mid c$, existe $k \in \mathbb{Z}$ tal que $c = k ~ (a ~:~ b)$, y por lo tanto se tiene que $c = a ~ (k ~ s) + b ~ (k ~ t)$. Podemos tomar $x_0 := k ~ s$, $y_0 := k ~ t$
^prop-1-5-2

Como $1 \mid c$, $\forall c \in \mathbb{Z}$, se obtiene inmediatamente el corolario siguiente


> [!corolario]+ Corolario 1.5.3 (Ecuación diofántica con $a$ y $b$ coprimos)  - [[licenciatura en ciencias matemáticas/algebra 1/Números enteros/Ecuación lineal diofántica#^prop-1-5-2|Proposición 1.5.2 (Ecuación diofántica y máximo común divisor)]]
> Sean $a,~b \in \mathbb{Z}$ no nulos y [[Número coprimo|coprimos]]. Entonces la ecuación diofántica $$ a ~ x + b ~ y = c $$ tiene soluciones enteras, para todo $c \in \mathbb{Z}$
^cor-1-5-3

La [[Ecuación lineal diofántica#^prop-1-5-2|Proposición 1.5.2]] da además una forma de conseguir una solución $(x_0,~y_0)$ particular (si existe): cuando no se consigue a ojo o fácilmente, podemos aplicar el [[Algoritmo de Euclides|algoritmo de Euclides]] para escribir el [[Máximo común divisor|mcd]] como [[Combinación entera|combinación entera]]. Y luego de allí obtener la combinación entera que da $c$. Pero siempre es más fácil trabajar directamente con la ecuación "[[Número coprimo#^prop-1-1-5|coprimizada]]", como veremos en lo que sigue


> [!observacion]+ Observación 1.5.4 (Ecuación diofántica y ecuación "coprimizada") 
> Sean $a,~ b,~ c \in \mathbb{Z}$ con $a,~ b$ no nulos tales que $(a ~:~ b) \mid c$
> Definimos $\displaystyle a' = \frac{a}{(a ~:~ b)}$, $\displaystyle b' = \frac{b}{(a ~:~ b)}$ y $\displaystyle c' = \frac{c}{(a ~:~ b)}$. Entonces son [[Ecuación diofántica equivalente|equivalentes]] $$ a ~ x + b ~ y = c \leftrightsquigarrow a' ~ x + b' ~ y = c' $$
> 
>> [!demostracion]- Demostración
>> Cuando $(a ~:~ b) \mid c$, es claro que $\forall (x,~y) \in \mathbb{Z}^2$, $ax + by = c \iff a'x + b'y = c'$. Luego las dos ecuaciones tienen exactamente las mismas soluciones
^obs-1-5-4

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```