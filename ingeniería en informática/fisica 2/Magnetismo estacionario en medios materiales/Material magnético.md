---
dia: 2023-08-24
tags:
  - ingeniería-en-informática/fisica-2/Magnetismo-estacionario-en-medios-materiales
  - nota/facultad
  - carrera/ingeniería-electrónica/electro/Campos-eléctricos-y-magnéticos
  - carrera/ingeniería-electrónica/fisica-2/Magnetismo-estacionario-en-medios-materiales
aliases:
  - Campo de magnetización#^campo-magnetizacion
  - Campo magnético#^campo-magnetico
---
# Definición
---
Una [[Partícula|partícula]] cargada orbita alrededor de su núcleo. Esto se puede pensar como [[Corriente eléctrica|corriente]] a través de una espira circular, por lo que tiene un [[Momento angular|momento angular]]. Este momento angular se alineará con el [[Campo de inducción magnética|campo de inducción magnético]] en ese punto del espacio, por acción de un [[Torque|torque]]

Si el campo magnético es débil, entonces la magnetización será parcial. Si el campo magnético es intenso, la magnetización será completa

Vamos a introducir un nuevo campo vectorial, el campo magnetización, denominado $\vec{M}$. Nos va a indicar la cantidad de momentos angulares por unidad de volumen, tenemos $$  \begin{align} 
    \oint_{C} \vec{M} ~ d\vec{l} = i_m \tag{integral} \\ 
    \nabla \times \vec{M} = \vec{J}_m \tag{diferencial} \\
\end{align} $$ ^campo-magnetizacion

Estas corrientes de magnetización van a estar asociadas a las corrientes de los [[Electrón|electrones]] que orbitan al alrededor del núcleo de los [[Átomo|átomos]]

Las corrientes concatenadas de la [[Ley de Ampère|ley de Ampère]] deben tener en cuenta ambas corriente, tanto las corrientes de magnetización $i_m$ como las corrientes reales $i_r$ 

Llamaremos $\vec{H}$ al campo magnético relacionada con las corrientes reales $$ \begin{align} 
    \oint_C \vec{H} ~ d\vec{l} = i_{real} \tag{integral} \\
    \nabla \times \vec{H} = \vec{J}_{real} \tag{diferencial}
\end{align} $$ ^campo-magnetico

Donde $\vec{B}$ el campo de inducción magnética, relacionada con ambas corrientes $$ \oint_C \vec{B} ~ d\vec{l} = \mu_0 ~ (i_m + i_r) $$
A partir de estas definiciones, podemos llegar a la [[Relación constitutiva#Para campo magnético|relación constitutiva]]