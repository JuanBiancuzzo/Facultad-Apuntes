---
dia: 2025-03-03
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
  - investigación/protocolos/protocolo-de-internet
aliases:
  - Protocolo guiado por un reloj
  - Steady and Tight $\Delta$-protocol#Steady and Tight $\Delta$-protocol
  - Steady and Tight TDMA Protocol#Steady and Tight TDMA Protocol
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este tipo de [[Protocolo de internet|protocolo]] [[Algoritmo sincrónico|sincrónico]] el cual se basa en el uso de un reloj sincronizado entre todos los [[Proceso|procesos]] y este sea nuestra forma de asegurar un [[Tightness|tightness]] y un [[Steadiness|steadiness]]

## Steady and Tight $\Delta$-protocol
---
Este protocolo logra lo pedido a partir de definir (usando el reloj) un tiempo inicial y un tiempo final en el cual se puede procesar el [[Paquete|mensaje]] recibido, produciendo una [[Cota superior|cota superior]] para el tightness que se suele llamar $\pi$. Por otro lado, al establecer un tiempo inicial $\Delta$, también impone una cota superior para el steadiness, esta siendo $\Delta + \pi$

![[Steady and tight Delta protocol.png]]

Este tiene una desventaja, la cual es que no hay una forma de definir cuando puede mandar otro proceso un mensaje

## Steady and Tight TDMA Protocol
---
Este protocolo logra lo pedido de forma similar al steady and tight $\Delta$-protocol, pero el cual define un [[Función periódica#^periodo|periodo]] de sistema el cual en este se divide el tiempo por la cantidad de procesos que se estén comunicando. Estas subdivisiones funciona igual al protocolo anteriormente mencionado, pero donde dependiendo en que parte del periodo estemos parados, va a ser el turno de un proceso especifico para mandar un mensaje

Notemos que al mantener la estructura del $\Delta$-protocol para las subdivisiones, mantenemos las propiedades de asegurarnos el steadiness y el tightness, a cambio tenemos la desventaja de que a mayor cantidad de procesos, menor va a ser la velocidad de transmisión de un proceso en particular

![[Steady and tight TDMA protocol.png]]