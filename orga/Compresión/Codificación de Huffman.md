---
dia: 2023-04-03
capitulo: 4
tags:
  - orga/Compresión
  - nota
---
### Definición
---
Este es un método de codificacion donde optimiza la cantidad de [[Bit de información|bits]] enteros para conseguir la [[Entropía de shannon]].

Dado una cadena de simbolos, y creamos para cada simbolo un árbol binario donde la raíz es la cantidad de veces que aparece y la hoja el simbolo correspondiente. 

Ahora se crea una lista ordenada de menor a mayor, siempre agarrando los primeros dos, creando un árbol binario donde las hojas de ese árbol son los dos árboles agarrados y la raíz es la suma de las raices de los dos árboles agarrados. Cuando se termina este proceso, se vuelve agregar ordenadamente este nuevo árbol a la lista.

Por ejemplo, si se tiene un árbol $(3, \text{'A'})$ y $(4, \text{'B'})$ el nuevo árbol va a ser $(7, (\text{'A'}, \text{'B'}))$.

Cuando se termina el proceso, es decir que en la lista solo hay un árbol, este es la representación de Huffman, donde todas las ramas que vayan para la izquierda se codifican agregando un $0$ y a la derecha agregando un $1$.