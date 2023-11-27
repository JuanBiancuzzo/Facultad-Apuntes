---
dia: 2023-11-26
materia: dispo
capitulo: 7
---
### Definición
---
Este es un [[Amplificador de tensión|amplificador de tensión]], basado en un [[Transistor bipolar de juntura (TBJ)|TBJ]] 

![[Amplificador emisor común.png]]

Suponiendo que $R_L \to \infty$ y no afecta al funcionamiento del [[Circuito eléctrico|circuito]].

Donde se tiene
* $v_{OUT}(t) = V_{OUT} + v_{out}(t)$
	* $v_{OUT}(t)$ es la [[Tensión|tensión]] total, y depende del tiempo
	* $V_{OUT}$ es la tensión de continua o polarización, no dependiente del tiempo
	* $v_{out}(t)$ es la señal alterna, dependiente del tiempo
* $V_{BB}$ y $R_B$ representan el [[Teorema de Thevenin|equivalente de Thevenin]] del circuito de polarización de la Base
* $V_{CC}$ y $R_C$ representan el [[Teorema de Thevenin|equivalente de Thevenin]] del circuito de polarización de la Colector
* $V_{BB}$, $R_B$, $V_{CC}$ y $R_C$ seleccionados para polarizar el [[Transistor|transistor]] en [[Modo activo directo (MAD) del transistor bipolar de juntura (TBJ)|MAD]] y obtener el punto $Q = Quiescent = Resposo$ deseado
* Si $v_s \uparrow \implies v_{BE} \uparrow \implies i_B \uparrow \implies i_C \uparrow \implies i_R \uparrow \implies v_{OUT} \downarrow$ 
* $A_{vo} = \frac{v_{out}}{v_{in}} < 0$ la salida está en contrafase con la entrada
* $|A_v| = \left| \frac{v_{out}}{v_{in}} \right| > 1$, si el amplificador está bien diseñado

#### Calculo de parámetros
---
Usando el [[Modelo de pequeña señal para transistor bipolar de juntura (TBJ)#Modelo para bajas frecuencias|modelo de pequeña señal para baja frecuencia]] y pasivando las [[Fuente de tensión|fuentes de tensión continuas]], tendremos

![[Amplificador emisor común con modelo de pequeña señal.png]]

Esto se puede pensar como los parámetros de un [[Cuadripolo|cuadripolo]].

##### Ganancia de tensión $A_{vo}$
---
La ganancia de tensión $A_{vo}$ se define sin carga conectada a la salida,

