---
dia: 2022-09-12
tags:
  - analisis-3/Funciones-elementales
  - nota/facultad
---
### Definición
---
La función $exp : \mathbb{C} \to \mathbb{C}$ esta definida, para cada $z \in \mathbb{C}$, como 
$$ exp(z) := e^z := \sum_{n = 0}^\infty \frac{z^n}{n!} $$
#### Propiedades
---
1) $e^{i \theta} = cos(\theta) + i ~ sen(\theta)$
2) Para $z, w \in \mathbb{C} : exp(z + w) = exp(z) \cdot exp(w)$
3) $exp(x + i ~ y) = e^{x + i ~ y} = e^x ~ e^{i ~ y} = e^x ~ (cos(y) + i ~ sen(y)) = e^x ~ cos(y) + i ~ e^x ~ sen(y)$ 
4) $exp(z + 2k\pi i) = exp(z)$ con $k \in \mathbb{Z}$ 
5) $|exp(x + i \cdot y)| = e^x$
6) Expresión exponencial $z = r \cdot e^{i \cdot \theta} = r \cdot cos(\theta) + i \cdot r \cdot sen(\theta)$ 

#### Propiedades de continuas vs. discretas
---
Hay unas propiedades que dependen de si la [[Señal|señal]] es continua o discreta

##### Señal continua
---
Para el caso continuo tomamos $$ \phi(t) = \exp\left( j k \omega_0 t \right), ~~ t \in \mathbb{R}, ~~ \omega_0 ~ (rad/s) $$
Con periodicidad $T_0 = \frac{2 \pi}{\omega_0}$

###### Ambigüedad
---
Son todas distintas $$ \exp\left( j (\omega_0 + 2 \pi k) ~ t \right) = \exp\left( j \omega_0 ~ t \right) ~ \underbrace{\exp\left( j 2\pi k ~ t \right)}_{\ne 1} \ne \exp\left( j \omega_0 ~ t \right) $$
###### Combinación lineal de señales periódicas
---
No siempre son periódicas, por ejemplo si tenemos $T_1 = 1$ y $T_2 = \sqrt{2}$ por lo tanto no existe un periodo $T_0$, ya que $n_1 ~ T_1 \ne n_2 ~ T_2$

###### Completitud
---
Hay infinitas exponenciales complejas relacionadas armónicamente de periodo $T_0$ $$ \phi_k(t) = \exp\left( j\omega_k t \right) = \exp\left( jk\omega_0 ~ t \right) = \exp\left( jk \frac{2\pi}{T_0} t \right) $$
###### Velocidad de variación
---
La velocidad de variación aumenta linealmente con la [[Función senoidal#Frecuencia|frecuencia]]

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.2, transform shape, thick]
		\draw[->] (-3.5, 0) -- (3.5, 0)
			node[above=2pt] {$\omega$};
		\draw[->] (0, -0.2) -- (0, 2.5)
			node[right=2pt] {Velocidad de variación};
		\draw[ultra thick] (-3, 2) -- (0, 0) -- (3, 2);
	\end{tikzpicture}
\end{document}
```

##### Señal discreta
---
Para el caso discreto tomamos $$ \phi(t) = \exp\left( j k \Omega_0 z \right), ~~ n \in \mathbb{Z}, ~~ \Omega_0 ~ (rad/muestra) $$
No todas las exponenciales complejas son periódicas. Debe cumplirse $$ \Omega_0 N_0 = 2\pi m, ~ m \in \mathbb{Z} $$ donde el periodo del producto es $$ N_0 = \min \Set{\frac{2\pi}{\Omega_0} m}, ~ m \in \mathbb{Z} $$
###### Ambigüedad discreta
---
Dos exponenciales son iguales si $\Omega_0$ varía en un múltiplo entero de $2\pi$ $$ \exp\left( j (\Omega_0 + 2 \pi k) ~ n \right) = \exp\left( j \Omega_0 ~ n \right) ~ \underbrace{\exp\left( j 2\pi k ~ n \right)}_{= 1} = \exp\left( j \Omega_0 ~ n \right) $$ ya que $k \cdot n \in \mathbb{Z}$ 

###### Combinación lineal de señales discretas periódicas
---
Siempre son periódicas $$ N_1, ~ N_2 ~ \to N_0 = mcm \Set{N_1, N_2} $$ 
###### Completitud discreta
---
Sólo hay $N_0$ exponenciales completas relacionadas armónicamente de periodo $N_0$ $$ \begin{align} 
	\displaystyle \phi_k[n] &= \exp\left( j \Omega_k n \right) = \exp\left(  j k \Omega_0 n \right) = \exp\left( j k \frac{2\pi}{N_0} n \right) \\

	\displaystyle \phi_{k + N_0}[n] &= \exp\left( j (k + N_0) \frac{2\pi}{N_0} n \right) = \exp\left( jk \frac{2\pi}{N_0} \right) ~ \underbrace{\exp\left( j N_0 \frac{2\pi}{N_0} n \right)}_{=1} = \phi_k[n]
\end{align} $$
###### Velocidad de variación discreta
---
Frecuencias bajas son las que están cercana a $2\pi k$, mientras que las frecuencias altas son las que están cerca a $\pi ~ (2k + 1)$ 

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.2, transform shape, thick]
		\draw[->] (-3.5, 0) -- (3.5, 0)
			node[above=2pt] {$\Omega$};
		\draw[->] (0, -0.2) -- (0, 2.5)
			node[right=2pt] {Velocidad de variación};

		\clip (-3.2, -1) rectangle (3.2, 2);

		\foreach \x in {-4.5, -3, -1.5, 0, 1.5, 3} {
			\draw[ultra thick] (\x, 0) -- ++(0.75, 1.75)
				-- ++(0.75, -1.75); 
		}

		\draw (-0.75, -0.1) -- (-0.75, 0.1)
			node[above=2pt] {$-\pi$};
		\draw (0.75, -0.1) -- (0.75, 0.1)
			node[above=2pt] {$\pi$};
		\path (-1.5, 0) node[below=2pt] {$-2\pi$};
		\path (1.5, 0) node[below=2pt] {$2\pi$};
	\end{tikzpicture}
\end{document}
```

