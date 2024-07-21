---
dia: 2024-05-22
capitulo: 6
tags:
  - señales/Transformada-discreta-de-Fourier
  - nota
---
### Definición
---
Es un [[Muestreo|muestreo]] equispaciado en frecuencia de la [[Transformada de Fourier|transformada de Fourier]] de una secuencia de [[Señal#^02aea6|tiempo discreto]]

  Consideremos las exponenciales discretas con frecuencia fundamentales $\frac{2\pi}{N}k$ $$ \begin{align} 
	W_N &= \exp\left(-j\frac{2\pi}{N}\right) \\
	W_N^{kn} &= \exp\left(-j\frac{2\pi}{N}kn\right), ~~~ n, ~k \in \mathbb{Z} \\
	&= W_N^{(pN + k)n} = W_N^{k(pN+n)}, ~~~ \forall p \in \mathbb{Z} \\
\end{align} $$
Sólo existen $N$ [[Función exponencial#Señal discreta|exponencial discretas]] distintas con frecuencia fundamental $\Omega_0 = \frac{2\pi}{N}$. Esto es sustancialmente diferente al caso continuo

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\tikzmath {
		\radio = 1;
		\ymax = 1.8;
		\xmax = 1.5;
		\puntos = 10; 
	}
	\begin{tikzpicture}[scale=1.5, transform shape,
		declare function = {
			DFTX(\kn) = cos(-360 * \kn / \puntos);
			DFTY(\kn) = sin(-360 * \kn / \puntos);
		}
	]
		\foreach \it in {1, ..., 4} {
			\tikzmath { 
				\cX = 4.5 * Mod(\it - 1, 2);
				\cY = -4.5 * floor( (\it - 1) / 2); 
			}
			\coordinate (centro) at (\cX, \cY);
	
			\draw ($ (centro) + (0, -\ymax) $)
				-- ($ (centro) + (0, \ymax) $)
					node[right=2pt, scale=0.7] 
						{$Im\left(W_{\puntos}^{\it n}\right)$};
			\draw ($ (centro) + (-\xmax, 0) $) -- ($ (centro) + (\xmax, 0) $);
			
			\draw[dashed] (centro) circle (\radio);
			\tikzmath { 
				\maxpuntos = ifthenelse( 
					iseven(\it),  
					int(\puntos / 2),
					\puntos
				); 
			}
			\foreach \i in {1, ..., \maxpuntos} {
				\tikzmath { \n = int(\i - 1); }
				\draw[thick, cyan] ($ (centro) + (
							{\radio * DFTX(\it * \n)}, 
							{\radio * DFTY(\it * \n)}
					) $) circle (0.1);

				\tikzmath {
					\siguiente = int(\n + 5);
					\label = ifthenelse(
						iseven(\it),
						"\n, \siguiente",
						"\n"
					);
				}
				\path ($ (centro) + (
					{(\radio + 0.4) * DFTX(\it * \n)}, 
					{(\radio + 0.4) * DFTY(\it * \n)}
				) $) node[scale=0.6] {$ n = \label $};
			}
		}
	\end{tikzpicture}
\end{document}
```

$$ \begin{array}{c} 
	\tilde{x} =  \tilde{x}[n + N], ~~ \forall n \in \mathbb{Z}, ~~ N \in \mathbb{Z} \\
	\tilde{x}[n] \xleftrightarrow{~\mathcal{FS}} a[k] \\
	a[k] = a[k + rN], ~~~ \forall r \in \mathbb{Z}
\end{array} $$

Podemos escribir, cambiando levemente la definición $$ \begin{align}
	a[k] &= \sum_{n = 0}^{N - 1} \tilde{x}[n] W_N^{kn}, & \text{Ecuación de análisis} \\
	\tilde{x}[n] &= \frac{1}{N} \sum_{k = 0}^{N - 1} a[k] W_N^{-kn}, & \text{Ecuación de sintésis}
\end{align} $$
En forma matricial $$ \begin{align} 
	a &= W x \\
	x &= \frac{1}{N} W^H a \\
	x &= [\tilde{x}[0] ~ \tilde{x}[1] ~ \cdots \tilde{x}[N - 1]]^T \\
	a &= [a[0] ~ a[1] ~ \cdots a[N - 1]]^T \\
	W^{-1} &= \frac{1}{N} W^H
\end{align} $$
$$ W = \begin{bmatrix} 
	1 & 1 & 1 & \cdots & 1 & 1 \\
	1 & e^\left( -j \frac{2\pi}{N} \right) & e^\left( -j \frac{2\pi}{N} ~ 2 \right) & \cdots & e^\left( -j \frac{2\pi}{N} ~ (N - 2) \right) & e^\left( -j \frac{2\pi}{N} ~ (N - 1) \right) \\
	1 & e^\left( -j \frac{2\pi}{N} ~ 2 \right) & e^\left( -j \frac{2\pi}{N} ~ 3 \right) & \cdots & e^\left( -j \frac{2\pi}{N} ~ 2(N - 2) \right) & e^\left( -j \frac{2\pi}{N} ~ 2(N - 1) \right) \\
	\vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\
	1 & e^\left( -j \frac{2\pi}{N} ~ (N - 2) \right) & e^\left( -j \frac{2\pi}{N} ~ 2(N - 2) \right) & \cdots & e^\left( -j \frac{2\pi}{N} ~ (N - 2)(N - 2) \right) & e^\left( -j \frac{2\pi}{N} ~ (N - 1)(N - 2) \right) \\
	1 & e^\left( -j \frac{2\pi}{N} ~ (N - 1) \right) & e^\left( -j \frac{2\pi}{N} ~ 2(N - 1) \right) & \cdots & e^\left( -j \frac{2\pi}{N} ~ (N - 1)(N - 2) \right) & e^\left( -j \frac{2\pi}{N} ~ (N - 1)(N - 1) \right) \\
\end{bmatrix} $$

^eb7ec0

#### Propiedades
---
Tenemos las siguientes propiedades, donde tomamos que  $$ \tilde{x}[n] \xleftrightarrow{~\mathcal{FS}} a[k] $$
##### Linealidad
---
Si $\tilde{x}[n] \xleftrightarrow{~\mathcal{FS}} a_k$ y $\tilde{y}[n] \xleftrightarrow{~\mathcal{FS}} n_k$ con $\tilde{x}[n]$ e $\tilde{y}[n]$ secuencias [[Función periódica|periódicas]] de periodo $N$ tenemos $$ \alpha \tilde{x}[n] + \beta \tilde{y}[n] \xleftrightarrow{~\mathcal{FS}} \alpha a[k] + \beta b[k] $$

##### Desplazamiento temporal
---
Si $\tilde{x}[n] \xleftrightarrow{~\mathcal{FS}} a[k]$ entonces la versión desplazada $\tilde{x}[n - m]$ de la secuencia temporal cumple con $$ \tilde{x}[n - m] \xleftrightarrow{~\mathcal{FS}} W_N^{km} ~ a[k] = e^\left( -j \frac{2\pi}{N} km \right) ~ a[k] $$

##### Dualidad
---
Si $\tilde{x}[n] \xleftrightarrow{~\mathcal{FS}} a[k]$ entonces $$ a[n] \xleftrightarrow{~\mathcal{FS}} N \tilde{x}[-k] $$

##### Simetría conjugada
---
Si $\tilde{x}[n] \xleftrightarrow{~\mathcal{FS}} a[k]$ entonces $$ \tilde{x}^*[n] \xleftrightarrow{~\mathcal{FS}} a^*[-k] $$

##### Convolución
---
Si $\tilde{x}[n] \xleftrightarrow{~\mathcal{FS}} a[k]$ y $\tilde{y}[n] \xleftrightarrow{~\mathcal{FS}} b[k]$ con $\tilde{x}[n]$ e $\tilde{y}[n]$ secuencias periódicas de periodo $N$. Tenemos que $$ \tilde{x}[n] \circledast \tilde{y}[n] = \sum_{m = 0}^{N - 1} \tilde{x}[m] ~ \tilde{y}[n - m] \xleftrightarrow{~\mathcal{FS}} a[k] ~ b[k] $$

Donde se conoce esta convolución coo una [[Convolución periódica|convolución periódica]], ya que las señales se periodizan