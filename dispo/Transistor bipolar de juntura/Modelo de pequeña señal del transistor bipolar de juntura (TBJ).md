---
dia: 2023-10-14
materia: dispo
capitulo: 4
---
### Definición
---
El [[Transistor bipolar de juntura (TBJ)|TBJ]] es un dispositivo [[Función R-lineal|alineal]] por lo que no cumple el [[Principio de superposición]]. Entonces teniendo el [[Circuito eléctrico|circuito]]

![[Circuito de pequeña señal del transistor bipolar de juntura (TBJ).webp]]

Por lo tanto vamos a aproximarla usando el [[Serie de Taylor#Polinomio de Taylor|polinomio de Taylor]] de primer orden $$
i_C(V_{BE} + v_{be}, V_{CE} + v_{ce}) \simeq ~ I_C(V_{BE}, V_{CE})
+ \frac{\partial i_C}{\partial v_{BE}} \biggm|_{Q} v_{be} 
+ \frac{\partial i_C}{\partial v_{CE}} \biggm|_{Q} v_{ce} $$ $$
i_B(V_{BE} + v_{be}, V_{CE} + v_{ce}) \simeq ~ I_B(V_{BE}, V_{CE})
+ \frac{\partial i_B}{\partial v_{BE}} \biggm|_{Q} v_{be} 
+ \frac{\partial i_B}{\partial v_{BC}} \biggm|_{Q} v_{bc} $$
donde $Q \equiv$  punto de polarización  $(V_{BE}, V_{CE})$.

#### Rango de validez del modelo
---
El error que cometemos entre el valor estimado de señal $i_c(t)$ y el valor real $i_C(t) - I_C$ debe ser pequeño. Al igual que el [[Modelo de pequeña señal para diodo]], a temperatura ambiente se obtiene $$ v_{be} \approx 5.2~mV $$ donde en la práctica se tolera $$ |v_{be}| < 10~mV $$

#### [[Modelo|Modelo]] para bajas frecuencias
---
Generalizamos la idea de linealización para todas las corrientes y todas las señales aplicadas sobre cualquiera de las fuentes de polarización

Puntos fundamentales:
* Podemos separar la respuesta del transistor en polarización y pequeña señal
* La señal es pequeña, aunque la respuesta no [[Función R-lineal|lineal]] puede aproximarse a una respuesta lineal
* Al poder considerar la respuesta lineal, se puede aplicar una pseudo-[[Principio de superposición|superposición]]

Podemos evaluar a las [[Corriente eléctrica|corrientes]] $$ i_C(V_{BE} + v_{be}, V_{CE} + v_{ce}) \approx I_C(V_{BE}, V_{CE}) + \frac{\partial i_C}{\partial v_{BE}} \biggm|_{Q}  v_{be} + \frac{\partial i_C}{\partial v_{CE}} \biggm|_{Q} v_{ce} $$ $$ i_B(V_{BE} + v_{be}, V_{CE} + v_{ce}) \approx I_C(V_{BE}, V_{CE}) + \frac{\partial i_B}{\partial v_{BE}} \biggm|_{Q} v_{be} + \frac{\partial i_B}{\partial v_{BC}} \biggm|_{Q} v_{bc} $$
donde $Q \equiv$  punto de polarización  $(V_{BE}, V_{CE})$

$$ i_c = \frac{\partial i_C}{\partial v_{BE}} \biggm|_{Q}  v_{be} + \frac{\partial i_C}{\partial v_{CE}} \biggm|_{Q} v_{ce} = g_m v_{be} ~ + ~ g_o v_{ce} $$
$$ i_b = \frac{\partial i_B}{\partial v_{BE}} \biggm|_{Q} v_{be} + \frac{\partial i_B}{\partial v_{BC}} \biggm|_{Q} v_{bc} = g_\pi v_{be} ~ + ~ g_\mu v_{be} $$

Definimos
* $g_m \equiv$ [[Transconductancia para transistor bipolar de juntura (TBJ)|transconductancia]] $[g_m] = S$
* $g_o \equiv$ [[Conductancia de colector|Conductancia de salida o de colector]] $[g_0] = S$
* $g_\pi \equiv$ [[Conductancia de base|Conductancia de entrada o de base]] $[g_\pi] = S$
* $g_\mu \equiv$ [[Conductancia de realimentación|Conductancia de realimentación]] $[g_\mu] = S$

Produciendo el circuito equivalente
![[Circuito equivalente de resistencias de pequeña señal del transistor bipolar de juntura.webp]]

#### [[Modelo|Modelo]] para altas frecuencias
---
Generalizamos la idea de linealización para todas las corrientes y todas las señales aplicadas sobre cualquiera de las fuentes de polarización. Se aplica las [[Capacidad de juntura|capacitancias de juntura]] y la [[Capacidad de difusión|capacitancia de difusión]].

Donde se definen dos capacidades
* $C_\pi \equiv$ [[Capacidad de entrada]] $[C_\pi] = F$
* $C_\mu \equiv$ [[Capacidad de realimentación]] $[C_\mu] = F$

![[Modelo de pequeña señal tbj completo.webp]]