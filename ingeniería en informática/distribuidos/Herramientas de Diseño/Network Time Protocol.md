---
dia: 2025-03-04
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
aliases:
  - NTP
vinculoFacultad:
  - tema: Herramientas de Diseño
    capitulo: 1
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta [[Protocolo|protocolo]] tiene como objetivo
* Sincronizar
    * Clientes ([[Universal Time Coordinated (UTC)|UTC]]) sincronizados aunque existan delays en la [[Red|red]]
    * Análisis estadístico para filtrar data y obtener resultados de calidad
* Tener alta disponibilidad
    * Sobrevivir a larga caídas de conectividad
    * Rutas redundantes
    * [[Servidor|Servidores]] redundantes
*  Escalabilidad
    * Gran número de clientes sincronizados de forma frecuente
    * Debe tener en cuenta efectos de perdida de precisión

## Estructura de servidores
---
Esta estructura esta basada en stratums (estratos)

![[Network Time Protocol.png]]

* Estrato $0$
    * Master clock
* Estrato $1$
    * Servidores conectados directamente al master clock
* Estrato $2$
    * Servidores sincronizados con servidores en estrato $1$
* Estrato $n$
    * Servidores sincronizados con servidores en estrato $n - 1$

Los servidores están sincronizados entre sí con conexiones [[Arquitectura peer-to-peer|peer-to-peer]]. Los mensajes que se mandan usan [[User Datagram Protocol|UDP]]

## Modos de sincronización
---
Tiene $3$ modos de sincronización

1. Modo [[Topología de comunicación#^muticast|multicast]]/[[Topología de comunicación#^broadcast|broadcast]]
    * Usando en [[Local Area Network|LANs]] de lata velocidad
    * Eficiente pero de baja precisión
2. Modo [[Arquitectura cliente servidor|Cliente-Servidor]] ([[Remote Procedure Call|RPC]])
    * Grupos de aplicaciones se conectan formando un grupo
    * Aplicaciones entre sí no pueden sincronizarse
3. Modo Simétrico (Peer Mode)
    *  Peers sincronizados entre sí para proveer backup mutuo
    * Utilizado en estratos $1$ y $2$