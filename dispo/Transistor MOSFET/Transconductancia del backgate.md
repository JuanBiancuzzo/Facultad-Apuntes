---
dia: 2023-11-20
materia: dispo
capitulo: 6
---
### Definición
---
Con un [[Transistor de efecto de campo metal-óxido-semiconductor#Canal-N|MOSFET de canal-N]] en [[Saturación del transistor de efecto de campo metal-óxido-semiconductor|régimen de saturación]] $$ i_D = \frac{1}{2} \frac{W}{L} (v_{GS} - V_T(v_{BS}))^2 (1 + \lambda v_{DS}) $$
Recordando que $V_T(v_{BS})$ donde $V_T$ es la [[Tensión umbral#Para un Transistor de efecto de campo metal-óxido-semiconductor (MOSFET) MOSFET|tensión umbral]] tenemos que 

$$ \begin{matrix} 
	g_{mb} = \frac{\partial i_D}{\partial v_{BS}} \biggm|_{Q} = \frac{W}{L} (v_{GS} - V_T(v_{BS})) (1 + \lambda v_{DS}) \left( - \frac{\partial V_T}{\partial v_{BS}} \biggm|_{Q} \right) \\
	g_{mb} = g_m \left( - \frac{\partial V_T}{\partial v_{BS}} \biggm|_{Q} \right)
\end{matrix} $$

^0500ed

donde $g_m$ es la [[Transconductancia para transistor de efecto de campo metal-óxido-semiconductor|transconductancia]]

Recordando que $$ V_T(V_{BS}) = V_{T0} + \gamma ~ \left( \sqrt{-2 \phi_p - V_{BS}} - \sqrt{-2 \phi_p} \right) $$
Resulta $$ g_{mb} = g_m \frac{\gamma}{2 \sqrt{-2\phi_p - V_{BS}}} $$ donde $\gamma$ es [[Body factor coefficient|body factor coefficient]]

#### Validez
---
Es válido mientras (esta mal según pipe pero no esta confiado que es este el que esta mal) $$ v_{bs} < 0.4 ~ (V_{GS} - V_T) (-2\phi_p - V_{BS}) $$



^13f1cb


^75f375
