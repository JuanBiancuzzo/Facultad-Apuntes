---
dia: 2022-09-09
tags:
  - carrera/ingeniería-electrónica/analisis-3/Topología-del-plano-complejo-y-límites
  - carrera/ingeniería-en-informática/analisis-3/Topología-del-plano-complejo-y-límites
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/analisis 3/Topología del plano complejo y límites/Resumen.md]]"
---
# Definición
---
Se determina el algebra de continuidad con lo siguiente:

1) Sean $f : D \to \mathbb{C}$ y $g : D \to \mathbb{C}$ dos funciones definidas en un conjunto $D \subseteq \mathbb{C}$, ambas [[Función continua]] en un punto $z_0 \in D$. Entonces:
	1) Para todo [[Subconjunto|subconjunto]] $D_0 \subseteq D$ tal que $z_0 \in D_0$, la restricción $f_{|D_0} : D_0 \to \mathbb{C}$ es continua en $z_0$
	2) $f + g$, $f - g$ y $f \cdot g$ son [[Función continua]] en $z_0$. Si además $g$ no se anula en ningún punto de $D$, también $\frac{f}{g}$ es continua en $z_0$
2) Sean $f : D \to \mathbb{C}$ y $g : E \to \mathbb{C}$ dos funciones definidas en conjuntos $D \subseteq \mathbb{C}$ y $E \subseteq \mathbb{C}$ tales que:
	1) La imagen de $f$ esta contenida en el dominio $E$ de $g$, es decir: existe la composición $g \circ f : D \to \mathbb{C}$
	2) $f$ es [[Función continua]] en un punto $z_0 \in D$ 
	3) $g$ es [[Función continua]] en el punto $w_0 = f(z_0)$
	
	Entonces, $f \circ g$  es continua en $z_0$
3) Son continuas:
	1) Todas las funciones polinómicas $P : \mathbb{C} \to \mathbb{C}$, es decir, las funciones de la forma $P(z) = c_0 + c_1 \cdot z + \cdots + c_m \cdot z^m$, donde $c_i$ son constantes complejas $i \in [0, m]$
	2) La función $J : \mathbb{C} - \{ 0 \} \to \mathbb{C} - \{ 0 \}$ tal que $J(z) = \frac{1}{z}$ 
	3) Las funciones racionales, es decir, las de la forma $\frac{P}{Q}$, donde $P$ y $Q$ son polinímicas
4) Sea $f : D \to \mathbb{C}$ una función definida en un conjunto $D \subseteq \mathbb{C}$, [[Función continua]] en un punto $z_0 \in D$. Entonces:
	1) La función $|f| : D \to \mathbb{R}$ es [[Función continua]] en $z_0$
	2) Si $f(z_0) \ne 0$, existe $r > 0$ tal que $\forall z \in D(z_0, r) \cap D$ ([[Disco abierto]]) también se verifica que $f(z) \ne 0$
5) (Continuidad por componentes) Sea $f : D \to \mathbb{C}$ una función definida en un conjunto $D \subseteq \mathbb{C}$ y sea $z_0 = x_0 + i \cdot y_0 \in D$. Sean $u : D \to \mathbb{R}$ y $v : D \to \mathbb{R}$ las partes real e imaginaria de $f$, respectivamente. Entonces
	$$ f \text{ es continua en } z_0 = x_0 + i \cdot y_0 \Leftrightarrow u \text{ y } v \text{ son continuas en } (x_0, y_0) $$
	