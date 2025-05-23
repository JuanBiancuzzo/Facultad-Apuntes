---
dia: 2023-08-24
tags:
  - carrera/ingeniería-en-informática/fisica-2/Electrostática-en-el-vacío
  - nota/facultad
  - carrera/ingeniería-electrónica/electro/Campos-eléctricos-y-magnéticos
  - carrera/ingeniería-electrónica/fisica-2/Electrostática-en-el-vacío
referencias:
  - "199"
aliases:
  - Fuerza eléctrica
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La magnitud de las fuerzas eléctricas con las que interactúan dos cargas puntuales en reposo es directamente proporcional al producto de la magnitud de ambas cargas e inversamente proporcional al cuadrado de la [[Distancia euclidiana|distancia]] que las separa y tiene la dirección de la línea que las une. La fuerza es de repulsión si las cargas son de igual signo, y de atracción si son de signo contrario<sup><a href="#ref-199" style="color: inherit; text-decoration: none;">[199]</a></sup> $$ \bar{F}_{ij} = \frac{1}{4\pi \epsilon_0} \frac{q_i ~ q_j}{\lVert \bar{r_i} - \bar{r_j} \rVert^3 } ~ (\bar{r_i} - \bar{r_j}) $$ donde $\epsilon_0$ es la [[Permitividad eléctrica|permitividad del vacío]] 

Visto desde el punto de vista del [[Campo eléctrico|campo eléctrico]], podemos plantearlo como $$ \vec{F} = q ~ \vec{E} $$
# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```