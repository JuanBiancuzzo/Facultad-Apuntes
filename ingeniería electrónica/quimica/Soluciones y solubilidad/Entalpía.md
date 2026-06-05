---
dia: 2026-05-17
etapa: empezado
referencias:
  - "1154"
aliases: 
  - Entalpía de reacción#Entalpía de una reacción
  - Entalpía estándar de reacción#^entalpia-estandar-reaccion
  - Entalpía molar estándar#^entalpia-molar-estandar
  - Entalpía estándar de formación#^entalpia-estandar-formacion
tags:
  - carrera/ingeniería-electrónica/quimica/Soluciones-y-solubilidad
  - carrera/ingeniería-electrónica/quimica/Termodinámica
  - carrera/ingeniería-electrónica/quimica/Termoquímica
  - nota/facultad
vinculoFacultad:
  - tema: Soluciones y solubilidad
    capitulo: 8
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
  - tema: Termodinámica
    capitulo: 10
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
  - tema: Termoquímica
    capitulo: 11
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La entalpía es una magnitud [[Termodinámica|termodinámica]], simbolizada con la letra $H$, definida como "el flujo de [[Energía térmica|energía térmica]] en los procesos químicos efectuados a [[Presión|presión]] constante cuando el único [[ingeniería en informática/fisica 2/Electrostática en el vacío/Trabajo|trabajo]] es de presión-[[Volumen|volumen]]", es decir, la cantidad de energía que un [[ingeniería electrónica/señales/Señales y sistemas/Sistema|sistema]] intercambia con su entorno

En el caso que el calor sea suministrado a presión constante, este será igual a la entalpía dada por $$ H = U + PV $$ y esta es una [[ingeniería electrónica/quimica/Termodinámica/Función de estado|función de estado]]

Se puede demostrar que la variación de entalpía, a presión constante, es igual al calor liberado o absorbido $\Delta H = Q_p$ por el sistema, si este sistema es un [[ingeniería electrónica/quimica/Estados de la materia/Gas#Gas ideal|gas ideal]]

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
> Es importante aclarar que este último aplica únicamente para cuando es un [[ingeniería electrónica/quimica/Estados de la materia/Gas#Gas ideal|gas ideal]]
> 
> Por lo tanto, podemos reescribir la expresión de la siguiente forma $$ \begin{align} 
> 	dH &= dU + P ~ dV + V ~ dP \\
> 	 &= \delta Q + (-P ~ dV) + P ~ dV \\
> 	dH &= \delta Q  
> \end{align} $$
> 
> Pudimos demostrar que la variación de entalpía es el calor a presión constante

## Entalpía de una reacción
---
La entalpía de reacción es la cantidad de [[ingeniería en informática/fisica 2/Termodinámica/Calor|calor]] liberado o absorbido en una [[ingeniería electrónica/quimica/Reacciones químicas/Reacción química|reacción química]] cuando los [[ingeniería electrónica/quimica/Reacciones químicas/Reacción química#^reactivo|reactivos]] a una determinada [[ingeniería electrónica/seguridad/Prevención de incendios/Temperatura|temperatura]] y presión se convierten en [[ingeniería electrónica/quimica/Reacciones químicas/Reacción química#^producto|productos]] a la misma temperatura y presión $$ \underbrace{a ~ \text{A} + b ~ \text{B} + \cdots}_{\substack{\text{Reactivos}\\\text{Estado inicial}}} \longrightarrow \underbrace{d ~ \text{D} + e ~ \text{E} + \cdots}_{\substack{\text{Productos}\\\text{Estado final}}} $$ dado que $\Delta H = H_\text{final} - H_\text{inicial}$, se define la entalpía de reacción como $$ \Delta H = H_\text{productos} - H_\text{reactivos} $$
Esta es la entalpía únicamente involucrada en la ruptura de [[ingeniería electrónica/quimica/Enlaces químicos/Unión química|enlaces químicos]] y en la formación de nuevos enlaces

Se lo denota $\Delta H_r^0$ a la entalpía estándar de reacción, que es la entalpía de reacción cuando los reactivos a $1$ [[Bar|bar]] y a una determinada temperatura, se transforman en productos a $1$ bar y la misma temperatura ^entalpia-estandar-reaccion

Donde se puede calcular la entalpía estándar de reacción, a partir de la entalpía molar estándar, denotada $H_m^0(J)$ donde $J$ es una especie, de la siguiente forma $$ \Delta H_r^0 = \left( d ~ H_m^0(D) + e ~ H_m^0(E) + \cdots \right) - \left( a ~ H_m^0(A) + b ~ H_m^0(B) + \cdots \right) $$ ^entalpia-molar-estandar

Como no se puede medir la entalpía molar estándar, nos aprovechamos que la entalpía es una función de estado y planteamos todo desde una referencia medible, como es la entalpía estándar de formación

La entalpía estándar de formación, denotada $\Delta H_f^0$, de un compuesto es la entalpía estándar de la reacción para la formación de un [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Número de Avogradro|mol]] de dicho compuesto, a partir de sus elementos en su forma más estables en el estado estándar ($1$ bar) a una determinada temperatura ^entalpia-estandar-formacion

Donde la entalpía de formación estándar de un elemento, en su forma más estable, es $0$. Que es un dato muy útil, ya que podemos calcular la la entalpía estándar de reacción como $$ \Delta H_r^0 = \left( d ~ H_f^0(D) + e ~ H_f^0(E) + \cdots \right) - \left( a ~ H_f^0(A) + b ~ H_f^0(B) + \cdots \right) $$

## Entalpía de combustión
---
La entalpía estándar de combustión, denotada $\Delta H_c^0$, es la entalpía estándar de reacción para la [[ingeniería electrónica/quimica/Reacciones químicas/Combustión|combustión]] de un [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Número de Avogradro|mol]] de sustancia que se quema (reaccionando con el [[Oxígeno|oxígeno]]) en una [[ingeniería electrónica/quimica/Reacciones químicas/Combustión|reacción de combustión completa]] en condiciones estándar ($1$ bar)

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```