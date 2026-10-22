---
dia: 2026-10-22
etapa: empezado
referencias: []
aliases: 
  - Interés simple#Interés simple
  - Interés compuesto#Interés compuesto
  - Tasa Nominal Anual#Tasa Nominal Anual
  - TNA#Tasa Nominal Anual
  - Tasa Efectiva Anual#Tasa Efectiva Anual
  - TEA#Tasa Efectiva Anual
  - Tasa equivalente#Tasa equivalente
  - Tasa Efectiva Mensual#Tasa equivalente
  - TEM#Tasa equivalente
  - Tasa Efectiva Trimestral#Tasa equivalente
  - TET#Tasa equivalente
tags:
  - carrera/ingeniería-en-informática/ebt-1/Finanzas
  - nota/facultad
ejercicios: 
  - 754
  - 734
vinculoFacultad:
  - tema: Finanzas
    capitulo: 4
    materia: Empresas de Bases Tecnológicas 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Representa el [[ingeniería en informática/ebt 1/Economía/Precio#^costo|costo]]  del [[ingeniería en informática/ebt 1/Economía/Dinero|dinero]] en un período de tiempo determinado. También se utiliza como medida de riesgo de una [[Inversión|inversión]]

## Interés simple
---
No se compone con el capital para generar nuevos intereses sino que siempre el capital original es el que trabaja a la tasa. Tus ganancias por intereses anteriores no las "vas  a incluir" en nuevas inversiones, por eso tiene un crecimiento linea dado por $$ \text{VF} = \text{VP} ~ (1 + t \cdot i) $$ donde 
* $\text{VF}$ es el valor futuro del dinero
* $\text{VP}$ es el valor presente del dinero
* $i$ es la tasa de interés
* $t$ es el periodo que estoy evaluando

Como vemos con un periodo mayor, $\text{VF}$ crece linealmente 

## Interés compuesto
---
Se compone con el capital para generar nuevos intereses, es decir, se ganan intereses sobre la suma inicial, luego sobre la suma inicial más los intereses ganados en el primer período que el dinero "trabajo" y así sucesivamente

Por lo tanto tiene un crecimiento exponencial dado por $$ \text{VF} = \text{VP} ~ (1 + i)^t $$ donde podemos calcular el interes al cabo de $t$  periodos como $\text{I} = \text{VF} - \text{VP}$

## Tasa Nominal Anual
---
Es la tasa de interés que se declara en las operaciones financieras, en la documentación legal, con fines comerciales

El problema de trabajar con la TNA es que la información que brinda es incompleta ya que no menciona la cantidad de veces que los intereses se capitalizaron en el año, por lo que se suele usar como medida de magnitud, calculando el valor futuro como $$ \text{VF} = \text{VP} ~ \left(1 + \frac{\text{TNA}}{m} \right)^m $$ donde $m$ es la cantidad de veces que los intereses se capitalizan en el año

## Tasa Efectiva Anual
---
Es la tasa de interés que incluye la cantidad de veces que los intereses se capitalizan en el año, donde se puede pasar de una a otra de la siguiente forma $$ (1 + \text{TEA})^1 = \left( 1 + \frac{\text{TNA}}{m} \right)^m $$


## Tasa equivalente
---
Si $2$ o más tasas nominales diferentes, al calcular su $\text{TEA}$, en un mismo periodo, nos dan el mismo valor, estamos hablando de que son tasas equivalentes 

Pero para pasar de una tasa equivalente a otra, con $2$ períodos de tiempo distintos, está dada por $$ (1 + \text{TEX})^y = (1 + \text{TEA})^1 = (1 + \text{TET})^{4} = (1 + \text{TEM})^{12} $$
donde realmente se tiene que entender $\text{TEX}$ como $\text{TE}$ como tasa equivalente o tasa efectiva, y $\text{X}$ como el periodo de tiempo, siendo anual $\text{A}$, mensual $\text{M}$ o trimestral $\text{T}$, y la $y$ es la cantidad de veces que ese período entra en un año