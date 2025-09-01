---
dia: 2025-08-30
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Tenemos varias cosas para hoy, vamos a ver como estamos con las querys, como cambiar la forma de mostrar la información y también pedirla, y finalmente como podríamos hacer en futuro una página web a partir de todos los datos dados

## Situación Querys
---
Actualmente pude hacer las query únicas, las completas, pero ambas solo con elementos y referencias, todavía no pude hacer nada con los arrays ya pude implementar

Estoy viendo de utilizar [[ingeniería en informática/bdd/SQL/Stored Procedure|stored procedure]] para simplificar la ejecución y complejizar las [[ingeniería en informática/bdd/SQL/SQL Keywords|querys]], y creo que va a ser lo necesario para poder implementar estos arrays. Realmente nos va a servir para mejorar las querys normales que ya implementamos y ser posible (o que no sean tan terribles computacionalmente) las querys con arrays

Por esto primero voy a modificar lo que ya tengo hecho, que es la siguiente sección, y de esa forma darme tiempo para pensar como hacer con los arrays, y preparar todo para poder hacerlo

### Querys normales
---
Especialmente estas se ven beneficiadas por el uso de las [[Tabla temporal SQL|tablas temporales]], donde para cada entry de tabla en el [[Javascript Object Notation (JSON)|JSON]] se crea una tabla temporal donde se tiene los resultados. En el caso de tener varias, se hace una [[ingeniería en informática/bdd/SQL/Sentencia UNION|union]] de estas tablas temporales creando una nueva tabla temporal. Donde esta última tabla, se le daría todos los elementos ya ordenados para que al hacer la query esto no sea necesario especificar, sería simplemente `SELECT * FROM #temp` o incluso que solo sea las claves que el usuario va a usar para hacerlo más chico posible a la cantidad de claves que el usuario realmente necesita

Esta store procedure, tendría como parámetros las claves que se utilizarían en los where, por lo que es de las pocas cosas que se necesitan saber cuando se ejecutan

Esto además ayuda a las querys que propusimos, donde se pueden ir pidiendo de a secciones, ya que solo se tiene que hacer una query simple sobre esta tabla temporal, e ir usando las sentencias de [[ingeniería en informática/bdd/SQL/Sentencia TOP o LIMIT|LIMIT]] y offset, repetidas veces para obtener toda la información

### Querys con arrays o group by
--- 
Estas querys tienen el problema que no se pueden ejecutar como una única query, por lo que el proceso tiene que ser más involucrado. Lo que estoy pensando actualmente es el uso de multiples tablas temporales, donde se tengan que hacer una query por cada elemento de esta tabla, para obtener el array de elementos

## Idea view-endpont
---
Tal vez necesitamos separar la idea de las views, con los endpoints, ya que tal vez hay cosas que tal vez no merecen la pena una actualización completa o parcial de la estructura de la página

Por ahora tenemos el hecho que se va modificando una única página, pero tal vez deberíamos tratar a las views como páginas, y los endpoints como modificaciones de esta página

Dando como ejemplo la situación de ahora, tendríamos únicamente $2$ views: "Root" y "Facultad", donde Root simplemente manda a Facultad, pero dentro de facultad se van modificando para obtener más información, y actualizando esta página

## Situación generar una página a partir de todo esto
---
Actualmente es todo [[ingeniería en informática/redes/Capa de aplicación/Arquitectura cliente servidor|cliente-servidor]] y no podemos hacer eso en una [[Página estatica|página estática]], ya que no hay un servidor en ese caso, y pienso que generar todas las posibles páginas tal vez sea un mal uso de los recursos y teniendo en cuenta que tenemos la base de datos, tal vez podemos intentar ser más inteligentes en su uso

Lo que estoy imaginando es usar la librería, de [[Lenguaje Javascript|Javascript]], [slq.js-httpvfs](https://github.com/phiresky/sql.js-httpvfs) el cual permite usar una base de datos [[investigación/ciencias de la computación/lenguajes de programación/lenguaje SQL/Structured Query Language|SQL]], aprovechándose de los [[Index SQL|index]] de la base de datos. Después se puede agarrar los templates, e intentar ver una forma de transformarlos en código que agarre el resultado de la query, y genere el html necesario para ser mostrado. Tenemos que ver como transformar todo lo que se pueda generar de los endpoints y views, para que sea creable por código de javascript 

Creo que puede llevar tiempo pero es posible, e incluso se puede ver de dar la opción de tener templates específicos para el caso de generar la página, por si alguna de las opciones ya no tienen sentido si no se puede editar el contenido

Lo positivo de todo este esfuerzo, que realmente todo el peso final de los archivos generados para lograr esto, seria realmente la información. Esto va a estar sumado la cantidad de views necesarias ya que cada view tendría su propio archivo de [[investigación/ciencias de la computación/lenguaje de marcado/Lenguaje de marcado de hipertexto|HTML]] y en el tendría toda la lógica para hacer las querys y obtener la información, donde a la par de htmx va a poder cambiar la página