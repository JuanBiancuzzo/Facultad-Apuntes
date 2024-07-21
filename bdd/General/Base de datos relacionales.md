---
dia: 2023-11-28
capitulo: 1
tags:
  - bdd/General
---
### Definición
---
Las [[Base de datos|base de datos]] relacionales, son [[Tabla SQL|tablas]] con [[Campo SQL|columnas (atributos)]], tiene claves primarias y claves foráneas

#### Claves primarias
---
![[Clave primaria#Definición]]

#### Claves foráneas
---
![[Clave foránea#Definición]]

#### Características
---
Tenemos las siguientes características de esta [[Base de datos|base de datos]], donde ACID es un acrónimo en inglés de Atomicity, Consistency, Isolation and Durability

| Tipos de datos soportados | Modelo de guardado de datos             | Caso de uso principal                                 | Cumple ACID | Escalabilidad        |
| ------------------------- | --------------------------------------- | ----------------------------------------------------- | ----------- | -------------------- |
| Datos estructurados       | Pre definidos, modelo relacional fijado | Proceso a partir de transacciones y queries complejas | Si          | Escala verticalmente |