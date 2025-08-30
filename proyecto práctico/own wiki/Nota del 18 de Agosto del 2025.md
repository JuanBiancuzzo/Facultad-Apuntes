---
dia: 2025-08-18
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Hoy pude avanzar con la creación de las views, ahora se generan bastante bien en relación a la información dada. También, para mejorar la velocidad de las inserciones, en las tablas, estoy generando las funciones de la tabla en momento de la creación

Actualmente hay un bug en hacer las querys, pero no es nada que no se pueda resolver. Ahora me interesa más ver como hacer para hacer las $3$ operaciones que me faltan
1. Insertar datos en la [[ingeniería en informática/bdd/General/Base de datos|base de datos]]
2. Actualizar datos 
3. Eliminar datos

Para la tercera, se me ocurrió hacer un endpoint especifico a delete, que su único trabajo sería eliminar elementos de la base de datos. Para eso en el [[Javascript Object Notation (JSON)|JSON]], en la sección de variables, cuando se quiere hacer una variable según una tabla, ahí podemos crear una variable (como hicimos con los pathView) y generar la información suficiente para mandarlo a una función que cree el [[Uniform Resource Locator (URL)|url]]

Para actualizar, se puede atar en la misma sección del JSON, para definir bien como hacer el url del [[ingeniería en informática/aninfo/Diseño de software/Representational state transfer|POST]] pero no lo tengo bien claro como se debería hacer para hacer. Tal vez pueda hacer un solo endpoint, y que se pase toda la información necesaria

## Resumen
---
Posiblemente genere $3$ endpoints por tabla, que siempre van a estar, dedicados exclusivamente para resolver problemas de inserción, actualización y eliminación

* En el caso de la inserción, se van a tener que verificar que los datos necesarios existan, que las referencias estén dadas
* En el caso de la actualización, se necesita verificar que los datos actualizados no rompan la representación única de los datos, es decir que no haya dos elementos con el mismo conjunto que representa una clave única
* En el caso de la eliminación, se tiene que verificar que no haya un efecto en cascada de elementos a eliminar. Por ejemplo, no se puede eliminar una carrera si todavía tiene materias asociadas a esa carrera




