---
dia: 2024-10-14
etapa: ampliar
referencias:
  - "286"
tags:
  - algoritmos
  - nota/investigacion
aliases:
  - Tolerancia a faltas bizantinas
orden: 6
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
Es una forma en la que una [[Sistema distribuido|red distribuida]] para llegar a un consenso de un valor, incluso cuando algunos nodos de la [[Red|red]] no respondan o respondan con la información incorrecta. Se usa este mecanismo de votación para garantizar que se llegue a una respuesta incluso en caso de fallos en la red. Este problema se deriva del problema de los [[The Byzantine Generals Problem de Leslie Lamport, Robert Shostak, Marshall Pease|generales bizantinos]]

En este se prueba que se necesita $3m + 1$ procesos, donde $m$ es la cantidad de [[Nodo|nodos]] que no funcionan correctamente, para llegar a un conceso correcto, por lo que nos pone una [[Cota superior|cota superior]] a la cantidad de nodos no fiables siendo esta, un menor a $1/3$ de la cantidad de procesos

## Tipos de fallas
---
Hay dos tipos de fallas a considerar, las llamadas "fail-stop" en donde el nodo deja de operar, y y un una falla arbitraria de un nodo que puede ser
* Falla en devolver un resultado
* La respuesta es incorrecta
* Una respuesta que intencionalmente es incorrecta
* La respuesta intencionada para un sistema es enviada a otro sistema

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```