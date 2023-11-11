---
dia: 2023-11-10
materia: dispo
capitulo: 6
---
### Definición
---
Este transistor tiene como componente principal a la [[Estructura Metal-Óxido-Semiconductor (MOS)|estructura MOS]]

![[Transistor de efecto de campo metal-óxido-semiconductor (MOSFET).png]]

Elementos claves
* Debajo del gate se forma una capa de inversión controlada por la tensión $V_G$
* Existen dos regiones [[Dopaje|dopadas]] a los lados del gate, llamadas drain y source, donde la capa de inversión permite la circulación de [[Carga eléctrica|carga]] entre ambas regiones
* Es un dispositivo de cuatro terminales: la tensión del body es importante

#### Simbología
---
##### Canal-N
---
Dispositivo de canal-n (n-MOSFET) sobre un substrato [[Impureza aceptora#Cantidad de dopante|tipo p]] (capa de inversión de [[Electrón|electrones]])
![[MOSFET canal N.png]]

##### Canal-P
---
Dispositivo de canal-p (p-MOSFET) sobre un substrato [[Impureza donora#Cantidad de dopante|tipo n]] (capa de inversión de [[Hueco|huecos]])
![[MOSFET canal P.png]]

#### Regímenes de operación
---
El [[Transistor]] tiene 3 regímenes de operación

##### [[Corte del transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|Corte]]
---
![[Corte del transistor de efecto de campo metal-óxido-semiconductor (MOSFET)#Definición]]

##### [[Triodo del transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|Triodo/Linea]]
---
![[Triodo del transistor de efecto de campo metal-óxido-semiconductor (MOSFET)#Definición]]

##### [[Saturación del transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|Saturación]]
---
![[Saturación del transistor de efecto de campo metal-óxido-semiconductor (MOSFET)#Definición]]


#### Características del MOSFET con $V_{BS} \ne 0~V$
---
Hay un cuarto terminal en los MOSFET, el body o bulk. Este terminal es especialmente importante en los [[Circuito eléctrico|circuitos]] integrados.

El contacto de Body permite la aplicación de una polarización al body respecto de la capa de [[Inversión de la estructura Metal-Óxido-Semiconductor (MOS)|inversión]].

Para un n-MOSFET, $V_{BS}$ puede ser únicamente negativa para asegurar que la [[Juntura PN]] entre Source y Bulk esté en [[Diodo de Juntura PN#Para $V_D < 0$ (en Convención de signos para la tensión de polarización Polarización inversa inversa )|inversa]].

Suponiendo a la juntura MOS en inversión analizaremos el caso $V_{BS} = 0$ y luego observaremos que ocurre cuando se aplica una $V_{BS} < 0$. Asumiremos que no circula [[Corriente eléctrica|corriente]] de Drain.

Al modificar $V_{BS}$ cambian las condiciones de contorno del lado del [[Semiconductor]]

##### Densidad de [[Carga eléctrica|carga]]
---
![[Densidad de carga en la capa de inversión de un MOSFET al aumentar la tensión Vbs.png]]

Donde la $Q_G$ se mantiene, pero la carga $Q_B$ y $Q_n$ se compensan entre sí para la [[Conservación de carga]].
##### [[Campo eléctrico]]
---
![[Campo eléctrico en la capa de inversión de un MOSFET al aumentar la tensión Vbs.png]]

##### [[Potencial eléctrico|Función potencial]]
---
![[Función potencial en la capa de inversión de un MOSFET al aumentar la tensión Vbs.png]]

* Al considerar $V_{GS}$ fijo, $V_{ox}$ no cambia porque el canal se encuentra al mismo potencial que el Source.
* Como $V_{ox}$ no cambia, la suma de las [[Carga eléctrica|cargas]] de deserción e inversión no cambian.
* Al aumentar la carga de deserción, entonces hay menos carga de inversión $Q'_n$. La carga de inversión es 