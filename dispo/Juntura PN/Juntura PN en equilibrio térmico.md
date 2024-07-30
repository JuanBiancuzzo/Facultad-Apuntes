---
dia: 2023-08-23
tags:
  - dispo/Juntura-PN
  - nota/facultad
---
### Definición
---
Que la [[Juntura PN|juntura]] este en [[Equilibrio térmico en un semiconductor|equilibrio térmico]] nos permite hacer suposiciones que simplifican el nivel del problema.

![[Distribución de dopantes en una juntura PN en equilibrio térmico.webp|600]]

Al colocar juntos a los [[Semiconductor|semiconductores]] de [[Impureza donora#Cantidad de dopante|tipo n]] y $[[Impureza aceptora#Cantidad de dopante|tipo p]], pasa las siguientes cosas
* Los [[Electrón|electrones]] $e^-$ y los [[Hueco|huecos]] $h^+$ se [[Corriente de difusión|difunden]] desde donde son [[Portador de carga|portadores]] mayoritarios hacia donde son portadores minoritarios
* Se genera un [[Dipolo de carga]] debido a los [[Átomo|átomos]] de impureza ionizados
* Por acción del [[Campo eléctrico]], aparece una [[Corriente de arrastre|corriente de arrastre]]

En equilibrio térmico, la [[Corriente de arrastre|corriente de arrastre]] contrarresta la [[Corriente de difusión|corriente de difusión]] $$ J_\text{arr}(x) = - J_\text{dif}(x) $$
```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, thick]
		\draw[->] (-3.5, 0) -- (3.5, 0)
			node[below right=2pt] {$x$};
		\draw[->] (0, -0.1) node[below=2pt] {$0$}
			-- (0, 3.5) node[left=2pt] {$\log p_0, n_0$};
			
		\draw[dashed] (0, 2.8) -- ++(-2.8, 0)
			node[left=2pt] {$N_a$};
		\draw[dashed] (0, .4) -- ++(-2.8, 0)
			node[left=2pt] {$\frac{n_i^2}{N_a}$};
		
		\draw[dashed] (0, 2.4) -- ++(2.8, 0)
			node[right=2pt] {$N_d$};
		\draw[dashed] (0, 0.8) -- ++(2.8, 0)
			node[right=2pt] {$\frac{n_i^2}{N_d}$};
	\end{tikzpicture}
\end{document}
```

![[Distribución de dopantes en una juntura PN en equilibrio térmico con región de carga espacial.webp|600]]

Notemos que lejos de la juntura metalúrgica, se comporta como un semiconductor solo. Estas regiones se llaman Regiones cuasi-neutrales (QNR's). Mientras que alrededor de la juntura metalúrgica, las corriente de arrastre debe cancelar a la de difusión creando la Región de carga espacial (SCR)

Veamos como podemos usar la aproximación de vaciamiento, podemos encontrar las [[Modelo de enlace de Silicio#Concentración de Portador de carga portadores|concentración de portadores]], la [[Densidad volumétrica de carga eléctrica|densidad de carga]], el [[Campo eléctrico]] y el [[Potencial eléctrico]] sabiendo la [[Impureza donora#Cantidad de dopante|concentración donora]] y la [[Impureza aceptora#Cantidad de dopante|concentración aceptora]]

![[Aproximación de vaciamiento#Definición]]