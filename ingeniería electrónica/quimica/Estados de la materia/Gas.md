---
dia: 2026-05-16
etapa: empezado
referencias: []
aliases:
  - Gas ideal#Gas ideal
  - Teoría cinética de los gases#Gas ideal
  - Gas real#Gas real
  - Factor de compresión#^factor-de-compresion
  - Vapor
tags:
  - carrera/ingeniería-electrónica/quimica/Estados-de-la-materia
  - carrera/ingeniería-electrónica/quimica/Termodinámica
  - nota/facultad
vinculoFacultad:
  - tema: Estados de la materia
    capitulo: 7
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
  - tema: Termodinámica
    capitulo: 10
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es un [[ingeniería electrónica/quimica/Estados de la materia/Estado de agregación de la materia|estado de agregación]] que tiene propiedades macroscópicas y microscópicas

Tiene como propiedades macroscópicas
* Son compresibles
* Fluyen fácilmente y ocupan todo el [[Volumen|volumen]] del recipiente
* Baja [[Densidad|densidad]], las [[Molécula|moléculas]] están separadas
* Se difunden entre ellos formando una [[Mezcla de gases|mezcla]] homogénea

Tiene como propiedades microscópicas
 * La [[Distancia|distancia]] intermolecular es grande, y en constante movimiento
 * El movimiento es caótico, existen choquen entre sí y con las paredes del recipiente
 * [[ingeniería electrónica/quimica/Fuerzas intermoleculares/Fuerza intermolecular|Fuerzas]] de atracción son despreciables, ya que los gases reales son [[ingeniería electrónica/quimica/Fuerzas intermoleculares/Fuerza intermolecular#^fuerzas-van-der-waals|fuerzas de van der Waals]], del orden de $2$ a $4 ~ \frac{\text{kJ}}{\text{mol}}$ como el caso del [[Oxígeno|oxígeno]], [[Nitrógeno|nitrógeno]] o el [[Argón|argón]]
 * La [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía#Energía cinética|energía cinética]] es mucho más a la [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía|energía]] de atracción entre ellas. Esta energía cinética es principalmente dada por la [[ingeniería electrónica/seguridad/Prevención de incendios/Temperatura|temperatura]]

## Gas ideal
---
Para que un gas se pueda considerar ideal se debe cumplir estos principios, cabe aclarar que estos son los principio de la teoría cinética de los gases
1. Los gases están compuestos por partículas (átomos o moléculas) que están en continuo movimiento aleatorio y siguen las leyes de la [[Mecánica clásica|mecánica clásica]]
2. Las [[Colisión|colisiones]] entre las partículas y las paredes del recipiente son perfectamente [[Colisión elástica|elásticas]]
3. El volumen ocupado por las partículas es insignificante en comparación con el volumen total del recipiente
4. No existen fuerzas de atracción o repulsión entre las partículas
5. La energía cinética promedio de las partículas es directamente proporcional a la temperatura absoluta del gas

La [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía#Energía interna|energía total]] $U(T)$ de un gas ideal está determinada por su energía cinética, y está sólo depende de la temperatura

En el caso de ser un gas monoatómico, la energía cinética esta dada por $$ E_c = n \frac{3}{2} RT = U(T) $$ mientras que en un gas diatómico es de $$ E_c = n \frac{5}{2} RT = U(T) $$ donde en ambos casos $n$ es la cantidad de [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Número de Avogradro|moles]], $T$ es la temperatura y $R$ es la [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Ley de Gases Ideales#^constante-gases-ideales|constante de la ley de los gases ideales]]

## Gas real
---
En estos casos influyen las fuerzas intermoleculares, por lo que podemos calcular el factor de compresión, denotado con la letra $Z$, dado por la relación entre el [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Número de Avogradro#^volumen-molar|volumen molar]] real y el volumen molar del gas ideal $$ Z = \frac{V_m^\text{real}}{V_m^\text{ideal}} $$ ^factor-de-compresion

Este refleja cuanto nos alejamos de un gas ideal, ya que para
* $Z = 1$, el comportamiento es ideal
* $Z > 1$, las repulsiones intermoleculares son dominantes
* $Z < 1$, las atracciones intermoleculares son dominantes