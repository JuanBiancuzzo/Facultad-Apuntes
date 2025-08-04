---
dia: 2023-03-27
tags:
  - carrera/ingeniería-en-informática/orga/Pandas
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/Lenguaje-Python/Pandas
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - "[[ingeniería en informática/orga/Pandas/Resumen.md]]"
---
# Definición
---
``` python
DataFrame.astype(dtype, copy=True, errors='raise')
```

Donde nos permite cambiar el [[Tipo de dato|tipo de dato (esto es el equivalente en rust)]]  de un [[Data frame]].

También tiene la particularidad de que si se pasa a `"category"` entonces crea una tabla con todos los valores unicos y guarda el indice a esa tabla. Por lo tanto si son pocos esas categorias entonces reduce bastante el uso de memoria.

Notemos como esto podríamos hacerlo con [[Map|map]] pero sería una operación más costosa.