---
dia: 2023-03-28
tags:
  - carrera/ingeniería-electrónica/seguridad/Prevención-de-incendios
  - carrera/ingeniería-electrónica/quimica/Termoquímica
  - nota/facultad
vinculoFacultad:
  - tema: Prevención de incendios
    capitulo: 3
    materia: Seguridad ambiental y del trabajo
    carrera: Ingeniería electrónica
  - tema: Termoquímica
    capitulo: 11
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
etapa: empezado
referencias: []
aliases: 
  - Poder calorífico de un combustible#Poder calorífico
  - Poder calorítico inferior de un combustible#^pci
  - PCI de un combustible#^pci
  - Poder calorítico superior de un combustible#^pcs
  - PCS de un combustible#^pcs
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Material que cede [[Electrón|electrones]] a un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Reacción química de óxido-reducción#^agente|agente oxidante]]. Estado: [[ingeniería electrónica/quimica/Estados de la materia/Sólido|sólido]], [[ingeniería electrónica/quimica/Estados de la materia/Líquido|líquido]] o [[ingeniería electrónica/quimica/Estados de la materia/Gas|gaseoso]]

## Mezcla 
---
En general los combustibles son mezclas de sustancias combustibles. Cuando tengo que calcular el [[ingeniería en informática/fisica 2/Termodinámica/Calor|calor]] proporcionado por una mezcla, debo considerar el calor de combustión de cada combustible por separado teniendo en cuenta los moles de cada uno que reaccionan

No se pueden sumar las ecuaciones [[ingeniería electrónica/quimica/Termoquímica/Termoquímica|termoquímicas]] directamente, tengo que tener en cuenta la proporción de cada combustible, haciendo un balance de materia, y el calor que aporta cada una

## Poder calorífico
---
El poder calorífico de un combustible es la cantidad de [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía|energía]] desprendida en la [[ingeniería electrónica/quimica/Reacciones químicas/Reacción de combustión#^completa|reacción de combustión completa]], referida a la unidad de [[Volumen|volumen]], capacidad o [[Masa|masa]] de combustible dependiendo del tipo de combustible

El poder calorífico inferior (PCI), se denomina así al poder calorífico cuando el agua resultante de la combustión se supone en [[ingeniería electrónica/quimica/Estados de la materia/Estado de agregación de la materia|estado]] de vapor con los demás [[ingeniería electrónica/quimica/Reacciones químicas/Reacción química#^producto|productos]] de la combustión. Como se pierde energía [[ingeniería electrónica/quimica/Estados de la materia/Estado de agregación de la materia#Cambio de estado|evaporizando]] el agua, la energía que entrega es menor ^pci

El poder calorífico superior (PCS), se denomina así el poder calorífico cuando el agua resultante de la combustión se supone líquida (condensada) en los productos de combustión. Por lo tanto la energía que entrega es superior ^pcs

Por lo tanto la diferencia entre PCI y PCS es igual por definición al  de calor [[ingeniería electrónica/quimica/Estados de la materia/Estado de agregación de la materia#Cambio de estado|condensación]] del vapor en agua resultante de la combustión del combustible