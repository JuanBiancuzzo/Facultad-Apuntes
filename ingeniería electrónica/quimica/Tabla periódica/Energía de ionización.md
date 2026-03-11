---
dia: 2026-03-07
etapa: empezado
referencias: []
aliases: 
  - Potencial de ionización
tags:
  - carrera/ingeniería-electrónica/quimica/tabla-periódica
  - nota/facultad
vinculoFacultad:
  - tema: Tabla periódica
    capitulo: 2
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es la [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía|energía]] necesaria para arrancar un [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrón]] desde un [[ingeniería en informática/estructura/Álgebra de Boole/Átomo|átomo]] en la fase gaseosa. También se puede pensar como la fuerza con la que el átomo retiene sus electrones y por consiguiente una fácil forma de iones positivos

Las energías de ionización sucesivas para un mismo elemento crecen muy rápido, debido a la dificultad creciente para arrancar un electrón cuando existe una carga positiva que le atrae y menos carga negativas que le repelen

El conocimiento de los valores relativos de las energías de ionización sirve para predecir si un elemento tenderá a forma un [[Compuesto iónico|compuesto iónico]] o [[Compuesto covalente|covalente]]

| Energía ionización | Tendencia del elemento                  | Tipo de compuesto |
| :----------------: | :-------------------------------------- | :---------------- |
|        Baja        | Perder electrones y dar iones positivos | Iónicos           |
|      Elevada       | Compartir electrones                    | Covalentes        |
|    Muy elevada     | Ganar electrones y dar iones negativos  | Iónicos           |

## Variación periódica
---
Aumenta a lo largo de un periodo
* En un periodo tiende a aumentar al hacerlo el número atómico. En principio, la tendencia que cabria esperar es que al aumentar la carga nuclear efectiva y no aumentar apenas el [[ingeniería electrónica/quimica/Tabla periódica/Radio atómico|radio atómico]], la energía de ionización sea cada vez mayor

Decrece hacia abajo en un grupo
* Al descender en un grupo, se obtienen átomos más voluminosos en los que los electrones están menos retenidos, por lo que el potencial de ionización decrecerá

Los [[ingeniería electrónica/quimica/Tabla periódica/Tabla periódica#^gas-noble|gases nobles]] tienen las energías de ionización muy elevadas. Estos gases son elementos muy estables y sólo los más pesados de ellos muestran algunas tendencia a unirse con elementos para dar compuestos

![[ingeniería electrónica/quimica/Tabla periódica/img/Energía de ionización.png]]