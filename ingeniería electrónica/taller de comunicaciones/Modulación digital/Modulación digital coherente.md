---
dia: 2026-02-28
etapa: empezado
referencias: []
aliases:
  - Modulación digital no coherente
  - Detección coherente
  - Detección no coherente
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Modulación-digital
  - nota/facultad
vinculoFacultad:
  - tema: Modulación digital
    capitulo: 3
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Las [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Modulación digital|modulaciones]] se definen coherentes cuando el transmisor y receptor conocen la fase de la onda transmitida, donde se requiere la sincronización de fase en el receptor para conocer la fase. Por contraste, una modulación no coherente es la que no necesita conocerla

Métodos de sincronización puede ser
* [[Phase Locked Loop|Phase Locked Loop (PLL)]]

La detección coherente produce una menor probabilidad de error, pero con la desventaja de la lógica extra para extraer la fase como mencionamos con un método de sincronización

La detección no coherente aumenta la probabilidad de error en relación a su contraparte coherente, pero permite no necesitar métodos de obtener la información de la fase

