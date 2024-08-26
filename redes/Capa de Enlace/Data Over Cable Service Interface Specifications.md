---
dia: 2024-08-23
tags:
  - redes/Capa-de-Enlace
  - nota/facultad
aliases:
  - DOCSIS
---
### Definición
---
Recordemos que una cable access [[Red|network]] típicamente consiste en miles de residential cable modems conectados a un único cable modem termination system (CMTS). DOCSIS utiliza [[Frequency division multiplexing|FDM]] para dividir el downstream (con el CMTS como único remitente) y el upstream. Debido a que en el downstream hay un único remitente, no es necesario prevenir colisiones

Para el caso del upstream, cada canal se divide con [[Time division multiplexing|TDM]] en intervalos de tiempo, cada uno conteniendo mini-slots mediante los cuales los modems particulares pueden transmitir al CMTS. En el downstream el CMTC envía mensajes de control conocidos como MAP que especifican que modem puede transmitir en cada determinado momento

Para que el CMTC conozca qué modems quieren enviar [[Información|información]], estos envían mini-slot-request frames al CMTC a través de intervalos especiales dedicados a este propósito. Para compartir estos intervalos especiales, se utiliza un random access protocol. Debido a que no hay confirmación de recibo, los requests son reenviados si no se recibió una respuesta en el tiempo cercano

Cuando hay poco tráfico en el upstream channel, los modems pueden transmitir data frames a través de los slots asignados para los request frames