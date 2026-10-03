---
dia: 2023-11-12
tags:
  - carrera/ingeniería-en-informática/sisop/Concurrencia
  - carrera/ingeniería-en-informática/concurrentes/Sincronización
  - nota/facultad
vinculoFacultad:
  - tema: Concurrencia
    capitulo: 5
    materia: Sistemas operativos
    carrera: Ingeniería en informática
  - tema: Sincronización
    capitulo: 4
    materia: Programación Concurrente
    carrera: Ingeniería en informática
etapa: empezado
referencias: []
aliases:
  - Problema de sincronización
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La programación [[ingeniería en informática/sisop/Concurrencia/Concurrencia|concurrente]] extiende el [[Modelo secuencial|modelo secuencial]] de programación de un único [[Thread|hilo]] de ejecución. En este [[ingeniería en informática/ingenieria de software 1/Ingeniería de software/Modelo|modelo]] se puede encontrar dos escenarios posibles
1. Un [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]] está compuesto por un conjunto de [[Thread|threads]] y/o [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|procesos]] independientes que operan sobre un conjunto de datos que están completamente separados entre sí y son independientes
2. Un programa está compuesto por un conjunto de thread y/o procesos, que trabajan en forma cooperativa sobre un set de [[Memoria|memoria]] y datos que son compartidos

Ambos escenarios son completamente distintos y tienen distintas formas de tratamiento. El segundo caso, en el cual existe datos que son compartidos merece una atención particular. Este tipo de programa es mucho más complejo de construir que los programa del modelo o caso 1

En un programa que utiliza un modelo de programación cooperativa, la forma de pensar [[Modelo secuencial|secuencial]] no sirve
1. La ejecución del programa depende de la forma en que los threads se intercalan en su ejecución, esto influye en los accesos a la memoria de recursos compartidos
2. La ejecución de un programa puede no ser determinística. Diferentes corridas pueden producir distintos resultados, por ejemplo debido a decisiones del [[Thread scheduler|scheduler]]
3. Los [[Compilador|compiladores]] y el [[Microprocesadores|procesador físico]] pueden reordenar las instrucciones. Los compiladores modernos pueden reordenar las instrucciones para mejorar la performance del programa que se está ejecutando, este reordenamiento es generalmente invisible a los ojos de un solo thread

Teniendo en cuenta lo anterior, la programación concurrente puede incorporar [[Bug|bugs]] que se caracterizan por ser
* Sutiles
* No determinísticos
* No reproducibles

El approach a seguir en estos casos es
1. Estructurar el programa para que resulte fácil el razonamiento concurrente 
2. Utilizar un conjunto de primitivas estándares para sincronizar el acceso a los recursos compartidos
