---
dia: 2023-11-15
tags:
  - ingeniería-en-informática/sisop/La-abstracción-de-proceso
  - nota/facultad
---
# Definición
---
La información de control sobre un [[Proceso]] es mantenida en dos per process data structures. La [[Estructura Proc]] y la user area. Estas estructuras dependen de la implementación del [[Kernel]] mismo.

La user area es la parte del espacio del proceso, q se mapea y es visible por el proceso solo cuando este está siendo ejecutado. 

El contenido de un user area
* La process control block:
	* Guarda el [[Hardware]] context cuando el proceso no se esta ejecutando
* Un puntero a la [[Estructura Proc]] del proceso
* El UID y GID real
* Argumentos para, y valores de retorno o errores hacia, la [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call]] actual
* Manejadores de señales
* Información sobre las [[Contexto del nivel del usuario|area de memoria]]
* La tabla de descriptores de archivos abiertos (Open [[File descriptor|file descriptor]] table)
* Un puntero al [[Directorio]] actual
* Datos estadísticos del uso de la [[Procesador|Procesador]], información de perfilado, uso de disco y limites de recursos.