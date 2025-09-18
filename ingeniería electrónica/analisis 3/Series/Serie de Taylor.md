---
dia: 2022-09-21
tags:
  - carrera/ingeniería-electrónica/analisis-3/Series
  - carrera/ingeniería-en-informática/analisis-3/Series
  - nota/facultad
  - carrera/ingeniería-electrónica/analisis-2/Funciones-de-varias-variables
  - carrera/ingeniería-electrónica/analisis-2/Propiedades-de-funciones
  - carrera/ingeniería-en-informática/analisis-2/Funciones-de-varias-variables
  - carrera/ingeniería-en-informática/analisis-2/Propiedades-de-funciones
etapa: ampliar
referencias:
  - "1056"
aliases:
  - Teorema de Taylor
  - Polinomio de Taylor
vinculoFacultad:
  - tema: Series
    capitulo: 3
    materia: Análisis matemático 3
    carrera: Ingeniería electrónica
  - tema: Funciones de varias variables
    capitulo: 4
    materia: Análisis matemático 2 A
    carrera: Ingeniería en informática
  - tema: Propiedades de funciones
    capitulo: 3
    materia: Análisis matemático 2 A
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Dada una [[Función|función]] $f : D \to \mathbb{C}$, con un $D \subseteq \mathbb{C}$, se define la [[Serie|serie]] como una [[Serie de potencias|serie de potencias]] tal que
$$ f(z) = \sum_{n = 0}^\infty c_n \cdot (z - z_0)^n = \sum_{n = 0}^\infty \frac{1}{n!}f^{(n)}(z_0) (z - z_0)^n = \lim_{n \to \infty} P_k(z)$$ donde $P_k$  se define como el polinomio de Taylor de orden $k$

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
## Polinomio de Taylor
---
Dado un campo escalar $f : D \subset \mathbb{R}^n \to \mathbb{R}$ con $n > 1$ con $f \in C^k(E(\vec{A}))$, para todo $\vec{A} + \vec{H} \in E(\vec{A})$ puede expresarse 

$$ f(\vec{A} + \vec{H}) \approx f(\vec{A}) + \bigg[ \sum_{i = 1}^k \frac{d^if(\vec{A}, \vec{H})}{i!} \bigg] \text{ con } \vec{H} \in E(\vec{0}) $$

Donde interpretamos $\vec{H}$ cerca de $\vec{0}$, pero si reemplazamos:

$$ \vec{X} = \vec{A} + \vec{H} \to \vec{H} = \vec{X} - \vec{A},  \text{ con } \vec{X} \text{ cercano a } \vec{A} $$

Esto hace que lo escribamos como

$$ f(\vec{X}) \approx f(\vec{A}) + \bigg[ \sum_{i = 1}^k \frac{d^if(\vec{A}, \vec{X} - \vec{A})}{i!} \bigg] \text{ con } \vec{X} \in E(\vec{A}) $$

Donde $d^if(\vec{A}, \vec{X} - \vec{A})$, con $\vec{A} = (a_1, \cdots, a_n)$, $\vec{X} = (x_1, \cdots, x_n)$, se calcula 

$$ d^if(\vec{A}, \vec{X} - \vec{A}) = \bigg[ \frac{\partial}{\partial x_1} (x_1 - a_1) + \cdots + \frac{\partial}{\partial x_n} (x_n - a_n) \bigg]_{f(\vec{A})}^{(i)} \text{ con } i = 1, \cdots, k $$

### Polinomio de Taylor de 2º orden
---
Sea $f : U \subseteq \mathbb{R}^n \to \mathbb{R}$ una función definida en el [[Conjunto abierto|conjunto abierto]] $U$ de $\mathbb{R}$, tal que las [[Derivada parcial de orden superior|derivada parcial de segundo orden]] son continuas en alguna [[Disco abierto|disco abierto]] $B$ con centro en $\vec{x} \in U$

Entonces, para todo $x \in \mathbb{R}^n$ tal que $\vec{x} + x \in U$ se tiene la formula

$$ f(\vec{x} + x) = f(\vec{x}) + \nabla f(\vec{x}) \cdot x + \frac{1}{2} \cdot x \cdot H(\vec{x}) \cdot x^t $$

Donde $H(\vec{x})$ seria la [[Matriz Hessiana|matriz Hessiana]] en el punto $\vec{x}$, y $x^t$ siendo el transpuesto

#### Ejemplo
---
Con $f(x, y)$ en un [[Entorno|entorno]] del punto $\vec{A} = (x_0, y_0)$, resulta

$$ f(x, y) \approx f(\vec{A}) + df(\vec{A}, \vec{X} - \vec{A}) + \frac{1}{2} d^2f(\vec{A}, \vec{X} - \vec{A}) $$

Donde 

$$ df(\vec{A}, \vec{X} - \vec{A}) = f'_x(\vec{A})(x-x_0) + f'_y(\vec{A})(y - y_0) $$

$$ d^2f(\vec{A}, \vec{X} - \vec{A}) = f''_{xx}(\vec{A})(x - x_0)^2 + 2 f''_{xy}(\vec{A})(x-x_0)(y - y_0) + f''_{yy}(\vec{A})(y - y_0)^2 $$

Resultando en

$$ \begin{matrix} f(x, y) \approx f(\vec{A}) + f'_x(\vec{A})(x-x_0) + f'_y(\vec{A})(y - y_0) \\ + \frac{1}{2} f''_{xx}(\vec{A})(x - x_0)^2 + f''_{xy}(\vec{A})(x-x_0)(y - y_0) + \frac{1}{2} f''_{yy}(\vec{A})(y - y_0)^2 \end{matrix}$$

#### Propiedad
---
El polinomio $p_j(\vec{X})$ que permite expresar $f(\vec{X}) \approx p_j(\vec{X})$ con $\vec{X} \in E(\vec{A})$ 

 * $p_j(\vec{A}) = f(\vec{A})$
 * Hasta el orden $j$ inclusive, las [[Derivada parcial|derivada parcial]] de $p_j$ en $\vec{A}$ son iguales a las correspondientes derivadas parciales de $f$ en dicho punto


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```