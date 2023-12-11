---
dia: 2023-11-28
materia: dispo
capitulo: 7
---
### Definición
---
Consideremos el siguiente [[Amplificador de tensión|amplificador]] implementado con un [[Transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|MOSFET]]  [[Transistor de efecto de campo metal-óxido-semiconductor (MOSFET)#Canal-N|canal N]]

![[Amplificador source común.png]]

La fuente de polarización ($V_{GG}$ y $R_G$) representa el [[Teorema de Thevenin|equivalente de Thevenin]] del [[Circuito eléctrico|circuito]] de polarización del MOSFET. 

#### Calculo de parámetros
---
Usando el [[Modelo de pequeña señal para Transistor de efecto de campo metal-óxido-semiconductor (MOSFET)#Modelo Modelo para bajas frecuencias|modelo de pequeña señal para baja frecuencia]] y pasivando las [[Fuente de tensión|fuentes de tensión continuas]], tendremos

![[Amplificador source común con modelo de pequeña señal.png]]

Esto se puede pensar como los [[Parámetros híbridos de un cuadripolo|parámetros de un cuadripolo]]

##### [[Ganancia|Ganancia]] de [[Tensión|tensión]] $A_{vo}$
---
La ganancia de tensión $A_{vo}$ se define sin carga conectada a la salida $$ A_{vo} = \frac{v_{out}}{v_{in}} \biggm|_{i_{out} = 0} $$
Considerando $v_{in} = v_{gs}$ por lo que la ganancia de tensión sin carga es $$ A_{vo} = -g_m (r_0 // R_C) $$ donde $g_m$ es la [[Transconductancia para transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|transconductancia]], y $r_0$ es [[Conductancia del drain|resistencia de salida o del drain]].

##### [[Resistencia|Resistencia]] de entrada $R_{in}$
---
La resistencia de entrada $R_{in}$ se define $$ R_{in} = \frac{v_{in}}{i_{in}} $$
La [[Tensión|tensión]] $v_{in}$ es aplicada directamente a $v_{gs}$, entonces se enciende el generador controlado. 

Sin embargo, la [[Corriente eléctrica|corriente]] $g_m ~ v_{gs}$ no influye en la corriente de entrada $i_{in}$
