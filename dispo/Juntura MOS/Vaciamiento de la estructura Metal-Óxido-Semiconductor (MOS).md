---
dia: 2023-11-03
capitulo: 5
tags:
  - dispo/Juntura-MOS
---
### Definición
---
Dada una [[Estructura Metal-Óxido-Semiconductor (MOS)|Estructura MOS]] [[Estructura Metal-Óxido-Semiconductor (MOS) con polarización|polarizada]]: 
* Para $V_{GB} >0$ la fuente mueve [[Hueco|huecos]] desde el sustrato hacia el gate, entonces la región de vaciamiento crece. 
* Para $V_{GB} < 0$ la fuente mueve [[Hueco|huecos]] desde el gate hacia el sustrato entonces la región de vaciamiento se contrae.

En el régimen de vaciamiento son validos todos los resultados obtenidos para $V_{GB} = 0$ mediante $\phi_B \to \phi_B + V_{GB}$

#### Concentraciones de los [[Portador de carga|portadores]]
---
![[Concentración de portadores en la estructura MOS en regimen de vaciamiento.webp]]

#### Densidad de [[Carga eléctrica|carga]] espacial
---
![[Densidad de carga en una estructura MOS en regimen de vaciamiento.webp]]

#### [[Campo eléctrico]]
---
![[Campo eléctrico en una estructura MOS en regimen de vaciamiento.webp]]

#### [[Potencial eléctrico|Función potencial]]
---
![[Potencial eléctrico en una estructura MOS en regimen de vaciamiento.webp]]

Ahora la caída de potencial a lo largo de la región SCR del [[Semiconductor]] $$ \begin{align} 
	V_B (V_{GB}) &= \frac{1}{2} E(x = 0) ~ x_d(V_{GB}) \\
	&= \frac{1}{2} ~ \frac{q ~ N_a}{\varepsilon_s} ~ x_d(V_{GB}) ~ x_d(V_{GB}) \\
	&= \frac{q ~ N_a ~x_d^2(V_{GB})}{2 \varepsilon_s}
\end{align} $$
La caída de tensión a lo largo del oxido $$ V_{ox}(V_{GB}) = \frac{Q'_{bulk}}{C'_{ox}} = \frac{q ~ N_a ~ x_d(V_{GB})}{C'_{ox}} = \frac{q ~ N_a ~ x_d(V_{GB}) ~ t_{ox}}{\varepsilon_{ox}} $$ donde $C'_{ox}$ es el [[Capacidad de óxido|capacidad del óxido por área]] 

#### Límites de la región de carga espacial
---
Con esta tensión aplicada, se modifica el ancho de la zona de vaciamiento y esta dada por $$ x_d(V_{GB}) = \frac{\varepsilon_s}{C'_{ox}} \left[ \sqrt{1 + \frac{4 ~ (\phi_B + V_{GB})}{\gamma^2}} - 1 \right] $$