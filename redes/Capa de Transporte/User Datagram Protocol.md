---
dia: 2024-03-19
materia: redes
capitulo: 3
aliases:
  - UDP
---
### Definición
---



#### Socket programming 
---
Para poder utilizar UDP, debemos añadir la [[Internet Protocol Address|dirección]] y el puerto de destino al paquete antes de enviarlo a través del [[Socket|socket]]. Este viaje a través de la red y llegará a destino sin ningún tipo de seguridad. Cuando este llega a destino, este inspeccionará sus contenidos y tomará la acción correcta

Cuando se crea un socket, se asocia a un identificador conocido como port number, Al enviar un [[Paquete|paquete]], la dirección y el puerto del emisor también será aclarada en el mismo. Esto permite al receptor del paquete poder comunicarse con el emisor