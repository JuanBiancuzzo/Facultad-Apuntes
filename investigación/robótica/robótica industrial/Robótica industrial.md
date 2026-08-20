---
dia: 2026-08-19
estado: Sin empezar
tags:
  - investigación/índice
  - investigación/robótica/robótica-industrial
  - nota/investigacion
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
Un control automatico, reprogramable, multiproposito que puede ser fijo o móvil

Los componentes del mismo generalmente son
* La unidad mecánica, el cual generalmente se entiende como el robot, donde es el mecanismo con [[colección/componentes/actuadores/Actuadores|actuadores]] y [[colección/componentes/sensores/Sensores|sensores]], que ejercería el movimiento y al interacción con el mundo
* La unidad de control, el cual tiene la forma de [[ingeniería electrónica/control/Respuesta dinámica/Controlador|controlar]] la unidad mecánica, este incluye desde el nivel más bajo de controlar cada actuador, hasta la [[Trayectoria|trayectoria]] más compleje que se haya implementado
* La unidad de programación, este es la forma en la que el conjunto interactua con los operadores de la misma, dando las herramientas para crear las secuencias o trayectorias a realizarse

Existen distintos tipos de robots, una clasificación posible es
* [[ingeniería electrónica/robótica industrial/Introducción/Robot de cadena abierta|Robot de cadena abierta]]
* [[ingeniería electrónica/robótica industrial/Introducción/Robot de cadena cerrada|Robot de cadena cerrada]]


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