Para entender esto, ver [[Base]] y [[Combinacion lineal]]

El vector de coordenadas de una base, es los "pesos" o $a_1, a_2, \cdots, a_n$  de la combinacion linea, para conseguir ese vector

$$\text{ Dado } x \in \mathbb{V}, \text{ existe } a_1,a_2,\cdots,a_n\in\mathbb{K}, \text{ tales que } x=a_1 \cdot v_1 + \cdots + a_n \cdot v_n$$
$$[x]^B = \begin{bmatrix} a_1 \\ \vdots \\ a_n \end{bmatrix}$$

### Proposicion 
Se mantiene la suma, y la multiplicacion al conseguir el vector de coordenadas
$$[\alpha v + \beta w]^B = \alpha[v]^B + \beta[w]^B$$

### Ayuda del producto interno
Habiendo visto el [[Producto interno]], y teniendo una base $B = \{ u_1, u_2, \cdots, u_n \}$ que sea una [[Base ortonormal]], por lo tanto vamos a poder escribir el vector de coordenadas tal que

$$[v]^B = \begin{bmatrix} \langle v, u_1 \rangle \\ \langle v, u_2 \rangle \\ \vdots \\ \langle v, u_n \rangle \end{bmatrix} $$

Si $B$ fuera ortogonal, entonces lo que cambiaria es que 

$$[v]^B = \begin{bmatrix} \frac{\langle v, u_1 \rangle}{\lVert u_1 \rVert^2} \\ \frac{\langle v, u_2 \rangle}{\lVert u_2 \rVert^2} \\ \vdots \\ \frac{\langle v, u_n \rangle}{\lVert u_n \rVert^2} \end{bmatrix} $$