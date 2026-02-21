---
dia: 2026-02-21
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Modulación-digital
  - nota/facultad
vinculoFacultad:
  - tema: Modulación digital
    capitulo: 3
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Se define la transmisión en banda base como aquella donde se pueda modelar el [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Canal discreto sin memoria|canal]] con una [[ingeniería electrónica/señales/Sistemas LTI/Transferencia del sistema|transferencia]] $H_c(\omega)$ que se comporta como un [[ingeniería electrónica/adc/Respuesta en frecuencia/Filtro pasa-bajo|filtro pasa-bajos]] con frecuencia de corte $f_c$ y por lo tanto un [[Ancho de banda|ancho de banda]] $W$. El canal puede aplicar una atenuación que representaremos con $\alpha \in (0,~ 1]$, donde $\alpha = 1$ sería el caso ideal sin atenuación

Se utiliza pulsos de duración $\tau$, que sean mucho menores al tiempo de símbolo que se este mandando

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\definecolor{col1}{RGB}{255, 0, 127} 
	\definecolor{col2}{RGB}{255, 25, 25} 
	\definecolor{col3}{RGB}{229, 51, 178} 
	\definecolor{col4}{RGB}{178, 102, 229} 
	\definecolor{col5}{RGB}{102, 127, 229} 
	\definecolor{col6}{RGB}{0, 127, 204}
    
	\tikzmath {
        \sep = 0.1; \interSep = 1; \ancho = 7; \alto = 3;
        \fAlto = \alto * 0.8; \dx = 0.1;
    
        \epsi = 0.001;
	}
	\begin{tikzpicture}[scale=1.1, transform shape, ultra thick,
		declare function = {
			senial(\x,\T) = \fAlto * sin(deg(\x * \T)) / (\x + \epsi);
		},
	]
        \coordinate (plot_t) at (0, 0);
        \coordinate (plot_w) at ({\ancho + \interSep}, 0);
    
        \foreach \T/\color in {1/col1, 0.75/col3, 0.5/col5, 0.25/col6} {
            \begin{scope}[cm={1, 0, 0, 1, (plot_t)}]
                \draw[->] ({-\ancho / 2}, 0) -- ({\ancho / 2}, 0) 
                    node[pos=1.01, above=2pt] {$t$};
                \draw[->] (0, -\sep) -- (0, \alto)
                    node[pos=1.01, above=2pt] {$p(t)$};
                
                \draw[\color] ({-\ancho / 2}, 0)
                    -- (-\T, 0)
                    -- (-\T, \fAlto)
                    -- (\T, \fAlto)
                    -- (\T, 0)
                    -- ({\ancho / 2}, 0);
            \end{scope} 
            
            \begin{scope}[cm={1, 0, 0, 1, (plot_w)}]
                \draw[->] ({-\ancho / 2}, 0) -- ({\ancho / 2}, 0) 
                    node[pos=1.01, above=2pt] {$\omega$};
                \draw[->] (0, -\sep) -- (0, \alto)
                    node[pos=1.01, above=2pt] {$P(\omega)$};
                
                \draw[color = \color] ({-\ancho / 2}, {senial(-\ancho / 2, \T)}) 
                \foreach \x [parse=true] in {-\ancho / 2 + \dx, -\ancho / 2 + 2 * \dx, ..., -\dx, \dx, 2 * \dx, ..., \ancho / 2} {
                   -- (\x, {senial(\x, \T)})
                };
            \end{scope} 
        }
        
        \draw[->, shorten >=5pt, shorten <=5pt] 
            ($ (plot_t) + ({0.3 * \ancho}, {0.75 * \alto}) $) .. controls 
                ($ (plot_t) + ({0.5 * \ancho}, {\alto}) $) and 
                ($ (plot_w) + ({-0.5 * \ancho}, {\alto}) $)
            .. ($ (plot_w) + ({-0.3 * \ancho}, {0.75 * \alto}) $) 
                node[midway, above=2pt] {$\mathcal{F}$};
        
	\end{tikzpicture}
\end{document}
```

Es necesario que $\tau$ sea mucho menor ya que para necesitamos que su transferencia sea similar a una constante, después de haber aplicado el filtro del canal $H_c(\omega)$ 