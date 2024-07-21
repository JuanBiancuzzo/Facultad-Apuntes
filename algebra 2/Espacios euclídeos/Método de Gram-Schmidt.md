---
dia: 2023-01-22
capitulo: 3
tags:
  - algebra-2/Espacios-euclídeos
  - nota
---
### Definición
---
Este método, o mejor llamado [[Algoritmo|algoritmo]], nos permite hallar una base ortogonal de cualquier otra base, usando el [[Producto interno|producto interno]] determinado

Entonces, entiendo la base $B = \{v_1, v_2, v_3, \cdot, v_n \}$, vamos a construir la base $B_p = \{w_1, w_2, w_3, \cdot, w_n \}$, siendo esta un [[Sistema ortogonal|sistema ortogonal]], de la siguiente forma

$$ w_k = v_k - \sum_{j = 1}^{k - 1} \frac{\langle v_k, w_j \rangle}{\langle w_j, w_j \rangle} \cdot w_j $$

Un ejemplo para que se entienda mejor

$$ w_1 = v_1 $$
$$ w_2 = v_2 - \frac{\langle v_2, w_1 \rangle}{\langle w_1, w_1 \rangle} \cdot w_1 $$
$$ w_3 = v_3 - \frac{\langle v_3, w_1 \rangle}{\langle w_1, w_1 \rangle} \cdot w_1 - \frac{\langle v_3, w_2 \rangle}{\langle w_2, w_2 \rangle} \cdot w_2 $$