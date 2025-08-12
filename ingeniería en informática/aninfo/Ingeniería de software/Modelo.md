---
dia: 2023-08-27
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - carrera/ingeniería-en-informática/aninfo/Ingeniería-de-software
  - nota/facultad
referencias:
  - "871"
etapa: ampliar
vinculoFacultad:
  - tema: Respuesta dinámica
    capitulo: 1
    materia: Control automático
    carrera: Ingeniería electrónica
  - tema: Ingeniería de software
    capitulo: 1
    materia: Análisis de la información
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es una simplificación de la realidad. Construimos modelos para entender mejor el [[Sistema|sistema]] que estamos desarrollando

Los modelos 
* Nos permiten visualizar un sistema existente o que queremos desarrollar
* Nos permite especificar la estructura o el comportamiento de un sistema
* Proveen guía para la construcción de un sistema
* Documentan las decisiones tomadas

## Influencia de los lenguajes de programación
---
Hay dos grupos de notaciones, unas más orientadas a la descripción de la implementación, y otras más orientadas a la descripción conceptual del sistema

* Idealmente, los modelos empleados en el análisis deberían reflejar las abstracciones del dominio del problema
* Idealmente, los modelos empleados en el diseño deberían reflejar las abstracciones naturales del lenguaje de programación empleado
* En consecuencia, la transición entre análisis y diseño no siempre es fácil
* En la orientación a objetos, la transición es más natural debido a que los objetos reflejan cosas que se encuentran en el mundo real

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```