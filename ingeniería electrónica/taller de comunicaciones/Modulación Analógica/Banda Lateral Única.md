---
dia: 2026-02-19
etapa: empezado
referencias: []
aliases:
  - BLU
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Modulación-Analógica
  - nota/facultad
vinculoFacultad:
  - tema: Modulación Analógica
    capitulo: 2
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Esta [[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/Modulación|modulación]] parte de la [[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/Doble Banda Lateral - Portadora Suprimida|Doble Banda Lateral - Portadora Suprimida]], pero aplicando un filtro el cual resulta en suprimir una de las bandas laterales, produciendo que el [[Ancho de banda|ancho de banda]] de la señal modulada sea igual que la del mensaje

![[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/img/Banda Lateral Única.png]]

Su generación se torna complicada si el mensaje posee componentes de baja frecuencia, ya que el filtrado de una banda lateral distorsiona dicho mensaje