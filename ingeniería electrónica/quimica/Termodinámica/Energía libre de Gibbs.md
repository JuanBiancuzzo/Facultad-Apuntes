---
dia: 2026-06-04
etapa: empezado
referencias: []
aliases: []
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
La energía libre de Gibbs, denotada como $G$, es una [[ingeniería electrónica/quimica/Termodinámica/Función de estado|función de estado]], y es una función [[ingeniería electrónica/quimica/Termodinámica/Termodinámica|termodinámica]] que para el [[ingeniería electrónica/señales/Señales y sistemas/Sistema|sistema]] esta dado por $$ G = H - T ~ S $$donde $H$ es la [[ingeniería electrónica/quimica/Soluciones y solubilidad/Entalpía|entalpía]], $T$ es la [[ingeniería electrónica/seguridad/Prevención de incendios/Temperatura|temperatura]] y $S$ es la [[ingeniería en informática/orga/Compresión/Entropía|entropía]], las $3$ siendo del sistema

Se puede demostrar, que a [[Presión|presión]] y temperatura constantes $$ \Delta G = \Delta H - T ~ \Delta S_\text{sist} = -T ~ \Delta S_\text{univ} $$
> [!demostracion]- Demostración
> Planteando la expresión en variaciones $$ \begin{align} 
> 	G &= H - T ~ S \\
> 	\Delta G &= \Delta H - T ~ dS - S ~ dT \\
> \end{align} $$ tomando [[ingeniería electrónica/seguridad/Prevención de incendios/Temperatura|temperatura]] constante $$ \Delta G = \Delta H - T ~ dS $$ y también con presión constante, se puede ver que la [[ingeniería en informática/orga/Compresión/Entropía#Calculo para el entorno|entropía del sistema]] se puede expresar como $$ \Delta S_\text{univ} = \Delta S_\text{sist} - \frac{\Delta H}{T} $$ por lo tanto se puede reescribir la expresión de la variación de la energía de Gibbs como $$ \begin{align} 
> 	\Delta G &= \Delta H - T ~ \Delta S \\
> 	 &= T ~ ( \Delta S - \Delta S_\text{univ}) - T ~ \Delta S \\
> 	\Delta G &= -T ~ \Delta S_\text{univ}
> \end{align} $$
