---
dia: 2024-08-18
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Red
  - carrera/ingeniería-en-informática/redes/Capa-de-Red
  - investigación/ciencias-de-la-computación/Networking
  - investigación/ciencias-de-la-computación/Networking/Protocolos
  - investigación/networking
  - investigación/networking/Protocolos
  - investigación/protocolos/protocolo-de-internet
  - nota/facultad
  - nota/investigacion
aliases:
  - SNMP
  - Protocolo simple de administración de red
referencias:
  - "260"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este es un [[Protocolo|protocolo]] de [[Capa de aplicación|capa de aplicación]] utilizado para el manejo de [[Red|red]]. El uso más común, el modo de request-response. El [[Servidor|servidor]] envía una request, el agent realiza cierta acción y envía una respuesta al servidor. Usualmente, las requests serán de (query) consulta o (set) establecimiento de [[Management information base|objetos MIB]] asociados al dispositivo. Un segundo uso es el notificar al servidor de un evento excepcional mediante un trap message

Se definen siete tipos de mensajes, conocidos como [[Protocol Data Units|protocol data units (PDU)]]

Los dispositivos que normalmente soportan SNMP incluyen [[Router|routers]], [[Packet switches|switches]], [[Servidor|servidores]], estaciones de trabajo, impresoras, bastidores de módem y muchos más. Permite a los administradores supervisar el funcionamiento de la [[Red|red]], buscar y resolver sus problemas, y planear su crecimiento


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```