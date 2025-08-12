---
dia: 2024-09-24
tags:
  - carrera/ingeniería-electrónica/electro/Ondas-electromagnéticas-en-el-vacío
  - nota/facultad
aliases:
  - Factor de propagación de una onda electromagnética#^factor
  - Factor de atenuación de una onda electromagnética#^factor
  - Velocidad de una onda electromagnética#^velocidad-fase
  - Velocidad de fase de una onda electromagnética#^velocidad-fase
  - Impedancia intrínseca del medio#^impedancia-intrinseca-del-medio
  - Velocidad de propagación de las ondas electromagnéticas#^velocidad-fase
vinculoFacultad:
  - tema: Ondas electromagnéticas
    capitulo: 3
    materia: Electromagnetismo aplicado
    carrera: Ingeniería electrónica
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
El primer sumando es una [[Ecuación de onda#^onda-progresiva|onda progresiva]] y el segundo una [[Ecuación de onda#^onda-regresiva|onda regresiva]], cuyas amplitudes decaen exponencialmente a medida que se propaga

La parte real $\beta$ del [[Onda monocromática#^numero-onda|número de onda]] es llamado factor de propagación y la parte imaginaria $\alpha$ el factor de atenuación. En general ambos parámetros dependen de la frecuencia ^factor

La velocidad de las ondas armónicas (también llamada velocidad de fase) es $$ v_f = \frac{\omega}{\beta} $$ ^velocidad-fase

La [[Onda monocromática#^numero-onda|longitud de onda]] en el material es $$ \lambda = \frac{2\pi}{\beta} $$
Como el campo magnético cumple la misma ecuación diferencial que el [[Campo eléctrico|campo eléctrico]], su expresión matemática es similar $$ \vec{H}(\vec{r},~t) = \tilde{H}_1 ~ e^{-\alpha z} ~ e^{i(\omega t - \beta z)} + \tilde{H}_2 ~ e^{-\alpha z} ~ e^{i(\omega t + \beta z)} $$

Podemos calcular la impedancia intrínseca del medio a partir de la ley de Maxwell-Faraday $$ \begin{matrix} 
    \tilde{E}(\vec{r}) = \tilde{E}_0 ~ e^{\mp i \gamma z} &&
    \tilde{H}(\vec{r}) = \tilde{H}_0 ~ e^{\mp i \gamma z} &&
    \nabla \times \tilde{E}(\vec{r}) + i \omega \mu \tilde{H}(\vec{r}) = 0
\end{matrix} $$ entonces $$ \begin{align} 
    \nabla \times \tilde{E}(\vec{r}) &= \begin{vmatrix} 
        \hat{x} & \hat{y} & \hat{z} \\
        0 & 0 & \frac{\partial}{\partial z} \\
        \tilde{E}_x & \tilde{E}_y & 0
    \end{vmatrix} \\\\
     &= -\frac{\partial}{\partial z} \tilde{E}_y ~ \hat{x} + \frac{\partial}{\partial z} \tilde{E}_x ~ \hat{y} \\
     &= \mp i \gamma \left( -\tilde{E}_y ~ \hat{x} + \tilde{E}_x ~ \hat{y} \right) \\
     &= \mp i \gamma ~ \hat{z} \times \tilde{E}(\vec{r}) = -i \omega \mu \tilde{H}(\vec{r})
\end{align} $$ en donde $$ \tilde{H}(\vec{r}) = \pm \frac{\gamma}{\omega \mu} ~ \hat{z} \times \tilde{E}(\vec{r}) \implies Z_m = \frac{\omega \mu}{\gamma} = \frac{\omega \mu (\beta + i \alpha)}{\beta^2 + \alpha^2} $$ y la impedancia intrínseca también es, en general, compleja
 ^impedancia-intrinseca-del-medio