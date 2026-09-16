---
dia: 2026-08-19
estado: Empezando con el contenido de la facultad
etapa: empezado
aliases:
  - Robot industrial
tags:
  - investigación/índice
  - investigación/robótica/robótica-industrial
  - nota/investigacion
vinculoFacultad:
  - tema: Introducción
    capitulo: 1
    materia: Robótica industrial
    carrera: Ingeniería electrónica
  - tema: Cinemática y estática
    capitulo: 3
    materia: Robótica industrial
    carrera: Ingeniería electrónica
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/superTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a investigar el área de la robótica, especificamente donde se busca la aplicación la exactitud y repetibilidad, en ambientes controlados

## Resumen
---
#carrera/ingeniería-electrónica/robótica-industrial/Introducción
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
Un [[ingeniería electrónica/control/Respuesta dinámica/Controlador|control automatico]], reprogramable, multiproposito que puede ser fijo o móvil

Los componentes del mismo generalmente son
* La unidad mecánica, el cual generalmente se entiende como el robot, donde es el mecanismo con [[colección/componentes/actuadores/Actuadores|actuadores]] y [[colección/componentes/sensores/Sensores|sensores]], que ejercería el movimiento y al interacción con el mundo
* La unidad de control, el cual tiene la forma de controlar la unidad mecánica, este incluye desde el nivel más bajo de controlar cada actuador, hasta la [[Trayectoria|trayectoria]] más compleje que se haya implementado
* La unidad de programación, este es la forma en la que el conjunto interactua con los operadores de la misma, dando las herramientas para crear las secuencias o trayectorias a realizarse

Existen distintos tipos de robots, una clasificación posible es
* [[ingeniería electrónica/robótica industrial/Introducción/Robot de cadena abierta|Robot de cadena abierta]]
* [[ingeniería electrónica/robótica industrial/Introducción/Robot de cadena cerrada|Robot de cadena cerrada]]

La abstracción más simple está dada por eslabones, y [[Articulación|articulaciones]], donde los eslabones unen las articulaciones del [[investigación/robótica/Robótica|robot]] y para el análisis dado en robótica industrial, cumple las condicions de un [[Cuerpo rígido|cuerpo rígido]]


## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/contenido/listaAcumulada", { archivo: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/referencia/referenciasAcumuladas', { archivo: dv.current() });
```