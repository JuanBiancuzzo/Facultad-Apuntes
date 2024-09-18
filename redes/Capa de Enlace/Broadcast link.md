---
dia: 2024-08-22
tags:
  - redes/Capa-de-Enlace
  - nota/facultad
aliases:
  - Multiple access protocols
---
# Definición
---
Un broadcast link puede tener múltiples remitentes y receptores, todos conectados al mismo canal compartido. Las computadoras tienen protocolos, llamados multiple access protocols, mediante los cuales se regulan las transmisiones dentro del canal compartido. Aunque técnicamente los nodos acceden mediante un adaptador, trataremos a los nodos directamente como los remitentes y receptores

Si dos nodos transmiten [[Información|información]] al mismo tiempo, ambas señales colisionan, corrompiendo los datos. Debido a esto, debemos asegurar que las transmisiones de los nodos activos estén coordinadas de alguna forma.

Los protocolos se pueden separar en tres categorías
* [[Channel partitioning protocols|Channel partitioning protocols]]
* [[Random access protocols|Random access protocols]]
* [[Taking-turns protocols|Taking-turns protocols]]