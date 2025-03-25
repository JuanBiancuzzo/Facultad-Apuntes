---
dia: 2023-01-23
etapa: empezado
referencias:
  - "873"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
  - carrera/ingeniería-electrónica/intro/Circuitos-con-capacitores
aliases:
  - Rise time of a system
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El tiempo de crecimiento $t_r$ es el tiempo que toma el [[Sistema|sistema]] en alcanzar valores cercanos del punto de estabilización

![[Time-Domain specifications.png]]

Las especificaciones del problema a resolver es lo que establece que valores son cercanos al punto de estabilización. En general es desde el $10\%$ hasta el $90\%$

## Sistema de primer orden
---
Para un sistema de primer orden al excitarlo con un pulso de magnitud $K$, se puede expresar de la siguiente forma $$ y(t) = K \left( 1 - \exp \left( -\frac{t}{\tau} \right) \right) $$ donde $K$ es el punto de estabilización, que se puede deducir de que $\displaystyle \lim_{t \to \infty} y(t) = K$

Si de esta expresión se despejar el [[Tiempo|tiempo]] , obtenemos $$ t = - \tau ~ \ln\left(1 - \frac{y}{K} \right) $$ donde notemos que $\displaystyle \frac{y}{K}$ nos da el porcentaje que estamos buscando

Por ese motivo podemos expresar la [[Función|función]] $t(p)$ que dado un porcentaje entre $0$ y $1$, devuelve el tiempo necesario para llegar a este. Esta función tiene la expresión $$ t(p) = - \tau ~ \ln\left(1 - p \right) $$
### Ejemplo
---
Dado un [[Circuito RC|circuito RC]], vamos a calcular $t_r$ para la [[Tensión|tensión]] entre $10\%$ al $90\%$, recordando que la expresión de la tensión es ![[Circuito RC#^ecuacion-tension]] donde $v_0$ es la tensión inicial y $\tau = RC$ la [[Constante de tiempo|constante de tiempo]]

Buscando $0.1$ y $0.9$ de la función $t(p)$, obtenemos $$ \begin{cases} 
    t_1 = t(0.1) \approx 0.105 ~ \tau \\
    t_2 = t(0.9) \approx 2.3 ~ \tau \\
\end{cases} \implies t_r = t_1 - t_2 \approx 2.2 ~ \tau $$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\tikzmath {
		\vinicio = 2.3;
		\tautiempo = 1.1;
		\maximo = 6 * \tautiempo;
	}
	\begin{tikzpicture}[scale=2.2, transform shape, ultra thick,
		declare function={
			vc(\t) = \vinicio * (1 - exp(-\t / \tautiempo));
			tpor(\por) = -\tautiempo * ln(1 - \por);
		}
	]
		\draw[->] (-0.2, 0) -- (\maximo, 0)
			node[below=2pt, scale=0.7] {$t$};
		\draw[->] (0, -0.2) -- (0, {\vinicio + 0.2});

		\tikzmath { \sep = 0.1; }
		\draw[red] (-0.2, 0) 
			-- (0, 0) \foreach \t in {0, \sep, ..., \maximo} {
				-- (\t, {vc(\t)})
			};
		\draw[dashed] (-0.1, \vinicio) 
				node[left=2pt, scale=0.6] {$100~\%$}
			-- (\maximo, \vinicio);
			
		\tikzmath {
			\t1 = tpor(0.1);
			\t2 = tpor(0.9);
		}
			
		\draw[dashed] (-0.1, {vc(\t1)}) 
				node[left=2pt, scale=0.6] {$10~\%$}
			-- (\maximo, {vc(\t1)});
		\draw[dashed] (\t1, -0.1) 
				node[below=2pt, scale=0.6] {$t_1$}
			-- (\t1, {vc(\t1)});

		\draw[dashed] (-0.1, {vc(\t2)}) 
				node[left=2pt, scale=0.6] {$90~\%$}
			-- (\maximo, {vc(\t2)});
		\draw[dashed] (\t2, -0.1) 
				node[below=2pt, scale=0.6] {$t_1$}
			-- (\t2, {vc(\t2)});

		\path (-0.1, 0) node[left=2pt, scale=0.6] {$0~\%$};
		\path ({0.75 * \maximo}, {vc(\tautiempo)})
			node[below=2pt, scale=0.6] 
				{$v_C(t) = V_0 \left( 1 - e^{-\frac{t}{\tau}} \right)$};
		
	\end{tikzpicture}
\end{document}
```

## Sistema de segundo orden
---



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```