---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - carrera/ingeniería-electrónica/intro/Circuitos-con-capacitores
  - nota/facultad
etapa: ampliar
referencias:
  - "873"
vinculoFacultad:
  - "[[ingeniería electrónica/control/Respuesta dinámica/Resumen.md]]"
  - "[[ingeniería electrónica/intro/Circuitos con capacitores/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La constante de tiempo ($\tau$) es un indicador de la velocidad de reacción de un [[Sistema|sistema]]

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\tikzmath {
		\vinicio = 3.5;
		\tautiempo = 1.1;
		\maximo = 6 * \tautiempo;
		\radio = 0.05; \sep = 0.1;
	}
	\begin{tikzpicture}[scale=2.2, transform shape, ultra thick,
		declare function={
			vc(\t) = \vinicio * (1 - exp(-\t / \tautiempo));
		}
	]
		\draw[->] (-0.2, 0) -- (\maximo, 0)
			node[below=2pt, scale=0.7] {$t / \tau$};
		\draw[->] (0, -0.2) -- (0, {\vinicio + 0.2});

		\draw[dashed, thick] (-0.1, \vinicio) 
				node[left=2pt, scale=0.6] {$100~\%$}
			-- (\maximo, \vinicio);
		\path (-0.1, 0) node[left=2pt, scale=0.6] {$0~\%$};
			
		\foreach \i in {1, ..., 5} {
    		\tikzmath {
        		\x = \i * \tautiempo; \y = vc(\i * \tautiempo);
        		\porcentaje = floor(100 * \y / \vinicio); 
    		}
    		\draw[dashed, thick] (\x, -0.1) node[below=2pt, scale=0.6] {$\i$}
    			-- (\x, \vinicio);
    		\draw[dashed, thick] (-0.1, \y) -- (\maximo, \y);
    		
    		\fill[red] (\x, \y) circle (\radio);
    		\path (\x, \y) node[below right=2pt, scale=0.5] 
            	{$\pgfmathprintnumber{\porcentaje} ~ \%$};
		}
        
		\draw[red] (-0.2, 0) 
			-- (0, 0) \foreach \t [parse=true] in {0, \sep, ..., \maximo + \sep} {
				-- (\t, {vc(\t)})
			};
		
		\path (0, -0.4) -- ++(\maximo, 0) node[midway, below=2pt, scale=0.7] 
        	{$f(t) = \left(1 - \exp\left( -\frac{t}{\tau} \right) \right) ~ u(t)$};
		
	\end{tikzpicture}
\end{document}
```

En particular podemos ver que el sistema llega al $63~\%$ después de un $\tau$, y para $5\tau$ llega a un $99 ~ \%$ que podemos aproximar a que terminó de estabilizarse

## Ejemplo
---
Usando un [[Circuito RC|circuito RC]] ![[Circuito RC#^representacion]]
Obtenemos las ecuaciones $$ \begin{cases}
\displaystyle V_C (t) &= V_0 ~ \left(1 - \exp\left(-\frac{t}{RC}\right) \right) \\
\displaystyle i(t) &= \frac{V_0}{R} ~ \exp\left(-\frac{t}{RC}\right) \\
\end{cases} $$
Donde vamos a tener que $\tau = R C$, con unidades $[\tau] = \Omega \cdot F = s ~ (\text{segundos})$. Entonces
$$ \begin{cases}
	V_C (t) &= V_0 ~ \left(1 - \exp\left(-\frac{t}{\tau}\right) \right)\\
	i(t) &= \frac{V_0}{R} ~ \exp\left(-\frac{t}{\tau}\right)\\ 
\end{cases} $$

De aquí, puedo concluir que si $t=\tau$ $$ V_C (t)= V_0 \cdot \left( 1 - e^{-\frac{t}{\tau}} \right) = V_0 \cdot \left( 1 - e^{-1} \right) \approx 0.63 \cdot V_0 $$ que es lo que habíamos visto previamente


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```