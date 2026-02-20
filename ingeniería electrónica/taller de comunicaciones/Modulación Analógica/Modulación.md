---
dia: 2026-02-19
etapa: empezado
referencias: []
aliases: []
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
La modulación permite adaptar el espectro de frecuencias del mensaje a transmitir al rango de frecuencias de trabajo de los dispositivos y medios que conforman el sistema Transmisor-Canal-Receptor

Una modulación consiste en variar algún parámetro de una señal, conocida como portadora $p(t)$, en función de la señal o mensaje a transmitir $m(t)$, o modulante

## Modulación de amplitud
---
Existen $4$ variantes de modulación de amplitud de la portadora
1. [[Doble Banda Lateral - Portadora Suprimida|Doble Banda Lateral - Portadora Suprimida (DBL-PS)]]
2. [[Doble Banda Lateral - Portadora Fuerte|Doble Banda Lateral - Portadora Fuerte (DBL-PF o AM)]]
3. [[Banda Lateral Única|Banda Lateral Única (BLU)]]
4. [[Banda Lateral Vestigial|Banda Lateral Vestigial (BLV)]]

## Modulación de ángulo
---
Existen $2$ variantes de modulación de ángulo de la portadora
1. Modulación de fase
2. [[Modulación de frecuencia|Modulación de frecuencia (FM)]]