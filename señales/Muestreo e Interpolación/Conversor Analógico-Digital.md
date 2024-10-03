---
dia: 2024-04-16
tags:
  - señales/Muestreo-e-Interpolación
  - nota/facultad
  - embebidos/Estrategias-de-control-de-periféricos
  - embebidos/Conversión-analógica-a-digital-y-digital-a-analógica
  - placa-de-Desarrollo/placa-de-desarrollo-Nucleo-64/placa-STM32-F302R8
aliases:
  - Conversor A/D
  - A/D converter
  - Analog to digital converter
  - ADC
  - Módulo HAL del conversor Analógico-Digital#Modulo HAL
  - Módulo Hardware Abstraction Layer del conversor Analógico-Digital#Modulo HAL
  - Módulo Hardware Abstraction Layer del conversor A/D#Modulo HAL
  - Módulo HAL del conversor A/D#Modulo HAL
  - Módulo Hardware Abstraction Layer del ADC#Modulo HAL
  - Módulo HAL del ADC#Modulo HAL
referencias: []
---
# Definición
---
Podemos [[Modelo|modelar]] un conversor A/D de la siguiente forma

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1, transform shape, ultra thick]
		\node[draw, circle, scale=1.3] 
			(x) at (0, 0) {$\times$};
		
		\node[draw, font=\bfseries, align=center, inner sep=5pt] 
			(conversor) at (5, 0) 
			{Conversor de tren de\\impulsos a secuencia\\de tiempo discreto};

		\draw[<-] (x) -- ++(-2.5, 0)
			node[font=\bfseries, above right=2pt] {$x_c(t)$};
		\draw[<-] (x) -- ++(0, 2)
			node[font=\bfseries, below left=2pt] {$p(t)$};
		\draw[->] (x) -- (conversor.west)
			node[midway, font=\bfseries, above=2pt] {$x_p(t)$};
		\draw[->] (conversor.east) -- ++(2, 0)
			node[font=\bfseries, above=2pt] {$x(n) = x(nT)$};

		\draw[dashed] (-1.3, -1.5) rectangle (8, 2.5);
		\path (-1.3, 2.5) -- (8, 2.5)
			node[midway, font=\bfseries, above=2pt] {Conversor A/D};
	\end{tikzpicture}
\end{document}
```

^8b8439

Donde vamos a definir $x_c(t)$ como la [[Señal#^016a35|señal continua]] a convertir, y $$ \begin{align} 
	p(t) &= \sum_{n = -\infty}^{\infty} \delta(t - nT) \\
	x_p(t) &= x_c(t) ~ p(t) \\
	&= \sum_{n = -\infty}^{\infty} x_c(t) ~ \delta(t - nT) \\
\end{align} $$
Este modelo matemático nos va a permitir analizar la acción de este [[Sistema|sistema]] en el dominio de la frecuencia

## Respuesta en frecuencia
---
Veamos que $x_p(t) = x_c(t) ~ p(t) = \sum_{n = -\infty}^{\infty} x_c(t) ~ \delta(t - nT)$, en el dominio en el tiempo. En el dominio de la frecuencia tenemos que $$ X_p(j\omega) = \frac{1}{2\pi} X_c(j\omega) \ast P(j\omega) $$
Donde sabemos que $$ P(j\omega) = \frac{2\pi}{T} \sum_{k=-\infty}^{\infty} \delta(\omega - k\omega_s) $$ donde $\omega_s = \frac{2\pi}{T}$ es la frecuencia de muestreo. Es claro entonces que podemos escribir $$ X_p(j\omega) = \frac{1}{T} \frac{2\pi}{T} \sum_{k=-\infty}^{\infty} X_c(j(\omega - k\omega_s)) $$
Vemos que la [[Transformada de Fourier|transformada de Fourier]] $x_p(t)$ es una sucesión de copias de $X_c(j\omega)$ centradas en frecuencias $k\omega_s$ con $k \in \mathbb{Z}$, dependiendo de esta $\omega_s$ las copias pueden solaparse

```tikz
\usetikzlibrary{math}
\begin{document} 
	\tikzmath{
		\d = 4;
		\y1 = 3; 
		\y2 = \y1 - \d; 
		\y3 = \y2 - \d; 
		\w = 1;
		\T = 2 * \w + 0.5;
		\xmax = 7;
		\cant = 2;
	}

	\begin{tikzpicture}[scale=1, transform shape, ultra thick]
		\draw[->] (-\xmax, \y1) -- (\xmax, \y1)
			node[below=2pt] {$\omega$};
		\draw[->] (0, {\y1 - 0.1}) 
			node[below=2pt] {$0$}
			-- ++ (0, 3)
			node[right=2pt] {$X_c(j\omega)$};
		\draw[red] (-\w, \y1) 
			-- (0, {\y1 + 2})
			-- (\w, \y1);
		\path (-\w, \y1) node[below=2pt] {$-W$}
			-- (\w, \y1) node[below=2pt] {$W$};

		\path (0, {\y1 + 2}) node[above right=2pt] {$1$};
		
		\draw (-\xmax, \y2) -- (\xmax, \y2)
			node[below=2pt] {$\omega$};
		\draw[->] (0, {\y2 - 0.1}) 
			-- ++ (0, 3)
			node[right=2pt] {$P(j\omega)$};

		\foreach \x in {-\cant, ..., \cant} {
			\draw[->] ({\x * \T}, \y2) 
				node[below=2pt] {$\x ~ \omega_s$}
				-- ({\x * \T}, {\y2 + 2});
		}
		\path (0, {\y2 + 2}) node[above right=2pt] {$\frac{2\pi}{T}$};
			
		\draw (-\xmax, \y3) -- (\xmax, \y3)
			node[below=2pt] {$\omega$};
		\draw[->] (0, {\y3 - 0.1})
			-- ++ (0, 3)
			node[right=2pt] {$X_p(j\omega)$};

		\foreach \x in {-\cant, ..., \cant} {
			\draw[red] ({-\w + \x * \T}, \y3) 
				-- ({\x * \T}, {\y3 + 2})
				-- ({\w + \x * \T}, \y3);
			\path ({\x * \T}, \y3) 
				node[below=2pt] {$\x ~ \omega_s$};
		}
		\path (-\w, \y3) node[below=2pt] {$-W$}
			-- (\w, \y3) node[below=2pt] {$W$};
		\draw[->, dashed] ({\w - \T}, \y3) 
			-- ({\w - \T}, {\y3 - 0.7}) node[below=1pt] {$-\omega_s + W$};
		\draw[->, dashed] ({\T - \w}, \y3) 
			-- ({\T - \w}, {\y3 - 0.7}) node[below=1pt] {$\omega_s - W$};
		

		\path (0, {\y3 + 2}) node[above right=2pt] {$\frac{1}{T}$};
	\end{tikzpicture}
\end{document}
```

Vemos que si $X_c(j\omega) = 0$ para $|\omega| > W$ y si $2W < \omega_s$ las replicas no se solapan.

```tikz
\usetikzlibrary{math}
\begin{document} 
	\tikzmath{
		\d = 4;
		\y1 = 3; 
		\y2 = \y1 - \d; 
		\y3 = \y2 - \d; 
		\w = 1;
		\T = 2 * \w - 0.5;
		\xmax = 7;
	}

	\begin{tikzpicture}[scale=1, transform shape, ultra thick]
		\draw[->] (-\xmax, \y1) -- (\xmax, \y1)
			node[below=2pt] {$\omega$};
		\draw[->] (0, {\y1 - 0.1}) 
			node[below=2pt] {$0$}
			-- ++ (0, 3)
			node[right=2pt] {$X_c(j\omega)$};
		\draw[red] (-\w, \y1) 
			-- (0, {\y1 + 2})
			-- (\w, \y1);
		\path (-\w, \y1) node[below=2pt] {$-W$}
			-- (\w, \y1) node[below=2pt] {$W$};

		\path (0, {\y1 + 2}) node[above right=2pt] {$1$};
		
		\draw[->] (-\xmax, \y2) -- (\xmax, \y2)
			node[below=2pt] {$\omega$};
		\draw[->] (0, {\y2 - 0.1}) 
			-- ++ (0, 3)
			node[right=2pt] {$P(j\omega)$};

		\foreach \x in {-2, ..., 2} {
			\draw[->] ({\x * \T}, \y2) 
				node[below=2pt] {$\x ~ \omega_s$}
				-- ({\x * \T}, {\y2 + 2});
		}
		\path (0, {\y2 + 2}) node[above right=2pt] {$\frac{2\pi}{T}$};
			
		\draw[->] (-\xmax, \y3) -- (\xmax, \y3)
			node[below=2pt] {$\omega$};
		\draw[->] (0, {\y3 - 0.1})
			-- ++ (0, 3)
			node[right=2pt] {$X_p(j\omega)$};

		\foreach \x in {-2, ..., 2} {
			\draw[dashed, red] ({-\w + \x * \T}, \y3) 
				-- ({\x * \T}, {\y3 + 2})
				-- ({\w + \x * \T}, \y3);
			\path ({\x * \T}, {\y3 - 0.5}) 
				node[below=1pt] {$\x ~ \omega_s$};
		}

		\foreach \x in {-2, ..., 2} {
			\draw[blue] ({-\w + \x * \T}, {\y3 + 1}) 
				-- ({-\w * 0.5 + \x * \T}, {\y3 + 1})
				-- ({\x * \T}, {\y3 + 2})
				-- ({\w * 0.5 + \x * \T}, {\y3 + 1}) 
				-- ({\w + \x * \T}, {\y3 + 1});
			\path ({\x * \T}, {\y3 - 0.5}) 
				node[below=1pt] {$\x ~ \omega_s$};
		}

		\path (-\w, \y3) node[below=2pt] {$-W$}
			-- (\w, \y3) node[below=2pt] {$W$};
		\draw[->, dashed] ({\w - \T}, \y3) 
			-- ({\w - \T}, {\y3 - 1}) node[below=1pt] {$-\omega_s + W~~~$};
		\draw[->, dashed] ({\T - \w}, \y3) 
			-- ({\T - \w}, {\y3 - 1}) node[below=1pt] {$~~~\omega_s - W$};
		

		\path (0, {\y3 + 2}) node[above right=2pt] {$\frac{1}{T}$};
	\end{tikzpicture}
\end{document}
```

Vemos que aunque $X_c(j\omega) = 0$ para $|\omega| > W$ si $2W \ge \omega_s$ las replicas se solapan, es decir que existe [[Aliasing|aliasing]]

En el caso que $x_c(t)$ no fuera de [[Señal de banda limitada|banda limitada]], las replicas se solaparían para cualquier elección de $\omega_s$

Esto da pie al [[Teorema Whittaker-Kotelnikov-Nyquist-Shannon|teorema Whittaker-Kotelnikov-Nyquist-Shannon]] ![[Teorema Whittaker-Kotelnikov-Nyquist-Shannon#Definición]]
## Modulo HAL
---
La [[Hardware Abstraction Layer|HAL]] usa una [[Struct|Estructura]] para declarar periféricos ADC, como se hace con los pines [[General Purpose Input Output|GPIO]] y los [[Interrupción por temporizador|temporizadores]]

```c
typedef struct {
    ADC_TypeDef       *Instance;
    ADC_InitTypeDef    Init;
    __IO uint32_t      NbrOfCurrentConversionRank;
    DMA_HandleTypeDef  *DMA_Handle;
    HAL_LockTypeDef    Lock;
    __IO uint32_t      State;
    __IO uint32_t      ErrorCode;
} ADC_HandleTypeDef;
```

* `ADC_TypeDef *Instance` 
    * El [[Puntero|puntero]] al ADC, para poder diferenciar cual ADC se esta configurando
* `ADC_InitTypeDef Init 
    * Esta estructura se usa para configurar el modo de operación del ADC
* `__IO uint32_t NbrOfCurrentConversionRank 
    * Referencia el `Rank` o el número de canal en un grupo de ADC
* `DMA_HandleTypeDef *DMA_Handle 
    * El puntero a un [[Direct Memory Access controller|DMA]] handler que usa el ADC para la conversión
* `HAL_LockTypeDef Lock 
    * Permite en un ambiente [[Concurrencia|concurrente]], bloquear el acceso al recurso a otros [[Thread|threads]] mientras se esta usando
* `__IO uint32_t State 
    * El estado que usa el ADC para comunicarse con el [[Proceso|proceso]]
* `__IO uint32_t ErrorCode 
    * En el caso de error, se guardará en esta variable

Donde se define la estructura `ADC_InitTypeDef`

```c
typedef struct {
    uint32_t ClockPrescaler;
    uint32_t Resolution;
    uint32_t DataAlign;
    uint32_t ScanConvMode;
    uint32_t EOCSelection;
    uint32_t ContinuousConvMode;
    uint32_t NbrOfConversion;
    uint32_t DiscontinuousConvMode;
    uint32_t NbrOfDisConversion;
    uint32_t ExternalTrigConv;
    uint32_t ExternalTrigConvEdge;
    uint32_t DMAContinuousRequests;
} ADC_InitTypeDef;
```



