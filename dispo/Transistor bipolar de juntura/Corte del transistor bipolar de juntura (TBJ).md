---
dia: 2023-10-14
materia: dispo
capitulo: 4
---
### Definición
---
La [[Corriente eléctrica|corriente]] $I_C$ e $I_B$ despreciables, se encuentra en "bloqueo". Con $V_{BE} < 0$ y $V_{BC} < 0$

$$  \begin{align} 
	I_C &= \frac{I_S}{\beta_R} \\
	I_B &= -I_S \left( \frac{1}{\beta_R} + \frac{1}{\beta_R} \right) \\
	I_E &= \frac{I_S}{\beta_F}
\end{align}  $$

#### [[Modelo de Ebers-Moll]]
---
![[Modelo de Ebers-Moll para corte.png]]

Solo existen corrientes de fuga despreciables.

### Análisis
---
![[Perfil de portadores minoritarios en corte.png]]

La base extrae [[Hueco|huecos]] del emisor $$ I_E = \frac{I_S}{\beta_F} $$ donde $\beta_F$ es la [[Ganancia de corriente en modo activo directo (MAD)|ganancia en MAD]] 

La base extrae huecos del colector $$ I_C = \frac{I_S}{\beta_R} $$ donde $\beta_R$ es la [[Ganancia de corriente en modo activo inverso (MAI)|ganancia en MAI]]

Luego la corriente de base es $$ I_B = -I_C - I_B $$
Estas son solo pequeñas [[Corriente eléctrica|corrientes]] de fuga ($\sim pA$) que en la mayoría de las aplicaciones prácticas pueden despreciarse