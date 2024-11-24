---
dia: 2024-07-08
etapa: ampliar
referencias:
  - "25"
tags:
  - nota/investigacion
  - investigación/animation
orden: 264
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---


## Elemento procedural
---
La idea es agarrar todo lo que vimos y reducir la necesidad de crear [[Keyframe|keyframe]], en cierto sentido, hacer una [[Reducción de dimensión|reducción de dimensiones]]  del problema y mantener lo importante

La idea para personajes, es agarrar una representación lo más simple posible del movimiento y construir, no destructivamente, sobre eso. En un juego 3D se puede crear una esfera para la colisión con el piso y otra para determinar las colisiones con el ambiente alrededor

Veamos una lista de operaciones que se pueden hacer para crear una animación de movimiento
* Rotar el modelo en la dirección de su velocidad
* Inclinar el modelo en la dirección de su aceleración
* Para correr, se puede crear un disco, el cual represente el paso que puede dar, por lo que si ese disco se agranda, el paso que puede dar es mayor ![[Representación del stride.png|300x300]] 
    * Generando dos keyframes, una para tocar el piso y otra intermedia, se puede [[Interpolación|interpolación]] y sincronizar con el disco, asegurándonos que siempre toque correctamente el piso la animación
        * Se puede [[Interpolación lineal|interpolar linealmente]] pero tiene la desventaja de no tener una [[Continuidad de las derivables|derivada continua]], por lo que sería mejor crear una [[Interpolación bicúbica|interpolación bicúbica]] que si tiene derivadas continuas, por lo que físicamente representa que tiene una velocidad continua y no tiene saltos discontinuos
    * Podemos relacionar el paso que representa el disco con la velocidad, y de esa forma crear una animación para correr
* Se puede crear un salto entre pasos, y también se puede crear una relación la velocidad y la altura máxima de cada salto
* Usar la idea de [[The Illusion of Life de Frank Thomas, Ollie Johnston#Slow In & Slow Out|slow in & slow out]] para crear movimientos realistas
* Podemos crear [[The Illusion of Life de Frank Thomas, Ollie Johnston#Secondary Action|secondary action]], al personaje de forma procedural
    * Donde podemos crear que partes del personaje tengan más o menos resistencia al movimiento que hace el cuerpo, y por lo tanto moverlos más o menos, siguiendo el principio de [[The Illusion of Life de Frank Thomas, Ollie Johnston#Follow Through & Overlapping Action|follow through & overlapping action]] 
* Se puede usar [[Ragdoll|Ragdoll]] para algunas situaciones donde es imposible determinar que se debería hacer, o una caída
    * Se puede intentar retrasar la transición a ragdoll e intentar crear animaciones dinámicas a la situación, como intentar no caer
        * Pose matching
        * Animation matching
        * Crear animaciones para situaciones especificas

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```