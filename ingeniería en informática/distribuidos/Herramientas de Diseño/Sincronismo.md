---
dia: 2025-03-03
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
aliases:
  - Sincrónico
  - Asincrónico
vinculoFacultad:
  - "[[ingeniería en informática/distribuidos/Herramientas de Diseño/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Los términos sincrónico/asincrónico dependen del contexto

### Ejecución de eventos
---
Este es el caso de la [[Sincronización de un programa multithreading|sincronización entre programas multithreading]], donde 
* Sincrónico implica bloqueante
* Asincrónico implica no bloqueante

### Comunicación entre grupos
---
Esto podemos entender que el sincronismo se refiere a una comunicación entre los participantes, mientras que el asincronismo es lo opuesto, es decir, la falta de comunicación o la independencia entre los participantes

#### En sistemas digitales
---
En el punto de vista de los [[Sistema digital|sistemas digitales]] o [[Sistema embebido|sistemas embebidos]], el sincronismo refiere a la coordinación con el mismo reloj (como cuando se usa la interfaz [[Serial Peripheral Interface|SPI]]) mientras que el asincronismo refiere a la coordinación con diferentes relojes

#### En sistemas distribuidos
---
En el punto de vista de los [[Sistema distribuido|sistemas distribuidos]] tiene un poco de todo lo mencionado anteriormente, y lo podemos ver en los [[Algoritmo sincrónico|algoritmos y protocolos sincrónicos]], como también [[Algoritmo sincrónico#Parcialmente sincrónico|parcialmente sincrónico]] y [[Algoritmo sincrónico#Asincrónico|asincrónico]]
