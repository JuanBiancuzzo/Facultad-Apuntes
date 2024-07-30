---
dia: 2023-11-19
aliases:
  - Política de planificación CSF
tags:
  - sisop/Scheduling
  - nota/facultad
---
### Definición
---
El [[Scheduler|planificador]] de [[Linux|Linux]] llamado Completely Fair implementa el que se denomina fair-share scheduling de una forma altamente eficiente y de forma escalable.

Para lograr la meta de ser eficiente, CFS, intenta gastar muy poco tiempo tomando decisiones de [[Políticas de planificación|planificación]], de dos formas, por su diseño y debido al uso inteligente de estructuras de datos para esa tarea

#### Modo de operación básico
---
Mientras que los [[Scheduler|planificadores]] tradicionales se basan alrededor del concepto de un [[Time sharing|time-slice]] fijo, CSF opera de forma un poco diferente. Su objetivo es sencillo, dividir de forma justa la [[Procesador|Procesador]] entre todos los [[Proceso|procesos]] que están compitiendo por ella. 

Logra dividir la [[Procesador|CPU]] mediante una simple técnica para contar llamada [[Vruntime|virtual runtime]]. A medida que un proceso se ejecuta este acumula [[Vruntime|vruntime]]. En el caso más básico cada vruntime de un proceso se incrementa con la misma tasa, en proporción al tiempo físico. Cuando una decisión de planificación ocurre, CFS seleccionará el proceso con menos vruntime para que sea el próximo en ser ejecutado.

##### Decisión de parar la ejecución
---
El punto clave aquí es que hay un punto de tensión entre performance y equitatividad
* Si el CFS switchea de [[Proceso|proceso]] en tiempos muy pequeños estará garantizado que todos los procesos se ejecuten a costa de perdida de performance. Esto es por demasiados context switch
* Si el CFS switchea pocas veces, la performance del [[Scheduler|scheduler]] es buena pero el costo está puesto del lado de la equitatividad (fairness)

La forma en que CFS maneja esta tensión es mediante varios parámetros de control
* `sched_latency`
	* Este valor determina por cuanto tiempo un proceso tiene que ejecutarse antes de considerar su switcheo. El valor típico de este parámetro es de $48 ~ ms$, CFS divide este valor por el número de procesos ($n$) ejecutándose en la [[Procesador|Procesador]] para determinar el [[Time sharing|time-slice]] de un proceso, y entonces se asegura que por ese periodo de tiempo, CFS va a ser completamente justo.
* `min_granularity`
	* Para lidiar con los multiples context switch que puede producir un `sched_latency` muy chico, se introduce otro parámetro llamado `min_grunularity`, que normalmente se setea con el valor de $6 ~ ms$. Entonces CFS nunca sedería el time-slice de un proceso por debajo de ese número, por ende con esto se asegura que no haya overhead por el context switch

CFS utiliza una [[Interrupción por temporizador|interrupción periódica de tiempo]], lo que significa que sólo puede tomar decisiones en periodos de tiempos fijos ($1 ~ ms$)

##### Weighting
---
CFS tiene control sobre las prioridades de los [[Proceso|procesos]], de forma tal que los usuarios y administradores puedan asignar más [[Procesador|Procesador]] a un determinado proceso. Esto se hace con un mecanismo clásico de [[Unix|UNIX]] llamado nivel de proceso `nice`, este valor va de $-20$ a $+19$, con valor por defecto de $0$. Con una característica un poco extraña, los valores positivos de nice implica una prioridad más baja, y los valores negativos de nice implican una prioridad más alta.

|       | $+0$    | $+1$    | $+2$    | $+3$    | $+4$    |
| ----- | ------- | ------- | ------- | ------- | ------- |
| $-20$ | $88761$ | $71755$ | $56483$ | $46273$ | $36291$ |
| $-15$ | $29154$ | $23254$ | $18705$ | $14949$ | $11916$ |
| $-10$ | $9548$  | $7620$  | $6100$  | $4904$  | $3906$  |
| $-5$  | $3121$  | $2501$  | $1991$  | $1586$  | $1277$  |
| $0$   | $1024$  | $820$   | $655$   | $526$   | $423$   |
| $5$   | $335$   | $272$   | $215$   | $172$   | $137$   |
| $10$  | $110$   | $87$    | $70$    | $56$    | $45$    |
| $15$  | $36$    | $29$    | $23$    | $18$    | $15$    |

Estos pesos permite calcular efectivamente el [[Time sharing|time slice]] para cada proceso pero teniendo en cuenta las distintas prioridades para cada proceso $$ time\_slice_k = \frac{weight_k}{\displaystyle \sum_{i = 0}^{n - 1} weight_i} ~ sched\_latency $$
Con esto se debe generalizar el calculo de [[Vruntime|vruntime]] $$ vruntime_i = vruntime_i + \frac{weight_0}{weight_i} ~ runtime_i $$
Este se calcula tomando el tiempo de ejecución real que el $proceso_i$ ha acumulado ($runtime_i$) y lo escala de manera inversa según el peso del proceso

Un aspecto inteligente de la construcción de la tabla de pesos anterior es que la tabla conserva las proporciones de ratio de la [[Procesador|Procesador]] cuando la diferencia en valores de nice es constante

##### Utiliza [[Árbol Rojo-Negro|árboles rojo y negro]]
---
Uno de los focos de eficiencia del CFS está en la implementación de las [[Políticas de planificación|políticas anteriores]]. Pero también en una buena selección del tipo de dato cuando el [[Scheduler|planificador]] debe encontrar el próximo [[Proceso|job]] a ser ejecutado
* Las listas no escalan bien $O(n)$ 
* Los árboles sí, en este caso los árboles Rojo-Negro $O(log ~ n)$

Para tener una idea cerrada de donde aparece el árbol rojo y negro dentro del [[Kernel|kernel]] de [[Linux|Linux]] a partir de la versión del kernel 2.6.0

###### El algoritmo
Cuando el [[Scheduler|scheduler]] es invocado para correr un nuevo [[Proceso|proceso]], la forma en que el scheduler actúa es la siguiente:
1. El nodo más a la izquierda del árbol de planificación es elegido (ya que tiene el tiempo de ejecución más bajo), y es enviado a ejecutarse
2. Si el proceso simplemente completa su ejecución, este es eliminado del sistema y del árbol de planificación
3. Si el proceso alcanza su máximo tiempo de ejecución o de otra forma se para la ejecución del mismo voluntariamente o vía una [[Interrupción|interrupción]], este es reinsertado en el árbol de planificación basado en su nuevo tiempo de ejecución ([[Vruntime|vruntime]])
4. El nuevo nodo que se encuentra más a la izquierda del árbol será ahora el seleccionado, repitiéndose así la iteración