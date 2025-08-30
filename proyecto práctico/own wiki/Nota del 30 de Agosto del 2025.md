---
dia: 2025-08-30
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Actualmente pude hacer las query únicas, las completas, pero ambas solo con elementos y referencias, todavía no pude hacer nada con los arrays ya pude implementar

Estoy viendo de utilizar [[ingeniería en informática/bdd/SQL/Stored Procedure|stored procedure]] para simplificar la ejecución y complejizar las [[ingeniería en informática/bdd/SQL/SQL Keywords|querys]], y creo que va a ser lo necesario para poder implementar estos arrays. Realmente nos va a servir para mejorar las querys normales que ya implementamos y ser posible (o que no sean tan terribles computacionalmente) las querys con arrays

Por esto primero voy a modificar lo que ya tengo hecho, que es la siguiente sección, y de esa forma darme tiempo para pensar como hacer con los arrays, y preparar todo para poder hacerlo

## Querys normales
---
Especialmente estas se ven beneficiadas por el uso de las [[Tabla temporal SQL|tablas temporales]], donde para cada entry de tabla en el [[Javascript Object Notation (JSON)|JSON]] se crea una tabla temporal donde se tiene los resultados. En el caso de tener varias, se hace una [[ingeniería en informática/bdd/SQL/Sentencia UNION|union]] de estas tablas temporales creando una nueva tabla temporal. Donde esta última tabla, se le daría todos los elementos ya ordenados para que al hacer la query esto no sea necesario especificar, sería simplemente `SELECT * FROM #temp` o incluso que solo sea las claves que el usuario va a usar para hacerlo más chico posible a la cantidad de claves que el usuario realmente necesita

Esta store procedure, tendría como parámetros las claves que se utilizarían en los where, por lo que es de las pocas cosas que se necesitan saber cuando se ejecutan

Esto además ayuda a las querys que propusimos, donde se pueden ir pidiendo de a secciones, ya que solo se tiene que hacer una query simple sobre esta tabla temporal, e ir usando las sentencias de [[ingeniería en informática/bdd/SQL/Sentencia TOP o LIMIT|LIMIT]] y offset, repetidas veces para obtener toda la información

## Querys con arrays o group by
--- 
Estas querys tienen el problema que no se pueden ejecutar como una única query, por lo que el proceso tiene que ser más involucrado. Lo que estoy pensando actualmente es el uso de multiples tablas temporales, donde se tengan que hacer una query por cada elemento de esta tabla, para obtener el array de elementos

