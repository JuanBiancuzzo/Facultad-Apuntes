---
dia: 2024-09-12
tags:
  - electro/Ondas-electromagnéticas-en-el-vacío
  - nota/facultad
aliases:
  - Ecuación de ondas reducidas de Helmholtz en un dieléctrico perfecto
  - Ecuación de Helmholtz en un dieléctrico perfecto
  - Impedancia intrínseca del vacío#^impedancia-intrinseca-vacio
  - Ecuación de onda transversal electromagnética#Onda TEM
  - TEM#Onda TEM
  - Velocidad de la luz en el vacio#^velocidad-luz-vacio
---
### Definición
---
Para resolver el caso del [[Campo eléctrico|campo eléctrico]] y [[Campo de inducción magnética|campo magnético]] en un medio sin pérdidas comúnmente denominado [[Dieléctrico|dieléctrico]] perfecto en ausencia de fuentes

Considere el vacío que es un medio dieléctrico perfecto, y los campos con variación armónica, considere también la notación exponencial compleja $$ \vec{E} = \vec{E}(x,~y,~z) ~ e^{j \omega t}, ~~~~~ \vec{H} = \vec{H}(x,~y,~z) ~ e^{j \omega t} 
$$
Planteándolo con una representación fasorial ![[Ecuaciones de Maxwell#^ecuaciones-fasoriales]]

Para obtener la ecuación de ondas se aplica el [[Rotor|rotor]] a la ecuación de $\nabla \times \vec{H} = j \omega \epsilon_0 \vec{E}$ se obtiene $$ \nabla \times \nabla \times \vec{H} = j \omega \epsilon_0 \nabla \times \vec{E} $$ recordando $$ \begin{matrix} 
    \nabla \times \nabla \times \vec{H} = \nabla ( \nabla ~ \vec{H}) - \nabla^2 \vec{H} = -\nabla^2 \vec{H} \\ 
    \nabla \times \vec{E} = -j\omega\mu_0 \vec{H}
\end{matrix} $$ se tiene $$ -\nabla^2 \vec{H} = j \omega \epsilon_0 (-j\omega \mu_0 \vec{H}) $$
Se llega a las ecuación de ondas reducidas de Helmholtz $$ \begin{align} 
    \nabla^2 \vec{H} + \omega^2 \mu_0 \epsilon_0 \vec{H} &= 0 \\
    \nabla^2 \vec{E} + \omega^2 \mu_0 \epsilon_0 \vec{E} &= 0
\end{align} $$ haciendo $\gamma$ $$ \gamma^2 = -\omega^2 \mu_0 \epsilon_0 $$

Se llega a la ecuación de onda reducida o ecuación de Helmholtz siguiente $$ \nabla^2 \vec{E} - \gamma^2 \vec{E} = 0 $$ 
Se obtiene un resultado análogo con el campo magnético $$ \nabla^2 \vec{H} - \gamma^2 \vec{H} = 0 $$ operado con la constante de propagación $\gamma$ en el vacío se obtiene $$ \gamma = j\omega \sqrt{\mu_0 \epsilon_0} $$ donde $\gamma$, en general es una magnitud compleja $$ \gamma = \alpha + j\beta $$ con $\alpha$ en $\left[ \frac{1}{m} \right]$ constante de atenuación, y $\beta$ en $\left[ \frac{rac}{m} \right]$ constante de fase

En este caso, $\gamma$ es puramente imaginario


Considerando que el campo eléctrico tiene solo la componente $E_x$, en una [[Dimensión|dimensión]]. Reemplazando el [[Laplaciano|laplaciano]] se obtiene $$ \left( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} - \gamma^2 \right) ~ E_x = 0 $$
Considerando que la onda vibra solo en $x$, por lo tanto $$ \frac{\partial^2}{\partial x^2} E_x = 0, ~~~~~~ \frac{\partial^2}{\partial y^2} E_y = 0 $$ se obtiene la siguiente [[Ecuación diferencial ordinaria|ecuación diferencial ordinaria]] $$ \frac{d^2}{dz^2} E_x - \gamma E_x = 0 $$
La solución de la ecuación diferencial es $$ \begin{align} 
    E_x(z) &= f^+(\omega t - \beta z) + f^-(\omega t + \beta z) \\
    &= E_0^+ ~ \cos(\omega t - \beta z) + E_0^- ~ \cos(\omega t + \beta z)
\end{align} $$ donde el primer término representa una onda que se propaga en $z > 0$ y el segundo representa una onda que se propaga en $z < 0$, considerando $\gamma = j\beta$ e introduciendo la variación temporal armónica

Calculando el campo magnético, que podemos despejar de la [[Ley de Faraday#Ley de Maxwell-Faraday|ley de Maxwell-Faraday]] $$ \vec{H} = \frac{j}{\omega \mu_0} \left( \nabla \times \vec{E} \right) = \frac{j}{\omega \mu_0} \begin{vmatrix} 
    \hat{x} & \hat{y} & \hat{z} \\
    \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
    E_x & 0 & 0
\end{vmatrix} = \frac{j}{\omega \mu_0} \frac{d}{dz} E_x ~ \hat{y} $$

Resolviendo el campo magnético $$ \vec{H} = \frac{\beta}{\omega \mu_0} \left( E_0^+ ~ e^{-j\beta z} - E_0^- ~ e^{j\beta z} \right) ~ \hat{y} $$
Donde podemos definir la [[Impedancia|impedancia]] intrínseca del vacío como $$ \frac{1}{Z_{00}} = \sqrt{\frac{\epsilon_0}{\mu_0}} = \frac{\beta}{\omega \mu_0} $$ 
^impedancia-intrinseca-vacio
Entonces podemos expresar el campo magnético como $$ H_y(z) = \frac{E_0^+}{Z_{00}} ~ e^{-j\beta z} - \frac{E_0^-}{Z_{00}} ~ e^{j\beta z} = \frac{E_0^+}{Z_{00}} ~ \cos(\omega t - \beta z) - \frac{E_0^-}{Z_{00}} ~ \cos(\omega t + \beta z) $$

#### Onda TEM
---
Una onda transversal electromagnética (TEM) que se proponga en $+z$ polarizada en $x$ $$ \begin{align}
    E_x(z) &= E_0^+ \cos(\omega t - \beta z) + E_0^- \cos(\omega t + \beta z) \\
    H_y(z) &= \frac{E_0^+}{Z_{00}} \cos(\omega t - \beta z) - \frac{E_0^-}{Z_{00}} \cos(\omega t + \beta z)
\end{align} $$
```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{3d}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
    \definecolor{rojo}{RGB}{247, 156, 133}
    \definecolor{azul}{RGB}{195, 195, 213}
\begin{tikzpicture}[scale=1.1, transform shape, thick, z={(10:10mm)}, x={(-45:5mm)}]
    \tikzmath { \definicion = 0.1; \longitud = 11; }
    
    \begin{scope}[canvas is zx plane at y=0] % magnetico
        \draw[gray, opacity=0.8] (0, -2) grid (\longitud, 2);
        
        \draw[ultra thick] (0, 0) \foreach \x [parse=true] in 
            {0, \definicion, ..., \longitud + \definicion} 
        { -- (\x, {cos(\x * 90)}) };
        
        \fill[red, opacity=0.5] (0, 0) \foreach \x [parse=true] in 
            {0, \definicion, ..., \longitud + \definicion} 
        { -- (\x, {cos(\x * 90)}) } -- (\longitud, 0) -- cycle;
        
        \foreach \x in {0, 0.5, ..., \longitud} {
            \draw[opacity=0.8] (\x, 0) -- ++(0, {cos(\x * 90)});
        }
    \end{scope}
    
    \begin{scope}[canvas is zy plane at x=0] % electrico    
        \draw[ultra thick] (0, 0) \foreach \x [parse=true] in 
            {0, \definicion, ..., \longitud + \definicion} 
        { -- (\x, {cos(\x * 90)}) };
        
        \fill[blue, opacity=0.5] (0, 0) \foreach \x [parse=true] in 
            {0, \definicion, ..., \longitud + \definicion} 
        { -- (\x, {cos(\x * 90)}) } -- (\longitud, 0) -- cycle;
        
        \foreach \x in {0, 0.5, ..., \longitud} {
            \draw[opacity=0.8] (\x, 0) -- ++(0, {cos(\x * 90)});
        }
    \end{scope}
    
    \tikzmath { \alto = 2; }
    \draw[->, ultra thick] (0, -\alto, 0) -- (0, \alto, 0) 
        node[above=2pt] {$x$};
    \draw[->, ultra thick] (0, 0, 0) -- (0, 1, 0) 
        node[left=2pt] {$E_x$};
        
    \tikzmath { \alto = 3; }
    \draw[->, ultra thick] (-\alto, 0, 0) -- (\alto, 0, 0) 
        node[right=2pt] {$y$};
    \draw[->, ultra thick] (0, 0, 0) -- (1, 0, 0) 
        node[below=2pt] {$H_y$};
        
    \draw[->, ultra thick] (0, 0, 0) -- (0, 0, {\longitud + 0.25}) 
        node[right=2pt] {$z$};
\end{tikzpicture}
\end{document}
```
^onda-transversal

Considerando que la onda se propaga en $z > 0$ $$ \begin{align}
    E_x^+(z) &= E_0^+ \cos(\omega t - \beta z) \\
    H_y^+(z) &= \frac{E_0^+}{Z_{00}} \cos(\omega t - \beta z)
\end{align} $$
Para tiempos sucesivos, la onda viaja en las $z > 0$ si se considera la fase constante $$ \omega t - \beta z = cte $$ aplicando $\frac{d}{dt}$ se obtiene $$ \omega \frac{dt}{dt} - \beta \frac{dz}{dt} = 0 $$ despejando la velocidad $v = \frac{dz}{dt}$ podemos obtener $$ v = \frac{dz}{dt} = \frac{\omega}{\beta} = \frac{\omega}{\omega \sqrt{\mu_0 \epsilon_0}} = \frac{1}{\sqrt{\mu_0 \epsilon_0}} = 3 \cdot 10^8 ~ \frac{m}{s} $$ la velocidad de fase en el vacío será la velocidad de la luz en el vacío ^velocidad-luz-vacio

