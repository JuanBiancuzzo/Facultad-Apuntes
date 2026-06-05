---
dia: 2026-06-05
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/quimica/Termoquímica
  - nota/facultad
vinculoFacultad:
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
La termoquímica es la rama de la [[ingeniería electrónica/quimica/Termodinámica/Termodinámica|termodinámica]] que estudia la [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía|energía]] puesta en juego en un [[ingeniería electrónica/quimica/Reacciones químicas/Reacción química|cambio químico o reacción química]]. Por lo que el [[ingeniería electrónica/señales/Señales y sistemas/Sistema|sistema]] termodinámico va a ser la reacción, y va a intercambiar energía con el entorno cuando pase de [[ingeniería electrónica/quimica/Reacciones químicas/Reacción química#^reactivo|reactivos]] a [[ingeniería electrónica/quimica/Reacciones químicas/Reacción química#^producto|productos]]

Al igual que las reacciones químicas en general, existen las ecuaciones termoquímicas, donde agregan la [[ingeniería electrónica/quimica/Soluciones y solubilidad/Entalpía#Entalpía de una reacción|entalpía de reacción]] dado una ecuación como $$ 2 \text{H}_2 ~ \text{(g)} + \text{O}_2 ~ \text{(g)} \longrightarrow 2 \text{H}_2 \text{O} ~ \text{(g)}, ~~~~ \Delta H = -484 ~ \text{kJ} $$ o alternativamente expresar la entalpía de reacción por [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Número de Avogradro|mol]], denotada $\Delta Hr$ de la siguiente forma $$ 2 \text{H}_2 ~ \text{(g)} + \text{O}_2 ~ \text{(g)} \longrightarrow 2 \text{H}_2 \text{O} ~ \text{(g)}, ~~~~ \Delta H_r = -484 ~ \frac{\text{kJ}}{\text{mol}} $$ de esta forma se puede remarcar que depende de la cantidad de moles que se anotaron en los [[ingeniería electrónica/quimica/Reacciones químicas/Reacción química#^coeficientes|coeficientes estequiométricos]]

En el caso de utilizar la [[ingeniería electrónica/quimica/Soluciones y solubilidad/Entalpía#^entalpia-estandar-reaccion|entalpía estándar de reacción]], se escribe la reacción de la siguiente forma $$ \text{CH}_4 ~ \text{(g)} + 2 \text{O}_2 ~ \text{(g)} \longrightarrow \text{CO}_2 ~ \text{(g)} + 2 \text{H}_2 \text{O} ~ \text{(l)}, ~~~~ \Delta H_r^0 = -890 ~ \frac{\text{kJ}}{\text{mol}} ~ \left(25 \degree \text{C} \right) $$