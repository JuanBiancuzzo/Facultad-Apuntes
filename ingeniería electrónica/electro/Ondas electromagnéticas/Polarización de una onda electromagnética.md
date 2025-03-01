---
dia: 2024-09-23
tags:
  - carrera/ingeniería-electrónica/electro/Ondas-electromagnéticas-en-el-vacío
  - nota/facultad
aliases:
  - Polarización lineal#^polarizacion-lineal
  - Polarización elíptica#^polarizacion-eliptica
  - Polarización circular#^polarizacion-circular
  - Onda electromagnética polarización linealmente#^polarizacion-lineal
  - Onda electromagnética polarización elípticamente#^polarizacion-eliptica
  - Onda electromagnética polarización circularmente#^polarizacion-circular
---
# Definición
---
En las [[Onda electromagnética|ondas electromagnéticas]], los campos tienen componentes sobre un [[Plano normal a una curva|plano normal]] a la dirección de propagación, y estas componentes pueden variar en el tiempo. En general, puede haber un desfasaje entre ambas componentes del campo

Vamos a ejemplificar con el campo eléctrico $$ \vec{E}(\vec{r},~t) = E_{x_0} ~ \cos(\omega t - kz) ~ \hat{x} + E_{y_0} ~ \cos(\omega t - kz + \phi) ~ \hat{y} $$ para $z = 0$ tenemos $$ \vec{E}(z = 0,~t) = E_x ~ \hat{x} + E_y ~ \hat{y} = E_{x_0} ~ \cos(\omega t) ~ \hat{x} + E_{y_0} ~ \cos(\omega t + \phi) ~ \hat{y} $$ donde podemos reescribir $$ \begin{matrix} 
    \displaystyle \cos(\omega t) = \frac{E_x}{E_{x_0}} &&&
    \cos(\omega t + \phi) = \cos(\omega t) \cos(\phi) - \sin(\omega t) \sin(\phi) = \frac{E_y}{E_{y_0}}
\end{matrix} $$ donde podemos escribir $$ \sin(\omega t) = \frac{\displaystyle \frac{E_x}{E_{x_0}} \cos(\phi) - \frac{E_y}{E_{y_0}}}{\sin{\phi}} $$
Por lo que si usamos la identidad $\cos^2(x) + \sin^2(x) = 1$ podemos plantear $$ \cos^2(\omega t) + \sin^2(\omega t) = \left( \frac{E_x}{E_{x_0}} \right)^2 + \frac{\displaystyle \left( \frac{E_x}{E_{x_0}} \cos(\phi) - \frac{E_y}{E_{y_0}} \right)^2}{\sin^2{\phi}} = 1$$
Operando tenemos $$ \left( \frac{E_x}{E_{x_0}} \right)^2 + \left( \frac{E_y}{E_{y_0}} \right)^2 - 2 \frac{E_x ~ E_y}{E_{x_0} ~ E_{y_0}} \cos(\phi) = \sin^2(\phi) $$
```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.4, transform shape, thick]

    \tikzmath { \Exo = 1.6; \Eyo = 1.5; \Ex = 0.85 * \Exo; \Ey = 0.83 * \Eyo; }
    
    \draw[dashed] (-\Exo, -\Eyo) rectangle (\Exo, \Eyo);
    \draw[->] (0, 0) -- (2, 0) node[right=2pt, scale=1] {$x$};
    \draw[->] (0, 0) -- (0, 2) node[above=2pt, scale=1] {$y$};
    
    \draw[->, ultra thick] (0, 0) -- (\Ex, \Ey);
    
    \tikzmath { 
        \a = atan( \Ey / \Ex ); 
        \mx = sqrt(\Ex * \Ex + \Ey * \Ey); 
        \my = 1.1;
    }
    \begin{scope}[cm={cos(\a), sin(\a), -sin(\a), cos(\a), (0, 0)}]
        \draw[ultra thick] (0, 0) circle ({\mx} and {\my});        
    \end{scope}
    
    \path (\Exo, 0) node[above right=2pt, scale=0.8] {$E_{x_0}$};
    \path (0, \Eyo) node[above right=2pt, scale=0.8] {$E_{y_0}$};
    
    \draw [dashed, ultra thick] (\Ex, \Ey) -- (\Ex, -0.2) 
        node[below=2pt, scale=0.8] {$E_x$};
    \draw [dashed, ultra thick] (\Ex, \Ey) -- (-0.2, \Ey) 
        node[left=2pt, scale=0.8] {$E_y$};

\end{tikzpicture}
\end{document}
```

Esta ecuación representa una elipse en el plano $xy$ 

Entonces, en general la punta del campo eléctrico de una [[Onda plana electromagnética|onda plana]] describe una hélice de sección elíptica. El sentido de giro puede ser horario o antihorario. La convención más usada es la que se menciona más abajo en relación a las ondas circularmente polarizadas

* Si $\phi = \pm n \pi$ entonces $\displaystyle \frac{E_x}{E_{x_0}} = \frac{E_y}{E_{y_0}}$ que es la ecuación de una recta en el plano del campo. Este caso se denomina polarización lineal ^polarizacion-lineal
* Si $\phi = \pm (2n + 1) \frac{\pi}{2}$ entonces $\displaystyle \left(\frac{E_x}{E_{x_0}}\right)^2 + \left(\frac{E_y}{E_{y_0}}\right)^2 = 1$ y se trata de una polarización elíptica donde los ejes de la elipse coinciden con $x$ e $y$ ^polarizacion-eliptica
    * Si además $E_{x_0} = E_{y_0} = E_0$ entonces $E_x^2 +E_y^2 = E_0^2$ que es la ecuación de una [[Circunferencia|circunferencia]] de radio $E_0$. Se trata de un caso de polarización circular ^polarizacion-circular

Las ondas circularmente polarizadas pueden estar polarizadas a derecha o a izquierda, según el sentido de giro de $E$ a medida que se propaga

Un ejemplo de la propagación de una onda circular polarizada a izquierda

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{3d}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]

    \coordinate (O) at (0, 0, 0);
    \tikzmath { 
        \px = 8; \py = 0.1; \pz = -10; 
        \magnitud = sqrt(\px * \px + \py * \py + \pz * \pz); 
        \px = \px/\magnitud; \py = \py/\magnitud; \pz = \pz/\magnitud; 
    
        \xx = -\py; \xy = \px; \xz = 0; 
        \magnitud = sqrt(\xx * \xx + \xy * \xy + \xz * \xz); 
        \xx = \xx/\magnitud; \xy = \xy/\magnitud; \xz = \xz/\magnitud;
        
        \yx = \py * \xz - \pz * \xy;
        \yy = \pz * \xx - \px * \xz;
        \yz = \px * \xy - \py * \xz;
    }
    
    \coordinate (phat) at (\px, \py, \pz);
    \coordinate (xhat) at (\xx, \xy, \xz);
    \coordinate (yhat) at (\yx, \yy, \yz);
    
    \tikzmath { \sep = 1.5; \cantidad = 5; \extremos = 1.2; }
    
    \draw[->] ($ (O)!-\extremos!(phat) $) 
        -- ($ (O)!{\sep * (\cantidad + \extremos)}!(phat) $);
    
    \tikzmath { \desfase = 180; \sepAngulo = 60; \radio = 1.2; }
    \foreach \angulo [parse=true, count=\t from 0] in 
        {0, \sepAngulo, ..., \cantidad * \sepAngulo} {
        \coordinate (origen) at ($ (O)!{\sep * \t}!(phat) $);
        \begin{scope}[
            plane origin={(origen)},
            plane x={($ (xhat) + (origen) $)}, 
            plane y={($ (yhat) + (origen) $)}, 
            canvas is plane
        ]            
            \tikzmath { \angulo = \angulo + \desfase; }
            \draw[cyan, ->, ultra thick] (0, 0) 
                -- ({\radio * cos(\angulo)}, {\radio * sin(\angulo)});
            \draw[ultra thick] (0, 0) circle (\radio);
        
        \end{scope}
    }
    

\end{tikzpicture}
\end{document}
```
