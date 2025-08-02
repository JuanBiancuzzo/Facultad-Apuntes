---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/estoca/Repaso
  - carrera/ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
  - carrera/ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dado un [[Espacio de probabilidad|espacio de probabilidad]] $(\Omega, \mathcal{A}, \mathbb{P})$, una variable aleatoria es una [[Función|función]] $X : \Omega \to \mathbb{R}$ que este bien definida. Dicha condición la podemos enunciar del siguiente modo

Para cualquier [[Conjunto abierto|conjunto abierto]] $A \subseteq \mathbb{R}$ se tiene $$ \Set{ \omega \in \Omega : X(\omega) \in A } \in \mathcal{A} $$

> [!proposicion]+ Proposición 5.2.1  
> Sea $(\Omega, \mathbb{A}, \mathbb{P})$ un espacio de probabilidad y $X$ una variable aleatoria, entonces $X^{-1}(B) \in \mathbb{A}$. Luego, se puede calcular la probabilidad, es decir $$ \mathbb{P}(X^{-1}(B)) = \mathbb{P}(X \in B) $$
> 
> Observemos que $$ X^{-1}(B) = \{ \omega \in \Omega : X(\omega) \in B \} $$
^prop-5-2-1

## Ejemplo
---
Si yo tengo el [[Espacio muestral|espacio muestral]] $\Omega$, dado por los experimentos de tirar $2$ monedas independientes, tenemos que podemos describirla como $\Omega = \set{ \text{HH},~ \text{HT},~ \text{TH},~ \text{TT} }$ 

Ahora queremos realmente ver la cantidad de $\text{H}$ que obtuvimos por lo que formamos la función 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{amssymb}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, ultra thick]
    \tikzmath { \distancia = 4; \alto = 2; \ancho = 1; }
    \coordinate (espacio_muestral) at (0, 0);
    \coordinate (recta_real) at ($ (espacio_muestral) + (\distancia, 0) $);
    
    \draw (espacio_muestral) ellipse (\ancho cm and \alto cm);
    \path ($ (espacio_muestral) + (0, \alto) $) node[above=2pt] {$\Omega$};
    
    \draw (recta_real) ellipse (\ancho cm and \alto cm);
    \path ($ (recta_real) + (0, \alto) $) node[above=2pt] {$\mathbb{R}$};
    
    \tikzmath { \reduccion = 0.5; \radio = 0.05; \corrimiento = 20; }
    \foreach \text [count=\i from 0] in {HT, HH, TH, TT} {
        \tikzmath { \angulo = \i * 360 / 4 + \corrimiento; }
        \draw ($ (espacio_muestral) + (
            {\reduccion * \ancho * cos(\angulo)},
            {\reduccion * \alto * sin(\angulo)}
        ) $) circle (\radio) 
            node (muestra_\text) {}
            node [above=2pt] {\text};
    }
    
    \foreach \text [count=\i from 0] in {1, 2, 0} {
        \tikzmath { \angulo = \i * 360 / 3; }
        \draw ($ (recta_real) + (
            {\reduccion * \ancho * cos(\angulo)},
            {\reduccion * \alto * sin(\angulo)}
        ) $) circle (\radio) 
            node (valor_\text) {}
            node [above=2pt] {$\text$};
    }
    
    \foreach \inicio/\final/\dir in {
        muestra_HH/valor_2/1,
        muestra_HT/valor_1/.5,
        muestra_TH/valor_1/-.5,
        muestra_TT/valor_0/-1} 
    {
        \draw[red, ->]  (\inicio) ..controls 
                ($ (\inicio)!0.5!(\final) + (-.5, {\dir * .5}) $) and
                ($ (\inicio)!0.5!(\final) + (.5, {\dir * .5}) $) 
            .. (\final);
    }

\end{tikzpicture}
\end{document}
```

Ahora, para calcular la probabilidad, lo que hacemos es la [[Función inversa|inversa]], encontrando los eventos elementales y usándolos para calcular la probabilidad $$ \begin{align}
    \mathbb{P}(X = 1) &= \mathbb{P}(\set{ \omega \in \Omega : X(\omega) = 1 }) \\ 
     &= \mathbb{P}(\set{\text{HT}} \cup \set{\text{TH}}) 
\end{align} $$ donde $X^{-1}(1) = \set{ \omega \in \Omega : X(\omega) = 1 }$