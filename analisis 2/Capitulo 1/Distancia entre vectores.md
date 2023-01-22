La distancia entre dos vectores $x$ y $y$ se puede usar la definicion de norma para definirla, tal que

$$dist(x, y) := \lVert y - x \rVert$$

![[Pasted image 20211013155029.png]]

### Propiedades
1. $d(x, y) \ge 0$, si $d(x, y) = 0 \iff x = y$
2. $d(x, y) = d(y, x)$
3. $d(x, y) \le d(x, z) + d(z, y)$, con $z$ un vector cualquiera de $\mathbb{R}^n$

## Otra forma de verlo
Teniendo una [[Base ortonormal]] tal que $B = \{u_1, u_2, \cdots, u_n \}$, podemos escribir la distancia entre dos vectores como

$$ d(v_1, v_2) = \sqrt{\sum^n_{j = 1}(\langle v_2, u_j \rangle - \langle v_1, u_j \rangle)^2} $$

Recordemos que 

$$ \lVert v_2 - v_1 \rVert^2 = \langle v_2 - v_1, v_2 - v_1 \rangle $$ 

como vimos en [[Norma inducida]], por lo tanto 

$$ \langle v_2 - v_1, v_2 - v_1 \rangle = \sum^n_{j = 1}(\langle v_2, u_j \rangle - \langle v_1, u_j \rangle)^2 $$