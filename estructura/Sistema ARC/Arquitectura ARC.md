---
dia: 2024-08-27
tags: 
 - estructura/Sistema-ARC
 - nota/facultad
---
### Definición
---
Es un acrónimo de "A [[Reduce Instruction Set Computer|Risc]] Computer"

#### Manejo de memoria
---
La arquitectura ARC maneja datos de 32 bits, direccionables por byte. Contiene un [[Espacio de direcciones|espacio de direcciones]] de $2^{32}$, con un orden de guardado [[Big endian|Big-Endian]]

El mapa de memoria está especificado por el siguiente gráfico

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=1.4, transform shape, ultra thick]
		\tikzmath {
			\ancho = 5;
			\alto = -1;
			\dist = 0.1;
		}

		\begin{scope}
    		\tikzmath {
				\maxlargo = -5 * \alto + \ancho;
				\step = 0.25;
				\inicio = 2;
				\final = 5;
			}
			\clip (0, {\inicio * \alto}) 
    			rectangle ++(\ancho, {\final * \alto});
            \coordinate (inicio) at (\ancho, {(\inicio + \final) * \alto});

			\foreach \x in {0, \step, ..., \maxlargo} {
				\draw[gray, opacity=0.6] ($ (inicio) + (-\x, 0) $)
					-- ++(\maxlargo, \maxlargo);
			}
		\end{scope}
    	
    	\foreach \porcion in {1, 2, 3} {
        	\draw[thin, dashed, gray] ({\porcion * \ancho / 4}, 0)
            	-- ++(0, {2 * \alto});
            \draw[thin, dashed, gray] ({\porcion * \ancho / 4}, {7 * \alto})
                -- ++(0, {4 * \alto});
    	}
		
		\draw (0, 0) rectangle ++(\ancho, \alto)
			node[midway, align=center, scale=1] 
    			{Reservado para\\el sistema operativo};
		\draw (0, \alto) rectangle ++(\ancho, \alto)
			node[midway, scale=1] {Espacio para el\\usuario};
		\draw (0, {2 * \alto}) rectangle ++(\ancho, {5 * \alto});
		\draw (0, {7 * \alto}) rectangle ++(\ancho, \alto)
			node[midway, scale=1] {Pila del sistema};
		\draw (0, {8 * \alto}) rectangle ++(\ancho, \alto);
		\foreach \i in {0, 1, 2} {
    		\draw (0, {(9 + \i / 3) * \alto}) 
        		rectangle ++(\ancho, {\alto / 3});
		}
		\draw (0, {10 * \alto}) rectangle ++(\ancho, \alto);
		

		\path (\dist, {0 * \alto - \dist}) 
    		node[left=2pt, scale=0.9] {$ 0 \to $};
		\path (\dist, {1 * \alto - \dist}) 
    		node[left=2pt, scale=0.9] {$ 2048 \to $};
		\path (\dist, {8 * \alto + \dist}) 
    		node[left=2pt, scale=0.9] {$ 2^{31} - 4 \to $};
		
		\path (\dist, {(9 + 1/6) * \alto}) 
    		node[left=2pt, scale=0.9] {Disco $\to$};
		\path (\dist, {(9 + 1/2) * \alto}) 
    		node[left=2pt, scale=0.9] {Terminal $\to$};
		\path (\dist, {(9 + 5/6) * \alto}) 
    		node[left=2pt, scale=0.9] {Impresora $\to$};
		
		\path (\dist, {11 * \alto + \dist}) 
    		node[left=2pt, scale=0.9] {$ 2^{32} - 4 \to $};

        \draw[<->, thick] (0, {2 * \dist}) -- ++(\ancho, 0)
                node[midway, above=2pt, scale=0.9] {$32$ bits};
        \draw[<->, thick] ({\ancho / 4}, {11 * \alto - 2 * \dist}) 
            -- ++({\ancho / 4}, 0)
                node[midway, below=2pt, scale=0.9] {byte};
        \draw[thick] ({\ancho + 2 * \dist}, {8 * \alto}) 
            -- ++({3 * \dist}, 0)
            -- ++(0, {1.5 * \alto + 2 * \dist})
            -- ++({2 * \dist}, {-2 * \dist})
                node[pos=1, right=2pt, align=center, scale=0.9]
                    {Espacio\\para E/S}
            -- ++({-2 * \dist}, {-2 * \dist})
            -- ++(0, {1.5 * \alto + 2 * \dist})
            -- ++({-3 * \dist}, 0);
            
        
        \path ({7 * \ancho / 8}, {11 * \alto + \dist}) 
            node[below=2pt, align=center, scale=0.9]
                {$\uparrow$\\$2^{32}-1$};

	\end{tikzpicture}
\end{document}
```

La mitad de la memoria se utiliza para los [[Puerto Input-Output|dispositivos de entrada y salida]], la otra mitad se utiliza para el [[Sistema operativo|sistema operativo]] ($2048$ bytes) y para la [[Memoria RAM|memoria RAM]]