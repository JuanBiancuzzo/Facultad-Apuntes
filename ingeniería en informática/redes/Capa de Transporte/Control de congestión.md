---
dia: 2024-06-03
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Transporte
  - carrera/ingeniería-en-informática/redes/Capa-de-Transporte
  - nota/facultad
vinculoFacultad:
  - tema: Capa de Transporte
    capitulo: 3
    materia: Redes
    carrera: Ingeniería en informática
---
# Definición
---
El control de congestión intenta evitar la congestión de la [[Red|red]], mientras que intenta que cada [[Host|host]] tenga parte igual de [[Bandwidth|bandwidth]]

## Problemática
---
A medida que la tasa de arribo de [[Paquete|paquetes]] se acerca a la capacidad del medio, entonces se experimentan grandes [[Delay in packet switches#Tiempo de encolado|tiempos de encolado]]

Un remitente deberá realizar retransmisiones para compensar por los datos perdidos debido a buffer overflow

Las retransmisiones innecesarias ante los grandes [[Delay in packet switches|delays]] pueden causar que el router gaste recursos en enviar copias innecesarias de un paquete

Cuando un paquete es perdido a lo largo de un camino, la capacidad de transmisión utilizada en cada uno de los links que había enviado el paquete hasta ese punto termina siendo desperdiciada

## Enfoques al control de congestion
---
Examinemos algunos enfoques específicos de [[Transmission Control Protocol|TCP]] para lidiar con el control de congestión
* End-to-end
	* En este enfoque, de control de congestión, la [[Capa de Red|capa de red]] no provee soporte explícito a la capa de transporte, incluso la presencia de congestión debe ser inferida por los [[Host|hosts]] en función del comportamiento observado
* Network-assisted
	* ![[Explicit congestion notification#Definición]]

## Fairness
---
Un mecanismo de control de congestión se dice que es justo si la tasa de transmisión promedio común para todas las conexiones. Todas obtienen una porción equitativa del [[Ancho de banda|ancho de banda]] del enlace

Si bien el [[Algoritmo|algoritmo]] de control de congestión en la teoría es justo. En la práctica, los [[Host|hosts]] con menos [[Round trip time|RTT]] tienden a obtener mejor [[Throughput de una red|throughput]] que aquellos con mayor RTT

### Fairness con UDP
---
Muchas aplicaciones de multimedia prefieren utilizar [[User Datagram Protocol|UDP]] para que su tasa de transmisión no se vea entorpecida por el mecanismo de control de congestión. Desde la perspectiva de [[Transmission Control Protocol|TCP]], estas aplicaciones multimedia no están siendo justas con el resto de usuarios

### Fairness con TCP
---
Incluso si podemos forzar a que el [[Tráfico|tráfico]] de UDP se comporte de forma justa, el problema no está totalmente resuelto. Nada impide a una aplicación basada en TCP de utilizar múltiples conexiones paralelas, efectivamente obteniendo una mayor porción del [[Bandwidth|bandwidth]] en un medio congestionado