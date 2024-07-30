---
dia: 2024-06-03
aliases:
  - Control de congestión de TCP
tags:
  - redes/Capa-de-Transporte
  - nota/facultad
---
### Definición
---
El enfoque tomado por [[Transmission Control Protocol|TCP]] entonces es que cada remitente limite la tasa a la cual envía [[Tráfico|tráfico]] a través de sus conexiones en función de la [[Control de congestión|congestión]] recibida

Este mecanismo mantiene una variable adicional llamada congestion window denotada `cwnd`. La cantidad de datos sin confirmar no debe ser mayor el mínimo entre la congestion window y receiver window

Definiremos un loss event en un TCP sender como la ocurrencia de un [[Recovery time objective|timeout]] o la recepción de tres [[Protocolo de entrega confiable|ACK]] duplicados. Cuando hay excesiva congestión, entonces se perderán paquetes a lo largo de la ruta y ocasionarán loss events. Debido a que TCP utiliza ACK (o un timer) para configurar su ventana de congestión, se dice de ser self-clocking

Para decidir como exactamente se modificará la ventana de congestión, se seguirán los siguientes principios
* Un [[Paquete|segmento]] perdido implica congestión, y el remitente deberá reducir su tasa de transmisión cuando esto ocurre
* La confirmación de un paquete indica que la red está entregando los segmentos, y el remitente deberá aumentar su tasa de transmisión

La estrategia de TCP entonces será la de [[Bandwidth|bandwidth]] probing. La tasa de transmisión se aumentará lentamente en respuesta a los ACK recibidos y disminuirá al encontrarse con una perdida. El objetivo es alcanzar una velocidad estable que no cause perdida de paquetes

Ahora podremos definir el [[Algoritmo|algoritmo]] de congestión de control de TCP, el cual tiene tres componentes principales
* [[Slow Start|Slow Start]]
* [[Congestion Avoidance|Congestion Avoidance]]
* [[Fast Recovery|Fast Recovery]]

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary {arrows.meta,automata,positioning}

\begin{document}
	\begin{tikzpicture}[
			shorten >=1pt,
			node distance=6cm,
			on grid,>={Stealth[round]},
			every state/.style={minimum size=6em},
			bend angle=5,
			ultra thick
		]
		
	\node[state, align=center] (fast) {Fast\\recovery};
	\node[state, align=center] (slow) 
		[above left=of fast] 
			{Slow\\start};
	\node[state, align=center] (avoidance) [above right=of fast]
		{Congestion\\avoidance};

	\path[<-] (slow) edge node[above right=2pt] {$(1)$} +(-2, 2);

	\path[->] (slow) edge[bend left] node[above=2pt] {$(3)$} (avoidance)
		(avoidance) edge[bend left] node[below=2pt] {$(13)$} (slow)
		
		(slow) edge[bend left] node[above right=2pt] {$(11)$} (fast)
		(fast) edge[bend left] node[below left=2pt] {$(8)$} (slow)
		
		(avoidance) edge[bend left] node[below right=2pt] {$(6)$} (fast)
		(fast) edge[bend left] node[above left=2pt] {$(12)$} (avoidance);

	\path[->] (slow) edge[loop above] node[above=2pt] {$(2)$} (slow)
		(slow) edge[loop below] node[below=2pt] {$(9)$} (slow)
		(slow) edge[loop left] node[left=2pt] {$(10)$} (slow)

		(avoidance) edge[loop above] node[above=2pt] {$(4)$} (avoidance)
		(avoidance) edge[loop right] node[right=2pt] {$(5)$} (avoidance)
		
		(fast) edge[loop below] node[below=2pt] {$(7)$} (fast);


	\end{tikzpicture}
\end{document}
```

1. Se inicia
	* Se inicializa el `cwnd` a `lwnd` (loss window)
	* Se establece el `ssthresh`
	* La cantidad de [[Protocolo de entrega confiable|ACK]] duplicados es $0$
2. Si se recibe un ACK que ya se recibió
	* Se aumenta en uno el contador de ACK duplicados
3. En el caso de que `cwnd` $\ge$ `ssthresh`
4. Se recibe un nuevo ACK
	* $$ cwnd(n + 1) = cwnd(n) + MSS ~ \frac{MSS}{cwnd(n)} $$
	* Se reinicia los ACK duplicados a $0$
	* Si se puede, se transmite un nuevo segmento
5. Si se recibe un ACK que ya se recibió
	*  Se aumenta en uno el contador de ACK duplicados
6. Si la cantidad de ACK duplicados llega a $3$
	* $$ \begin{align} 
		  ssthresh(n + 1) &= \frac{cwnd(n)}{2} \\
		  cwnd(n + 1) &= sshresh(n + 1) + 3 ~ MSS
	  \end{align} $$
	* Si se puede, se transmite un nuevo segmento
7. Si se recibe un ACK que ya se recibió
	* $$ cwnd(n + 1) = cwnd(n) + MSS $$
	* Si se puede, se transmite un nuevo segmento
8. Si ocurre un timeout
	* $$ \begin{align} 
		  ssthresh(n + 1) &= \frac{cwnd(n)}{2} \\
		  cwnd(n + 1) &= lwnd
	  \end{align} $$
	* Se reinicia los ACK duplicados a $0$
	* Si se puede, se retransmite el segmento perdido
9. Se recibe un nuevo ACK
	*  $$ cwnd(n + 1) = cwnd(n) + MSS $$
	* Se reinicia los ACK duplicados a $0$
	* Si se puede, se transmite un nuevo segmento
10. Si ocurre un timeout 
	* $$ \begin{align} 
		  ssthresh(n + 1) &= \frac{cwnd(n)}{2} \\
		  cwnd(n + 1) &= lwnd
	  \end{align} $$
	* Se reinicia los ACK duplicados a $0$
	* Si se puede, se retransmite el segmento perdido
11. Si la cantidad de ACK duplicados llega a $3$
	* $$ \begin{align} 
		  ssthresh(n + 1) &= \frac{cwnd(n)}{2} \\
		  cwnd(n + 1) &= sshresh(n + 1) + 3 ~ MSS
	  \end{align} $$
	* Si se puede, se transmite un nuevo segmento
12.  Se recibe un nuevo ACK
	*  $$ cwnd(n + 1) = ssthresh(n) $$
	* Se reinicia los ACK duplicados a $0$
13.  Si ocurre un timeout 
	* $$ \begin{align} 
		  ssthresh(n + 1) &= \frac{cwnd(n)}{2} \\
		  cwnd(n + 1) &= lwnd
	  \end{align} $$
	* Se reinicia los ACK duplicados a $0$
	* Si se puede, se retransmite el segmento perdido

#### Manejo del bandwidth
---
Para obtener altas [[Delay in packet switches#Tiempo de propagación|velocidad de transmisión]] utilizando TCP, debemos conseguir una muy baja [[Probabilidad|probabilidad]] de perdida de paquetes. Debido a esto, hoy en día se están investigando nuevas versiones de TCP específicas para ambientes de alta velocidad