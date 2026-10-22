---
dia: 2026-10-22
etapa: empezado
referencias: []
aliases: 
  - Return on Investment
  - ROI
tags:
  - carrera/ingeniería-en-informática/ebt-1/Finanzas
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Finanzas
    capitulo: 4
    materia: Empresas de Bases Tecnológicas 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
El ROI o retorno de inversión es una métrica financiera que compara la rentabilidad de una inversión con el costo de la misma. Está dada por la ecuación $$ \text{ROI} = \frac{\text{Ganancia neta}}{\text{Inversión total}} \cdot 100 = \frac{\text{Ingresos totales} - \text{Costos totales}}{\text{Inversión total}} \cdot 100 $$
Donde
* Ganancia neta es la diferencia entre los ingresos obtenidos y los costos totales de la inversión
* Inversión total es el monto inicial invertido

Para distintos valores de ROI
* $<0\%$ sugiere que la inversión ha resultado en pérdidas
* Un $0\%$ indica que no se han obtenido ni ganancias ni pérdidas 
* Entre $0\%$ y $10\%$ indica que en retorno es bajo, solo es aceptable en proyectos de bajo riesgo
* Entre $10\%$ y $30\%$ indica que en retorno es moderado, puede ser aceptable en proyectos de bajo riesgo
* $>30\%$ en general se lo considera rentable
* $>100\%$ muestra que la inversión ha duplicado su valor, recuperando el monto invertido más una ganancia igual
