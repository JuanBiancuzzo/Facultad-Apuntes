---
dia: 2024-09-24
tags: 
 - electro/Ondas-electromagnéticas-en-el-vacío
 - nota/facultad
---
# Definición
---
El análisis del comportamiento de los materiales para [[Onda monocromática|campos armónicos]], es posible establecer relaciones lineales $$ \begin{matrix} 
    \vec{D} = \epsilon(\omega) ~ \vec{E} &&
    \vec{J} = \sigma(\omega) ~ \vec{E} &&
    \vec{B} = \mu(\omega) ~ \vec{H}
\end{matrix} $$ donde los parámetros $\epsilon(\omega)$, $\sigma(\omega)$ y $\mu(\omega)$ son parámetros complejos que dependen de la [[Función periódica#Frecuencia|frecuencia]] de los campos armónicos. La existencia de parámetros complejos describe un desfasaje en el tiempo entre los fasores involucrados

Consideremos un recinto del espacio donde existe un medio material de propiedades definidas por sus parámetros $\epsilon$ ([[Permitividad eléctrica|permitividad eléctrica]]), $\sigma$ ([[Conductividad eléctrica|conductividad eléctrico]]) y $\mu$ ([[Permeabilidad magnética|permeabilidad magnética]]), dependientes de la frecuencia

Las [[Ecuaciones de Maxwell|ecuaciones de Maxwell]], en su representación [[Fasor|fasorial]] y sin fuentes resultan $$ \begin{align} 
    \nabla ~ \tilde{E}(\vec{r}) &= 0 &&& \nabla \times \tilde{E}(\vec{r}) + i \omega \mu ~ \tilde{H}(\vec{r}) &= 0 \\
    \nabla ~ \tilde{H}(\vec{r}) &= 0 &&& \nabla \times \tilde{H}(\vec{r}) - i \omega \epsilon ~ \tilde{E}(\vec{r}) &= 0
\end{align} $$
Podemos desacoplar las ecuaciones de [[Rotor|rotor]], por ejemplo en la [[Ley de Faraday#Ley de Maxwell-Faraday|ley de Maxwell-Faraday]], usando la identidad $\nabla \times \nabla \times \tilde{E} = \nabla ~ (\nabla ~ \tilde{E}) - \nabla^2 \tilde{E} = -\nabla^2 \tilde{E}$, esta última es usando que $\nabla ~ \tilde{E} = 0$ resultando en $$ -\nabla^2 \tilde{E} + i \omega \mu (i \omega \epsilon + \sigma) \tilde{E}(\vec{r}) = 0 $$
Despejando podemos llegar a la [[Ecuación de Helmholtz|ecuación de Helmholtz]] $$ \nabla^2 \tilde{E}(\vec{r}) + \gamma^2 \tilde{E}(\vec{r}) = 0, ~~~~~ \text{con} ~ \gamma^2 = \omega^2 \mu \epsilon - i \omega \mu \sigma $$ donde se encuentra una ecuación idéntica para el [[Material magnético#^campo-magnetico|campo magnético]]

La solución de la ecuación es $$ \tilde{E}(\vec{r}) = \tilde{E}_0 e^{\mp i \gamma z} $$
Donde si planteamos que $\gamma = \beta - i\alpha$ la solución la podemos reescribir $$ \vec{E}(\vec{r},~t) = \tilde{E}_1 ~ e^{-\alpha z} ~ e^{i(\omega t - \beta z)} + \tilde{E}_2 ~ e^{-\alpha z} ~ e^{i(\omega t + \beta z)} $$
El primer sumando es una [[Onda plana#^onda-progresiva|onda progresiva]] 