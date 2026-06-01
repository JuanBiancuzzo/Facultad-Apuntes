---
dia: 2026-06-01
etapa: empezado
referencias: []
aliases: 
  - Capacidad calorífica a volumen constante#Volumen constante
  - Capacidad calorífica a presión constante#Presión constante
  - Calor a volumen constante#^calor-volumen-constante
  - Calor a presión constante#^calor-presion-constante
tags:
  - carrera/ingeniería-electrónica/quimica/Termodinámica
  - nota/facultad
vinculoFacultad:
  - tema: Termodinámica
    capitulo: 10
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es la cantidad de calor necesaria para elevar la [[ingeniería electrónica/seguridad/Prevención de incendios/Temperatura|temperatura]] de un [[ingeniería electrónica/señales/Señales y sistemas/Sistema|sistema]] en un grado, dado por $$ C = \frac{Q}{\Delta T} $$

La [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía#Energía interna|energía interna]] de las sustancias, aumenta con la temperatura. Pero ese aumento va a depender de en que condiciones se realizó el calentamiento 

Se puede definir la capacidad calorífica molar $C_m$, que es la cantidad de calor necesaria para elevar la temperatura de un [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Número de Avogradro|mol]] de una sustancia en un grado $$ Q_V = n ~ C_m ~ (T_2 - T_1) $$

## Volumen constante
---
Si el calentamiento fue a [[Volumen|volumen]] constante, la variación de energía interna será el [[ingeniería en informática/fisica 2/Termodinámica/Calor|calor]] a volumen constante $Q_V$ ^calor-volumen-constante

![[ingeniería electrónica/quimica/Termodinámica/img/Curva de calor a volumen constante.png]]

La pendiente de la tangente a la [[ingeniería en informática/analisis 2/Topología/Curva|curva]] para una temperatura dada se llama capacidad calorífica a volumen constante $C_V$, y formalmente se define como $$ C_V = \left( \frac{\partial U}{\partial T} \right)_V $$ donde notemos que si el volumen es constante, y estamos hablando de un [[ingeniería electrónica/quimica/Estados de la materia/Gas#Gas ideal|gas ideal]], entonces no se puede aplicar trabajo o que el gas realice trabajo, por lo tanto $\Delta U = Q = Q_V$ y por lo tanto podemos decir $$ \Delta U = \int_{T_1}^{T_2} C_V ~ dT $$
Las capacidades caloríficas de las sustancias dependen de la temperatura y disminuyen al bajar la temperatura. Sin embargo, en pequeños intervalos de temperatura o cercanos a temperatura ambiente, la variación es muy pequeña y para cálculos aproximados podemos tomar la capacidad calorífica independientes de la temperatura $$ \Delta U = C_v ~ (T_2 - T_1) $$

## Presión constante
---
A [[Presión|presión]] constante, la pendiente de la tangente a la curva de [[ingeniería electrónica/quimica/Soluciones y solubilidad/Entalpía|entalpía]] para una temperatura dada se llama capacidad calorífica a presión constante $C_p$ y formalmente se define como $$ C_p = \left( \frac{\partial H}{\partial T} \right)_P $$
![[ingeniería electrónica/quimica/Termodinámica/img/Curva de calor a presión constante.png]]

Se puede demostrar que a presión constante, la entalpía es igual al calor liberado o absorbido $\Delta H = Q_p$, por lo tanto $$ \Delta H = \int_{T_1}^{T_2} C_P ~ dT $$ ^calor-presion-constante

> [!demostracion]- Demostración
> Para un cambio infinitesimal general en el [[ingeniería electrónica/legal/Introducción al derecho/Estado|estado]] del [[ingeniería electrónica/señales/Señales y sistemas/Sistema|sistema]], la [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía#Energía interna|energía interna]] $U$ cambia $U + dU$, la [[Presión|presión]] $P$ cambia $P + dP$, y el [[Volumen|volumen]] $V$ cambia $V + dV$, entonces a partir de la definición de [[ingeniería electrónica/quimica/Soluciones y solubilidad/Entalpía|entalpía]] $$ \begin{align} 
> 	H + dH &= (U + dU) + (P + dP) (V + dV) \\
> 	 &= U + dU + P ~ V + P ~ dV + V ~ dP + \underbrace{dP ~ dV}_{\simeq 0} \\
> 	H + dH &= \underbrace{U + PV}_{H} + dU + P ~ dV + V ~ dP \\
> 	dH &= dU + P ~ dV + V ~ dP \\
> \end{align} $$
> Notemos lo siguiente
> 1. Por la expresión de energía interna $dU = \delta Q + \delta W$
> 2. Como la presión es constante $dP = 0$ y finalmente que a presión constante
> 3. El único trabajo que puede hacer es modificar su volumen, dado por $\delta W = -P ~ dV$ tomando como convención la vista desde el sistema
> 
> Por lo tanto, podemos reescribir la expresión de la siguiente forma $$ \begin{align} 
> 	dH &= dU + P ~ dV + V ~ dP \\
> 	 &= \delta Q + (-P ~ dV) + P ~ dV \\
> 	dH &= \delta Q  
> \end{align} $$
> 
> Pudimos demostrar que la variación de entalpía es el calor a presión constante

Para un gas ideal, su energía interna, era solo debido a la energía cinética y esta es solo función de la temperatura, por lo tanto $$ \begin{align}
	\displaystyle E_c &= n \frac{3}{2} RT = U, & C_V &= n \frac{3}{2} R, ~~~ \text{Para un gas monoatómico} \\ 
	\displaystyle E_c &= n \frac{5}{2} RT = U, & C_V &= n \frac{5}{2} R, ~~~ \text{Para un gas diatómico} \\ 
\end{align} $$
Por lo tanto, se puede calcular la variación de energía interna como $$ \Delta U = Q_V = C_V ~ (T_2 - T_1) $$
## Relación entre ambas
---
Para un gas ideal, se puede utilizar la [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Ley de Gases Ideales|ley de gases ideales]], y expresar lo siguiente $$ \begin{align}
	H &= U + PV \\
	 &= U + nRT \\ 
	dH &= dU + nR ~ dT \\
\end{align} $$ tomando las conclusiones llegadas anteriormente, se tiene que $$ \begin{cases} 
	dH = n C_{pm} ~ dT \\
	dU = n C_V ~ dT
\end{cases} $$ por lo tanto se llega a la relación $$ \begin{align} 
	dH &= dU + nR ~ dT \\
	n C_{pm} ~ dT &= n C_V ~ dT + nR ~ dT \\
	C_{pm} &= C_V + R
\end{align} $$