---
dia: 2025-08-19
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Estuve pensando en como hacer para evitar tener que expresar un [[ingeniería en informática/orga/Pandas/Merge|join]] en la información de las views, para eso identificarlo los motivos por el cual hacer un join

Los que considero son $2$
1. Es el hecho de tener una referencia o un id como [[ingeniería en informática/bdd/General/Clave foránea|clave foránea]] a otra [[ingeniería en informática/bdd/General/Tabla SQL|tabla]], se haría un join para obtener la información de ese dato
2. Es donde se quiere tener un array de elementos, y por lo tanto se hace una tabla auxiliar donde se tiene pares de id a los elementos relacionados. En esta se haría un join para obtener una lista de elementos

El primero ya lo tengo solucionado ya que tenga la referencia a la tabla, y por lo tanto si el usuario lo quiere, tengo toda la información necesaria para hacer la query y por lo tanto efectuar el equivalente de un join

Para el segundo, todavía no lo pude solucionar, pero mi propuesta es generar un tipo de dato (como lo fue la referencia) que sea un [[ingeniería en informática/algo 1/Lenguaje C/Array|array]] de referencias, y por lo tanto ya de por si definiendo que tabla corresponde la información. Al igual que antes, internamente estaría definiendo las tablas necesarias, pero para el usuario debería ser transparente

