---
dia: 2024-04-14
materia: redes
capitulo: 3
---
### Definición
---
### Sockets
---
* que es un socket
	* es una interfaz entre las aplicaciones y la red
	* interfaz de programación
	* identificador único, file descript
* para que se usa un socket
	* puerta de entrada a la red
* hay distintos tipos de sockets
	* tcp
	* udp
* Un proceso puede tener más de un socket
	* se usa mediante

sockets tcp

| Servidor                   |                                                       | Cliente  |
| -------------------------- | ----------------------------------------------------- | -------- |
| Socket                     |                                                       |          |
| bindea (puerto con una ip) |                                                       |          |
| listen                     |                                                       |          |
| acepta                     |                                                       | socket   |
| \|   ------                | <-- se establece una conección three way handshake -> | connecta |
| v-- recv                   | <-   cliente manda info ---                           | send     |
| send  --^                  | -- enviando data al cliente -->                       | recv     |
| recv                       | <- cliente manda mensaje de close                     | close    |
| close                      |                                                       |          |

sockets udp

| Servidor                   |              | Cliente                    |
| -------------------------- | ------------ | -------------------------- |
| Socket                     |              | socket                     |
| bindea (puerto con una ip) |              | bindea (puerto con una ip) |
| recvfrom                   |              | V                          |
| (wait for data)            |              | V                          |
| V <--                      | <-- request  | sendto                     |
| (procesar request)         |              | V                          |
| sendto                     | response --> | recvfrom                   |
