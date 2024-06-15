---
dia: 2022-09-19
materia: analisis 3
capitulo: 3
---
### Definición
---
La serie geométrica es una [[Serie|serie]] q se define para $b \in \mathbb{C}$, como
$$ \sum_{k = 0}^{\infty} b^k $$

Donde las sumas parciales o sumas geométricas son 
$$ \sum_{k = 0}^m b^k = \frac{1 - b^{m + 1}}{1 - b} $$
Por lo tanto, la serie geométrica es 
$$ \sum_{k = 0}^{\infty} b^k = \frac{1}{1 - b} - \frac{b^{m + 1}}{1 - b} $$
Si tomamos que $|b| < 1$, se cumple que 
$$ \sum_{k = 0}^{\infty} b^k = \frac{1}{1 - b} $$

### Observación
---
Las series geométricas son casos específicos de la [[Serie de potencias|serie de potencias]], dado que 
$$ \sum_{k = 0}^{\infty} b^k = f(b) = \sum_{k = 0}^{\infty} c_n \cdot (b - z_0)^k $$
Donde $c_n = 1, \forall n$ y $z_0 = 0$.