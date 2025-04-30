---
dia: 2025-04-30
etapa: ampliar
referencias: []
aliases:
  - Ley fuerte de los grandes números#^def-5-2-11
  - Ley débil de los grandes números#^def-5-2-12
tags:
  - carrera/ingeniería-electrónica/estoca/Análisis-de-datos
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Las leyes de los grandes números son [[Teorema|teoremas]] que implican el comportamiento de la [[Media muestral|media muestral]] cuando el número de promedios tiende a infinito


> [!definicion]+ Definición 5.2.11 (Ley fuerte de los grandes números) 
> Dada una [[Sucesión de variables aleatorias|sucesión]] $\set{ X_n }_{n \in \mathbb{N}_0}$ de variables [[Variables aleatorias independientes|independientes]] e idénticamente distribuidas, de [[Esperanza|media]] $\mu$ (la [[Varianza|varianza]] no necesariamente finita), se tiene que la [[Media muestral|media muestral]] [[Convergencia en forma casi segura|converge en forma casi segura]] a la media $\mu$, es decir $$ \bar{X}(n) = \frac{1}{n} \sum_{i = 1}^{n} X_i \xrightarrow{a.s.} \mu ~~~ \text{cuando} ~ n \to \infty $$
^def-5-2-11

Esto implica que la media muestral converge siempre a la media de las variables en forma casi segura, y además, en media cuadrática si la varianza es finita

> [!definicion]+ Definición 5.2.12 (Ley débil de los grandes números) 
> Dada una [[Sucesión de variables aleatorias|sucesión]] $\set{ X_n }_{n \in \mathbb{N}_0}$ de variables [[Variables aleatorias independientes|independientes]] e idénticamente distribuidas, de [[Esperanza|media]] $\mu$ (la [[Varianza|varianza]] no necesariamente finita), se tiene que la [[Media muestral|media muestral]] [[Convergencia en probabilidad|converge en probabilidad]] a la media $\mu$, es decir $$ \bar{X}(n) = \frac{1}{n} \sum_{i = 1}^{n} X_i \xrightarrow{p} \mu ~~~ \text{cuando} ~ n \to \infty $$
^def-5-2-12

Como esta es una implicación de la ley fuerte, es el motivo por el cual se llama ley débil. También, en el caso que la varianza sea finita, se puede demostrar usando la [[Consistencia en media cuadrática#^def-5-2-9|convergencia en media cuadrática]] 

## Diferencias entre ambas leyes
---
Se puede pensar la convergencia débil, usando la definición de [[Límite|límite]], que existe un $\tilde{\varepsilon} > 0$ tal que para un cierto $n > N$ se cumple $$ \mathbb{P}(|\bar{X} - \mu| > \varepsilon) < \tilde{\varepsilon} $$
Esta es la gran deferencia entre ambas leyes, donde la ley débil dice que la [[Probabilidad|probabilidad]] tiende a $0$ pero dada infinitas oportunidades puede ocurrir infinitas veces. Por otro lado, la ley fuerte dice que probabilidad $1$, dado un $N(\varepsilon)$ tendremos que $$ |\bar{X} - \mu| < \varepsilon $$