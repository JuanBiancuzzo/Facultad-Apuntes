---
dia: 2025-04-14
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-electrónica/estoca/Introducción-a-procesos-aleatorios
  - nota/facultad
aliases:
  - PE
  - Proceso aleatorio continuo de tiempo continuo#^tiempo-continuo-variable-continua
  - Proceso aleatorio discreto de tiempo continueo#^tiempo-continuo-variable-discreta
  - Proceso aleatorio continuo de tiempo discreto#^tiempo-discreto-variable-continua
  - Proceso aleatorio discreto de tiempo discreto#^tiempo-discreto-variable-discreta
  - Proceso aleatorio
vinculoFacultad:
  - tema: Introducción a procesos aleatorios
    capitulo: 4
    materia: Procesos estocásticos
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $(\varXi,~ \mathcal{A},~ \mathbb{P})$  un [[Espacio de probabilidad|espacio de probabilidad]], $\mathcal{T}$ un [[Conjunto|conjunto]] de índices o tiempos. Un proceso estocástico (PE) es una familia de [[Variable aleatoria|variables aleatorias]] $$ \begin{array}{c} 
    X : \varXi \times \mathcal{T} \to \mathcal{S} \\
    X = X(\xi,~ t)
\end{array} $$ donde $\mathcal{S}$ lo llamamos espacio de fase o de estados

## Interpretaciones
---
* Para cada $\xi_0$, tenemos una señal temporal que asociamos a una realización del [[Proceso|proceso]] $x(t) = X(\xi_0,~ t)$
* Para cada $t_0$, tenemos una variable aleatoria que representa el resultado del experimento en ese instante de tiempo $X_{t_0}(\xi) = X(\xi,~ t_0)$

```tikz
\usetikzlibrary{decorations.pathreplacing}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{3d}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\begin{tikzpicture}[scale=1.4, transform shape, thick]
    \tikzmath { 
        \profundidad = 4.5; \ancho = 6; \alto = 3; \intensidad = 0.5;
        function X(\va, \t) {
            return (0.2 * cos(deg(5 * \t - 5 * \va))
                + 0.5 * sin(deg(2.3 * \t + 4 * \va))
                - 0.65 * cos(deg(3.6 * \t))
                - 0.3 * cos(deg(3 * \va)) 
                + 1.25) * \intensidad;
        };
    }
    
    \draw[->] (0, 0, 0) -- (0, 0, \profundidad)
        node[pos=1.15, scale=1.1] {$\xi$};
    \draw[->] (0, 0, 0) -- (0, \alto, 0)
        node[pos=1.1, scale=0.9] {$X(\xi, t)$};
    \draw[->] (0, 0, 0) -- (\ancho, 0, 0)
        node[pos=1.05, scale=1.1] {$t$};
    
    \foreach \z in {1, ..., \profundidad} {
        \draw[dashed, thin] (0, 0, \z) -- ++(0, {\alto - 0.5}, 0)
            node (x_\z) {};
        \draw[dashed, thin] (0, 0, \z) -- ++(\ancho, 0, 0);
    }
    \path (x_3) node[above=2pt, scale=0.9] {$X(\xi_0, t)$};
    
    \draw[dashed, thin] (2.5, 0, 0) -- ++(0, {\alto - 1}, 0)
        node[above=2pt, scale=0.9] {$X(\xi, t_0)$};
    \draw[dashed, thin] (2.5, 0, 0) -- ++(0, 0, \profundidad);
    
    \foreach \va/\color in {1/red, 2/green, 3/cyan, 4/yellow} {
        \begin{scope}[canvas is xy plane at z=\va]
            \draw[\color] (0, {X(\va, 0)}) \foreach \t in {0, 0.1, ..., \ancho} {
                -- (\t, {X(\va, \t)})
            };
        \end{scope}
    }
    
    
\end{tikzpicture}
\end{document}
```

## Configuraciones
---
Como tenemos $2$ variables, podemos tener continuo o discreto para ambas
* Tiempo continuo, con $\mathcal{T} \subseteq \mathbb{R}$ 
    * Con la [[Variable aleatoria continua|variable aleatoria continua]], $\mathcal{S} \subseteq \mathbb{R}$ ^tiempo-continuo-variable-continua
        * Como ejemplo es una señal tonal
    * Con la [[Variable aleatoria discreta|variable aleatoria discreta]], $\mathcal{S} \subseteq \mathbb{Z}$ ^tiempo-continuo-variable-discreta
        * Como ejemplo es el [[Proceso puntual de Poisson|proceso de Poisson]]
* Tiempo discreto, con $\mathcal{T} \subseteq \mathbb{Z}$ 
    * Con la variable aleatoria continua, $\mathcal{S} \subseteq \mathbb{R}$ ^tiempo-discreto-variable-continua
        * Como ejemplo es el [[Ruido blanco|ruido blanco]]
    * Con la variable aleatoria discreta, $\mathcal{S} \subseteq \mathbb{Z}$ ^tiempo-discreto-variable-discreta
        * Como ejemplo es el [[Random walk|random walk]], o el [[Proceso de Bernoulli|proceso de Bernoulli]]

