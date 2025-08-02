---
dia: 2023-08-26
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - carrera/ingeniería-en-informática/aninfo/Diseño-de-software
  - carrera/ingeniería-en-informática/concurrentes/Introducción
  - carrera/ingeniería-en-informática/sisop/La-abstracción-de-proceso
  - nota/facultad
referencias:
  - "789"
  - "871"
  - "898"
  - "1020"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El diccionario Merriam-Webster define un proceso como una operación o un desarrollo natural progresivamente continuo, marcado por una serie de cambios graduales que se suceden unos a otros de una forma relativamente fija y que conducen a un resultado o propósito determinados; o una operación artificial o voluntaria que se hace de forma progresiva y que consta de una serie de acciones o motivos controlados, sistemáticamente dirigidos hacia un resultado o propósito determinado

## En teoría de control
---
Un proceso es cualquier operación que se va a controlar. El componente central de un [[Controlador closed-loop|sistema feedback]] es el proceso, el cual su salida es controlada

## En ciencia de computación
---
"Es un conjunto de actividades que transforma una entrada en una salida y que consume recursos. También se lo puede definir como un programa en ejecución con derechos restringidos."

"Un proceso es la ejecución de un programa de aplicación con derechos restringidos; el proceso es la abstracción que provee el [[Kernel|kernel]] del [[Sistema operativo|sistema operativo]] para la ejecución protegida"

"Es simplemente un [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]] que se está ejecutando en un instante dado"

### Un proceso incluye
---
* Los [[Archivo|archivos]] abiertos
* Las señales pendientes
* Datos internos del [[Kernel|kernel]]
* El estado completo del [[Microprocesadores|procesador]]
    * Esto incluye los [[Registro|registros]] que usa el procesador
* Un espacio de [[Dirección de memoria|direcciones de memoria]]
    * Esto incluye la memoria que usa como donde están el código del mismo proceso
* Uno o más [[Thread|hijos de ejecución]]

### API's
---
Las acciones básicas que todo [[Sistema operativo|SO]] debe proveer sobre la [[Virtualización del procesador|abstracción de la CPU]]
* Creación (Create):
	* Todo sistema operativo debe incluir una forma de crear un nuevo proceso
* Destrucción (Destroy):
	* Así como existe una interface para crear un proceso debe existir una interface para destruirlo por la fuerza
* Espera (Wait):
	* A veces es útil esperar a que un proceso termine su ejecución por ende algún tipo de interface de esperar debe ser provista
* Control vario (Miscellaneous Control):
	* Además de esperar o matar a un proceso, otros tipos de operaciones deben poder realizarse. Por ejemplo, suspender su ejecución por un tiempo y luego reanudarla
* Estado (Status):
	* Tiene que existir una forma de saber sobre la situación del proceso y su [[Estados de un proceso|estado]]. Cuánto hace que se está ejecutando, en que estado se encuentra, etc.

### Contexto de un proceso
---
![[Contexto del proceso#Definición]]


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```