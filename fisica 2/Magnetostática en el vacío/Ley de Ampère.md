---
dia: 2024-09-03
tags:
  - fisica-2/Magnetostática-en-el-vacío
  - nota/facultad
aliases:
  - Ley de Ampere
  - Ley de Ampère-Maxwell#Ley de Ampère-Maxwell
  - Ley de Ampere-Maxwell#Ley de Ampère-Maxwell
  - Densidad de corriente de conducción#^corriente-conduccion
  - Corriente de conducción#^corriente-conduccion
  - Densidad de corriente de desplazamiento#^corriente-desplazamiento
  - Corriente de desplazamiento#^corriente-desplazamiento
---
# Definición
---
Si planteamos un [[Campo de inducción magnética|campo magnético]] generado por un hilo infinito, entonces llegamos a que la circulación por una [[Curva|curva]] cerrada está únicamente relacionado con nuestro movimiento en el sentido de las [[Líneas de campo#Caso campo magnético|líneas de campo]] en $\hat{\varphi}$ 

Esta expresión se denomina ley de Ampère en su forma integral, la cual es válida únicamente para [[Corriente eléctrica|corrientes]] estacionarias $$ \oint_{C} \vec{B} ~ d\vec{l} = \mu_0 ~ I_{S(C)} = \mu_0 ~ (i_m + i_r) $$ siendo $I_{S(C)}$ la corriente concatenada, es decir, la corriente que atraviesa toda la [[Superficie|superficie]] que tenga como borde la curva $C$, y $\mu_0$ la [[Permeabilidad magnética#^permeabilidad-magnetica-en-el-vacio|permeabilidad magnética en el vacío]]. Donde $i_m$ es la [[Material magnético#^campo-magnetizacion|corrientes de magnetización]] e $i_r$ es la [[Material magnético#^campo-magnetico|corrientes reales]]

Podemos extender esta ley para casos con más de una corriente, realizando la sumatoria de las corrientes concatenadas $$ I_{S(C)} = \sum_i I_{i,~S(C)} $$
La ley de Ampere no está definida para tramos de corrientes. Para este tipo de corrientes, es necesario resolverlo mediante la [[Ley de Biot y Savalt|ley de Biot y Savalt]]

Esta ley también puede ser expresada en su forma diferencial $$ \nabla \times \vec{B} = \mu_0 ~ \vec{J} $$
## Forma generalizada
---
Tomando el [[Material magnético#^campo-magnetico|campo magnético real]] se puede generalizar de la siguiente forma
$$ \begin{align} 
    \oint_C \vec{H} ~ d\vec{l} = i_{real} \tag{integral} \\
    \nabla \times \vec{H} = \vec{J}_{real} \tag{diferencial}
\end{align} $$

## Ley de Ampère-Maxwell
---
Maxwell introdujo un término adicional, que corresponde a las corrientes de desplazamiento. Esto se debe a que cuando trabajamos con corrientes que dependen del tiempo, la ley de ampere es inválida. El flujo de la corriente sobre una superficie cerrada no es nulo (como indica la ley original) $$ \begin{align} 
    \oint_C \vec{H} ~ d\vec{l} &= \iint_S \vec{J} ~ d\vec{A} + \frac{d}{dt} \iint_S \vec{D} ~ d\vec{A} \tag{integral} \\ 
    \nabla \times \vec{H} &= \vec{J} + \frac{\partial\vec{D}}{\partial t} \tag{diferencial}
\end{align} $$

Como se menciona antes, se describe la corriente de conducción $$ \vec{J}_c = \sigma \vec{E} $$ 
^corriente-conduccion

Como también, lo que aporta Maxwell, es la corriente de desplazamiento $$ \vec{J}_d = \frac{\partial \vec{D}}{\partial t} $$ ^corriente-desplazamiento