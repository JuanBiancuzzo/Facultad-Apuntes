---
dia: 2023-11-15
materia: sisop
capitulo: 2
---
### Definición
---
La información de control sobre un [[Proceso]] es mantenida en dos per process data structures. La [[Estructura Proc]] y la user area. Estas estructuras dependen de la implementación del [[Kernel]] mismo.

La user area es la parte del espacio del proceso, q se mapea y es visible por el proceso solo cuando este está siendo ejecutado. 

El contenido de un user area
* La process control block:
	* Guarda el [[Hardware]] context cuando el proceso no se esta ejecutando
* Un puntero a la [[Estructura Proc]] del proceso
* El UID y GID real
* Argumentos para, y valores de retorno o errores hacia, la [[System call]] actual
* Manejadores de señales
* Información sobre las [[Contexto del nivel del usuario|area de memoria]]
* La tabla de descriptores de archivos abiertos (Open [[File descriptor|file descriptor]] table)
* Un puntero al [[Directorio]] actual
* Datos estadísticos del uso de la [[CPU]], información de perfilado, uso de disco y limites de recursos.