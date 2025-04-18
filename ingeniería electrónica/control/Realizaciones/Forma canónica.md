---
dia: 2025-04-16
etapa: ampliar
referencias: 
tags:
  - nota/facultad
  - carrera/ingeniería-electrónica/control/Realizaciones
aliases:
  - Forma canónica controlable
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Partiendo de una [[Transferencia del sistema#^propia|transferencia propia]] dada por el sistema de ecuación $$ \begin{cases} 
    \displaystyle \frac{d^n }{dt^n} y + a_1 \frac{d^{n - 1}}{dt^{n - 1}} y + \cdots + a_n ~ y = u \\
    \displaystyle y = b_1 ~ x_1 + b_2 ~ x_2 + \cdots + b_n ~ x_n + d ~ u
\end{cases} $$
Donde podemos graficar el [[Diagrama de bloques|diagrama de bloques]] 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.15, transform shape, ultra thick]
    \tikzmath { 
        \largo = 0.8; \alto = 1; \radio = 0.4; 
        \scale = 0.9; \scaleSimb = 0.6;
        \sep = 0.9; \sepInt = 1.5;
    }

    \coordinate (suma_0) at (0, 0);
    
    \coordinate (int_-1) at ($ (suma_0) + ({-\radio - \sep - \largo / 2}, 0) $);
    \coordinate (int_1) at ($ (suma_0) + ({\radio + \sep + \largo / 2}, 0) $);
    \coordinate (int_2) at ($ (int_1) + ({\largo + \sepInt}, 0) $);
    \coordinate (int_3) at ($ (int_2) + ({\largo + \sepInt}, 0) $);
    \coordinate (int_n-1) at ($ (int_3) + ({\largo + \sepInt}, 0) $);
    \coordinate (int_n) at ($ (int_n-1) + ({\largo + \sepInt}, 0) $);
    \coordinate (int_n+1) at ($ (int_n) + ({\largo + \sepInt}, 0) $);
    
    \coordinate (b1) at ($ (int_1)!0.5!(int_2) + (0, {\sep + \largo / 2}) $);
    \coordinate (b2) at ($ (int_2)!0.5!(int_3) + (0, {\sep + \largo / 2}) $);
    \coordinate (bn-1) at ($ (int_n-1)!0.5!(int_n) + (0, {\sep + \largo / 2}) $);
    \coordinate (bn) at ($ (int_n)!0.5!(int_n+1) + (0, {\sep + \largo / 2}) $);
    
    \coordinate (a1) at ($ (int_1)!0.5!(int_2) + (0, {-\sep - \largo / 2}) $);
    \coordinate (a2) at ($ (int_2)!0.5!(int_3) + (0, {-\sep - \largo / 2}) $);
    \coordinate (an-1) at ($ (int_n-1)!0.5!(int_n) + (0, {-\sep - \largo / 2}) $);
    \coordinate (an) at ($ (int_n)!0.5!(int_n+1) + (0, {-\sep - \largo / 2}) $);

    \coordinate (d) at ($ (int_-1)!0.5!(suma_0) + (0, {\sep + \largo / 2}) $);
    
    \coordinate (suma_b1) at ($ (b1) + (0, {\alto / 2 + \radio + \sep}) $);
    \coordinate (suma_b2) at ($ (b2) + (0, {\alto / 2 + \radio + \sep}) $);
    \coordinate (suma_bn-1) at ($ (bn-1) + (0, {\alto / 2 + \radio + \sep}) $);
    \coordinate (suma_bn) at ($ (bn) + (0, {\alto / 2 + \radio + \sep}) $);
    
    \coordinate (suma_a1) at ($ (a1) + (0, {-\alto / 2 - \radio - \sep}) $);
    \coordinate (suma_a2) at ($ (a2) + (0, {-\alto / 2 - \radio - \sep}) $);
    \coordinate (suma_an-1) at ($ (an-1) + (0, {-\alto / 2 - \radio - \sep}) $);

    % Labels
    \foreach \coor in {int_-1, int_1, int_2, int_3, int_n-1, int_n, int_n+1,
        b1, b2, bn-1, bn, a1, a2, an-1, an, d} {        
        \coordinate (\coor_arriba) at ($ (\coor) + (0, {\alto / 2}) $);
        \coordinate (\coor_abajo)  at ($ (\coor) + (0, {-\alto / 2}) $);
        \coordinate (\coor_der)    at ($ (\coor) + ({\largo / 2}, 0) $);
        \coordinate (\coor_izq)    at ($ (\coor) + ({-\largo / 2}, 0) $);
    }
    
    \foreach \coor in {suma_0, suma_b1, suma_b2, suma_bn-1, suma_bn,
        suma_a1, suma_a2, suma_an-1} { 
        \begin{scope}[cm={1, 0, 0, 1, (\coor)}]
            \foreach \i/\j/\dir in {0/1/arriba, 0/-1/abajo, 1/0/der, -1/0/izq} {
                \coordinate (\coor_\dir) at ({\i * \radio}, {\j * \radio});
                \coordinate (\coor_\dir_label) at ($ (0, 0)!0.6!(\coor_\dir) $);
            }
            
            \draw (0, 0) circle (\radio); 
            \draw ({\radio * cos(135)}, {\radio * sin(135)})
                -- ({\radio * cos(-45)}, {\radio * sin(-45)});
            \draw ({\radio * cos(-135)}, {\radio * sin(-135)})
                -- ({\radio * cos(45)}, {\radio * sin(45)});  
               
        \end{scope} 
    }

    \foreach \coor/\text in {int_1/\int, int_2/\int, int_n-1/\int, int_n/\int,
        b1/b_1, b2/b_2, bn-1/b_{n-1}, bn/b_n,
        a1/a_1, a2/a_2, an-1/a_{n-1}, an/a_n, d/d} {
        \draw (\coor_der |- \coor_abajo) rectangle (\coor_izq |- \coor_arriba)
            node[midway, align=center, scale=\scale] {$\text$};
    }
    
    \path (suma_0_abajo_label) node [scale=\scaleSimb] {$-$};
    \foreach \lugar in {0_izq, b1_izq, b1_abajo, b2_izq, b2_abajo, bn-1_izq, bn-1_abajo, bn_izq, bn_abajo, a1_der, a1_arriba, a2_der, a2_arriba, an-1_der, an-1_arriba}{
        \path (suma_\lugar_label) node [scale=\scaleSimb] {$+$};
    }
    
    \draw[->] (int_-1_der) node[left=2pt, scale=\scale] {$u$} -- (suma_0_izq);
    \draw[->] (int_-1_der) -- (int_-1_der -| d_abajo) -- (d_abajo);
    \draw[->] (suma_0_der) -- (int_1_izq);
    
    \foreach \ind in {1, 2, n-1, n} {
        \coordinate (centro_\ind) at (int_\ind_der -| b\ind_abajo);
        \draw[->] (int_\ind_der) -- (centro_\ind) -- (b\ind_abajo);
        \draw[->] (int_\ind_der) -- (centro_\ind) -- (a\ind_arriba);
    }
    
    \foreach \ind/\text in {1/x_1, 2/x_2, n-1/x_{n-1}, n/x_n} {
        \path (int_\ind_der) -- (centro_\ind) 
            node[midway, scale=\scale, above=2pt] {$\text$};
    }
    \draw[->] (centro_1) -- (int_2_izq);
    \draw (centro_2) -- (int_3_izq);
    \draw[->] (centro_n-1) -- (int_n_izq);
    
    \path (int_3_izq) node (inicio_mid) {}  
        -- ($ (int_3_der)!0.5!(int_n-1_izq) $) node[midway] {$\cdots$};
    \draw[->] ($ (int_3_der)!0.5!(int_n-1_izq) $) 
            node (final_mid) {} 
        -- (int_n-1_izq);        
    
    \foreach \bloque in {b1, b2, bn-1, bn} {
        \draw[->] (\bloque_arriba) -- (suma_\bloque_abajo);
    }
    \foreach \bloque in {a1, a2, an-1} {
        \draw[->] (\bloque_abajo) -- (suma_\bloque_arriba);
    }
    
    \draw[->] (an_abajo) -- (an_abajo |- suma_an-1_der) -- (suma_an-1_der);
    \draw (suma_an-1_izq) -- (suma_an-1_izq -| final_mid.center);
    \draw[->] (suma_a2_der -| inicio_mid.center) -- (suma_a2_der);
    \draw[->] (suma_a2_izq) -- (suma_a1_der);
    \draw[->] (suma_a1_izq) -- (suma_a1_izq -| suma_0_abajo) -- (suma_0_abajo);
    
    \draw[->] (d_arriba) -- (d_arriba |- suma_b1_izq) -- (suma_b1_izq);
    \draw[->] (suma_b1_der) -- (suma_b2_izq);
    \draw (suma_b2_der) -- (suma_b2_der -| inicio_mid.center);
    \draw[->] (suma_bn-1_izq -| final_mid.center) -- (suma_bn-1_izq);
    \draw[->] (suma_bn-1_der) -- (suma_bn_izq);
    \draw[->] (suma_bn_der) -- ++(\sep, 0)
        node[scale=\scale, right=2pt] {$y$};
    
    \path (suma_an-1_izq -| final_mid.center) -- (suma_a2_der -| inicio_mid.center)
        node[midway, scale=\scale] {$\cdots$};
    \path (suma_b2_der -| inicio_mid.center) -- (suma_bn-1_izq -| final_mid.center)
        node[midway, scale=\scale] {$\cdots$};

\end{tikzpicture}
\end{document}
```

Podemos entonces encontrar la [[Sistema dinámico#^matriz-estados|matriz de estados]] $A$, [[Sistema dinámico#^matriz-entrada|matriz de entrada]] $B$, [[Sistema dinámico#^matriz-salida|matriz de salida]] $C$ y la [[Sistema dinámico#^matriz-directa|matriz de transmisión directa]] $D$ $$ \begin{align}
    \dot{x}(t) &= \underbrace{\begin{bmatrix} 
        -a_1 & -a_2 & \cdots & -a_{n - 1} & -a_n \\
        1 & 0 & \cdots & 0 & 0 \\
        0 & 1 & \cdots & 0 & 0 \\
        \vdots & \vdots & \ddots & \vdots & \vdots \\
        0 & 0 & \cdots & 1 & 0
    \end{bmatrix}}_{\displaystyle A} x + \underbrace{\begin{bmatrix} 
        1 \\ 0 \\ 0 \\ \vdots \\ 0
    \end{bmatrix}}_{\displaystyle B} u \\
    y &= \underbrace{\begin{bmatrix} 
        b_1 & b_2 & \cdots b_n
    \end{bmatrix}}_{\displaystyle C} ~ x + \underbrace{d}_{\displaystyle D} ~u
\end{align} $$
Esta es la forma canónica, también conocida como la forma canónica controlable