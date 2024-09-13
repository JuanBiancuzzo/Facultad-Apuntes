---
dia: 2024-09-13
tags: 
 - electro/Ondas-electromagnéticas-en-el-vacío
 - nota/facultad
---
### Definición
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
\end{matrix} $$ se puede reescribir como $$ -\nabla^2 \vec{E} = -j \omega \mu \vec{J} = -j\omega \mu \sigma \vec{E} $$
