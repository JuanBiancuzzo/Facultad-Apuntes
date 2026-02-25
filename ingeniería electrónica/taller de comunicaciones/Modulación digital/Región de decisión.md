---
dia: 2026-02-24
etapa: empezado
referencias: []
aliases: 
  - Frontera de decisión
  - Detector máximo a posteriori#^map
  - Detector MAP#^map
  - Detector de máxima verosimilitud#^ml
  - Detector ML#^ml
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Modulación-digital
  - nota/facultad
vinculoFacultad:
  - tema: Modulación digital
    capitulo: 3
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Dado una [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Modulación digital|modulación]] con $M$ símbolos con $N$ componentes [[ingeniería en informática/analisis 2/Nomenclatura/Ortogonalidad|ortogonales]], se define la región de decisión como la [[ingeniería en informática/proba/Representación de variables aleatorias/Partición|partición]] del espacio $\mathbb{R}^N$, donde cada conjunto de esta partición esta asociado a un símbolo. Con esta partición se puede decidir a que símbolo pertenece un valor de $\mathbb{R}^N$ 

Existen distintas formas de determinar esta partición
* Detector máximo a posteriori (MAP) ^map
    * Es el mejor detector para cuando cada símbolo tiene una [[investigación/matemática/Probabilidad/Probabilidad|probabilidad]] distinta $$ D_m = \Set{ r \in \mathbb{R}^N : \mathbb{P}(s_m) ~ \mathbb{P}(r \mid s_m) > \mathbb{P}(s_w) ~ \mathbb{P}(r \mid s_w),~ \forall w \ne m } $$
* Detector de máxima verosimilitud  (ML) ^ml
    * Este es un caso particular del anterior, donde los símbolos son equiprobables $$ D_m = \Set{ r \in \mathbb{R}^N : \mathbb{P}(r \mid s_m) > \mathbb{P}(r \mid s_w),~ \forall w \ne m } $$
    * La partición generada por este detector es un [[investigación/generación procedural/Diagrama de Voronoi|diagrama de Voronoi]]
