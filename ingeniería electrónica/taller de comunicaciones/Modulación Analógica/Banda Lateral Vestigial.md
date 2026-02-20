---
dia: 2026-02-19
etapa: empezado
referencias: []
aliases:
  - BLV
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
Esta [[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/Modulación|modulación]] parte de la [[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/Doble Banda Lateral - Portadora Suprimida|Doble Banda Lateral - Portadora Suprimida]], pero aplicando un filtro que resulte en suprimir parcialmente una de las bandas laterales, produciendo que el [[Ancho de banda|ancho de banda]] de la señal modulada sea ligeramente superior al del mensaje, pero mucho menor al doble

![[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/img/Banda Lateral Vestigial.png]]

Suprimir parcialmente permite corregir los inconvenientes de la generación de [[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/Banda Lateral Única|BLU]] y tiene una mejor utilización del ancho de banda en relación a las modulaciones de DBL ([[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/Doble Banda Lateral - Portadora Suprimida|DBL-PS]] y [[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/Doble Banda Lateral - Portadora Fuerte|DBL-PF]]), es  la modulación empleada en las [[Televisión analógica|TV analógica]]