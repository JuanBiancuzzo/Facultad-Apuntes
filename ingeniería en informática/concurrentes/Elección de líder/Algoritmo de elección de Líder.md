---
dia: 2026-11-06
etapa: empezado
referencias: []
aliases: []
tags:
  - nota/facultad
  - carrera/ingeniería-en-informática/concurrentes/Elección-de-líder
ejercicios: []
vinculoFacultad:
  - tema: Elección de líder
    capitulo: 10
    materia: Programación Concurrente
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
En los [[ingeniería en informática/distribuidos/Introduccion/Sistema distribuido|sistemas distribuidos]], a veces se requiere de un coordinador como un rol especial el cual necesita centralizar las decisiones

Se asumen que todos los [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|procesos]] tienen un `id` único, se ejecuta un proceso por máquina y conocen el número de los demás. Tiene como objetivo definir un único líder, por lo que no puede terminar el algoritmo sin líder y ni multiples líders

Entre estos algoritmos se encuentran
* [[ingeniería en informática/concurrentes/Elección de líder/Algoritmo Bully de elección de Líder|Algoritmo Bully]]
* [[ingeniería en informática/concurrentes/Elección de líder/Algoritmo Ring de elección de Líder|Algoritmo Ring]]
