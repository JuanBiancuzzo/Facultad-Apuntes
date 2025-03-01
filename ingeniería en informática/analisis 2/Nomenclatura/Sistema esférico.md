---
dia: 2024-09-04
tags:
  - ingeniería-en-informática/analisis-2/Nomenclatura
  - nota/facultad
  - carrera/ingeniería-electrónica/analisis-2/Nomenclatura
aliases:
  - Coordenadas esféricas
  - Transformar coordenadas esféricas a cartesianas#^esfericas-cartesianas
  - Transformar coordenadas esféricas a cilíndricas#^esfericas-cilindricas
---
# Definición
---
En el sistema esférico la posición $P$ en el [[Espacio|espacio]] se describe mediante el [[Norma|módulo]] del vector posición y los ángulos que forma con dos ejes perpendiculares que pasan por el origen de coordenadas, que coinciden con los ejes $z$, $y$, $x$ del [[Sistema cartesiano|sistema cartesiano]] correspondiente $$ P = (r_p,~\theta_p,~\varphi_p) $$
```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{3d}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    
    \draw[->] (0, 0, 0) -- (3, 0, 0)
        node[pos=1.1] {$y$};
    \draw[->] (0, -3.2, 0) -- (0, 3.2, 0)
        node[pos=1.05] {$z$};
    \draw[->] (0, 0, 0) -- (0, 0, 3.5)
        node[pos=1.2] {$x$};
    
    \tikzmath { 
        \px = 1.7; \py = 1.5; \pz = 1.7; 
        \meg = sqrt( \px * \px + \py * \py + \pz * \pz );
        \megxy = sqrt( \px * \px + \pz * \pz );
    }
    \coordinate (P) at (\px, \py, \pz); 
    \coordinate (Pxy) at (\px, 0, \pz);
    
    \fill (P) circle (0.075) node[above right=2pt] {$P$};
    \draw[dashed] (0, 0, 0) -- (Pxy) -- (P);

    \begin{scope}[canvas is zx plane at y=0]
        \draw[dashed] (0, 0) circle (\megxy);
        \draw[->, ultra thick] (\megxy, 0) arc (0:{atan(\px / \pz)}:\megxy);
    \end{scope}
    \path (0, 0, \pz) -- (Pxy) node[midway, below=0.2cm] {$\varphi_p$};
    
    \begin{scope}[
        plane x = {({\px / \megxy}, 0, {\pz / \megxy})},
        plane y = {(0, 1, 0)},
        canvas is plane
    ]
        \draw[dashed] (0, -\meg) arc (-90:90:\meg);
        \draw[->, ultra thick] (0, \meg) arc (90:{atan(\py / \megxy)}:\meg);
    \end{scope}
    \path (0, \meg, 0) -- (P) node[midway, below=2pt] {$\theta_p$};
    
    \draw[->, ultra thick] (0, 0, 0) -- (P) node[below, left=2pt] {$r_p$};
    
\end{tikzpicture}
\end{document}
```

## Transformar coordenadas
---
Para pasarlo a [[Sistema cartesiano|coordenadas cartesianas]] 
$$ \begin{align} 
    x &= r \sin(\theta) \cos(\varphi) & \hat{x} &= \sin(\theta) \cos(\varphi) ~ \hat{r} + \cos(\theta) \cos(\varphi) ~ \hat{\theta} - \sin(\varphi) ~ \hat{\varphi} \\
    y &= r \sin(\theta) \sin(\varphi) & \hat{y} &= \sin(\theta) \sin(\varphi) ~ \hat{r} + \cos(\theta) \sin(\varphi) ~ \hat{\theta} + \cos(\varphi) ~ \hat{\varphi} \\
    z &= r \cos(\theta) & \hat{z} &= \cos(\theta) ~ \hat{r} - \sin(\theta) ~ \hat{\theta} \\
\end{align} $$ 
^esfericas-cartesianas

De cartesianas 
![[Sistema cartesiano#^cartesianas-esfericas]]

Para pasarlo a [[Sistema cilíndrico|coordenadas cilíndricas]] 
$$ \begin{align} 
    r &= r \sin(\theta) & \hat{r} &= \sin(\theta) ~ \hat{r} + \cos(\theta) ~ \hat{\theta} \\
    \varphi &= \varphi & \hat{\varphi} &= \hat{\varphi} \\
    z &= r \cos(\theta) & \hat{z} &= \cos(\theta) ~ \hat{r} - \sin(\theta) ~ \hat{\theta}
\end{align} $$ 

^esfericas-cilindricas

De cilíndricas ![[Sistema cilíndrico#^cilindricas-esfericas]]

## Diferencial de longitud
---
$$ \begin{array}{|c|c|c|} \hline
   \text{Coordenada que} & & \\
   \text{varía sobre la} & ~~~~~dl~~~~~ & ~~~~~d\vec{l}~~~~~ \\
   \text{trayectoria} & & \\\hline
   r & dr & \hat{r} ~ dr \\
   \varphi & r \sin(\theta) ~ d\varphi & r \sin(\theta) ~ \hat{\varphi} ~ d\varphi \\
   \theta & r ~ d\theta & r ~ \hat{\theta} ~ d\theta \\
\hline \end{array} $$
## Diferencial de área
---
$$ \begin{array}{|c|c|c|} \hline
   \text{Coordenada que se} & & \\
   \text{mantiene constante} & ~~~~~dS~~~~~ & ~~~~~d\vec{S}~~~~~ \\
   \text{sobre la superfie} & & \\\hline
   r &  r^2 \sin(\theta) ~ d\theta ~ d\varphi &  r^2 \sin(\theta) ~ \hat{r} ~ d\theta ~ d\varphi \\
   \varphi & r ~ d\theta ~ dr & r ~ \hat{\varphi} ~ d\theta ~ dr \\
   \theta & r \sin(\theta) ~ dr ~ d\varphi & r \sin(\theta) ~ \hat{\theta} ~ dr ~ d\varphi \\
\hline \end{array} $$
## Diferencial de volumen
---
$$ dV =  r^2 \sin(\theta) ~ dr ~ d\varphi ~ d\theta $$

## Fórmula del gradiente
---
![[Gradiente#^gradiente-esferico]]

## Fórmula de la divergencia
---
![[Divergencia#^divergencia-esferico]]

## Fórmula del rotor
---
![[Rotor#^rotor-esferico]]

## Fórmula del laplaciano
---
![[Laplaciano#^laplaciano-esferico]]