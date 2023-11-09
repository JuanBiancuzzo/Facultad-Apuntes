---
dia: 2023-08-26
materia: sisop
capitulo: 2
---
### Definición
---
Es un conjunto de actividades que transforma una entrada en una salida y que consume recursos. También se lo puede definir como un programa en ejecución con derechos restringidos.

Un proceso está formado por:

* Un programa:
	* Instrucciones que conforman el programa a ejecutar
* Datos del usuario:
	* Espacio de memoria modificable por el usuario, por ejemplo: datos propios del programa, heap
* Pila del sistema: 
	* Se utiliza para almacenar parámetros y direcciones de retorno el llamado a subrutinas
* Estructuras de datos del kernel:
	* Fila en la tabla de procesos: PCB (Process control block)

Podemos decir que un proceso es una instancia de un programa en ejecución