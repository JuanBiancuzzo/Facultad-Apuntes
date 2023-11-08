---
dia: 2023-11-08
materia: sisop
capitulo: 6
---
### Definición
---
Esta es una de las estructuras almacenadas en el disco más importantes. Casi todos los [[File system|sistemas de archivos]] [[Unix|unix-like]] son así. Su nombre, probablemente provenga de los viejos sistemas [[Unix]] en los que estos se almacenaban en un arreglo, y este arreglo estaba indexado de forma de como acceder a un inodo en particular.

Un inodo simplemente es referido por un número llamado `inumbre` que sería lo que hemos llamado el nombre subyacente en el disco de un archivo. En este sistema de archivos y en varios otros, dado un inumber se puede saber directamente en que parte del disco se encuentra el inodo correspondiente

![[Inode table.png]]

Para leer el inodo número $32$, el sistema de archivos debe
1. Calcular el offset en la regio de inodos `32 * sizeof(inode) = 81922` 
2. Sumarlo a la dirección inicial de las inode table en el disco o sea $12 ~ Kb + 8192 ~ b$
3. Llegar a la dirección en el disco deseada que es la $20 ~ Kb$