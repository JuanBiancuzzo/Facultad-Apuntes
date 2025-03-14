---
dia: 2024-09-19
tags:
  - carrera/ingeniería-electrónica/electro/Ondas-electromagnéticas-en-el-vacío
  - nota/facultad
aliases:
  - Onda plana electromagnética elemental
---
# Definición
---
En el caso de las [[Sistema cartesiano|coordenadas cartesianas]], para facilitar el tratamiento matemático trabajamos con ondas planas, donde los campos dependen de una única coordenada espacial y del tiempo $$ \begin{align} \vec{E}(\vec{r},~t) = \vec{E}(\vec{z},~t) && \vec{H}(\vec{r},~t) = \vec{H}(z,~t) \end{align} $$

Además, para evitar [[Derivable|derivar]] [[Versor|versores]], usaremos ondas linealmente polarizadas, donde los campos mantienen su dirección vectorial en el tiempo $$ \begin{align} \vec{E}(\vec{r},~t) = E(z,~t) ~ \hat{e}_0 && \vec{H}(\vec{r},~t) = H(z,~t) ~ \hat{h}_0 \end{align} $$ con $\hat{e}_0$ y $\hat{h}_0$ son los versores (constantes) que definen la dirección de los campos

Entonces, partiendo de una [[Onda electromagnética|onda electromagnética]] $$ \nabla^2 \vec{E} - \frac{1}{c^2} \frac{\partial^2}{\partial t^2}\vec{E} = 0 \implies \frac{\partial^2}{\partial z^2} E - \frac{1}{c^2} \frac{\partial^2}{\partial t^2}E = 0 $$

Que es una [[Ecuación de onda|ecuación escalar de D' Alembert]]. Se puede ver como toda [[Función|función]] de la forma $$ f(z \mp ct ) $$ es solución de la ecuación de D'Alembert. Estas formas matemáticas representan ondas que se propagan con [[Velocidad|velocidad]] $\pm c$ a lo largo de la dirección $z$

## Transversabilidad
---
Las [[Ecuaciones de Maxwell|ecuaciones de Maxwell]] imponen ciertas restricciones sobre los campos. En particular las [[Teorema de Gauss|leyes de Gauss]] llevan a que los campos sean transversales a la dirección de propagación $$ \nabla ~ \vec{E}(\vec{r},~t) = \nabla ~ \vec{E}(z,~t) = 0 \implies \frac{\partial}{\partial x}E_x + \frac{\partial}{\partial y}E_y + \frac{\partial}{\partial z}E_z = 0\implies \frac{\partial}{\partial z}E_z = 0 $$ ya que el campo no depende de $x$ ni de $y$. Como $E_z$ depende de $z$ y de $t$, esta ecuación lleva a que $E_z$ depende solamente de $t$ y que además $E_z$ satisface la [[Ecuación de onda|ecuación de onda]] $$ \frac{\partial^2}{\partial z^2} E_z - \frac{1}{c^2} \frac{\partial^2}{\partial t^2} E_z = 0 \implies \frac{\partial^2}{\partial t^2} E_z = 0 \implies E_z(t) = At + B  $$
Resulta entonces que $E_z$ varía linealmente con el tiempo. Independientemente del signo de $A$, se observa que la amplitud del campo crece indefinidamente con el tiempo, lo que es físicamente imposible porque llevaría a una [[Energía|energía]] infinita. Entonces $A$ debe ser $0$

Queda un campo uniforme, que nuevamente lleva a una energía infinita cuando se integra la [[Densidad de energía de una onda electromagnética|densidad de energía]], que es proporcional al cuadrado del campo, sobre todo el espacio, de modo que esta constante debe ser $0$

Se tiene entonces que la componente del [[Campo eléctrico|campo eléctrico]] sobre la dirección de propagación se anula. Se obtiene el mismo resultado partiendo de la [[Teorema de Gauss#Para el campo magnético|ecuación de la divergencia del campo magnético]] $$ \begin{align} 
    \nabla ~ \vec{E}(\vec{r},~t) &= 0 &\implies&& E_z &= 0 \\
    \nabla ~ \vec{H}(\vec{r},~t) &= 0 &\implies&& H_z &= 0 \\
\end{align} $$
```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{3d}

\usepackage{ifthen}
\usepackage{amssymb}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \magnitud = sqrt(30); 
        \hx = 5/\magnitud; \hy = 2/\magnitud; \hz = 1/\magnitud;
        \magnitud = sqrt(29); 
        \dx = -2/\magnitud; \dy = 5/\magnitud; \dz = 0; 
    }
    \coordinate (zhat) at (\hx, \hy, \hz);
    \coordinate (xhat) at (\dx, \dy, \dz);
    \coordinate (yhat) at (
        {\hy * \dz - \hz * \dy},
        {\hz * \dx - \hx * \dz},
        {\hx * \dy - \hy * \dz}
    );
    
    \draw[->] (0, 0, 0) -- ($ (0, 0, 0)!8!(zhat) $)
        node[above=2pt] {$z$};
    
    \foreach \t/\nx/\ny [parse=true] in {0/1/0, 3/-0.196/0.98, 6/-1/0} {   
        \coordinate (origen) at ($ (0, 0, 0)!\t!(zhat) $);
        \begin{scope}[
            plane origin={(origen)},
            plane x={($ (xhat) + (origen) $)}, 
            plane y={($ (yhat) + (origen) $)}, 
            canvas is plane
        ]
            \tikzmath { \size = 1.5; }
            \draw (-\size, -\size) rectangle (\size, \size);
            \draw[gray, step=0.5, thin, dashed] (-\size, -\size) 
                grid (\size, \size);
            \draw[gray] (-\size, -\size) grid (\size, \size);
            
            \draw[cyan, ->, ultra thick] (0, 0) -- (\nx, \ny);
            \draw[cyan, ->, ultra thick] (0, 0) -- (-\ny, \nx);
        
        \end{scope}
    }
    
\end{tikzpicture}
\end{document}
```

De estas expresiones se ve que los campos de una onda plana no tienen componente sobre la dirección de propagación. Se dice que son campos transversales

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

En todo punto del espacio y en todo momento los campos se hallan sobre planos perpendiculares a la dirección de propagación

Por otra parte, las ecuaciones de Maxwell imponen relaciones entre los campos. Por ejemplo, si aplicamos la [[Ley de Faraday#Ley de Maxwell-Faraday|ley de Maxwell-Faraday]] $$ \nabla \times \vec{E}(\vec{r},~t) + \mu_0 \frac{\partial}{\partial t} \vec{H}(\vec{r},~t) = 0 $$
Dado que los campos dependen sólo de $z$ y $t$, y no existe componente según $z$ $$ \begin{vmatrix}
    \hat{x} & \hat{y} & \hat{z} \\
    0 & 0 & \frac{\partial}{\partial z} \\
    E_x & E_y & 0
\end{vmatrix} = -\mu_0 \left( \frac{\partial H_x}{\partial t} ~ \hat{x} + \frac{\partial H_y}{\partial t} ~ \hat{y} \right) \implies \begin{cases} 
    \displaystyle -\frac{\partial E_y}{\partial z} = -\mu_0 ~ \frac{\partial H_x}{\partial t} \\
    \displaystyle \frac{\partial E_x}{\partial z} = -\mu_0 ~ \frac{\partial H_y}{\partial t}
\end{cases} $$
Cada componente de los campos de una onda plana debe tener la forma $f(z \mp ct)$, de modo que, tomando $$ u = z \mp ct \implies \frac{\partial}{\partial z} = \frac{d}{du} \frac{\partial u}{\partial z} = \frac{d}{du} $$
Entonces $$ \begin{align} 
    \frac{\partial E_y}{\partial z} &= \mu_0 \frac{\partial H_x}{\partial t} &\implies&& \frac{dE_y}{du} &= \mp c\mu_0 \frac{dH_x}{du} &\implies&& H_x = \mp \frac{1}{Z_{00}} E_y \\
    \frac{\partial E_x}{\partial z} &= -\mu_0 \frac{\partial H_y}{\partial t} &\implies&& \frac{dE_x}{du} &= \pm c\mu_0 \frac{dH_y}{du} &\implies&& H_y = \pm \frac{1}{Z_{00}} E_x \\
\end{align} $$
Estas ecuaciones se pueden reescribir en forma vectorial $$ \vec{H}(\vec{r},~t) = \pm \frac{\hat{z} \times \vec{E}(\vec{r},~t)}{\eta_0} $$

Donde $\eta_0 = \sqrt{\frac{\mu_0}{\epsilon_0}}$ se denomina [[Impedancia intrínseca|impedancia intrínseca del vacío]]

## En forma fasorial
---
Partiendo de la representación de los campos de la siguiente forma $$ \begin{matrix} 
    \vec{E}(\vec{r},~t) = \tilde{E}(\vec{r}) ~ e^{i \omega t} &
    \vec{D}(\vec{r},~t) = \tilde{D}(\vec{r}) ~ e^{i \omega t} & 
    \vec{H}(\vec{r},~t) = \tilde{H}(\vec{r}) ~ e^{i \omega t} & 
    \vec{B}(\vec{r},~t) = \tilde{B}(\vec{r}) ~ e^{i \omega t} 
\end{matrix} $$
Se puede expresar las ondas planas linealmente polarizadas como $$ \tilde{E}(\vec{r}) = \tilde{E}(z) ~ \hat{x} \implies \nabla^2 \tilde{E} = \frac{d^2}{dz^2} \tilde{E} ~ \hat{x} $$
y la [[Ecuación de Helmholtz|ecuación de Helmholtz]] queda $$ \frac{d^2}{dz^2} \tilde{E} + k^2 \tilde{E} = 0 $$ cuya solución es $$ \tilde{E}(z) = \tilde{E}_0 ~ e^{\pm ikz} $$ de modo que queda una solución [[Fasor|fasorial]] $$ \vec{E}(\vec{r},~t) = \tilde{E}_{0_1} ~ e^{i(\omega t - kz)} + \tilde{E}_{0_2} ~ e^{i(\omega t + kz)} $$ que consiste en la [[Principio de superposición#Superposición de ondas|superposición]] de una [[Onda plana electromagnética#^onda-progresiva|onda progresiva]] y una [[Onda plana electromagnética#^onda-regresiva|regresiva]]

Se obtiene una solución idéntica para el campo magnético $$ \vec{H}(\vec{r},~t) = \frac{\tilde{E}_{0_1}}{Z_{00}} ~ e^{i(\omega t - kz)} - \frac{\tilde{E}_{0_2}}{Z_{00}} ~ e^{i(\omega t + kz)} $$ donde se debe notar el signo negativo de la componente regresiva. Este signo lleva a que el [[Teorema de Poynting|vector de Poyting]] de la onda regresiva apunte en el sentido negativo de $z$
