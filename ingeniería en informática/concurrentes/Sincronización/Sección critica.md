---
dia: 2026-10-01
etapa: empezado
referencias: []
aliases: []
tags:
  - nota/facultad
  - carrera/ingeniería-en-informática/concurrentes/Sincronización
ejercicios: []
vinculoFacultad:
  - tema: Sincronización
    capitulo: 4
    materia: Programación Concurrente
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La sección crítica se entiende como parte del código que un solo [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|proceso]] puede ejectura en cada momento

En el contexto de [[ingeniería en informática/sisop/Concurrencia/Concurrencia#Corrección|corrección de un programa asincrónico]], la sección crítica debe progresar (y finalizar eventualmente) y las no críticas no requiere progreso (el proceso puede terminar o entrar en un [[ingeniería en informática/taller/Sintaxis/Loop|loop]] infinito)

