---
dia: 2024-04-15
materia: señales
capitulo: 4
---
### Definición
---
Podemos definir la [[Transformada de Fourier|transformada de Fourier]] para [[Señal#^02aea6|señales de tiempo discreto]]. Consideremos una señal $x(n)$. Se define la transformada de Fourier de $x(n)$ o $X\left(e^{j\Omega}\right) \equiv \mathcal{F}\Set{x(n)}$ como $$ X\left(e^{j\Omega}\right) = \sum_{n = -\infty}^{\infty} x(n) ~ \exp(-j\Omega n), ~~~ \Omega \in [-\pi, ~\pi) $$
La definición dada arriba de la transformada de Fourier tiene sentido siempre y cuando $X\left(e^{j\Omega}\right)$ esté bien definida. Es decir la [[Serie|serie]] debe existir para todo $\Omega$ y ser finita. Esto por ejemplo se cumple si $x(n) \in l_1(\mathbb{Z})$

La transformada de Fourier $\mathcal{F}$ se debe interpretar como un [[Operador|operador]] que mapea señales $x(n)$ en un determinado [[Espacio vectorial|espacio vectorial]] y entrega señales $X\left(e^{j\Omega}\right)$ en otro espacio vectorial donde podamos obtener caracterizaciones útiles de la señal original.

Notar que definimos la transformada para $\Omega \in [-\pi, ~ \pi)$. Esto es así por que en caso discreto la transformada de Fourier es claramente una [[Función periódica|función periódica]] por lo que podemos restringir el análisis de $X\left(e^{j\Omega}\right)$ a dicho intervalo. Esto se puede probar con las propiedades de una [[Función exponencial#Señal discreta|exponencial discreta]]

#### Teorema
---
Sobre el espacio $l_2(\mathbb{Z})$ el operador $x(n) \to \mathcal{F}\Set{x(n)}$ es [[Función biyectiva|biyectiva]], usando un sentido cuadrático en $L_2([-\pi, \pi)$. Además para cada $x(n) \in l_2(\mathbb{Z})$ existe su transformada de Fourier $X\left(e^{j\Omega}\right) \equiv \mathcal{F}\Set{x(n)}$  la cual es de [[Medida de una señal#Energía|energía]] finita. Así mismo para cada señal $X\left(e^{j\Omega}\right) \in L_2([-\pi, ~\pi))$ existe $x(n) \equiv \mathcal{F}^{-1}\Set{x(n)}$ también de energía finita. Además se cumple la [[Igualdad de Parseval|relación de Parseval]] $$ \sum_{k = -\infty}^{\infty} |x(n)|^2 = \frac{1}{2\pi} \int_{-\pi}^{\pi} \left| X\left(e^{j\Omega}\right) \right|^2 ~ d\Omega $$

#### Relación con la serie de Fourier
---
Veamos que $X\left(e^{j\Omega}\right)$ es una función periódica con periodo $2\pi$. Como tal se pueden calcular sus [[Coeficientes de Fourier|coeficientes de Fourier]] $$ a_k = \frac{1}{2\pi} \int_{-\pi}^{\pi} X\left(e^{j\Omega}\right) ~ \exp(-j\Omega k) ~ d\Omega $$
Es claro, referenciando la [[Antitransforamda de Fourier en tiempo discreto|antitransformada]] que $a_k = x(-k)$, lo que refleja que tenemos una relación de dualidad entre la transformada de Fourier de tiempo discreto y la [[Serie de Fourier|serie de Fourier de tiempo continuo]]. 

#### Propiedades
---
Vamos a asumir que todas las señales involucradas tienen bien definida su transformada de Fourier

##### Linealidad
---
Sean $x(n)$ e $y(n)$ [[Función|funciones]] tales que $X\left( e^{j\Omega} \right) = \mathcal{F}\Set{x(n)}$ e $Y\left( e^{j\Omega} \right) = \mathcal{F}\Set{y(n)}$. Tenemos que $$ \mathcal{F}\Set{ a~ x(n) + b ~ y(n) } = a ~ X\left( e^{j\Omega} \right) + b ~ Y\left( e^{j\Omega} \right), ~~~ \forall a, b \in \mathbb{C} $$

##### Desplazamiento temporal
---
Sea $x(n)$ tal que $X\left( e^{j\Omega} \right) = \mathcal{F}\Set{x(n)}$. Entonces valen $$ \begin{matrix} 
	\mathcal{F}\Set{x(n - n_0)} = \exp(-j\Omega n_0) X\left( e^{j\Omega} \right), ~~~ n_0 \in \mathbb{Z} \\
	\mathcal{F}\Set{\exp(j\Omega_0 n) ~ x(n)} = X\left( e^{j(\Omega - \Omega_0)} \right), ~~~ \Omega_0 \in [-\pi, ~ \pi)
\end{matrix} $$
##### Conjugación y simetría conjugada
---
Sea $x(n)$ tal que $X\left( e^{j\Omega} \right) = \mathcal{F}\Set{x(n)}$. Entonces valen $$ \mathcal{F}\Set{x^*(n)} = X\left( e^{-j\Omega} \right), ~~~ n_0 \in \mathbb{Z} $$
Claramente si $x(n)$ es real tenemos que $X^*\left( e^{j\Omega} \right) = X\left( e^{-j\Omega} \right)$

##### Diferencia
---
Siendo el equivalente de la [[Transformada de Fourier#Derivación|derivación para la transformada de Fourier]]. Sea $x(n)$ tal que $X\left( e^{j\Omega} \right) = \mathcal{F}\Set{x(n)}$. Entonces valen $$ \mathcal{F}\Set{x(n) - x(n - 1)} = (1 - \exp(-j\Omega)) ~ X\left( e^{j\Omega} \right) $$

##### Acumulación
---
Siendo el equivalente de la [[Transformada de Fourier#Integración|integración para la transformada de Fourier]]. Sea $x(n)$ tal que $X\left( e^{j\Omega} \right) = \mathcal{F}\Set{x(n)}$. Siendo $\sum_{k = -\infty}^{\infty} x(k) = 0$, tenemos que $$ \mathcal{F}\Set{ \sum_{k = -\infty}^{n} x(k) } = \frac{1}{1 - \exp(-j\Omega)} X\left( e^{j\Omega} \right) $$
En el caso que no sea igual a $0$ se modifica como $$ \mathcal{F}\Set{ \sum_{k = -\infty}^{n} x(k) } = \frac{1}{1 - \exp(-j\Omega)} X\left( e^{j\Omega} \right) + \pi X\left( e^{j0} \right) ~ \sum_{k = -\infty}^{\infty} \delta(\Omega  2\pi k) $$
##### Convolución
---
Sea $x(n)$ tal que $X\left( e^{j\Omega} \right) = \mathcal{F}\Set{x(n)}$ e $y(n)$ tal que $Y\left( e^{j\Omega} \right) = \mathcal{F}\Set{y(n)}$. Sea $z(n) = x(n) \ast y(n)$. Tenemos $$ \mathcal{F}\Set{z(n)} = X\left( e^{j\Omega} \right) ~ Y\left( e^{j\Omega} \right) $$

##### Multiplicación
---
Sea $x(n)$ tal que $X\left( e^{j\Omega} \right) = \mathcal{F}\Set{x(n)}$ e $y(n)$ tal que $Y\left( e^{j\Omega} \right) = \mathcal{F}\Set{y(n)}$. Sea $z(n) = x(n) ~ y(n)$. Tenemos $$ \mathcal{F}\Set{z(n)} = \frac{1}{2\pi} \int_{-\pi}^{\pi} X\left( e^{j\nu} \right) ~ Y\left( e^{j(\Omega - \nu)} \right) ~ d\nu $$
Donde esta es similar a la [[Convolución|convolución tradicional]] o aperiódica, ya que no va desde $-\infty$ a $\infty$, esta al ir desde $-\pi$ a $\pi$ se la conoce como [[Convolución periódica|convolución periódica]].