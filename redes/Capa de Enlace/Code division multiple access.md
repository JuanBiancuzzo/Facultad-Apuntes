---
dia: 2024-08-22
tags:
  - redes/Capa-de-Enlace
  - nota/facultad
  - redes/Capa-Física-Inalámbrica
  - protocolos/protocolo-de-internet
aliases:
  - CDMA
---
# Definición
---
El [[Protocolo|protocolo]] code division multiple access (CDMA) pertenece a la familia de protocolos de [[Partición|partición]] de canales, prevalece en las redes inalámbricas [[Local Area Network|LAN]] y las tecnologías de celular

En este protocolo, cada byte multiplicado por una [[Señal|señal]] (el código) antes de ser enviada. La señal varía a una tasa mucho más rápida que la de la secuencia original de bits, (conocida como chipping rate)

Representando el bit $0$ con un valor de $-1$, y el bit $1$ con un valor de $1$, el protocolo funciona bajo la suposición de que las interferencias son aditivas. Si tres señales transmiten un $1$, y una señal transmite un $-1$, la señal resultante será de $2$. En la realidad, las señales se atenúan y puede ser difícil de alcanzar los escenarios mostrados

Sorprendentemente, si se seleccionan los códigos de entrada de forma cuidadosa, el receptor puede recuperar los cuatro valores enviados a partir de la señal resultante