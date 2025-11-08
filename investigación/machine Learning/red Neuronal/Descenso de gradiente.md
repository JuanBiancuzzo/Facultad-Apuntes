---
dia: 2024-07-12
etapa: ampliar
referencias:
  - "147"
aliases:
  - Gradiente descendente
  - Gradient descent
  - Learning rate#^learning-rate
  - Tasa de aprendizaje#^learning-rate
  - Número de condición de la matriz hessina#^numero-condicion
tags:
  - investigación/ciencias-de-la-computación/algoritmos
  - investigación/ciencias-de-la-computación/Machine-learning/red-Neuronal
  - investigación/machine-Learning/Red-Neuronal
  - investigación/matemática/Estadística/Machine-learning/red-Neuronal
  - nota/investigacion
vinculoFacultad:
  - tema: Machine learning
    capitulo: 9
    materia: Organización de datos
    carrera: Ingeniería en informática
  - tema: Regresión en Inteligencia Artificial
    capitulo: 2
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El método del gradiente descendente es un [[investigación/ciencias de la computación/algoritmos/Algoritmo|algoritmo]] numérico de optimización presentado por Cauchy, y es la es la esencia de la mayoría de los algoritmos modernos de inteligencia artificial. La idea es encontrar el mínimo de una función dado un punto de inicio, utilizando la menor cantidad de muestras planteando la siguiente [[Ecuación de recurrencia no lineal|ecuación de recurrencia no lineal]] $$ \theta_{t + 1} = \theta_t - \alpha \cdot \nabla J(\theta_{t + 1}) $$ donde $\alpha > 0$ y es un [[ingeniería en informática/orga/Machine learning/Hiper-parámetros de un modelo|hiper-parámetros del modelo]] y $\nabla J(\theta)$ es el [[ingeniería en informática/analisis 2/Funciones de varias variables/Gradiente|gradiente]] de la función a minimizar

El valor de $\alpha$ recibe el nombre de learning rate o tasa de aprendizaje. Según el valor de $\alpha$, el comportamiento del algoritmo puede ser bien distinto ^learning-rate

```tikz
\usetikzlibrary{decorations.pathreplacing}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{3d}
\usetikzlibrary{arrows.meta}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \ancho = 2.5; \alto = 4;
        function f(\x) { return 0.6 * \x^2; };
        \radio = 0.1; \init = 2.2;
    }
    \foreach \pos/\punto/\alfa in {-3/{1.8, 1.4, 1, 0.5}/0.1, 
        3/{-1, 1.5, -2, 0.8}/2} {
            \begin{scope}
            \clip ({-\ancho + .2 + \pos}, -.2) 
                rectangle ({\ancho - .2 + \pos}, {\alto - .2});
                
            \draw[cyan] (\pos, {f(0)}) \foreach \x in {0, 0.1, ..., \ancho} {
                -- ({\x + \pos}, {f(\x)})
            };
            \draw[cyan] (\pos, {f(0)}) \foreach \x in {0, 0.1, ..., \ancho} {
                -- ({\pos - \x}, {f(\x)})
            };
        \end{scope}
        
        \draw[->] ({-\ancho + \pos}, 0) -- ({\ancho + \pos}, 0) 
            node[below=2pt, scale=1.1] {$\theta$};
        \draw[->] (\pos, -0.2) -- (\pos, \alto) 
            node[pos=0, below=2pt, scale=1.1] {$\alpha = \alfa$}
            node[left=2pt, scale=0.9] {$J(\theta)$};
        
        \fill[red] ({\pos + \init}, {f(\init)}) circle (\radio);
        \foreach \x [remember=\x as \px (initially \init)] in \punto {
            \draw[-{Latex[length=3.5mm]}, red, thick] 
                ({\px + \pos}, {f(abs(\px))}) -- ({\x + \pos}, {f(abs(\x))});
            \fill[red] ({\pos + \x}, {f(abs(\x))}) circle (\radio);
        }
    }
    
\end{tikzpicture}
\end{document}
```


## Learning rate óptimo
---
Se puede calcular la tasa de aprendizaje optimo, donde debe aclararse que si se puede hacer este calculo, ya se encontró la solución optima al problema por lo que es este análisis teórico nos permitirá entender las limitaciones del aprendizaje y su velocidad

Se van a tomar las siguientes [[ingeniería en informática/proba/Test de hipótesis/Hipótesis|hipótesis]] de [[ingeniería en informática/analisis 2/Topología/Conjunto convexo|convexidad]] 
* Existe un único $\theta^*$ tal que $\nabla J(\theta^*) = 0$ 
* La [[ingeniería en informática/analisis 2/Funciones de varias variables/Matriz Hessiana|matriz Hessiana]] $\mathcal{H}_J(\theta)$ existe y es [[ingeniería en informática/algebra 2/Matrices unitarias y ortogonales/Matriz definida positiva|definida positiva]] para todo $\theta$

Usando el [[ingeniería electrónica/analisis 3/Series/Serie de Taylor|Polinomio de Taylor]] de primer orden en el gradiente de $J$, alrededor del punto $\theta*$ se obtiene $$ \nabla J(\theta_t) = \nabla J(\theta^*) + \mathcal{H}_J(\tilde{\theta}) ~ (\theta_t - \theta^*) $$ para algún $\tilde{\theta}$ en el segmento que une $\theta_t$ y $\theta^*$

Notemos que $\mathcal{H}_J(\tilde{\theta})$ es una [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz|matriz]] real, cuadrada y simétrica. Por lo tanto, por el [[Teorema espectral|teorema espectral]], puede escribirse como $\mathcal{H}_J(\tilde{\theta}) = Q^T \Lambda Q$ con una matriz de [[ingeniería en informática/algebra 2/Autovalores y autovectores/Autovalor|autovaloes]] $\Lambda$ diagonal y una de [[Autovector|autovectores]] $A$ [[Matriz ortogonal|matriz ortogonal]] $Q^T Q = Q Q^T = I$

Utilizando estos resultado, y que $\nabla J(\theta^*) = 0$ se obtiene $$ \nabla J(\theta_t) = Q^T \Lambda Q ~ (\theta_t - \theta^*) $$ donde en general $\Lambda$ y $Q$ podrán ser desconocidas

Usando la expresión del gradiente descendente, se puede reescribir la diferencia $(\theta_t - \theta^*)$ de la siguiente forma $\theta_t - \alpha ~ \nabla J(\theta_t) - \theta^*$, utilizando la ecuación anterior podemos obtener $$ \begin{align} 
    \theta_{t+1} - \theta^* &= \theta_t - \alpha ~ \nabla J(\theta_t) - \theta^* \\
     &= (\theta_t - \theta^*) - \alpha ~ Q^T \Lambda Q ~ (\theta_t - \theta^*) \\
     &= (I - \alpha Q^T \Lambda Q) ~ (\theta_t - \theta^*) \\
     &= Q^T (I - \alpha \Lambda) Q ~ (\theta_t - \theta^*) \\
\end{align} $$
Si definimos $v_t = Q (\theta_t - \theta^*)$, la ecuación de recurrencia se puede reescribir como $$ v_{t+1} = (I - \alpha \Lambda) v_{t} $$y por lo tanto $v_t = (I - \alpha \Lambda)^t v_0$. Hay una relación directa entre la [[ingeniería electrónica/analisis 3/Series/Criterios de convergencia|convergencia]] en $\theta_t$ y la convergencia en $v_t$, por lo que para estudiar garantías, éste último es suficiente. Como criterio de garantía sobre la velocidad de convergencia se elegirá un criterio de peor caso $$ \underset{\alpha}{\min} \underset{j}{\max} |1 - \alpha \lambda_j| ~~ \text{s.t.} ~~ |1 - \alpha \lambda_j| < 1 ~~~ \forall j $$ donde $\lambda_j$ son los elementos de la diagonal de $\Lambda$. Es un [[Problema minmax|problema minmax]] con restricciones. Por el lado de las restricciones, la matriz $(I - \alpha \Lambda)$ es naturalmente diagonal y la convergencia estará dada cuando cada coeficiente sea menor que uno de valor absoluto. Es importante aclarar que el $\alpha$ obtenido de esta manera no será el mejor posible en cada caso, sino el que me brinda garantías

Este problema minmax se puede resolver gráficamente, visualizando todos los $\lambda$, específicamente el máximo y mínimo

```tikz
\usetikzlibrary{decorations.pathreplacing}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\begin{tikzpicture}[scale=2.5, transform shape, thick]
    \tikzmath { 
        \ancho = 3.5; \alto = 2;
        function f(\a, \l) { 
            return abs(1 - \a * \l); 
        };
        \scala = 0.55;
    }
    \begin{scope}
        \tikzmath{ 
            \lmin = 1 / (\ancho - .2); \lmax = 1.5; 
            \aopt = 2 / (\lmin + \lmax);
        }
        \clip (-.5, -.5) rectangle ({.5 + \ancho}, {\alto - .3});
        \foreach \l/\color [count=\i] in 
            {\lmin/blue, .6/yellow, .8/green, \lmax/red} 
        {
            \draw[\color] (0, {f(0, \l)}) 
                -- ({1 / \l}, 0) node (pos_\i) {}
                -- ({\ancho - .2}, {f(\ancho - .2, \l)});
        }
        
        \draw[ultra thick, dashed] (0, 1)
            -- (\aopt, {f(\aopt, \lmax)})
            -- ({\ancho - .2}, {f(\ancho - .2, \lmax)});
            
        \draw[dashed] (\aopt, 0) node[below=2pt, scale=\scala] {$\alpha^*$}
            -- (\aopt, {f(\aopt, \lmax)})
            -- (0, {f(\aopt, \lmax)}) node[left=2pt, scale=\scala] 
                {$\frac{\kappa - 1}{\kappa + 1}$};
        
        
        \path (pos_1) node[below=2pt, scale=\scala] {$\frac{1}{\lambda_{\min}}$};
        \path (pos_4) node[below=2pt, scale=\scala] {$\frac{1}{\lambda_{\max}}$};
        
    \end{scope}    
    
    \draw[->] (-.2, 0) -- (\ancho, 0) 
        node[pos=1.05, scale=\scala] {$\alpha$};
    \draw[->] (0, -0.2) -- (0, \alto) 
        node[left=2pt, scale=\scala] {$|1 - \alpha \lambda_j|$};
    
\end{tikzpicture}
\end{document}
```

Esta muestra los diferentes valores $|1 - \alpha \lambda_j|$ como función de $\alpha$, donde cada curva en V obtiene su mínimo cuando $\alpha = \frac{1}{\lambda_j}$. El máximo valor de estas curvas se puede ver como la curva en líneas punteadas, que comienza siendo la del menor autovalor ($\lambda_\text{mín}$), hasta que se cruza con la curva de mayor autovalor ($\lambda_\text{máx}$), donde el vértice, o mínimo valor de esta nueva curva, se encuentra justamente el learning rate óptimo $\alpha^*$

Para encontrar el valor hace falta interceptar las dos [[ingeniería en informática/analisis 2/Topología/Curva|curvas]], la semirrecta decreciente de la curva con mínimo autovalor, con la semirrecta creciente de la curva con máximo autovalor $$ 1 - \alpha^* \lambda_\text{mín} = \alpha^* \lambda_\text{máx} - 1 \implies \alpha^* = \frac{2}{\lambda_\text{mín} + \lambda_\text{máx}} $$
La velocidad de convergencia estará asociada entonces al valor correspondiente a este learning rate en el eje de las ordenadas $$ 1 - \frac{2}{\lambda_\text{mín} + \lambda_\text{máx}} \lambda_\text{mín} = \frac{\lambda_\text{mín} - \lambda_\text{máx}}{\lambda_\text{mín} + \lambda_\text{máx}} = \frac{\kappa - 1}{\kappa + 1} $$ donde $\kappa = \frac{\lambda_\text{máx}}{\lambda_\text{mín}}$ se denomina número de condición de la matriz asociada $\mathcal{H}_J(\tilde{\theta})$ ^numero-condicion

El learning rate óptimo no coincide con el máximo valor convergente, la condición $|1 - \alpha \lambda_j| < 1$ para todo $j$ se puede reescribir como $0 < \alpha < \frac{2}{\lambda_j}$ y por lo tanto la condición de convergencia es $\alpha < \frac{2}{\lambda_\text{máx}}$. Un $\alpha$ muy grande convergente, puede implicar rebotes a la hora de converger

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```