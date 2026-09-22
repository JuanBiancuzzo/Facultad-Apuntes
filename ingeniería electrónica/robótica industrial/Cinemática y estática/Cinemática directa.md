---
dia: 2026-09-06
etapa: empezado
referencias:
  - "1204"
aliases:
  - Problema de cinemática directo
  - PCD
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
En relación a la [[investigación/robótica/Robótica|robótica]], utilizando la simplificación de que un robot es la unión de eslabónes unidos por [[ingeniería electrónica/robótica industrial/Cinemática y estática/Articulación#^articulacion-simple|articulaciones simples]], la cinemática directa refiere a las ecuaciones [[ingeniería electrónica/robótica industrial/Cinemática y estática/Cinemática|cinemáticas]] que permiten computar el [[End-effector|end-effector]] a partir de un conjunto de variables articulares, que llamaremos $q$

El end-effector lo podemos representar con una [[ingeniería electrónica/robótica móvil/Repaso álgebra/Pose|pose]], entonces la cinemática estaría dado por $$ \begin{align} 
	\text{POSE} &= f(q) \\
	A_\text{base}^\text{tool} &= f(q)
\end{align} $$
epresentando cada eslabón con su propia [[ingeniería en informática/analisis 2/Nomenclatura/Sistema cartesiano|terna]], podemos representar su movimiento por [[ingeniería en informática/algebra 2/Transformaciones lineales/Rototranslación|matrices de rototranslación]], tomando que la base la llamaremos eslabón $0$ y la tool el eslabón $n$, podemos representar el problema directo como $$ 
	A_\text{base}^\text{tool} = A_0^1(q_1) \cdot A_1^2(q_2) \cdots A_{n-1}^n(q_n)
 $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```