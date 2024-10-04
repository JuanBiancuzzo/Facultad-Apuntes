---
dia: 2024-09-13
tags:
  - electro/Ondas-electromagnéticas-en-el-vacío
  - nota/facultad
aliases:
  - Ecuación de ondas reducidas de Helmholtz en un conductor
  - Ecuación de Helmholtz en un conductor
---
# Definición
---
Para resolver el caso del [[Campo eléctrico|campo eléctrico]] y [[Campo de inducción magnética|campo magnético]] en un medio [[Conductor|conductor]] en ausencia de fuentes

Consideremos un recinto del espacio donde existe un medio material de propiedades definidas por sus parámetros $\epsilon$ ([[Permitividad eléctrica|permitividad eléctrica]]), $\sigma$ ([[Conductividad eléctrica|conductividad eléctrico]]) y $\mu$ ([[Permeabilidad magnética|permeabilidad magnética]]), en un medio conductor se toma $$ \epsilon = \epsilon_0, ~~~~ \mu = \mu_0, ~~~~ \sigma \in \mathbb{R} $$
Entonces $$ \gamma = \beta - i\alpha = \sqrt{ \omega^2 \mu \epsilon - i \omega \mu \sigma } = \sqrt{ \omega^2 \mu_0 \epsilon_0 - i \omega \mu_0 \sigma } $$ 
Para un [[Profundidad de penetración#Buen conductor|buen conductor]] el número de onda es $$ \begin{align} 
    \gamma &= \sqrt{ \omega^2 \mu_0 \epsilon_0 - i \omega \mu_0 \sigma } \\
    &= \frac{\omega}{c} \sqrt{1 - i \frac{\sigma}{\omega \epsilon_0}} \\
    &\approx \frac{\omega}{c} \sqrt{-i \frac{\sigma}{\omega \epsilon_0}} \\
    &= \frac{\omega}{c} \sqrt{\frac{\sigma}{\omega \epsilon_0} ~ e^{\frac{-i\pi}{2}} } \\
    &= \sqrt{\omega \mu_0 \sigma } ~ e^{\frac{-i\pi}{4}}
\end{align} $$ recordando que $\gamma = \beta - i \alpha$ podemos encontrar ambos de la siguiente forma $$ \begin{align} 
    \gamma = \beta - i\alpha &\approx \sqrt{\omega \mu_0 \sigma } ~ e^{\frac{-i\pi}{4}} \\
     &= \sqrt{\frac{\omega \mu_0 \sigma}{2}} (1 - i) \\
     &= \frac{1 - i}{\delta}, && \delta = \sqrt{\frac{2}{\omega \mu_0 \sigma}} 
\end{align} $$
Se ve que $\displaystyle \alpha = \beta = \frac{1}{\delta}$

La [[Onda electromagnética en medios materiales#^velocidad-fase|velocidad de propagación]] y la [[Onda monocromática#^numero-onda|longitud de onda]] dentro del conductor son $$ \begin{matrix} 
    \displaystyle v_f = \frac{\omega}{\beta} = \omega \delta = \sqrt\frac{2\omega}{\mu_0 \sigma} &&& \lambda = \frac{2\pi}{\beta} = 2\pi\delta = 2\pi\sqrt\frac{2}{\omega \mu_0 \sigma}
\end{matrix} $$
La [[Impedancia intrínseca|impedancia intrínseca]] es $$ \begin{align} 
    \eta &= \frac{\omega \mu_0}{\gamma} \\
     &= \frac{\omega \mu_0 \delta}{1 - i} \\
     &= \frac{1 + i}{2} \omega \mu_0 ~ \sqrt\frac{2}{\omega \mu_0 \sigma} \\
     &= (1 + i) ~ \sqrt\frac{\omega \mu_0}{2\sigma} \\
     &= \frac{1 + i}{\sigma \delta}
\end{align} $$
Las partes real e imaginaria de la impedancia intrínseca son iguales, de modo que el ángulo de fase es $\frac{\pi}{4} = \varphi$. Un gran valor del ángulo de fase indica altas pérdidas. Se ve además que $|\eta| \ll \eta_0$ 

El [[Teorema de Poynting#Valor medio|vector medio de Poynting]] es $$ \begin{align}
    \langle \vec{N} \rangle &= \pm \frac{\mathcal{Re}\Set{\eta} |\tilde{E}_{0\pm}|^2 e^{\mp 2 \alpha z}}{2|\eta|^2} ~ \hat{z} \\
     &= \pm \frac{\cos(\varphi) |\tilde{E}_{0\pm}|^2 e^{\mp 2 \alpha z}}{2|\eta|} ~ \hat{z} \\
     &= \pm \frac{\sqrt{2}}{2} ~ \frac{\sigma ~ \delta}{2\sqrt{2}} ~ |\tilde{E}_{0\pm}|^2 e^{\mp 2 \alpha z} ~ \hat{z} \\
     &= \pm \frac{\sigma ~ \delta}{4} ~ |\tilde{E}_{0\pm}|^2 e^{\mp 2 \alpha z} ~ \hat{z} \\
\end{align} $$
La [[Teorema de Poynting#En medios materiales|potencia perdida]] por unidad de volumen es $$ \begin{align} 
    \frac{d\langle P \rangle}{dV} &= 2\alpha \langle N \rangle \\
     &= \frac{2}{\delta} \langle N \rangle \\ 
     &= \frac{\sigma}{2} ~ \left| \tilde{E}_{0\pm} \right|^2 e^\frac{\mp 2 z}{\delta} \\
     &= \frac{1}{2} ~ \left| \tilde{J}_{0\pm} \right| ~ e^\frac{\mp z}{\delta} ~~ \left| \tilde{E}_{0\pm} \right| ~ e^\frac{\mp z}{\delta} \\
     &= \frac{1}{2} \left| \vec{J} \cdot \vec{E} \right|
\end{align} $$ que coincide con la expresión de las [[Efecto Joule|pérdidas medias por efecto Joule]]

La [[Densidad de energía de una onda electromagnética#Valor medio|densidad media de energía almacenada]] en el campo $$ \begin{align} 
    \langle u \rangle &= \frac{1}{4} \left( \mathcal{Re}\set{\epsilon} + \frac{\mu}{|\eta|^2} \right) ~ \left| \tilde{E}_{0\pm} \right|^2 ~ e^{\mp 2\alpha z} \\
     &= \frac{1}{4} \left( \epsilon_0 + \frac{\mu_0 \sigma^2 \delta^2}{2} \right) ~ \left| \tilde{E}_{0\pm} \right|^2 ~ e^{\mp 2\alpha z} \\
     &= \frac{\epsilon_0}{4} \left( 1 + \frac{\sigma}{\omega \epsilon_0} \right) ~ \left| \tilde{E}_{0\pm} \right|^2 ~ e^{\mp 2\alpha z} \\
\end{align} $$
Como $\sigma \gg \omega \epsilon_0$, el segundo término, vinculado con la [[Energía magnética|energía magnética]], es mucho mayor que el primero, vinculado con la [[Energía eléctrica|energía eléctrica]] $$ \langle u \rangle \approx \frac{\sigma}{4\omega} ~ \left| \tilde{E}_{0\pm} \right|^2 ~ e^{\mp 2\alpha z} $$
La [[Densidad de energía de una onda electromagnética#^velocidad-energia|velocidad de la energía]] es $$ \begin{align} 
    v_E &= \pm \frac{2 |\eta| ~ \cos(\varphi)}{\mathcal{Re}\Set{\epsilon_0} |\eta|^2 + \mu_0} ~ \hat{z} \\
     &= \frac{2 \sigma \delta}{2\epsilon_0 + \sigma^2 \delta^2 \mu_0} ~ \hat{z} \\
     &= \pm \frac{\sigma \delta}{\epsilon_0 + \frac{\sigma}{\omega}} ~ \hat{z} \\
     &\approx \pm \omega \delta ~ \hat{z}
\end{align} $$