---
dia: 2023-11-20
tags:
  - carrera/ingeniería-en-informática/sisop/Virtualización-de-memoria
  - nota/facultad
  - carrera/ingeniería-electrónica/embebidos/Memorias
  - data-structures
  - lenguajes-de-programación/Lenguaje-Python/Pandas
  - carrera/ingeniería-en-informática/orga/Pandas
aliases:
  - Pila
---
# Definición
---
La [[Memoria|memoria]] de stack, su reserva y la liberación es manejada implícitamente por el [[Compilador|compilador]] en nombre del programador por esta razón a veces también se denomina memoria automática

La declaración de memoria en el stack en [[Lenguaje C|C]] es sencilla, se declara una variable de algún [[Tipo de dato|tipo de dato]] y el compilador se encarga de hacer el resto

## Pandas
---
``` Python
DataFrame.stack(level = -1, dropna = True)
```

Permite modificar la estructura del [[Data frame|data frame]], moviendo indices a columnas. Este siendo el opuesto al [[Unstack|unstack]]