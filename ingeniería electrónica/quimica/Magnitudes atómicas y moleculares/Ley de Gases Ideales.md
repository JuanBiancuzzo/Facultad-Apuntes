---
dia: 2026-03-15
etapa: empezado
referencias: []
aliases:
  - Ecuación de estados de los gases ideales
  - Ley de Boyle y Mariotte#Ley de Boyle y Mariotte
  - Ley de Charles y Guy Lussac#Leyes de Charles y Guy Lussac
  - Constante de los gases ideales#^constante-gases-ideales
tags:
  - carrera/ingeniería-electrónica/quimica/Magnitudes-atómicas-y-moleculares
  - carrera/ingeniería-electrónica/quimica/Estados-de-la-materia
  - nota/facultad
vinculoFacultad:
  - tema: Magnitudes atómicas y moleculares
    capitulo: 4
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
  - tema: Estados de la materia
    capitulo: 7
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Combinando la ley de Boyle y Mariotte, con las leyes de Charles y Guy Lussac, se obtiene la [[ingeniería electrónica/control/Respuesta dinámica/Sistema dinámico|ecuación de estado]] de los [[Gas#Gas ideal|gases ideales]] que establece $$ P ~ V = n ~ R ~ T $$ donde
* $R$ es la constante de los gases ideales, con valor $0.082 ~ \frac{L ~ \text{atm}}{\text{mol} ~ \text{K}}$ ^constante-gases-ideales
* $n$ es los [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Número de Avogradro|moles]] del gas ideal

Es una ecuación de estados, ya que se considera que la $P$, $V$,  $T$ y $n$ son [[ingeniería electrónica/control/Respuesta dinámica/Variable de estado|variables de estado]] de un gas ideal

Esta ley es una ley [[ingeniería electrónica/analisis 3/Topología del plano complejo y límites/Límite|límite]], cuando la [[Presión|presión]] tiende a $0$. También la [[ingeniería electrónica/seguridad/Prevención de incendios/Temperatura|temperatura]] afecta, por lo a mayor temperatura, más el [[Gas|gas]] se comporta como ideal

## Ley de Boyle y Mariotte
---
Esta establece que un sistema gaseoso, con [[Masa|masa]] constante, y temperatura constante, al aumentar el volumen, disminuye la presión de manera inversamente proporcional $$ P ~ V = \text{cte} $$
![[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/img/Ley de Boyle y Mariotte.png|550]]

## Leyes de Charles y Guy Lussac
---
La primera ley establece que en un sistema gaseoso, con masa constante y a presión constante, al aumentar la temperatura, aumenta el volumen de manera directamente proporcional $$ \frac{V}{T} = \text{cte} $$
![[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/img/Primera ley de Charles y Guy Lussac.png|550]]

Esta se puede extrapolar cual sería la mínima temperatura alcanzable, el cual establece el $0$ en la [[ingeniería electrónica/seguridad/Prevención de incendios/Temperatura#Escala Kelvin|escala de Kelvin]]

La segunda ley establece que en un sistema gaseoso, con masa constante y a volumen constante, al aumentar la temperatura, aumenta la presión de manera directamente proporcional $$ \frac{P}{T} = \text{cte} $$
![[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/img/Segunda ley de Charles y Guy Lussac.png|550]]