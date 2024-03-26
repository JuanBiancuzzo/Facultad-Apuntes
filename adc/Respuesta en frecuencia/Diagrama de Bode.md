---
dia: 2023-11-17
materia: adc
capitulo: 5
---
### Definición
---
Los diagramas de Bode son gráficas semi[[Función logaritmica|logarítmicas]] de la magnitud (en [[Decibel|decibeles]]) y de la fase de una [[Función de transferencia|función de transferencia]] ($H(s)$) en función de [[Función senoidal#Frecuencia|frecuencia]].

Viendo el efecto que tiene las propiedades de los [[Función logaritmica|logaritmos]] y las características de los [[Decibel|dB]], podemos sumar las contribuciones independientes de la constante, de cada [[Singularidad|polo]] y de cada cero. Por lo tanto, podemos verlas por separado

#### Término [[Función constante|constante]]
---
Para la ganancia $K > 0$, la magnitud es de $20 ~ \log (K)$ y la fase es de $n \cdot 2 \pi$ con $n \in \mathbb{Z}$. 

![[Diagrama de Bode para el término constante.webp]]

Para el caso de $K < 0$ la magnitud no cambia, pero la fase vale $(1 + 2n) \cdot 2 \pi$ con $n \in \mathbb{Z}$.

#### Cero (o [[Singularidad|polo]]) en el origen
---
Para el cero $(s^N = (\sigma + j ~ \omega)^N)$ magnitud es de $20 ~ \log (\omega)$, y la fase correspondiente a $N\pi$. Su pendiente es de $20 N ~ \frac{dB}{\text{década}}$

Para el [[Singularidad|polo]] $\left(\frac{1}{s^N} = \frac{1}{(\sigma + j ~ \omega)^N} \right)$ magnitud es de $20 ~ \log (\omega)$, y la fase correspondiente a $-N \pi$. Su pendiente es de $-20 N ~ \frac{dB}{\text{década}}$ 

![[Diagrama de Bode para ceros o polos en el origen.webp]]

#### Ceros
---
Para la magnitud $$ \begin{align} 
	H_{dB}(s) &= 20 ~ \log \left| 1 + \frac{s}{z_1} \right|^N \\
	& \implies \displaystyle \lim_{\omega \to 0} H_{dB}(s) = 0 \\
	& \implies \displaystyle \lim_{\omega \to \infty} H_{dB}(s) = \infty \\
\end{align} $$ donde $N$ es el orden de la raíz.

Para la fase $$ \phi = \tan^{-1} \left( \frac{s}{z_1} \right)^N = \begin{cases} 
	0, & \omega = 0 \\
	N \frac{\pi}{2}, & \omega = z_1 \\
	N \pi, & \omega \to \infty
\end{cases} $$
Con una pendiente de $20 N ~ \frac{dB}{\text{década}}$

![[Diagrama de Bode para cero simple.webp]]

#### [[Singularidad|Polo]] simple
---
Similar al cero simple, para la magnitud $$ \begin{align} 
	H_{dB}(s) &= -20 ~ \log \left| 1 + \frac{s}{p_1} \right|^N \\
	& \implies \displaystyle \lim_{\omega \to 0} H_{dB}(s) = 0 \\
	& \implies \displaystyle \lim_{\omega \to \infty} H_{dB}(s) = -\infty \\
\end{align} $$ donde $N$ es el orden de la raíz.

Para la fase $$ \phi = \tan^{-1} \left( \frac{p_1}{s} \right)^N = \begin{cases} 
	0, & \omega = 0 \\
	- N \frac{\pi}{2}, & \omega = p_1 \\
	-N \pi, & \omega \to \infty
\end{cases} $$
Con una pendiente de $-20 N ~ \frac{dB}{\text{década}}$
#### [[Singularidad|Polos]] (o ceros) complejos conjugados
---
Para la magnitud $$ \begin{align} 
	H_{dB}(s) &= -20 \log \left| \left(1 + \frac{s}{p_i} \right) \left(1 + \frac{s}{p_i^*} \right) \right| \\
	&= -20 \log \left| 1 + s \frac{p_i + p_i^*}{p_i p_i^*} + \frac{s^2}{p_i p_i^*} \right| \\
	H_{dB}(s) &= -20 \log \left| 1 + s \frac{2 \zeta_2}{\omega_n} + \left(\frac{s}{\omega_n}\right)^2 \right|
\end{align} $$
![[Diagrama de Bode para polos complejos conjugados.webp]]

Con una pendiente de $-40 ~ \frac{dB}{\text{década}}$.

Para el cero complejo conjugado los diagramas quedan invertidos. La magnitud tiene una pendiente de $40 ~ \frac{dB}{\text{década}}$ y la fase tiene una pendiente de $\pi$ por década.