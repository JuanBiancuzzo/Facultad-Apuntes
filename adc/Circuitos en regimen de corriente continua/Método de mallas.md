---
dia: 2023-09-03
capitulo: 1
tags:
  - adc/Circuitos-en-regimen-de-corriente-continua
---
### Definición
---
En el análisis por [[Malla|mallas]] interesa hallar las [[Corriente eléctrica|corrientes]] de mallas (diferentes a las corrientes de los elementos) sobre [[Circuito eléctrico|circuitos]] [[Grafo planar|planares]]. Dado un circuito con $n$ mallas sin [[Fuente de corriente|fuentes de corriente]], el análisis por mallas del circuito implica los pasos siguientes:

1. Definir las corrientes de malla
2. Escribir ecuaciones de cada uno de las $n$ mallas con la [[Ley de mallas de Kirchhoff]]
3. Resolver el sistema de ecuaciones

Cada ecuación la podemos plantear como la suma algebraica de [[Tensión|tensiones]] a lo largo de la malla, igual a la corriente por la suma de [[Resistor|resistores]] en esa malla, menos la suma de las corrientes que comparten la malla multiplicadas por sus respectivas resistores compartidas 

$$ \sum_i V_i = I_k \cdot \left( R_{k1} + \cdots \right) - \underbrace{\sum_j I_j \cdot \left( R_{j1} + \cdots \right)}_\text{compartido} $$