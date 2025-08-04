---
dia: 2024-05-14
tags:
  - carrera/ingeniería-electrónica/embebidos/Estrategias-de-control-de-periféricos
  - carrera/ingeniería-electrónica/señales/Muestreo-e-Interpolación
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/embebidos/Estrategias de control de periféricos/Resumen.md]]"
  - "[[ingeniería electrónica/señales/Muestreo e Interpolación/Resumen.md]]"
---
# Definición
---
Una versión más real de un [[Conversor Analógico-Digital|conversor A/D]] tienen la siguiente estructura ideal ![[Conversor Analógico-Digital#^8b8439]]
Este [[Modelo|modelo]] matemático de un conversor ideal que es útil para el análisis de las principales características del [[Muestreo|muestreo]] en el dominio de la frecuencia
* El proceso de tomar la muestra $x_c(n T)$ en la práctica no se hace con un tren de [[Delta de Dirac|impulsos]]
* En general la muestra $x_c(nT)$ es un número real con infinitos decimales. En la práctica, en una [[Computadora|computador]], sólo podemos representar números con finitos decimales

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 	
	\begin{tikzpicture}[scale=1, transform shape, ultra thick]
		\tikzmath {
			\xtriangle = -5;
			\xsample = 0;
			\xconver = 5;
			\ancho = 1.8;
			\alto = 1;
		}
		\draw (\xtriangle, 0) -- ++(0, \alto)
			-- ({\xtriangle + \ancho}, 0)
			-- (\xtriangle, -\alto)
			-- (\xtriangle, 0);
		\coordinate (triangle_west) at (\xtriangle, 0);
		\coordinate (triangle_east) at ({\xtriangle + \ancho}, 0);

		\draw ({-\ancho + \xsample}, -\alto) 
			rectangle ({\ancho + \xsample}, \alto)
				node[midway, font=\bfseries, align=center]
					{Sample and hold}; 
		\coordinate (sample_north) at (\xsample, \alto);
		\coordinate (sample_west) at ({-\ancho + \xsample}, 0);
		\coordinate (sample_east) at ({\ancho + \xsample}, 0);
		
		\draw ({-\ancho + \xconver}, -\alto) 
			rectangle ({\ancho + \xconver}, \alto)
				node[midway, font=\bfseries, align=center]
					{A/D Conversion\\(Cuantización)}; 
		\coordinate (conver_north) at (\xconver, \alto);
		\coordinate (conver_south) at (\xconver, -\alto);
		\coordinate (conver_west) at ({-\ancho + \xconver}, 0);
		\coordinate (conver_east) at ({\ancho + \xconver}, 0);

		\draw[<-] (triangle_west) -- ++(-1, 0)
			node[midway, above=2pt] {$x_c(t)$};
		\draw[->] (triangle_east) -- (sample_west);
		\draw[->] (sample_east) -- (conver_west)
			node[midway, below=2pt] {$x_0(t)$};
		\draw[<-] (conver_south) -- ++(0, -1)
			node[midway, right=2pt] {$T$};
		\draw[->] (conver_east) -- ++(1, 0)
			node[midway, above=2pt] {$\hat{x}(n)$};
		\draw[->] (conver_north) -- ++(0, 1.5)
			-- ($ (conver_north -| sample_north) + (0, 1.5) $)
				node[midway, below=2pt] {S/H}
			-- (sample_north);

	\end{tikzpicture}
\end{document}
```

1. En cada intervalo $T$, un comando de S/H es enviado desde el módulo de cuantificación
2. En ese punto el [[Circuito eléctrico|circuito]] de sample and hold mantiene el valor instantáneo de la señal de entrada $x_c(t)$ durante una duración $T$
3. Gracias a que el valor de la entrada permanece constante, el módulo de cuantificación puede transformar el valor de la entrada en una descripción [[Número binario|binaria]] con $b$ bits
4. Cuando el módulo de cuantificación terminó su conversión puede enviar otro comando S/H al circuito de sample and hold y el proceso vuelve a comenzar

Notar que $$ x_0(t) = \sum_{n = -\infty}^{\infty} x_c(nT) ~ h_0(t - nT) = h_0(t) ~ \left( \sum_{n = -\infty}^{\infty} x_c(nT) ~ \delta(t - nT) \right) $$ donde $h_0(t)$ es la [[Respuesta en frecuencia|respuesta al impulso]] del retenedor de orden cero

## Representación en bloques
---
Nos interesará analizar básicamente la precisión del módulo de cuantificación. La acción del dicho módulo se puede resumir en $$ \hat{x}_C(n) = Q(n(n)) $$ donde $Q : \mathbb{R} \to S$ es un [[Operador|operador]] [[Sistema lineal|no lineal]] y [[Memoria de un sistema|sin memoria]], donde $S$ es un conjunto de $M$ elementos. Los $M$ valores a la salida de dicho [[Sistema|sistema]] de dicho sistema están predefinidos. La operación de este sistema puede también descomponerse como 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 	
	\begin{tikzpicture}[scale=1, transform shape, ultra thick]
		\tikzmath {
			\xcuanti = 0;
			\xcodifi = 5.5;
			\ancho = 1.8;
			\alto = 1;
		}

		\draw ({-\ancho + \xcuanti}, -\alto) 
			rectangle ({\ancho + \xcuanti}, \alto)
				node[midway, font=\bfseries, align=center]
					{Cuantizador}; 
		\coordinate (cuanti_west) at ({-\ancho + \xcuanti}, 0);
		\coordinate (cuanti_east) at ({\ancho + \xcuanti}, 0);
		
		\draw ({-\ancho + \xcodifi}, -\alto) 
			rectangle ({\ancho + \xcodifi}, \alto)
				node[midway, font=\bfseries, align=center]
					{Codificador}; 
		\coordinate (codifi_west) at ({-\ancho + \xcodifi}, 0);
		\coordinate (codifi_east) at ({\ancho + \xcodifi}, 0);

		\draw[<-] (cuanti_west) -- ++(-1.5, 0)
			node[midway, above=2pt, scale=1.2] {$x(n)$};
		\draw[->] (cuanti_east) -- (codifi_west)
			node[midway, above=2pt, scale=1.2] {$\hat{x}(n)$};
		\draw[->] (codifi_east) -- ++(1.5, 0)
			node[midway, above=2pt, scale=1.2] {$x_C(n)$};

	\end{tikzpicture}
\end{document}
```

* El cuantizador es el bloque que efectivamente transforma el número real a la entrada en un número con [[Punto flotante|finitos decimales]]
* El codificador selecciona para el número entregado por el cuantizador el código binario que lo representará

Un cuantizador típico tiene la siguiente características
```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\tikzmath {
		\d = 0.7;
		\X = 4;
		\Xm1 = \X - 1;
		\Xm2 = \X - 2;
	}
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
		\draw[->] ({-\X - 1}, 0) -- ({\X + 1}, 0)
			node[below=2pt, scale=0.7] {$x$};
		\draw[->] (0, -{(\X + 0.5) * \d}) -- (0, {(\X - 0.5) * \d})
			node[right=2pt, scale=0.7] {$\hat{x} = Q(x)$};

		\foreach \y in {2, ..., \Xm1} {
			\draw (-0.1, {\y * \d}) -- (0.1, {\y * \d})
				node[pos=0, left=2pt, scale=0.7] {$\y \Delta$};
		}
		\draw (-0.1, {\d}) -- (0.1, {\d})
				node[pos=0, left=2pt, scale=0.7] {$\Delta$};
		\draw (-0.1, {-\d}) -- (0.1, {-\d})
				node[right=2pt, scale=0.7] {$-\Delta$};
		\foreach \y in {-\X, ..., -2} {
			\draw (-0.1, {\y * \d}) -- (0.1, {\y * \d})
				node[right=2pt, scale=0.7] {$\y \Delta$};
		}

		\draw (0.5, 0.1) -- (0.5, -0.1)
			node[below=2pt, scale=0.7] {$\frac{\Delta}{2}$};
		\foreach \i in {1, ..., \X} {
			\tikzmath { 
				\x = \i + 0.5; 
				\label = int(abs(\i * 2 + 1));
			} 
			\draw (\x, 0.1) -- (\x, -0.1)
				node[below=2pt, scale=0.7] {$\frac{\label\Delta}{2}$};
		}

		\draw (-0.5, 0.1) -- (-0.5, -0.1)
			node[above=2pt, scale=0.7] {$-\frac{\Delta}{2}~~$};
		\foreach \i in {-\X, ..., -1} {
			\tikzmath { 
				\x = \i - 0.5; 
				\label = int(abs(\i * 2 - 1));
			} 
			\draw (\x, 0.1) -- (\x, -0.1)
				node[below=2pt, scale=0.7] {$-\frac{\label\Delta}{2}~$};
		}

		\draw[red] ({-\X - 1}, {-\X * \d})
			-- ({-(\X - 1) - 0.5}, {-\X * \d});
		\foreach \i in {-\X, ..., \Xm2} {
			\tikzmath { \x = \i - 0.5; } 
			\draw[red] ({\x + 1}, \i * \d) -- ++(0, \d)
				-- ++(1, 0);
		}
		\draw[red] ({\X - 0.5}, {(\X - 1) * \d})
			-- ({\X + 0.5}, {(\X - 1) * \d});

		\draw[<->] ({-\X - 0.5}, {-(\X + 1) * \d}) -- ++({2 * \X}, 0)
			node[midway, below=2pt] {$2X_M$};
	\end{tikzpicture}
\end{document}
```

* El cuantizador tiene [[Rango dinámico|rango dinámico]] igual a $2 ~ X_M$ y permite considerar señales que toman valores positivos y negativos. Si una entrada cae fuera del rango dinámico el cuantizador recorta a la misma ([[Clipping|clipping]])
* Los pasos de cuantificación son uniformes
* Los valores de las muestras se redondean hasta el nivel de cuantificación más cercano

Generalmente el número de niveles de cuantificación es potencia de dos. Es decir, $M = 2^{(B + 1)}$. Esto quiere decir, que cada nivel de cuantificación se puede representar usando $B + 1$ bits. El bloque de codificación se encargará de asignar las palabras de $B + 1$ bits a cada nivel de cuantificación. Existen básicamente $2$ esquemas que son los más utilizados
* [[Complemento a la base|Complemento a dos]]
* [[Representación de enteros exceso n|Offset binario]]


## Calculo de error
---
Notemos que el $\Delta$ que estuvimos usando se calcula como $$ \Delta = \frac{2 X_M}{2^{B + 1}} = \frac{X_M}{2^B} $$
Que introduce un [[Error de truncamiento|error de truncamiento]] $e(n)$ al cuantizador dado por $$ - \frac{\Delta}{2} < e(n) \le \frac{\Delta}{2} $$
Si $x(n)$ queda fuera de este intervalo, el cuantizador truncará la salida y el error es mucho mayor

Lamentablemente $e(n)$ no será conocido siempre. Por esta  razón, nos interesará hacer un análisis de los errores introducidos por el cuantizador. Como en general, no es posible saber con qué tipos de entradas un cuantizador va a ser usado sería conveniente que 
* El análisis debería ser válido para un gran número de señales
* Debe ser independiente, en la medida de lo posible, de las características de las señales $x(n)$ a la entrada del cuantizador

Una medida de la degradación que el ruido introduce en la señal de interés es la relación señal-ruido (SNR) $$ SNR = 10 ~ \log_{10}\left( \frac{\sigma_x^2}{\sigma_e^2} \right) $$ donde $\sigma_x^2$ y $\sigma_e^2$ son la [[Varianza|varianza]] de la señal $x(n)$ y del error, respectivamente, con $$ \begin{align} 
	\sigma_e^2 &= \int_{-\frac{\Delta}{2}}^{\frac{\Delta}{2}} e^2 p_e(e) ~ de \\
	&= \frac{1}{\Delta} \int_{-\frac{\Delta}{2}}^{\frac{\Delta}{2}} e^2 ~ de \\
	&= \frac{\Delta^2}{12} \\
	&= \frac{X_M^2}{12 ~ 2^{2B}}
\end{align} $$
Por lo tanto, reemplazando $$ \begin{align} 
	SNR &= 10 ~ \log_{10}\left( \sigma_x^2 \frac{12 ~ 2^{2B}}{X_M^2} \right) \\
	&= 10 \log_{10} (12) + 20 B \log_{10} (2) - 20 \log_{10} \left( \frac{X_M}{\sigma_x} \right) (dB)
\end{align} $$
Observamos lo siguiente
* Por cada bit extra que nuestro conversor puede entregar tenemos que la SNR aumenta $6$ dB
* Cuanto más pequeña es $\sigma_x$ con respecto al rango dinámico del conversor $X_M$ mayor es la penalidad en SNR que debemos pagar
* Es importante tener una fórmula para el término $20 \log_{10} \left( \frac{X_M}{\sigma_x} \right)$ que nos permita en forma general evaluar el número de bit necesarios para una determinada SNR deseada. En general se asume que la señal $x(n)$ tiene una amplitud que se distribuye en forma [[Distribución Normal|gaussiana]]. La [[Probabilidad|probabilidad]] de que la amplitud de la señal supere el valor de $3\sigma_x$ es menor al $0.3~\%$. Entonces podemos acondicionar la señal analógica de forma tal que $\sigma
Para calcular el valor verdadero de la SNR vamos a usar la siguiente expresión $$ SNR = \frac{\displaystyle\sum_{n = 0}^{N - 1} x^2(n) }{\displaystyle\sum_{n = 0}^{N - 1} e^2(n) } $$

