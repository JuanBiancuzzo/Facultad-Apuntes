---
dia: 2023-11-26
materia: dispo
capitulo: 7
---
### Definición
---
El objetivo de los [[Amplificador operacional|amplificadores]] de [[Tensión|tensión]] es aumentar el valor de tensión de la señal.

Basándonos en el [[Modelo|modelo]] macroscópico de un amplificador de tensión
![[Amplificador operacional simplificado#Definición]]

Cuyos parámetros característicos son $R_{in}$, $R_{out}$ y $A_{vo}$.
#### Características
---
Este modelo se caracteriza por su 
* Linealidad
* Resistencia de entrada elevada
* Resistencia de salida baja

##### Linealidad
---
El [[Amplificador operacional|amplificador]] debe tener relación lineal de transferencia entrada-salida. Por lo que la señal de salida es una réplica sin distorsión de la señal de entrada. $$ v_{out} = A_v ~ v_{in} $$
##### Resistencia de entrada ($R_{in}$) elevada
---
![[Resistencia de entrada en un amplificador simplificado.png]]

$$ v_{in} = \frac{R_{in}}{R_s + R_{in}} ~ v_s < v_s $$
Para que $v_{in}$ tienda a $v_s$, $R_{in}$ tiende a infinito, es decir $$ v_{in} \xrightarrow[y \to 5]{} v_s $$
##### Resistencia de salida ($R_{out}$) baja
---
![[Resistencia de salida en un amplificador simplificado.png]]
$$ v_{out} = \frac{R_L}{R_{out} + R_L} ~ A_{vo} v_{in} < A_{vo} v_{in} $$
Para que $v_{out}$ tienda a $A_{vo} v_{in}$, entonces $R_{out}$ tiende a 0, es decir $$ v_{out} \xrightarrow[R_{out} \to 0]{} A_{vo} v_{in} $$