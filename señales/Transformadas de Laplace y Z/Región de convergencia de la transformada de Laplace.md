---
dia: 2024-03-11
capitulo: 7
aliases:
  - ROC de la transformada de Laplace
tags:
  - señales/Transformadas-de-Laplace-y-Z
---
### Definición
---
Se define la región de convergencia de la [[Transformada de Laplace|transformada de Laplace]] $x(t) \xleftrightarrow{~~\mathcal{L}} X(s)$ como $$ ROC\Set{X(s)} = \Set{ s = \sigma + j \omega \in \mathbb{C}: \int_{-\infty}^{\infty} \lvert x(t) ~ \exp(-\sigma t) \rvert ~ dt < \infty } $$
Notemos que la región de convergencia de una señal $x(t)$ esta definido por todos aquellos puntos $s \in \mathbb{C}$ donde $x(t) ~ \exp(-\sigma)$ es [[Absolutamente integrable|absolutamente integrable]], lo que implica que la [[Transformada de Fourier|transformada de Fourier]] de $x(t) ~ \exp(-\sigma)$ está bien definida

#### Propiedades
---
Dado que la ROC es muy importante para la especificación de la transformada de Laplace de una [[Señal|señal]] temporal, exploraremos algunas conexiones entre las características de la señal y la correspondiente ROC

1. La ROC de $X(s)$ consiste en bandas paralelas al eje $j\omega$ en el plano $\mathbb{C}$ 
   
2. La ROC de $X(s)$ (racional) no contiene ningún [[Singularidad|polo]]
   
3. Si $x(t)$ es de duración finita y [[Absolutamente integrable|absolutamente integrable]], entonces la ROC es el plano $\mathbb{C}$ completo
   
4. Si $x(t)$ es una señal derecha ($\exists ~ T_1$ tal que $x(t) = 0 ~ \forall t < T_1$) y $Re\Set{s} = \sigma_1$ está en la ROC entonces $$ \Set{ s \in \mathbb{C} : Re\Set{s} > \sigma_1 } \subseteq ROC \Set{ X(s) } $$
5. Si $x(t)$ es una señal izquierda ($\exists ~ T_1$ tal que $x(t) = 0 ~ \forall t > T_1$) y $Re\Set{s} = \sigma_1$ está en la ROC entonces $$ \Set{ s \in \mathbb{C} : Re\Set{s} < \sigma_1 } \subseteq ROC \Set{ X(s) } $$
6. Si $x(t)$ es una señal bilateral y la lineal $Re\Set{s} = \sigma_1$ está en la ROC, la ROC será un banda en $\mathbb{C}$ que incluye a $Re\Set{s} = \sigma_1$
   
7. Si $x(t)$ cuya transformada de Laplace es racional, su ROC está limitada por sus polos o se extiende al infinito. Además ningún polo está contenido en la ROC
	* Si $x(t)$ es derecha la ROC será el semiplano derecho limitado por el polo que se encuentra más hacia la derecha
	* Si $x(t)$ es izquierda la ROC será el semiplano izquierdo limitado por el polo que se encuentra más hacia la izquierda

##### Linealidad
---
Sean $x(t) \xleftrightarrow{~~\mathcal{L}} X(s)$ e $y(t) \xleftrightarrow{~~\mathcal{L}} Y(s)$. Entonces tenemos que $$ ROC\Set{ \alpha X(s) + \beta Y(s) } \supseteq ROC\Set{X(s)} \cap ROC\Set{Y(s)} $$

##### Desplazamiento temporal y desplazamiento en la frecuencia
---
Sea $x(t) \xleftrightarrow{~~\mathcal{L}} X(s)$. Entonces tenemos que $$ \begin{array}{c} 
	x(t - t_0) \xleftrightarrow{~~\mathcal{L}} e^{-s t_0} ~ X(s) \\
	ROC\Set{ e^{-st_0} X(s) } = ROC\Set{X(s)}
\end{array} $$
$$ \begin{array}{c} 
	x(t) e^{s_0 t} \xleftrightarrow{~~\mathcal{L}} X(s - s_0) \\
	ROC\Set{ X(s - s_0) } = ROC\Set{X(s)} + Re\Set{s_0}
\end{array} $$

##### Escalamiento temporal
---
Sea $x(t) \xleftrightarrow{~~\mathcal{L}} X(s)$. Entonces tenemos que $$ \begin{array}{c} 
	\displaystyle x(\alpha ~ t) \xleftrightarrow{~~\mathcal{L}} \frac{1}{|\alpha|} ~ X\left( \frac{s}{\alpha} \right) \\
	\displaystyle ROC\Set{ \frac{1}{|\alpha|} ~ X\left( \frac{s}{\alpha} \right) } = \frac{ROC\Set{X(s)}}{\alpha}
\end{array} $$

##### Convolución
---
Sean $x(t) \xleftrightarrow{~~\mathcal{L}} X(s)$ e $y(t) \xleftrightarrow{~~\mathcal{L}} Y(s)$. Entonces tenemos que $$ \begin{array}{c} 
	x(t) \ast y(t) \xleftrightarrow{~~\mathcal{L}} X(s) ~ Y(s) \\
	\displaystyle ROC\Set{ \alpha X(s) + \beta Y(s) } \supseteq ROC\Set{X(s)} \cap ROC\Set{Y(s)}
\end{array} $$

##### Diferenciación
---
Sea $x(t) \xleftrightarrow{~~\mathcal{L}} X(s)$. Entonces tenemos que $$ \begin{array}{c} 
	\displaystyle \frac{x(t)}{dt} \xleftrightarrow{~~\mathcal{L}} s ~ X(s) \\
	ROC\Set{s ~ X(s)} \supseteq ROC\Set{X(s)}
\end{array} $$

##### Integración
---
Sea $x(t) \xleftrightarrow{~~\mathcal{L}} X(s)$. Entonces tenemos que $$ \begin{array}{c} 
	\displaystyle \int_{-\infty}^{t} x(\tau) ~ d\tau \xleftrightarrow{~~\mathcal{L}} \frac{X(s)}{s} \\
	\displaystyle ROC\Set{\frac{X(s)}{s}} \supseteq ROC\Set{X(s)} \cap \set{s \in \mathbb{C} : Re\Set{s} > 0}
\end{array} $$
