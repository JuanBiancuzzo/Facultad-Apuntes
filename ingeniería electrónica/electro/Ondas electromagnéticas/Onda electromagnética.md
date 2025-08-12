---
dia: 2024-09-19
tags:
  - carrera/ingeniería-electrónica/electro/Ondas-electromagnéticas-en-el-vacío
  - nota/facultad
vinculoFacultad:
  - tema: Ondas electromagnéticas
    capitulo: 3
    materia: Electromagnetismo aplicado
    carrera: Ingeniería electrónica
---
# Definición
---
Partiendo de las [[Ecuaciones de Maxwell|ecuaciones de Maxwell]] ![[Ecuaciones de Maxwell#^ecuaciones]] que representan al [[Campo electromagnético|campo electromagnético]] en su mayor generalidad

Las soluciones más sencillas de las ecuaciones de Maxwell se producen para un recinto del espacio vacío y sin fuentes de campo 
* Si el recito es vacío, las [[Relación constitutiva|relaciones constitutivas de ambos campos]] se simplifican a $$ \begin{cases} \vec{D}(\vec{r},~t) = \epsilon_0 ~ \vec{E}(\vec{r},~t) \\ \vec{B}(\vec{r},~t) = \mu_0 ~ \vec{H}(\vec{r},~t) \end{cases} $$
* Si no hay fuentes de campo en su interior $$ \begin{cases} \rho(r,~t) = 0 \\ \vec{J}(r,~t) = 0 \end{cases} $$
Para que exista campo electromagnético debe haber fuentes que los generen. En el presente caso consideramos que las fuentes del campo se hallan afuera del recinto de integración

Con estas [[Hipótesis|hipótesis]]  permiten pasar de las $4$ ecuaciones de Maxwell, con $4$ campos incógnitas y  ecuaciones inhomogéneas, a $2$ campos incógnitas y ecuaciones homogéneas $$ \begin{align} 
    \nabla ~ \vec{E}(\vec{r},~t) &= 0 &&& \nabla \times \vec{E}(\vec{r},~t) + \mu_0 \frac{\partial}{\partial t} \vec{H}(\vec{r},~t) &= 0 \\
    \nabla ~ \vec{H}(\vec{r},~t) &= 0 &&& \nabla \times \vec{H}(\vec{r},~t) - \epsilon_0 \frac{\partial}{\partial t} \vec{E}(\vec{r},~t) &= 0
\end{align} $$
Podemos desacoplar tomando el rotor de la [[Ley de Faraday#Ley de Maxwell-Faraday|ecuación de Maxwell-Faraday]] y usando la [[Ley de Ampère#Ley de Ampère-Maxwell|ecuación de Ampère-Maxwell]] $$ \begin{align} 
    \nabla \times \left( \nabla \times \vec{E} + \mu_0 \frac{\partial \vec{H}}{\partial t} \right) &= \nabla \times \nabla \times \vec{E} + \mu_0 \frac{\partial}{\partial t} \nabla \times \vec{H} \\
     &= \nabla \times \nabla \times \vec{E} + \mu_0 \frac{\partial}{\partial t} \left( \frac{\partial \vec{E}}{\partial t} \right) \\
     &= \nabla \times \nabla \times \vec{E} + \mu_0 \epsilon_0 ~ \frac{\partial^2 \vec{E}}{\partial t ^2} = 0 \\
\end{align} $$
Usando la identidad $\nabla \times \nabla \times \vec{E} = \nabla ~ (\nabla ~ \vec{E}) - \nabla^2 \vec{E} = -\nabla^2 \vec{E}$, esta última es usando que $\nabla ~ \vec{E} = 0$

Entonces $$ \nabla^2 \vec{E} - \frac{1}{c^2} \frac{\partial^2}{\partial t^2}\vec{E} = 0, ~~~~~ \text{con} ~ c = \frac{1}{\sqrt{\mu_0 \epsilon_0}} $$
Si tomamos ahora el rotor de la ecuación de Ampère-Maxwell y procedemos en forma similar, llegamos a la misma ecuación para el campo magnético $$ \nabla^2 \vec{H} - \frac{1}{c^2} \frac{\partial^2}{\partial t^2}\vec{H} = 0 $$
Por lo tanto hemos podido desacoplar las ecuaciones en cada uno de los campos incógnita, pero hemos tenido que pasar de ecuaciones de primer orden a ecuaciones de segundo orden

Las ecuaciones halladas se conocen como [[Ecuación de onda|ecuaciones vectoriales de D'Alembert]]. Esta es una ecuación que describe una propagación ondulatoria, de donde se deduce que las soluciones a las ecuaciones de Maxwell en un recinto vacío sin fuentes de campo son ondas electromagnéticas

## En forma fasorial
---
Vamos a analizar la forma que adoptan las ecuaciones de la onda electromagnética en el caso de [[Onda monocromática|campos monocromáticos]] $$ \begin{matrix} 
    \vec{E}(\vec{r},~t) = \tilde{E}(\vec{r}) ~ e^{i \omega t} &
    \vec{D}(\vec{r},~t) = \tilde{D}(\vec{r}) ~ e^{i \omega t} & 
    \vec{H}(\vec{r},~t) = \tilde{H}(\vec{r}) ~ e^{i \omega t} & 
    \vec{B}(\vec{r},~t) = \tilde{B}(\vec{r}) ~ e^{i \omega t} 
\end{matrix} $$
En un recinto vacío y libre de [[Carga eléctrica|fuentes]] las ecuaciones de Maxwell son $$ \begin{align} 
    \nabla ~ \tilde{E}(\vec{r}) &= 0 &&& \nabla \times \tilde{E}(\vec{r}) + i \omega \mu_0 ~ \tilde{H}(\vec{r}) &= 0 \\
    \nabla ~ \tilde{H}(\vec{r}) &= 0 &&& \nabla \times \tilde{H}(\vec{r}) - i \omega \epsilon_0 ~ \tilde{E}(\vec{r}) &= 0
\end{align} $$
La ecuación de ondas de D'Alembert de forma fasorial pasan a ser ![[Ecuación de onda#^ecuacion-fasorial]]
Por lo que para el [[Campo eléctrico|campo eléctrico]] pasan a ser $$ \nabla^2 \tilde{E} + k^2 \tilde{E} = 0 $$ que es una [[Ecuación de Helmholtz|ecuación de Helmholtz]]. Se obtiene una ecuación idéntica para $\tilde{H}$