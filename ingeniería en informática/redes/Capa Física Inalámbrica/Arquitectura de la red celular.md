---
dia: 2024-08-30
tags:
  - carrera/ingeniería-electrónica/redes/Capa-Física-Inalámbrica
  - carrera/ingeniería-en-informática/redes/Capa-Física-Inalámbrica
  - nota/facultad
aliases:
  - Global System for Mobile Communications
  - GSM
---
# Definición
---
Para esta descripción, adoptaremos la terminología de los estándares Global System for Mobile Communications (GMS). Por lo general, las tecnologías de redes de celular pertenecen a una de varias generaciones
* La primera generación 1G era un sistema [[Frequency Division Multiplexing|FDMA]] diseñado exclusivamente para comunicación por voz
* Estos fueron reemplazados por [[Arquitectura de la red celular con 2G|sistemas de 2G]], los cuales también eran diseñados para voz, pero en 2.5G se extendieron a soportar la transferencia de datos ([[Internet|internet]])
* Los [[Arquitectura de la red celular con 3G|sistemas 3G]] también soportan datos y voz, pero con énfasis en voz
* Las tecnologías 4G es la más desplegada hoy en día y está basada en tecnología LTE. Provee transferencia de voz y datos a velocidades de los multi-megabit

Una red de proveedor celular tiene un número de [[Mobile Switching Center|MSC]], con algunos especiales conocidos como MSC gateway, que conectan la red del proveedor a la red telefónica pública

## Handoff
---
Un handoff ocurre cuando una estación móvil cambia su asociación de una [[Base Transceiver Station|estación base]] a otra durante una llamada. Esto puede ocurrir por otras diversas razones, además de la movilidad de un nodo, incluyendo que la [[Señal|señal]] de la estación actual deterioro lo suficiente y está en peligro de perderse, o una celda fue sobrecargada y debe delegar móviles a otras celdas cercanas

![[Managing Mobility in Cellular Networks.png]]

Mientras está asociado a una estación base, un móvil periódicamente mide la fuerza de una beacon signal desde su propia estación base, y las cercanas. Basándose en esta métrica, puede iniciarse un handoff. Este proceso se da en los siguientes pasos

1. La estación base anterior le informa a la [[Visitor Location Register|visited MSC]] que ocurrirá un handoff, y el [[Base Transceiver Station|BS]] (o múltiples) a los que se realizará el handoff
2. El visited MSC inicia un [[Camino|path]] setup al nuevo BS, reservando recursos necesarios para redireccionar la llamada, e indicándole al nuevo BS que está por ocurrir un handoff
3. El nuevo BS reserva los recursos y activa el [[Canal de radio|canal de radio]] a utilizar
4. El nuevo BS envía una señal al visited MSC y al anterior BS que ya es estableció el camino visited-MSC-to-new-BS. Además, provee toda la información que necesitará el móvil para asociarse al nuevo BS
5. El móvil es informado que debe realizar un handoff. Hasta este punto, el móvil no estaba al tanto de que la red estaba preparando un cambio
6. El móvil y el nuevo BS intercambian uno o más mensajes para activar el nuevo canal por completo
7. El móvil envía un [[Paquete|mensaje]] de finalización de handoff al nuevo BS, el cual es enviado al visited MSC. Este redirige la llamada al nuevo BS
8. Los recursos reservados para el anterior BS son reservados

Cuando hay múltiples cambios de estación base, GSM define la noción de anchor MSC. Este es el MSC visitado cuando comienza una llamada, y permanece constante durante la misma. La llamada siempre será dirigida al [[Gateway Mobile Services Switching Center|home MSC]], luego al anchor MSC, y de ahí al visited MSC. Otra alternativa sería la de simplemente encadenar las MSC visitadas