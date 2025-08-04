---
dia: 2022-09-21
tags:
  - carrera/ingeniería-electrónica/analisis-3/Series
  - carrera/ingeniería-en-informática/analisis-3/Series
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/analisis 3/Series/Resumen.md]]"
---
# Definición
---
Sea $\mathbb{D}$ el [[Dominio de convergencia]] de la [[Serie de potencias]] $\displaystyle\sum_{n = 0}^{\infty} c_n \cdot (z - z_0)^n$ y sea $f : \mathbb{D} \to \mathbb{C}$ la funciónn definida por esta [[Serie]]. Entonces

1) Si la [[Sucesión]] $\bigg(\sqrt[n]{|c_n|}\bigg)_{n = 0}^\infty$ no es acotada $\implies$ $\mathbb{D} = \{ z_0 \}$ que es el [[Disco abierto]] de radio $r = 0$ 
2) Si la [[Sucesión]] $\bigg(\sqrt[n]{|c_n|}\bigg)_{n = 0}^\infty$ es acotada, entonces puede suceder
	1) $\exists r \in \mathbb{R}, r > 0 : D(z_0, r) \subseteq \mathbb{D} \subseteq \overline{D(z_0, r)}$ 
	2) $\mathbb{D} = \mathbb{C} = D(z_0,  r \to \infty)$


## Observación
1) La $r$ se le llama radio de convergencia de la serie.
2) En los [[Punto frontera]] $fr(D(z_0, r))$ la serie puede o no converger.


# Propiedades
---
Sea $f : \mathbb{D} \to \mathbb{C} : f(z) = \displaystyle\sum_{n = 0}^\infty c_n \cdot (z - z_0)^n$ con un radio $r$ de convergencia $r > 0$
1) $\forall z \in D(z_0, r)$ la convergencia es absoluta
2) 
	1) Si existe $l = \lim_{n \to \infty} |c_n|^{\frac{1}{n}}$ entonces $r = \frac{1}{l}$
	2) Si existe $l = \lim_{n \to \infty} \frac{|c_{n + 1}|}{|c_n|}$ entonces $r = \frac{1}{l}$
3) La [[Serie]] $\displaystyle\sum_{n = 0}^{\infty} n \cdot c_n \cdot (z - z_0)^{n - 1}$ tiene el mismo radio de convergencia que la serie $f$, y la función que define es la derivada de $f$, en $D(z_0, r)$. Observación, es infinitamente [[Derivable]] en el disco.
4) La [[Serie]] $\displaystyle\sum_{n = 1}^{\infty} \frac{1}{n + 1} \cdot c_n \cdot (z - z_0)^{n + 1}$ tiene el mismo radio de convergencia que la serie $f$, y la función que define la primitiva de $f$ con $f(z_0) = 0$. 