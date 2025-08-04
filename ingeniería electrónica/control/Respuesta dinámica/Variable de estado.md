---
dia: 2025-03-13
etapa: ampliar
referencias:
  - "899"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
aliases:
  - Vector de estado
vinculoFacultad:
  - "[[ingeniería electrónica/control/Respuesta dinámica/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Las variables de un [[Sistema dinámico|sistema dinámico]] son las variables que constituyen el menor [[Conjunto|conjunto]] de variables que determinan el estado del sistema dinámico. Si al menos se necesitan $n$ variables $x_1,~ x_2,~ \cdots,~ x_n$ para describir completamente el comportamiento de un sistema dinámico, entonces tales $n$ variables son un conjunto de variables de estado

Notemos que estas variables no necesariamente tienen que ser físicamente medibles o cantidades observables

Si se necesitan $n$ variables de estado para describir el sistema dado, estas se pueden considerar los $n$ componentes de un [[Vector|vector]] $x$, este se denomina vector de estado

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```