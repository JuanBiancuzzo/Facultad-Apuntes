---
dia: 2024-03-19
materia: redes
capitulo: 2
---
### Definición
---
Este [[Protocolo|protocolo]]
* Esta implementado sobre [[Transmission Control Protocol (TCP)|Transmission Control Protocol (TCP)]]
* Tiene la [[Arquitectura cliente servidor|arquitectura cliente-servidor]]
* Tiene un request y una response. 
	* El request es de tamaño variable
	* El response: códigos
		* 200 ok
		* 300 es una redirección
		* 400 error del servidor
		* 500 error del cliente
* Es de texto plano
* [[Puerto|Puerto]] 80

Disertación de la arquitectura REST -> Datazo cap 2/3

Existen 3 [[Request For Comments (RFC)|Request For Comments (RFC)]]
* 1945
* 7230
* 7540

```dataviewjs
const lista = "Hola tanto tiempo".split(" ");
dv.list(lista);
```