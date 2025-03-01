---
dia: 2022-09-09
tags:
  - carrera/ingeniería-electrónica/analisis-3/Topología-del-plano-complejo-y-límites
  - nota/facultad
  - ingeniería-en-informática/analisis-3/Topología-del-plano-complejo-y-límites
---
# Definición
---
Sea $f : D \to \mathbb{C}$ una función definida en un conjunto $D \subset \mathbb{C}$ y sea $z_0 \in \mathbb{C}$ un [[Punto de acumulación]] de $D$. Entonces, definimos:
$$ \lim_{z \to z_0} f(z) = \infty \Leftrightarrow \text{ para cada } K > 0 \text{ existe } \delta > 0 \text{ tal que } |f(z)| > K, \forall z \in D \cap D(z_0, \delta) $$
Siendo $D(z_0, \delta)$ un [[Disco abierto]].

# Observación
---
Puede probarse fácilmente que $\lim_{z \to z_0} f(z) = \infty$ sii existe $r > 0$ tal que $f(z) \ne 0$ para todo $z \in D \cap D(z_0, r)$ y además $\lim_{z \to z_0} \frac{1}{f(z)} = 0$ 

El uso de la inversión puede utilizarse también para definir 
$$ \lim_{z \to \infty} f(z) = l \Leftrightarrow \lim_{z \to 0} f\bigg(\frac{1}{z}\bigg) = l $$
Para que esta definición tenga sentido es necesario, obviamente, que el $0$ sea punto de acumulación del dominio de la función $z \longmapsto f(\frac{1}{z})$ 

## Continuidad secuencial
---
Se trata de una relación importantísima entre limites de sucesiones y [[Función continua]]. Sea $f : D \to \mathbb{C}$ una función definida en un conjunto $D \subseteq \mathbb{C}$ y sea $z_0 \in D$. Entonces $f$ es una [[Función continua]] en $z_0$ sii para toda [[Sucesión]] $(a_n)_{n = 1}^\infty$ de puntos de $D$ tal que $\lim_{n \to \infty} a_n = z_0$ se verifica $\lim_{n \to \infty} f(a_n) = f(z_0)$, es decir:
$$ \lim_{n \to \infty} f(a_n) = f(\lim_{n \to \infty} a_n) $$
