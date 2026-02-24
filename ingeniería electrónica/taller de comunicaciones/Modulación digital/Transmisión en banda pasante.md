---
dia: 2026-02-24
etapa: empezado
referencias: []
aliases: []
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
Se define la transmisión en banda pasante como aquella donde se pueda modelar el [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Canal discreto sin memoria|canal]] con una [[ingeniería electrónica/señales/Sistemas LTI/Transferencia del sistema|transferencia]] $H_c(\omega)$ que se comporta como un [[ingeniería electrónica/adc/Respuesta en frecuencia/Filtro pasa-bandas|filtro pasa-bandas]] con un [[Ancho de banda|ancho de banda]] $W$ el rango de frecuencias donde la magnitud de la transferencia es constante. El canal puede aplicar una atenuación que representaremos con $\alpha \in (0,~ 1]$, donde $\alpha = 1$ sería el caso ideal sin atenuación

Se utilizan [[ingeniería electrónica/analisis 3/Funciones elementales/Función senoidal|señales senoidal]] donde se podrá modificar la frecuencia, fase y magnitud, permitiendo una mayor variedad de modulaciones