---
dia: 2023-11-28
materia: bdd
capitulo: 1
---
### Definición
---
Una base de datos es una colección ordenada de [[Dato|datos]] administrada por un [[Sistema|sistema]] de gestión

|                             | Base de datos relacionales | Base de datos NoSQL | Base de datos con series en el tiempo | Base de datos NewSQL | Base de datos en memoria | Base de datos distribuidas |
| --------------------------- | -------------------------- | ------------------- | ------------------------------------- | -------------------- | ------------------------ | -------------------------- |
| Tipos de datos soportados   | Datos estructurados        |                     |                                       |                      |                          |                            |
| Modelo de guardado de datos |                            |                     |                                       |                      |                          |                            |
| Caso de uso principal       |                            |                     |                                       |                      |                          |                            |
| ACID compliance*            |                            |                     |                                       |                      |                          |                            |
| Escalabilidad               |                            |                     |                                       |                      |                          |                            |
\* ACID es un acrónimo en inglés de Atomicity, Consistency, Isolation and Durability


![[Base de datos.webp]]

#### Transformación del [[Modelado de dominio|modelo de dominio]] a la base de datos
---
![[Transformación de un objeto del modelo de dominio a una base de datos relacional.webp]]

##### Atributos multivaluados
---
![[Transformación atributos multivaluados a una base de datos relacional.webp]]

##### Relaciones 1 a 1
---
![[Transformación relación 1 a 1 a una base de datos relacional.webp]]

##### Relaciones 1 a 0..*
---
![[Transformación relación 1 a 0..muchos a una base de datos relacional.webp]]

##### Relación 0..* a 0..*
---
![[Transformación relación 0..muchos a 0..muchos a una base de datos relacional.webp]]

##### Recursivas 0..1 a 0..1
---
![[Transformación recursivas 0..1 a 0..1 a una base de datos relacional.webp]]

##### Recursivas 0..1 a 0..*
---
![[Transformación recursivas 0..1 a 0..muchos a una base de datos relacional.webp]]

##### Recursividad muchos a muchos
---
![[Transformación recursivas muchos a muchos a una base de datos relacional.webp]]

##### Clases asociativas
---
![[Transformación clases asociativas a una base de datos relacional.webp]]

##### Herencia
---
![[Transformación herencia a una base de datos relacional.webp]]

