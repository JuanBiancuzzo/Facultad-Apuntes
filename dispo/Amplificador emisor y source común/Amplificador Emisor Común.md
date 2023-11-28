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
Usando el [[Modelo de pequeña señal para transistor bipolar de juntura (TBJ)#Modelo Modelo para bajas frecuencias|modelo de pequeña señal para baja frecuencia]] y pasivando las [[Fuente de tensión|fuentes de tensión continuas]], tendremos

![[Amplificador emisor común con modelo de pequeña señal.png]]

Esto se puede pensar como los [[Parámetros híbridos de un cuadripolo|parámetros de un cuadripolo]]

##### [[Ganancia|Ganancia]] de [[Tensión|tensión]] $A_{vo}$
---
La ganancia de tensión $A_{vo}$ se define sin carga conectada a la salida $$ A_{vo} = \frac{v_{out}}{v_{in}} \biggm|_{i_{out} = 0} $$
Considerando $v_{in} = v_{be}$ por lo que la ganancia de tensión sin carga es $$ A_{vo} = -g_m (r_0 // R_C) $$ donde $g_m$ es la [[Transconductancia para transistor bipolar de juntura (TBJ)|transconductancia]], y $r_0$ es [[Conductancia de colector|resistencia de salida o de colector]].

Conociendo $R_{out}$ se puede calcula la ganancia como $$ A_{vo} = -g_m ~ R_{out} $$
##### [[Resistencia|Resistencia]] de entrada $R_{in}$
---
La resistencia de entrada $R_{in}$ se define $$ R_{in} = \frac{v_{in}}{i_{in}} $$
La tensión $v_{in}$ es aplicada directamente en $v_{be}$, entonces se enciende el generador controlado, pero la corriente $g_m ~ v_{be}$ no influye en la [[Corriente eléctrica|corriente]] $i_{in}$, por lo que $$ R_{in} = (r_\pi // R_B) $$ donde $r_\pi$ es la [[Conductancia de base|resistencia de entrada o de base]]

##### [[Resistencia|Resistencia]] de salida $R_{out}$
---
La resistencia de salida $R_{out}$ se define $$ R_{out} = \frac{v_{out}}{i_{out}} \biggm|_{v_{in} = 0} $$
El generador controlado no se enciende, recordando que $v_{in} = v_{be}$, por lo que $$ R_{out} = (r_0 // R_C) $$ donde $r_0$ es la [[Conductancia de colector|resistencia de salida o de colector]]

##### [[Ganancia|Ganancia]] de [[Tensión|tensión]] $A_{vs}$
---
Se puede definir la ganancia de tensión del [[Amplificador de tensión|amplificador]] en funcionamiento. Esto implica tener tanto la fuente de señal ($v_s$ y $R_s$) como la carga conectadas ($R_L$) a la entrada y la salida $$ A_{vs} = \frac{v_{out}}{v_s} \biggm|_{i_{out} \ne 0} $$
Analizando el modelo macroscópico del amplificador 
![[Amplificador operacional simplificado.png]]

Tenemos que $$ v_{in} = v_s \frac{R_{in}}{R_{in} + R_s} \implies \frac{v_{in}}{v_s} = \frac{R_{in}}{R_{in} + R_s} $$
Por lo tanto podemos calcular $$ v_{out} = A_{vo} v_{in} \frac{R_L}{R_{out} + R_L} \implies \frac{v_{out}}{v_{in}} = A_{vo} \frac{R_L}{R_{out} + R_L} $$
Consiguiendo $$ A_{vs} = \frac{v_{out}}{v_s} = \frac{v_{out}}{v_{in}} \frac{v_{in}}{v_s} = A_{vo} \underbrace{\frac{R_{in}}{R_{in} + R_s}}_{\substack{\text{Atenuación a} \\ \text{la entrada}}} \underbrace{\frac{R_L}{R_{out} + R_L}}_{\substack{\text{Atenuación por} \\ \text{efecto de la} \\\\\\ \text{carga}}} $$
#### Relación de compromiso de $A_{vo}$, $R_C$, $V_{CC}$ e $I_{CQ}$
---
Examinemos la dependencia con la polarización $$ |A_{vo}| = g_m ~ (r_0 // R_C) \approx g_m R_C $$ ya que $r_0 \gg R_C$, y si reescribimos $|A_{vo}|$ de la siguiente forma $$ |A_{vo}| \approx g_m R_C = \frac{I_C}{V_{th}} \frac{V_{CC} - V_{out}}{I_C} = \frac{V_{CC} - V_{out}}{V_{th}} $$
Para un $V_{out}$ fijo, la ganancia depende sólo de $V_{CC}$, mientras que se elija un $I_C$ y un $R_C$ para obtener el $V_{out}$ deseado.

### Máxima señal sin distorsión
---
La distorsión ocurre cuando el [[Transistor|transistor]] no está trabajando en el régimen que corresponde. La relación de la señal de salida con la señal de entrada no será [[Función R-lineal|lineal]]. Existirá una deformación de la señal de salida y entonces $$ v_{out} \ne A_{vo} v_{in} $$
![[Máxima señal sin distorsión.png]]

##### [[Distorsión por alinealidad en un Amplificador emisor común|Distorsión por alinealidad]]
---
![[Distorsión por alinealidad en un Amplificador emisor común#Definición]]

##### [[Distorsión por corte|Distorsión por corte]]
---
![[Distorsión por corte#Definición]]

##### [[Distorsión por saturación|Distorsión por saturación]]
---
![[Distorsión por saturación#Definición]]

#### [[Rendimiento en potencia|Eficiencia de conversión de potencia ]]
---
$$ \eta = \frac{P_{OUT}}{P_{DC}} \cdot 100 $$
Donde $P_{out}$ es la [[Potencia|potencia eficaz]] de la señal de salida $$ P_{OUT} = \frac{1}{2} \frac{\hat{v}^2_{out}}{R_L} $$
y $P_{DC}$ es la [[Potencia|potencia]] de continua que consume el [[Circuito eléctrico|circuito]] $$ P_{DC} = V_{CC} ~ I_C $$
Para un amplificador sin carga ($R_L \to \infty$), no se entrega potencia a la salida y el [[Rendimiento en potencia|rendimiento]] es nulo.

Si el amplificador entrega potencia a una carga, la máxima eficiencia se obtiene cuando $$ v_{out} = v_{out, ~ max} = \frac{1}{2} V_{CC} = I_{CQ} ~ R_L $$
Entonces, en general $$ \eta_{max} = \frac{1}{2} \frac{\frac{1}{2} V_{CC} I_{CQ} R_L}{R_L} \frac{1}{V_{CC} I_{CQ}} \cdot 100 = \frac{100}{4} = 25 $$
Este $25 \%$ es una cota teórica máxima.
