---
dia: 2025-09-23
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/taller-de-señales/Clasificación-en-Inteligencia-Artificial
  - nota/facultad
vinculoFacultad:
  - tema: Clasificación en Inteligencia Artificial
    capitulo: 3
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Se denomina clasificador bayesiano al clasificador óptimo que minimiza el valor [[ingeniería en informática/proba/Representación de variables aleatorias/Esperanza|esperado]] de la [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Función de costo|función de costo]] $\ell(x,~ y)$ dado por la [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Loss 0-1|loss 0-1]] alcanzando el [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^error-bayesiano|error bayesiano]]. Este clasificador será presentado en el siguiente resultado 


> [!observacion]+ Observación 7.3.1  
> $\mathbb{P}(Y \ne \varphi(X)) \ge 1 - \mathbb{E}[ \max_{y} P_{Y \mid X = X}(y) ]$ con igualdad si y solo si $\varphi(x) = \arg\max_{y} P_{Y \mid X = x}(y)$. Donde la notación $P_{Y \mid X = X}(y)$ representa la [[ingeniería en informática/proba/Teoría de probabilidades/Probabilidad condicional|probabilidad condicional]] $P_{Y \mid X = x}(y)$ evaluada en la [[ingeniería en informática/proba/Variables y vectores aleatorios/Variable aleatoria|variable aleatoria]] $X$
> 
> > [!demostracion]- Demostración
> > Usando las propiedades de la [[ingeniería en informática/proba/Representación de variables aleatorias/Esperanza|esperanza]] permite definir una probabilidad como $\mathbb{P}(Y = \varphi(X)) = \mathbb{E}[\mathbb{P}(Y = \varphi(X) \mid X)]$. La [[ingeniería en informática/proba/Teoría de probabilidades/Probabilidad condicional|probabilidad condicional]] dentro de la esperanza es muy fácil de acotar como $$ \mathbb{P}(Y = \varphi(X) \mid X = x) = P_{Y \mid X = x}(\varphi(x)) \le \max_{y \in \mathcal{Y}} P_{Y \mid X = x}(y) $$ con igualdad si y solo si $\varphi(x) = \arg\max_{y \in \mathcal{Y}} P_{Y \max X = x}(y)$. Luego $$ \mathbb{P}(Y \ne \varphi(X)) = 1 - \mathbb{E}[\mathbb{P}(Y = \varphi(X) \mid X)] \ge 1 - \mathbb{E}\left[ \max_{y \in \mathcal{Y}} P_{Y \mid X = X}(y) \right] $$
^obs-7-3-1

Este resultado define el clasificador bayesiano como $\varphi(x) = \arg\max_{y} P_{Y \mid X = x}(y)$. El mismo no es para nada sorprendente, indica que el mejor clasificador es el que elige siempre la opción más probable

Sin embargo, el error bayesiano requiere un esfuerzo de interpretación. Sea $\mathcal{R}_y$, el [[ingeniería en informática/algebra 2/Espacios Vectoriales/Conjunto|conjunto]] de $x \in \mathbb{R}^d$ donde $d$ es la cantidad de parámetros, e $y$ es el máximo de $P_{Y \mid X = x}(y)$. Es decir que los $\mathcal{R}_y$ son los [[ingeniería en informática/analisis 2/Propiedades de funciones/Conjunto de nivel|conjuntos de nivel]] del clasificador bayesiano $$ \mathcal{R}_y = \Set{ x \in \mathbb{R}^d : P_{Y \mid X = x}(y) = \max_{y' \in \mathcal{Y}} P_{Y \mid X = x}(y') } $$
Estos conjuntos definen una [[ingeniería en informática/proba/Representación de variables aleatorias/Partición|partición]] de $\mathbb{R}^d$, donde cada $x$ pertenece solo a uno de los posibles $\mathcal{R}_y$. Dicha partición permite reescribir el [[ingeniería en informática/discreta/Relaciones/Máximo|máximo]] de manera más amena $$ \begin{align} 
    \max_{y \in \mathcal{Y}} P_{Y \mid X = x}(y) &= \sum_{y \in \mathcal{Y}} P_{Y \mid X = x}(y) \mathbb{1}\set{ x \in \mathcal{R}_y } \\
     &= \sum_{y \in \mathcal{Y}} P_Y(y) \frac{p_{X \mid Y = y}(x)}{p_X(x)} \mathbb{1}\set{ x \in \mathcal{R}_y }
\end{align} $$
Esta identidad reescribe el error bayesiano con una expresión fácilmente comprensible $$ \begin{align} 
    1 - \mathbb{E}\left[ \max_{y} P_{Y \mid X}(y \mid X) \right] &= 1 - \int_{\mathbb{R}^d} p_X(x) ~ \max_{y} P_{Y \mid X = x}(y) ~ dx \\
     &= 1 - \sum_{y \in \mathcal{Y}} \int_{\mathcal{R}_y} P_{Y}(y) ~ p_{X \mid Y = y}(x) ~ dx \\
     &= \sum_{y \in \mathcal{Y}} P_{Y}(x) ~ \mathbb{P}(X \notin \mathcal{R}_y \mid Y = y)
\end{align} $$
Este resultado expresar el error bayesiano como la suma de los errores dentro de cada región $\mathcal{R}_y$

```tikz
\usetikzlibrary{decorations.pathreplacing}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\definecolor{azul}{RGB}{100, 100, 255} 
\definecolor{rellenoAzul}{RGB}{204, 204, 255} 
\definecolor{rellenoRojo}{RGB}{255, 204, 204} 


\begin{tikzpicture}[scale=2.1, transform shape, thick]    
    \tikzmath { 
        function normal(\x, \m, \s) {
            return exp(-(\x - \m)^2 / (2 * \s^2)) / sqrt(2 * pi * \s);
        };
        \ancho = 3.7; \dif = 0.075; \escala = 0.6;
        \probaA = 6.1; \mA = -1.9; \sA = 0.5;
        \probaB = 5.4; \mB = 0.4; \sB = 1;
        
        \d = (\probaB / \probaA) * sqrt(\sA / \sB);
        \rel = \sA^2 / \sB^2;
        \a = 1 - \rel;
        \b = 2 * (\mB * \rel - \mA);
        \c = \mA * \mA - \rel * \mB^2 + 2 * \sA^2 * ln(\d);
        
        \medioX = \mA < \mB
            ? (-\b + sqrt(\b^2 - 4 * \a * \c)) / (2 * \a)
            : (-\b - sqrt(\b^2 - 4 * \a * \c)) / (2 * \a);
        \medioY = \probaA * normal(\medioX, \mA, \sA);
    }
    
    \draw[->] (\mA, 0) -- ++(0, {\probaA * normal(\mA, \mA, \sA)});
    
    \foreach \proba/\m/\s/\color/\dir in {
        \probaA/\mA/\sA/rellenoAzul/1, 
        \probaB/\mB/\sB/rellenoRojo/-1} {
        
        \fill[\color] (\medioX, 0) -- (\medioX, \medioY) \foreach \x
            [parse=true] in {\medioX, \medioX + \dir * \dif, ..., \dir * \ancho} {
            -- (\x, {\proba * normal(\x, \m, \s)})
        } -- cycle;       
    }
    
    \foreach \proba/\m/\s/\color in {\probaA/\mA/\sA/azul, \probaB/\mB/\sB/red} {
        \draw[\color] (-\ancho, {\proba * normal(-\ancho, \m, \s)}) \foreach \x
            [parse=true] in {-\ancho, -\ancho + \dif, ..., \ancho} {
            -- (\x, {\proba * normal(\x, \m, \s)})
        };
    }
    \draw[->] ({-\ancho - 0.1}, 0) -- ({\ancho + 0.1}, 0) 
        node[below=2pt, scale=\escala] {$x$};
    
    \path ({-0.5 * \ancho}, {\probaA * normal(-0.5 * \ancho, \mA, \sA)})
        node[above left=2pt, scale=\escala, color = azul] 
            {$P_Y(1) ~ p_{X \mid Y = 1}(x)$};
    \path ({0.4 * \ancho}, {\probaB * normal(0.4 * \ancho, \mB, \sB)})
        node[above right=2pt, scale=\escala, color = red] 
            {$P_Y(2) ~ p_{X \mid Y = 2}(x)$};
    
    \draw[dashed] (\medioX, 0) -- ++(0, {\medioY + .5});
    \draw[|->, ultra thick] (\medioX, -0.2) -- ({\ancho - 0.2}, -0.2)
        node[midway, below=2pt, scale=\escala] {$\mathcal{R}_2$};
    \draw[|->, ultra thick] (\medioX, -0.2) -- ({-\ancho + 0.2}, -0.2)
        node[midway, below=2pt, scale=\escala] {$\mathcal{R}_1$};
    
\end{tikzpicture}
\end{document}
```

Teniendo como ejemplo un clasificador unidimensional de dos clases. Las regiones $\mathcal{R}_1$ y $\mathcal{R}_2$ son delimitadas a partir de $P_{Y \mid X = x}(1) \lessgtr P_{Y \mid X = x}(0)$ . Para cada $x \in \mathbb{R}$, esas regiones son equivalentes a comparar $P_Y(1) ~ p_{X \mid Y = 1}(x) \lessgtr P_Y(0) ~ p_{X \mid Y = 0}(x)$, ya que $p_X(x)$ es la misma de ambos lados

El error bayesiano puede verse como la región sombreada, es la suma del área bajo la curva de $y = 1$ que cae en $\mathcal{R}_2$ (sombreado azul) y la curva de $y = 2$ que cae en $\mathcal{R}_2$ (sombreado rojo)

