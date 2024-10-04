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

Consideremos un recinto del espacio donde existe un medio material de propiedades definidas por sus parámetros $\epsilon$ ([[Permitividad eléctrica|permitividad eléctrica]]), $\sigma$ ([[Conductividad eléctrica|conductividad eléctrico]]) y $\mu$ ([[Permeabilidad magnética|permeabilidad magnética]]), en un medio con pérdidas se toma $$ \epsilon = \mathcal{Re}\Set{\epsilon} - i ~ \mathcal{Im}\Set{\epsilon} \in \mathbb{C}, ~~~~ \mu = \mu_0, ~~~~ \sigma = 0 $$
Entonces $$ \gamma = \beta - i \alpha = \sqrt{\omega^2 \mu \epsilon i \omega \mu \sigma} = \sqrt{\omega^2 \mu_0 \left( \mathcal{Re}\Set{\epsilon} - i ~ \mathcal{Im}\Set{\epsilon} \right)} $$
Si bien existe [[Onda electromagnética en medios materiales#^factor|atenuación]]. Son de interés los llamados dieléctricos de bajas pérdidas, dado que habitualmente el propósito de los dieléctricos es almacenar [[Energía|energía]]. En tal caso $\mathcal{Im}\set{\epsilon} \ll \mathcal{Re}\set{\epsilon}$ y podemos aproximar $$ \begin{align} 
    \gamma = \beta - i \alpha &= \sqrt{\omega^2 \mu_0 \epsilon} \\
     &= \sqrt{\omega^2 \mu_0 \mathcal{Re}\Set{\epsilon} ~ \left( 1 - i ~ \frac{\mathcal{Im}\Set{\epsilon}}{\mathcal{Re}\Set{\epsilon}} \right)} \\
     &\approx \sqrt{\omega^2 \mu_0 \mathcal{Re}\Set{\epsilon}} \left( 1 - i ~ \frac{\mathcal{Im}\Set{\epsilon}}{\mathcal{Re}\Set{\epsilon}} \right) \\
\end{align} $$
La [[Onda electromagnética en medios materiales#^velocidad-fase|velocidad de propagación]]  es $$ v = \frac{\omega}{\beta} \approx \frac{1}{\sqrt{\mu_0 \mathcal{Re}\set{\epsilon}}} = \frac{c}{\sqrt{\mathcal{Re}\set{\epsilon_r}}} $$
La [[Profundidad de penetración|profundidad de penetración]] es $$ \delta = \frac{1}{\alpha} \approx \frac{2 ~ \mathcal{Re}\set{\epsilon}}{\beta ~ \mathcal{Im}\set{\epsilon}} = \frac{v}{\omega} ~ \frac{\mathcal{Re}\set{\epsilon}}{\mathcal{Im}\set{\epsilon}} $$
La [[Onda monocromática#^numero-onda|longitud de onda]] es $$ \lambda = \frac{2\pi}{\beta} \approx \frac{\lambda_0}{\sqrt{\mathcal{Re}\set{\epsilon_r}}} $$

Se ve que la profundidad de penetración es grande, y la velocidad de propagación y la longitud de onda tienen expresiones similares a las del [[Onda electromagnética en un dieléctrico perfecto|dieléctrico ideal]]

La [[Impedancia intrínseca|impedancia intrínseca]] es $$ \begin{align} 
    \eta &= \frac{\omega \mu}{\gamma} \\
     &= \frac{\omega \mu_0}{\beta^2} (\beta + i\alpha) \\
     &\approx \frac{\omega \mu}{\beta^2 + \alpha^2} (\beta + i\alpha) 
\end{align} $$ ya que $\beta \gg \alpha$. Resulta además que $\mathcal{Re}\set{\eta} \gg \mathcal{Im}\set{\eta}$, también se puede decir que $\varphi \to 0$. Por lo que finalmente $$ \eta \approx \sqrt\frac{\mu_0}{\mathcal{Re}{\epsilon}} \left( 1 + i ~ \frac{\mathcal{Im}\Set{\epsilon}}{2\mathcal{Re}\Set{\epsilon}} \right) $$
El [[Teorema de Poynting#Valor medio|vector medio de Poynting]] es $$ \begin{align} 
    \langle \vec{N} \rangle &= \pm \frac{\mathcal{Re}\Set{\eta} \left| \tilde{E}_{0\pm} \right|^2 e^{\mp 2 \alpha z}}{2|\eta|^2} ~ \hat{z} \\
     &= \pm \frac{\cos(\varphi) \left| \tilde{E}_{0\pm} \right|^2 e^{\mp 2 \alpha z}}{2|\eta|} ~ \hat{z} \\
     &\approx \pm \frac{\sqrt{\mathcal{Re}\set{\epsilon_r}} \left| \tilde{E}_{0\pm} \right|^2 e^{\mp 2 \alpha z}}{2\eta_0} ~ \hat{z}
\end{align} $$
La [[Teorema de Poynting#En medios materiales|potencia perdida]] por unidad de volumen es $$ \begin{align} 
    \frac{d\langle P \rangle}{dV} &= 2\alpha \langle N \rangle \\
     &= \frac{\alpha ~ E_0^2}{|\eta|} e^{-2\alpha z}
\end{align} $$

La [[Densidad de energía de una onda electromagnética#Valor medio|densidad media de energía almacenada]] en el campo $$ \langle u \rangle = \frac{1}{4} \left( \mathcal{Re}\set{\epsilon} + \frac{\mu}{|\eta|^2} \right) ~ \left| \tilde{E}_{0\pm} \right|^2 ~ e^{\mp 2\alpha z} $$

La [[Densidad de energía de una onda electromagnética#^velocidad-energia|velocidad de la energía]] es $$ v_E = \pm \frac{2 |\eta|}{\mathcal{Re}\Set{\epsilon_0} |\eta|^2 + \mu_0} ~ \hat{z} $$


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