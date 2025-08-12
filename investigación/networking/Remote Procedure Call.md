---
dia: 2024-10-06
etapa: ampliar
referencias:
  - "319"
  - "1"
  - "865"
tags:
  - carrera/ingeniería-en-informática/distribuidos/Fundamentos-de-Sistemas-Distribuidos
  - carrera/ingeniería-en-informática/tpp/Propuesta
  - investigación/ciencias-de-la-computación/Networking
  - investigación/networking
  - investigación/protocolos/protocolo-de-internet
  - nota/facultad
  - nota/investigacion
aliases:
  - RPC
  - gRPC#gRPC
  - Llamada a procedimiento remoto
vinculoFacultad:
  - tema: Fundamentos de Sistemas Distribuidos
    capitulo: 2
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
  - tema: Propuesta
    capitulo: 1
    materia: Trabajo Profesional de Ingeniería Informática
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En [[Computación distrbuida|computación distribuida]], la llamada a procedimiento remoto (RPC) es un programa que utiliza una [[Computadora|computadora]] para ejecutar código en otra máquina remota sin tener que preocuparse por las comunicaciones entre ambas, de forma que parezca que se ejecutan en local. El [[Protocolo de internet|protocolo]] que se utiliza para esta llamada es un gran avance sobre los [[Socket|sockets de internet]]. De esta manera el programador no tenia que estar pendiente de las comunicaciones, estando estas encapsuladas dentro de las RPC

## Tolerancia a fallos
---
A diferencia de ejecutar localmente un procedimiento, un RPC puede no ser ejecutado por un error en la comunicación, por lo que hay diferentes estrategias para garantizar que se ejecute
* Request-Retry con Timeout
* Filtrado de operaciones duplicadas
* Retransmisión / Re-ejecución de operación si se pierde el retry

## Implementación
---
Se tiene $4$ componentes
1. Cliente
    * Se encuentra conectado a un stub
    * Realiza llamadas de forma transparente al [[Servidor|servidos]]
2. Servidor
    * Se encuentra conectado a un stub del cual recibe parámetros
    * Posee lógica particular del remote procedure
3. Stubs
    * Administra el [[Marshalling|marshalling]] de la información
    * Envía información de llamadas (calls) al módulo de comunicación y al cliente/servidor
4. Módulo de comunicación
    *  Abstrae al stub de la comunicación con el servidor

![[Remote Procedure Call Implementación.png]]

## gRPC
---
Definición de RPC basada en [[Hypertext Transfer Protoco 2 (HTTP2)l|HTTP2]] para transporte usa Protocol Buffer para encoding y tiene [[Topología de comunicación#^unicast|conexión punto a punto]] basada en `server:port`. Usa un archivo con extensión `.proto` para definir los servicios y los mensajes 

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```