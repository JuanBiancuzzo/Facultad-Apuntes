---
dia: 2025-03-05
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Fundamentos-de-Sistemas-Distribuidos
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este patrón usa el concepto de [[Broker|broker]] para permitir el manejo de los mensajes

![[Patrón de mensajería router-dealer.png]]

El broker tiene dos [[Socket|sockets]], uno que llamaremos Router, el cual se encarga de agregar al mensaje recibido un `ID` de destinatario, y otro que llamaremos Dealer, el cual rutea los mensajes, propagando el `ID` de origen del mensaje. Ambos permiten recibir mensajes de múltiples sockets a la vez

## En ZeroMQ
---
Para el socket Dealer busca rutear los mensajes de una forma justa para conseguir fairness. 

