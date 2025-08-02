---
dia: 2024-06-14
aliases:
  - Fragmentación de IP
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Red
  - carrera/ingeniería-en-informática/redes/Capa-de-Red
  - nota/facultad
---
# Definición
---
Si un [[Paquete|paquete]] completo tiene un tamaño mayor al [[Maximum transmission unit|MTU]], se deberá fragmentar. Los paquetes no son reensamblados en el camino, sino en el [[Host|host]] de destino. Si se pierde un fragmento, [[Internet Protocol Versión 4|IP]] descartará el paquete completo

Los headers de IP tienen tres campos utilizados para la fragmentación
* Identification
	* Es un número de $16$ bits que identifica cada paquete, permite definir de qué paquete provienen los fragmentos
* Flags
	* Son $3$ bits
		* El primero no es utilizado, siempre valdrá cero
		* El segundo es el bit "Do not Fragment". Si vale uno, el paquete será descargado, si es necesario fragmentarlo
		* El tercer bit es el "More Fragments". Vale cero si es el último fragmento de un paquete
* Fragment offset
	* Número de $13$ bits que determina la posición del primer bit del fragmento con relación al paquete completo. Debido a que tenemos $3$ bits menos, la posición real se obtiene tras multiplicar el offset por $2^3 = 8$. Debido a esto, el tamaño de payload de los fragmentos debe ser múltiplo de $8$

## Método de fragmentación
---
1. Si el tamaño del [[Paquete|datagrama]] $D$ (incluyendo el header) es mayor al MTU, debemos fragmentar
2. Calculamos el tamaño del payload $P$ (sin header) como $$ P = D - \underbrace{\text{Header IP}}_{20} $$
3. Calculamos el máximo tamaño de fragment payload $FP$ permitido, como $$ \max FP = TMU - \text{Header IP} $$
4. Como nuestro fragmento debe tener un tamaño múltiplo de $8$, entonces debemos hallar el máximo valor permitido múltiplo de $8$, este será $$ FP = \left\lfloor \frac{\max FP}{8} \right\rfloor \cdot 8 $$
5. A partir del nuestro fragment payload size, podemos calcular la cantidad de fragmentos que debemos enviar como $$ \#Fragments = \left\lceil \frac{P}{FP}  \right\rceil $$
6. Construiremos un fragmento con payload size $FP$, datagram size $FP ~ + ~\text{Header IP}$, y fragment offset de $0$
7. Repetiremos el procedimiento para el resto de fragmentos que se necesitan enviar. El tamaño de todos los fragmentos enviados será el mismo ($P$) excepto el último, que tendrá un tamaño menor (o igual). Los fragment offset incrementará linealmente a razón de $\frac{P}{8}$ por cada fragmento enviado. El último fragmento tendrá a bit de "More Fragments" en $0$. Lógicamente, todos los paquetes tendrán el bit de "Do Not Fragment" en $0$

## Ejemplo
---


```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\tikzset{
	pics/Server/.style={
	    code={
		    \tikzmath{
			    \bajada=0.4;
			    \largo=0.75;
		    }
		    
			\draw[rounded corners=2pt] (-\largo, {-\bajada / 2}) 
				rectangle ++({2 * \largo}, \bajada);
				
			\draw[rounded corners=2pt] (-\largo, {\bajada / 2}) 
				rectangle ++({2 * \largo}, \bajada);
			\draw[rounded corners=2pt] (-\largo, {-\bajada / 2}) 
				rectangle ++({2 * \largo}, -\bajada);
			
		}
	},
    pics/Router/.style args={#1}{
	    code={
		    \tikzmath{
			    \indentacion=0.3;
			    \bajada=0.4;
			    \cantidad=#1;
			    \largo=0.75;
			    \alto=\bajada * \cantidad;
		    }

			\coordinate (top) at (0, {\alto / 2});
		    
		    \draw (top) ellipse ({\largo} and {\indentacion});
		    \draw (top) -- ++({ 0.7 * \largo}, { 0.35 * \indentacion});
		    \draw (top) -- ++({ 0.7 * \largo}, {-0.35 * \indentacion});
		    \draw (top) -- ++({-0.7 * \largo}, { 0.35 * \indentacion});
		    \draw (top) -- ++({-0.7 * \largo}, {-0.35 * \indentacion});

			\foreach \y in {1, ..., \cantidad} {
				\draw ($ (top) + (\largo, {-\bajada * \y}) $)
					arc (0:-180:{\largo} and {\indentacion});
			}

			\draw (-\largo, {-\alto / 2}) -- ++(0, \alto);
			\draw ( \largo, {-\alto / 2}) -- ++(0, \alto);
			
			\node[align=center] (-center) at (0, 0) {};

			\node[align=center] (-above) 
				at (0, {\alto / 2 + \indentacion}) {};
			
			\node[align=center] (-below) 
				at (0, {-\alto / 2 - \indentacion}) {};
				
			\node[align=center] (-left) 
				at (-\largo, 0) {};
				
			\node[align=center] (-right) 
				at ( \largo, 0) {};
	    }
	},
	pics/Router/.default={1}
}

\begin{document}
	\begin{tikzpicture}[scale=1, transform shape, thick]		
		\draw pic (a) at (0, 0) {Server};
		\coordinate (clienteA) at (0, 0);
		\draw ($ (clienteA) + (0, -1) $) node[scale=0.9] {$A$};
		\draw pic (b) at (12, 0) {Server};
		\coordinate (clienteB) at (12, 0);
		\draw ($ (clienteB) + (0, -1) $) node[scale=0.9] {$B$};
		
		\draw pic (r1) at (3, 3) {Router};
		\coordinate (r1) at (3, 3);
		\draw ($ (r1) + (0, -1) $) node[scale=0.9] {$R_1$};
		\draw pic (r2) at (8, 4) {Router};
		\coordinate (r2) at (8, 4);
		\draw ($ (r2) + (0, -1) $) node[scale=0.9] {$R_2$};

		\tikzmath { \angleA = 45; \angleB = 225; \rA = 1.2; \rB = 1; }
		\draw ($ (clienteA) + ({\rA * cos(\angleA)}, {\rA * sin(\angleA)}) $) 
			-- ($ (r1) + ({\rB * cos(\angleB)}, {\rB * sin(\angleB)}) $)
				node[midway, above left=2pt, scale=0.8, align=center] 
					{MTU\\1000};

		\tikzmath { \angleA = 10; \angleB = 180; \rA = 1; \rB = 1; }
		\draw ($ (r1) + ({\rA * cos(\angleA)}, {\rA * sin(\angleA)}) $) 
			-- ($ (r2) + ({\rB * cos(\angleB)}, {\rB * sin(\angleB)}) $)
				node[midway, above left=2pt, scale=0.8, align=center] 
					{MTU\\1200};
		
		\tikzmath { \angleA = -35; \angleB = 136; \rA = 1; \rB = 1.2; }
		\draw ($ (r2) + ({\rA * cos(\angleA)}, {\rA * sin(\angleA)}) $) 
			-- ($ (clienteB) + ({\rB * cos(\angleB)}, {\rB * sin(\angleB)}) $)
				node[midway, above right=2pt, scale=0.8, align=center] 
					{MTU\\400};
			
	\end{tikzpicture}
\end{document}
```

|         | Nro de frag | Fragment offset | Total length | Payload length | More fragments |
| :-----: | :---------: | :-------------: | :----------: | :------------: | :------------: |
|  Llega  |    $F_1$    |       $0$       |    $996$     |     $976$      |      $1$       |
| a $R_1$ |    $F_2$    |      $122$      |     $68$     |      $48$      |      $0$       |
|         |             |                 |              |                |                |
|  Llega  |    $F_1$    |       $0$       |    $996$     |     $976$      |      $1$       |
| a $R_2$ |    $F_2$    |      $122$      |     $68$     |      $48$      |      $0$       |
|         |             |                 |              |                |                |
|  Llega  |  $F_{11}$   |       $0$       |    $396$     |     $376$      |      $1$       |
|  a $B$  |  $F_{12}$   |      $47$       |    $396$     |     $376$      |      $1$       |
|         |  $F_{13}$   |      $94$       |    $244$     |     $224$      |      $1$       |
|         |    $F_2$    |      $122$      |     $68$     |      $48$      |      $0$       |
