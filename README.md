# Mind Side Quest - Importer
Para este proyecto, estoy en medio de una transicion a un sistema mas especifico a mis datos. Para eso, necesito transformar mis datos a una base de datos, y en este caso seria de SQLite.

El rol de este proyecto es obtener toda esa informacion y generar la base de datos de forma automatizada

## Tablas
Vamos a especificar, en secciones, las tablas generadas como inicio del proyecto para poder referenciarlas despues

Como anotaciones en general: 
 * Se utiliza un `INTEGER` de un bit para representar un bool, pero anotare como `BOOL` ya que es mas claro
 * Se utilizara `ENUM(TYPE)` para denotar una coleccion reducida de elementos, con un comentario anotando las posibilidades
 * Se utiliza un `INTEGER` para representar una fecha, donde se utiliza UTC para encodearlas como un entero

### Referencias
---
```
 +-----------------------------------------------------------------+
 |                           Referencias                           |
 +------------------+-------------+----------+---------------------+
 |      Nombre      |    Tipo     | Nullable | Primaria/Referencia |
 +------------------+-------------+----------+---------------------+
 | num_referencia   | INTEGER     |    NO    |       PRIMARY       |
 | tipo             | ENUM(TEXTO) |    NO    |                     |
 | fecha_registrada | INTEGER     |    NO    |                     |
 +------------------+-------------+----------+---------------------+
    A    * tipo puede ser "Youtube", "Wikipedia", "Web", "Libro", "Capitulo",
    |       "DiccionarioOnline", "Paper", "Curso", "CursoTema"   
    |   
    |  +------------------------------------------------------------+
    |  |                   ReferenciasWebsite                       |
    |  +-----------------+---------+----------+---------------------+
    |  |     Nombre      |  Tipo   | Nullable | Primaria/Referencia |
    |  +-----------------+---------+----------+---------------------+
    |  | id              | INTEGER |    NO    |       PRIMARY       |
    |  | nombre_articulo | TEXT    |    NO    |                     |
    |  | nombre_pagina   | TEXT    |    NO    |                     |
    |  | fecha           | INTEGER |    SI    |                     |
    |  | url             | TEXT    |    NO    |                     |
    +--| num_referencia  | INTEGER |    NO    |     REFERENCES      |
    |  +-----------------+---------+----------+---------------------+
    |   
    |  +------------------------------------------------------------+
    |  |                  ReferenciasWikipedia                      |
    |  +-----------------+---------+----------+---------------------+
    |  |     Nombre      |  Tipo   | Nullable | Primaria/Referencia |
    |  +-----------------+---------+----------+---------------------+
    |  | nombre_articulo | TEXT    |    NO    |                     |
    |  | fecha           | INTEGER |    SI    |                     |
    |  | url             | TEXT    |    NO    |                     |
    +--| num_referencia  | INTEGER |    NO    |     REFERENCES      |
    |  +-----------------+---------+----------+---------------------+
    |
    |  +-----------------------------------------------------------+
    |  |                   ReferenciasYoutube                      |
    |  +----------------+---------+----------+---------------------+
    |  |     Nombre     |  Tipo   | Nullable | Primaria/Referencia |
    |  +----------------+---------+----------+---------------------+
    |  | nombre_video   | TEXT    |    NO    |                     |
    |  | nombre_canal   | TEXT    |    NO    |                     |
    |  | fecha_video    | INTEGER |    SI    |                     |
    |  | url            | TEXT    |    NO    |                     |
    +--| num_referencia | INTEGER |    NO    |     REFERENCES      |
    |  +----------------+---------+----------+---------------------+
    |
    |  +-----------------------------------------------------------+
    |  |                    ReferenciasLibro                       |
    |  +----------------+---------+----------+---------------------+
    |  |     Nombre     |  Tipo   | Nullable | Primaria/Referencia |
    |  +----------------+---------+----------+---------------------+
    |  | id             | INTEGER |    NO    |       PRIMARY       |
    |  | titulo         | TEXT    |    NO    |                     |
    |  | subtitulo      | TEXT    |    SI    |                     |
    |  | anio           | INTEGER |    NO    |                     |
    |  | edicion        | TEXT    |    SI    |                     |
    |  | volumen        | INTEGER |    SI    |                     |
    |  | doi            | TEXT    |    SI    |                     |   +-------------+
    |  | id_editorial   | INTEGER |    NO    |     REFERENCES      |-->| Editoriales |
    +--| num_referencia | INTEGER |    NO    |     REFERENCES      |   +-------------+
    |  +----------------+---------+----------+---------------------+                        
    |     A                                                                                 
    |     |                                                                                 
    |     +-----------------------------------------------------------+-----------------+   
    |                                                                 |                 |   
    |  +-----------------------------------------------------------+  |                 |   
    |  |                ReferenciasCapituloLibro                   |  |                 |   
    |  +----------------+---------+----------+---------------------+  |                 |   
    |  |     Nombre     |  Tipo   | Nullable | Primaria/Referencia |  |                 |   
    |  +----------------+---------+----------+---------------------+  |                 |   
    |  | id             | INTEGER |    NO    |       PRIMARY       |  |                 |   
    |  | numero         | INTEGER |    NO    |                     |  |                 |   
    |  | titulo         | TEXT    |    SI    |                     |  |                 |   
    |  | pagina_inicio  | INTEGER |    SI    |                     |  |                 |   
    |  | pagina_final   | INTEGER |    NO    |                     |  |                 |   
    |  | id_libro       | INTEGER |    NO    |     REFERENCES      |--+                 |   
    +--| num_referencia | INTEGER |    NO    |     REFERENCES      |                    |   
    |  +----------------+---------+----------+---------------------+                    |   
    |     A    * La pagina de inicio y final tiene que ser ambos NULL o ninguno         |   
    |     |                                                                             |   
    |     +-----------------------------------------------------------------------------+   
    |                                                                                   |   
    |  +-----------------------------------------------------------+                    |   
    |  |                    ReferenciasPaper                       |                    |   
    |  +----------------+---------+----------+---------------------+                    |   
    |  |     Nombre     |  Tipo   | Nullable | Primaria/Referencia |                    |   
    |  +----------------+---------+----------+---------------------+                    |   
    |  | id             | INTEGER |    NO    |       PRIMARY       |                    |   
    |  | titulo         | TEXT    |    NO    |                     |                    |   
    |  | anio           | INTEGER |    NO    |                     |                    |   
    |  | doi            | TEXT    |    SI    |                     |                    |   
    |  | url            | TEXT    |    SI    |                     |                    |   
    +--| num_referencia | INTEGER |    NO    |     REFERENCES      |                    |   
    |  +----------------+---------+----------+---------------------+                    |   
    |     A    * Se tiene que tener un doi, un url o ambos, pero no ninguno             |   
    |     |                                                                             |   
    |     +-----------------------------------------------------------------------------+   
    |                                                                                   |   
    |                                                                                   |   
    |  +-----------------------------------------------------------+                    |   
    |  |               ReferenciasDiccionarioOnline                |                    |   
    |  +----------------+---------+----------+---------------------+                    |   
    |  |     Nombre     |  Tipo   | Nullable | Primaria/Referencia |                    |   
    |  +----------------+---------+----------+---------------------+                    |   
    |  | id             | INTEGER |    NO    |       PRIMARY       |                    |   
    |  | palabra        | TEXT    |    NO    |                     |                    |   
    |  | fecha          | INTEGER |    NO    |                     |                    |   
    |  | diccionario    | TEXT    |    NO    |                     |                    |   
    |  | url            | TEXT    |    NO    |                     |   +-------------+  |   
    |  | id_editorial   | INTEGER |    NO    |     REFERENCES      |-->| Editoriales |  |   
    +--| num_referencia | INTEGER |    NO    |     REFERENCES      |   +-------------+  |   
    |  +----------------+---------+----------+---------------------+                    |   
    |                                                                                   |   
    |  +-----------------------------------------------------------+                    |   
    |  |                 ReferenciasCursoOnline                    |                    |   
    |  +----------------+---------+----------+---------------------+                    |   
    |  |     Nombre     |  Tipo   | Nullable | Primaria/Referencia |                    |   
    |  +----------------+---------+----------+---------------------+                    |   
    |  | id             | INTEGER |    NO    |       PRIMARY       |                    |   
    |  | nombre_curso   | TEXT    |    NO    |                     |                    |   
    |  | nombre_pagina  | TEXT    |    NO    |                     |                    |   
    |  | anio           | INTEGER |    NO    |                     |                    |   
    |  | url            | TEXT    |    NO    |                     |                    |   
    +--| num_referencia | INTEGER |    NO    |     REFERENCES      |                    |   
    |  +----------------+---------+----------+---------------------+                    |   
    |     A                                                                             |   
    |     |                                                                             |   
    |     +-----------------------------------------------------------+-----------------+   
    |                                                                 |                 |   
    |  +-----------------------------------------------------------+  |                 |   
    |  |                   ReferenciasTemaCurso                    |  |                 |   
    |  +----------------+---------+----------+---------------------+  |                 |   
    |  |     Nombre     |  Tipo   | Nullable | Primaria/Referencia |  |                 |   
    |  +----------------+---------+----------+---------------------+  |                 |   
    |  | id             | INTEGER |    NO    |       PRIMARY       |  |                 |   
    |  | nombre         | TEXT    |    NO    |                     |  |                 |   
    |  | capitulo       | INTEGER |    NO    |                     |  |                 |   
    |  | parte          | INTEGER |    SI    |                     |  |                 |   
    |  | id_curso       | INTEGER |    NO    |     REFERENCES      |--+                 |   
    +--| num_referencia | INTEGER |    NO    |     REFERENCES      |                    |   
       +----------------+---------+----------+---------------------+                    |   
          A                                                                             |   
          |                                                                             |   
          +-----------------------------------------------------------------------------+   
                                                                                        |   
    +-------------------------------------------------------------+                     |   
    |                   AutoresParaReferencias                    |                     |   
    +---------------+------------+----------+---------------------+                     |   
    |     Nombre    |    Tipo    | Nullable | Primaria/Referencia |                     |   
    +---------------+------------+----------+---------------------+   +-------------+   |  
    | id_autore     | INTEGER    |    NO    |     REFERENCES      |-->| Editoriales |   |  
    | tipo          | ENUM(TEXT) |    NO    |                     |   +-------------+   |  
    | id_referencia | INTEGER    |    NO    |     REFERENCES      |---------------------+   
    +---------------+------------+----------+---------------------+                  
            * tipo puede ser "Web", "Libro", "CapituloLibro", "PaperAutore", 
               "PaperEditore", "CursoOnline", "TemaProfesore"
```
