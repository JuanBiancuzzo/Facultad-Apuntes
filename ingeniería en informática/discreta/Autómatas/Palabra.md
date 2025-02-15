---
dia: 2024-08-07
tags:
  - ingeniería-en-informática/discreta/Autómatas
  - nota/facultad
  - ingeniería-en-informática/estructura/Sistema-ARC
  - ingeniería-electrónica/estructura/Sistema-ARC
  - curso/introduction-to-algorithms/Introduction
aliases:
  - Palabra nula#Palabra nula
referencias:
  - "700"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Una [[Sucesión|sucesión]] de [[Letra|letras]] es una palabra. Por ejemplo, $x = abaac$, donde $\Sigma = \Set{a,~b,~c}$, siendo este el [[Alfabeto|alfabeto]]

Llamaremos longitud a la cantidad de letras de un palabra. Siguiendo el ejemplo $|x| = 5$

## Palabra nula
---
Existe una única palabra de longitud cero denominada palabra nula, denotada con $\lambda$ 

## Concatenación
---
Las palabras pueden ser concatenadas a partir del operador producto. Sea $x = abb$, $y = abbc$. Entonces $z = xy = aababbc$. Definiremos la longitud como $|z| = |xy| = |x| + |y|$. Se puede concatenar con la palabra nula $a \lambda = \lambda a = a$

## En computación
---
Pensándolo en una forma genérica, podemos establecer que una palabra es una cantidad $w$ de [[Información#Bit|bits]] y que las operaciones que se pueden hacer un la [[Computadora|computadora]] están hechas para usar palabras de ese tamaño

### En un sistema ARC
---
Los [[Procesador|procesadores]] tienen instrucciones para acceder simultáneamente a $1$, $2$, $4$ o más bytes, esto se coincidiera una palabra

Las palabras de más de $1$ byte es guardada como una serie de bytes

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```
