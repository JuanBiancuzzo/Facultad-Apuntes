---
dia: 2023-08-10
tags:
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - nota/facultad
vinculoFacultad:
  - tema: Machine learning
    capitulo: 9
    materia: Organización de datos
    carrera: Ingeniería en informática
  - tema: Regresión en Inteligencia Artificial
    capitulo: 2
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
# Definición
---
Es un método de [[Codificación de variables categóricas|codificación]] de variables categóricas en variables numéricas, eso lo hace determinar un valor para cada categoría, expresarlo en binario y ponerlo en columnas. Esto es mejor que el [[One hot encoding]] ya que la cantidad de columnas es $\log_2(k)$ donde $k$ es la cantidad de categorías en esa variable.


### Ejemplo
---
Tenemos la siguiente tabla:

| Ciudad  | Gasto | Ad  |
| ------- | ----- | --- |
| Moscu   | 100   | 0   |
| Moscu   | 20    | 1   |
| Paris   | 105   | 1   |
| Moscu   | 50    | 0   |
| Roma    | 120   | 0   |
| Paris   | 40    | 0   |
| Roma  | 80     | 0    |
| Londres | 50    | 1    |

Al codificarla entremos

| Gasto | Ad  | C2  | C1  | C0  |
| ----- | --- | --- | --- | --- |
| 100   | 0   | 0   | 0   | 1   |
| 20    | 1   | 0   | 0   | 1   |
| 105   | 1   | 0   | 1   | 0   |
| 50    | 0   | 0   | 0   | 1   |
| 120   | 0   | 0   | 1   | 1   |
| 40    | 0   | 0   | 1   | 0   |
| 80    | 0   | 0   | 1   | 1   |
| 50    | 1   | 1   | 0   | 0   |

Con Moscu = 001, Paris = 010, Roma = 011, y Londres = 100.
