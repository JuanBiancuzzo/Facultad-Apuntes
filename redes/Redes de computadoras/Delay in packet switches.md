---
dia: 2024-05-29
capitulo: 1
aliases:
  - Intensidad del tráfico
  - Latencia
  - Delay
tags:
  - redes/Redes-de-computadoras
  - nota
---
### Definición
---
A medida que un [[Paquete|paquete]] viaja de un nodo al siguiente, este sufre de diversos tipos de delays en cada nodo a lo largo del camino. Los más importantes son
* Tiempo de procesamiento
* Tiempo de encolado
* Tiempo de transmisión
* Tiempo de propagación

El [[Round trip time|tiempo de ida y vuelta]] de un paquete, se puede calcular como $$ t_{total} = \sum_i t^i_{procesamiento} + t^i_{encolado} + t^i_{transmisión} + t^i_{propagación} $$
Donde $i$ representa el i-esimo [[Router|router]] del camino hecho por el paquete. Esto también se denomina latencia

#### Tiempo de procesamiento
---
Es el tiempo requerido para examinar el header del [[Paquete|datagrama]] y determinar a donde enviarlo, aunque también puede incluir otros factores, como los chequeos de errores a nivel de bit

#### Tiempo de encolado
---
En la cola de paquetes experimenta el tiempo de encolado, mientras espera a ser transmitido al link. Este tiempo dependerá de la cantidad de paquetes que se encuentren delante de él por lo que este tiempo aumenta con la congestión de la [[Red|red]]

Se puede entender el tiempo de encolado con el siguiente diagrama 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
		\tikzmath { 
			\radio = 0.75; 
			\largo = 1.5; 
			\dist = 0.2;
		}
		\draw (0, 0) circle (\radio);
		\draw[<-] ({-\radio - \dist}, 0) -- ++(-\largo, 0)
			node[midway, above=2pt] {$L \cdot a$};
		\draw[->] ({\radio + \dist}, 0) -- ++(\largo, 0)
			node[midway, above=2pt] {$R$};
	\end{tikzpicture}
\end{document}
```

Donde $L$ es el largo del paquete, $a$ es la tasa de arribos, y $R$ es la velocidad de serialización

En el caso que $L \cdot a > R$, se empieza a perder [[Paquete|información]] ya que llega más información de la que se puede guardar en la computadora

Definimos intensidad del tráfico a la relación entre el arribo y la transmisión $$ \frac{L \cdot a}{R} $$

El encolamiento de paquetes puede ocurrir tanto en los [[Router input port|puertos de entrada]] como en los de [[Router output port|salida]], aunque el lugar y la extensión de la espera dependerá del tráfico

##### Input delay
---
![[Router input port#Delay]]

##### Output delay
---
![[Router output port#Delay]]


#### Tiempo de transmisión
---
Es la cantidad de tiempo requerida para insertar los bits del paquete al [[Acceso a una red por cable|medio]]. Sea $L$ el largo de bits de un paquete, y $R$ la tasa de transmisión del link en bits/secs. Entonces se puede calcular el tiempo de transmisión será de $$ t_{trasmisión} = \frac{L}{R} $$

#### Tiempo de propagación
---
Una vez en el medio, el tiempo de propagación es el tiempo requerido para que un paquete llegue del inicio del link al final de este. Sea $d$ la distancia a recorrer y $v$ la velocidad de propagación, el tiempo de propagación será de $$ t_{propagación} = \frac{d}{v} $$

