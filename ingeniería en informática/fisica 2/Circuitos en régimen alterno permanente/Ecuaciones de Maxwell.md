---
dia: 2024-09-03
tags:
  - carrera/ingeniería-electrónica/electro/Campo-electromagnético
  - carrera/ingeniería-electrónica/fisica-2/Circuitos-en-régimen-alterno-permanente
  - carrera/ingeniería-en-informática/fisica-2/Circuitos-en-régimen-alterno-permanente
  - nota/facultad
---
# Definición
---
Maxwell cambió algunas fórmulas que vimos en la materia, para que sean más precisas. Y abarquen el caso dinámico. Considero que las [[Teorema de Gauss|leyes de Gauss]] ya eran válidas en el caso dinámico ![[Teorema de Gauss#Para el campo eléctrico]] ![[Teorema de Gauss#Para el campo magnético]]
Ampliando la [[Ley de Ampère|ley de ampère]] en la ley de Ampère-Maxwll ![[Ley de Ampère#Ley de Ampère-Maxwell]]
Maxwell también reinterpretó la [[Ley de Faraday|ley de Faraday]], en la ley de Faraday-Maxwell ![[Ley de Faraday#Ley de Maxwell-Faraday]]
## Resumen de ecuaciones
---
$$ \begin{align} 
    \nabla \times \vec{E} &= -\frac{\partial \vec{B}}{\partial t} \\
    \nabla \times \vec{H} &= \vec{J} + \frac{\partial \vec{E}}{\partial t} \\
    \nabla ~ \vec{D} &= \rho \\
    \nabla ~ \vec{B} &= 0
\end{align} $$ 
^ecuaciones

## Representación fasorial
---
Se puede representar de forma [[Fasor|fasorial]] de la siguiente forma 

$$ \begin{align} 
    \nabla \times \vec{E} &= -j \omega \mu_0 \vec{B} \\
    \nabla \times \vec{H} &= j \omega \epsilon_0 \vec{E} \\
    \nabla ~ \vec{D} &= 0 \\
    \nabla ~ \vec{B} &= 0
\end{align} $$ 
^ecuaciones-fasoriales