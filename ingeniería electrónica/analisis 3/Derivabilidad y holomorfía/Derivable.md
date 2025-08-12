---
dia: 2022-09-09
tags:
  - carrera/ingeniería-electrónica/analisis-3/Derivabilidad-y-holomorfía
  - carrera/ingeniería-en-informática/analisis-3/Derivabilidad-y-holomorfía
  - nota/facultad
aliases:
  - Derivada
vinculoFacultad:
  - tema: Derivabilidad y holomorfía
    capitulo: 2
    materia: Análisis matemático 3
    carrera: Ingeniería electrónica
---
# Definición
---
Sea $f : D \to \mathbb{C}$ una [[Función|función]] definida en un [[Conjunto abierto|conjunto abierto]] $D \subseteq \mathbb{C}$ y sea $z_0 \in D$.  Entonces_
1) $f$ es derivable en $z_0$ sii existe el [[Límite|límite]] $\lim_{z \to z_0} \frac{f(z) - f(z_0)}{z - z_0}$. Dado que $z_0$ es [[Punto de acumulación|punto de acumulación]] de $D - \{ z_0 \}$, este limite es único y se denomina derivada de $f$ en $z_0$. Se indica $f'(z_0)$, es decir:
	$$ f'(z_0) = \lim_{z \to z_0} \frac{f(z) - f(z_0)}{z - z_0} $$
2) $f$ es derivable en $D$ sii es derivable en todos los puntos del abierto $D$. En ese caso, la función $f' : D \to \mathbb{C}$ se denomina derivada de $f$ en $D$