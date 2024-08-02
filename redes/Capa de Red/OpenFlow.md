---
dia: 2024-08-02
tags:
  - redes/Capa-de-Red
  - nota/facultad
aliases:
  - Match-plus-action
---
### Definición
---
OpenFlow fue el pionero en la noción de una abstracción match-plus-action. 

Cada entrada en la tabla conocida como flow table incluye, un conjunto de valores de campos encabezados a partir de los cuales el [[Paquete|paquete]] será analizado

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=1.3, transform shape, thick]
		\tikzmath { 
			\scala = 0.7; 
			\pos = 0; 
			\tamanio = 1;
			\sep = 0;
		}
		
		\draw (\pos, 0) rectangle ++(\tamanio, \tamanio)
			node[midway, align=center, scale=\scala] {Ingress\\Port};
		
		\tikzmath { \pos = \pos + \tamanio + \sep; }
		\draw (\pos, 0) rectangle ++(\tamanio, \tamanio)
			node[midway, align=center, scale=\scala] {Src\\MAC};

		\tikzmath { \pos = \pos + \tamanio + \sep; }
		\draw (\pos, 0) rectangle ++(\tamanio, \tamanio)
			node[midway, align=center, scale=\scala] {Dst\\MAC};

		\tikzmath { \pos = \pos + \tamanio + \sep; }
		\draw (\pos, 0) rectangle ++(\tamanio, \tamanio)
			node[midway, align=center, scale=\scala] {Eth\\Type};

		\tikzmath { \pos = \pos + \tamanio + \sep; }
		\draw (\pos, 0) rectangle ++(\tamanio, \tamanio)
			node[midway, align=center, scale=\scala] {VLAN\\ID};

		\tikzmath { \pos = \pos + \tamanio + \sep; }
		\draw (\pos, 0) rectangle ++(\tamanio, \tamanio)
			node[midway, align=center, scale=\scala] {VLAN\\Pri};

		\tikzmath { \pos = \pos + \tamanio + \sep; }
		\draw (\pos, 0) rectangle ++(\tamanio, \tamanio)
			node[midway, align=center, scale=\scala] {IP Src};

		\tikzmath { \pos = \pos + \tamanio + \sep; }
		\draw (\pos, 0) rectangle ++(\tamanio, \tamanio)
			node[midway, align=center, scale=\scala] {IP Dst};

		\tikzmath { \pos = \pos + \tamanio + \sep; }
		\draw (\pos, 0) rectangle ++(\tamanio, \tamanio)
			node[midway, align=center, scale=\scala] {IP\\Proto};

		\tikzmath { \pos = \pos + \tamanio + \sep; }
		\draw (\pos, 0) rectangle ++(\tamanio, \tamanio)
			node[midway, align=center, scale=\scala] {IP\\TOS};

		\tikzmath { \pos = \pos + \tamanio + \sep; }
		\draw (\pos, 0) rectangle ++(\tamanio, \tamanio)
			node[midway, align=center, scale=0.5] {TCP/UDP\\Src port};

		\tikzmath { \pos = \pos + \tamanio + \sep; }
		\draw (\pos, 0) rectangle ++(\tamanio, \tamanio)
			node[midway, align=center, scale=0.5] {TCP/UDP\\Det port};

		\tikzmath { \espacioY = 0.1; \espacioX = 0.05; \dist = 0.25; }
		\tikzmath { \inicio = 1; \final = 6; }
		\draw ({\inicio * ( \tamanio + \sep ) + \espacioX}, -\espacioY) 
			-- ++(0, -\dist)
			-- (
				{\tamanio + (\final - 1) * (\tamanio + \sep) - \espacioX}, 
				{-\espacioY - \dist}
			) node[midway] (mitad) {}
			-- ++(0, \dist);
		\draw (mitad.center) 
			-- ++(0, -\dist) 
				node[below=2pt, scale=\scala] {Link layer};

		\tikzmath { \inicio = 6; \final = 10; }
		\draw ({\inicio * ( \tamanio + \sep ) + \espacioX}, -\espacioY) 
			-- ++(0, -\dist)
			-- (
				{\tamanio + (\final - 1) * (\tamanio + \sep) - \espacioX}, 
				{-\espacioY - \dist}
			) node[midway] (mitad) {}
			-- ++(0, \dist);
		\draw (mitad.center) 
			-- ++(0, -\dist) 
				node[below=2pt, scale=\scala] {Network layer};

		\tikzmath { \inicio = 10; \final = 12; }
		\draw ({\inicio * ( \tamanio + \sep ) + \espacioX}, -\espacioY) 
			-- ++(0, -\dist)
			-- (
				{\tamanio + (\final - 1) * (\tamanio + \sep) - \espacioX}, 
				{-\espacioY - \dist}
			) node[midway] (mitad) {}
			-- ++(0, \dist);
		\draw (mitad.center) 
			-- ++(0, -\dist) 
				node[below=2pt, scale=\scala] {Transport layer};
	\end{tikzpicture}
\end{document}
```

Un conjunto de contadores que serán actualizados cuando el paquete coincide con la entrada. Un conjunto de acciones que deben tomarse cuando un paquete coincide con la entrada de la tabla

#### Match
---
La primera observación importante que las abstracciones de OpenFlow permite que el match se realice a partir de campos seleccionados a través de múltiples [[Protocolo|protocolos]], permitiendo así al [[Packet switches|packet switch]] funcionar tanto como un dispositivo de [[Capa de Red|capa de red]] como un dispositivo de [[Capa de Enlace|capa de enlace]]

Las entradas de la tabla también permiten comodines, permitiendo, por ejemplo, coincidir con todas los paquetes cuya dirección de destino comience con `128.119. ...` si un paquete coincide con múltiples entradas, se tomará aquellas con la mayor prioridad

Por último vamos que no todos los headers de IP pueden ser utilizados para el match. Algunos headers fueron ignorados para priorizar funcionalidad por sobre complejidad

#### Action
---
Cada entrada de la tabla puede tener cero o múltiples acciones. Si hay múltiples acciones, estás se realizan en el orden especificado. Algunas de las acciones más comunes son

* Forwarding
	* Un paquete entrante puede ser direccionado a algún [[Router output port|puerto de salida]] particular, también puede ser enviado a todos los puertos ([[Internet Protocol Versión 4#Broadcast|broadcast]]) o a algunos (multicast). También puede ser encapsulado y enviado a un controlador remoto, para que este tome alguna acción como actualizar nuevas entradas en la tabla
* Dropping
	* Una entrada sin acciones indica que el paquete será ignorado
* Modify-field
	* Algunos valores de los headers del paquete pueden ser reescritos antes de ser enviados al/los puertos especificados