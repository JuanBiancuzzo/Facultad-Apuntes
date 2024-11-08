---
dia: 2023-11-10
tags:
  - ingeniería-electrónica/dispo/Juntura-MOS
  - nota/facultad
aliases:
  - Capacidad de la estructura MOS
---
# Definición
---
La [[Estructura Metal-Óxido-Semiconductor|estructura MOS]] es muy similar a un [[Capacitor de placas planas paralelas|Capacitor de placas planas paralelas]], donde una de las placas se constituye con un [[Semiconductor|semiconductor]] en lugar de un metal.

![[Curva C-V teórica de la estructura MOS.webp]]

## En [[Acumulación de la estructura Metal-Óxido-Semiconductor (MOS)|acumulación]]
---
Con $V_{GB} < V_{FB}$ 

![[Acumulación de la estructura Metal-Óxido-Semiconductor#^820fd4]]

Toda la [[Carga eléctrica|carga]] se encuentra en la interfaz con el aislante, y el [[Tensión|potencial eléctrico]] se aplica al aislante $$ v_{ox} = v_{GB} - V_{FB} = E ~ t_{ox} $$
La carga por unidad de área en la compuerta es $$ Q'(v_{GB}) = \frac{\varepsilon_{ox}}{t_{ox}} (v_{GB} - V_{FB}) = C'_{ox}(v_{GB} - V_{FB}) $$ $$ C' = C'_{ox} $$ donde $C'_{ox}$ es la [[Capacidad de óxido|capacidad del óxido]]

## En [[Vaciamiento de la estructura Metal-Óxido-Semiconductor|vaciamiento]]
---
Con $V_{FB} < V_{GB} < V_{T}$ 

![[Vaciamiento de la estructura Metal-Óxido-Semiconductor#Densidad de carga espacial]]

La [[Carga eléctrica|carga]] se distribuye a lo largo de la SCR. La extensión de la SCR depende de $v_{GB}$ por lo que $$ \begin{matrix} 
	Q'(v_{GB}) = q ~ N_a ~ x_d(v_{GB}) \\ 
	\displaystyle x_d(v_{GB}) = \frac{\varepsilon_s}{C'_{ox}} \left[ \sqrt{1 + \frac{4 (\phi_B + v_{GB}) }{\gamma^2}} - 1 \right] \\
\end{matrix} $$ donde $\gamma$ es el [[Body factor coefficient|Body factor coefficient]]

$$ C' = q ~ N_a ~ \frac{d ~ x_d(v_{GB})}{d ~ v_{GB}} \biggm|_{V_{GB}} = \frac{C'_{ox}}{ \sqrt{1 + \frac{4 (\phi_B + v_{GB}) }{\gamma^2}}} $$
 donde $C'_{ox}$ es la [[Capacidad de óxido|capacidad del óxido]]

En vaciamiento, la capacidad disminuye a medida que aumenta la [[Tensión]] aplicada.

## En [[Inversión de la estructura Metal-Óxido-Semiconductor|inversión]]
---
Con $V_{GB} > V_{T}$ 

![[Inversión de la estructura Metal-Óxido-Semiconductor#Densidad de carga espacial]]

La carga en la SCR se mantiene fija, la extensión de la SCR llega a un valor máximo.

La variación de carga se produce en la capa de inversión, en la interfaz con el aislante. $$ \begin{matrix}
	Q'(v_{GB}) = C'_{ox}(v_{GB} - V_T) + q ~ N_a ~ x_{max} \\
	x_{max} = x_d(V_T) \ne f(v_{GB}) 
\end{matrix} $$ donde $C'_{ox}$ es la [[Capacidad de óxido]] y $V_T$ es la [[Tensión umbral]]. $$ C' = C'_{ox} $$

