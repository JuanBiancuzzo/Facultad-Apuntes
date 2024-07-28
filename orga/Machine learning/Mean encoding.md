---
dia: 2023-08-10
tags:
  - orga/Machine-learning
  - nota
---
### Definición
---
Es un método de [[Codificación de variables categóricas|codificación]] de variables categóricas en variables numéricas, eso lo hace en base a las categorías, por ejemplo el promedio de las categorías para cada valor posible. Tiene la desventaja de filtrar las categorías a los features de entrenamiento

##### Ejemplo
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

| Ciudad  | Gasto | Ad  | Ciudad-Mean |
| ------- | ----- | --- | ----------- |
| Moscu   | 100   | 0   | 0.33        |
| Moscu   | 20    | 1   | 0.33        |
| Paris   | 105   | 1   | 0.5         |
| Moscu   | 50    | 0   | 0.33        |
| Roma    | 120   | 0   | 0           |
| Paris   | 40    | 0   | 0.5         |
| Roma    | 80    | 0   | 0           |
| Londres | 50    | 1   | 1           |

Usamos Ad para determinar el promedio