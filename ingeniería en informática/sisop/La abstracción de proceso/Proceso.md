---
dia: 2023-08-26
tags:
  - ingeniería-en-informática/sisop/La-abstracción-de-proceso
  - nota/facultad
  - ingeniería-en-informática/aninfo/Diseño-de-software
---
# Algunas definiciones
---
"Es un conjunto de actividades que transforma una entrada en una salida y que consume recursos. También se lo puede definir como un programa en ejecución con derechos restringidos."

"Un proceso es la ejecución de un programa de aplicación con derechos restringidos; el proceso es la abstracción que provee el [[Kernel|kernel]] del [[Sistema operativo|sistema operativo]] para la ejecución protegida"

"Es simplemente un [[Programa|programa]] que se está ejecutando en un instante dado"

## Un proceso incluye
---
* Los [[Archivo|archivos]] abiertos
* Las señales pendientes
* Datos internos del [[Kernel|kernel]]
* El estado completo del [[Procesador|procesador]]
* Un espacio de [[Dirección de memoria|direcciones de memoria]]
* Uno o más [[Thread|hijos de ejecución]]

## API's
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

## Contexto de un proceso
---
![[Contexto del proceso#Definición]]