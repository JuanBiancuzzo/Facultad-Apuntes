---
dia: 2024-09-01
tags:
  - nota/facultad
  - ingeniería-en-informática/analisis-2/Funciones-de-varias-variables
  - ingeniería-en-informática/fisica-2/Magnetostática-en-el-vacío
  - ingeniería-en-informática/fisica-2/Electrostática-en-conductores-y-dieléctricos
  - ingeniería-en-informática/fisica-2/Electrostática-en-el-vacío
  - carrera/ingeniería-electrónica/analisis-2/Funciones-de-varias-variables
  - carrera/ingeniería-electrónica/fisica-2/Electrostática-en-el-vacío
  - carrera/ingeniería-electrónica/fisica-2/Electrostática-en-conductores-y-dieléctricos
  - carrera/ingeniería-electrónica/fisica-2/Magnetostática-en-el-vacío
aliases:
  - Ley de Gauss
  - Ley de Gauss para el Campo eléctrico#Para el campo eléctrico
  - Ley de Gauss para el Campo magnético#Para el campo magnético
  - Ecuación de la divergencia
  - Teorema de la divergencia
---
# Definición
---
Sí se cumple que la [[Función|función]] $f$ es 
* $f \in C^1(D)$, $D \subset \mathbb{R}^3 \to \mathbb{R}^3$
* $V \subset D$, un volumen [[Conjunto compacto|compacto]]
* $\partial V$, [[Superficie|superficie]] [[Conjunto frontera|frontera]] cerrada es suave a trozos, orientada hacia afuera

Entonces podremos aplicar el teorema de Gauss $$ {\subset\!\supset} \llap{\iint}_{\partial V} \vec{f} ~ d\vec{\sigma} = \iiint_{V}\nabla \vec{f} ~ dV $$
Este teorema permite calcular el flujo de superficies cerradas, con más facilidad. El resultado de la integral devuelve la cantidad de líquido saliente del sólido

Si la superficie no es cerrada, se puede usar el teorema cerrando la superficie, pero restándole el flujo de la superficie agregada

## Para el campo eléctrico
---
La ley de Gauss tiene dos formas, la forma integral y la forma diferencial. Ambas relacionan el [[Campo eléctrico|campo eléctrico]] con la [[Carga eléctrica|carga]] encerrada, o con la densidad de carga $$ \begin{align} 
    {\subset\!\supset} \llap{\iint}_{\partial V} \vec{D} ~ d\vec{\sigma} &= Q_{\text{enc}}^{\text{libres}} \tag{integral} \\\\
    \nabla \vec{D} &= \rho_{\text{libres}} \tag{diferencial}
\end{align} $$ donde $\vec{D}$ es el [[Campo de desplazamiento|campo desplazamiento]]

## Para el campo magnético
---
La ley de Gauss, relacionan el [[Campo de inducción magnética|campo de inducción magnética]]. Sin embargo, a diferencia de la ley de Gauss para el campo eléctrico, no podemos monopolizar los polos. Todo imán tiene ambos polos, incluso si los dividimos. Debido a esto, el flujo a través de una [[Superficie|superficie]] cerrada es nulo $$ \begin{align} 
    {\subset\!\supset} \llap{\iint}_{\partial V} \vec{B} ~ d\vec{\sigma} &= 0 \tag{integral} \\\\
    \nabla \vec{B} &= 0 \tag{diferencial}
\end{align} $$
Las [[Líneas de campo#Caso campo magnético|línea de campo]] son cerradas, todas las que salen del polo norte ingresan al polo sur