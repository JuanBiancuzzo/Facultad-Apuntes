---
dia: 2023-08-13
tags:
  - carrera/ingeniería-en-informática/orga/NLP/2
  - investigación/ciencias-de-la-computación/Machine-learning/Natural-Language-Processing
  - investigación/machine-Learning/Natural-Language-Processing
  - investigación/matemática/Estadística/Machine-learning/Natural-Language-Processing
  - nota/facultad
  - nota/investigacion
aliases:
  - RNN
  - RNR
vinculoFacultad:
  - "[[ingeniería en informática/orga/NLP/Resumen Parte 2.md]]"
---
# Definición
---
Es una [[Red neuronal|red neuronal]] donde la [[Neurona|neurona]] no solo tiene como [[Hiper-parámetros de un modelo|hiper-parámetro]] la [[Función|función]] y como parámetros a $\omega$ y $b$ sino que tiene otro hiper-parámetro del valor anterior, dándonos $$ O_t(x) = f(\omega \cdot x + u \cdot O_{t - 1} + b) $$
El problema de estas es que el calculo a partir del [[Descenso de gradiente|descenso del gradiente]], suele llevar a valores inestables de forma numérica. 

## Múltiples RNR
---
El output de estas redes, termina siendo un vector de características. Por ejemplo, si se esta analizando temporalmente el precio del dólar, podemos querer predecir su valor, o con este método, su precio, que tanto va a crecer, etc. 

También se puede usar para crear varios features que después con una red neuronal tomarlas, es decir, crear un [[Ensamble|ensamble]], y obtener un valor.

## Stacked RNR
---
En vez de quedarnos con el último valor, podemos tomarlo como otra [[Serie de tiempo|serie de tiempo]] y aplicar una red neuronal recurrente, creando pilas de estas redes.