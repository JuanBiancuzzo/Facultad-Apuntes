---
dia: 2023-01-22
capitulo: 2
tags:
  - analisis-2/Capitulo-2
  - nota
---
### Definición
---
Veamos el caso donde $f : U \subseteq \mathbb{R}^2 \to \mathbb{R}$ y queremos calcular su derivada parcial con respecto a $x$ entonces seria

$$ \frac{\partial f}{\partial x}(x_0, y_0) = \lim_{h \to 0} \frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h} $$

Si quieramos hacer la derivada parcial con respecto a $y$ entonces seria

$$ \frac{\partial f}{\partial y}(x_0, y_0) = \lim_{h \to 0} \frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h} $$

Es decir que vamos a hacer la derivada de la variable que elijamos y vamos a tomar que las otras variables son constantes, de esta manera podemos verlo para mas variables

$$ \frac{\partial f}{\partial x_i}(x_{0_0}, x_{1_0}, \cdots, x_{n_0}) = \lim_{h \to 0} \frac{f(x_{0_0}, x_{1_0}, \cdots, x_{i_0} + h , \cdots, x_{n_0}) - f(x_{0_0}, x_{1_0}, \cdots, x_{n_0})}{h} $$

Tambien lo podemos como un caso especifico de una [[Derivada direccional|derivada direccional]] en las direcciones de los versores $\hat{x_i}$

Ahora podremos ver las [[Derivada parcial de orden superior|derivadas parciales de ordenes superiores]]

#### Resolución
---
Hay algunos casos, donde la resolución se ve complejidad ya que no se pueden aplicar las reglas básicas de la derivación. 

Por ejemplo, dado la [[Composición de funciones]], que nos lleva a aplicar la [[Regla de la cadena|regla de la cadena]], de la siguiente forma

![[Regla de la cadena#Definición]]