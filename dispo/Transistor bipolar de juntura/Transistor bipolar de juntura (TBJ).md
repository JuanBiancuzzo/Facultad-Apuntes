---
dia: 2023-09-25
materia: dispo
capitulo: 4
---
### Definición
---
El [[Transistor]] bipolar de juntura es la superposición de tres regiones con [[Dopaje|dopajes]] contrarios, formando dos [[Juntura PN|junturas PN]]. Estas tienen que estar suficientemente juntas como para que los [[Portador de carga|portadores]] minoritarios interactúen (pueden difundirse rápido sin [[Recombinación|recombinarse]] en la base). También tiene que estar suficientemente separados como para que las regiones de deserción (SCR) no se solapen (punch-through).

Al intercambiar el tipo de dopaje, pueden obtenerse dos combinaciones distintas

##### NPN
---
![[TBJ con regiones NPN.png]]

Donde tenemos, por construcción $$ N_{dE} > N_{aB} > N_{dC} $$

##### PNP
---
![[TBJ con regiones PNP.png]]

Donde tenemos, por construcción $$ N_{aE} > N_{dB} > N_{aC} $$
### Modos de operación
---
Independientemente de si el TBJ es NPN o PNP, tiene 4 modos de operación. Tomaremos como referencia el NPN, pero se aplica de la misma forma para el PNP

![[Transistor NPN.png]]

#### Modelo activo directo (MAD)
---
La [[Corriente eléctrica|corriente]] de colector se controla a través de $V_{BE}$ y tiene poca dependencia con la tensión del colector.

$$ \begin{align} 
	I_C &= I_S \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) \\
	I_B &= \frac{I_S}{\beta_F} ~ \exp \left( \frac{V_{BE}}{V_{th}} \right) \\
	I_E &= -\frac{I_S}{\beta_F} ~ \exp \left( \frac{V_{BE}}{V_{th}} \right)  \left( \beta_F + 1 \right) - \frac{I_S}{\beta_F}
\end{align} $$

##### Análisis
---
Con $V_{BE} > 0$ 
* Juntura en [[Convención de signos para la tensión de polarización#Polarización directa|directa]]
* Inyección de electrones del Emisor a la Base
* Inyección de huecos de la Base al Emisor

Con $V_{BC} < 0$
* Juntura en [[Convención de signos para la tensión de polarización#Polarización inversa|inversa]]
* Extracción de electrones de Base al Colector
* Extracción de huecos del Colector a la Base

![[Distribución de portadores en transistor NPN en escala semilog.png]]

* El perfil de [[Electrón|electrones]] sugiere que habrá [[Corriente de difusión|difusión]] desde emisor hacia colector, donde serán extraídos por el [[Campo eléctrico]] en la SCR
* El perfil de [[Hueco|huecos]] sugiere que solamente habrá difusión desde base hacia emisor.

Siguiendo un análisis similar al [[Corriente a través de la juntura PN#Calculo de la corriente|calculo de corriente en una juntura PN]] encontramos que para la zona de [[Impureza donora#Cantidad de dopante|tipo N]] en el Emisor, la corriente de minoritarios queda $$ I_p = - q A_{BE} ~ D_p^E \cdot \frac{p(-x_{BE}) - p_0}{W_E} = - \frac{q A_{BE} ~ D_p^E}{W_E} \cdot \frac{n_i^2}{N_{dE}} ~ \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) $$
Para la zona de [[Impureza aceptora#Cantidad de dopante|tipo P]] en la Base, la corriente de minoritarios queda $$ I_n = - q A_{BE} ~ D_n^B \cdot \frac{n(0)}{W_B} = - \frac{q A_{BE} ~ D_n^B}{W_B} \cdot \frac{n_i^2}{N_{aE}} ~ \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) $$
Y por [[Ley de Nodos de Kirchhoff]] sabemos que $I_E = -I_C - I_B$, por lo que tendríamos todas las corrientes, solo necesitamos saber cual corresponde a cual. Analizando las corrientes del transistor

Por lo que podemos deducir que para la corriente $I_C$
1. Inyección de $e^-$ de E a B, difusión de B y extracción en C
2. Extracción de $h^+$ de C a B (que es despreciable por la baja concentración de huecos que se agregan en esa zona)

Para $I_B$
1. Inyección de $h^+$ de B a E
2. Extracción de $h^+$ de C a B (Despreciable por lo mismo que antes)
3. [[Recombinación]] de $e^-$ provenientes de E con $h^+$ de B (que es despreciable por la hipótesis inicial del transistor)

Para $I_E$ 
1. Inyección de $e^-$ de E a B ($\sim ~ I_C$)
2. Inyección de $h^+$ de B a E ($\sim ~ I_B$)

Por lo que podemos entender que $$ I_C = - I_n = \frac{qA_{BE} ~ D_n^B ~ n_i^2}{W_B ~ N_{aB}} \cdot \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) = I_S  \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) $$ donde $I_S$ es la corriente de saturación del colector, en $[A]$

Y también que $$ I_B = - I_p = \frac{qA_{BE} ~ D_p^E ~ n_i^2}{W_E ~ N_{dB}} \cdot \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) = \frac{I_S}{\beta_F}  \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) $$donde $\beta_F$ es la ganancia de corriente en MAD, y se define como $$ \beta_F \triangleq \frac{I_C}{I_B} =\frac{D_n^B}{D_p^E} \cdot \frac{W_E}{W_B} \cdot \frac{N_{dE}}{N_{aB}} $$
Donde la ganancia se mantiene constante para un cierto rango de tensión de $V_{BE}$. Para valores bajos aparece la [[Diodo#Corriente eléctrica Corriente de Recombinación|recombinación  y bajo nivel de inyección]], y para valores altos aparece la [[Diodo#Aproximación de cuasi-neutralidad Cuasi neutralidad|resistencia en serie, con un alto nivel de inyección]].

Recordando que $V_{BE} > 0$ al estar en directa, por lo que podemos aproximar $I_B$ a $$ I_B = \frac{I_S}{\beta_F}  \exp \left( \frac{V_{BE}}{V_{th}} \right) $$

Por lo último $$ I_E = - I_B - I_C = -\frac{I_S}{\beta_F} ~ \exp \left( \frac{V_{BE}}{V_{th}} \right)  \left( \beta_F + 1 \right) - \frac{I_S}{\beta_F} $$
#### Modelo activo inverso (MAI)
---
La ganancia es pobre, el dispositivo no es útil en esta región y debe evitarse.



##### Análisis
---
Con $V_{BE} < 0$ 
* Juntura en [[Convención de signos para la tensión de polarización#Polarización inversa|inversa]]
* Inyección de huecos del Emisor a la Base
* Inyección de electrones del Base al Emisor

Con $V_{BC} > 0$
* Juntura en [[Convención de signos para la tensión de polarización#Polarización directa|directa]]
* Extracción de electrones del Colector a la Base
* Extracción de huecos de la Base al Base



#### Corte
---
La [[Corriente eléctrica|corriente]] $I_C$ e $I_B$ despreciables, se encuentra en "bloqueo".

##### Análisis
---


#### Saturación
---
El TBJ está en conducción pero la [[Corriente eléctrica|corriente]] depende de $V_{BE}$ y de $V_{BC}$. La base está inundada de [[Portador de carga|portadores]] minoritarios.



##### Análisis
---