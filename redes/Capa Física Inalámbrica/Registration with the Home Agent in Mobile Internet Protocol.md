---
dia: 2024-08-30
tags:
  - redes/Capa-Física-Inalámbrica
  - nota/facultad
---
# Definición
---
Una vez un nodo móvil recibe un COA, esta dirección debe ser registrada con el agente local. Veremos el caso en el que esta funcionalidad es realizada por el agente externo.

1. Luego de la recepción del advertisement, el nodo móvil envía un [[Paquete|paquete]] de registración al agente externo, este contiene el [[Agent Discovery in Mobile Internet Protocol#^COA|COA]], la dirección del agente local (HA), la dirección permanente del nodo móvil (MA), el tiempo de vida solicitado para la registración, y un identificador de la registración, de $64$ bits. Este último es utilizado como número de secuencia, para identificar la respuesta
   
2. Al agente externo recibe el mensaje de registración, y guarda la dirección permanente del nodo móvil. El agente ahora sabrá que debe estar atento a paquetes encapsulados, cuya dirección de destino interna sea la de la dirección permanente del nodo móvil. Ahora, el agente externo envía un paquete de registración al agente local, conteniendo la información indicada, además del formato de encapsulación requerida
   
3. El agente local recibe el mensaje de registración y verifica la autenticidad del mismo. Luego, asocia la dirección permanente del nodo móvil con el COA. En el futuro, los datagramas recibidos dirigidos al nodo móvil, serán enviados a su COA. El agente local envía un registration reply para indicar que la solicitud fue aceptada
   
4. El agente externo recibe la respuesta de registración y se lo envía al nodo móvil
   
En este punto, la registración está completa y el nodo móvil puede recibir datagramas enviados a su dirección permanente