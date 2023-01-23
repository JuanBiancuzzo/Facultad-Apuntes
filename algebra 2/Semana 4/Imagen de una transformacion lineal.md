---
dia: 2023-01-22
materia: algebra 2
capitulo: 4
---
Siendo $T: \mathbb{V} \to \mathbb{W}$ , la imagen de $T$ son todos los vectores de $\mathbb{W}$ que son resultado de la transformacion lineal

![[Pasted image 20211010152631.png]]

Por lo tanto se puede escribir como 
$$Im(T) := \{w \in \mathbb{W} : \exists v \in \mathbb{V} : w = T(v) \}$$

### Relacion con la matriz de la transformacion lineal
Con $\{[y_1]^{B_2}, [y_2]^{B_2}, \cdots, [y_t]^{B_2} \}$ es una base de $col([T]_{B_1}^{B_2})$ si y solo si, $\{y_1, y_2, \cdots, y_t \}$ es una base de $Im(T)$, entonces  
$$dim(Im(T)) = dim(col([T]_{B_1}^{B_2}))$$ 