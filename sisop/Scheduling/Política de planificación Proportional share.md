---
dia: 2023-11-15
materia: sisop
capitulo: 4
---
### Definición
---
Existen otros tipos de algoritmos de [[Políticas de planificación|planificación]] que utilizan diferentes mecanismos para realizar esta tarea. Por ejemplo el mecanismo de llamado Proportional-Share, algunas veces también conocido como fair-share. Este se basa en un concepto muy simple: En vez de optimizar el [[Métrica Turn Around de planificación|turnaround]] o el [[Métrica Tiempo de respuesta de planificación|response time]] el [[Scheduler|planificador]] en su lugar intentara garantizar que cada [[Proceso|tarea]] obtenga cierto porcentaje de tiempo de [[Procesador|Procesador]].

El concepto también es conocido como planificación por lotería la idea básica es muy sencilla. Los boletos, son utilizados para representar cuanto se comparte de un determinado recurso para un determinado [[Proceso|proceso]]. El porcentaje de los boletos que un proceso tiene es el porcentaje de cuanto va a compartir el recurso en cuestión.

Utilizar la aleatoriedad lleva a una correcta visión desde el punto de vista [[Probabilidad|probabilístico]] pero no garantiza que esa proporción deseada se lleve a cabo. De hecho en el ejemplo anterior no sucede que se ejecute los porcentajes correctos.

#### Mecanismo de los boletos
---
En un [[Sistema operativo|sistema operativo]] hay ciertos mecanismos para manipular los boletos de la lotería 

##### Ticket currency
Existen como en la realidad distintos tipos de monedas y las tareas pueden tener los tickets comprados con distintos valores de moneda. El sistema automáticamente los transforma en un tipo global de moneda

* Usuario A $\to$ $500$ (A currency) a A1 $\to$ $50$ (global currency)
* Usuario A $\to$ $500$ (A currency) a A2 $\to$ $50$ (global currency)
* Usuario B $\to$ $10$ (B currency) a B1 $\to$ $100$ (global currency)

##### Transferencia de boletos
Esta mecanismo permite que un [[Proceso|proceso]] temporalmente transfiere sus boletos a otro proceso. Este mecanismo es útil cuando se esta utilizando la [[Arquitectura cliente servidor|arquitectura cliente/servidor]].

##### Inflación
Con la inflación un proceso puede aumentar o disminuir la cantidad de boletos que posee esto lo puede hacer de forma temporal. Este proceso obviamente no puede realizarse en un sistema en el cual las tareas compiten entre ellas, ya que una tarea muy avara podría captar todos los boletos. Sin embargo, este método puede ser utilizado en un ambiente en el cual los procesos confían entre ellos.