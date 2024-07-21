---
dia: 2023-10-14
capitulo: 4
aliases:
  - MAD del TBJ
  - Modo activo directo del TBJ
tags:
  - dispo/Transistor-bipolar-de-juntura
---
### Definición
---
La [[Corriente eléctrica|corriente]] de colector se controla a través de $V_{BE}$ y tiene poca dependencia con la tensión del colector. 

Con $V_{BE} > 0$ y $V_{BC} < 0$ $$ \begin{align} 
	I_C &= I_S \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) \\
	I_B &= \frac{I_S}{\beta_F} ~ \exp \left( \frac{V_{BE}}{V_{th}} \right) \\
	I_E &= -\frac{I_S}{\beta_F} ~ \exp \left( \frac{V_{BE}}{V_{th}} \right)  \left( \beta_F + 1 \right) - \frac{I_S}{\beta_F}
\end{align} $$ ^bfa932

#### [[Modelo de Ebers-Moll]]
---
![[Modelo de Ebers-Moll para modo activo directo.webp]]

Típicamente $V_{BE~(on)} \simeq 0.7~V$. $I_B$ depende del circuito externo.

### Análisis
---
![[Distribución de portadores en transistor NPN en escala semilog.webp]]

* El perfil de [[Electrón|electrones]] sugiere que habrá [[Corriente de difusión|difusión]] desde emisor hacia colector, donde serán extraídos por el [[Campo eléctrico]] en la SCR
* El perfil de [[Hueco|huecos]] sugiere que solamente habrá difusión desde base hacia emisor.

Siguiendo un análisis similar al [[Corriente del Diodo#Calculo de la corriente|calculo de corriente en una juntura PN]] encontramos que para la zona de [[Impureza donora#Cantidad de dopante|tipo N]] en el Emisor, la corriente de minoritarios queda $$ I_p = - q A_{BE} ~ D_p^E \cdot \frac{p(-x_{BE}) - p_0}{W_E} = - \frac{q A_{BE} ~ D_p^E}{W_E} \cdot \frac{n_i^2}{N_{dE}} ~ \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) $$
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

![[Perfil de portadores minoritarios en modo activo directo.webp]]

Por lo que podemos entender que $$ I_C = - I_n = \frac{qA_{BE} ~ D_n^B ~ n_i^2}{W_B ~ N_{aB}} \cdot \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) = I_S  \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) $$ donde $I_S$ es la corriente de saturación del colector, en $[A]$

Y también que $$ I_B = - I_p = \frac{qA_{BE} ~ D_p^E ~ n_i^2}{W_E ~ N_{dB}} \cdot \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) = \frac{I_S}{\beta_F}  \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) $$donde $\beta_F$ es la [[Ganancia de corriente en modo activo directo (MAD)|ganancia de corriente en MAD]]

Recordando que $V_{BE} > 0$ al estar en directa, por lo que podemos aproximar $I_B$ a $$ I_B = \frac{I_S}{\beta_F}  \exp \left( \frac{V_{BE}}{V_{th}} \right) $$

Por lo último $$ I_E = - I_B - I_C = -\frac{I_S}{\beta_F} ~ \exp \left( \frac{V_{BE}}{V_{th}} \right)  \left( \beta_F + 1 \right) - \frac{I_S}{\beta_F} $$ 