---
etapa: terminado
dia: 2026-07-22
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 238
---
# Enunciado
---
Sea $x(t) = \exp(j \omega_0 t)$ la [[ingeniería electrónica/señales/Señales y sistemas/Señal compleja|señal exponencial compleja en tiempo continuo]] con [[ingeniería electrónica/analisis 3/Serie de Fourier/Función periódica#^periodo|período]] fundamenteal $T_0 = \frac{2\pi}{\omega_0}$. Sea la siguiente [[ingeniería electrónica/señales/Señales y sistemas/Señal#^discreta|señal discreta]] obtenida al tomar muestras de $x(t)$ equispaciadas: $$ x_d(n) = x(n ~ T_s) = \exp(j \omega_0 t) \biggm|_{t = n ~ T_s} = \exp(j\omega_0 n ~ T_s) $$
1. Demostrar que $x_d(n)$ es periódica si y sólo si $\frac{T_0}{T_s}$ es un [[Número racional|número racional]] 

2. Determinar el período y la [[ingeniería electrónica/analisis 3/Serie de Fourier/Función periódica#Frecuencia|frecuencia]] fundamental de $x_d(n)$ cuando ésta es periódica. Expresar la frecuencia fundamental como una fracción de $T_0$

 3. ¿Cuántos periodos de $T_0$ se necesitan para obtener las muestras que forman un solo período de $x_d(n)$ en el caso que ésta última es periódica? 

# Resolución
---
## Punto 1
---
Para poder decir que $\frac{T_0}{T_s}$ es un número racional, debemos llegar a una expresión tal que $$ \frac{T_0}{T_s} = \frac{a}{b}, ~ \text{con} ~ a, ~ b \in \mathbb{Z}, ~ \text{donde} ~ b \ne 0 $$

Como planteamos que  $x_d(n)$ es periódica, podemos decir que $$ x_d(n) = x_d(n + N), ~  N \in \mathbb{Z} $$ donde $N$ es el período de $x_d(n)$.

Usando la igualdad entra $x_d(n)$ y $x(n)$, podemos decir que $$ x_d(n + N) = x( T_s ( n + N ) ) = \exp\left( j \omega_0 T_s (n + N) \right) = \exp\left( j 2 \pi \frac{T_s}{T_0} ( n + N ) \right), ~ m \in \mathbb{Z} $$

Si se cumple que $x_d(n) = x_d(n + N)$ si $$ \exp\left(j 2 \pi \frac{T_s}{T_0} n\right) ~ \underbrace{\exp\left(j 2 \pi \frac{T_s}{T_0} N \right)}_{=1} = \exp\left(j 2 \pi \frac{T_s}{T_0} n \right) $$

Para que sea igual a $1$, tiene que ser un múltiplo de $2\pi$, por lo que podemos decir $$ \begin{equation*}
    2 \pi \frac{T_s}{T_0} N = 2 \pi k, ~ k \in \mathbb{Z}
\end{equation*} $$

Por lo tanto $$ \frac{T_0}{T_s} = \frac{N}{k} \in \mathbb{Q} $$ encontrando así que es una relación racional

## Punto 2
---
Como mencionábamos en el punto anterior, $x_d(n) = x_d(n + N)$ donde $N$ es el período de $x_d(n)$, y encontramos que $$ \frac{T_0}{T_s} = \frac{N}{k} $$

Despejando el período, nos queda $$ k \frac{T_0}{T_s} = N $$ donde si queremos encontrar el período fundamental tendríamos que encontrar el valor, [[licenciatura en ciencias matemáticas/algebra 1/Números naturales e Inducción/Números Naturales|natural]], más chico, por lo tanto $$ \begin{equation*}
    \exists k_0 : ~ N_0 = k_0 \frac{T_0}{T_s} \le k \frac{T_0}{T_s}, \forall k \in \mathbb{N} ~ \text{con} ~  k \frac{T_0}{T_s} \in \mathbb{N}
\end{equation*} $$

Conociendo $N_0$ podemos encontrar la frecuencia fundamental como $$ \omega_N = \frac{1}{N_0} = \frac{T_s}{T_0 ~ k_0} $$

## Punto 3
---
Sabemos que se cumple la relación $$ \frac{T_0}{T_s} = \frac{N_0}{k} $$ donde $T_0$ es el periodo de $x(t)$, $T_s$ es la distancia entre los puntos de la señal $x_d(n)$, $N_0$ es el periodo fundamental de $x_d(n)$ y $k$ es un número natural.

Tenemos que encontrar cuantos periodos $T_0$ se necesitan para obtener un único período de $x_d(n)$. Para eso necesitamos encontrar $k$ tal que $$ k ~ T_0 = T_s ~ N_0 $$ pero notemos que esta relación ya la tenemos, pero hay que recordar que tiene que ser un único periodo de $x_d(n)$ por lo tanto tenemos que restringir $k$ para que cumpla esa relación, es decir encontrar el $k_0$ mencionado en el punto anterior.

Buscando esta relación, encontramos que $k_0$ tiene que ser $$ k_0 = \frac{mcm(k, N_0)}{N_0} $$

Esta es la cantidad de periodos que $x(t)$ tiene que tener para que se cumpla un periodo de $x_d(n)$
