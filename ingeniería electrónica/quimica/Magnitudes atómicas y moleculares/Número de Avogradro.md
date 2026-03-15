---
dia: 2026-03-15
etapa: empezado
referencias:
  - "1110"
aliases:
  - Constante de Avogadro
  - Mol
  - Masa molar#^masa-molar
  - Volumen molar#^volumen-molar
tags:
  - carrera/ingeniería-electrónica/quimica/Magnitudes-atómicas-y-moleculares
  - nota/facultad
vinculoFacultad:
  - tema: Magnitudes atómicas y moleculares
    capitulo: 4
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
El número de Avogadro $N_A$ equivale a la cantidad de $6.022 \cdot 10^{23}$, el cual es el factor de proporcionalidad entre el número de [[Partícula|partículas]] o entidades elementales y la cantidad de sustancia

De esta se define el $\text{mol}$ donde $$ 1 ~ \text{mol} = N_A ~ \text{particular} $$ y con esto podemos saber que un mol de una sustancia, tiene un peso en gramos igual a su [[ingeniería electrónica/quimica/Modelo atómico/Unidad de masa atómica#^mr|masa relativa]] en [[ingeniería electrónica/quimica/Modelo atómico/Unidad de masa atómica|umas]]

De aquí aparece la idea de masa molar, que representa la masa de $1 ~ \text{mol}$ de sustancia, con unidades de $\frac{\text{g}}{\text{mol}}$ ^masa-molar

Utilizando la [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Ley de Gases Ideales|ley de Gases Ideales]], surge la magnitud de volumen molar $V_m$, que representa el volumen ocupado por $1 ~ \text{mol}$ de gas. En [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Condición normal de presión y temperatura|CNPT]], un [[Gas ideal|gas ideal]] tiene un volumen molar de $22.4 \frac{\text{L}}{\text{mol}}$  ^volumen-molar

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```