---
dia: 2024-06-15
aliases:
  - DHCP
  - Protocolo dinámico de configuración de hosts
tags:
  - redes/Capa-de-Red
  - nota/facultad
---
### Definición
---
Una vez la organización obtiene un bloque de [[Internet Protocol Address|direcciones]], puede asignarlas individualmente a las interfaces de la organización. Un administrador de red puede configurar manualmente la direcciones de los [[Router|routers]], pero también puede configurar manualmente las direcciones de los [[Host|hosts]] a partir del Dynamic Host Configuration Protocol

Este protocolo permite a un host obtener una [[Internet Protocol Address|dirección IP]] automáticamente. Un administrador de red puede configurar el protocolo para que reciba la misma dirección cada vez que se conecta, o que asigne direcciones IP temporales que serán distintas para conexión

Debido a la habilidad de automatizar la conexión la conexión de hosts en una [[Red|red]], este protocolo suele ser referido como plug-and-play o zeroconf. Esto permite que los usuarios móviles puedan acceder a [[Internet|internet]] de forma automática al conectarse a una nueva red

El protocolo DHCP tiene una [[Arquitectura cliente servidor|arquitectura cliente-servidor]]. En el caso más simple, cada [[Subnetting|subnet]] tiene un propio DHCP server o un relay agent (típicamente un router) que conoce la dirección del DHCP server. Este protocolo es un proceso de cuatro pasos
1. Server discovery
	* El host recién llegado envía un DHCP discover message dentro de un paquete [[User Datagram Protocol|UDP]] al [[Socket|puerto]] `67`, usando la dirección de destino broadcast `255.255.255.255`, y la dirección de fuente `0.0.0.0` 
2. Server Offer(s)
	* El servidor responde al cliente con un DHCP offer message, nuevamente con la dirección de destino broadcast. Debido a que múltiples servidores DHCP son permitidos, el cliente a veces tiene la opción de elegir entre varias ofertas. Este mensaje contiene el ID de transacción del discover message, la dirección IP propuesta para el cliente, la máscara de red y la address lease time (el tiempo durante el cual la dirección es válida)
3. Request
	* El cliente elige la oferta deseada y envía un DHCP request message, con la configuración recibida
4. ACK
	* El servidor responde con un DHCP ACK message, confirmando los parámetros

Una vez terminado el proceso, el host podrá usar la IP durante un tiempo determinado. Debido a que muchas veces el cliente querrá usar la dirección más allá del tiempo predefinido. DHPC provee un mecanismo para renovar el alquiler de la dirección IP

Debido a que una dirección IP nueva es obtenida cada vez que el nodo se conecta a una nueva subnet, no es posible mantener una conexión [[Transmission Control Protocol|TCP]] a medida que el nodo atraviesa múltiples subnets