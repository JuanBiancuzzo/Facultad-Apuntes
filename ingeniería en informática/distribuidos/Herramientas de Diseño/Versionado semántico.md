---
dia: 2025-03-03
etapa: empezado
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es un estándar utilizado para definir versiones de [[Aplicación Programming Interface|API]] y [[Biblioteca|librerías]]. Pone el foco en brindar información de retrocompatibilidad de la [[Interfaz|interfaz]]

![[Versionado semántico.png]]

Se incrementa un número de versión
* Major
    * Al introducir cambios incompatibles con la versión anterior
* Minor
    * Al agregar funcionalidad pero mantener retrocompatibilidad
* Patch (aka build)
    * Al introducir correcciones que no afectan la interfaz

