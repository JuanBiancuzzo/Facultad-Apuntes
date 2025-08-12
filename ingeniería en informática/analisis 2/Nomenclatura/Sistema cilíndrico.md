---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/analisis-2/Nomenclatura
  - carrera/ingeniería-en-informática/analisis-2/Nomenclatura
  - nota/facultad
aliases:
  - Coordenadas cilíndricas
  - Transformar coordenadas cilíndricas a cartesianas#^cilindricas-cartesianas
  - Transformar coordenadas cilíndricas a esféricas#^cilindricas-esfericas
vinculoFacultad:
  - tema: Nomenclatura
    capitulo: 1
    materia: Análisis matemático 2 A
    carrera: Ingeniería en informática
---
# Definición
---
Este sistema de coordenadas, donde el [[Espacio Rn|espacio Rn]] con $n=3$, una extension del sistema de [[Sistema circular|coordenada circular]] a $\mathbb{R}^3$, de la siguiente forma $$ P = (r_p,~\varphi_p,~z_p) $$
```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{3d}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\definecolor{naranjaPastel}{RGB}{254, 231, 175}
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \draw[->] (0, 0, 0) -- (2.5, 0, 0)
        node[pos=1.1, scale=0.9] {$y$};
    \draw[->] (0, 0, 0) -- (0, 3.5, 0)
        node[pos=1.1, scale=0.9] {$z$};
    \draw[->] (0, 0, 0) -- (0, 0, 3)
        node[pos=1.2, scale=0.9] {$x$};
    \path (0.3, 0, -0.5) node[scale=0.9] {$O$};  

    \tikzmath { \px = 2; \py = 2.8; \pz = 2; }
    \coordinate (P) at (\px, \py, \pz);
    \coordinate (Pxy) at (\px, 0, \pz);
    \fill (P) circle (0.075)
        node[above right=2pt] {$P$};
    
    \draw[dashed] (0, 0, \pz) -- (Pxy);
    \draw[dashed] (\px, 0, 0) -- (Pxy);
    \draw[dashed, ->] (0, 0, 0) -- (Pxy) node[below left=2pt] {$r_p$};
    \draw[dashed] (Pxy) -- (P) -- (0, \py, 0)
        node[left=2pt] {$z_p$};

    \begin{scope}[canvas is zx plane at y=0]
        \draw[->] (1.5, 0) arc (0:{atan(\px / \pz)}:1.5);
    \end{scope}
    \path (0.35, 0, 0.8) node {$\varphi_p$};
    
\end{tikzpicture}
\end{document}
```

## Transformar coordenadas
---
Para pasarlo a [[Sistema cartesiano|coordenadas cartesianas]] 
$$ \begin{align} 
    x &= r \cos(\varphi) & \hat{x} &= \cos(\varphi) ~ \hat{r} - \sin(\varphi) ~ \hat{\varphi} \\
    y &= r \sin(\varphi) & \hat{y} &= \sin(\varphi) ~ \hat{r} + \cos(\varphi) ~ \hat{\varphi} \\
    z &= z & \hat{z} &= \hat{z} \\
\end{align} $$
^cilindricas-cartesianas

De cartesianas ![[Sistema cartesiano#^cartesianas-cilindricas]]

Para pasarlo a [[Sistema esférico|coordenadas esféricas]] 
$$ \begin{align} 
    r &= \sqrt{ r^2 + z^2 } & \hat{r} &= \sin(\theta) ~ \hat{r} + \cos(\theta) ~ \hat{z} \\
    \varphi &= \varphi & \hat{\varphi} &= \hat{\varphi} \\
    \theta &= \tan^{-1}\left( \frac{r}{z} \right) & \hat{\theta} &= \cos(\theta) ~ \hat{r} - \sin(\theta) ~ \hat{z}
\end{align} $$  
^cilindricas-esfericas

De esféricas ![[Sistema esférico#^esfericas-cilindricas]]

## Diferencial de longitud
---
$$ \begin{array}{|c|c|c|} \hline
   \text{Coordenada que} & & \\
   \text{varía sobre la} & ~~~~~dl~~~~~ & ~~~~~d\vec{l}~~~~~ \\
   \text{trayectoria} & & \\\hline
   r & dr & \hat{r} ~ dr \\
   \varphi & r ~ d\varphi & r ~ \hat{\varphi} ~ d\varphi \\
   z & dz & \hat{z} ~ dz \\
\hline \end{array} $$
## Diferencial de área
---
$$ \begin{array}{|c|c|c|} \hline
   \text{Coordenada que se} & & \\
   \text{mantiene constante} & ~~~~~dS~~~~~ & ~~~~~d\vec{S}~~~~~ \\
   \text{sobre la superfie} & & \\\hline
   r & r ~ d\varphi ~ dz & r ~ \hat{r} ~ d\varphi ~ dz \\
   \varphi & dr ~ dz & \hat{\varphi} ~ dr ~ dz \\
   z & r ~ d\varphi ~ dr & r ~ \hat{z} ~ d\varphi ~ dr \\
\hline \end{array} $$
## Diferencial de volumen
---
$$ dV = r ~ dp ~ d\varphi ~ dz $$

## Fórmula del gradiente
---
![[Gradiente#^gradiente-cilindrico]]

## Fórmula de la divergencia
---
![[Divergencia#^divergencia-cilindrico]]

## Fórmula del rotor
---
![[Rotor#^rotor-cilindrico]]

## Fórmula del laplaciano
---
![[Laplaciano#^laplaciano-cilindrico]]