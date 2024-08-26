---
dia: 2022-09-28
tags:
  - analisis-3/Funciones-elementales
  - nota/facultad
---
### Definición
---
Se define como
$$\begin{align} 
	senh(z) &= \sum_{n = 0}^{\infty} \frac{1}{(2n +1)!} \cdot z^{2n + 1} = z + \frac{z^3}{3!} + \frac{z^5}{5!} + \frac{z^7}{7!} + \cdots \\
	senh(z) &= \frac{1}{2} \cdot (e^{z} - e^{-z})
\end{align}$$

### Observaciones
---
Donde vemos con la definición del [[Función coseno hiperbólico|coseno hiperbólico]], que cumplen
$$\begin{align} senh'(z) = cosh(z) && cosh'(z) = senh(z) \end{align}$$
También notemos la relación que tiene con el [[Función seno|seno]] donde 
$$ senh(iz) = i \cdot senh(z) $$