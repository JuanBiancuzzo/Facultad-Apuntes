---
dia: 2024-07-08
etapa: terminado
referencias:
  - "26"
tags:
  - nota/investigacion
  - investigación/animation
  - investigación/game-engine/Animation-Engine
aliases:
  - Procedural pose animation
orden: 226
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se propone desacoplar las animaciones del [[Skeleton for animation (Esquelo para animar)|rig]] que esta siendo aplicado, esto se logra poniendo un rig simplificado el cual debería conservar todas las propiedades de la animación real

La intención es que se puede aplicar keyframes a este nuevo rig, o modificar su movimiento, y este modificará el rig que esta por debajo. Esto nos va a permitir crear una animación y variaciones intercambiables y combinables, para un solo rig (el rig externo) y aplicarlo a cualquier rig que tenga la misma estructura física

>[!quote]
>The technique for converting animation on any rig into a set of [[Inverse kinematics|IK]] chains, application of context aware adjustments to these chains and conversion of result to any other rig, runtime or offline<sup><a href="#ref-26" style="color: inherit; text-decoration: none;">[26]</a></sup> 

Se propone usar reglas para controlar el rig externo, y de esta forma poder afectar (con o sin parámetros) al rig debajo. Ejemplos pueden ser
* Llevar algo en una mano, donde depende del peso y la fuerza del personaje, el como afecta su movimiento
* Llevar una espada y escudo, o nada
* El cansancio, haciendo que vaya más lento o más agachado
* Una lesión, haciendo que tenga que caminar distinto
* La velocidad de caminar o correr
* Navegación de terreno y esquivar obstáculos 

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```