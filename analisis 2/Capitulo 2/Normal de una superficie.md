Cuando teniamos una funcion de una variable [[La grafica de una funcion]], se veia como una cuerva tal que $p = (x_0, f(x_0))$ por lo tanto si queriamos la normal, lo veiamos como un vector perpendicular a la recta tangente en ese puento

Cuando tenemos una [[Superficie]] ya no tenemos una recta tangente, sino un [[Plano tangente a una superficie]], por lo tanto vamos a usar las [[Derivadas direccionales]], especificamente en las direcciones $\hat{x}$ y $\hat{y}$ que son las [[Derivadas parciales]], para crear nuestro plano tangente a la superficie en el punto $p$

Siendo $p = (x_0, y_0)$, los vectores correspondientes a las derivadas parciales, son

$$ v_1 = \bigg(1, 0, \frac{\partial f}{\partial x}(x_0, y_0) \bigg), \text{ } v_2 = \bigg(0, 1, \frac{\partial f}{\partial y}(x_0, y_0) \bigg) $$

Por lo tanto el vector normal, seria el producto vectorial entre $v_1$ y $v_2$

$$ N_p = \bigg( -\frac{\partial f}{\partial x}(x_0, y_0), -\frac{\partial f}{\partial y}(x_0, y_0), 1 \bigg) $$