---
dia: 2024-08-31
tags:
  - carrera/ingeniería-en-informática/redes/Capa-Física-Inalámbrica
  - nota/facultad
  - investigación/protocolos/protocolo-de-internet
  - carrera/ingeniería-electrónica/redes/Capa-Física-Inalámbrica
  - investigación/networking/Protocolos
  - investigación/ciencias-de-la-computación/Networking/Protocolos
aliases:
  - Mobile-node-to-foreign-agent protocol#^mobile-node-to-foreign-agent-protocol
  - Foreign-agent-to-home-agent registration protocol#^foreign-agent-to-home-agent-registration-protocol
  - Home-agent datagram encapsulation protocol#^home-agent-datagram-encapsulation-protocol
  - Foreign-agent decapsulation protocol#^foreign-agent-decapsulation-protocol
---
# Definición
---
En este enfoque, se envían los paquetes directamente a la dirección permanente, sin enterarse de que el usuario es un usuario móvil. El agente local tiene la importante [[Función|función]] de recibir estos [[Paquete|paquetes]] y reenviarlos a la [[Red|red]] extranjera. Desde allí, el foreign agent le reenviará los paquetes al usuario

Para realizar esto, el agente local encapsula el datagrama en otro datagrama, completo. Este tiene como dirección el [[Agent Discovery in Mobile Internet Protocol#^COA|COA]] del nodo móvil. Cuando el agente extranjero lo recibe, lo des-encapsula y se lo envía al nodo original

Cuando el nodo responde, este enviará un paquete con su dirección permanente como remitente, y con la dirección permanente del correspondiente. Debido a que conoce su dirección, no deberá enviarle el paquete al agente local

En general, la funcionalidad requerida para este enfoque es
* A mobile-node-to-foreign-agent protocol ^mobile-node-to-foreign-agent-protocol
    * El nodo móvil debe registrarse con el agente extranjero cuando se conecta a una red extranjera. Además, debe des-registrarse cuando sale de la red
* A foreign-agent-to-home-agent registration protocol ^foreign-agent-to-home-agent-registration-protocol
    * El agente extranjero debe registrar el COA con el agente local. Pero no debe explícitamente des-registrarlo. Esto se hará automáticamente con la registración del nuevo COA, por parte de otro agente extranjero
* A home-agent datagram encapsulation protocol ^home-agent-datagram-encapsulation-protocol
    * Permitiendo enviar el paquete original del correspondiente dentro de un datagrama direccionado al COA
* A foreign-agent decapsulation protocol ^foreign-agent-decapsulation-protocol
    * Permitiendo la des-encapsulación del paquete original, y el envío al nodo móvil

Aun siguiendo este enfoque, puede haber perdida de paquetes cuando un nodo se cambia de red extranjera. En estos casos, se debe usar mecanismos de recuperaciones de perdida de paquetes, en capas superiores ([[Capa de transporte|capa de transporte]], o [[Capa de aplicación|aplicación]])