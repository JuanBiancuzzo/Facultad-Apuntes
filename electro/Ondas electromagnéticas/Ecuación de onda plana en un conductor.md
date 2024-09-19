---
dia: 2024-09-13
tags:
  - electro/Ondas-electromagnéticas-en-el-vacío
  - nota/facultad
aliases:
  - Ecuación de ondas reducidas de Helmholtz en un conductor
  - Ecuación de Helmholtz en un conductor
  - Impedancia del medio#^impedancia-del-medio
---
# Definición
---
Partiendo de las [[Ecuaciones de Maxwell|ecuaciones de Maxwell]] ![[Ecuaciones de Maxwell#^ecuaciones]]
Para una zona en un [[Conductor|conductor]], la [[Permeabilidad magnética|permeabilidad magnética]] puede ser distinta a la del [[Permeabilidad magnética#^permeabilidad-magnetica-en-el-vacio|vacío]] $\mu_0$, los campos con variación armónica, donde la [[Ley de Ampère#^corriente-conduccion|corriente de conducción]] es mucho mayor que la [[Ley de Ampère#^corriente-desplazamiento|corriente de desplazamiento]], se puede despreciar la corriente de desplazamiento frente a la corriente de conducción $$ \begin{align} 
    \nabla \times \vec{E} &= -j \omega \mu \vec{H} \\
    \nabla \times \vec{H} &\cong \vec{J} \\
    \nabla ~ \vec{D} &= 0 \\
    \nabla ~ \vec{B} &= 0
\end{align} $$
Aplicando el [[Rotor|rotor]] a la primer ecuación $$ \nabla \times \nabla \times \vec{E} = -j \omega \mu \nabla \times \vec{H} $$ recordando que $$ \begin{matrix} 
    \nabla \times \nabla \times \vec{E} = \nabla ~ (\nabla \vec{E}) - \nabla^2 \vec{E} = -\nabla^2 \vec{E} \\
    \nabla \times \vec{H} \cong \vec{J}
\end{matrix} $$ se puede reescribir como $$ -\nabla^2 \vec{E} = -j \omega \mu \vec{J} = -j\omega \mu \sigma \vec{E} $$ que se puede reescribir como $$ \nabla^2 \vec{E} - j\omega \mu \sigma \vec{E} = 0 $$ haciendo $$ \gamma^2 = j\omega \mu \sigma $$

Se llama a la ecuación de onda reducida o ecuación de Helmholtz $$ \begin{align} 
    \nabla^2 \vec{E} - \gamma^2 \vec{E} &= 0 \\ 
    \nabla^2 \vec{H} - \gamma^2 \vec{H} &= 0 
\end{align} $$
Despejando la constante de propagación se obtiene $$ \gamma = \sqrt{j\omega\mu\sigma} = \sqrt{\omega \mu \sigma} \sqrt{j} = \sqrt{\frac{\omega \mu \sigma}{2}} ~ (1 + j) $$ donde a diferencia de la [[Ecuación de onda plana en un dieléctrico perfecto|constante de propagación en el vacío]], esta tiene parte real como imaginaria

Considerando que el campo eléctrico tiene solo la componente $E_x$, se obtiene una [[Ecuación diferencial ordinaria|ecuación diferencial ordinaria]] cuya solución es $$ E_x(z) = E^+(z) + E^-(z) $$ donde el primer término representa una onda que se propaga en $z > 0$ y el segundo término representa una onda que se propaga en $z < 0$, la cual $$ \begin{align} 
    E_x(z) &= E_0^+ ~ e^{-j\gamma z} + E_x^- ~ e^{j\gamma z} \\
     &= E_0^+ ~ e^{-\alpha z} ~ e^{-j\beta z} + E_0^- ~ e^{\alpha z} ~ e^{j\beta z}
\end{align} $$
Introduciendo la variación temporal armónica $$ E_x(z) = E_0^+ ~ e^{-\alpha z} ~ e^{j(\omega t - \beta z)} + E_0^- ~ e^{\alpha z} ~ e^{j(\omega t + \beta z)} $$
Al calcular el campo magnético usando la expresión de la [[Ley de Faraday#Ley de Maxwell-Faraday|ley de Maxwell-Faraday]] en su representación [[Fasor|fasorial]] $$ \nabla \times \vec{E} = -j\omega \mu \vec{H} $$ despejando $$ \vec{H} = \frac{j}{\omega \mu_0} \left( \nabla \times \vec{E} \right) = \frac{j}{\omega \mu_0} \begin{vmatrix} 
    \hat{x} & \hat{y} & \hat{z} \\
    \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
    E_x & 0 & 0
\end{vmatrix} = \frac{j}{\omega \mu_0} \frac{d}{dz} E_x ~ \hat{y} $$ donde resulta $$ \vec{H} = j ~ \frac{\gamma}{\omega \mu} \bigg( E_0^- ~ e^{\alpha z} ~ e^{j\beta z} - ~ E_0^+ ~ e^{-\alpha z} ~ e^{-j\beta z} \bigg) ~ \hat{y} $$
Considerando solo la onda que se propaga en la dirección de $z > 0$ la impedancia del medio es $$ Z_m = \frac{E^+}{H^+} = \frac{j\omega\mu}{\gamma} = \frac{j\omega\mu}{\sqrt{j\omega\mu\sigma}} = \frac{\omega\mu}{\sqrt{2\sigma}} (1 + j) $$ 
^impedancia-del-medio