---
dia: 2024-03-20
capitulo: 2
tags:
  - bdd/SQL
  - nota
---
### Definición
---
Las keywords de [[Structured Query Language|SQL]] se puede separar en 
* [[SQL Keywords#Comandos|Comandos]]
* [[SQL Keywords#Cláusulas|Cláusulas]]
* [[SQL Keywords#Operadores|Operadores]]
* [[SQL Keywords#Misceláneas|Misceláneas]]
* [[SQL Keywords#Funciones de agregación|Funciones de agregación]]

### Cláusulas
---
* [[Sentencia WHERE|WHERE]] se usa para filtrar [[Registro SQL|registros]]
* [[Sentencia ORDER BY|ORDER BY]] se usa para ordenar los resultados de forma ascendente o descendente
* [[Sentencia DISTINC|DISTINC]] extrae información diferente de una base de datos (sin repetir) 
* [[Sentencia TOP o LIMIT|TOP o LIMIT]] extrae $n$ [[Registro SQL|registros]] de una base de datos
* [[Sentencia JOIN|JOIN]] se usa para combinar filas de dos o más tablas basado en la relación entre las columnas de ambas
* [[Sentencia UNION|UNION]] es usado para combinar resultados de dos SELECT
* [[Sentencia GROUP BY|GROUP BY]] agrupa filas que tengan el mismo valor en un subgrupo de columnas
* [[Sentencia HAVING|HAVING]] similar a WHERE pero funcionado con [[SQL Keywords#Funciones de agregación|funciones de agregación]]

### Operadores
---
* [[Operador AND#En SQL|AND]] se usa como el [[Operación lógica|operador lógico]] 
* [[Operador OR#En SQL|OR]] se usa como el [[Operación lógica|operador lógico]] 
* [[Operador lógico NOT#En SQL|NOT]] se usa como el [[Operación lógica|operador lógico]] 
* [[Operador LIKE|LIKE]] se usa para determinar un valor cumple un patrón
* [[Operador IN|IN]] se usa para especificar varios valores
* [[Operador BETWEEN|BETWEEN]] se usa para determinar un rango de selección
* [[Operador EXISTS|EXISTS]] se usa para comprobar la existencia de un [[Registro|registro]] de una subquery
* [[Operador ANY|ANY]] se usa para comparar entre una columna con el rango de valores y si se cumple alguna comparación se devuelve true
* [[Operador ALL|ALL]] se usa para comparar entre una columna con el rango de valores y si se cumple todas las comparaciones se devuelve true

### Comandos
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

### Funciones de agregación
---
* [[Función de agregación MIN|MIN]] devuelve el menor de los valores de la columna seleccionada
* [[Función de agregación MAX|MAX]] devuelve el mayor de los valores de la columna seleccionada
* [[Función de agregación COUNT|COUNT]] devuelve la cantidad de filas en un set
* [[Función de agregación SUM|SUM]] devuelve la suma total de los valores de la columna numérica seleccionada
* [[Función de agregación AVG|AVG]] devuelve el promedio de los valores de la columna numérica seleccionada

Todas excepto `COUNT` ignoran valores [[NULL|null]]

### Misceláneas
---
* [[NULL#En SQL|NULL]] representa la falta de datos
* [[Expresión CASE|CASE]] representa diferentes casos 

### Notas
---
* Las keyword no son key sensitive, pero en general se escriben en mayúsculas