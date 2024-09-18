---
dia: 2022-12-05
tags:
  - analisis-3/Transformada-de-Laplace
  - nota/facultad
---
# Definición
---
Para cada [[Función objeto]] $f : \mathbb{R} \to \mathbb{C}$ y cada complejo $s = \sigma + i \omega$ estudiemos la convergncia de la [[Transformada de Laplace]] $$ F(s) = \int_0^\infty f(t) e^{-st}dt $$
Dada una función, objeto, para cada número real positivo $b$, sea $F_b : \mathbb{C} \to \mathbb{C}$ tal que $$ F_b(s) = \int_0^b f(t) e^{-st}dt $$
Dado un punto $s_0 = \sigma_0 + i \omega_0 \in RC(f)$ (región de convergencia)

1) Para cada $\varphi \in (-\frac{\pi}{2}, \frac{\pi}{2})$ se verifica $$ \lim_{b \to \infty} sup\Set{|F(s) - F_b(s)| : s \in S_\varphi} = 0 $$ donde $S_\varphi = \Set{ s \in \mathbb{C} : Re(s) > \sigma_0, -\varphi < Arg(s - s_0) < \varphi }$

2) El semiplano $\mathbb{H}_{\sigma_0} = \Set{s \in \mathbb{C} : Re(s) > \sigma_0}$ está incluido en la región de convergencia de la integral, es decir: $\mathbb{H}_{\sigma_0} \subseteq RC(f)$

3) Si $RC(f) = \mathbb{C}$ o bien existe $\sigma_c \in \mathbb{R}$ tal que $$ \mathbb{H}_{\sigma_c} \subseteq RC(f) \subseteq \overline{\mathbb{H}_{\sigma_c}} $$ donde $\sigma_c$ se denomina abscisa de convergencia.

4) La [[Transformada de Laplace]] de $f$, es decir la función $F : RC(f) \to \mathbb{C}$, es [[Holomorfa]] en el semiplano $\mathbb{H}_{\sigma_c} = \Set{ s \in \mathbb{C} : Re(s) > \sigma_c }$ y su derivada de $F'(s) = -\int_0^\infty t f(t) e^{-st} dt$, es decir, la transformada de Laplace de la [[Función objeto]] $t \mapsto -tf(t)$, con la misma abscisa de convergencia que $f$.
