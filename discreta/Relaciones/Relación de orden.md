---
dia: 2024-08-07
tags:
  - discreta/Relaciones
  - nota/facultad
aliases:
  - Poset
---
# Definición
---
Cuando una [[Relación|relación]] es reflexiva, antisimétrica y [[Transitividad en relaciones de orden|transitiva]], se llama relación de orden

El [[Conjunto|conjunto]] donde se ha introducido esa relación se llama conjunto ordenado

* Reflexiva: $\forall a \in A: aRa$
* Antisimétrica: $\forall a,~b \in A: (aRb,~bRa) \to a = b$
* Transitiva: $\forall a~b \in A: (aRb,~bRc) \to aRc$

Se dice que $(a,~R)$ es un conjunto parcialmente ordenado, o es poset. De ahora en más, se utilizará el símbolo $\le$ para representar una relación de orden $$ aRb \iff a \le b $$

Se dice orden parcial, ya que no todos los elementos están en relación entre sí. La relación solo está presente para un subconjunto de los elementos. $a \nleq b$  no implica $a \geq b$ 