---
dia: 2024-02-15
materia: dispo
capitulo: 7
---
### Definición
---
![[Copia de corriente espejo simple.webp]]

Despreciando el [[Efecto de modulación del largo del canal|efecto de modulación del largo del canal]] $$ I_{REF} = i_{D1} = \frac{1}{2} \mu_n C'_{ox} \left( \frac{W}{L} \right)_1 (V_{REF} - V_T)^2 $$ $$ i_{out} = i_{D2} = \frac{1}{2} \mu_n C'_{ox} \left( \frac{W}{L} \right)_2 (V_{REF} - V_T)^2 $$
$$ \implies i_{out} = I_{REF} ~ \frac{\left( \frac{W}{L} \right)_2}{\left( \frac{W}{L} \right)_1} $$
$i_{out}$ se ajusta con $I_{REF}$ según la relación $\frac{W}{L}$ de los [[Transistor de efecto de campo metal-óxido-semiconductor|MOSFETs]]

Es importante contar con transistores "bien apareados": 
* Proporción $\frac{W}{L}$ muy controlada
* Mismo $V_T$
* Mismo $t_{ox}$
* etc.

#### Fuente espejo con P-MOSFET
---
![[Copia de corriente espejo simple P-MOSFET.webp]]

Despreciando el [[Efecto de modulación del largo del canal|efecto de modulación del largo del canal]] $$ I_{REF} = -i_{D1} = \frac{1}{2} \mu_p C'_{ox} \left( \frac{W}{L} \right)_1 (V_{REF} - V_{DD} - V_T)^2 $$ $$ i_{out} = -i_{D2} = \frac{1}{2} \mu_p C'_{ox} \left( \frac{W}{L} \right)_2 (V_{REF} - V_{DD} - V_T)^2 $$
$$ \implies i_{out} = I_{REF} ~ \frac{\left( \frac{W}{L} \right)_2}{\left( \frac{W}{L} \right)_1} $$
#### Múltiples fuentes de corriente
---
Dado que $I_G = 0$, de una sola referencia de [[Tensión|tensión]] es posible obtener múltiples fuentes espejo

![[Copia de corriente espejo simple múltiples.webp]]

$$ I_{out ~ (n)} = I_{REF} ~ \frac{\left( \frac{W}{L} \right)_n}{\left( \frac{W}{L} \right)_R} $$

La misma idea se aplica a [[Fuente de corriente|fuentes de corriente]] [[Transistor de efecto de campo metal-óxido-semiconductor#Canal-N|NMOS]]
![[Copia de corriente espejo simple múltiples NMOS.webp]]

#### Con un TBJ
---
Veamos un ejemplo con [[Transistor bipolar de juntura|TBJ]] de tipo [[Transistor bipolar de juntura#PNP|PNP]]

![[Copia de corriente espejo simple con un TBJ.webp]]

En este caso, la relación de corriente ($I_{out} / I_{REF}$) se da por la relación de áreas entre los TBJ ($A_2 / A_1$) $$ \begin{matrix}
	V_{BE1} = V_{BE2} \implies J_{C1} = J_{C2} \\
	I_{REF} = - (I_{C1} + I_{B1} + I_{B2})
\end{matrix} $$
En [[Modo activo directo del TBJ|MAD]]: $I_C = \beta I_B$ $$ \begin{matrix} 
	\displaystyle I_{REF} = - \left( I_{C1} + \frac{I_{C1}}{\beta} + \frac{I_{C2}}{\beta} \right) \\
	\displaystyle I_C = A ~ J_C \implies I_{C1} = A_1 ~ \frac{I_{C2}}{A_2} \\ 
	\displaystyle \implies I_{OUT} = - I_{C2} = \frac{I_{REF}}{\frac{A_1}{A_2} + \frac{1}{\beta} ~ \frac{A_1}{A_2} + \frac{1}{\beta}} \approx \frac{A_2}{A_1} ~ I_{REF}
\end{matrix} $$