---
dia: 2026-02-19
etapa: empezado
referencias: []
aliases:
  - DBL-PF
  - AM
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
Esta [[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/Modulación|modulación]] propone una portadora $p(t) = \cos(2\pi f_p ~ t)$ y por lo tanto la señal a transmitir es $$ \phi_{DBL-PF}(t) = [m(t) + A] ~ p(t) = [m(t) + A] ~ \cos(2\pi f_p ~ t) $$

Esta modulación traslada el espectro de $m(t)$ a la frecuencia de la portadora $f_p$, en el proceso termina duplicando el [[Ancho de banda|ancho de banda]] del mensaje 

La adición de una componente continua permite emplear un detector de envolvente en el receptor, más simple, evitando la detección sincrónica y abaratando costos de los receptores. Como contraparte, el transmisor requiere mayor [[ingeniería electrónica/intro/Potencia/Potencia|potencia]] al inyectar la componente $A$

Se define el índice de modulación de AM como $m_A = \frac{\max |m(t)|}{A} < 1$

![[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/img/Doble Banda Lateral - Portadora Fuerte.png]]