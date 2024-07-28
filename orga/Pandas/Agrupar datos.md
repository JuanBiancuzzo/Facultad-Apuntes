---
dia: 2023-03-16
tags:
  - orga/Pandas
  - nota
---
### Definición
---
``` python
DataFrame.groupby(by = None, axis = 0, level = None, as_index = True, 
	sort = True, group_keys = _NoDefault.no_default, squeeze = _NoDefault.no_default, observed = False, dropna = True)
```
Dado la [[Data frame - Pandas|tabla]] podemos agrupar con el método `groupby(["Columnas"])` pero devuelve un tipo [[Group - Pandas]]. 

También podemos usar `grupo.loc(["filas"])` para poder acceder a una fila.



