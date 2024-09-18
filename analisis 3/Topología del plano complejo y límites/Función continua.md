---
dia: 2022-09-06
tags:
  - analisis-3/Topología-del-plano-complejo-y-límites
  - nota/facultad
---
# Definición
---
Una función $f:D \to \mathbb{C}$ definida en un conjunto $D \subseteq \mathbb{C}$ _es continua en un punto_ $z_0 \in D$ sii para cada número real $\epsilon > 0$ existe un numero $\delta > 0$ para el cual se verifica la siguiente implicación (para todo complejo $z$):

$$\begin{rcases} 
|z - z_0| < \delta \\
z \in D
\end{rcases} \implies |f(z) - f(z_0)| < \epsilon$$

Si $f$ es continua en todos los puntos de su dominio, diremos simpleente que $f$ es continua, sobreentendiendo que lo es en cada punto.


## Observaciones
---
Obsérvese la "sutil" diferencia con la definición de [[Límite]]: tenemos $|z - z_0| < \delta$ en lugar de $0 < |z - z_0| < \delta$. La razón fundamental es que $|f(z) - f(z_0)| < \epsilon$ se verifica trivialmente para $z = z_0$, que es un punto del dominio de $f$, y lo mismo ocurre con el antecedente.

Sea $f:D \to \mathbb{C}$ una función definida en un conjunto $D \subseteq \mathbb{C}$ y sea $z_0 \in D$ un punto del dominio de $f$ que ademas es [[Punto de acumulación]] de $D$. Entonces
$$ f \text{ es continua en } z_0 \Leftrightarrow \lim_{z \to z_0} f(z) = f(z_0) $$
