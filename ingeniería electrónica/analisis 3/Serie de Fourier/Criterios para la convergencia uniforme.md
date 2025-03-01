---
dia: 2022-11-29
tags:
  - carrera/ingeniería-electrónica/analisis-3/Serie-de-Fourier
  - nota/facultad
  - ingeniería-en-informática/analisis-3/Serie-de-Fourier
---
# Definición 
---
Si la [[Serie]] $\Bigg( \displaystyle \sum_{n = -m}^m c_n \Bigg)_{m = 1}^\infty$  [[Convergencia absoluta|converge absolutamente]], entonces por el [[Criterio de Weiestrass]], la serie $\Bigg( \displaystyle \sum_{n = -m}^m c_n \cdot  e_n \Bigg)_{m = 1}^\infty$ converge absolutamente a una función $h \in E_P$ ([[Conjunto de funciones periódicas]]), por ser [[Límite]] uniforme de continuas, esta función $h$ es continua. 

Entonces, dada una función $f \in E_P$ tal que la serie $\Bigg( \displaystyle \sum_{n = -m}^m c_n \Bigg)_{m = 1}^\infty$ converge absolutamente, se tiene una [[Función continua]] $h \in E_P$ tal que $$ \lim_{m \to \infty} \bigg\Vert h - \sum_{n = -m}^m c_n(f) \cdot e_n  \bigg\Vert = 0$$
Puesto que la [[Convergencia uniforme]] implica la [[Convergencia puntual]], tenemos en particular que para $x \in [0, ~P]$ es $$ h(x) = \sum_{n = -\infty}^\infty c_n(f) \cdot e_n $$
# Teorema
---
Si $f \in E_P$ ([[Conjunto de funciones periódicas]]) es [[Función continua|continua]] y ademas la serie $\Bigg( \displaystyle \sum_{n = -m}^m c_n \Bigg)_{m = 1}^\infty$ [[Convergencia absoluta|converge absolutamente]], entonces la serie $\Bigg( \displaystyle \sum_{n = -m}^m c_n \cdot  e_n \Bigg)_{m = 1}^\infty$ [[Convergencia uniforme|converge uniformemente]] a $f$.

# Teorema
---
Si $f \in E_P$ ([[Conjunto de funciones periódicas]]) es [[Función continua|continua]] y, $f' \in E_P$ entonces su [[Serie de Fourier]] [[Convergencia absoluta|converge absolutamente]] y por el [[Criterios para la convergencia uniforme#Teorema|teorema]], $f$ [[Convergencia uniforme|converge uniformemente]].