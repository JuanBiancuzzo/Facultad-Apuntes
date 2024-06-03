---
dia: 2024-06-03
materia: redes
capitulo: 3
---
### Definición
---
El control de congestión intenta evitar la congestión de la [[Red|red]], mientras que intenta que cada [[Host|host]] tenga parte igual de [[Bandwidth|bandwidth]]

#### Problemática
---
A medida que la tasa de arribo de [[Paquete|paquetes]] se acerca a la capacidad del medio, entonces se experimentan grandes [[Delay in packet switches#Tiempo de encolado|tiempos de encolado]]

Un remitente deberá realizar retransmisiones para compensar por los datos perdidos debido a buffer overflow

Las retransmisiones innecesarias ante los grandes [[Delay in packet switches|delays]] pueden causar que el router gaste recursos en enviar copias innecesarias de un paquete

Cuando un paquete es perdido a lo largo de un camino, la capacidad de transmisión utilizada en cada uno de los links que había enviado el paquete hasta ese punto termina siendo desperdiciada

#### Enfoques al control de congestion
---
Examinemos algunos enfoques específicos de [[Transmission Control Protocol|TCP]] para lidiar con el control de congestión
* End-to-end
	* En este enfoque, de control de congestión, la [[Capa de Red|capa de red]] no provee soporte explícito a la capa de transporte, incluso la presencia de congestión debe ser inferida por los [[Host|hosts]] en función del comportamiento observado
* Network-assisted
	* ![[Explicit congestion notification#Definición]]

