---
dia: 2023-10-22
tags:
  - carrera/ingeniería-en-informática/aninfo/Diseño-de-software
  - carrera/ingeniería-en-informática/distribuidos/Introducción
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/aninfo/Diseño de software/Resumen.md]]"
  - "[[ingeniería en informática/distribuidos/Introduccion/Resumen.md]]"
---
# Definición
---
Usamos varias vistas para que nos muestre cada una aspectos particulares de la [[Arquitectura de aplicaciones|arquitectura]]

![[Vistas 4+1.png]]

## Vista lógica
---
La estructura lógica que tiene el [[Sistema|sistema]], en función de 
* Subsistemas
* Componentes
* Interfaces

Los diagramas para mostrar esto de la mejor forma son
 * [[Unified modelling language#Diagrama de clases|Diagrama de clases]]
 * [[Diagrama de estado|Diagrama de estados]]

## Vista de implementación o de desarrollo
---
Como empaquetamos esos elementos, en componentes ejecutables. Dicho de otra forma, los artefactos que componen al sistema

Los diagramas para mostrar esto de la mejor forma son
 * [[Unified modelling language#Diagrama de secuencia|Diagrama de secuencia]]
 * [[Unified modelling language#Diagrama de actividad|Diagrama de actividad]]

## Vista de distribución o física
---
Es usar los ejecutables y aplicarlos en el entorno de distribución como [[Servidor|servidores]]. La [[Topología de comunicación|topología]] y conexiones entre los componente físicos

Los diagramas para mostrar esto de la mejor forma son
 * [[Diagrama de despliegue|Diagrama de despliegue]]
 * [[Diagrama de robustez|Diagrama de robustez]]

## Vista de procesos o dinámica
---
Son aquellos [[Proceso|procesos]] desde el punto de vista del [[Sistema operativo|sistema operativo]]
* Descripción de escenarios [[Concurrencia|concurrentes]] (Actividades)
* Flujo de mensajes en el sistema (Colaboración)
* Flujo temporal de mensajes en el sistema (Secuencia)

Los diagramas para mostrar esto de la mejor forma son
 * [[Diagrama de paquetes|Diagrama de paquetes]]
 * [[Diagrama de componentes|Diagrama de componentes]]

## Vista de escenarios
---
Junta las 4 vistas, es una vista más dinámica. Esta tiene los [[Unified modelling language#Diagrama de casos de uso|diagrama de casos de ]]