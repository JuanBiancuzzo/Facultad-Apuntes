---
dia: 2024-09-01
tags:
  - carrera/ingeniería-electrónica/electro/Campos-eléctricos-y-magnéticos
  - carrera/ingeniería-electrónica/fisica-2/Electrostática-en-conductores-y-dieléctricos
  - carrera/ingeniería-electrónica/fisica-2/Electrostática-en-el-vacío
  - carrera/ingeniería-en-informática/fisica-2/Electrostática-en-conductores-y-dieléctricos
  - carrera/ingeniería-en-informática/fisica-2/Electrostática-en-el-vacío
  - nota/facultad
aliases:
  - Constante dieléctrica
  - Permitividad del vacío#^permitividad-vacio
  - Permitividad dieléctrica relativa#Permitividad dieléctrica relativa
referencias:
  - "210"
etapa: ampliar
vinculoFacultad:
  - "[[ingeniería electrónica/electro/Campos eléctricos y magnéticos/Resumen.md]]"
  - "[[ingeniería en informática/fisica 2/Electrostática en conductores y dieléctricos/Resumen.md]]"
  - "[[ingeniería en informática/fisica 2/Electrostática en el vacío/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La permitividad eléctrica (llamada también constante dieléctrica para [[Dieléctrico|dieléctricos homogéneos]]) es un parámetro físico de los materiales que describe cuánto son afectados por un [[Campo eléctrico|campo eléctrico]]

La permitividad eléctrica del vacío es constante y está dada por $\epsilon_0 = 8.8541\times10^{-12}~\frac{C^2}{Nm^2}$ ^permitividad-vacio

## Permitividad dieléctrica relativa
---
Es un factor que representa la relación entre la densidad de cargas antes y después de introducir un [[Dieléctrico|dieléctrico]] $$ \begin{matrix} 
    \vec{E} = \epsilon_r \vec{E}_0 && C = \epsilon_r C_0
\end{matrix} $$

La permitividad indica el cambio en el campo eléctrico dentro del dieléctrico, lo que a su vez modifica la capacidad del [[Capacitor|capacitor]]


# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```