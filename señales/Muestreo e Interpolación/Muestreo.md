---
dia: 2024-04-16
capitulo: 5
tags:
  - señales/Muestreo-e-Interpolación
---
### Definición
---
El puente entre el mundo analógico de las [[Señal|señales]] de interés y el mundo digital donde el procesamiento es más simple y barato es lo que se conoce como muestreo o sampling: obtener una representación de una [[Señal#^016a35|señal de tiempo continuo]], lo más fiel posible, mediante  una [[Señal#^02aea6|señal de tiempo discreto]]

```tikz
\begin{document} 

	\definecolor{cian}{RGB}{94, 146, 153}

	\tikzset{ 
	    block/.style={ 
		    draw=cian, 
			rounded corners, 
			align=center, 
			font=\bfseries,
			minimum width=2cm, 
			minimum height=2cm
	    },
	    texto/.style={
		    text=black, 
			align=center, 
			font=\bfseries,
			scale=0.8
	    }
	}

	\begin{tikzpicture}[
		scale=0.95, transform shape, ultra thick
		
	]
		\node [block] (entrada) at (-0.5, 0) {Entrada};
		\node [block, fill=cian] (digital) at (7, 0) {Sistema\\digital};
		\node [block] (salida) at (14.5, 0) {Salida};

		\path (entrada.east) -- (digital.west)
			node [block, pos=0.45, minimum width=1.6cm, minimum height=1.6cm] 
				(ad){A/D};
		\path (digital.east) -- (salida.west)
			node [block, pos=0.55, minimum width=1.6cm, minimum height=1.6cm] 
				(da){D/A};

		\path (entrada.south) node[texto, below=2pt]
			{Sensor temperatura\\Sensor luz\\Micrófono\\...};
		\path (ad.south) node[texto, below=2pt]
			{Conversor\\analógico-digital};
		\path (digital.south) node[texto, below=2pt]
			{Compara\\Cuenta\\Almacena\\Opera\\...};
		\path (da.south) node[texto, below=2pt]
			{Conversor\\digital-analógico};
		\path (salida.south) node[texto, below=2pt]
			{Diodos led\\Altavoz\\Alarma\\...};
		
		\path (digital) -- ++(0, -0.75) node[
				rounded corners, draw=cian, dashed, 
				minimum width=4cm, minimum height=5.5cm
		] (computadora) {};
		\path (computadora.north) node[texto, above=2pt] 
			{Trabaja con números}; 

		\draw[cian] (entrada.east) -- (ad.west)
			node[texto, midway, above=2pt] {Señal\\análogica};
		\draw[cian] (ad.east) -- (digital.west)
			node[texto, midway, above=2pt] {Señal digital};
		\draw[cian] (digital.east) -- (da.west)
			node[texto, midway, above=2pt] {Señal digital};
		\draw[cian] (da.east) -- (salida.west)
			node[texto, midway, above=2pt] {Señal\\análogica};

		\path (-2, -4) rectangle (17, 3);	
	\end{tikzpicture}
\end{document}
```

Hay dos tipos de muestro
1. [[Muestreo periódico|Muestreo periódico o uniforme]]
2. [[Muestreo aperiódico|Muestreo aperiódico]]

Notemos que tiene como componentes el [[Conversor Analógico-Digital|conversor Analógico-Digital]] (A/D) y el [[Conversor Digital-Analógico|conversor Digital-Analógico]] (D/A) 