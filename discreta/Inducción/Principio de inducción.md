---
dia: 2024-08-08
tags:
  - discreta/Inducción
  - nota/facultad
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
referencias:
  - "412"
etapa: empezado
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El principio de inducción parte de dos principios, los principios no se pueden probar, por eso se llaman principios. Si tomamos uno como un axioma, entonces el otro se transforma en un teorema

## Principio del Buen Orden
---
Todo [[Subconjunto|subconjunto]] no vacío de $\mathbb{N}$ tiene un primer elemento


## Principio de inducción
---
Sea $p(n)$ una [[Proposición|proposición]] tal que para cada $n \in \mathbb{N}$ verifica
* $\exists n_0 \in \mathbb{N}: ~ p(n_0)$ es verdadera
* $n \ge n_0: ~ p(n) \to p(n + 1)$ es verdadera

Entonces $p(n)$ es verdadera $\forall n \ge n_0$


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```