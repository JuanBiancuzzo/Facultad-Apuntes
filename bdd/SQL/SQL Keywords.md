---
dia: 2024-03-20
materia: bdd
capitulo: 2
---
### Definición
---
Las keywords de [[Structured Query Language (SQL)|SQL]] se puede separar en 
* Comandos
* Cláusulas
* Operadores
* Misceláneas
* Funciones de agregación

#### Cláusulas
---
* [[Sentencia WHERE|WHERE]] se usa para filtrar [[Registro SQL|registros]]
* [[Sentencia ORDER BY|ORDER BY]] se usa para ordenar los resultados de forma ascendente o descendente
* [[Sentencia DISTINC|DISTINC]] extrae información diferente de una base de datos (sin repetir) 
* [[Sentencia TOP o LIMIT|TOP o LIMIT]] extrae $n$ [[Registro SQL|registros]] de una base de datos

#### Operadores
---
* [[Operador AND#En SQL|AND]] se usa como el [[Operación lógica|operador lógico]] 
* [[Operador OR#En SQL|OR]] se usa como el [[Operación lógica|operador lógico]] 
* [[Operador NOT#En SQL|NOT]] se usa como el [[Operación lógica|operador lógico]] 

#### Comandos
---
* [[Sentencia SELECT|SELECT]] extrae información de una [[Base de datos|base de datos]]
* [[Sentencia UPDATE|UPDATE]] modifica información de una base de datos
* [[Sentencia DELETE|DELETE]] elimina información de una base de datos
* [[Sentencia INSERT INTO|INSERT INTO]] agrega nueva información a la base de datos
* `CREATE DATABASE` crea una nueva base de datos
* `ALTER DATABASE` modifica una base de datos
* `CREATE TABLE` crea una nueva [[Tabla SQL|tabla]]
* `ALTER TABLE` modifica una tabla
* `DROP TABLE` elimina una tabla
* `CREATE INDEX` crea un [[Index SQL|index]]
* `DROP INDEX` elimina el index

#### Funciones de agregación
---
* [[Función de agregación MIN|MIN]] devuelve el menor de los valores de la columna seleccionada
* [[Función de agregación MAX|MAX]] devuelve el mayor de los valores de la columna seleccionada
* [[Función de agregación COUNT|COUNT]] devuelve la cantidad de filas en un set
* [[Función de agregación SUM|SUM]] devuelve la suma total de los valores de la columna numérica seleccionada
* [[Función de agregación AVG|AVG]] devuelve el promedio de los valores de la columna numérica seleccionada

Todas excepto `COUNT` ignoran valores [[NULL|null]]

#### Misceláneas
---
* [[NULL#En SQL|NULL]] representa la falta de datos

#### Notas
---
* Las keyword no son key sensitive, pero en general se escriben en mayúsculas