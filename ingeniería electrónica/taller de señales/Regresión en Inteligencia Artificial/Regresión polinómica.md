---
dia: 2025-09-17
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/taller-de-señales/Regresión-en-Inteligencia-Artificial
  - nota/facultad
vinculoFacultad:
  - tema: Regresión en Inteligencia Artificial
    capitulo: 2
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Al igual que la [[ingeniería en informática/proba/Representación de variables aleatorias/Recta de regresión|regresión lineal]], la regresión polinómica intenta estimar la regresión asociada a la [[ingeniería en informática/proba/Representación de variables aleatorias/Predicción#Mejor predictor|esperanza condicional]] $\mathbb{E}[Y \mid X = x]$, ya que esta minimiza el [[ingeniería en informática/proba/Inferencia estadística/Consistencia en media cuadrática|ECM]]

Independientemente de la complejidad de la esperanza condicional, el [[ingeniería electrónica/analisis 3/Series/Serie de Taylor|polinomio de Taylor]] indica que cualquier [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]] se puede aproximar como una combinación lineal de coeficientes polinómicos. Es entonces que surge la regresión polinómica, la cual utiliza una aproximación lineal sobre un mapa polinómico de los predictores vectorizándolos de la siguiente forma $$ X = \begin{bmatrix} 
    1 & x_{1,1} & x_{1,2} & x_{1,1}^2 & x_{1,2}^2 & x_{1,1} ~ x_{1,2} \\
    1 & x_{2,1} & x_{2,2} & x_{2,1}^2 & x_{2,2}^2 & x_{2,1} ~ x_{2,2} \\
    \vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
    1 & x_{n,1} & x_{n,2} & x_{n,1}^2 & x_{n,2}^2 & x_{n,1} ~ x_{n,2} \\
\end{bmatrix} $$ donde $x_{i, k}$ es la muestra $i$-ésima de la variable $k$-ésima, y este ejemplo corresponde a un mapa polinómico de orden $2$


> [!observacion]+ Observación 7.1.2  
> La vectorización correspondiente a un mapa polinómico de orden $\nu$ sobre $d$ predictores posee una cantidad de columnas $\binom{d + \nu}{\nu}$
> 
> > [!demostracion]- Demostración
> > Se puede demostrar utilizando como analogía el problema de conteo de las [[ingeniería en informática/proba/Teoría de probabilidades/Método de bolas y urnas|bolas y urnas]] donde tenemos $d + 1$ urnas (la cantidad de predictores y el $1$) y tenemos $\nu$ bolas. 
> > 
> > Visualizando una situación donde $d = 4$ y $\nu = 5$ se puede interpretar porque esta asignación es correcta
> > 
> > ```tikz
> >\usetikzlibrary{decorations.pathreplacing}
> >\usetikzlibrary{math}
> >\usetikzlibrary{calc}
> >\usetikzlibrary{3d}
> >\usetikzlibrary{arrows.meta}
> >
> >\usepackage{ifthen}
> >\usepackage{amssymb}
> >
> >\begin{document} 
> >\begin{tikzpicture}[scale=1.3, transform shape, thick]
> >    \tikzmath { 
> >        \ancho = 1; \alto = .3; \sep = 0.3;
> >        \urnas = 4; \bolas = 5;
> >        \porc = .3;
> >    }
> >    
> >    \path (0, 0) node (temp) {};
> >    \foreach \cant/\label in {2/1, 1/x_1, 0/x_2, 2/x_3, 0/x_4} {
> >        \tikzmath {
> >            \largo = (max(1, \cant) + \porc) * \ancho;
> >        }
> >        
> >        \ifthenelse{\cant > 0}{
> >            \foreach \x in {1, ..., \cant} {
> >                \draw ($ 
> >                    (temp.center) 
> >                      + ({(\x - 1 + \porc) * \ancho}, {\porc * \ancho}) 
> >                $) 
> >                    -- ++({(1 - \porc) * \ancho}, {(1 - \porc) * \ancho});
> >                
> >                \draw ($ 
> >                    (temp.center) + ({(\x - 1 + \porc) * \ancho}, \ancho) 
> >                $) 
> >                    -- ++({(1 - \porc) * \ancho}, {(\porc - 1) * \ancho});
> >            }
> >        }{}
> >    
> >        \draw ($ (temp.center) + (0, \alto) $) 
> >            -- (temp.center) 
> >            -- ++(\largo, 0)
> >                node[midway, below=2pt] {$\label^\cant$}
> >                node[right=\sep cm] (temp) {}
> >            -- ++(0, \alto);
> >    }
> >    
> >\end{tikzpicture}
> >\end{document}
> >```
> > Donde notamos como esta es una configuración posible de coeficientes, que de forma general se puede escribir como $$ 1^{a_0} ~ \prod_{k = 1}^{d} x_{k}^{a_k} ~~ \text{para algunos} ~~ a_k \in \mathbb{N}_0, ~~ \sum_{k = 0}^{d} a_k = \nu $$
> > 
> > Utilizando el resultado del problema de bolas y urnas llegamos a que la cantidad de configuraciones posibles esta dado por $\binom{d + 1 + \nu - 1}{\nu} = \binom{d + \nu}{\nu}$
^obs-7-1-2

Es importante destacar que el mapa polinómico entrega predictores en magnitudes no comparables. Por ese motivo es indispensable luego de utilizar un mapa polinómico [[ingeniería en informática/orga/NLP/Normalización|normalizar]]


