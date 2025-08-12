---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/algebra-2/Espacios-Vectoriales
  - carrera/ingeniería-en-informática/algebra-2/Espacios-Vectoriales
  - nota/facultad
vinculoFacultad:
  - tema: Espacios Vectoriales
    capitulo: 1
    materia: Álgebra 2 A
    carrera: Ingeniería en informática
---
# Definición
---
Usaremos el [[Sistema generador|sistema generador]] $g=\{ v_1, \cdots, v_m \} \subset \mathbb{K}^n$, generaremos una [[Base]] se las siguientes formas

## Algoritmo de filas
---
1. Construir la matriz $A \in \mathbb{K}^{m \times n}$ cuyas filas son $v_1^T, \cdots, v_m^T$
2. Construir $E \in \mathbb{m \times n}$ la matrix escalonada por filas reducida de $A$
3. Listar las filas no nulas de $E: \{E_{i_{1}}, \cdots, E_{i_{q}} \}$
4. $B \gets \{E_{i_{1}}, \cdots, E_{i_{q}} \}$


## Algoritmo de columnas
---
1. Construir la matriz $A \in \mathbb{K}^{m \times n}$ cuyas columnas son $v_1, \cdots, v_m$
2. Construir $E \in \mathbb{m \times n}$ la matrix escalonada por filas reducida de $A$
3. Listar las columnas de $A$ que corresponden a las [[Columnas pivotales en una matriz|columnas pivotales]] de $E: \{v_{j_1}, \cdots, v_{j_p} \}$
4. $B \gets \{v_{j_1}, \cdots, v_{j_p} \}$
