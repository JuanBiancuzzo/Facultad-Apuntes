---
dia: 2026-10-22
etapa: empezado
referencias: []
aliases: 
  - Valor de una empresa#Valor de la empresa
tags:
  - carrera/ingeniería-en-informática/ebt-1/Finanzas
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Finanzas
    capitulo: 4
    materia: Empresas de Bases Tecnológicas 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---



## Valor de la empresa
---
El valor de la empresa se puede calcular como $$ V = \sum_{t = 1}^{\infty} \frac{\text{FF}_t}{(1 + \text{Costo del dinero})^t} $$ donde 
* $\text{FF}_t$ es el [[Flujo de fondos|flujo de fondos]], que representa todo el dinero que entra y sale
* Costo del dinero, que representa la [[ingeniería en informática/ebt 1/Finanzas/Tasa de interés|tasa de interés]] y será el [[ingeniería en informática/ebt 1/Economía/Costo de oportunidad|costo de oportunidad]] perdido por estar en este negocio y no en otro negocio del mismo riesgo
* $t$ es el periodo que se está evaluando
