---
dia: 2023-09-03
tags:
  - adc/Circuitos-en-regimen-de-corriente-continua
  - nota
---
### Definición
---
En el análisis por [[Nodo|nodos]] interesa hallar las [[Tensión|tensiones]] de nodo. Dado un [[Circuito eléctrico|circuito]] con $n$ nodos sin [[Fuente de tensión|funtes de tensión]], el análisis por nodo del circuito implica los tres pasos siguientes

1. Elegir un nodo de referencia, utilizarlo como tierra
2. Escribir ecuaciones de cada uno de los $(n-1)$ nodos restantes con la [[Ley de Nodos de Kirchhoff]]
3. Resolver el sistema de ecuaciones

Cada ecuación la podemos plantear como la suma algebraica de [[Corriente eléctrica|corrientes]] entrantes y salientes al nodo, igual a tensión del nodo por la suma de uno sobre [[Resistor|resistores]] entrantes o salientes del nodo, menos la suma de tensiones que son adyacentes al nodo multiplicadas por sus respectivos uno sobre resistores que unen los nodos

$$ \sum_i I_i = V_k \cdot \left( \frac{1}{R_{k1}} + \cdots \right) - \underbrace{\sum_j V_j \cdot \left( \frac{1}{R_{j1}} + \cdots \right)}_\text{compartido} $$