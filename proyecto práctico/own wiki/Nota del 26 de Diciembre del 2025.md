---
dia: 2025-12-26
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Habiendo implementado una idea general que se planteó el otro [[proyecto práctico/own wiki/Nota del 21 de Diciembre del 2025|día]], estoy viendo problemas y una nueva arquitectura para todo el programa

Tendremos un paquete que representan el núcleo del programa, incluyendo
* El sistema de view
* La api del usuario
* Todos los sistemas necesarios para crear este programa

Por otro lado tendremos dos ejecutables, el primero será el "servidor", donde este ejecuta el loop del programa, y orquestra todos los sistemas del programa. Por otro lado esta el "cliente" que va a ser un ejecutable diseñado por nosotros, pero que busca la biblioteca dada por el usuario

