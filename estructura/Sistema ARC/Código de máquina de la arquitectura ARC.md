---
dia: 2024-08-29
tags: 
 - estructura/Sistema-ARC
 - nota/facultad
---
### Definición
---
Las [[Lenguaje assembly|instrucciones]] son traducidas en código de máquina. Hay $5$ formatos de instrucción

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=0.9, transform shape, thick]
    
    \tikzmath { 
        \ancho = 0.4; \alto = 1.6 * \ancho; 
        \diffVertical = 0.2;
        \sep = 0.1;
    }
    
    \foreach \idu/\idd/\pos/\cantidad [parse=true] in 
        {0/0/0/2, 0/1/-2/1, 1/0/-4.5/2, 1/1/-7/2} 
    {
        \coordinate (centro\idu\idd) 
            at (0, {\pos + \cantidad * \alto + \diffVertical * (\alto - 1)});
        \foreach \num [count=\i from 0] in {31, 30, ..., 0} {
            \path ($ (centro\idu\idd) + ({\i * \ancho}, 0) $)
                -- ++(\ancho, 0)
                    node[midway, above=2pt] (temp) {};
            \ifthenelse{\num > 9} {
                \path (temp.center) node[scale=0.9] {$\num$};
            } {
                \path (temp.center) node[scale=0.9] {$0\num$};
            }
        }
        \foreach \diff [parse=true] in {1, ..., \cantidad} {
            \coordinate (esquina\idu\idd\diff) at ($ (centro\idu\idd) + 
                    (0, {-\alto * \diff - \diffVertical * (\diff - 1)}) $);
            \foreach \i in {0, ..., 31} {
                \draw ($ (esquina\idu\idd\diff) + ({\i * \ancho}, 0)$) 
                    rectangle ++(\ancho, \alto);
            }
            
            \fill[white] ($ (esquina\idu\idd\diff) + (\sep, \sep) $) 
                rectangle ++({2 * \ancho - 2 * \sep}, {\alto - 2 * \sep});
            
            \path ($ (esquina\idu\idd\diff) + (\sep, \sep) $) 
                rectangle ++({\ancho - 2 * \sep}, {\alto - 2 * \sep})
                    node[midway, scale=0.9] {\idu};
            \path ($ (esquina\idu\idd\diff) + ({\ancho + \sep}, \sep) $) 
                rectangle ++({\ancho - 2 * \sep}, {\alto - 2 * \sep})
                    node[midway, scale=0.9] {\idd};
        }
    }

    \def\array001{{5, 3, 22}}
    \def\array002{{1, 4, 3, 22}}
    \def\array011{{30}}
    \def\array101{{5, 6, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5}}
    \def\array102{{5, 6, 5, 1, 13}}
    \def\array111{{5, 6, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5}}
    \def\array112{{5, 6, 5, 1, 13}}
    
    \foreach \nombre/\idd in {array001/001, array002/002, array011/011, array101/101, array102/102, array111/111, array112/112} {
        \path ($ (esquina\idd) + ({2 * \ancho}, 0) $) node (temp) {};
        \foreach \largo in \array001 {
            \fill[white] (temp) rectangle 
                ++({\largo * \ancho - 2 * \sep}, {\alto - 2 * \sep});
            \path ($ (temp) + (\largo * \ancho) $) node (temp) {};
        }
    }

    \path (centro00) 
        -- ++(0, -\alto) node[midway, left=0.2cm] {SETHI Fromat}
        -- ++(0, -\diffVertical)
        -- ++(0, -\alto) node[midway, left=0.2cm] {Branch Fromat};
    
    \path (centro01) 
        -- ++(0, -\alto) node[midway, left=0.2cm] {CALL Fromat};
    
    \path (centro10) -- ++(0, {-2 * \alto - \diffVertical})
            node[midway, align=center, left=0.2cm]
                {Arithmetic\\Fromat};
    
    \path (centro11) -- ++(0, {-2 * \alto - \diffVertical})
            node[midway, align=center, left=0.2cm]
                {Memory\\Fromat};
    
\end{tikzpicture}
\end{document}
```

$$ \begin{matrix}
\begin{array}{|c|l|} \hline 
    \text{op} & \text{Format} \\\hline 
    00 & \text{SETHI/Branch} \\
    01 & \text{CALL} \\
    10 & \text{Arithmetic} \\
    11 & \text{Memory} \\\hline 
\end{array} &
\begin{array}{|c|l|} \hline 
    \text{op}2 & \text{Inst.} \\\hline 
    010 & \text{branch} \\
    100 & \text{sethi} \\\hline 
\end{array} &
\begin{array}{|c|} \hline 
    \text{op}3 ~ \text{op=10} \\\hline 
    \begin{array}{c|l} 
        010000 & \text{addcc} \\
        010001 & \text{andcc} \\
        010010 & \text{orcc} \\
        010110 & \text{orncc} \\
        100110 & \text{srl} \\
        111000 & \text{jmpl} \\
    \end{array} \\\hline 
\end{array} &
\begin{array}{|c|} \hline 
    \text{op}3 ~ \text{op=11} \\\hline 
    \begin{array}{c|l} 
        000000 & \text{ld} \\
        000100 & \text{st} \\
    \end{array} \\\hline 
\end{array} &
\begin{array}{|c|l|} \hline 
    \text{cond} & \text{branch} \\\hline 
    0001 & \text{be} \\
    0101 & \text{bcs} \\
    0110 & \text{bneg} \\
    0111 & \text{bvs} \\
    1000 & \text{ba} \\\hline 
\end{array} 
\end{matrix}$$