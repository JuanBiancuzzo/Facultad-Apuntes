---
dia: 2022-09-21
tags:
  - carrera/ingeniería-electrónica/analisis-3/Series
  - carrera/ingeniería-en-informática/analisis-3/Series
  - nota/facultad
etapa: ampliar
referencias:
  - "1056"
aliases: 
vinculoFacultad:
  - "[[ingeniería electrónica/analisis 3/Series/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Dada una [[Función|función]] $f : D \to \mathbb{C}$, con un $D \subseteq \mathbb{C}$, se define la [[Serie|serie]] como una [[Serie de potencias|serie de potencias]] tal que
$$ f(z) = \sum_{n = 0}^\infty c_n \cdot (z - z_0)^n = \sum_{n = 0}^\infty \frac{1}{n!}f^{(n)}(z_0) (z - z_0)^n = \lim_{n \to \infty} P_k(z)$$ donde $P_k$ es el [[Polinomio de Taylor|polinomio de Taylor]] de orden $k$

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.6, transform shape]
    \tikzmath { 
        \xscale = 1.2; \yscale = 1.75;
        \xmin = -4; \xmax = -\xmin; \xtick = 1; \xdiff = 0.25;
        \ymin = -1; \ymax = -\ymin; \ytick = 0.5; \ydiff = 0.5;
        \tickSpan = 0.2; \puntos = 30;
        function lerp(\t, \min, \max) {
            return \min + \t * (\max - \min);
        };
        function fx(\x) { return cos(deg(\x)); };
        function taylorOrden0(\x) { return 1; };
        function taylorOrden2(\x) { return taylorOrden0(\x) - pow(\x, 2) / 2; };
        function taylorOrden4(\x) { return taylorOrden2(\x) + pow(\x, 4) / 24; };
    }
    
    \draw[->, thick] ({\xmin * \xscale - \xdiff}, 0) 
        -- ({\xmax * \xscale + \xdiff}, 0) node[right=2pt, scale=0.9] {$x$};
    \draw[->, thick] (0, {\ymin * \yscale - \ydiff}) 
        -- (0, {\ymax * \yscale + \ydiff});

    \foreach \tick [parse=true, evaluate=\tick using real(\tick)] in {
        -\xtick, -2 * \xtick, ..., \xmin, \xtick, 2 * \xtick, ..., \xmax} 
    {
        \pgfkeys{/pgf/number format/.cd, precision=2}
        \draw ({\tick * \xscale}, {\tickSpan / 2}) -- ++(0, -\tickSpan)
            node[below=2pt, scale=0.7] {\pgfmathprintnumber{\tick}};
    }
    
    \foreach \tick [parse=true, evaluate=\tick using real(\tick)] in 
        {-\ytick, -2 * \ytick, ..., \ymin, \ytick, 2 * \ytick, ..., \ymax} 
    {
        \pgfkeys{/pgf/number format/.cd, precision=2}
        \draw ({-\tickSpan / 2}, {\tick * \yscale}) -- ++(\tickSpan, 0)
            node[right=2pt, scale=0.7] {\pgfmathprintnumber{\tick}};
    }
    
    \foreach \funcion/\label/\color/\min/\max in {fx/f/red/\xmin/\xmax,
        taylorOrden0/ty0/green/\xmin/\xmax, 
        taylorOrden2/ty2/cyan/-2/2,
        taylorOrden4/ty4/pink/-3.3/3.3} 
    {
        \foreach \in [remember=\in as \ip (initially 0)] in {1, ..., \puntos} {
            \tikzmath { 
                \xp = lerp(\ip / \puntos, \min, \max); 
                \xn = lerp(\in / \puntos, \min, \max); 
            }
            
            \draw[\color, thick] ({\xp * \xscale}, {\funcion(\xp) * \yscale}) 
                -- ({\xn * \xscale}, {\funcion(\xn) * \yscale}) 
                    node[pos=0] (\label_\ip) {} node[pos=1] (\label_\in) {};
                  
        }
    }     
    
    \path (f_\puntos) node [above=2pt, scale=0.8] {$f(x) = \cos(x)$};
    \path (ty0_\puntos) node [right=2pt, scale=0.8] {$P_0(x)$};
    \path (ty2_\puntos) node [right=2pt, scale=0.8] {$P_2(x)$};
    \path (ty4_\puntos) node [right=2pt, scale=0.8] {$P_4(x)$};
     
\end{tikzpicture}
\end{document}
```

## Para varias variables
---
Siendo una función $f: D \to \mathbb{C}^n$, con un $D \subseteq \mathbb{C}^n$, se define la serie alrededor de $(a_1,~ \cdots,~ a_d)$ como $$ f(z_1,~ \cdots,~ z_d) = \sum_{n_1 = 0}^{\infty} \cdots \sum_{n_d = 0}^{\infty} \frac{(z_1 - a_1)^{n_1} \cdots (z_d - a_d)^{n_d}}{n_1! \cdots n_d!} \left( \frac{\partial^{n_1 + \cdots + n_d}f}{\partial x_1^{n_1} \cdots \partial x_d^{x_d}}  \right) (a_1,~ \cdots,~ a_d) $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```