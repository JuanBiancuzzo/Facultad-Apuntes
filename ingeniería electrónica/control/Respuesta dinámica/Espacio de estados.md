---
dia: 2025-03-23
etapa: ampliar
referencias:
  - "899"
  - "228"
  - "229"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
  - investigación/matemática/koopman-operator-theory
aliases:
  - Sistema dinámico
  - Sistema en espacio de estados
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
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
Si se [[Linealización Jacobiana|linealizan]] estas ecuaciones alrededor del [[Estado de operación|estado de operación]], se tienen las siguientes ecuaciones de estado y de salida $$ \begin{align} 
    \dot{x}(t) &= A(t) x(t) + B(t) u(t) \\
    y(t) &= C(t) x(t) + D(t) u(t)
\end{align} $$ donde $A(t)$ se denomina [[Matriz|matriz]] de estados, $B(t)$ es la matriz de entrada, $C(t)$ es la matriz de salida y $D(t)$ es la matriz de transmisión directa

![[Modelo en espacio de estados en bloques.png]]

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