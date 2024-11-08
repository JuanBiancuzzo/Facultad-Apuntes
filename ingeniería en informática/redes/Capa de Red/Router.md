---
dia: 2024-06-07
tags:
  - ingeniería-en-informática/redes/Capa-de-Red
  - nota/facultad
---
# Definición
---
Podemos identificar cuatro componentes principales
* [[Router input port|Input ports]] ![[Router input port#^676d04]]
* [[Switching fabric|Switching fabric]] ![[Switching fabric#^57bb3f]]
* [[Router output port|Output ports]] ![[Router output port#^57d3e6]]
* Routing processor
	* Este ejecuta las funciones del plano de control. En los routers tradicionales ejecuta los [[Routing protocol|protocolo de ruteo]], mantiene las tablas y los estados de los enlaces y computa la forwarding table. En routers [[Software-defined networking|SDN]], es el responsable de comunicarse con el controlador remoto para recibir las entradas de la forwarding table e instalarlas en los input ports

Debido a la velocidad necesaria, los input ports, output ports, y el switching fabric suelen ser implementados por [[Hardware|hardware]], mientras que las funciones del [[Plano de control|plano de control]] suelen estar implementadas por [[Software|software]]

## Packet Scheduling
---
![[Packet Scheduling#Definición]]

## Comparación con un link-layer switch
---
![[Link-layer switches#Comparación con un router]]