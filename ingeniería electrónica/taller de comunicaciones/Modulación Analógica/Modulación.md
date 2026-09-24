---
dia: 2026-02-19
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Modulación-Analógica
  - nota/facultad
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Modulación-digital
vinculoFacultad:
  - tema: Modulación Analógica
    capitulo: 2
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
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
La modulación permite adaptar el espectro de frecuencias del mensaje a transmitir al rango de frecuencias de trabajo de los dispositivos y medios que conforman el sistema Transmisor-Canal-Receptor

![[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/img/Modulation_categorization.svg]]

%% Reemplazar imagen por diagrama hecho por mi %%

### Señal analógica
---
Para [[Modulación analógica|modulaciones analógicas]] se tiene
* [[Doble Banda Lateral - Portadora Suprimida|Doble Banda Lateral - Portadora Suprimida (DBL-PS)]]
* [[Doble Banda Lateral - Portadora Fuerte|Doble Banda Lateral - Portadora Fuerte (DBL-PF o AM)]]
* [[Modulación de frecuencia|Modulación de frecuencia (FM)]]
* [[Banda Lateral Única|Banda Lateral Única (BLU)]]
* [[Banda Lateral Vestigial|Banda Lateral Vestigial (BLV)]]

Para [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Modulación digital|modulaciones digitales]] se tiene
* [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Amplitude Shift Keying|Amplitude Shift Keying (ASK)]]
* [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Frequency Shift Keying|Frequency Shift Keying (FSK)]]
* [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Phase Shift Keying|Phase Shift Keying (PSK)]]
* [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Quadrature Amplitud Modulation|Quadrature Amplitud Modulation (QAM)]]

### Señal digital
---
Para modulación analógica, se tiene
* [[ingeniería electrónica/embebidos/Estrategias de control de periféricos/Modulación por ancho de pulsos|Pulse Width Modulation (PWM)]]
* [[Pulse Position Modulation (PPM)|Pulse Position Modulation (PPM)]]