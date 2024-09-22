---
dia: 2024-09-20
tags:
  - primer-proyecto-de-robótica-auto-remoto
  - nota/proyecto
---
# Progreso
---
Las dos partes restantes del código son sobre como relacionar la velocidad de las ruedas con el delay, y como transformar las señales del control infrarrojo a velocidades

Empezando por ese último, y para resolverlo necesitamos entender que información vamos a recibir y que información tenemos que dar. Vamos a recibir una de las siguientes  $5$ acciones 
1. Aumentar la velocidad
2. Reducir la velocidad
3. Doblar hacia la izquierda
4. Doblar hacia la derecha
5. Frenar

Con esas $5$ acciones, debemos dar a que velocidad van las ruedas de los autos. Como las velocidades depende de la velocidad anterior, vamos a ir modificando esas velocidades en vez de dar un resultado desde $0$

