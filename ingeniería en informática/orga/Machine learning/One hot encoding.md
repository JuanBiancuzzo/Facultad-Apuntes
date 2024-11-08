---
dia: 2023-08-10
tags:
  - ingeniería-en-informática/orga/Machine-learning
  - nota/facultad
---
# Definición
---
Es un método de [[Codificación de variables categóricas|codificación]] de variables categóricas en variables numéricas, eso lo hace creando una columna nueva por cada categoría de esa variable a transformar. 

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
| Roma    | 80    | 0    |
| Londres | 50    | 1   |

Al codificarla entremos

| Gasto | Ad  | Moscu | Paris | Roma | Londres |
| ----- | --- | ----- | ----- | ---- | ------- |
| 100   | 0   | 1     | 0     | 0    | 0       |
| 20    | 1   | 1     | 0     | 0    | 0       |
| 105   | 1   | 0     | 1     | 0    | 0       |
| 50    | 0   | 1     | 0     | 0    | 0       |
| 120   | 0   | 0     | 0     | 1    | 0       |
| 40    | 0   | 0     | 1     | 0    | 0       |
| 80    | 0   | 0     | 0     | 1    | 0       |
| 50    | 1   | 0     | 0     | 0    | 1       |
