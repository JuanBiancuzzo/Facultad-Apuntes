---
dia: 2026-05-16
etapa: empezado
referencias: []
aliases:
  - Gas ideal#Gas ideal
  - Gas real#Gas real
  - Factor de compresión#^factor-de-compresion
  - Vapor
tags:
  - carrera/ingeniería-electrónica/quimica/Estados-de-la-materia
  - nota/facultad
vinculoFacultad:
  - tema: Estados de la materia
    capitulo: 7
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es un [[ingeniería electrónica/quimica/Estados de la materia/Estado de agregación|estado de agregación]] que tiene propiedades macroscópicas y microscópicas

Tiene como propiedades macroscópicas
* Son compresibles
* Fluyen fácilmente y ocupan todo el [[Volumen|volumen]] del recipiente
* Baja [[Densidad|densidad]], las [[Molécula|moléculas]] están separadas
* Se difunden entre ellos formando una [[Mezcla de gases|mezcla]] homogénea

Tiene como propiedades microscópicas
 * La [[Distancia|distancia]] intermolecular es grande, y en constante movimiento
 * El movimiento es caótico, existen choquen entre sí y con las paredes del recipiente
 * [[ingeniería electrónica/quimica/Fuerzas intermoleculares/Fuerza intermolecular|Fuerzas]] de atracción son despreciables, ya que los gases reales son [[ingeniería electrónica/quimica/Fuerzas intermoleculares/Fuerza intermolecular#^fuerzas-van-der-waals|fuerzas de van der Waals]], del orden de $2$ a $4 ~ \frac{\text{kJ}}{\text{mol}}$ como el caso del [[Oxígeno|oxígeno]], [[Nitrógeno|nitrógeno]] o el [[Argón|argón]]
 * La [[Energía cinética|energía cinética]] es mucho más a la [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía|energía]] de atracción entre ellas. Esta energía cinética es principalmente dada por la [[ingeniería electrónica/seguridad/Prevención de incendios/Temperatura|temperatura]]

## Gas ideal
---

## Gas real
---
En estos casos influyen las fuerzas intermoleculares, por lo que podemos calcular el factor de compresión, denotado con la letra $Z$, dado por la relación entre el [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Número de Avogradro#^volumen-molar|volumen molar]] real y el volumen molar del gas ideal $$ Z = \frac{V_m^\text{real}}{V_m^\text{ideal}} $$ ^factor-de-compresion

Este refleja cuanto nos alejamos de un gas ideal, ya que para
* $Z = 1$, el comportamiento es ideal
* $Z > 1$, las repulsiones intermoleculares son dominantes
* $Z < 1$, las atracciones intermoleculares son dominantes