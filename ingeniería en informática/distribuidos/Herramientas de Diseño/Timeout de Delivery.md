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
Todo [[Paquete|mensaje]] enviado va a ser recibido antes de un tiempo $T_{Dmax}$ conocido, es decir, que $T_{Dmax}$ es una [[Cota superior|cota superior]] de los [[Tiempo de transmisión|tiempos de delivery]] $t_D^p(m)$ para $\forall p \in P$ y $\forall m \in M$ donde $P$ es el [[Conjunto|conjunto]] de receptores y $M$ el conjunto de mensajes

![[Tiempo y timeout de delivery.png]]

