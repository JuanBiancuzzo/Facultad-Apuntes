---
dia: 2025-03-23
etapa: ampliar
referencias:
  - "899"
  - "228"
  - "229"
  - "882"
  - "884"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - investigación/matemática/koopman-operator-theory
  - nota/facultad
  - nota/investigacion
aliases:
  - Espacio de estados
  - Sistema en espacio de estados
  - Matriz de estados#^matriz-estados
  - Matriz de entrada#^matriz-entrada
  - Matriz de salida#^matriz-salida
  - Matriz de transmisión directa#^matriz-directa
vinculoFacultad:
  - tema: Respuesta dinámica
    capitulo: 1
    materia: Control automático
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un sistema dinámico es un [[Sistema|sistema]] donde su comportamiento cambia con el tiempo. El concepto de espacio de estados esta muy relacionado relacionado.

El [[Espacio|espacio]] $n$-dimensional cuyos ejes de coordenadas están formados por el eje $x_1$, eje $x_2$, $\cdots$, eje $x_n$, donde $x_1,~ x_2,~ \cdots,~ x_n$ son las [[Variable de estado|variables de estado]], se denomina espacio de estados. Cualquier estado se puede representar como un punto en el espacio de estados

El análisis de este se concentra en los $3$ tipos de variables que aparecen en el modelado de los sistemas dinámicos; las variables de entrada, las variables de salida y las variables de estados. Podemos saber cuantas variables de estamos observando la cantidad de sistemas integradores que aparezcan en el mismo [[Diagrama de bloques|diagrama de bloques]]

Sea un sistema de múltiples entradas-múltiples salidas con $n$ integradores. Supóngase también que hay $r$ entradas $u_1(t),~ u_2(t),~ \cdots,~ u_r(t)$ y $m$ salidas $y_1(t),~ y_2(t),~ \cdots,~ y_m(t)$. Se definen las $n$ salidas de los integradores como variables de estado $x_1(t),~ x_2(t),~ \cdots,~ x_n(t)$. Entonces el sistema se puede describir mediante [[Ecuación diferencial ordinaria|ecuación diferencial]] de primer orden de la siguiente manera $$ \begin{align} 
    \dot{x}_1(t) &= f_1(x_1,~ x_2,~ \cdots,~ x_n;~ u_1,~ u_2,~ \cdots,~ u_r;~ t) \\
    \dot{x}_2(t) &= f_2(x_1,~ x_2,~ \cdots,~ x_n;~ u_1,~ u_2,~ \cdots,~ u_r;~ t) \\
    &~~\vdots \\
    \dot{x}_n(t) &= f_n(x_1,~ x_2,~ \cdots,~ x_n;~ u_1,~ u_2,~ \cdots,~ u_r;~ t) \\
\end{align} $$
Las salidas del sistema se obtienen mediante $$ \begin{align} 
    y_1(t) &= g_1(x_1,~ x_2,~ \cdots,~ x_n;~ u_1,~ u_2,~ \cdots,~ u_r;~ t) \\
    y_2(t) &= g_2(x_1,~ x_2,~ \cdots,~ x_n;~ u_1,~ u_2,~ \cdots,~ u_r;~ t) \\
    &~~\vdots \\
    y_m(t) &= g_m(x_1,~ x_2,~ \cdots,~ x_n;~ u_1,~ u_2,~ \cdots,~ u_r;~ t) \\
\end{align} $$
La cual podemos expresar de forma concisa usando [[Vector|vectores]] de la siguiente forma $$ \begin{array}{c} 
    x(t) = \begin{bmatrix} x_1(t) \\ x_2(t) \\ \vdots \\ x_n(t) \end{bmatrix}, ~~~~~
    f(x,~ u,~ t) = \begin{bmatrix} 
        f_1(x_1,~ x_2,~ \cdots,~ x_n;~ u_1,~ u_2,~ \cdots,~ u_r;~ t) \\
        f_2(x_1,~ x_2,~ \cdots,~ x_n;~ u_1,~ u_2,~ \cdots,~ u_r;~ t) \\
        \vdots \\
        f_n(x_1,~ x_2,~ \cdots,~ x_n;~ u_1,~ u_2,~ \cdots,~ u_r;~ t) \\
    \end{bmatrix} \\\\
    
    y(t) = \begin{bmatrix} y_1(t) \\ y_2(t) \\ \vdots \\ y_,(t) \end{bmatrix}, ~~~~~
    g(x,~ u,~ t) = \begin{bmatrix} 
        g_1(x_1,~ x_2,~ \cdots,~ x_n;~ u_1,~ u_2,~ \cdots,~ u_r;~ t) \\
        g_2(x_1,~ x_2,~ \cdots,~ x_n;~ u_1,~ u_2,~ \cdots,~ u_r;~ t) \\
        \vdots \\
        g_m(x_1,~ x_2,~ \cdots,~ x_n;~ u_1,~ u_2,~ \cdots,~ u_r;~ t) \\
    \end{bmatrix}, ~~~~~  
    u(t) = \begin{bmatrix} u_1(t) \\ u_2(t) \\ \vdots \\ u_r(t) \end{bmatrix} 
    
\end{array} $$
Teniendo una representación equivalente a $$ \begin{align} 
    \dot{x}(t) &= f(x,~ u,~ t) \\
    y(t) &= g(x,~ u,~ t)
\end{align} $$
Si se [[Linealización Jacobiana|linealizan]] estas ecuaciones alrededor de la condición de operación, se tienen las siguientes ecuaciones de estado y de salida $$ \begin{align} 
    \dot{x}(t) &= A(t) x(t) + B(t) u(t) \\
    y(t) &= C(t) x(t) + D(t) u(t)
\end{align} $$ donde
* $A(t)$ se denomina [[Matriz|matriz]] de estados ^matriz-estados
* $B(t)$ es la matriz de entrada ^matriz-entrada
* $C(t)$ es la matriz de salida ^matriz-salida
* $D(t)$ es la matriz de transmisión directa ^matriz-directa

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
    \tikzmath { 
        \largo = 1.2; \alto = 1.2; \radio = 0.35; 
        \scale = 1.1; \scaleSimb = 0.6;
        \sep = 0.9; \sepInt = 1.5;
    }

    \coordinate (int) at (0, 0);
    \coordinate (suma_ent) at ($ (int) + ({-\sep - \largo / 2 - \radio}, 0) $);
    
    \coordinate (A) at ($ (int) + (0, {-\alto - \sep}) $);
    \coordinate (B) at ($ (suma_ent) + ({-\sep - \largo / 2 - \radio}, 0) $);
    \coordinate (C) at ($ (int) + ({\largo + 2 * \radio + 2 * \sep}, 0) $);
    \coordinate (D) at ($ (int) + (0, {\alto + \sep}) $);
    
    \coordinate (suma_sal) at ($ (C) + ({\largo / 2 + \sep + \radio}, 0) $);

    \foreach \coor/\text in {int/\int dt, A/A(t), B/B(t), C/C(t), D/D(t)} {        
        \coordinate (\coor_arriba) at ($ (\coor) + (0, {\alto / 2}) $);
        \coordinate (\coor_abajo)  at ($ (\coor) + (0, {-\alto / 2}) $);
        \coordinate (\coor_der)    at ($ (\coor) + ({\largo / 2}, 0) $);
        \coordinate (\coor_izq)    at ($ (\coor) + ({-\largo / 2}, 0) $);
        
        \draw (\coor_der |- \coor_abajo) rectangle (\coor_izq |- \coor_arriba)
            node[midway, align=center, scale=\scale] {$\text$};
    }
    
    \foreach \coor in {suma_ent, suma_sal} { 
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
    
    \foreach \nombre in {ent_abajo, ent_izq, sal_arriba, sal_izq} {
        \path (suma_\nombre_label) node[scale=\scaleSimb] {$+$};
    }

    \draw[->] (B_der) -- (suma_ent_izq);
    \draw[->] (suma_ent_der) -- (int_izq) 
        node[midway, scale=\scale, above=2pt] {$\dot{x}(t)$};
    \draw[->] (int_der) -- (C_izq)
        node[midway] (temp) {}
        node[midway, scale=\scale, above=2pt] {$x(t)$};
    \draw[->] (temp.center) -- (temp |- A_der) -- (A_der);
    \draw[->] (A_izq) -- (A_izq -| suma_ent_abajo) -- (suma_ent_abajo);
    \draw[<-] (B_izq) -- ++(-\sep, 0) 
        node [scale=\scale, left=2pt] {$u(t)$}
        node[midway] (temp) {};
    \draw[->] (temp.center) -- (temp |- D_izq) -- (D_izq);
    \draw[->] (D_der) -- (D_der -| suma_sal_arriba) -- (suma_sal_arriba);
    \draw[->] (C_der) -- (suma_sal_izq);
    \draw[->] (suma_sal_der) -- ++(\sep, 0) node[scale=\scale, right=2pt] {$y(t)$};

\end{tikzpicture}
\end{document}
```

## Resolución
---
Vamos a tomar que el [[Sistema lineal|sistema es lineal]] o que fue linealizado para poder plantear ls ecuaciones en forma de matrices. Para obtener la [[Transferencia del sistema|transferencia]]  $G(s)$ podemos aplicar a al sistema de ecuaciones en su forma matricial la [[Transformada de Laplace|transformada de Laplace]] obtenemos el siguiente par de ecuaciones $$ \begin{align} 
    sX(s) - x(0) &= A X(s) + B U(s) \\
    Y(s) &= C X(s) + D U(s)
\end{align} $$
Con condiciones iniciales nulas, usando la primera ecuación, se puede reescribir de la siguiente forma $$ X(s) = (sI - A)^{-1} ~ B U(s) $$ donde $I$ es la [[Matriz identidad|matriz identidad]]

Sustituyendo está última ecuación, en la ecuación de salida, obtenemos $$ Y(S) = \left[ C ~ (sI - A)^{-1} ~ B + D \right] ~ U(s) $$ por lo que podemos tener la transferencia $$ G(s) = C ~ (sI - A)^{-1} ~ B + D $$ donde si $r > 1$ y $m > 1$, entonces $G(s)$ es una matriz de transferencia

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```