---
dia: 2022-09-13
tags:
  - ingeniería-electrónica/analisis-3/Series
  - nota/facultad
  - ingeniería-en-informática/analisis-3/Series
---
Dada una [[Sucesión]] $\alpha : \in \mathbb{N} \to \mathbb{K}$ con $\mathbb{K} \in \{ \mathbb{R}, \mathbb{C} \}$ 

$\alpha$ es convergente a un [[Límite]] $a \in \mathbb{K}$ (se indica $\lim_{n \to \infty} \alpha_n = a$) sii $$ \forall \epsilon > 0 : \exists n_\epsilon \in \mathbb{N} : \forall n \in \mathbb{N} : n \geq n_\epsilon \implies |\alpha_n - a| < \epsilon $$

# Consecuencias
---
* Si una [[Sucesión]] converge a un limite, este limite es único.
* Toda [[Sucesión]] convergente es una [[Sucesión de Cauchy]]
* Si una [[Sucesión]] es convergente, toda [[Subsucesión]] de la misma converge al mismo limite que la sucesión $$  \lim_{n \to \infty} \alpha_n = a \Leftrightarrow \forall k \in \mathbb{N}: \lim_{n \to \infty} \alpha_{k + n} = a  $$
* Toda [[Sucesión]] constante converge a dicha constante. Por lo tanto, de la propiedad anterior se deduce que toda [[Sucesión]] $(\alpha_n)_{n = 1}^\infty$ en $\mathbb{K}$ para la cual existe una constante real $c$ y un número natural $m$ tales que $\forall n \geq m : \alpha_n = c$, converge a la constante $c$.

* (Para $\mathbb{K} = \mathbb{R}$) Si $\lim_{n \to \infty} \alpha_n = a > 0$, entonces para todo $r \in \mathbb{R}$ tal que $0 < r < a$ existe $n_r \in \mathbb{N}$ tal que para todo $n \geq n_r : \alpha_n \geq r > 0$. Analogamente cuando $a < 0$

* Dada una [[Sucesión]] $\alpha : \mathbb{N} \to \mathbb{K}$: (muchas de estas relacionadas a operaciones de [[Límite]]s)
	1) $\lim_{n \to \infty} \alpha_n = a \Leftrightarrow \lim_{n \to \infty} | \alpha_n - a | = 0$
	2) $\lim_{n \to  \infty} \alpha_n = a \Rightarrow \lim_{n \to \infty} |\alpha_n| = |a|$  
	3) $\lim_{n \to \infty} \alpha_n = 0 \Leftrightarrow \lim_{n \to \infty} |\alpha_n| = 0$

* (Para $\mathbb{K} = \mathbb{R}$) (Lema del Sándwich o del Arriero):
  Dadas tres [[Sucesión]]es $\alpha$, $\beta$ y $\gamma$, en $\mathbb{R}$ tales que:
	* $\exists m \in \mathbb{N} : \forall n \geq m : \alpha_n \leq \beta_n \leq \gamma_n$ 
	* $\lim_{n \to \infty} \alpha_n = \lim_{n \to \infty} \gamma_n = c$
  Entonces, $\lim_{n \to \infty} \beta_n = c$

* (Aritmetica de limites) Dados dos [[Sucesión]]es $\alpha$ y $\beta$, convergentes en $\mathbb{K}$, y dos constantes reales $\lambda$, $mu$:
	* $\lim_{n \to \infty} (\lambda \alpha_n + \mu \beta) = \lambda \lim_{n \to \infty} \alpha_n + \mu \lim_{n \to \infty} \beta_n$ 
	* $\lim_{n \to \infty}( \alpha_n \beta_n) = (\lim_{n \to \infty} \alpha_n) \cdot (\lim_{n \to \infty} \beta_n)$
	* $\forall n \in \mathbb{N} : \beta_n \ne 0 \ne \lim_{n \to \infty} \beta_n \Rightarrow \lim_{n \to \infty}\frac{\alpha_n}{\beta_n} = \frac{\lim_{n \to \infty} \alpha_n}{\lim_{n \to \infty} \beta_n}$
	* $\forall n \in \mathbb{N} : \beta_n \ne 0 \ne \lim_{n \to \infty} \beta_n$, entonces $\lim_{n \to \infty} \beta_n = \infty \Leftrightarrow \lim_{n \to \infty} \frac{1}{\beta_n} = 0$

* Si la [[Serie]] $\bigg( \sum_{k = 0}^n \alpha_k \bigg)_{n = 1}^\infty$ converge entonces $\lim_{n \to \infty} \alpha_n = 0$ (No vale reciproca)

* Por el [[Teoremas de completitud y de continuidad secuencial#Teorema 1 mathbb K mathbb R]] se llega que $\lim_{n \to \infty} \frac{1}{n} = 0$

* $\lim_{n \to \infty} \frac{a \cdot n + b}{c \cdot n + d} = \frac{a}{c}$ mientras que $c \ne 0$ y $c \cdot n + d \ne 0$ para todo natural $n$.

* Para todo número real o complejo $b$ tal que $|b| < 1$ entonces $\lim_{n \to \infty}b^n=0$
