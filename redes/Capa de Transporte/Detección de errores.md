---
dia: 2024-06-02
materia: redes
capitulo: 3
---
### Definición
---
Es un mecanismo para que el receptor de [[Paquete|paquetes]] pueda determinar si este fue recibido correctamente. Una posible implementación de esto sería la utilización de un nuevo campo en el paquete, el checksum field

El checksum se utiliza para determinar si los bits dentro del segmento fueron alterador. Desde el lado del remitente, se realiza el complemento a uno de la suma de todas las palabras de 16 bits en el segmento, dando la vuelta en caso de un overflow. Este valor se introduce en el campo de checksum. Si el segmento llega correctamente, entonces la suma desde el lado del receptor debe tener los 16 bits en 1. Por lo que sabremos si hubo alguna alteración durante el envío

Si bien los protocolos de [[Capa de enlace|capa de link]] implementan verificación de errores, no tenemos garantías de que todos los links lo hicieron. Además, el error puede haber ocurrido cuando el segmento se almacenó en la memoria del router
