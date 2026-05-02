---
dia: 2026-05-02
tags:
  - proyecto-práctico/Sistema-operativo-distribuido
  - nota/proyecto
---
# Progreso
---
Este proyecto es muy grande, por lo que empezar con una separación de los conceptos que se van a plantear es buena idea
* Predicción del peso de un programa
	* Se intentaría estimar cual es el peso real de un programa para poder definir, en primer lugar, a que dispositivo se debería mandar
* [[investigación/ciencias de la computación/sistemas operativos/File system/File system|File system]] distribuido
	* Los archivos en general del sistema deberán estar distribuidos en todo el sistema, para poder actuar exactamente igual en cualquiera de los dispositivos
* Desvincular los [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|procesos]]
	* Se busca que todo input sea manejable de cualquier lugar, porque el proceso podría estar corriendo en un lugar distinto a donde se esta ingresando los inputs
	* Se busca que toda salida sea mostrable en cualquier otro lugar, por lo que cualquier [[File descriptor|file descriptor]] de salida, y el output de la pantalla

