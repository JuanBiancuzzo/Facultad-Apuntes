---
dia: 2025-09-21
etapa: empezado
referencias: []
aliases: 
  - Predicción soft#^soft
  - Predicción hard#^hard
tags:
  - carrera/ingeniería-electrónica/taller-de-señales/Clasificación-en-Inteligencia-Artificial
  - nota/facultad
vinculoFacultad:
  - tema: Clasificación en Inteligencia Artificial
    capitulo: 3
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Un clasificador el aquel [[ingeniería en informática/aninfo/Ingeniería de software/Modelo|modelo]] que intenta resolver un [[ingeniería en informática/orga/Machine learning/Problema de clasificación|problema de clasificación]] donde busca estimar una [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]] $Y = \varphi(X)$, donde $Y \in \mathcal{Y}$ es una variable categórica (con [[licenciatura en ciencias matemáticas/algebra 1/Números naturales e Inducción/Cardinalidad|cardinalidad]] menor a [[Infinito|infinito]]) que recibe el nombre de [[ingeniería en informática/discreta/Relaciones/Clase|clase]] 

La [[Función de costo|función de costo]] elegida en este tipo de problemas es la [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Loss 0-1|Loss 0-1]] o [[ingeniería en informática/orga/Machine learning/Métrica de un modelo#^bf4e62|Hard error]]. Esta [[ingeniería en informática/orga/Machine learning/Métrica de un modelo|métrica]], a diferencia del [[ingeniería en informática/proba/Inferencia estadística/Consistencia en media cuadrática|error cuadrático]], solo distingue entre aciertos y errores. El [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^riesgo-esperado|riesgo esperado]] es la [[investigación/matemática/Probabilidad/Probabilidad|probabilidad]] de error $\mathbb{E}[\ell(X,~ Y)] = \mathbb{P}(Y \ne \varphi(X))$ 

La función costo hard error es problemática cuando se quiere resolver la minimización del [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^riesgo-empirico|error empírico]] numéricamente. No solo por los posibles problemas de [[ingeniería en informática/analisis 2/Propiedades de funciones/Diferenciable|diferenciabilidad]], sino porque su estructura de saltos no permite un recorrido por [[investigación/machine Learning/Red Neuronal/Descenso de gradiente|gradiente descendente]] efectivo

Es entonces que surge la necesidad de métodos más sofisticados. Teniendo en cuenta que el objetivo de un problema de clasificación es aprender el [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Clasificador Bayesiano|clasificador Bayesiano]], donde en la práctica suele dividirse dicha tarea en dos operaciones
* Aprender toda la [[ingeniería electrónica/estoca/Distribuciones multivariables/Distribución condicional|distribución condicional]] $P_{Y \mid X}(y \mid x)$
* Estimar a partir de la distribución aprendida, el clasificador bayesiano quedándose con el argumento [[ingeniería en informática/discreta/Relaciones/Máximo|máximo]] $\varphi(x) = \arg\max_y P_{Y \mid X = x}(y)$

Mientras que la segunda operación es inmediata, el aprender $P_{Y \mid X}(y \mid x)$ requiere definir una nueva función costo, donde minimizar su valor esperado tenga a esta distribución como valor óptimo

> [!propiedad]+ Propiedad 7.3.2  
> $\mathbb{E}\left[ -\log \hat{P}(Y \mid X) \right] \ge \mathbb{E}\left[ -\log P_{Y \mid X = X}(Y) \right]$ con igualdad sii $\hat{P}(Y \mid X) = P_{Y \mid X = X}(Y)$ para todo $(x,~ y)$, donde las esperanzas involucradas son con respecto a la verdadera distribución conjunta de $(X,~ Y)$
> 
> > [!demostracion]- Demostración
> > La demostración es inmediata a partir de la [[ingeniería en informática/orga/Compresión/Divergencia de Kullback-Leibler#^pro-8-1-8|Propiedad 8.1.8]] $$ \begin{align} 
> >     \mathbb{E}\left[ -\log\hat{P}(Y \mid X) \right] &= \mathbb{E}\left[ \log\left( \frac{P_{Y \mid X = X}(Y)}{\hat{P}(Y \mid X)} \right) \right] + \mathbb{E}\left[ -\log P_{Y \mid X = X}(Y) \right] \\
> >      &= \mathbb{E}\left[ D_{KL}\left( P_{Y \mid X = X} \mid\mid \hat{P}(\cdot \mid X)  \right) \right] + \mathbb{E}\left[ -\log P_{Y \mid X = X}(Y) \right] \\
> >      &\ge \mathbb{E}\left[ -\log P_{Y \mid X = X}(Y) \right]
> > \end{align} $$ donde tener en cuenta que $D_{KL}\left( P_{Y \mid X = X} \mid\mid \hat{P}(\cdot \mid X) \right)$ es [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]] de $x$
^pro-7-3-2

La función costo [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Log-loss|log-loss]] puede ser estudiada de forma análoga a la [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Clasificador Bayesiano#^pro-7-3-1|propiedad 7.3.1]], teniendo en cuenta que se estará optimizando una relación probabilística $\hat{P}(y \mid x)$ en lugar de una determinística $\varphi(x)$ %% Hacerlo en este apunte %%

El riesgo a minimizar $\mathbb{E}\left[ -\log\hat{P}(Y \mid X) \right]$ se denomina [[ingeniería en informática/orga/Compresión/Entropía cruzada|entropía cruzada]], el valor óptimo se alcanza con la verdadera distribución $P_{Y \mid X}$ y el [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^error-bayesiano|error bayesiano]] asociado $\mathbb{E}\left[ -\log P_{Y \mid X = X}(Y) \right]$ recibe el nombre de [[Entropía condicional|entropía condicional]]

Los clasificadores entrenados con este paradigma permiten efectuar dos tipos de decisiones
* Sea $x \in \mathbb{R}^d$, llamamos predicción soft de un algoritmo a la [[ingeniería en informática/proba/Representación de variables aleatorias/Predicción|predicción]] de las probabilidades estimadas $\hat{P}(\cdot \mid x)$. Esta estimación es un [[ingeniería en informática/algo 1/Lenguaje C/Array|vector]] de probabilidades de todas las clases posibles (son valores no negativos que suman $1$). Su desempeño se suele medir con el riesgo a minimizar  $\mathbb{E}\left[ -\log\hat{P}(Y \mid X) \right]$^soft
* Sea $x \in \mathbb{R}^d$, llamamos predicción hard de un algoritmo a la predicción final de la clase estimada $\varphi(x)$. Es decir, es una estimación del valor de $Y$. Generalmente se la suele definir a partir de la predicción soft: $\varphi(x) = \arg\max_{y \in \mathcal{Y}} \hat{P}(y \mid x)$. Su desempeño se suele medir con la probabilidad de acierto ([[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Accuracy|acccuracy]])  $\mathbb{P}(Y = \varphi(X))$^hard