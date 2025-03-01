---
dia: 2024-03-19
aliases:
  - CDN
  - Content provider networks
tags:
  - carrera/ingeniería-en-informática/redes/Capa-de-aplicación
  - nota/facultad
  - carrera/ingeniería-electrónica/redes/Capa-de-aplicación
---
# Definición
---
La mayoría de grandes compañías de streaming utilizan CDN. Estas redes gestionan [[Servidor|servidores]] geográficamente distribuidos y guardan copas de los videos. Estas redes también tratan de redirigir a cada cliente a una localización que provea la mejor experiencia de usuario

Usualmente, estas redes adoptan una de dos filosofías
* Enter Deep
	* Una filosofía consiste en entrar completamente en las redes de acceso de los [[Internet Service Provider|ISP]], el objetivo es acercarse a los [[Host|end users]]
* Bring Home
	* Esta segunda filosofía consiste en construir grandes agrupamientos en un pequeño número de lugares. Esto resulta en menos mantenimiento, pero un mayor [[Delay in packet switches|delay]]

Usualmente, si un CDN no tiene un video, este hace un pedido de una copia y a medida que la descarga, se la envía al cliente

## Operaciones
---
La mayoría de los CDN utilizan el [[Domain Name System|sistema DNS]] para redirigir pedidos. Cuando se trata de acceder un pedido, primero se le envía la request al [[Domain Name System Message|authoritative DNS server]]. Este, redirige el pedido al authoritative server del content provider. Este devuelve la [[Internet Protocol Address|dirección IP]] de algún servidor que considere adecuado. Finalmente, el cliente pide el video a través de esta IP

## Cluster
---
El CDN obtiene la dirección IP del cliente a través del DNS look-up. Con esta información, el servidor puede determinar el [[Cluster|clúster]]

Una estrategia simple es la de seleccionar el clúster que esté geográficamente más cerca. Pero esto no siempre resultará en el mejor rendimiento. Esto se debe a que muchas veces este no coincide con el más cercano en número de saltos

Para determinar el mejor clúster, las CDN realizan medidas en tiempo real del delay y la pérdida de información entre los clientes y los clústeres

## General
---
Estas [[Red|redes]] son los Netflix, Google, etc. de distribuir contenido
* Acerca el contenido a los [[Arquitectura cliente servidor#Cliente|clientes]]
	* Minimizar [[Delay in packet switches|latencia]] (mejor [[Experiencia del usuario|UX]])
	* Maximizar [[Throughput de una red|throughput]]
* Minimizar el [[Tráfico|tráfico]] en el [[Internet Service Provider#Tier 1|núcleo de internet]]
	* Evitar replicación de [[Paquete|paquetes]]
	* Contenido transmitido es "grande"
* Plataforma distribuida
	* [[Resiliencia|Resiliencia]]
	* Congestion de salida
	* Distribución global del contenido

## Beneficios
---
* Mejorar tiempo de descarga
* Respuesta a la digitación
* Reducir costos
	* [[Ancho de banda|Ancho de banda]]
	* Volumen de transferencia
* Disponibilidad por redundancia
	* Resiliencia ante [[Denial of Service|DDoS]]
	* Resiste congestiones
