---
dia: 2024-08-22
tags:
  - redes/Capa-de-Enlace
  - nota/facultad
aliases:
  - Checksum
---
### Definición
---
El checksum se utiliza para determinar si los bits dentro del [[Paquete|paquete]] fueron alterador. Desde el lado del remitente, se realiza el complemento a uno de la suma de todas las palabras de 16 bits en el segmento, dando la vuelta en caso de un [[Overflow|overflow]]. Este valor se introduce en el campo de checksum. Si el paquete llega correctamente, entonces la suma desde el lado del receptor debe tener los 16 bits en 1. Por lo que sabremos si hubo alguna alteración durante el envío