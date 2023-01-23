---
dia: 2023-01-22
materia: analisis 2
capitulo: 2
---
Recordando que definimos la derivada como el [[Limite de funciones de una variable]] tal que

$$ f'(x_0) = \lim_{h \to 0}\frac{f(x_0 + h) - f(x_0)}{h} $$

Si existe la derivada, decimos que $f$ es [[Diferenciable]] en $x_0$, y ademas donde $f'(x_0)$ es la pendiente de la recta tangente de la grafica en $f(x_0)$ 

## Definicion
Veamos el caso donde $f : U \subseteq \mathbb{R}^2 \to \mathbb{R}$ y queremos calcular su derivada parcial con respecto a $x$ entonces seria

$$ \frac{\partial f}{\partial x}(x_0, y_0) = \lim_{h \to 0} \frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h} $$

Si quieramos hacer la derivada parcial con respecto a $y$ entonces seria

$$ \frac{\partial f}{\partial y}(x_0, y_0) = \lim_{h \to 0} \frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h} $$

Es decir que vamos a hacer la derivada de la variable que elijamos y vamos a tomar que las otras variables son constantes, de esta manera podemos verlo para mas variables

$$ \frac{\partial f}{\partial x_i}(x_{0_0}, x_{1_0}, \cdots, x_{n_0}) = \lim_{h \to 0} \frac{f(x_{0_0}, x_{1_0}, \cdots, x_{i_0} + h , \cdots, x_{n_0}) - f(x_{0_0}, x_{1_0}, \cdots, x_{n_0})}{h} $$

Tambien lo podemos como un caso especifico de una [[Derivadas direccionales]] en las direcciones de los versores $\hat{x_i}$

Ahora podremos ver las [[Derivadas parciales de ordenes superiores]]

## Resolucion
Hay algunos casos, donde la resolucion se ve complijeda ya que no se pueden aplicar las reglas basicas de la derivacion. 

Por ejemplo, dado la [[Composicion de funciones]], que nos lleva a aplicar la [[Regla de la cadena]], de la siguiente forma
![[Regla de la cadena]]