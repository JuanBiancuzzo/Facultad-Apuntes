---
dia: 2023-01-22
materia: analisis 2
---
La idea de componer funciones, significa "sustituir una funcion en otra", donde teniendo dos funciones de una variable, $y = f(x)$ y $x = g(u)$ podemos reemplazar una en otra, haciendo $y = f(g(u))$. Obteniendo asi la composicion de $f$ con $g$, denotado como $f \circ g$

Cuando tenemos [[Funciones de varias variables]], tenemos que tener en cuenta que se corresponda el codominio de una con el dominio de otra

Supongamos que tenemos la funcion $z = f(x, y)$ entonces como necesito dos funciones (su dominio perteneciendo a $\mathbb{R}^2$), una para cada variable, digamos $g_1$ y $g_2$,

$$ x = g_1(u, v), y = g_2(u, v) $$

Entonces ahora si podemos hacer la composicion

$$ z = f(g_1(u, v), g_2(u, v)) $$

Que tambien podriamos expresar una sola funcion $g$ tal que $g : U \subseteq \mathbb{R}^2 \to \mathbb{R}^2$, haciendo que la composicion sea

$$ z = f(g(u, v)) $$

De cualquier forma, esto se veria, graficamente como

![[Pasted image 20211102151308.png]]