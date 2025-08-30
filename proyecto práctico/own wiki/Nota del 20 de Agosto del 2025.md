---
dia: 2025-08-20
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Tengo una lista de cosas para hacer, que no creo llegar a hacerlas todas hoy, pero las voy escribiendo para no olvidarme
 - [x] Crear la idea de array de referencias como un tipo de dato más 
 - [ ] Crear las funciones de eliminar y actualizar de la tabla
 - [x] Crear la función para construir querys a la tabla más eficientes y bien hechas
     - [x] Corregir lo que ya tengo sobre las querys
 - [x] Mejorar la implementación de los parámetros pasados en el archivo de views
 - [ ] Crear los endpoints para insertar, actualizar y eliminar elementos de las tablas
 - [ ] Hacer una función de groupby en las views donde se pueden pedir multiples claves

## Comentarios sobre los joins
---
[[proyecto práctico/own wiki/Nota del 19 de Agosto del 2025|Ayer]] mencionaba como había dos motivos por los cuales hacer join. Creo q puede haber otro motivo, este puede ser como pasa con las carreras y materias, donde yo quiero tener una lista de carreras, pero a su vez, quiero saber por carrera, que materias la conforman

Esto no hace que necesite un tipo de variable más, o que construya las tablas de otra forma, la intención es ver una forma de obtener esa información. Desde el punto de vista de las materias, siguiendo el ejemplo, se puede hacer un group by, y si el group by es por una referencia, se haría un join, o lo q se vea necesario para conseguir la información

## Mejorar la forma de obtener información en las views
---
Actualmente, estoy pidiendo, por cada variable que se crea, lo siguiente
* El tipo de query 
    * Una sola
    * Multiples pero todo junto
    * Multiples pero de a poco
        * En este caso, se pide que bloque template se va a usar y que nombre va a tener la variable
* El nombre de la tabla
* Que condiciones sobre la tabla
* El orden de los elementos enviados
* Si por cada elemento, se quiere agregar información
    * Que se genere un pathView con los unos datos especificados
    * Un path al endpoint para actualizar
    * Un path al endpoint para eliminar

Donde las condiciones sobre la tabla solo reflejan una cadena de [[ingeniería en informática/discreta/Álgebra de conjuntos/Operador AND|ANDs]] y no hay forma de componer algún [[ingeniería en informática/discreta/Álgebra de conjuntos/Operador OR|OR]], no esta el groupby, no esta la información de que claves de la tabla se van a usar o de sus referencias, y esto se hace para cada una de las variables que se requiere

Por lo tanto tengo que ver una mejor forma de organizar esta información, y lo que propongo es crear la siguiente estructura
```json
{
    // Forma de referenciar la view y como se llamará el endpoint de este
    "nombre": "nombre de la view", 
    
    // Se usa los templates de text/html para generar y este es el nombre del
    // bloque a usar cuando se quiere mostrar esta view
    "bloque": "nombre del bloque", 
    
    // La idea es tener valores que se tiene que pasar para poder mostrar 
    // correctamente la view, estos se usan a lo largo de la view
    "parametros": [ "clave1", "clave2" ],
    
    // Se va a dar estos valores a esa view
    "valores": [
        // Valor de una tabla, donde se búsca un único elemento, de por si se 
        // tiene que pasar el id para obtener el objeto
        "...": {},
        "variableUnico": {
            "tipo": "ElementoUnico",
            "tabla": "nombre de la tabla",
            "id": "parametro"
        },
        // Valores de una tabla entera, donde en el nombre de la variable se
        // van a tener un array de los elementos de la tabla 
        "variableTablaCompleta": {
            "tipo": "ElementosCompleto",
            "nombre de la tabla": {
                // Esta cadena solo puede tener and's y or's, estos usando los 
                // operadores ==, != y ~= representando el "like" de SQL
                // Cabe aclarar que los elementos de la izquierda deben ser claves
                // de la tabla, mientras que los elementos de la derecha deben
                // ser parametros
                "condicion": "cadena == de || (expresiones && logicas ~= SQL)",
                // Es un conjunto de claves por los cuales se pueden ordenar, en el
                // caso de ser una referencia, se tiene que especificar que 
                // elemento de esa tabla se usaría con "claveReferencia:claveAUsar"
                "orderBy": [ "claves", "claveRef:order" ],
                // Vamos a necesitar (porque actualmente no puedo) pedir las claves
                // que se van a usar solo para optimizar y simplificar las querys
                "claves": [ "id", "nombre" ]
            }, 
            "nombre de otra tabla": {
                // ...
            },
            // es la clave o claves por los cuales se van a agrupar losd
            // elementos de la tabla
            //  * Si esta el groupby, se va a dar una n-upla de las claves
            //      dadas, y una lista de elementos que tengan ese conjunto
            //  * Si la clave es una referencia, entonces en ese elemento se 
            //      se tiene la información de esa tabla
            "groupBy": [ "claves" ],
        },
        // Representa la idea de ir pidiendo de a poco la informacion en el caso
        // de que tener que mandar todo directamente sea una mala idea
        "variableTablaParcial": {
            "tipo": "ElementosParcial",
            "nombre de la tabla": {
                "condicion": "clave == parametro && clave2 == parametro2",
                "orderBy": [ "claves=alias", "claveRef:order" ]
            },
            "groupBy": [ "claves" ],
            // Es informacion extra necesaria para escificar para este caso
            "elementos": {
                // Para las variables usadas en el template general, como este
                // se van a usar el mismo nombre de la variable
                
                // Este es el nombre de la variable extra q se va a dar 
                // para que pueda pedir mas elementos. A diferencia del path
                // view, este no podemos pedirle que el usuario de esa
                // informacion
                "nombrePedido": "endpoint",
                // Necesitamos un nuevo bloque para mostrar el subconjunto
                // de elementos dados
                "bloqueElemento": "nombre del bloque",
                // Va a ser la cantidad default que se pueda pedir en el caso
                // de no especificar cuando se llame a la funcion
                "cantidad": 5,
            }
        }
    ]
}
```

En el caso de tener mas de una tabla, se verificara que las claves usadas en las tablas no rompan el hecho de que sean necesarias (tengo q chequear el comportamiento de [[investigación/ciencias de la computación/lenguajes de programación/lenguaje SQL/Structured Query Language|SQL]] en casos como este)

Notemos que el groupBy, es global a la variable, por lo que la unión de todas las tablas referenciadas tienen que tener la clave del groupBy. Por otro lado, la condición es única para la tabla y siempre se aplica antes de la unión pero si el order by es distinto para ambas tablas, se aplicará cada uno por separado antes de la unión de los valores

Sobre esto ultimo, en el caso que las tablas tengan nombres distintos para las variables que se quieren ordenar, pero se busca hacer el orden en conjunto, se tendrá que usar un alias para identificarlos de la misma forma, con la estructura `clave=alias`

Ahora vamos a generar una [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]] para reemplazar la variable de pathView, esta va a tener la firma de 
```go
func GenerarPathView(view string, parametros string...) string
```

Esto nos va a permitir generar en el momento de crear el template, el path sin tener que generar una variable en el momento. Esto también elimina la necesidad de crear las referencias, por tabla, ya que para cada elemento puede llamar a la función

Esto va a estar complementado con el hecho que se va a hacer un análisis del template en si para ver que elementos se usan en cada caso, esto para evitar pedir al usuario que especifique todos los elementos 

Después voy a agregar funciones para los cuales se pueda generar el path a actualizar, eliminar y tal vez insertar