---
dia: 2025-03-03
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
vinculoFacultad:
  - tema: Herramientas de Diseño
    capitulo: 1
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es un estándar utilizado para definir versiones de [[Aplicación Programming Interface|API]] y [[ingeniería en informática/algo 1/Lenguaje C/Biblioteca|librerías]]. Pone el foco en brindar información de retrocompatibilidad de la [[Interfaz|interfaz]]

![[Versionado semántico.png]]

Se incrementa un número de versión
* Major
    * Al introducir cambios incompatibles con la versión anterior
* Minor
    * Al agregar funcionalidad pero mantener retrocompatibilidad
* Patch (aka build)
    * Al introducir correcciones que no afectan la interfaz

