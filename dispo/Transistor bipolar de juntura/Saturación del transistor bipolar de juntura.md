---
dia: 2023-10-14
aliases:
  - Saturación del TBJ
tags:
  - dispo/Transistor-bipolar-de-juntura
  - nota
---
### Definición
---
El [[Transistor bipolar de juntura|TBJ]] está en conducción pero la [[Corriente eléctrica|corriente]] depende de $V_{BE}$ y de $V_{BC}$. La base está inundada de [[Portador de carga|portadores]] minoritarios. 

Con $V_{BE} > 0$ y $V_{BC} > 0$ $$  \begin{align} 
	I_C &= I_S ~ \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - \exp \left( \frac{V_{BC}}{V_{th}} \right) \right) - \frac{I_S}{\beta_R} \left( \exp \left( \frac{V_{BC}}{V_{th}} \right) - 1 \right) \\
	
	I_B &= \frac{I_S}{\beta_F} \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) + \frac{I_S}{\beta_R} \left( \exp \left( \frac{V_{BC}}{V_{th}} \right) - 1 \right) \\
	
	I_E &= -\frac{I_S}{\beta_F} \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) - I_S \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - \exp \left( \frac{V_{BC}}{V_{th}} \right) \right)
\end{align}  $$ ^7f7ec7

#### [[Modelo de Ebers-Moll]]
---
![[Modelo de Ebers-Moll para saturación.webp]]

El dispositivo se comporta como dos [[Diodo|diodos]] en [[Convención de signos para la tensión de polarización#Polarización directa|directa]] con la base como ánodo común. Luego puede obtenerse $V_{CE ~ (sat)} = V_{BE ~ (on)} - V_{BC ~ (on)} \simeq 0.2~V$. $I_B$ e $I_C$ dependen del circuito externo.

### Análisis
---
![[Perfil de portadores minoritarios en saturación.webp]]

El régimen de saturación es la superposición del régimen [[Modo activo directo del transistor bipolar de juntura|activo]] y [[Modo activo inverso del transistor bipolar de juntura|reverso]] entonces $$ I_C = I_S ~ \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - \exp \left( \frac{V_{BC}}{V_{th}} \right) \right) - \frac{I_S}{\beta_R} \left( \exp \left( \frac{V_{BC}}{V_{th}} \right) - 1 \right) $$ donde $\beta_R$ es la [[Ganancia de corriente en modo activo inverso (MAI)|ganancia en MAI]]

$$ I_B = \frac{I_S}{\beta_F} \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) + \frac{I_S}{\beta_R} \left( \exp \left( \frac{V_{BC}}{V_{th}} \right) - 1 \right) $$ donde $\beta_F$ es la [[Ganancia de corriente en modo activo directo (MAD)|ganancia en MAD]]

$$ I_E = -\frac{I_S}{\beta_F} \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - 1 \right) - I_S \left( \exp \left( \frac{V_{BE}}{V_{th}} \right) - \exp \left( \frac{V_{BC}}{V_{th}} \right) \right) $$

$I_C$ y $I_E$ pueden tener cualquier signo, dependiendo de la magnitud relativa de $V_{BE}$, $V_{BC}$, $\beta_F$ y $\beta_R$

En saturación el colector y la base están inundados de [[Portador de carga|portadores]] minoritarios en exceso, esto demora mucho el tiempo para sacar el [[Transistor bipolar de juntura|TBJ]] de saturación