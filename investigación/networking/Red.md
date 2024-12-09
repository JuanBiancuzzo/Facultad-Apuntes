---
dia: 2024-07-08
tags:
  - índice
  - investigación/networking
  - nota/investigacion
  - ingeniería-electrónica/redes/Redes-de-computadoras
  - ingeniería-en-informática/redes/Redes-de-computadoras
estado: Falta resumir
aliases:
  - Network
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarSuperTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
La idea es investigar como funciona networking de bajo nivel, es decir, creando la infraestructura que es necesaria para establecer una buena comunicación entre varias personas, ya sea tiempo real como comunicación más lenta

Leer
* [[Computer Networking, a Top-Down Approach de James Kurose, Keith Ross|Computer Networking, a Top-Down Approach]]

## Resumen
---
Los dispositivos conectados a [[Internet|internet]] a menudo se designan como [[Host|hosts]], porque se sitúan en la frontera de Internet, en los extremos de la comunicación.

Se lo puede entender de dos formas
* Red de redes
	* Como una interconexión entre [[Internet Service Provider|ISPs]] donde la comunicación es por medio de [[Protocolo#Protocolo de Red|protocolos]] que definen como mandar y recibir mensajes
* Infraestructura
	* La red provee de servicios a las [[Aplicación|aplicaciones]], esta es poder mandar y recibir mensajes de un host a otro

## Fronter de la red
---
Los dispositivos conectados a internet a menudo se designan como sistemas terminales, porque se sitúan en la frontera de internet, en los extremos de la comunicación

### Redes de accesos
---
Enlaces físicos que conectan un sistema terminal con el primer [[Router|router]] de una ruta entre el host y cualquier otro host distante

* [[Acceso telefónico|Acceso telefónico]]
* [[Digital Subscriber Line|DSL]]
* [[Acceso a una red por cable|Cables]]
* [[Fiber-To-The-Home|Tecnología FTTH]]
* [[Ethernet|Ethernet]]
* [[Wireless Fidelity|WiFi]]
* [[Acceso inalámbrico de área extensa]]

#### Medios físicos
---
Cada par transmisor-receptor, el bit se envía mediante [[Campo electromagnético|ondas electromagnéticas]] o pulsos ópticos a lo largo de un medio físico como mencionaremos a continuación. Pueden tener muchas formas y no tiene por qué ser del mismo tipo para cada par transmisor-receptor existente a lo largo de la ruta

* [[Acceso a una red por cable#Cable de cobra de par trenzado|Cable de cobre de par trenzado]]
* [[Acceso a una red por cable#Cable coaxial|Cable coaxial]]
* [[Acceso a una red por cable#Fibra óptica|Fibra óptica]]
* [[Canal de radio#Via terrestre|Canales de radio terrestres]]
* [[Canal de radio#Via satélite|Canales de radio via satélite]]

## Núcleo de la red
---
Los [[Host|host]] intercambian mensajes unos con otros. Para enviar un mensaje desde un host de origen hasta un host de destino, el origen divide los mensajes largos en fragmentos de datos más pequeños que se conocen como [[Paquete|paquetes]]

Los paquetes se transmiten a través de cada enlace de comunicaciones a una velocidad igual a la [[Delay in packet switches|velocidad de transmisión]] máxima del enlace

## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarArchivos", { indice: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/investigacion/biblioIndice', { indice: dv.current() });
```