---
dia: 2025-03-01
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Introducción
  - nota/facultad
vinculoFacultad:
  - tema: Introduccion
    capitulo: "0"
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta clasificación de [[Middleware|middleware]] ofrece
* Funciona como un sistema de mensajería entre aquellas aplicaciones que utilizan el middleware
* Pueden enviarse [[Paquete|mensajes]] bajo cierto 'tópico' para que aquellos interesados lo reciban 
    * Modo [[Bus|information bus]]
    * Similar al [[Patrón de diseño (design pattern)|patrón de diseño]] [[Patrón de diseño observer|observer]]
    * No necesariamente se respeta el orden de los mensajes enviados
* Pueden enviarse mensajes con un destinatario definido
    * Modo [[Queue|queue]]
    * Se respeta el orden de los mensajes enviados

![[ingeniería en informática/distribuidos/Introduccion/img/Message Oriented Middleware.png]]
