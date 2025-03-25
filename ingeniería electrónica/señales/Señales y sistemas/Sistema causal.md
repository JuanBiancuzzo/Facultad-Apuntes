---
dia: 2024-03-14
tags:
  - carrera/ingeniería-electrónica/señales/Señales-y-sistemas
  - nota/facultad
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
referencias:
  - "873"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un [[Sistema|sistema]] es causal cuando su salida al tiempo $t$ no puede depender de la entrada $x(\tau)$ con $\tau > t$. En otras palabras la salida depende únicamente del presente y del pasado de la entrada (no del futuro)

Se dice que el sistema es no causal cuando su salida depende de valores del futuro. También lo podemos ver si $h(t)$ la [[Respuesta en frecuencia|respuesta al impulso]] tiene valores distintos de $0$ para valores de $t < 0$, ya que implicaría que tiene una respuesta para antes de que la entrada empiece a aplicarse

Se dice que el sistema es anti-causal cuando su salida depende únicamente del presente y del futuro

## Nota
---
Para aplicaciones de tiempo real, el sistema sí o sí tiene que ser causal

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```