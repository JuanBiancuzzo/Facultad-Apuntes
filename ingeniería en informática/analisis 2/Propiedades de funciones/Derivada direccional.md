---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/analisis-2/Propiedades-de-funciones
  - carrera/ingeniería-en-informática/analisis-2/Propiedades-de-funciones
  - nota/facultad
aliases:
  - Derivada direccional máxima
  - Derivada direccional mínima
  - Derivada direccional nula
vinculoFacultad:
  - "[[ingeniería en informática/analisis 2/Propiedades de funciones/Resumen.md]]"
---
# Definición
---
Sea $f: U \subseteq \mathbb{R}^n \to \mathbb{R}$ una [[Función|función]] definida en el [[Conjunto abierto|conjunto abierto]] $U$ de $\mathbb{R}^n$ y sea $x_0 \in U$ un punto dado de $U$. Sea $v \in \mathbb{R}^n$ un [[Versor|versor]], se define la derivada en dirección $v$ tal que 

$$ f'_\hat{v} = \lim{h \to 0}\frac{f(x_0 + h \cdot v) - f(x_0)}{h} $$

Donde lo podríamos visualizar 

![[Derivada direccional.webp]]

# Diferenciabilidad
---
Siendo la función $f$ es [[Diferenciable|diferenciable]], podemos plantear la derivada direccional de $v$ como

$$ f'_\hat{v} (x_0) = \sum \frac{\partial f}{\partial x_i}(x_0) \cdot v_i $$

# Gradiente
---
También podemos plantear la derivada direccional de $v$ con ayuda del [[Gradiente|gradiente]], de la siguiente forma

$$ f'_\hat{v} (x_0) = \nabla f(x_0) \cdot \hat{v} $$

Que podemos ver como es el equivalente a lo que vimos anteriormente

## Notas: Para cuando es diferenciable
---
 * $\lVert f'_\hat{v}(x_0) \rVert \le \lVert \nabla f(x_0) \rVert \cdot \lVert \hat{v} \rVert \to \lVert f'_\hat{v}(x_0) \rVert \le \lVert \nabla f(x_0) \rVert \implies -\lVert \nabla f(x_0) \rVert \le f'_\hat{v}(x_0) \le \lVert \nabla f(x_0) \rVert$
 * Con $\nabla f(x_0) \ne \vec{0}$
	 * $f'_{\hat{v}_{max}}(x_0) = \lVert \nabla f(x_0) \rVert$ con la dirección maxima $\hat{r}_{max} = \frac{\nabla f(x_0)}{\lVert \nabla f(x_0) \rVert}$
	 * $f'_{\hat{v}_{min}}(x_0) = - \lVert \nabla f(x_0) \rVert$ con la dirección minima $\hat{r}_{min} = - \frac{\nabla f(x_0)}{\lVert \nabla f(x_0) \rVert}$
	 * $f'_{\hat{v}_{nula}}(x_0) = 0$, entonces podemos encontrar la dirección nula siendo esta perpendicular a las direcciones maxima y minima
 * Con $\nabla f(x_0) = \vec{0}$ entonces para cualquier dirección es $0$

# Jacobiana
---
También podemos plantear la derivada direccional de $v$ con ayuda de la [[Jacobiana]], de la siguiente forma

$$ f'_\hat{v} (x_0) = D(f)(x_0) \cdot \hat{v} $$