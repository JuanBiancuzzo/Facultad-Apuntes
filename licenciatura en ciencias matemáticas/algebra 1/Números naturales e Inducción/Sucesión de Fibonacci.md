---
dia: 2024-11-06
etapa: ampliar
referencias:
  - "412"
tags:
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
vinculoFacultad:
  - "[[licenciatura en ciencias matemáticas/algebra 1/Números naturales e Inducción/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La [[Sucesión de Lucas|sucesión]] de Fibonacci debe su nombre a Leonardo Pisano Bigollo, más conocido como Fibonacci, en el año 1202, publicó el siguiente problema

> [!quote] Problema
> Si colocamos una pareja de conejos bebés en un área cerrada, ¿cuántos conejos habrá luego de $n$ meses si 
>  * los conejos nunca mueren,
>  * cada pareja de conejos produce una nueva pareja de conejos cada mes,
>  * y comienza a tener parejitas luego de dos meses de nacida?

En el mes $0$, no hay conejos (porque todavía no los colocamos). En el mes $1$, tenemos una pareja de conejos bebés (que colocamos). En el mes $2$, tenemos la misma única pareja de conejos, pero ya son adultos y van a empezar a tener parejitas. En el mes $3$, tenemos la pareja original (adulta) más una pareja bebé (hijos de la pareja original), o sea tenemos dos parejas. En el mes $4$, la pareja original tiene otra pareja de bebés, y además la pareja bebé  del mes $3$ se convierte en adulta (tenemos $3$ parejas). En el mes $5$, las dos parejas adultas que hay tienen parejas bebés y la pareja bebé que había se convierte en adulta: tenemos $5$ parejas. Si calculamos algunos números más, vemos que los siguientes meses tenemos: $8$, $13$, $21$, $34$, $\cdots$

Para encontrar una fórmula para esta sucesión, llamemos $A_n$ al número de parejas adultas en el mes $n$ y $B_n$ al número de parejas bebés en el mes $n$. Llamemos también $F_n$ al total de parejas en el mes $n$, o sea $F_n = A_n + B_n$. Obtenemos la tabla siguiente $$ \begin{array} {c|c|c|c}
    \text{Mes} & A_n & B_n & F_n \\\hline
    0 & 0 & 0 & 0 \\
    1 & 0 & 1 & 1 \\  
    2 & 1 & 0 & 1 \\
    3 & 1 & 1 & 2 \\
    \vdots & \vdots & \vdots & \vdots \\
    n & A_n & B_n & A_n + B_n \\
    n + 1 & A_n + B_n & A_n & 2A_n + B_n \\
    n + 2& 2A_n + B_n & A_n + B_n & 3A_n + 2B_n \\
\end{array} $$
Notemos que el número total de parejas de conejos en el mes $n + 2$ es el número que había en el mes $n + 1$ más el número de parejas adultas del mes $n + 1$, que coincide con el número de parejas del mes $n$

Luego la sucesión $F_n$ satisface la [[Sucesión de Lucas|recurrencia]] $F_{n + 2} = F_{n + 1} + F_n$, para todo $n \ge 0$. Además los primeros dos valores de la sucesión son $F_0 = 0$ y $F_1 = 1$. Estas condiciones definen una única sucesión, que se llama la sucesión de Fibonacci $(F_n)_{n \in \mathbb{N}_0}$ $$ F_0 = 0, ~~ F_1 = 1, ~~~~~ F_{n + 2} = F_{n + 1} + F_n, ~~ \forall n \in \mathbb{N}_0 $$
## Término general
---
Se obtiene viendo que la sucesión de Fibonacci es un caso particular de una [[Sucesión de Lucas|sucesión de Lucas]] y por lo tanto usar su forma para encontrar el término general
$$ F_n = \frac{1}{\sqrt{5}} \left( \Phi^n - \overline{\Phi}^n \right), ~~~~ \forall n \in \mathbb{N_0} $$ donde $\Phi$ es el [[Número de Oro|número de Oro]]

> [!demostracion]- Demostración
> Lo probamos por el [[Principio de inducción#Inducción "corrida"|principio de inducción corrido]] a $n \ge 0$ $$ p(n): ~~~ F_n = \frac{1}{\sqrt{5}} \left( \Phi^n - \overline{\Phi}^n \right) $$
> 
>  * Casos bases $p(0)$ y $p(1)$: $$ \frac{1}{\sqrt{5}} (1 - 1) = 0 = F_0 ~~~~ \text{y} ~~~~ \frac{1}{\sqrt{5}} \left( \Phi^1 - \overline{\Phi}^1 \right) = \frac{1}{\sqrt{5}} ~ \sqrt{5} = 1 = F_1 $$ 
>   
>  * Paso inductivo: Dado $h \in \mathbb{N}$
>      * HI: $F_h = \frac{1}{\sqrt{5}} \left( \Phi^h - \overline{\Phi}^h \right)$ y $F_{h + 1} = \frac{1}{\sqrt{5}} \left( \Phi^{h + 1} - \overline{\Phi}^{h + 1} \right)$
>      * Qpq: $F_{h + 2} = \frac{1}{\sqrt{5}} \left( \Phi^{h + 2} - \overline{\Phi}^{h + 2} \right)$
> 
> Pero por definición de la sucesión, sabemos que para $h \ge 0$, $F_{h + 2} = F_{h + 1} + F_h$. Luego $$ \begin{align} 
>     F_{h + 2} &= F_{h + 1} + F_h \underset{HI}{=} \frac{1}{\sqrt{5}} \left( \Phi^h - \overline{\Phi}^h \right) + \frac{1}{\sqrt{5}} \left( \Phi^{h + 1} - \overline{\Phi}^{h + 1} \right) \\
>     &= \frac{1}{\sqrt{5}} \left( \Phi^h - \overline{\Phi}^h + \Phi^{h + 1} - \overline{\Phi}^{h + 1} \right) = \frac{1}{\sqrt{5}} \left( \Phi^h (1 + \Phi) - \overline{\Phi}^h +(1 + \overline{\Phi}) \right) \\
>     &= \frac{1}{\sqrt{5}} \left( \Phi^h ~ \Phi^2 - \overline{\Phi}^h ~ \overline{\Phi}^2 \right) = \frac{1}{\sqrt{5}} \left( \Phi^{h + 2} - \overline{\Phi}^{h + 2} \right)
> \end{align} $$ como se quería probar
> 
> Se concluye que $p(n)$ es Verdadero, $\forall n \in \mathbb{N}_0$


> [!observacion]+ Observación 2.1.1  
> Notemos que para $n$ grandes, el termino $\overline{\Phi}^n$ tiende a $0$, algo también para considerar, es que como $|\overline{Phi}| < 1$ y como sabemos que $F_n \in \mathbb{N}_0$ entonces podríamos expresarlo de la siguiente forma $$
>     F_n = \begin{cases} 
>         \left\lfloor \frac{\Phi^n}{\sqrt{5}} \right\rfloor & \text{si} ~ n ~ \text{es par} \\\\
>         \left\lceil \frac{\Phi^n}{\sqrt{5}} \right\rceil & \text{si} ~ n ~ \text{es impar} \\ 
>     \end{cases}
> $$
^obs-2-1-1

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```