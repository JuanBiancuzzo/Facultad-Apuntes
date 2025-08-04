---
dia: 2022-12-05
tags:
  - carrera/ingeniería-electrónica/analisis-3/Transformada-de-Laplace
  - carrera/ingeniería-electrónica/proba/Función-de-variable-aleatoria
  - carrera/ingeniería-en-informática/analisis-3/Transformada-de-Laplace
  - carrera/ingeniería-en-informática/proba/Función-de-variable-aleatoria
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/analisis 3/Transformada de Laplace/Resumen.md]]"
  - "[[ingeniería en informática/proba/Función de variable aleatoria/Resumen.md]]"
---
# Definición
---
Es la función $\lambda \mapsto F_{\lambda - 1}(1)$ que extiende a los factoriales donde $F_\lambda : \mathbb{C} \to \mathbb{C}$ es la [[Transformada de Laplace]] de la función $f_\lambda(t) = t^{\lambda} ~ H(t)$, es decir que $$F_\lambda(s) = \int\limits_0^\infty t^\lambda e^{-st} dt $$

# Propiedades
---
* $\Gamma(n) = (n - 1)!, \forall n \in \mathbb{N}$
* $\Gamma(t + 1) = t \cdot \Gamma(t)$
* $\Gamma(\frac{1}{2}) = \sqrt{\pi}$
