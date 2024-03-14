---
dia: 2022-12-05
materia: analisis 3
capitulo: 16
---
### Definición
---
Sea $\mathbb{L} : \mathbb{O} \to \mathbb{I}$, donde $\mathbb{L}$ es la aplicación de la [[Transformada de Laplace|transformada de Laplace]], de un espacio $\mathbb{O}$ (cuyos elementos se denominan tradicionalmente "[[Función objeto|función objeto]]") en un espacio $\mathbb{I}$ de funciones [[Holomorfa|holomorfas]], denominadas "funciones imagen", con las siguientes propiedades operativas:

1) $\mathbb{L}$ es [[Función C-lineal]].
2) $\mathbb{L}$ transforma la derivación en una operación algebraica muy sencilla. Más precisamente: si $f$ y $f'$ son funciones objeto, entonces para todo $s$ perteneciente al dominio de sus imágenes se verifica que $$ \mathbb{L}(f')(s) = s \cdot \mathbb{L}(f)(s) - f(0^+) $$
3) $\mathbb{L}$ transformada del producto de [[Convolución|convolución]] en el producto común de funciones, es decir $$ \mathbb{L}(f * g) = \mathbb{L}(f) ~ \mathbb{L}(g) $$