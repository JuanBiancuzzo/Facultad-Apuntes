---
dia: 2025-08-06
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Estuve avanzando con el cargado de los datos, especialmente creando una estrategia para liderar con las dependencias que se generan al intentar cargar estos datos

La estrategia, sabiendo que conozco todas las tablas que se tienen que generar y sus relaciones, es crear tablas sin ningún tipo de `NOT NULL` o `FOREIGN KEY`, para evitar inicialmente problemas al cargar datos incompletos. Luego usando $2$ tablas auxiliares, ir cargando los datos sin ningún tipo de dependencia alguna (liberándome así de la mayor cantidad de memoria posible) y guardar un hash de la información para ser referenciada por algún otro componente dependiente de este. Finalmente, modificar las tablas para volver a tener `NOT NULL` o `FOREIGN KEY`, y droppear las tablas auxiliares

También estuve preparando para cargar la información en sí misma de los archivos, es decir el texto en markdown de estos. Para esto estoy usando [mongoDB](https://www.mongodb.com/) para poder guardar datos no estructurados, y usando [treesitter](https://tree-sitter.github.io/tree-sitter/index.html) para parsear y establecer el [[Abstract Syntax Tree (AST)|Abstract Syntax Tree]]

La intención es que toda esta información que se esta guardando, actualmente codeada por mi, pueda ser especificada en un archivo, donde muestre las dependencias, los nombres de los parámetros y sus tipos de datos (tal vez ver si puedo crear un [[Tree-sitter Grammar|grammar]] para esto, para hacerme la vida más fácil al [[investigación/ciencias de la computación/compilador/parser/Parser|parsearlo]])

Actualmente, además de esas dos partes importante, estoy trabajando en una forma de visualizar toda la información que tenemos. Con la intención de tener otro archivo donde se definan las "views", con esto me refiero a una forma de recorrer el árbol de información que se esta creando

Por ejemplo, ahora mismo tenemos 5 categoría, Facultad, Cursos, Investigación, Proyectos y Colecciones. Cada una tiene sus subcarpetas, Facultad tiene las carreras, los Cursos tienen sus respectivos cursos online y presenciales, Investigación tiene sus temas de investigación, etc. Por lo tanto, una forma de recorrer este árbol es de esa forma, de arriba hacia abajo, como una estructura de carpetas, pero no es necesariamente la única forma de verlo y eso es lo que quiero explorar con esta forma de visualizar los datos

