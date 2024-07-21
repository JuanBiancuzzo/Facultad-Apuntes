---
dia: 2024-04-30
capitulo: 4
tags:
  - redes/Capa-de-Red
---
### Definición
---
TCP 
* Optimizaciones
	* ACK Acumulativo
		* Después de varios paquetes mandados, se envían un único ACK por el último paquete
	* SACK
		* a
* Windows scale (es una option) para multiplicar el valor del número
* Algoritmo de congestion
	* cwnd: es la máxima cantidad de bytes que puede haber en vuelo
	* IW: initial window es el valor inicial de cwnd 
		* Tiene que ser <= 2 segmentos (puede no ser el caso)
	* LastBytesSent - LastByteACKed = BytesOnFly < min(cwnd, rwnd)
		* rwnd ventana del otro
		* No queremos saturar la red ni el otro extremo
	* Etapas
		* Slow start
			* $cwnd(n + 1) = cwnd(n) + MSS ~ \#(ACK)$
			* Crecimiento exponencial
			* $cwnd(0) = IW$
			* Recordar la ventana
		* Congestion avoidance
			* $cwnd(n + 1) = \frac{cwnd(n) + \#(ACK)}{cwnd(n)}$
				* Se redondea para abajo
			* Crece linealmente
		* Fast retransmit
			* Depende del algoritmo se manda a otra etapa
		* Fast recovery
			* $cwnd(n + 1) = \frac{cwnd(n)}{2}$
			* $sshtresh(n + 1) = \frac{cwnd(n)}{2}$
			* Se puede inflar la ventana por cada ACK que le llega (caso especifico)
	* Transición
		* De Slow start -> Congestion avoidance
			* Si $cwnd(n) \ge sstreash$
				* sstresh (slow start threshold size)
		* Cualquier etapa -> Slow start
			* Si se produce timeout (RTO)
				* $ssthreash = \frac{cwnd(n)}{2}$
				* $cwnd(n + 1) = LW$ 
					* LW (loss window) en general es $1$
		* Cualquier etapa -> Fast retransmit
			* ACK duplicados
				* Ocurre cuando se reciben 4 ACKs para el mismo segmento (3 ACK duplicados)
		* Tahoe 
			* Fast retransmit -> Slow start
				* Después de los multiples ACK, se manda de nuevo el paquete que se perdió y después de manda a slow start
		* Reno
			* Fast retransmit -> Fast recovery
	* Otros algoritmos
		* TCP Vegas
		* TCP New reno
		* TCP Cubic
* Estimación del RTT
	* $EST(n + 1) = (1 - \alpha) * EST(n) + \alpha * RTT(n)$
		* $\alpha = 0.125 = \frac{1}{8}$
		* $EST(0) = RTT(0) \implies EST(1) = RTT(0)$

* CIDR (Classless)
* Subnet - RFC 2950
	* Es una división lógica de una red
	* Permiten agrupar un conjunto de direcciones en un rango
		* Prefijo/mask
	* Masking reduce la lógica que tienen que manejar los routers
	* Separan el tráfico en subredes optimiza el uso de la red 
	* Reduce congestión de la red
	* Resolver
		* Buscamos maximizar la cantidad de direcciones ocupadas
		* Metodología
			* Todas las subredes tiene una dirección de red y una dirección de broadcast
			* No se puede asignar la dirección de red o de broadcast a un host
				* Dirección de red
					* Es una dirección ip que sea igual al prefijo
				* Dirección de broadcast
					* Es la dirección ip que sea igual al prefijo + el resto de 0s en 1
					* Se puede calcular como prefijo + (255.255.255.255) & (-mask)
			* Todos los dispositivos conectados a la red tienen una dirección de ip
			* Cantidad de host disponibles
				* $\#\text{de hosts} = 2^{32 - mascara} - 2$
					* El $-2$ es por lo dicho de la dirección de red y broadcast
			* Ejemplo
				* 200.10.0.0/25
					* Dir de red = 200.10.0.0
					* Dir de broadcast = 200.10.0.127
			* Siempre conexión punto a punto de routers, porque también es una subred
			* El router también tiene una ip por cada subred que pertenezca