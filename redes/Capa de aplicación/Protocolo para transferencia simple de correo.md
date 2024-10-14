---
dia: 2024-05-29
aliases:
  - SMTP
tags:
  - redes/Capa-de-aplicación
  - nota/facultad
  - protocolos
---
# Definición
---
El protocolo SMPT es un sistema mucho más antiguo que [[Hypertext Transfer Protocol|HTTP]] debido a esto, el [[Protocolo|protocolo]] tiene algunas restricciones, como que todos los mensajes deben ser codificados en $7$-bit ascii

Para el envío de mensaje entre [[Servidor|servidores]], primero se establece una conexión [[Transmission Control Protocol|TCP]]. En la [[Transmission Control Protocol#Three-Way Handshake|etapa de handshake]] el cliente envía la dirección del remitente y la del destinatario