---
dia: 2025-08-26
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Estuve avanzando sobre lo la [[proyecto práctico/own wiki/Nota del 20 de Agosto del 2025|estructura nueva del archivo de views]], y estoy en el proceso de crear bien las [[ingeniería en informática/bdd/SQL/SQL Keywords|querys]], para manejar lo que se propuso en esa estructura

Más allá de eso, estuve pensando sobre la estructura general sobre la construcción de este proyecto en un refactor general, ya habiendo visto todo lo que es necesario para tener la aplicación que busco y solo para no olvidarme, lo que estoy planeando es tener lo siguiente
* Usar [[investigación/ciencias de la computación/lenguajes de programación/lenguaje zig/Lenguaje Zig|Zig]] como [[investigación/ciencias de la computación/lenguajes de programación/Lenguaje de programación|lenguaje]] del backend de la aplicación
    * Intentar ver la estructura
    * Buscar patrones buenos 
        * Patron para reportar errores 
            * [Video mostrando la implementación](https://youtu.be/g-bHMg6EiTg?si=nH0DN5xsoetCK_w7)
        * Patron para poder testear la aplicación sin la necesidad de una [[Graphical User Interface (GUI)|interfaz grafica]] corriendo 
            * Usar lo que usa Quake 3
* Usar [[investigación/ciencias de la computación/lenguajes de programación/lenguaje go/Lenguaje go|golang]] como lenguaje para los usuarios
    * Ver como compilar y correr ese código, en tiempo de ejecución e incluirlo como librería accesible para zig
    * Ver de no necesitar los archivos de [[Javascript Object Notation (JSON)|JSON]], sino que hacer que las estructuras de golang sea como se definen las tablas, y tal vez ver de que se pueda implementar métodos sobre ellas
* Usar [[OpenGL|OpenGL]] para la parte gráfica de la aplicación e inspirarme en [[Vim|Vim]] para establecer la forma en la cual se interactúa con el programa

