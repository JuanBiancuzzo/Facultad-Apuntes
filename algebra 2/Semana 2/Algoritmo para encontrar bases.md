---
dia: 2023-01-22
materia: algebra 2
capitulo: 2
---
## Algoritmos para producir una base a partir de un sistema de generadores
Primero ver [[Base]] y [[Sistema de generadores]]

En los dos casos, usaremos el sistema de generradores $g=\{ v_1, \cdots, v_m \} \subset \mathbb{K}^n$

### Algoritmo de filas
1. Construir la matriz $A \in \mathbb{K}^{m \times n}$ cuyas filas son $v_1^T, \cdots, v_m^T$
2. Construir $E \in \mathbb{m \times n}$ la matrix escalonada por filas reducida de $A$
3. Listar las filas no nulas de $E: \{E_{i_{1}}, \cdots, E_{i_{q}} \}$
4. $B \gets \{E_{i_{1}}, \cdots, E_{i_{q}} \}$


### Algoritmo de columnas
1. Construir la matriz $A \in \mathbb{K}^{m \times n}$ cuyas columnas son $v_1, \cdots, v_m$
2. Construir $E \in \mathbb{m \times n}$ la matrix escalonada por filas reducida de $A$
3. Listar las columnas de $A$ que corresponden a las columnas pivotales$^1$ de $E: \{v_{j_1}, \cdots, v_{j_p} \}$
4. $B \gets \{v_{j_1}, \cdots, v_{j_p} \}$


$^1$ Para ver que son las columnas pivotales, ver [[Columnas pivotales en una matriz]]
