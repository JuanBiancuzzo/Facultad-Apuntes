---
dia: 2023-11-16
tags:
  - carrera/ingeniería-electrónica/adc/Circuitos-en-regimen-senoidal-permanente
  - carrera/ingeniería-electrónica/fisica-2/Circuitos-en-régimen-alterno-permanente
  - carrera/ingeniería-en-informática/adc/Circuitos-en-regimen-senoidal-permanente
  - carrera/ingeniería-en-informática/fisica-2/Circuitos-en-régimen-alterno-permanente
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/adc/Circuitos en regimen senoidal permanente/Resumen.md]]"
  - "[[ingeniería en informática/fisica 2/Circuitos en régimen alterno permanente/Resumen.md]]"
---
# Definición
---
[[Ley de Ohm]] en forma [[Fasor|fasorial]] 

| Elemento        | Dominio del tiempo      | Dominio de frecuencia      | Impedancia                   |
| --------------- | ----------------------- | -------------------------- | ---------------------------- |
| [[Resistencia]] | $v = R ~ i$             | $V = R ~ I$                | $Z_R = R$                    |
| [[Inductor]]    | $v = L ~ \frac{di}{dt}$ | $V = j \omega L ~ I$       | $Z_L = j \omega L$           |
| [[Capacitor]]   | $i = C ~ \frac{dv}{dt}$ | $V = \frac{I}{j \omega C}$ | $Z_C = \frac{1}{j \omega C}$ |

Se define la impedancia como $$ \boxed{Z = \frac{V}{I} ~ \text{osea} ~ V = Z ~ I} $$
Existe una equivalencia entre el dominio temporal y el dominio [[Fasor|fasorial]], por razón, los teoremas y herramientas de [[Análisis de Circuitos (6606)|análisis de circuitos]] que vimos hasta ahora, también tienen su equivalente fasorial
* [[Ley de Ohm|Ley de ohm]], [[Ley de nodos de Kirchhoff|ley de nodos]] y [[Ley de mallas de Kirchhoff|ley de mallas]] de Kirchoff
* [[Divisor de tensión|Divisor de tensión]] y [[Divisor de corriente|corriente]]
* [[Teorema de Thevenin|Equivalente de Thevenin]] y [[Teorema de Norton|Norton]]
* [[Principio de superposición|Superposición]]