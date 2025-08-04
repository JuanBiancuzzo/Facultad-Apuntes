---
dia: 2025-03-19
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-electrónica/control/Linealización
  - nota/facultad
aliases:
  - Punto de equilibro estable
  - Punto de equilibrio inestable
vinculoFacultad:
  - "[[ingeniería electrónica/control/Linealización/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dado un [[Sistema|sistema]] $$ \dot{x} = f(x,~ u) $$ si $x_e$, $u_e$ son tales que $f(x_e,~ u_e) = 0$ entonces representan un punto de equilibro

## Propiedades
---
* Si el sistema tiene como condiciones iniciales a $x_e$, $u_e$ entonces el mismo permanecerá en ese punto
* El [[Entorno|entorno]] a esos valores, se llevará a cabo la [[Linealización Jacobiana|linealización]]