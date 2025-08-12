---
dia: 2025-04-07
etapa: terminado
referencias: 
tags:
  - carrera/ingeniería-electrónica/estoca/Repaso
  - carrera/ingeniería-electrónica/proba/Teoría-de-probabilidades
  - carrera/ingeniería-en-informática/proba/Teoría-de-probabilidades
  - nota/facultad
vinculoFacultad:
  - tema: Repaso
    capitulo: "1"
    materia: Procesos estocásticos
    carrera: Ingeniería electrónica
  - tema: Teoría de probabilidades
    capitulo: 1
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Para multiples [[Evento|eventos]] $A_1,~ \cdots,~ A_n$ diremos que son mutuamente independientes si $$ \forall \mathcal{I} \subseteq \set{ 1,~ \cdots,~ n }, ~~~~ \mathbb{P}\left( \bigcap_{i \in \mathcal{I}} A_i \right) = \prod_{i \in \mathcal{I}} \mathbb{P} (A_i) $$
Es decir, para cualquier subconjunto de eventos, son [[Eventos independientes|eventos independientes]]
