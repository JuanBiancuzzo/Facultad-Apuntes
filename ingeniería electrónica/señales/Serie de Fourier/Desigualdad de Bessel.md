---
dia: 2024-03-26
tags:
  - carrera/ingeniería-electrónica/señales/Serie-de-Fourier
  - nota/facultad
vinculoFacultad:
  - tema: Serie de Fourier
    capitulo: 3
    materia: Señales y sistemas
    carrera: Ingeniería electrónica
---
# Definición
---
Sabemos que la [[Serie de Fourier|suma de Fourier]] esta definida como $$ \hat{x}_N(t) = \sum_{k = -N}^{N} a_k ~ \exp\left( jk\omega_0 t \right) $$
Donde definimos $$ a_k = \langle x(t), \exp\left( jk\omega_0 t \right) \rangle $$
Podemos hacer tender $N \to \infty$ para obtener  $$ \lVert x(t) \rVert^2 = \frac{1}{T} \int_0^T |x(t)|^2 ~ dt \ge \sum_{k = -\infty}^{\infty} |a_k|^2 $$ 
Esto es lo que se denomina la desigualdad de Bessel 

## Desarrollo
---
Considerando una [[Señal|señal]] de [[Energía de una señal|energía]] finita $L_2([0, T))$, con [[Producto interno|producto interno]] $$ \langle f(t), g(t) \rangle = \frac{1}{T} \int_0^T f(t) ~ g^*(t) ~ dt $$ y [[Base ortonormal|base ortonormal]] dada por $$ \Set{ 
	\cdots,
	\exp\left( -2 j\omega_0 t \right),
	\exp\left( -j\omega_0 t \right),
	1,
	\exp\left( j\omega_0 t \right),
	\exp\left( 2 j\omega_0 t \right),
	\cdots 
}, ~ \omega_0 = \frac{2\pi}{T} $$
Vamos a tomar la siguiente aproximación de $x(t) \in L_2([0, L))$ $$ \hat{x}_N(t) = \sum_{k = -N}^{N} a_k ~ \exp\left( jk\omega_0 t \right) $$
Ahora considerando la [[Distancia euclidiana|distancia]] entre $x(t)$ y $\hat{x}(t)$ $$ \lVert x(t) - \hat{x}_N(t) \rVert^2 = \frac{1}{T} \int_0^T | x(t) - \hat{x}_N(t) |^2 ~ dt = \frac{1}{T} \int_0^T \left| x(t) - \sum_{k = -N}^{N} b_k ~ \exp\left( jk\omega_0 t \right)  \right|^2 ~ dt $$
Que podemos reescribirlo como $$ \begin{align} 
	\lVert x(t) - \hat{x}_N(t) \rVert^2 &= \langle x(t) - \hat{x}_N(t), x(t) - \hat{x}_N(t) \rangle \\
	&= \lVert x(t) \rVert^2 - \langle x(t), \hat{x}_N(t) \rangle - \langle \hat{x}_N(t), x(t) \rangle + \lVert \hat{x}_N(t) \rVert^2
\end{align} $$
Por lo que podemos analizar término a término $$ \lVert x(t) \rVert^2 = \frac{1}{T} \int_0^T |x(t)|^2 ~ dt $$ $$ \begin{align} 
	\lVert \hat{x}_N(t) \rVert^2 &= \frac{1}{T} \int_0^T \left| \sum_{k = -N}^{N} b_k ~ \exp\left( jk\omega_0 t \right)  \right|^2 ~ dt \\
	&= \frac{1}{T} \int_0^T \sum_{k = -N}^{N} \sum_{p = -N}^{N} b_k b_p^*  ~ \exp\left( jk\omega_0 t \right) ~ \exp\left( -jp\omega_0 t \right)  ~ dt \\
	&= \sum_{k = -N}^{N} \sum_{p = -N}^{N} b_k b_p^*  ~ \frac{1}{T} \int_0^T \exp\left( jk\omega_0 t \right) ~ \exp\left( -jp\omega_0 t \right)  ~ dt
\end{align}
$$
Donde sabemos que $$ \frac{1}{T} \int_0^T \exp\left( jk\omega_0 t \right) ~ \exp\left( -jp\omega_0 t \right) = \begin{cases} 
	1 & \text{si} ~ p = k \\
	0 & \text{si} ~ p \ne k \\ 
\end{cases} ~~  = \delta[p - k] $$
Por lo que se simplifica a $$ \lVert \hat{x}_N(t) \rVert = \frac{1}{T} \int_0^T | \hat{x}_N(t) |^2 ~ dt = \sum_{k = -N}^{N} |a_k|^2 $$
Por último $$ \langle x(t), \hat{x}_N(t) \rangle = \sum_{k = -N}^{N} a_k^* \frac{1}{T} \int_0^T x(t) ~ \exp(-jk\omega_0 t) ~ dt = \sum_{k = -N}^{N} |a_k|^2 $$ notemos que $\langle x(t), \hat{x}_N(t) \rangle = \langle \hat{x}_N(t), x(t) \rangle$ por lo tanto nos queda 

$$ \lVert x(t) - \hat{x}_N(t) \rVert^2 = \frac{1}{T} \int_0^T |x(t)|^2 ~ dt - \sum_{k = -N}^{N} |a_k|^2 $$

Como $\lVert x(t) - \hat{x}_N(t) \rVert^2 \ge 0$ encontramos la desigualdad, donde si esta desigualdad pasa a ser una igualdad, es decir $$ \frac{1}{T} \int_0^T |x(t)|^2 ~ dt = \sum_{k = -N}^{N} |a_k|^2 $$ se la conoce como la [[Igualdad de Parseval|igualdad de Perseval]]

