---
dia: 2024-03-19
materia: redes
capitulo: 2
---
### Definición
---
Estas [[Red|redes]] son los Netflix, Google, etc. de distribuir contenido
* Acerca el contenido a los [[Arquitectura cliente servidor#Cliente]]
	* Minimizar [[Latencia|latencia]] (mejor [[Experiencia del usuario (UX)|UX]])
	* Maximizar [[Throughput|throughput]]
* Minimizar el [[Tráfico|tráfico]] en el [[ISP#Tier 1|núcleo de internet]]
	* Evitar replicación de [[Paquete|paquetes]]
	* Contenido transmitido es "grande"
* Plataforma distribuida
	* [[Resiliencia|Resiliencia]]
	* Congestion de salida
	* Distribución global del contenido

#### Beneficios
---
* Mejorar tiempo de descarga
* Respuesta a la digitación
* Reducir costos
	* [[Ancho de banda|Ancho de banda]]
	* Volumen de transferencia
* Disponibilidad por redundancia
	* Resiliencia ante [[Distributed Denied of Service (DDoS)|DDoS]]
	* Resiste congestiones

#### Funcionamiento
---
Usando un [[Domain Name System (DNS)|DNS]]

#### Arquitectura
---
* Nodos/[[Servidor|servidores de borde]] - Edge
* [[Puntos de presencia (PoP)|Puntos de presencia - PoP]]
* Servidores de origen - Origin
* Red de distribución global