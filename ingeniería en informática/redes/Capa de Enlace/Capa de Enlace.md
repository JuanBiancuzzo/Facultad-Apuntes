---
dia: 2024-03-11
aliases:
  - Capa de link
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Enlace
  - carrera/ingeniería-en-informática/redes/Capa-de-Enlace
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/redes/Capa de Enlace/Resumen.md]]"
---
# Definición
---
Encamina un [[Paquete|datagrama]] a través de una serie de [[Router|routers]] entre el origen y el destino. En cada nodo, la capa de red pasa el datagrama a la capa de enlace, que entrega el datagrama al siguiente nodo existe a lo largo de la ruta. En ese siguiente nodo, la capa de enlace pasa el datagrama a la capa de red

La capa de red recibirá un servicio diferente por parte de cada uno de los distintos [[Protocolo|protocolo]] de la capa de enlace. Denominaremos a los [[Paquete|paquetes]] de la capa de enlace tramas

En su mayoría, la capa de enlace es implementada en un [[Network Interface Card|adaptador de red]]