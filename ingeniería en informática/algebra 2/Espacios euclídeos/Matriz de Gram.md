---
dia: 2023-01-22
aliases:
  - Gramiano
tags:
  - carrera/ingeniería-en-informática/algebra-2/Espacios-euclídeos
  - nota/facultad
  - carrera/ingeniería-electrónica/algebra-2/Espacios-euclídeos
---
# Definición
---
Sea $(\mathbb{V}, \langle \cdot, \cdot \rangle)$ un $\mathbb{K}$-espacio euclídeo. Y sea $\chi = \{x_1, x_2, \cdots, x_r \}$ un conjunto de vectores de $\mathbb{V}$ se llama la matriz de Gram, y se denota por $G_\chi$ a

$$ G_\chi := \begin{bmatrix}
		\langle x_1, x_1 \rangle & \langle x_1, x_2 \rangle & \cdots & \langle x_1, x_r \rangle \\ 
		\langle x_2, x_1 \rangle & \langle x_2, x_2 \rangle & \cdots & \langle x_2, x_r \rangle \\ 
		\vdots & \vdots & \ddots & \vdots \\ 
		\langle x_r, x_1 \rangle & \langle x_r, x_2 \rangle & \cdots & \langle x_r, x_r \rangle \\ 
	\end{bmatrix} $$

Donde explícitamente estamos usando el [[Producto interno|producto interno]]

## Gramiano
---
Llamaremos Gramiano de $\chi$ al determinante de la matriz de gram

### Propiedades
---
 * Un conjunto de vectores es LD si y solo si, el Gramiano es nulo
