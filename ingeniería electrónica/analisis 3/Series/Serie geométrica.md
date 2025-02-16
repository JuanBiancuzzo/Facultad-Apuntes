---
dia: 2022-09-19
tags:
  - ingeniería-electrónica/analisis-3/Series
  - nota/facultad
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - ingeniería-en-informática/analisis-3/Series
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
referencias:
  - "412"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea un número $q$ cualquiera, y queremos sumar las $n + 1$ primeras potencias de $q$ $$ 1 + q + q^2 + \cdots + q^{n - 1} + q^n $$
El mecanismo es parecido al de la [[Suma de Gauss|suma de Gauss]], permite hallar la suma de esta serie geométrica $$ \begin{matrix} 
    Q & = & 1 & + & q & + & q^2 & + & \cdots & + & q^{n - 1} & + & q^n \\
    q \cdot Q & = & & & q & + & q^2 & + & q^3 & + & \cdots & + & q^n & + & q^{n + 1} \\\hline
    q \cdot Q - Q & = &  -1 &&&&&& + &&&&&& q^{n+1}
\end{matrix} $$
Luego $(q - 1) Q = q^{n+1} - 1$, lo que aplica que si $q \ne 1$, $\displaystyle Q = \frac{q^{n + 1} - 1}{q -1}$ Pero es fácil calcular la suma para $q = 1$: da $n + 1$, es decir $$ \forall n \in \mathbb{N}: ~~~~ 1 + q + \cdots + q^n = \begin{cases} 
    n + 1 & \text{si} ~~ q = 1 \\
    \displaystyle \frac{q^{n + 1} - 1}{q - 1} & \text{si} ~~ q \ne 1 \\
\end{cases} $$
La serie geométrica es una [[Serie|serie]] q se define para $b \in \mathbb{C}$, como
$$ \sum_{k = 0}^{\infty} b^k $$

Donde las sumas parciales o sumas geométricas son 
$$ \sum_{k = 0}^m b^k = \frac{1 - b^{m + 1}}{1 - b} $$
Por lo tanto, la serie geométrica es 
$$ \sum_{k = 0}^{\infty} b^k = \frac{1}{1 - b} - \frac{b^{m + 1}}{1 - b} $$
Si tomamos que $|b| < 1$, se cumple que 
$$ \sum_{k = 0}^{\infty} b^k = \frac{1}{1 - b} $$

# Observación
---
Las series geométricas son casos específicos de la [[Serie de potencias|serie de potencias]], dado que 
$$ \sum_{k = 0}^{\infty} b^k = f(b) = \sum_{k = 0}^{\infty} c_n \cdot (b - z_0)^k $$
Donde $c_n = 1, \forall n$ y $z_0 = 0$.


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```