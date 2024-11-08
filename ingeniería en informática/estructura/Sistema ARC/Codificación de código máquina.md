---
dia: 2024-09-09
tags:
  - ingeniería-en-informática/estructura/Sistema-ARC
  - nota/facultad
  - ingeniería-electrónica/embebidos/Microcontroladores-de-32-bits
  - ingeniería-electrónica/estructura/Sistema-ARC
aliases:
  - Código binario
  - Codificación de código máquina en la arquitectura ARC#En la arquitectura ARC
---
# Definición
---
Dado una [[Arquitectura del microprocesador|arquitectura de un procesador]], y su [[Instruction Set Architecture|set de instrucciones]], se determina una forma de codificar cada instrucción

## En la arquitectura ARC
---
Las [[Instruction Set Architecture#Sintaxis|instrucciones]] son traducidas en [[Código de máquina|código de máquina]]. Hay $5$ formatos de instrucción

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
        {0/0/0/2, 0/1/-2/1, 1/0/-5/2, 1/1/-7.5/2} 
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
    
    \foreach \idd in {101, 111} {
        \coordinate (temp) at ($ (esquina\idd) + ({19 * \ancho}, 0) $);
        \fill[white] ($ (temp) + (\sep, \sep) $) rectangle 
            ++({8 * \ancho - 2 * \sep}, {\alto - 2 * \sep});
    }
    
    \foreach \idd/\array in {
        001/{5, 3, 22}, 
        002/{1, 4, 3, 22}, 
        011/{30}, 
        101/{5, 6, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5}, 
        102/{5, 6, 5, 1, 13}, 
        111/{5, 6, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5}, 
        112/{5, 6, 5, 1, 13}} {
        \path ($ (esquina\idd) + ({2 * \ancho}, 0) $) node (temp) {};
        \foreach \largo [count=\i] in \array {
            \fill[white] ($ (temp) + (\sep, \sep) $) rectangle 
                ++({\largo * \ancho - 2 * \sep}, {\alto - 2 * \sep})
                    node[midway] (centro\idd-\i) {};
            \path ($ (temp) + ({\largo * \ancho}, 0) $) node (temp) {};
        }
    }
    
    \path (centro001-1) node[scale=0.9] {rd};
    \path (centro001-2) node[scale=0.9] {op$2$};
    \path (centro001-3) node[scale=0.9] {imm$22$};
    
    \path (centro002-1) node[scale=0.9] {$0$};
    \path (centro002-2) node[scale=0.9] {cond};
    \path (centro002-3) node[scale=0.9] {op$2$};
    \path (centro002-4) node[scale=0.9] {disp$22$};

    \path (centro00) 
        -- ++(0, -\alto) node[midway, left=0.2cm] {SETHI Fromat}
        -- ++(0, -\diffVertical)
        -- ++(0, -\alto) node[midway, left=0.2cm] {Branch Fromat};
    
    \path (centro011-1) node[scale=0.9] {disp$30$};
    
    \path (centro01) 
        -- ++(0, -\alto) node[midway, left=0.2cm] {CALL Fromat};
    
    \foreach \ubi in {101, 102, 111, 112} {
        \path (centro\ubi-1) node[scale=0.9] {rd};
        \path (centro\ubi-2) node[scale=0.9] {op$3$};
        \path (centro\ubi-3) node[scale=0.9] {rs$1$};
    }
    
    \foreach \ubi in {101, 111} {
        \foreach \i in {4, ..., 12} {
            \path (centro\ubi-\i) node[scale=0.9] {$0$};
        }
        \path (centro\ubi-13) node[scale=0.9] {rs$2$};
    }

    \foreach \ubi in {102, 112} {
        \path (centro\ubi-4) node[scale=0.9] {$1$};
        \path (centro\ubi-5) node[scale=0.9] {simm$13$};
    }    
    
    \path (centro10) -- ++(0, {-2 * \alto - \diffVertical})
            node[midway, align=center, left=0.2cm]
                {Arithmetic\\Fromat};
    
    \path (centro11) -- ++(0, {-2 * \alto - \diffVertical})
            node[midway, align=center, left=0.2cm]
                {Memory\\Fromat};
    
    \draw ($ (centro00) + (0, 0.4) $) 
        -- ++(0, 0.2)
        -- ++({2 * \ancho}, 0)
            node[midway, above=2pt] {op}
        -- ++(0, -0.2);
    
    \draw ($ (centro10) + ({18 * \ancho}, 0.4) $) 
        -- ++(0, 0.2)
        -- ++(\ancho, 0)
            node[midway, above=2pt] {i}
        -- ++(0, -0.2);
    
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
\end{matrix} $$

### Modos de direccionamiento
---
- Inmediato
    - La constante está incluida en la instrucción
- Por [[Registro|registro]]
    - El registro tiene el dato
- Directo o Absoluto
    - La [[Dirección de memoria|dirección de memoria]] está incluida en la instrucción
- Indirecta
    - Contiene la dirección de memoria donde está el puntero al dato (poco usado, lento)
- Indirecta por Registro
    - El registro tiene el puntero al dato
- Indexado por Registro
    - Un registro da la dirección inicial, el otro un incremento.