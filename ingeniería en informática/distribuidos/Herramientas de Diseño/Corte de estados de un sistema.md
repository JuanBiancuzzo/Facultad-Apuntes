---
dia: 2025-03-03
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
aliases:
  - Corte de estados consistente de un sistema#Consistencia
vinculoFacultad:
  - "[[ingeniería en informática/distribuidos/Herramientas de Diseño/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se define un corte como la [[Operador OR|unión]] de [[Subconjunto|subconjuntos]] de [[Historia de estados de un sistema|historias]] de todos los [[Proceso|procesos]] del [[Sistema|sistema]] hasta cierto evento $k$ de cada proceso $$ C_k = \bigcup_p^P h_{p,~ k} $$ donde $P$ es el [[Conjunto|conjunto]] de procesos del sistema

## Consistencia
---
Un corte es consistente si por cada evento que contiene, también contiene a aquellos eventos que ocurren antes de que dicho evento $$ \forall e \in C ~~ \text{si} ~~ f \to e \implies f \in C  $$

![[Corte consistente.png]]
