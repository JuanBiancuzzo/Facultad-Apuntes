---
dia: 2024-06-15
aliases:
  - Subnet
  - Subred
tags:
  - redes/Capa-de-Red
  - nota/facultad
---
### Definición
---
Un host típicamente tiene un único enlace para conectarse a la [[Red|red]]. Cuando el protocolo de red del [[Host|host]] quiere enviar un [[Paquete|datagrama]], lo hace a través de un [[Router interface|interfaz]]

Cada [[Internet Protocol Address|dirección IP]] tiene un tamaño de $32$ bits y está anotado en dotted-decimal notation. Cada byte está separado por un punto y escrito en notación decimal. Una porción de la dirección IP de una interfaz estará determinada por la subnet a la cual está directamente conectada

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape]
		\draw[dashed] (0, 0) rectangle ++(1.8, 0.7)
			node[midway] {$157$};
		\draw[dashed] (2, 0) rectangle ++(1.8, 0.7)
			node[midway] {$92$};
		\draw[dashed] (4, 0) rectangle ++(1.8, 0.7)
			node[midway] {$48$};
		\draw[dashed] (6, 0) rectangle ++(1.8, 0.7)
			node[midway] {$2$};
		
		\path (1.9, 0.1) 
				node[scale=1.8] {$\cdot$}
			-- ++(2, 0) 
				node[scale=1.8] {$\cdot$}
			-- ++(2, 0) 
				node[scale=1.8] {$\cdot$}
			-- ++(2, 0);
	\end{tikzpicture}
\end{document}
```

Para determinar una subnet, se desconectan todas las interfaces de su host o [[Router|router]] asociado, creando islas aisladas llamadas subnets

Una organización suele ser asignado un [[Block of Addresses|rango de conexiones]] con una [[Classless Interdomain Routing|mascara]] común. Fuera de la organización, únicamente se utilizarán los bits del prefijo para enviar el [[Paquete|paquete]]. Esto reduce considerablemente el tamaño de las [[Forwarding table|forwarding tables]]. Los restantes bits serán usado dentro de la organización para distinguir las direcciones IP, es posible que los bits restantes a su vez estén organizados en otra estructuras de subredes

#### Método de subnetting
---
Partiremos de un espacio de direcciones $S$ con longitud de [[Classless Interdomain Routing|mascara]] $M$. Debido a que cada red debe reservar una dirección para la Network Address y otra para el Broadcast Address, tendremos un total de $T$ redes para entregar $$ T = 2^{32 - M} - 2 $$
Esto también aplica para las subredes, por lo que si tendremos una subred con $A$ hosts y $R$ routers, entonces necesitaremos un total de $T_a$ redes para entregar $$ T_a = A + R + 2 $$
Las conexiones entre los routers también son subredes, por lo que una conexión punto a punto entre dos routers necesitaría $2 + 2 = 4$ direcciones, mientras que una entre tres routers necesitaría $3 + 2 = 5$ direcciones

Debido a como se funcionan las mascaras, solo se puede entregar cantidades de direcciones que sean potencias de dos, por lo que si una subred necesita $5$ direcciones, debemos entregarle por lo menos $2^3 = 8$. Nos quedaremos con la menor potencia de dos que nos proporcione al menos la cantidad de redes necesarias

Para evitar tener tablas mal configuradas, debemos entregar subespacios de direcciones de forma creciente en orden de mayor cantidad de redes solicitadas a menor
