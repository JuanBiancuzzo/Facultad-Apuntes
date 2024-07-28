---
dia: 2023-08-13
tags:
  - orga/NLP/2
  - nota
---
### Definición
---
Es una [[Red neuronal]] donde la [[Neurona]] no solo tiene como [[Hiper-parámetros de un modelo|hiper-parámetro]] la función y como parámetros a $\omega$ y $b$ sino que tiene otro hiper-parámetro del valor anterior, dándonos $$ O_t(x) = f(\omega \cdot x + u \cdot O_{t - 1} + b) $$
El problema de estas es que el calculo a partir del [[Descenso del gradiente|descenso del gradiente]], suele llevar a valores inestables de forma numérica. 

#### Múltiples RNR
---
El output de estas redes, termina siendo un vector de características. Por ejemplo, si se esta analizando temporalmente el precio del dólar, podemos querer predecir su valor, o con este método, su precio, que tanto va a crecer, etc. 

También se puede usar para crear varios features que después con una [[Red neuronal]] tomarlas, es decir, crear un [[Ensamble]], y obtener un valor.

#### Stacked RNR
---
En vez de quedarnos con el último valor, podemos tomarlo como otra [[Serie de tiempo]] y aplicar una red neuronal recurrente, creando pilas de estas redes.