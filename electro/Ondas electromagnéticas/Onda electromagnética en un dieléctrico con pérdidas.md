---
dia: 2024-09-13
tags:
  - electro/Ondas-electromagnéticas-en-el-vacío
  - nota/facultad
aliases:
  - Ecuación de ondas reducidas de Helmholtz en un dieléctrico con pérdidas
  - Ecuación de Helmholtz en un dieléctrico con pérdidas
  - Impedancia intrínseca del medio con pérdida#^impedancia-intriseca-del-medio-con-perdidas
---
# Definición
---
Para resolver el caso del [[Campo eléctrico|campo eléctrico]] y [[Campo de inducción magnética|campo magnético]] en un medio con pérdidas comúnmente denominado [[Dieléctrico|dieléctrico]] con pérdidas en ausencia de fuentes

Consideremos un recinto del espacio donde existe un medio material de propiedades definidas por sus parámetros $\epsilon$ ([[Permitividad eléctrica|permitividad eléctrica]]), $\sigma$ ([[Conductividad eléctrica|conductividad eléctrico]]) y $\mu$ ([[Permeabilidad magnética|permeabilidad magnética]]), en un medio con pérdidas se toma $$ \epsilon \in \mathbb{R}, ~~~~ \mu = \mu_0, ~~~~ \sigma = 0 $$

Partiendo de las [[Ecuaciones de Maxwell|ecuaciones de Maxwell]] ![[Ecuaciones de Maxwell#^ecuaciones]]
Para una zona libre de fuentes, en un [[Dieléctrico|dieléctrico]] con pérdidas ($\sigma \ne 0)$, considerando al medio no magnético ($\mu = \mu_0$), con $\vec{J} = \sigma \vec{E}$ (la [[Ley de Ampère#^corriente-conduccion|corriente de conducción]]) con variación armónica en los campos $$ \begin{align} 
    \nabla \times \vec{E} &= -j\omega \mu_0 \vec{H} \\
    \nabla \times \vec{H} &= \sigma \vec{E} + j\omega \epsilon \vec{E} = (\sigma + j\omega\epsilon) ~ \vec{E} \\
    \nabla ~ \vec{D} &= 0 \\
    \nabla ~ \vec{B} &= 0
\end{align} $$
Aplicando el [[Rotor|rotor]] $$ \nabla \times \nabla \times \vec{H} = (\sigma + j\omega\epsilon) ~ \nabla \times \vec{E} $$ recordando que $$ \begin{matrix} 
    \nabla \times \nabla \times \vec{H} = \nabla ~ (\nabla \vec{H}) - \nabla^2 \vec{H} = -\nabla^2 \vec{H} \\
    \nabla \times \vec{E} = -j\omega\mu_0 \vec{H}
\end{matrix} $$ se tiene $$ -\nabla^2 \vec{H} + (\sigma + j\omega\epsilon) j\omega \mu_0 \vec{H} = 0 $$ haciendo $$ \gamma^2 = j\omega \mu (\sigma + j\omega\epsilon) $$
Se llega a la ecuación de onda reducida de Helmholtz $$ \begin{align} 
    \nabla^2 \vec{H} - \gamma^2 \vec{H} &= 0 \\
    \nabla^2 \vec{E} - \gamma^2 \vec{E} &= 0 \\
\end{align} $$ donde $\gamma$ es la constante de propagación

Despejando la constante de propagación se obtiene $$ \gamma = \sqrt{j\omega \mu (\sigma + j\omega\epsilon)} = \alpha + j\beta $$
Si la onda electromagnética vibra en el eje $x$, y se propaga en $z$, se obtiene la siguiente [[Ecuación diferencial ordinaria|ecuación diferencial ordinaria]] $$ \begin{matrix} 
    \frac{d^2 E_x}{dz^2} - \gamma^2 E_x = 0 \\ 
    E_x(z) = E_0^+ ~ e^{-\gamma z} + E_0^- ~ e^{\gamma z}
\end{matrix} $$
Introduciendo la variación temporal armónica, y reemplazando el valor de $\gamma$ $$ E_x(z) = E_0^+ ~ e^{-\alpha z} ~e^{j(\omega t - \beta z)} + E_0^- ~ e^{\alpha z} ~e^{j(\omega t + \beta z)} $$
La onda plana que se propaga en un medio con pérdidas en la dirección $+z$ polarizada en $x$ resulta 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\tikzmath { \E0 = 2; \w = 1; \b = 2; \a = 0.25; }
\begin{tikzpicture}[scale=1.3, transform shape, thick,
    declare function = {
        modulo(\z) = exp(-\a * \z);
        onda(\z, \t) = -sin(deg(\w * \t - \b * \z));
    },
]
    \tikzmath { \largo = 7; \definicion = 0.1; \radio = 0.075; }
    \draw[->] (-0.5, 0) -- ({\largo + 1}, 0)
        node[below=2pt, scale=0.9] {$z$};
    \draw[->] (0, {-\E0 - 0.5}) -- (0, {\E0 + 0.5})
        node[right=2pt, scale=0.9] {$\mathcal{R}e\big\{ E_x(z,~t) \big\}$};
    
    \foreach \signo in {-1, 1} {
        \draw[dashed] (0, {\signo * \E0 * modulo(0)}) \foreach \z 
            [parse=true] in {\definicion, 2 * \definicion, ..., \largo } {
            -- (\z, {\signo * \E0 * modulo(\z)})
        };
    }
    
    \tikzmath { \t = 0; }
    \draw[ultra thick] (0, {\E0 * onda(0, \t) * modulo(0)}) 
        \foreach \z [parse=true] in 
            {\definicion, 2 * \definicion, ..., \largo } {
        -- (\z, {\E0 * onda(\z, \t) * modulo(\z)})
    };
    
    \tikzmath { \t = 2; \ini = 1; }
    \draw[ultra thick, dashed] (\ini, {\E0 * onda(\ini, \t) * modulo(\ini)}) 
        \foreach \z [parse=true] in 
            {\ini + \definicion, \ini + 2 * \definicion, ..., \largo} {
        -- (\z, {\E0 * onda(\z, \t) * modulo(\z)})
    };
    
    \path ({\largo * 0.8}, {-\E0 * modulo(\largo * 0.8)})
        node[below=2pt] {$-e^{-\alpha z}$};
    \path ({\largo * 0.8}, {\E0 * modulo(\largo * 0.8)})
        node[above=2pt] {$~e^{-\alpha z}$};
        
    \tikzmath { \t = 0; \z = pi / (2 * \b); }
    \draw[->, ultra thick] (\z, {\E0 * onda(\z, \t) * modulo(\z)}) 
        -- ++(0.5, 0.25) node[right=2pt] {$t = t_1$};
    
    \tikzmath { \t = 2; \z = pi / (2 * \b) + \ini; }
    \draw[->, ultra thick, dashed] (\z, {\E0 * onda(\z, \t) * modulo(\z)}) 
        -- ++(0.5, 0.25) node[right=2pt] {$t = t_2$};
    
    \tikzmath { \t = 0; \z = (3 * pi) / (2 * \b); }
    \fill (\z, {\E0 * onda(\z, \t) * modulo(\z)}) circle (\radio);
    \draw[->, ultra thick] (\z, {\E0 * onda(\z, \t) * modulo(\z)}) 
        -- ++(0.75, 0) node[below=2pt] {$v$};
    
    \tikzmath { \t = 2; \z = (3 * pi) / (2 * \b) + \ini; }
    \fill (\z, {\E0 * onda(\z, \t) * modulo(\z)}) circle (\radio);
    \draw[->, ultra thick, dashed] (\z, {\E0 * onda(\z, \t) * modulo(\z)}) 
        -- ++(0.75, 0) node[below=2pt] {$v$};

\end{tikzpicture}
\end{document}
```

Siendo $\vec{E}$ $$ E_x(z) = E_0^+ ~ e^{-\gamma z} + E_0^- ~ e^{\gamma z} $$
Para calcular el campo magnético se usa la [[Ley de Faraday#Ley de Maxwell-Faraday|ley de Maxwell-Faraday]] donde el campo magnético se obtiene como $$ \vec{H} = \frac{j}{\omega \mu_0} \left( \nabla \times \vec{E} \right) = \frac{j}{\omega \mu_0} \begin{vmatrix} 
    \hat{x} & \hat{y} & \hat{z} \\
    \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
    E_x & 0 & 0
\end{vmatrix} = \frac{j}{\omega \mu_0} \frac{d}{dz} E_x ~ \hat{y} $$
Resolviendo el campo magnético $$ \begin{align} 
    \vec{H} &= -j ~ \frac{\gamma}{\omega \mu_0} \left( E_0^+ ~ e^{-j\gamma z} - E_0^- ~ e^{j\gamma z} \right) ~ \hat{y} \\
    &= \frac{1}{Z_m} \left( E_0^+ ~ e^{-j\gamma z} - E_0^- ~ e^{j\gamma z} \right) ~ \hat{y}
\end{align} $$ donde la impedancia intrínseca del medio $Z_m = -\frac{\omega \mu_0}{j \gamma}$ 

La impedancia intrínseca del medio con pérdidas $Z_m$ es $$ Z_m = -\frac{\omega \mu_0}{j \gamma} = - \frac{\omega \mu_0}{j\sqrt{j\omega \mu_0 (\sigma + j\omega \epsilon)}} = \sqrt{\frac{j\omega \mu_0}{\sigma + j\omega\epsilon}} $$ 
^impedancia-intriseca-del-medio-con-perdidas