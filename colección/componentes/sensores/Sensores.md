---
dia: 2024-09-16
tags:
  - colección/componentes/sensor
  - investigación/electrónica/componentes/sensor
  - investigación/índice
  - nota/colección
  - nota/investigacion
referencias:
  - "1287"
aliases:
  - Sensor
vinculoFacultad:
  - tema: Respuesta dinámica
    capitulo: 1
    materia: Control automático
    carrera: Ingeniería electrónica
  - tema: Estrategias de control de periféricos
    capitulo: 4
    materia: Taller de sistemas embebidos
    carrera: Ingeniería electrónica
---
# ¿Qué se va a investigar?
---
Vamos a registrar todos los sensores que vayamos usando a lo largo de las carreras y proyectos

## Resumen
---
En el sentido más amplio un sensor es un dispositivo que detecta eventos o cambios en el ambiente y envía esa información. Donde en general, el sensor envía [[ingeniería electrónica/señales/Señales y sistemas/Señal|señales]] eléctricas a un [[colección/componentes/microprocesadores/Microprocesadores|procesador]] 

Se lo puede clasificar de varias formas, la forma general sería
* Tactile sensor
	* [[ingeniería electrónica/embebidos/Estrategias de control de periféricos/Contact switch|Contact switch]]
	* Optical barriers
	* Nonconctact proximity sensors
* Motor sensor
	* Brush encoders
	* potentiometers
	* Synchros resolvers
	* Optical encoders
	* Magnetic encoders
	* Inductive encoders
	* Capacitive encoders
* Heading sensors
	* Compass
	* Gyroscope
	* Inclinometers
* Acceleration sensor
	* Accelerometer
* Ground beacons
	* [[Global Positioning System (GPS)|GPS]]
	* Active optical or RF beacons
	* Active ultrasonic beacons
	* Reflective beacons
* Active ranging
	* Reflectivity sensors
	* Ultrasonic sensor
	* Laser rangefinder
	* Optical triangulation
	* Structured light
* Motion/speed sensor
	* Doppler radar
	* Doppler sound
* Vision sensor
	* CCD/CMOS camera
	* Visual ranging packages
	* Object tracking packages

## Componentes
---
```dataviewjs
await dv.view("_scripts/dataview/contenido/listaAcumulada", { archivo: dv.current() });
```

# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/referencia/referenciasAcumuladas', { archivo: dv.current() });
```