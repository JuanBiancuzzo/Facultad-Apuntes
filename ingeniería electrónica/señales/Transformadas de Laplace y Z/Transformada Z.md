---
dia: 2024-05-29
tags:
  - carrera/ingeniería-electrónica/señales/Transformadas-de-Laplace-y-Z
  - nota/facultad
---
# Definición
---
Se define la transformada Z de $x(n)$ de la siguiente forma $$ X(z) = \sum_{k = -\infty}^{\infty} x(k) ~ z^{-k} $$
En forma compacta podemos denotar la operación de tomar la transformada Z de una [[Señal|señal]] como $$ x(n) \xleftrightarrow{~~\mathcal{Z}} X(z) $$
La transformada Z de una señal $x(n)$ está definida no sólo por la forma algebraica dada por $X(z)$ sino también por su correspondiente [[Región de convergencia de la transformada Z|ROC]]. Ambos elementos son igualmente importantes para la definición de la transformada Z

Sabemos que si $x(n) = z^n$ con $z \in \mathbb{C}$ la salida de un [[Sistema lineal e invariante en el tiempo|sistema LTI]] con [[Respuesta en frecuencia|respuesta al impulso]] $h(n)$ se puede escribir como $$ y(n) = H(z) ~ z^n $$ donde $$ H(z) = \sum_{k = -\infty}^{\infty} h(k) ~ z^{-k} $$ es la [[Transferencia del sistema|transferencia del sistema]]. Donde podemos ver la relación con la transformada Z

## Relación con la transformada de Fourier
---
Cuando $z = e^{j\Omega}$ obtenemos $$ X\left( e^{j\Omega} \right) = \sum_{k = -\infty}^{\infty} x(k) ~ e^{-j\Omega k} $$ lo que equivale a escribir $$ X(z) \biggm|_{z = e^{j\Omega}} = \mathcal{F}[x[n]] $$ siempre y cuando la [[Transformada de Fourier|transformada de Fourier]] de la señal $x(n)$ exista. Definimos $z = r ~ e^{j\Omega}$ con $r \ge 0$ y $\Omega \in [0, 2\pi)$

## Propiedades
---
Analicemos algunas propiedades de la transformada

### Linealidad
---
Sea $x(n) \xleftrightarrow{~~\mathcal{Z}} X(z)$ y $y(n) \xleftrightarrow{~~\mathcal{Z}} Y(z)$. Tenemos que $$ \alpha x(n) + \beta y(n) \xleftrightarrow{~~\mathcal{Z}} \alpha X(z) + \beta Y(z) $$ con $$ ROC\Set{ \alpha X(z) + \beta Y(z) } \supseteq ROC\Set{ X(z) } \cap ROC\Set{ Y(z) } $$

### Desplazamiento en el tiempo y desplazamiento en frecuencia
---
Consideremos $x(n) \xleftrightarrow{~~\mathcal{Z}} X(z)$. Tenemos las siguientes propiedades $$ x(n - n_0) \xleftrightarrow{~~\mathcal{Z}} z^{-n_0} X(z) $$ donde $$ ROC\Set{ z^{-n_0} X(z) } = ROC\Set{ X(z) } $$ con la posible supresión de $z = 0$ o el punto en el infinito. También tenemos $$ z^{z_0} ~ x(n) \xleftrightarrow{~~\mathcal{Z}} X\left( \frac{z}{z_0} \right) $$ donde $$ ROC\Set{ X\left( \frac{z}{z_0} \right) } = |z_0| ~ ROC\Set{ X(z) } $$

### Diferenciación
---
Consideremos $x(n) \xleftrightarrow{~~\mathcal{Z}} X(z)$. Tenemos que $$ n ~ x(n) \xleftrightarrow{~~\mathcal{Z}} -z \frac{dX(z)}{dz} $$ donde $$ ROC\Set{ -z \frac{dX(z)}{dz} } = ROC\Set{ X(z) } $$

### Conjugación
---
Consideremos $x(n) \xleftrightarrow{~~\mathcal{Z}} X(z)$. Tenemos que $$ x^*(n) \xleftrightarrow{~~\mathcal{Z}} X^*(z^*) $$ donde $$ ROC\Set{ X^*(z^*) } = ROC\Set{ X(z) } $$

### Reflexión temporal
---
Sea $x(n) \xleftrightarrow{~~\mathcal{Z}} X(z)$. Se puede escribir $$ x^*(-n) \xleftrightarrow{~~\mathcal{Z}} X^*\left( \frac{1}{z^*} \right) $$ donde $$ ROC\Set{ X^*(z^*) } = \frac{1}{ROC\Set{ X(z) }} $$

### Convolución
---
Sea $x(n) \xleftrightarrow{~~\mathcal{Z}} X(z)$ y $y(n) \xleftrightarrow{~~\mathcal{Z}} Y(z)$. Tenemos que $$ z(n) = x(n) \ast y(n) \xleftrightarrow{~~\mathcal{Z}} X(z) ~ Y(z) $$ donde $$ ROC\Set{ X(z) ~ Y(z) } \supseteq ROC\Set{ X(z) } \cap ROC\Set{ Y(z) } $$

### Teorema del valor inicial y final
---
Sea $x(n)$ tal que es cero para $n < 0$. Entonces vale $$ x(0) = \lim_{z \to \infty} X(z) $$ 
Además si existe $\displaystyle \lim_{n \to \infty} x(n)$ teneos que $$ \lim_{n \to \infty} x(n) = \lim_{z \to 1} (z - 1) ~ X(z) $$

