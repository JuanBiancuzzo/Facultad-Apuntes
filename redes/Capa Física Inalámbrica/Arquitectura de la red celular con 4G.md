---
dia: 2024-08-30
tags:
  - redes/Capa-Física-Inalámbrica
  - nota/facultad
aliases:
  - Red Celular 4G
  - Red 4G
  - Serving Gateway#^S-GW
  - Packet Data Network Gateway^#P-GW
  - Home Subscriber Server#^HSS
  - Mobility Management Entity#^MME
  - MME#^MME
  - HSS#^HSS
  - P-GW^#P-GW
  - S-GW#^S-GW
---
# Definición
---
Existen dos importantes observaciones de la arquitectura 4G

* A unified, all-IP network architecture
    * A diferencia de las redes 3G, la arquitectura 4G utiliza datagramas de [[Internet Protocol Address|IP]] para tanto trasferencias de voz como transferencias de datos. Con la llegada de 4G, desapareció los últimos vestigios de las redes de telefonía, dando lugar a un servicio universal de IP
* A clear separation of the 4G [[Plano de datos|data plane]] and 4G [[Plano de control|control plane]]
    * Esta distinción es similar a la del plano de datos y el plano de control que vimos en IP
* A clear separation between the [[Radio Network Controller|radio access network]], and the all-IP-core network
    * Los [[Paquete|datagramas]] de IP son enviados desde el usuario (UE) hacia el gateway (P-GW) a través de una red interna de 4G. Los paquetes de control son intercambiados dentro de la misma red.

Los principales componentes de la arquitectura 4G son

* El eNodeB es el descendiente lógico de una [[Base Station Controller|BSC]] de 2G y un RNC de 3G. Los datagramas del UE son encapsulados en el eNodeB y enviados hacia el P-GW a través de la all-IP enhanced packet core (EPC) de la red 4G. Este túnel es similar al de [[Internet Protocol Versión 6|IPv6]] cuando busca atravesar routers [[Internet Protocol Versión 4|IPv4]]. Además, los túneles puede tener asociadas garantías de Quality of Service (QoS)
* El Packet Data Network Gateway (P-GW) reserva direcciones IP para el usuario y realiza QoS enforcement. Además, realiza encapsulamiento y des-encapsulamiento, ya que se encuentra en un extremo de la encapsulación ^P-GW
* El Serving Gateway (S-GW) es el punto de anclaje de la movilidad del data plane. Todo el tráfico de los usuarios pasa por aquí, y conecta directamente con el P-GW ^S-GW
* El mobility management entity (MME) realiza manejo de conexiones y movilidad para los usuarios de la celda que controla ^MME
* El home subscriber server (HSS) contiene información de usuarios como el acceso a roaming, información de autenticación, perfiles de QoS ^HSS

## LTE Radio Access Network
---
LTE utiliza [[Orthogonal Frequency Division Multiplexing|OFDM]], para cado nodo activo se reserva uno o más timeslots de $0.5$ ms en uno o más canales de frecuencias. Estas reservas pueden realizarse hasta una vez por milisegundo, y pueden utilizarse distintos esquemas de modulación dependiendo de la circunstancia

La reserva particular no está gestionada por el estándar de LTE, sino que la decisión de quienes podrán transmitir se determinan por algoritmos de scheduling provistos por los vendedores de LTE y operadores de red

El opportunistic scheduling varía el [[Protocolo|protocolo]] de [[Capa física|capa física]] según las condiciones del canal para optimizar el uso del medio. Además, las prioridades de los usuarios y el nivel de servicio contratado puede ser utilizado para favorecer las transmisiones de descarga de algunos usuarios