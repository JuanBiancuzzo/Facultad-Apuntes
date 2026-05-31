---
dia: 2026-05-30
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/quimica/Reacciones-químicas/1
  - nota/facultad
vinculoFacultad:
  - tema: Reacciones químicas
    capitulo: 9
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
El rendimiento de una [[ingeniería electrónica/quimica/Reacciones químicas/Reacción química|reacción química]] es la relación entre el [[ingeniería electrónica/quimica/Reacciones químicas/Reacción química#^producto|productos]] producidos dados una cantidad de [[ingeniería electrónica/quimica/Reacciones químicas/Reacción química#^reactivo|reactivos]]. Porcentualmente se calcula como $$ R\% = \frac{\text{cantidad de producto obtenida experimentalmente}}{\text{cantidad de producto calculado estequimétriccamente}} \cdot 100 $$

El motivo de obtener menos productos que la cantidad que se espera por las relaciones estequiometricas pueden ser 
* [[ingeniería electrónica/quimica/Reacciones químicas/Pureza de un reactivo|Impureza de algún reactivo]]
* Pasividad de algún reactivo, cuando un reactivo deja de reaccionar 
* Pérdidas mecánicas, cuando no se llega a medir todo el resultado
* Reacciones secundarias, cuando algunos reactivos y algunos productos generan otra reacción
* Reacciones reversibles, llegando a un equilibrio químico

