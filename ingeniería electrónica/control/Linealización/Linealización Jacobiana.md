---
dia: 2025-03-19
etapa: ampliar
referencias:
  - "879"
  - "887"
  - "899"
  - "910"
tags:
  - carrera/ingeniería-electrónica/circuitos/Circuitos-con-diodos
  - carrera/ingeniería-electrónica/control/Linealización
  - nota/facultad
aliases:
  - Análisis de pequeña señal
vinculoFacultad:
  - tema: Circuitos con diodos
    capitulo: 1
    materia: Circuitos microelectrónicos
    carrera: Ingeniería electrónica
  - tema: Linealización
    capitulo: 2
    materia: Control automático
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Con la finalidad de obtener un [[Modelo matemático|modelo matemático]] [[Sistema lineal|lineal]] para un [[Sistema lineal|sistema no lineal]], se supone que las [[Variable de estado|variables]] sólo se desvían ligeramente de alguna condición de operación. Considérese un [[Sistema|sistema]] cuya entrada es $x(t)$ y cuya salida es $y(t)$. La relación entre $y(t)$ y $x(t)$ se obtiene mediante $$ y = f(x) $$
Si la condición de operación normal corresponde a $\bar{x}$ y $\bar{y}$, la ecuación anterior se expande en [[Serie de Taylor|serie de Taylor]] alrededor de ese punto, del modo $$ y = \bar{y} + \frac{d}{dx}f(\bar{x}) ~ (x - \bar{x}) + \frac{1}{2!} \frac{d^2}{dx^2}f(\bar{x}) ~ (x - \bar{x})^2 + \cdots = \sum_{n = 0}^{\infty} \frac{1}{n!} \frac{d^n}{dx^n} f(\bar{x}) ~ (x - \bar{x})^n $$
Si la variación $x - \bar{x}$ es pequeña, es posible no considerar los términos de orden superior en $x - \bar{x}$. Entonces, usando el [[Polinomio de Taylor|polinomio de Taylor de primer orden]] $$ y = \bar{y} + K ~ (x - \bar{x}) $$ donde $K = \frac{d}{dx} f(x) \bigg|_{x = \bar{x}}$  

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.6, transform shape]
    \tikzmath { 
        \xscale = .75; \yscale = .75;
        \xmin = 0; \xmax = 6; \xdiff = 0.5;
        \ymin = -1.5; \ymax = 4; \ydiff = 0.5;
        \tickSpan = 0.2; \radio = 0.05;
        
        \puntos = 30; \pendiente = 1.616;
        function lerp(\t, \min, \max) {
            return \min + \t * (\max - \min);
        };
        function fx(\x) {
            let \a = -3.1;
            let \b = 1;
            return 2 * cos(deg(\x + \a)) - sin(deg(2 * \x - \a)) + \b;
        };
        \xe = 2.5; \fe = fx(\xe); \dx = 1;
        function aprox(\x) {
            return \pendiente * (\x - \xe) + \fe;
        };
    }
    
    \draw[->, thick] ({\xmin * \xscale - \xdiff}, 0) 
        -- ({\xmax * \xscale + \xdiff}, 0) node[right=2pt, scale=0.9] {$x$};
    \draw[->, thick] (0, {\ymin * \yscale - \ydiff}) 
        -- (0, {\ymax * \yscale + \ydiff}) node[above=2pt, scale=0.7] {$f(x)$};

    \path (0, 0) node[below left=2pt, scale=0.9] {$0$};
    
    \begin{scope}[cm={\xscale, 0, 0, \yscale, (0, 0)}]
        \foreach \in [remember=\in as \ip (initially 0)] in {1, ..., \puntos} {
            \tikzmath { 
                \xp = lerp(\ip / \puntos, -\xdiff, \xmax + \xdiff); 
                \xn = lerp(\in / \puntos, -\xdiff, \xmax + \xdiff); 
            }
        
            \draw[red, thick] (\xp, {fx(\xp)}) -- (\xn, {fx(\xn)});
        }
    
        \tikzmath { \minAprox = 1; \maxAprox = 4.25; }
        \draw[green, thick] (\minAprox, {aprox(\minAprox)})
            -- (\maxAprox, {aprox(\maxAprox)});

        \coordinate (A) at (\xe, \fe);
        \coordinate (dA) at ({\xe + \dx}, {aprox(\xe + \dx)});
        
        \tikzmath { \paso = 0.4; }
        \draw[thick] (A) -- (\xe, {fx(\xe + \paso)}) node (pendiente) {}
            -- ({\xe + \paso}, {fx(\xe + \paso)});
    \end{scope}
    
    \fill (A) circle (\radio) node[above left=2pt, scale=0.9] {A};
    
    \draw[thick, dashed] (0, 0 -| A) node[below=2pt, scale=0.9] {$x_0$}
        -- (A) -- (0, 0 |- A) node[left=2pt, scale=0.7] {$f(x_0)$};
    \draw[thick, dashed] (0, 0 -| dA) node[below=2pt, scale=0.9] {$x$}
        -- (dA) -- (0, 0 |- dA) node[left=2pt, scale=0.7] {$\approx f(x)$};
        
    \path (pendiente.center) node[above=0.1cm, scale=0.7] {$K$};
    
\end{tikzpicture}
\end{document}
```

En forma general, vamos a tener un [[Sistema invariante en el tiempo|sistema invariante en el tiempo]] dado por $\dot{x} = f(x,~ u) \in \mathbb{R}^N$, y una salida $y = h(x,~ u) \in \mathbb{R}^M$, para este análisis de pequeña señal, tomando $\bar{x}$ y $\bar{u}$ como su condición de operación, donde la serie de Taylor, tomando que $z = [x,~ u]^T$, y $a = [\bar{x},~ \bar{u}]^T$, de la siguiente forma $$ \dot{x}_i = \sum_{n_1 = 0}^{\infty} \cdots \sum_{n_d = 0}^{\infty} \frac{(z_1 - a_1)^{n_1} \cdots (z_d - a_d)^{n_d}}{n_1! \cdots n_d!} \left( \frac{\partial^{n_1 + \cdots + n_d}f_i}{\partial x_1^{n_1} \cdots \partial x_d^{x_d}} \right) (a_1,~ \cdots,~ a_d),~~~ i \in [1,~ \cdots,~ N] $$

Suponiendo que los términos correspondientes a ordenes superiores a uno, podemos aproximar entonces $f(x,~ u)$ de la siguiente forma $$ \dot{x} \simeq f(\bar{x},~ \bar{u}) + Df(\bar{x},~ \bar{u}) ~ \begin{bmatrix} x - \bar{x} \\ u - \bar{u} \end{bmatrix} $$ donde $Df$ es la [[Jacobiana|matriz Jacobiana]] y notemos que de la misma forma podemos aproximar a $y$

Expresándolo por cada una de sus $i$-esimo y $j$-esimo componente, respectivamente, donde $i \in [1,~ \cdots,~ N]$ y $j \in [1,~ \cdots,~ M]$ $$ \begin{align} 
    \dot{x}_i &= f_i(\bar{x},~ \bar{u}) + \sum_{k = 1}^{N} \frac{\partial}{\partial x_k} f_i(\bar{x},~ \bar{u}) ~ (x_k - \bar{x}_k) + \sum_{k = 1}^{M} \frac{\partial}{\partial u_k} f_i(\bar{x},~ \bar{u}) ~ (u_k - \bar{u}_k) \\
    y &= h_j(\bar{x},~ \bar{u}) + \sum_{k = 1}^{N} \frac{\partial}{\partial x_k} h_j(\bar{x},~ \bar{u}) ~ (x_k - \bar{x}_k) + \sum_{k = 1}^{M} \frac{\partial}{\partial u_k} h_j(\bar{x},~ \bar{u}) ~ (u_k - \bar{u}_k)
\end{align} $$ o lo podemos expresar como [[Matriz|matrices]] de la siguiente forma $$ \begin{align} 
    \dot{x} &= f(\bar{x},~ \bar{u}) + A (x - \bar{x}) + B (u - \bar{u}) \\
    y &= h(\bar{x},~ \bar{u}) + C (x - \bar{x}) + D (u - \bar{u})
\end{align} $$ donde tomamos las matrices $$ \begin{array}{l} 
    A = \begin{bmatrix} 
        \displaystyle \frac{\partial}{\partial x_1} f_1 & \cdots & \displaystyle \frac{\partial}{\partial x_N} f_1 \\
        \vdots & \ddots & \vdots \\
        \displaystyle \frac{\partial}{\partial x_1} f_N & \cdots & \displaystyle \frac{\partial}{\partial x_N} f_N 
    \end{bmatrix}_{\displaystyle  (\bar{x},~ \bar{u})} ~~~~ B = \begin{bmatrix} 
        \displaystyle \frac{\partial}{\partial u_1} f_1 & \cdots & \displaystyle \frac{\partial}{\partial u_M} f_1 \\
        \vdots & \ddots & \vdots \\
        \displaystyle \frac{\partial}{\partial u_1} f_N & \cdots & \displaystyle \frac{\partial}{\partial u_M} f_N 
    \end{bmatrix}_{\displaystyle  (\bar{x},~ \bar{u})} \\\\
    C = \begin{bmatrix} 
        \displaystyle \frac{\partial}{\partial x_1} h_1 & \cdots & \displaystyle \frac{\partial}{\partial x_N} h_1 \\
        \vdots & \ddots & \vdots \\
        \displaystyle \frac{\partial}{\partial x_1} h_N & \cdots & \displaystyle \frac{\partial}{\partial x_N} h_N 
    \end{bmatrix}_{\displaystyle  (\bar{x},~ \bar{u})} ~~~~ C = \begin{bmatrix} 
        \displaystyle \frac{\partial}{\partial u_1} h_1 & \cdots & \displaystyle \frac{\partial}{\partial u_M} h_1 \\
        \vdots & \ddots & \vdots \\
        \displaystyle \frac{\partial}{\partial u_1} h_N & \cdots & \displaystyle \frac{\partial}{\partial u_M} h_N 
    \end{bmatrix}_{\displaystyle  (\bar{x},~ \bar{u})}
\end{array} $$
Tomando un [[Punto de equilibrio|punto de equilibrio]] $(x_e,~ u_e)$, recordando que $f_i(x_e,~ u_e) = 0$, $\forall i \in [1,~ \cdots,~ N]$, y usando el cambio de variable $z = x - x_e$, $v = u - u_e$ e $w = y - h(x_e,~ u_e)$ obtenemos $$ \begin{array}{c} 
    \dot{z} = Az + Bv, && w = Cz + Dv
\end{array} $$ con las mismas matrices de antes

## Caso de una entrada y una salida
---
Tomando un sistema de una entrada $u \in \mathbb{R}$ y una salida $y \in \mathbb{y}$, con un sistema no lineal $$ \begin{align} 
    \dot{x} &= f(x,~ u), & x &\in \mathbb{R}^n,~ u \in \mathbb{R} \\
    y &= h(x,~ u), & y &\in \mathbb{R}
\end{align} $$ donde vamos a tomar la condición de operación $(\bar{x},~ \bar{u})$ 

Vamos a definir nuevas [[Variable de estado|variables de estado]] $z$, como también variables de entrada $v$ y variables de salida $w$ $$ \begin{array}{c} 
    z = x - \bar{x}, && v = u - \bar{u}, && w = y - h(\bar{x},~ \bar{u})
\end{array} $$ donde todas estas variables son cercanas a $0$ cuando estamos cerca de la condición de operación

Finalmente, la linealización alrededor de esa condición de operación es $$ \begin{array}{c} 
    \dot{z} = Az + Bv, && w = Cz + Dv
\end{array} $$ donde $$ \begin{array}{c} 
    \displaystyle A = \frac{\partial}{\partial x} f ~ \Bigg|_{\displaystyle  (\bar{x},~ \bar{u})}, &&
    \displaystyle B = \frac{\partial}{\partial u} f ~ \Bigg|_{\displaystyle  (\bar{x},~ \bar{u})}, &&
    \displaystyle C = \frac{\partial}{\partial x} h ~ \Bigg|_{\displaystyle  (\bar{x},~ \bar{u})}, &&
    \displaystyle D = \frac{\partial}{\partial u} h ~ \Bigg|_{\displaystyle  (\bar{x},~ \bar{u})}
\end{array} $$ 
Notemos que los coeficientes $A$, $B$, $C$ y $D$ son el caso donde $N = 1$ y $M = 1$ de lo mencionado antes

## Ejemplo
---
Tomemos este [[Circuito eléctrico|circuito]] de ejemplo 

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.2, transform shape, thick]
		\draw (5, 0) to[short, o-] ++(-2, 0)
			to[R, l_=$10 ~ K\Omega$] ++ (0, 3)
			to[short, i=$I_x$, -o] ++(2, 0)
			to ++(-2, 0)
			to[R, l=$40 ~ K\Omega$] ++ (-3, 0)
			to[vsource, l=$10 ~V $] ++ (0, -3)
			to[short] ++(3, 0);
		\draw (5, 3) to[open, v^=$V_x$] ++ (0, -3);
	\end{circuitikz}
\end{document}
```

Que podemos encontrar su [[Teorema de Thevenin|equivalente de Thevenin]] 

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.2, transform shape, thick]
		\draw (3, 3) to[short, i=$I_x$, -o] ++(2, 0);
		\draw (3, 3) to[R, l_=$8 ~ K\Omega$] ++ (-2, 0)
			to[short] ++(-1, 0)
			to[vsource, l=$2 ~V $] ++ (0, -3)
			to[short, -o] ++(5, 0);
		\draw (5, 3) to[open, v^=$V_x$] ++ (0, -3);
	\end{circuitikz}
\end{document}
```

Si ahora asumimos que hay una pequeña [[Señal|señal]] alterna en el circuito

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.2, transform shape, thick]
		\draw (3, 3) to[short, i=$I_x$, -o] ++(2, 0);
		\draw (3, 3) to[R, l_=$8 ~ K\Omega$] ++ (-2, 0)
			to[short] ++(-1, 0)
			to[sV, l=$3 ~mV $] ++ (0, -1.5)
			to[vsource, l=$2 ~V $] ++ (0, -1.5)
			to[short, -o] ++(5, 0);
		\draw (5, 3) to[open, v^=$V_x$] ++ (0, -3);
	\end{circuitikz}
\end{document}
```

Ésta se ve como una ligera variación de la [[Curva de carga de un componente|curva de carga]]

![[Curva de carga de pequeña señal alterna.webp]]

Al avanzar el tiempo, la curva de carga (recta en este caso particular) se mueve, haciendo que el punto de intersección con la [[Curva característica de un componente|curva característica del componente X]] cambie. Los distintos puntos de intersección reflejan los valores instantáneos de [[Tensión|tensión]] y [[Corriente eléctrica|corriente]] 

### Aproximación
---
Lo más sencillo sería reemplazar el componente X por su [[Recta de carga estática de un componente|resistencia estática en el punto Q]], al fin y al cabo la tensión total en cada nodo dependerá de la tensión continua (que es grande) y la alterna (que es pequeña). Y por definición, el punto Q encontrado usando X o su resistencia estática sería exactamente el mismo

![[Aproximación de primero orden de la curva de carga de pequeña señal alterna.webp]]

Podríamos reducir sustancialmente el [[Error relativo|error]] si en vez de utilizar la resistencia estática pudiéramos usar la [[Derivable|derivada]] de la [[Curva característica de un componente|ecuación característica en Q]]. Lamentablemente ésta, tal como puede verse, no es la ecuación de una [[Resistencia|resistencia]] en el plano $I_x - V_x$

![[Aproximación de segundo orden de la curva de carga de pequeña señal alterna.webp]]

#### Cambio de ejes coordenados
---
La solución viene de ver las cosas desde otro punto de vista. Por eso planteamos un cambio de variable $$ I_x = I _x ~ Q + i_x ~~~~~ V_x = V_x ~ Q + v_x $$
![[cambio de ejes de curva de carga de pequeña señal alterna.webp]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```