---
dia: 2025-04-21
etapa: ampliar
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/estoca/Introducción-a-procesos-aleatorios
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Un [[Proceso estocástico|proceso]] $X(t)$ es estacionario de segundo orden si $$ F_{X(t_1),~ X(t_2)} = F_{X(0),~ X(t_2 - t_1)} = F_{X(t_1 - t_2),~ X(0)}, ~~~~ \forall t_1,~ t_2 \in \mathcal{T} $$
Luego $F_{X(t_1),~ X(t_2)}$ depende solamente de $|t_2 - t_1|$, así como las [[Probabilidad|probabilidades]] de [[Evento|eventos]] que involucren a $X(t_1)$ y $X(t_2)$  $$ E[g(X(t_1),~ X(t_2))] = h(|t_2 - t_1|) $$ donde $h$ es una [[Función|función]] cualquiera y $E[\cdot]$ es la [[Esperanza|esperanza]]

