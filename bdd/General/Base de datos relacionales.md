---
dia: 2023-11-28
materia: bdd
capitulo: 1
---
### Definición
---
Las [[Base de datos|base de datos]] relacionales, son tablas con columnas (atributos), tiene claves primarias y claves foráneas

#### Claves primarias
---
Las claves primarias identifican las distintas filas (instancias) en una tabla

#### Claves foráneas
---
Las claves foráneas referencian a claves primarias de otras tablas y son empleadas para implementar las relaciones (o asociaciones)

#### Características
---
Tenemos las siguientes características de esta [[Base de datos|base de datos]], donde ACID es un acrónimo en inglés de Atomicity, Consistency, Isolation and Durability

| Tipos de datos soportados | Modelo de guardado de datos             | Caso de uso principal                                 | Cumple ACID | Escalabilidad        |
| ------------------------- | --------------------------------------- | ----------------------------------------------------- | ----------- | -------------------- |
| Datos estructurados       | Pre definidos, modelo relacional fijado | Proceso a partir de transacciones y queries complejas | Si          | Escala verticalmente |