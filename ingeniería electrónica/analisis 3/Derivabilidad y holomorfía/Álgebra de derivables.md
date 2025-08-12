---
dia: 2022-09-12
tags:
  - carrera/ingeniería-electrónica/analisis-3/Derivabilidad-y-holomorfía
  - carrera/ingeniería-en-informática/analisis-3/Derivabilidad-y-holomorfía
  - nota/facultad
vinculoFacultad:
  - tema: Derivabilidad y holomorfía
    capitulo: 2
    materia: Análisis matemático 3
    carrera: Ingeniería electrónica
---
# Definición
---
Sea $f : D \to \mathbb{C}$ una función definida en un [[Conjunto abierto]] $D \subseteq \mathbb{C}$, [[Derivable]] en $z_0 \in D$

1) Sea $D_0 \subseteq D$ un [[Subconjunto|subconjunto]] también abierto que contiene al punto $z_0$. Entonces, la restricción $f_{|D_0} : D_0 \to \mathbb{C}$ de $f$ a $D_0$ también es [[Derivable]] en $z_0$ y además $f'_{D_0}(z_0) = f'(z_0)$.
2) Sea $g : D \to \mathbb{C}$ otra función definida en un [[Conjunto abierto]] $D \subseteq \mathbb{C}$, [[Derivable]] en $z_0 \in D$, y sea $c \in \mathbb{C}$ una constante. Entonces $f + g$, $f - g$, $f \cdot g$ y $c \cdot f$ son derivables en $z_0$ y ademas se verifican las siguentes igualdades:
	1) $(f + g)'(z_0) = f'(z_0) + g'(z_0)$
	2) $(f - g)'(z_0) = f'(z_0) - g'(z_0)$
	3) $(c \cdot f)'(z_0) = c \cdot f'(z_0)$
	4) Usando la regla de Leibniz $(f \cdot g)' (z_0) = f'(z_0) \cdot g(z_0) + f(z_0) \cdot g'(z_0)$ 
3) Sea $k : D \to \mathbb{C}$ una función constante en un abierto $D \subseteq \mathbb{C}$. Entonces $k$ es [[Derivable]] en $D$ y su derivada es identicamente nula.
4) Sea $Id : \mathbb{C} \to \mathbb{C}$ la función $Id(z)$, (es decir, [[Función identidad]]). Entonces, $Id$ es [[Derivable]] en $\mathbb{C}$ y su derivada es la constante $Id'(z) = 1$
5) Sea $J : \mathbb{C} - \{ 0 \} \to \mathbb{C} - \{ 0 \}$ la inversión multiplicativa $J(z) = \frac{1}{z}$. Entonces, $J$ es [[Derivable]] en todo su dominio y su derivada es $J'(z) = -\frac{1}{z^2}$ 
6) Sea $g : E \to \mathbb{C}$ otra función definida en un [[Conjunto abierto]] $E \subseteq \mathbb{C}$, tales que:
	1) La imagen de $f$ esta contenida en el dominio $E$ de $g$, es decir: existe la composición $g \circ f : D \to \mathbb{C}$
	2) $f$ es derivable en un punto $z_0 \in D$
	3) $g$ es derivable en el punto $w_0 = g(f(z_0))$
	Entonces, $g \circ f$ es [[Derivable]] y su derivada es $(g \circ f)'(z_0) = g'(f(z_0)) \cdot f'(z_0)$.
7) Sea $g : D \to \mathbb{C}$ otra función definida en un [[Conjunto abierto]] $D \subseteq \mathbb{C}$, [[Derivable]] en $z_0 \in D$ y supongamos que $g$ no se anula en ninún punto de $D$. Entonces $\frac{f}{g} : D \to \mathbb{C}$ es [[Derivable]] en $z_0 \in D$ y ademas $$ \bigg(\frac{f}{g} \bigg)'(z_0)= \frac{f'(z_0) \cdot g(z_0) - f(z_0) \cdot g'(z_0)}{g(z_0)^2} $$

# Observación
---
Todas las propiedades y reglas de derivación son válidas para funciones derivables en un abierto, por lo que podría intercambiarse "derivable en $z_0$" por "derivable en $D$", y extendiendo las reglas de derivación.