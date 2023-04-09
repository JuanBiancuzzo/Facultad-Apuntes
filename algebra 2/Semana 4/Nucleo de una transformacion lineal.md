---
dia: 2023-01-22
materia: algebra 2
capitulo: 4
---
### Definición
---
El nucleo de la transformada es el [[Conjunto]] de vectores que si se le aplica la [[Transformación lineal]] estos terminan siendo el $0_\mathbb{W}$

![[Pasted image 20211010153507.png]]

Entonces se puede espresar como 
$$Nu(t) := \{v \in \mathbb{V} : T(v) = 0_\mathbb{W} \}$$

Que se puede ver como un caso particular de la [[Preimagen de una transformacion linea]] donde el intervalo, o conjunto es el $0_\mathbb{W}$

### Relacion con la matriz de la transformacion lineal
Con $\{[x_1]^{B_1}, [x_2]^{B_1}, \cdots, [x_r]^{B_1} \}$ es una base de $nul([T]_{B_1}^{B_2})$ si y solo si, $\{x_1, x_2, \cdots, x_r \}$ es una base de $Nu(T)$, entonces  
$$dim(Nu(T)) = dim(nul([T]_{B_1}^{B_2}))$$