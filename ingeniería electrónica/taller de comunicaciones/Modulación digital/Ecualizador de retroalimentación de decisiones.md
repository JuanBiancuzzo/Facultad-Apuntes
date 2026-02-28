---
dia: 2026-02-28
etapa: empezado
referencias: []
aliases:
  - Decisión feedback equalizer
  - DFE
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
Este [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Ecualizador|ecualizador]] es [[ingeniería electrónica/señales/Señales y sistemas/Sistema lineal|no lineal]], por lo que es útil para cuando un [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Canal discreto sin memoria|canal]] tiene ceros espectrales, ya que un ecualizador lineal no podría cambiarlo. Este utiliza los [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Ecualizador trasversal|ecualizadores transversales]] para construir un [[ingeniería electrónica/control/Respuesta dinámica/Controlador closed-loop|feedback]] después de un paso de [[ingeniería electrónica/señales/Muestreo e Interpolación/Cuantificación|cuantificación]] que es no lineal, dándole esta característica al ecualizador

%% Diagrama de bloques del ecualizador %%

