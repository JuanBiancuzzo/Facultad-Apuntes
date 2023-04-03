---
dia: 2023-03-27
materia: orga
capitulo: 3
---
### Definición
---
``` python
DataFrame.astype(dtype, copy=True, errors='raise')
```

Donde nos permite cambiar el [[Tipo de dato|tipo de dato (esto es el equivalente en rust)]]  de un [[Data frame]].

También tiene la particularidad de que si se pasa a `"category"` entonces crea una tabla con todos los valores unicos y guarda el indice a esa tabla. Por lo tanto si son pocos esas categorias entonces reduce bastante el uso de memoria.

Notemos como esto podríamos hacerlo con [[Map]] pero sería una operación más costosa.