---
dia: 2026-08-20
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/robótica-móvil/Locomoción
  - nota/facultad
vinculoFacultad:
  - tema: Locomoción
    capitulo: 2
    materia: Robótica móvil
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Este tipo de [[investigación/robótica/robótica móvil/Robótica móvil|robot]] se caracteriza por su disposición de las ruedas, especificamente $2$ [[ingeniería electrónica/robótica móvil/Locomoción/Locomoción terrestre#^fija|ruedas fijas]] y una [[ingeniería electrónica/robótica móvil/Locomoción/Locomoción terrestre#^giratoria|rueda giratoria]] 

![[ingeniería electrónica/robótica móvil/Locomoción/img/Robot diferencial.png|150]]

## Cinemática
---
Para describir el [[Cinemática|movimiento del robot]] en términos de movimiento de sus componentes, es necesario mapear el movimiento en el marco de referencia global al movimiento en el marco de referencia local del robot

![[ingeniería electrónica/robótica móvil/Locomoción/img/Terna robot diferencial.png|300]]

Utilizando una [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|matriz de rotación]] ${}^{R}R_{I} = R(\theta)$, se puede mapear las velocidades $\left( \dot{x},~ \dot{y},~ \dot{\theta} \right)$ en el marco de referencia global $\Set{ X_I,~ Y_I }$ a velocidades en términos del marco de referencia local $\Set{ X_R,~ Y_R }$ $$ \dot{R}_{\xi} = {}^R R_I ~ \dot{I}_{\xi} $$
![[ingeniería electrónica/robótica móvil/Locomoción/img/Cinemática directa de robot diferencial.png|500]]

El modelo de cinemática, se plantea en términos del marco de referencia local $I_{\xi}$ y está dado por $$ \dot{I}_{\xi} = \begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} = f\left( l,~ r,~ \theta,~ \dot{\varphi}_1,~ \dot{\varphi}_2 \right) $$ donde
 * $\displaystyle\frac{l}{2}$ es la [[Distancia|distancia]] de cada rueda al punto $p$ (punto en el medio del eje de las ruedas)
 * $r$ es el radio de las ruedas
 * $\dot{\varphi}_1$ y $\dot{\varphi}_2$ la [[Velocidad angular|velocidad de giro]] de la rueda derecha e izquierda, respectivamente

Primero, considerando la contribución de la velocidad de giro de cada rueda a la velocidad de translación en el punto $p$ en la dirección $+X_R$. Teniendo en cuenta que la velocidad máxima será cuando ambas ruedas vayan a la máxima velocidad, 
