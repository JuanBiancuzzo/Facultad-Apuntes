---
dia: 2024-10-14
etapa: empezado
referencias:
  - "286"
tags:
  - algoritmos
  - nota/investigacion
aliases:
  - Tolerancia a faltas bizantinas
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
Es una forma en la que una [[Sistema distribuido|red distribuida]] para llegar a un consenso de un valor, incluso cuando algunos nodos de la [[Red|red]] no respondan o respondan con la información incorrecta. Se usa este mecanismo de votación para garantizar que se llegue a una respuesta incluso en caso de fallos en la red. Este problema se deriva del problema de los [[The Byzantine Generals Problem de Leslie Lamport, Robert Shostak, Marshall Pease|generales bizantinos]]



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```