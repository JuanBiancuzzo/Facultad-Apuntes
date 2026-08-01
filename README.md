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
     +--| num_referencia  | INTEGER |    NO    |      REFERENCES     |
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
     +--| num_referencia  | INTEGER |    NO    |      REFERENCES     |
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
     +--| num_referencia | INTEGER |    NO    |      REFERENCES     |
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
     |  | id_editorial   | INTEGER |    NO    |      REFERENCES     |-->| Editoriales |
     +--| num_referencia | INTEGER |    NO    |      REFERENCES     |   +-------------+
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
     |  | id_libro       | INTEGER |    NO    |      REFERENCES     |--+                 |   
     +--| num_referencia | INTEGER |    NO    |      REFERENCES     |                    |   
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
     +--| num_referencia | INTEGER |    NO    |      REFERENCES     |                    |   
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
     |  | id_editorial   | INTEGER |    NO    |      REFERENCES     |-->| Editoriales |  |   
     +--| num_referencia | INTEGER |    NO    |      REFERENCES     |   +-------------+  |   
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
     +--| num_referencia | INTEGER |    NO    |      REFERENCES     |                    |   
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
     |  | id_curso       | INTEGER |    NO    |      REFERENCES     |--+                 |   
     +--| num_referencia | INTEGER |    NO    |      REFERENCES     |                    |   
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
     | id_autore     | INTEGER    |    NO    |      REFERENCES     |-->| Editoriales |   |  
     | tipo          | ENUM(TEXT) |    NO    |                     |   +-------------+   |  
     | id_referencia | INTEGER    |    NO    |      REFERENCES     |---------------------+   
     +---------------+------------+----------+---------------------+                  
             * tipo puede ser "Web", "Libro", "CapituloLibro", "PaperAutore", 
                "PaperEditore", "CursoOnline", "TemaProfesore"
```

### Colecciones
---
Las colecciones tiene su tabla, pero ademas cada elemento tiene su propia tabla o tablas especificas, por lo que subdividiremos aun mas esta descripcion luego de detallar la tabla de colecciones

```
  +--------------------------------------------------------------+                        
  |                        Colecciones                           |                        
  +----------------+------------+----------+---------------------+                        
  |     Nombre     |    Tipo    | Nullable | Primaria/Referencia |                        
  +----------------+------------+----------+---------------------+     
  | id             | INTEGER    |    NO    |       PRIMARY       |     
  | tipo           | ENUM(TEXT) |    NO    |                     |     
  | estado         | TEXT       |    NO    |                     |   +---------------+
  | id_descripcion | INTEGER    |    NO    |      REFERENCES     |-->| BloqueDeTexto |  
  +----------------+------------+----------+---------------------+   +---------------+                 
```
Donde ese `tipo` puede ser:
 * Ajedrez
 * Biblioteca
 * Bloque de matematica
 * Componentes
 * Diccionario
 * Distribuciones
 * Documentos legales
 * Estructura de datos
 * Ejercicios
 * Impresiones 3D
 * Librerias
 * Papers
 * Programas
 * Recetas

#### Ajedrez
---
```
  +------------------------------------------------------------+
  |                  MovimientosAjedrez                        |
  +-------------+-------------+----------+---------------------+
  |    Nombre   |    Tipo     | Nullable | Primaria/Referencia |
  +-------------+-------------+----------+---------------------+
  | id          | INTEGER     |    NO    |       PRIMARY       |
  | nombre      | TEXTO       |    NO    |                     |
  | tipo        | ENUM(TEXTO) |    NO    |                     |
  | inicio      | TEXTO       |    NO    |                     |
  | movimientos | INTEGER     |    NO    |                     |
  +-------------+-------------+----------+---------------------+
          * tipo puede ser "Aperturas abiertas", "Aperturas semiabierta",
             "Aperturas cerradas", "Aperturas semicerradas", "Aperturas de flanco", 
             "Aperturas irregulares", "Medio juego", "Final"
```

#### Biblioteca
---
```
  +----------------------------------------------------------------+
  |                            Libros                              |
  +---------------------+---------+----------+---------------------+
  |        Nombre       |  Tipo   | Nullable | Primaria/Referencia |
  +---------------------+---------+----------+---------------------+      +----------+
  | id                  | INTEGER |    NO    |       PRIMARY       |  +-->| Imagenes |
  | etapa               | TEXT    |    NO    |                     |  |   +----------+
  | id_cover            | INTEGER |    SI    |      REFERENCES     |--+   +---------------+
  | id_resumen          | INTEGER |    SI    |      REFERENCES     |----->| BloqueDeTexto |
  | id_libro_referencia | INTEGER |    NO    |      REFERENCES     |--+   +---------------+
  +---------------------+---------+----------+---------------------+  |   +------------------+
     A                                                                +-->| ReferenciasLibro |
     |                                                                    +------------------+
     |  +-------------------------------------------------------------------+   
     |  |                         CapitulosLibro                            | 
     |  +------------------------+---------+----------+---------------------+   
     |  |         Nombre         |  Tipo   | Nullable | Primaria/Referencia |   
     |  +------------------------+---------+----------+---------------------+      +---------------+ 
     |  | id                     | INTEGER |    NO    |       PRIMARY       |  +-->| BloqueDeTexto | 
     |  | etapa                  | TEXT    |    NO    |                     |  |   +---------------+   
     |  | id_resumen             | INTEGER |    SI    |      REFERENCES     |--+
     +--| id_libro               | INTEGER |    NO    |      REFERENCES     |      +------------------+  
        | id_capitulo_referencia | INTEGER |    NO    |      REFERENCES     |----->| ReferenciasLibro |
        +------------------------+---------+----------+---------------------+      +------------------+
```

#### Bloque de matematica
---

#### Componentes
---

#### Diccionario
---
```
  +----------------------------------------------------------------------+   
  |                            Diccionario                               |
  +---------------------------+---------+----------+---------------------+   
  |         Nombre            |  Tipo   | Nullable | Primaria/Referencia |      +---------------+ 
  +---------------------------+---------+----------+---------------------+  +-->| BloqueDeTexto |
  | id                        | INTEGER |    NO    |       PRIMARY       |  |   +---------------+
  | id_definicion             | INTEGER |    SI    |      REFERENCES     |--+   +------------------------------+  
  | id_diccionario_referencia | INTEGER |    NO    |      REFERENCES     |----->| ReferenciasDiccionarioOnline |
  +---------------------------+---------+----------+---------------------+      +------------------------------+
```

#### Distribuciones
---

#### Documentos legales
---

#### Estructura de datos
---

#### Ejercicios
---
```
  +----------------------------------------------------------+
  |                       Ejercicios                         |
  +---------------+---------+----------+---------------------+
  |     Nombre    |  Tipo   | Nullable | Primaria/Referencia |
  +---------------+---------+----------+---------------------+
  | id            | INTEGER |    NO    |       PRIMARY       |
  | nombre        | TEXT    |    SI    |                     |
  | etapa         | TEXT    |    NO    |                     |
  | id_enunciado  | INTEGER |    NO    |      REFERENCES     |--+   +---------------+
  | id_resolucion | INTEGER |    NO    |      REFERENCES     |--+-->| BloqueDeTexto |
  | id_resultado  | INTEGER |    SI    |      REFERENCES     |--+   +---------------+  
  +---------------+---------+----------+---------------------+
     A
     |  +---------------------------------------------------+      
     |  |                     Guias                         |      
     |  +--------+---------+----------+---------------------+      
     |  | Nombre |  Tipo   | Nullable | Primaria/Referencia |      
     |  +--------+---------+----------+---------------------+      
     |  | id     | INTEGER |    NO    |       PRIMARY       |      
     |  | nombre | TEXT    |    NO    |                     |      
     |  +--------+---------+----------+---------------------+      
     |     A                                                               
     |     |                                                               
     |     +---------------------------------------------------------+   
     |                                                               |   
     |  +---------------------------------------------------------+  |   
     |  |                   EjercicioPorGuia                      |  |   
     |  +--------------+---------+----------+---------------------+  |   
     |  |     Nombre   |  Tipo   | Nullable | Primaria/Referencia |  |   
     |  +--------------+---------+----------+---------------------+  |   
     |  | id_guia      | INTEGER |    NO    |      REFERENCES     |--+   
     +--| id_ejercicio | INTEGER |    NO    |      REFERENCES     |   
     |  +--------------+---------+----------+---------------------+   
     |
     |  +---------------------------------------------------+      
     |  |                 Evaluaciones                      |      
     |  +--------+---------+----------+---------------------+      
     |  | Nombre |  Tipo   | Nullable | Primaria/Referencia |      
     |  +--------+---------+----------+---------------------+      
     |  | id     | INTEGER |    NO    |       PRIMARY       |      
     |  | fecha  | INTEGER |    NO    |                     |      
     |  +--------+---------+----------+---------------------+      
     |     A                                                               
     |     |                                                               
     |     +----------------------------------------------------------+   
     |                                                                |   
     |  +----------------------------------------------------------+  |   
     |  |                 EjercicioPorEvaluacion                   |  |   
     |  +---------------+---------+----------+---------------------+  |   
     |  |     Nombre    |  Tipo   | Nullable | Primaria/Referencia |  |   
     |  +---------------+---------+----------+---------------------+  |   
     |  | id_evaluacion | INTEGER |    NO    |      REFERENCES     |--+   
     +--| id_ejercicio  | INTEGER |    NO    |      REFERENCES     |   
        +---------------+---------+----------+---------------------+   
```

#### Impresiones 3D
---

#### Librerias
---

#### Papers
---
```
  +----------------------------------------------------------------+
  |                            Papers                              |
  +---------------------+---------+----------+---------------------+
  |        Nombre       |  Tipo   | Nullable | Primaria/Referencia |
  +---------------------+---------+----------+---------------------+      +---------------+
  | id                  | INTEGER |    NO    |       PRIMARY       |  +-->| BloqueDeTexto |
  | etapa               | TEXT    |    NO    |                     |  |   +---------------+
  | id_resumen          | INTEGER |    SI    |      REFERENCES     |--+   +------------------+
  | id_paper_referencia | INTEGER |    NO    |      REFERENCES     |----->| ReferenciasPaper |
  +---------------------+---------+----------+---------------------+      +------------------+  
```

#### Programas
---

#### Recetas
---

### Facultad
---

### Temas de investigacion
---

### Notas
---

### General
---

## CST para el texto - V1
Para el texto, y como se puede ver en la tabla `BloqueDeTexto` donde tiene `texto` en tipo `BLOB`, esto es porque no se utiliza exactamente un string para representar el texto. Se utiliza un Concrete Syntax Tree (CST) que representa el texto en forma de arbol, con las consideraciones necesarias para representar un lenguaje de enmarcado como lo es Markdown

A pesar que este arbol se construya a partir de Markdown, el arbol no representa el lenguaje, sino que es una representacion inspirada en Markdown y en AsciiDoc, ya que tiene propiedades que Markdown no tiene. Se puede pensar mas como un subset de features de AsciiDoc mas que Markdown

Como es una estructura customizada a los requisitos que busco, voy a detallar ahora los nodos que tiene este arbol, sus relaciones y la forma de serializarlo

### Nodos
---
Los nodos los podemos separar en inline o no, que suele ser una la separacion habitual en el caso de este tipo de lenguajes 

Para inline, donde se omite el "inline" si aparece tambien en el otro grupo, tenemos:
 * Texto plano
 * Codigo 
 * Comentario
 * Ecuacion
 * Imagen
 * Referencia

El resto es:
 * Documento
 * Seccion
 * Parrafo
 * Header
 * Linea
 * Codigo 
 * Comentario
 * Ecuacion
 * Imagen
 * Referencia
 * Callout
 * Tabla

### Relaciones
---
Vamos a expresarlo en formado de un lenguaje formarl, ya que vi que es una buena forma de expresar el contenido de este lenguaje de enmarcado
```
start := Documento | Seccion | Parrafo | Header

# --- Documento ---
Documento              := Seccion <Header_k> <ListaDocumento_k>
                         | Parrafo <Header_k> <ListaDocumento_k>
<ListaDocumento_k>     := <Header_{1..k}> <ListaDocumento_{1..k}>
                         | <Header_{1..k}>
<ListaDocumento{i..j}> := <ListaDocumento_i> | <ListaDocumento_(i-1)> | ... | <ListaDocumento_j>
 
# --- Seccion ---
Seccion          := <ListaSeccion> 
<ListaSeccion> := <Parrafo> <ListaSeccion>
                 | <Parrafo> <Parrafo>

# --- Parrafo ---
Parrafo        := <ListaParrafo> <Break>
<Break>        := '\n'
<ListaParrafo> := <Otro> <ListaParrafo>
                 | Linea <NodoBloque> <ListaParrafo>
                 | Linea <NodoBloque>
                 | <NodoBloque>
                 | Linea

<NodoBloque> := Ecuacion | Comentario | BloqueDeCodigo | Imagen | Tabla | Referencia | Callout

# --- Header --- 
Header          := <Header_1> | <Header_2> | <Header_3> | <Header_4> | <Header_5> | <Header_6>
<Header_6>      := 6 LineaInline Seccion
                  | 6 LineaInline Parrafo
                  | 6 LineaInline <Break>
<Header_k>      := k LineaInline Seccion <Header_{(k-1)..6}>
                  | <NivelHeader> LineaInline Seccion
                  | <NivelHeader> LineaInline Parrafo <Header_{(k-1)..6}>
                  | <NivelHeader> LineaInline Parrafo 
                  | <NivelHeader> LineaInline <Break> <Header_{(k-1)..6}>
                  | <NivelHeader> LineaInline <Break>
<Header_{i..j}> := <Header_i> | <Header_(i-1)> | ... | <Header_j>

# --- Linea ---
Linea        := <ListaLinea>
<ListaLinea> := <NodoInlineSeparable> <ListaLinea>
               | TextoPlano <NodoInlineSeparable> <ListaLinea>
               | TextoPlano <NodoInlineSeparable>
               | <NodoInlineSeparable>
               | TextoPlano

<NodoInline>          := <NodoInlineSeparable> | TextoPlano
<NodoInlineSeparable> := EcuacionInline | ComentarioInline | CodigoInline | ImagenInline | Referencia

# --- Textos ---
TextoPlano     := <Modificador> cadena_de_caracteres
<Modificador>  := <ModBold> <ModItalics> <ModTachada> <ModResaltado> <ModPosicion>
<ModBold>      := True | False
<ModItalics>   := True | False
<ModTachada>   := True | False
<ModResaltado> := True | False
<ModPosicion>  := <ModInfra> False | False <ModSupra>
<ModInfra>     := True | False
<ModSupra>     := True | False

EcuacionInline   := cadena_de_caracteres
ComentarioInline := cadena_de_caracteres
CodigoInline     := cadena_de_caracteres

# --- Referencia Inline ---

# --- Imagen Inline ---
```
Para simplificar la notacion, se utiliza valores genericos utilizando la notacion `<Nombre_k>`, donde `k` es un entero.

Se entiende como `cadena_de_caracteres`, a una lista de caracteres, sin caracteres especiales como `\n`, `\0` o `\t`.

### Serializacion
---

