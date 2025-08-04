---
dia: 2025-03-05
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Fundamentos-de-Sistemas-Distribuidos
  - nota/facultad
aliases:
  - Patrón de mensajería publisher-subscriber#Fanout
  - Patrón de mensajería routing#Routing
  - Patrón de mensajería Topic#Topic
vinculoFacultad:
  - "[[ingeniería en informática/distribuidos/Fundamentos de Sistemas Distribuidos/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este patrón de mensajería es similar al [[Patrón de mensajería producer-consumer|patrón producer-consumer]] donde no es necesario usar  los [[Socket|sockets]] `push`/`pull` para marcar el rol de cada extremo

![[Patrón de mensajería publisher-subscriber.png]]

## En ZeroMQ
---
El publisher publica un mensaje con el patrón `id field1 field2 ... fieldN`, el subscriber se registra a los [[Evento#En ciencia de la computación|eventos]] que desea recibir usando el `id` del evento

## En RabbitMQ
---
En RabbitMQ utiliza este padrón con diferentes niveles de especificidad

### Fanout
---
El publisher manda un mensaje del tipo fanout, el cual tiene la misma idea de repartir a varios subscribers. Los subscribers usan colas anónimas las cuales son bindeadas al publisher evitando así eso manejo de identificadores

Donde el mensaje del tipo fanout es realizar un [[Topología de comunicación#^broadcast|broadcast]] de todos los mensajes recibidos a todas las colas conocidas

### Routing
---
El publisher envía un mensaje del tipo direct con un `routing_key`. El subscriber se bindea a una cola usando esa `routing_key` para recibir los mensajes

Donde el mensaje del tipo permite redirigir mensajes con una `routing_key` especifica a aquellas colas que se encuentran bindeadas a la misma

### Topic
---
Es un caso especifico de Routing donde el mensaje es de tipo topic y la `routing_key` puede tener patrones de búsqueda usando `*` y `#` para sustituir una, o una y más palabras respectivamente