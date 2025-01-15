---
tags:
  - funciones/Librerías-de-Python/Pandas/DataFrame/Map
  - funciones/función
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/Lenguaje-Python/Librerías-de-Python/Pandas/DataFrame
  - nota/investigacion
firma:
  nombre: map
  descripcion: This method applies a function that accepts and returns a scalar to every element of a DataFrame
  parametros:
    - nombre: func
      type: callable
      descripcion: Python function, returns a single value from a single value
    - nombre: na_action
      type:
        - str
        - None
      default: None
      descripcion: If ‘ignore’, propagate NaN values, without passing them to func
    - nombre: "**kwargs"
      type: dict
      descripcion: Additional keyword arguments to pass as keywords arguments to func
  return:
    type: Dataframe
    descripcion: Transformed DataFrame
---