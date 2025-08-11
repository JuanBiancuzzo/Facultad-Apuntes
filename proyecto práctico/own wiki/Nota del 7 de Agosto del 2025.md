---
dia: 2025-08-07
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Ayer pude avanzar con la idea de visualización, aunque por ahora es puramente guiada por mis datos y para nada de idea general. Aunque se puede ir viendo una cierta estructura de árbol dada por mis datos. Tal vez el usuario puede definir que árbol se muestra

Ya que todavía no tengo los datos de los archivo como tal, en mongoDB, y por lo tanto no puedo avanzar con su visualización, voy a intentar avanzar por el lado de cargar esos datos. Para eso no solo necesito parsear los datos, sino que también estaría bueno generalizar la idea de las dependencias ya que el sistema actual no permite cargar los datos actuales. Por lo que voy a hacer lo que mencioné ayer, con tablas auxiliares

El proceso va a ser:
* Registramos todas las tablas, y las ponemos en una lista, con el tipo de tabla que son 
* Finalizar el proceso de registración de nuevas tablas
    * Crear las dos tablas auxiliares en MySQL
    * Crean las tablas sin restricciones (en el caso de que existan, se elimina y se crea de nuevo)
* Se ingresa información y se va actualizando las tablas de ser necesario
* Se actualizan las tablas con las restricciones necesarias

