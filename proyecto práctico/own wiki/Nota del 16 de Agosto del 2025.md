---
dia: 2025-08-16
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
En cuanto al [[investigación/ciencias de la computación/compilador/parser/Parser|parseo]] de los archivos de [[investigación/ciencias de la computación/lenguaje de marcado/Markdown|markdown]], pude hacer que se guarden en un formato [[Binary JSON (BSON)|BSON]], todavía me falta poder guardar tablas, y los wiki links, pero es un progreso. Por ahora voy a intentar seguir con el resto, y después volver a eso. También podría implementar de $0$ el parser y de esa forma ahorrarme el hecho de los pasos de parseo y después de identificación pero eso ya veremos más adelante

Ahora quiero enfocarme en ver como representar las views, que tienen que tener un nombre, que tablas necesitan (completas o en subconjuntos), y un template para ver con como se va a mostrar. El mismo sistema le va a pasar el contenido pedido en un mapa de clave valor para poder acceder a esa información y esa única información

Muy posiblemente va a ser un mapa de [[ingeniería en informática/algo 1/Punteros/String|string]] a any, ya que todavía nuestro sistema no tiene como tal la información necesaria para generar las estructuras en tiempo de ejecución. Esto posiblemente lo podamos solucionar, generando código en tiempo de ejecución e incluyendo todo este código como una librería que se vincula después de haberse generado el código, pero esto es un tema para más adelante

