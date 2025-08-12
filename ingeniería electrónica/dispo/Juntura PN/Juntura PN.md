---
dia: 2023-09-06
tags:
  - carrera/ingeniería-electrónica/dispo/Juntura-PN
  - nota/facultad
vinculoFacultad:
  - tema: Juntura PN
    capitulo: 2
    materia: Dispositivos semiconductores
    carrera: Ingeniería electrónica
---
# Definición
---
Una juntura PN se refiere a la unión entre una [[Impureza aceptora#Cantidad de dopante|semiconductor tipo p]] y un [[Impureza donora#Cantidad de dopante|semiconductor tipo n]]

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, thick]
		\filldraw[fill=black!70] (-3, 0) rectangle +(0.3, 3);
		\draw (-2.7, 0) rectangle +(2.7, 3);
		\draw (0, 0) rectangle +(2.7, 3);
		\filldraw[fill=black!70] (2.7, 0) rectangle +(0.3, 3);

		\draw (0, -0.1) -- ++(0, -0.2)
			-- ++(0, -0.2) node[below=2pt] {$x = 0$};
		\draw[->] (0, -0.3) -- ++(0.7, 0)
			node[right=2pt] {$x$};

		\path (-2.7, 3) node[below right=2pt] {$(N_a)$};
		\path (-2.7, 0) node[above right=2pt] {p};
		\path ( 2.7, 3) node[below left=2pt] {$(N_d)$};
		\path ( 2.7, 0) node[above left=2pt] {n};

		\node[text width=3cm, text centered] (p) at (-2.85, -1) 
			{Contacto de metal del lado p};
		\draw[->] (p.north) -- (-2.85, -0.1); 
		\node[text width=3cm, text centered] (n) at ( 2.85, -1) 
			{Contacto de metal del lado n};
		\draw[->] (n.north) -- (2.85, -0.1); 
	\end{tikzpicture}
\end{document}
```

Su distribución de dopantes en una juntura PN es abrupta

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, thick]
		\draw[->] (-3.5, 0) -- (3.5, 0)
			node[below right=2pt] {$x$};
		\draw[->] (0, -0.1) node[below=2pt] {$0$}
			-- (0, 3.5) node[left=2pt] {$N$};
		\draw[ultra thick] (0, 2.5) -- ++(-2.8, 0)
			node[midway, above=2pt] {p-region}
			node[left=2pt] {$N_a$};
		\draw[ultra thick] (0, 2) -- ++(2.8, 0)
			node[midway, above=2pt] {n-region}
			node[right=2pt] {$N_d$};
	\end{tikzpicture}
\end{document}
```

Donde podemos decir $$ 
N_a(x) = \begin{cases} 
	N_a & x \le 0 \\
	0 & x > 0
\end{cases} 
~~~~~~~
N_d(x) = \begin{cases} 
	0 & x \le 0 \\
	N_d & x > 0
\end{cases}
$$ donde cambia el tipo de [[Dopaje|dopante]] ($x = 0$) se denomina [[Juntura metalúrgica]]

### Concentración de [[Portador de carga|portadores]]
---
![[Concentración de portadores en escala lineal de una juntura PN en equilibrio térmico.webp]]
$$ n_0(x) = \begin{cases} 
	\sim 0, &&            &&   x  &\le&  - x_{p_0}  \\
	\sim 0, && -x_{p_0}   &<&  x  &\le&  ~~~~0      \\
	\sim 0, && ~~~~0       &<&  x  &\le&  ~~~x_{n_0} \\
	~N_d,   && ~~~x_{n_0} &<&  x  &
\end{cases} $$
$$ p_0(x) = \begin{cases} 
	~N_a,   &&            &&   x  &\le&  - x_{p_0}  \\
	\sim 0, && -x_{p_0}   &<&  x  &\le&  ~~~~0      \\
	\sim 0, && ~~~~0       &<&  x  &\le&  ~~~x_{n_0} \\
	\sim 0, && ~~~x_{n_0} &<&  x  &
\end{cases} $$

### [[Densidad volumétrica de carga eléctrica|Densidad de carga]]
---
$$ \rho(x) = q ~ (N_d + p_0 - N_a - n_0) $$

![[Densidad de carga en escala lineal de una juntura PN en equilibrio térmico.webp]]

$$ \rho(x) = \begin{cases} 
	~\sim 0,  &&            &&   x  &\le&  - x_{p_0}  \\
	-q~N_a,   && -x_{p_0}   &<&  x  &\le&  ~~~~0      \\
	~~~q~N_d, && ~~~~0       &<&  x  &\le&  ~~~x_{n_0} \\
	~\sim 0,  && ~~~x_{n_0} &<&  x  &
\end{cases} $$

### [[Campo eléctrico]]
---
$$ E(x_2) - E(x_1) = \frac{1}{\varepsilon_{sc}} \int_{x_1}^{x_2} \rho(x) ~ dx $$

![[Campo eléctrico en escala lineal de una juntura PN en equilibrio térmico.webp]]

En particular para $-x_{p_0} < x \le 0$
$$ E(x) - \underbrace{E(-x_{p_0})}_{= ~ 0} = \frac{1}{\varepsilon_{sc}} \int_{-x_{p_0}}^x -qN_a ~ dx = -\frac{q~N_a}{\varepsilon_{sc}} ~~ x \bigg\vert_{-x_{p_0}}^x = - \frac{q ~ N_a}{\varepsilon_{sc}} ~ (x + x_{p_0}) $$
$$ E(x) = \begin{cases} 
	~\sim 0,  &&                                       &&   x  &\le&  - x_{p_0}  \\
	-\frac{q~N_a}{\varepsilon_{sc}} ~ (x + x_{p_0}),   && -x_{p_0}   &<&  x  &\le&  ~~~~0      \\
	~~~\frac{q~N_d}{\varepsilon_{sc}} ~ (x - x_{n_0})  && ~~~~0       &<&  x  &\le&  ~~~x_{n_0} \\
	~\sim 0,                                           && ~~~x_{n_0} &<&  x  &
\end{cases} $$ donde $\varepsilon_{sc}$ es la [[Permitividad eléctrica|permitividad eléctrica]] del semiconductor

Notemos que el campo eléctrico en la juntura metalúrgica es $$ |E_0| = \sqrt\frac{2q ~ \phi_B N_a N_d}{\varepsilon_{sc} (N_a + N_d)} $$ donde $\phi_B$ es el [[Potencial de built-in]] y podemos encontrar esta relación con los [[Aproximación de vaciamiento#Límites de la región de carga espacial|límites de la región de carga espacial]] $x_{n_0}$ y $x_{p_0}$

### [[Potencial eléctrico|Función de Potencial]] en [[Equilibrio térmico en un semiconductor|equilibrio térmico]]
---
Recordando la [[Relación de Boltzmann|relación de Boltzmann]], tenemos que $$ \phi(x) = \frac{kT}{q} \ln\left( \frac{n_0}{n_i} \right) = - \frac{kT}{q} \ln\left( \frac{p_0}{n_i} \right) $$ donde $n_i$ es la [[Semiconductor intrínseco|concentración de un semiconductor intrínseco]].

Esto nos sirve para encontrar el potencial en QNR-P y QNR-N $$ \begin{align} 
	\text{P - QNR}: && p_0 = N_a \implies \phi_p = - \frac{kT}{q} \ln\left( \frac{N_a}{n_i} \right) \\\\ 
	\text{N - QNR}: && n_0 = N_d \implies \phi_n = \frac{kT}{q} \ln\left( \frac{N_d}{n_i} \right)
\end{align} $$
![[Potencial eléctrico en escala lineal de una juntura PN.webp]]

$$ \phi(x) = \begin{cases} 
	\phi_p,   &&            &&   x  &\le&  - x_{p_0}  \\
	\displaystyle \phi_p ~+~ \frac{q~N_a}{2\varepsilon_{sc}} ~ (x + x_{p_0})^2, && -x_{p_0}   &<&  x  &\le&  ~~~~0      \\
	\displaystyle \phi_n ~-~ \frac{q~N_d}{2\varepsilon_{sc}} ~ (x - x_{n_0})^2, && ~~~~0       &<&  x  &\le&  ~~~x_{n_0} \\
	\phi_n, && ~~~x_{n_0} &<&  x  &
\end{cases} $$

### Límites de la región de carga espacial
---
Aún no conocemos $x_{n_0}$ y $x_{p_0}$, y para encontrarlos necesitamos las condiciones de
1. [[Neutralidad de carga|Neutralidad de cargas]] de forma global $$ qN_a ~x_{p_0} = qN_d ~x_{n_0} $$
2. Pedimos que el [[Potencial eléctrico|potencial]] $\phi(x)$ sea [[Función continua|continua]] en $x = 0$ $$ \phi_p + \frac{qN_a}{2 \varepsilon_{sc}} ~ x^2_{p_0} = \phi_n - \frac{qN_d}{2 \varepsilon_{sc}} ~ x^2_{n_0} $$
Por lo tanto tenemos que $$ x_{n_0} = \sqrt\frac{2 \varepsilon_{sc} ~ \phi_B ~ N_a}{q~(N_a + N_d) ~ N_d} ~~~~ x_{p_0} = \sqrt\frac{2 \varepsilon_{sc} ~ \phi_B ~ N_d}{q~(N_a + N_d) ~ N_a} $$ donde $\phi_B$ es el [[Potencial de built-in]]

El ancho total de la región de carga espacial esta dada por $$ x_{d_0} = x_{p_0} + x_{p_0} = \sqrt\frac{2\varepsilon_{sc} ~ \phi_B ~ (N_a + N_d)}{qN_aN_d} $$