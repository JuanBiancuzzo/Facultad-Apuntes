---
dia: 2024-11-27
estado: Sin empezar
orden: 577
tags:
  - índice
  - investigación/ciencias-de-la-computación/paradigmas-de-programación
  - nota/investigacion
referencias:
  - "650"
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarSuperTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a investigar varios paradigmas de programación para poder entender sus beneficios y sus consecuencias, para cuando desarrollemos

## Resumen
---
Se denominan paradigmas de programación a las formas de clasificar los [[Lenguaje de programación|lenguajes de programación]] en función de sus características. Los idiomas se pueden clasificar en múltiples paradigmas

Algunos paradigmas se ocupan principalmente de las implicancias para el modelo de ejecución del lenguaje, como permitir efectos secundarios o si la secuencia de operaciones está definida por el modelo de ejecución. Otros paradigmas se refieren principalmente a la forma en que se organiza el código, como agrupar un código en unidades junto con el estado que modifica el código. Sin embargo, otros se preocupan principalmente por el estilo de la sintaxis y la gramática <sup><a href="#ref-650" style="color: inherit; text-decoration: none;">[650]</a></sup> 

Los paradigmas de programación comunes incluyen
* Imperativo en el que el programador instruye a la máquina cómo cambiar su estado
    * Procedimental
    * Orientado a objetos
* Declarativo en el que el programador simplemente declara las propiedades del resultado deseado, pero no cómo calcularlo
    * Funcional

## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarTemaInvestigacion", { indice: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/investigacion/biblioIndice', { indice: dv.current() });
```