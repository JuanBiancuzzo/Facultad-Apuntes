---
dia: 2022-10-13
tags:
  - ingeniería-electrónica/analisis-3/Transformaciones-conformes
  - nota/facultad
  - ingeniería-en-informática/analisis-3/Transformaciones-conformes
  - licenciatura-en-ciencias-matemáticas/analisis-1/Vectores-y-geometría-del-espacio
  - licenciatura-en-ciencias-de-datos/analisis-1/Vectores-y-geometría-del-espacio
  - licenciatura-en-ciencias-físicas/analisis-1/Vectores-y-geometría-del-espacio
referencias:
  - "517"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dada una circunferencia $C = \{ z \in \mathbb{C} : |z - z_0| = r \}$ se deduce que $$ C = \{ z \in \mathbb{C} : z \cdot \bar{z} - z \cdot \bar{z_0} - \bar{z} \cdot z_0 + z_0 \cdot \bar{z_0} = r^2 \} $$ 
Para el caso donde lo planteamos en el [[Plano|plano]], donde el centro del mismo es $P_0 = (a_0,~ b_0) \in \mathbb{R}^2$ y un radio $r > 0$, y definimos el [[Conjunto|conjunto]] de esa circunferencia como $$ C(P_0,~ r) = \set{ P = (a,~b) \in \mathbb{R}^2: ~ d(P_0,~ P) = r } $$
De ahí podemos encontrar la ecuación de la circunferencia, sabiendo que podemos expresar la [[Distancia euclidiana|distancia]] como $$ \sqrt{(a - a_0)^2 + (b - b_0)^2} = r $$
Por simplicidad se expresa de la siguiente forma $$ (a - a_0)^2 + (b - b_0)^2 = r^2 $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```