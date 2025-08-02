---
dia: 2024-08-26
tags:
  - carrera/ingeniería-electrónica/redes/Capa-Física-Inalámbrica
  - carrera/ingeniería-en-informática/redes/Capa-Física-Inalámbrica
  - nota/facultad
aliases:
  - Carrier Sense Multiple Access con prevención de colisiones
  - CSMA con prevención de colisiones
  - CSMA with collision avoidance
  - CSMA/CA
  - Request to Send#^RTS
  - RTS#^RTS
  - Clear to Send#^CTS
  - CTS#^CTS
---
# Definición
---
Este difiere del [[Protocolo|protocolo]] de [[Ethernet]] [[Carrier Sense Multiple Access with collision detection|CSMA/CD]] en algunos aspectos. En primer lugar, en lugar de collision detection, [[Wireless Fidelity|802.11]] utiliza collision avoidance. En segundo lugar, 802.11 utiliza una técnica de [[Capa de Enlace|capa de enlace]] de [[Protocolo de entrega confiable|acknowledges/retransmisiones (ARQ)]]

Hay dos razones principales por las cuales, 802.11 no implementa collision detection
* La habilidad de detectar colisiones requiere de la habilidad de enviar y recibir al mismo tiempo. Esto es muy difícil para las redes inalámbricas debido a que la [[Señal|señal]] recibida es mucho menor de la señal emitida
* Incluso si el adaptador pudiese enviar y recibir al mismo tiempo, el adaptador podría incluso no detectar colisiones debido a los problemas ya mencionados, [[Carrier Sense Multiple Access with collision avoidance#Tratando con terminales ocultos|hidden terminal problem]] y fading

Una vez que una estación comienza a transmitir, lo transmite completo. Esto puede ocasionar que, en situaciones con muchas colisiones, se reduzca significativamente el rendimiento del protocolo. Luego, el protocolo buscara evitar a toda costa las colisiones

Si un dispositivo quiere enviar un [[Frame|frame]], entonces escuchara el canal. Si no hay nadie transmitiendo, lo transmite. Si hay alguien transmitiendo, elige un valor aleatorio de backoff utilizando [[Binary exponential backoff|binary exponential backoff]] y comienza la cuenta regresiva (contando únicamente cuando el canal está vacío luego del SIFS). Una vez que la cuenta finaliza, envía el frame

Cuando una estación recibe un [[Paquete|paquete]] completo, espera un pequeño periodo de tiempo llamado Short Inter-Frame Spacing (SIFS) y luego reenvía un [[Protocolo de entrega confiable|ACK]]. Si el remitente no recibe el ACK en un periodo determinado, entonces entra en la siguiente etapa de exponential backoff y elige un valor aleatorio mayor para el intervalo

## Tratando con terminales ocultos
---
El protocolo incluye formas de manejar con [[Terminal oculto|terminales ocultos]]. Para evitar este problema, el protocolo define la utilización de un pequeño frame de control 
* Request to Send (RTS) ^RTS
* Clear to Send (CTS) ^CTS

Cuando un dispositivo quiere enviar información, primero envía un frame RTS al AP indicando el tiempo total requerido para la transmisión (tanto de los datos como del ACK). Cuando el AP lo recibe, reenvía un frame CTS. Este le indica al dispositivo que puede enviar el paquete, y al resto de dispositivos que deben esperar un tiempo determinado

Esto soluciona el problema de la terminal oculta, y limita las colisiones a los frames RTS y CTS, que son cortos. Por otro lado, introduce retrasos y consume recursos del canal. Debido a esto, solo es utilizado para el envío de paquetes largos. En muchas situaciones, incluso no es utilizado

### Point-to-point link
---
Si dos nodos tienen antenas direccionales, pueden apuntar las antenas entre sí y utilizar para una comunicación barata, incluso a grandes distancias

## Frame
---
Aunque comparte muchas similitudes con el [[Ethernet#Estructura|Ethernet frame]], tiene campos específicos para el uso de enlaces inalámbricos

### Payload y campo CRC
---
El payload de frame contiene el [[Paquete|datagrama]] de [[Internet Protocol Address|IP]] o un paquete [[Address Resolution Protocol|ARP]]. Típicamente, tiene una longitud menor a 1500 bytes. Al igual que el Ethernet frame, contiene un 32-bit [[Cyclic Redundancy Check|cyclic redundancy check (CRC)]]

### Campos de dirección
---
A diferencia de [[Ethernet|Ethernet]], se tienen cuatro [[Media Access Control Address|direcciones MAC]]. La primera dirección es la de la estación inalámbrica que recibe el frame. La segunda reacción es la de la estación que envía el frame

La tercera dirección indica la dirección MAC del [[Router|router]] al cual se le quiere enviar el paquete, una vez llegado a la estación. Recordemos que la [[(BBS)|BBS]] es parte de una [[Subnetting|subnet]] que se conecta con otras para subnets a través de routers. Los routers no conocen la estaciones base intermedias entre el [[Capa física inalámbrica#^wireless-host|host]] y ellos, ya que estas no utilizan IP

La cuarta dirección se utiliza cuando el [[Access Point (AP)|AP]] le envía frames a otros en un modo centralizado, pero no nos centraremos en esta infraestructura

### Número de secuencia, duración, campos de control
---
Debido a la existencia de acknowledgments, los frames deben contener un número de secuencia para detectar aquellos paquetes repetidos

El campo de duration se utiliza para indicar la duración de la transmisión que queremos solicitar, a través de los frames [[Carrier Sense Multiple Access with collision avoidance#^RTS|RTS]] y [[Carrier Sense Multiple Access with collision avoidance#^CTS|CTS]]

Finalmente, tiene un número de campos de control, los más importantes son
* `type` y `subtype` se utilizan para distinguir entre association, RTS, CST, ACK, y los data frames.
* `to` y `from` se utilizan para definir el significado de los distintos campos de address.
* `WEP` se utiliza para indicar si se utilizó encriptación o no

### Rate Adaptation
---
Como vimos anteriormente, las diferentes técnicas de modulación pueden ser apropiadas para diferentes escenarios de [[Signal to noise|SNR]]. Si se pierde un paquete, entonces se reduce la tasa de transmisión, pero si se envían correctamente diez paquetes seguidos, entonces esta se aumenta

Esta técnica utiliza la misma tecnología de probing que utiliza el [[Control de congestión de Transmission Control Protocol|control de congestión de TCP]]

### Manejo de energía
---
La [[Energía|energía]] es un recurso preciado en los dispositivos móviles, por lo que 802.11 provee formas para permitir que los nodos minimicen el tiempo utilizado en lectura y transmisión

Un nodo le indica al [[Access Point (AP)|AP]] que entrara en modo de dormido enviándole un 1 en un campo especial del header de 802.11. Luego, se configura un timer para despertar al nodo justo antes de que el AP le envía un beacon frame (unos 100 ms). El AP guardará los frames destinados a este dispositivo hasta que este se despierte, para enviarlos después

Una vez se despierta el nodo, recibe del beacon frame una lista de nodos cuyos paquetes fueron guardados. Si el propio nodo no se encuentra en la lista, puede volver a dormir. Si se encuentra en la lista, entonces puede pedir explícitamente recibir estos paquetes enviando un polling message

Esto permite que si el nodo no tiene nada para recibir o enviar, el 99% del tiempo, el nodo este dormido, ahorrando una increíble cantidad de energía