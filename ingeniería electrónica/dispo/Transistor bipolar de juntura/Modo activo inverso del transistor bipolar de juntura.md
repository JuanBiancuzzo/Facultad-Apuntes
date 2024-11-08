---
dia: 2023-10-14
aliases:
  - MAI del TBJ
  - Modo activo inverso del TBJ
tags:
  - ingeniería-electrónica/dispo/Transistor-bipolar-de-juntura
  - nota/facultad
---
# Definición
---
La ganancia es pobre, el dispositivo no es útil en esta región y debe evitarse. 

Con $V_{BE} < 0$ y $V_{BC} > 0$ $$  \begin{align} 
	I_C &= -I_S \exp \left( \frac{V_{BC}}{V_{th}} \right) - \frac{I_S}{\beta_R} \left( \exp \left( \frac{V_{BC}}{V_{th}} \right) - 1 \right) \\
	I_B &= \frac{I_S}{\beta_R} ~ \left( \exp \left( \frac{V_{BC}}{V_{th}} \right) - 1\right) \\
	I_E &= I_S ~ \exp \left( \frac{V_{BC}}{V_{th}} \right)
\end{align}  $$ ^71eca7

## [[Modelo de Ebers-Moll]]
---
![[Modelo de Ebers-Moll para modo activo inverso.webp]]

Típicamente $V_{BC~(on)} \simeq 0.5~V$ (los [[Dopaje|dopajes]] de la [[Juntura PN|juntura BC]] son menores). $I_B$ también depende del circuito externo.

# Análisis
---
![[Perfil de portadores minoritarios en modo activo inverso.webp]]

El colector inyecta [[Electrón|electrones]] en la base, el emisor colecta electrones de la base $$ I_E = I_S ~ \exp \left( \frac{V_{BC}}{V_{th}} \right) $$
La base inyecta [[Hueco|huecos]] al colector, se [[Recombinación|recombinan]] en el contacto con el colector y el sustrato $$ I_B = \frac{I_S}{\beta_R} ~ \left( \exp \left( \frac{V_{BC}}{V_{th}} \right) - 1\right) $$donde $\beta_F$ es la [[Ganancia de corriente en modo activo inverso|ganancia de corriente en MAI]]

Por lo que la corriente de colector es $$ I_C = -I_E - I_B $$ $$ I_C = -I_S \exp \left( \frac{V_{BC}}{V_{th}} \right) - \frac{I_S}{\beta_R} \left( \exp \left( \frac{V_{BC}}{V_{th}} \right) - 1 \right) $$