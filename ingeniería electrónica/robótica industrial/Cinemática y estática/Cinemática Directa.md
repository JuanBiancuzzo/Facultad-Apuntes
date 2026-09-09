---
dia: 2026-09-06
etapa: empezado
referencias:
  - "1204"
aliases:
  - Forward Kinematics
  - FK
tags:
  - carrera/ingeniería-electrónica/robótica-industrial/Cinemática-y-estática
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Cinemática y estática
    capitulo: 3
    materia: Robótica industrial
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
En relación a la [[investigación/robótica/Robótica|robótica]], la cinemática directa refiere a las ecuaciones [[ingeniería electrónica/robótica industrial/Cinemática y estática/Cinemática|cinemáticas]] que permiten computar el [[End-effector|end-effector]] a partir de un conjunto de variables articulares, que llamaremos $q$

El end-effector lo podemos representar con una [[ingeniería electrónica/robótica móvil/Repaso álgebra/Pose|pose]], entonces la cinemática estaría dado por $$ \begin{align} 
	\text{POSE} &= f(q) \\
	A_\text{base}^{tool} &= f(q)
\end{align} $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```