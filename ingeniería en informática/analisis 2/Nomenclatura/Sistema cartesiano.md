---
dia: 2024-09-04
tags:
  - ingeniería-en-informática/analisis-2/Nomenclatura
  - nota/facultad
  - carrera/ingeniería-electrónica/analisis-2/Nomenclatura
aliases:
  - Coordenadas cartesianas
  - Transformar coordenadas cartesianas a cilíndricas#^cartesianas-cilindricas
  - Transformar coordenadas cartesianas a esféricas#^cartesianas-esfericas
---
# Definición
---
En el sistema cartesiano, la posición de un punto $P$ en el [[Espacio|espacio]] se describe mediante las [[Proyección ortogonal|proyecciones]] del vector posición sobre los $n$ ejes rectos mutuamente [[Ortogonalidad|perpendiculares]] que se cruzan en el origen de coordenadas 

En el caso que $n$ sea igual a $3$ podemos describir el punto $P$ como $$ P = (x_p,~y_p,~z_p) $$
```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{3d}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, thick]
    
    \draw[->] (0, 0, 0) -- (2.5, 0, 0)
        node[pos=1.1, scale=0.9] {$y$};
    \draw[->] (0, 0, 0) -- (0, 2.5, 0)
        node[pos=1.1, scale=0.9] {$z$};
    \draw[->] (0, 0, 0) -- (0, 0, 3)
        node[pos=1.2, scale=0.9] {$x$};
    \path (0.3, 0, 0.5) node[scale=0.9] {$O$};
    
    \coordinate (P) at (2, 2.3, 2);
    \fill (P) circle (0.075)
        node[above right=2pt] {$P$};
    
    \draw[dashed] (0, 0, 2) node[left=2pt] {$x_p$} -- (2, 0, 2);
    \draw[dashed] (2, 0, 0) node[above=2pt] {$y_p$} -- (2, 0, 2);
    \draw[dashed] (0, 2.3, 0) node[left=2pt] {$z_p$} -- (P);
    \draw[dashed] (2, 0, 2) -- (P);

\end{tikzpicture}
\end{document}
```
## Transformar coordenadas
---
Para pasarlo a [[Sistema cilíndrico|coordenadas cilíndricas]] 
$$ \begin{align} 
    r &= \sqrt{ x^2 + y^2 } & \hat{r} &= \cos(\varphi) ~ \hat{x} + \sin(\theta) ~ \hat{y} \\
    \varphi &= \tan^{-1}\left( \frac{y}{x} \right) & \hat{\varphi} &= -\sin(\varphi) ~ \hat{x} + \cos(\theta) ~ \hat{y} \\
    z &= z & \hat{z} &= \hat{z} \\
\end{align} $$ 
^cartesianas-cilindricas

De cilíndricas ![[Sistema cilíndrico#^cilindricas-cartesianas]]

Para pasarlo a [[Sistema esférico|coordenadas esféricas]] 
$$ \begin{align} 
    r &= \sqrt{ x^2 + y^2 + z^2 } & \hat{r} &= \sin(\theta) \cos(\varphi) ~ \hat{x} + \sin(\theta) \sin(\varphi) ~ \hat{y} + \cos(\theta) ~ \hat{z} \\
    \varphi &= \tan^{-1}\left( \frac{y}{x} \right) & \hat{\varphi} &= \cos(\theta) \cos(\varphi) ~ \hat{x} + \cos(\theta) \cos(\varphi) ~ \hat{y} - \sin(\theta) ~ \hat{z} \\
    \theta &= \cos^{-1}\left( \frac{z}{r} \right) & \hat{\theta} &= -\sin(\varphi) ~ \hat{x} + \cos(\varphi) ~ \hat{y}
\end{align} $$ 
^cartesianas-esfericas

De esféricas ![[Sistema esférico#^esfericas-cartesianas]]

## Diferencial de longitud
---
$$ \begin{array}{|c|c|c|} \hline
   \text{Coordenada que} & & \\
   \text{varía sobre la} & ~~~~~dl~~~~~ & ~~~~~d\vec{l}~~~~~ \\
   \text{trayectoria} & & \\\hline
   x & dx & \hat{x} ~ dx \\
   y & dy & \hat{y} ~ dy \\
   z & dz & \hat{z} ~ dz \\
\hline \end{array} $$
## Diferencial de área
---
$$ \begin{array}{|c|c|c|} \hline
   \text{Coordenada que se} & & \\
   \text{mantiene constante} & ~~~~~dS~~~~~ & ~~~~~d\vec{S}~~~~~ \\
   \text{sobre la superfie} & & \\\hline
   x & dy ~ dz & \hat{x} ~ dy ~ dz \\
   y & dx ~ dz & \hat{y} ~ dx ~ dz \\
   z & dx ~ dy & \hat{z} ~ dx ~ dy \\
\hline \end{array} $$
## Diferencial de volumen
---
$$ dV =  dx ~ dy ~ dz $$

## Fórmula del gradiente
---
![[Gradiente#^gradiente-cartesiano]]

## Fórmula de la divergencia
---
![[Divergencia#^divergencia-cartesiano]]

## Fórmula del rotor
---
![[Rotor#^rotor-cartesiano]]

## Fórmula del laplaciano
---
![[Laplaciano#^laplaciano-cartesiano]]