---
dia: 2024-09-16
tags:
  - ingeniería-electrónica/embebidos/Estrategias-de-control-de-periféricos
  - nota/facultad
aliases:
  - PWM
  - Pulse Width Modulation
referencias:
  - "241"
---
# Definición
---
Es una técnica es para cuando un [[General Purpose Input Output#Output|pin de salida]] o simplemente una [[Fuente de tensión|fuente]], quiere dar valores entre su [[Tensión|tensión]] de alimentación $V_{dd}$ y tierra $0~V$, pero este se ve limitado a estos dos extremos. Se logra dar el valor deseado $V_f$ en promedio, donde se mantiene en $V_{dd}$ por un porcentaje de un ciclo, y en $0~V$ por el resto del ciclo, calculándolo de la siguiente forma $$ \frac{T_{prendido}}{T_{ciclo}} ~ V_{dd} = V_f $$
Viendo un ejemplo, se puede entender con mayor facilidad

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    \tikzmath { 
        \Ttotal = 2; \ciclos = 3;
        \xscale = 1; \yscale = 1.8;
        \separacion = 1.8 * \yscale;
        \tick = 0.2; 
    }
    
    \foreach \porcentaje [count=\i from 0] in {0.2, 0.5, 0.8} {
    \begin{scope}[cm={1, 0, 0, 1, (0, {-\i * \separacion})}]
        
        \draw[->] (-0.2, 0) -- ({(\ciclos * \Ttotal + 0.4) * \xscale}, 0)
            node[right=2pt] {$t$};
        \draw[->] (0, -0.2) -- (0, {1.4 * \yscale})
            node[right=2pt] {$\frac{V}{V_{dd}}$};
        
        \draw (0, {\tick/2}) -- ++(0, -\tick)
            node[below=2pt, scale=0.8] {$0$};
        \foreach \ciclo in {1, ..., \ciclos} {
            \tikzmath { 
                \inicio = \Ttotal * (\ciclo - 1); 
                \final = \Ttotal * \ciclo; 
            }
            
            \draw ({\final * \xscale}, {\tick/2}) -- ++(0, -\tick)
                node[below=2pt, scale=0.8] {$\ciclo ~ T_{ciclo}$};
            \draw[ultra thick] ({\inicio * \xscale}, 0)
                -- ++(0, \yscale)
                -- ++({\Ttotal * \porcentaje * \xscale}, 0)
                -- ++(0, -\yscale)
                -- ({\final * \xscale}, 0);
        }
        
        \draw (0, {\porcentaje * \yscale}) -- ++({-\tick / 2}, 0)
            node[left=2pt] {$V_f$};
        \draw[green, dashed] (0, {\porcentaje * \yscale})
            -- ++({\ciclos * \Ttotal * \xscale}, 0)
                node[right=2pt, scale=0.8] {$\porcentaje ~ V_{dd}$};
    \end{scope}
    }    

\end{tikzpicture}
\end{document}
```

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```