---
dia: 2025-08-15
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Hoy tengo varios pensamientos sobre el proyecto, de como se debería transformar el proyecto para que pueda ser una aplicación local, como hacer el editor y como visualizar la información según un archivo de configuración

## Idea para volver todo localmente
---
Sigo avanzando con el parseo de markdown, ya casi lo termino, y lo puedo subir a [[MongoDB|MongoDB]]. Lo que estaba pensando era que para el futuro de esta aplicación, no tiene sentido tener $2$ [[ingeniería en informática/bdd/General/Base de datos|bases de datos]], como servidores, al mismo tiempo que la aplicación, por lo que propondría como solución a esto es usar [[SQLite|SQLite]] como reemplazo de [[MySQL|MySQL]] y para Mongo, guardar en archivos binarios usando [[Binary JSON (BSON)|BSON]], haciendo un sistema rápido para abrirlos y obtener su información, para poder tener todo local

## Mostrar Contendio
---
Por otro lado, estoy intentando entender como hacer un editor de texto, parecido a obsidian donde uno esta editando markdown, y al mismo tiempo visualizando como debería. También esto tengo que incorporarlo en la estructura de un [[ingeniería en informática/discreta/Grafos/Árbol|árbol]] donde tengo todos los elementos del archivo [[investigación/ciencias de la computación/lenguaje de marcado/Markdown|Markdown]]

Las ideas que tengo, es crear la estructura Cursor, y hacer una interfaz que tengan que cumplir todos los elementos de la estructura

``` go
type Cursor struct {
    PosicionX int
    PosicionY int
    NodoAcutal NodoEditable    
}

type NodoEditable interface {
    // Negativo es hacia abajo
    MoverVerticalmente(cursor *Cursor, cantidad int); 
    
    // Negativo es hacia la izquierda
    MoverHorizontal(cursor *Cursor, cantidad int); 
}
```

Por lo tanto, podía hacer que esa [[ingeniería en informática/taller/Sintaxis/Interfaz|interfaz]] tenga todas las acciones que podría hacer el usuario al texto y de esa forma tener un archivo de Markdown que se va modificando por deltas de acciones y no teniendo que parsear cada vez que se aplica una modificación al texto

Ahora yéndome totalmente a algo menos realista para hacerse en poco tiempo, sería que pudiera hacer todas las acciones que tiene [[Vim|vim]], donde todas las acciones son reversibles, y teniendo un árbol de modificaciones, deberíamos ser capaz de volver a cualquier estado que se tuvo previamente

### Resumen
---
De esta forma, y en forma de resumen, tendríamos
* Un árbol representativo del texto sin que se esta escribiendo
* Un cursor que representa en que posición esta el usuario
* Una estructura que describa la acción 
    * Las acciones como tal deberían ser reversibles, por lo tanto la estructura debería tener un [[Método|método]] que sea invertir, y que devuelva otra acción que revierta esa acción
* Una interfaz que en resumen ejemplifica dado el árbol de texto, el cursor y una acción, modifique el árbol y el cursor, al nuevo estado dado esa acción
    * Tenemos que hacer pruebas que si se hace una modificación, dado por una acción, y después se hace su opuesto, debería volver a como estaba antes
* Un buffer como una cola de las acciones que quiere ejecutar el usuario
* Un árbol de acciones hechas por el usuario
    * Se representa con un árbol ya que si el usuario "vuelve" para atrás y hace nuevas acciones, se puede pensar que son dos ramas de un árbol, donde el punto que "volvió" el nodo que tiene esas dos ramas
    * El volver hacia atrás, es la única acción que no se registra en el árbol ya que representa ir a un nodo previo en ese árbol

Por último, pero cabe aclarar, que cada nodo tiene que ser renderizable a Markdown como [[investigación/ciencias de la computación/lenguaje de marcado/Lenguaje de marcado de hipertexto|HTML]], el primero va a ser por si el usuario finalmente quiere exportar sus archivos, y el segundo para poder mostrar por pantalla el contenido

## Visualización
---
Mi intención sería hacer que se pueda tener un array de "views", estas views tienen como requisito una o varias tablas (en la cuales se puede limitar los valores obtenidos aka agregar el [[ingeniería en informática/bdd/SQL/Sentencia WHERE|where]] en la query), y el template a usar para tener esa información

Lo ideal sería hacer un editor para crear estas views, pero actualmente las tendré que hacer yo a mano, sin ningún tipo de verificación

Algo también interesante, podría plantear una forma programática de generar estas views, y en el futuro poder permitir que el usuario las genere de esta forma también en el caso de que quiera hacerlo