---
dia: 2022-09-20
tags:
  - ingeniería-electrónica/analisis-3/Series
  - nota/facultad
---
# Definición
---
Sea $(c_n)_{n = 0}^\infty$ una [[Sucesión|sucesión]] de números complejos y sea $z_0 \in \mathbb{C}$. Para todo $z \in \mathbb{C}$, consideremos la sucesión  $$ (c_n \cdot (z - z_0)^n)_{n = 0}^\infty $$ y la correspondiente [[Serie|serie]] $$ \sum_{n = 0}^\infty c_n \cdot (z - z_0)^n $$
Notemos como $$ \begin{drcases} 
f_0(z) = c_0 \\
f_1(z) = c_0 + c_1 \cdot (z - z_0) \\
~~~~\vdots \\
f_n(z) = c_0 + c_1 \cdot (z - z_0) + \cdots + c_n \cdot (z - z_0)^n
\end{drcases} \Rightarrow \sum_{k = 0}^n c_k \cdot (z - z_0)^k$$
Que  por esta notación podemos reescribir la serie como $$ \sum_{n = 0}^\infty c_n \cdot (z - z_0)^n = \lim_{n \to \infty}  f_n(z) $$
Tambien podemos ver como $f_{n + 1}(z) = f_n(z) + c_{n + 1} (z - z_0)^{n + 1}$

### Notación
$$ f(z) = \lim_{n \to \infty} f_n(z) $$

# Observación
---
Las [[Serie geométrica|serie geométrica]] es una caso especifico de serie de potencias