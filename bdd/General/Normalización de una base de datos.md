---
dia: 2024-05-10
materia: bdd
capitulo: 1
---
### Definición
---
La normalización de [[Base de datos|bases de datos]] es un proceso importante en el diseño de [[Base de datos relacionales|base de datos relaciones]] que consiste en designar y aplicar una serie de reglas a las relaciones obtenidas tras el paso del [[Modelo|modelo]] entidad-relación al modelo relacional con objeto de minimizar la redundancia de datos, facilitando su gestión posterior

El proceso de normalización se basa en relaciones que se conocen que mantienen los datos, principalmente dependencias funcionales, multivaluadas y de unión

#### Objetivo
---
Las bases de datos relacionales se normalizan para
* Minimizar la redundancia de los datos
* Disminuir problemas de actualización de los datos en las [[Tabla SQL|tablas]]
* Proteger la integridad de datos


#### Formas normales
---
Las formas normales son aplicadas a las tablas de una base de datos. Decir que una base de datos está en la forma normal $N$ es decir que todas sus tablas están en la forma normal $N$

En general, las primeras tres formas normales son el mínimo que debe cubrir la mayoría de las bases de datos

#### Primera Forma Normal (1FN)
---
Una tabla está en primera forma si
* Todos los atributos son atómicos
	* Un atributo es atómico si los elementos del dominio son simples e indivisibles
* No debe existir variación en el número de columnas
* Los campos no clave deben identificarse por la clave (dependencia funcional)
* Debe existir una independencia del orden tanto  de las filas como de las columnas; es decir, si los datos cambian de orden no deben cambiar sus significados

Esta forma normal elimina los valores repetidos dentro de una base de datos

#### Segunda Forma Normal (2FN)
---
Dependencia funcional. Una relación está en 

#### Tercer Forma Normal (3FN)
---


#### Forma Normal de Boyce-Codd (FNBC)
---


#### Cuarta Forma Normal (4FN)
---


#### Quinta Forma Normal (5FN)
---

