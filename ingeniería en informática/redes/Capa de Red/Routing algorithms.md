---
dia: 2024-08-02
tags:
  - ingeniería-en-informática/redes/Capa-de-Red
  - nota/facultad
aliases:
  - Algoritmo de ruteo
---
# Definición
---
El objetivo de un [[Algoritmo|algoritmo]] de ruteo es el de determinar el camino que minimice el costo entre remitentes y receptores. Se puede utilizar un [[Grafo|grafo]] para formular el problema, donde los nodos serán los [[Router|routers]] y las aristas serán los enlaces entre los routers. Cada enlace tendrá un costo asociado a múltiples factores, como el largo del enlace, la velocidad del mismo, el costo monetario de utilizarlo, etc. Diremos que dos nodos son vecinos si existe una arista directa que los une. Notemos que si todas las aristas tienen el mismo costo, entonces el camino más corto se transforma en el camino más eficiente

## Clasificación
---
Los algoritmos de ruteo se pueden clasificar entre
* [[Algoritmo de ruteo centralizado|Algoritmo centralizado]]
* [[Algoritmo de ruteo descentralizado|Algoritmo descentralizado]]

Una segunda forma de clasificarlo es entre
* [[Algoritmo de ruteo estático|Algoritmo estático]]
* [[Algoritmo de ruteo dinámico|Algoritmo dinámico]]

Por último, podremos clasificar los algoritmos entre
* [[Algoritmo de ruteo load-sensitive|Algoritmos load-sensitive]]
* [[Algoritmo de ruteo load-insensitive|Algoritmos load-insensitive]]
