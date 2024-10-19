---
dia: 2024-09-03
tags:
  - fisica-2/Circuitos-en-régimen-alterno-permanente
  - nota/facultad
  - adc/Circuitos-en-regimen-senoidal-permanente
referencias:
  - "222"
aliases:
  - Triángulo de potencia#Triángulo de potencia
etapa: ampliar
orden: 197
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
La [[Potencia|potencia]] compleja de un [[Circuito eléctrico|circuito eléctrico]] de [[Corriente alterna|corriente alterna]], identificada con la letra $S$, es la suma de la potencia que disipa dicho circuito conocida como [[Potencia|potencia activa]], que se designa con la letra $P$  y la potencia utilizada para la formación de los campos [[Campo eléctrico|eléctrico]] y [[Campo de inducción magnética|magnético]] de sus componentes, que fluctuará entre estos componentes y la fuente de [[Energía|energía]], conocida como [[Potencia reactiva|potencia reactiva]], que se designa con la letra $Q$

Esto significa que la potencia aparente representa la potencia total desarrollada en un circuito con [[Impedancia|impedancia]] $\mathbb{Z}$. La relación entre todas las potencias es $$ S^2 = P^2 + Q^2 $$
La fórmula de la potencia aparente es $$ S = I^* ~ V = \underbrace{P}_{I_{ef}^2 ~ R} + \underbrace{Q}_{I_{ef}^2 ~ X}$$ siendo $I$ la [[Corriente eléctrica|corriente]] expresada como [[Fasor|fasor]], $V$ la [[Tensión|tensión]] expresada como fasor, $I_{ef}$ es la [[Corriente eficaz|corriente eficaz]]. Esta potencia tiene unidades de $[\text{VA}]$

## Triángulo de potencia
---
Podemos relacionar entonces las potencias en un triángulo 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, ultra thick]
    \tikzmath { \P = 4; \Q = 3; \S = 5; }
    
    \tikzmath { \desX = -\P - 1; }
    \begin{scope}[cm={1, 0, 0, 1, (\desX cm, 0)}]
        
        \draw (0, 0) 
            -- ++(\P, 0)
                node[midway, below=2pt] {$P$}
            -- ++(0, \Q)
                node[midway, right=2pt] {$Q > 0$}
            -- (0, 0)
                node[midway, above left=2pt] {$S$};
        
        \draw (1, 0) arc (0:{atan(\Q / \P)}:1cm);
        \path ({atan(\Q / \P) / 2}:0.7cm) 
            node {$\phi_z$};
        
    \end{scope}
    
    \tikzmath { \desX = 1; }
    \begin{scope}[cm={1, 0, 0, 1, (\desX cm, 0)}]
        \draw (0, \Q) 
            -- ++(\P, 0)
                node[midway, above=2pt] {$P$}
            -- ++(0, -\Q)
                node[midway, right=2pt] {$Q < 0$}
            -- (0, \Q)
                node[midway, below left=2pt] {$S$};
        
        \draw (1, \Q) arc (0:{-atan(\Q / \P)}:1cm);
        \path ($ (0, \Q) + ({-atan(\Q / \P) / 2}:0.7cm) $) 
            node {$\phi_z$};
    \end{scope}
    
\end{tikzpicture}
\end{document}
```

^791461

* Si el [[Corriente alterna#Circuito resistivo puro|circuito resistivo puro]] $(\phi_z = 0) \iff Q = 0$, por lo que $S = P$
* Si el [[Corriente alterna#Circuito capacitivo puro|circuito capacitivo puro]] o [[Corriente alterna#Circuito inductivo puro|inductivo puro]], $\left(\phi_z = \pm \frac{\pi}{2} \right) \iff P = 0$, por lo que $S = Q$

Siendo $\cos(\phi_z)$ al [[Factor de potencia|factor de potencia]] que tendrá el circuito

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```