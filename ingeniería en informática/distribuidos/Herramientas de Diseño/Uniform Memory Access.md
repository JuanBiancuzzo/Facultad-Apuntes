---
dia: 2025-03-04
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
aliases:
  - UMA
vinculoFacultad:
  - "[[ingeniería en informática/distribuidos/Herramientas de Diseño/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta estrategia para compartir [[Memoria|memoria]], tiene el mismo tiempo de acceso a la memoria para todos los [[Microprocesadores|procesadores]], con el mismo [[Ancho de banda|ancho de banda]] compartido para todos. Esta estrategia tiene una eficacia balanceada para [[Aplicación|aplicaciones]] de uso general

![[Uniform Memory Access.png]] ^representacion

Su gran ventaja es su simplicidad en comparación a la estrategia de [[Non Uniform Memory Access|NUMA]], pero tiene la desventaja de ser poco escalable, ya que al agregar procesadores el ancho de banda se mantiene y por lo tanto la velocidad de acceso en promedio baja