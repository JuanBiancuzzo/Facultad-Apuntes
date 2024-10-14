---
dia: 2024-08-22
tags:
  - redes/Capa-de-Enlace
  - nota/facultad
  - protocolos
aliases:
  - CSMA
---
# Definición
---
El comportamiento de los nodos en [[ALOHA]] es independientemente del resto de nodos del canal, el [[Protocolo|protocolo]] CSMA tiene dos reglas importantes para mejorar la comunicación
* Listen before Speaking
    * En la jerga de redes, se conoce como carrier sensing. Si un nodo está transmitiendo un [[Paquete|paquete]], debe esperar a que este finalice antes de enviar su propio paquete. Para esto, se introduce un tiempo de espera entre que finaliza la transmisión de otro nodo hasta que inicia la propia
* If someone else begins talking at the same time, stop talking
    * En la jerga de redes, se conoce como collision detection. Si se detecta que un nodo está transmitiendo a la vez que el propio nodo, entonces se debe cortar la transmisión y esperar un tiempo aleatorio antes de continuar el ciclo

La razón por la cual, siguiendo la primera regla, pueden ocurrir colisiones, es debido a la existencia de channel propagation delay. Dos nodos pueden transmitir a la vez por una fracción de tiempo sin darse cuenta