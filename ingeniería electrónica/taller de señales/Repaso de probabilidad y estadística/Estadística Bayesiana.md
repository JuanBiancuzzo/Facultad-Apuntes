---
dia: 2025-08-31
etapa: empezado
referencias: []
aliases:
  - Distribución predictiva#^distribucion-predictiva
tags:
  - carrera/ingeniería-electrónica/taller-de-señales/Repaso-de-probabilidad-y-estadística
  - nota/facultad
vinculoFacultad:
  - tema: Repaso de probabilidad y estadística
    capitulo: 1
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La estadística bayesiana busca verdades en contexto de incertidumbre, interpretando la [[investigación/matemática/Probabilidad/Probabilidad|probabilidad]] como una medida de credibilidad en un [[ingeniería en informática/proba/Teoría de probabilidades/Evento|evento]]

El [[ingeniería en informática/aninfo/Ingeniería de software/Modelo|modelo]] no solo representa el fenómeno a predecir, sino también nuestra propia ignorancia sobre el mismo. Busca evitar mentir maximizando incertidumbre dada la información disponible

A nivel técnico, la estadística bayesiana representa los parámetros del modelo por medio de una [[ingeniería en informática/proba/Variables y vectores aleatorios/Variable aleatoria|variable aleatoria]] $T$ con [[ingeniería en informática/proba/Variables y vectores aleatorios/Función de distribución|distribución]] a priori $p_T(\theta)$. En este tipo de modelos, la hipótesis de [[ingeniería en informática/proba/Variables y vectores aleatorios/Variables aleatorias independientes|independencia]] es válida cuando se conoce el parámetro. Es decir que la [[ingeniería en informática/proba/Inferencia estadística/Función de verosimilitud|verosimilitud]] de una muestra puede escribirse como $$ p_{X \mid T = \theta}(X) = \prod_{i = 0}^n  p_{X \mid T = \theta}(x_i) $$ no se pierde generalidad en asumir que las variables son idénticamente distribuidas

El corazón de la estadística bayesiana es la distribución a posteriori, la cuál se deduce por medio de la [[ingeniería en informática/proba/Teoría de probabilidades/Teorema de Bayes|regla de bayes]] combinando la distribución a priori con la verosimilitud $$ p_{T \mid X = x}(\theta) \propto p_T(\theta) \cdot \prod_{i = 1}^n p_{X \mid T = \theta}(x_i) $$
La distribución a posteriori nos permite definir [[ingeniería en informática/proba/Inferencia estadística/Estimador|estimadores]] puntuales a partir de ella. En el caso de buscar parámetros dentro de un [[ingeniería en informática/algebra 2/Espacios Vectoriales/Conjunto|conjunto]] $\Theta$ discreto, se suele elegir como estimador el máximo a posteriori $\hat{\theta}_{MAX} = \max_{\theta \in \Theta} p_{T \mid X = x}(\theta)$. En el caso de $\Theta$ continuo, el elección habitual suele ser la media a posteriori $\hat{\theta}_{BAY} = E[T \mid X = x]$

Sin embargo, el verdadero potencial de la estadística bayesiana radica en hacer predicciones sin necesidad de estimadores puntuales. En este sentido, este tipo de estadística no solo puede resolver los mismos problemas que la frecuentista, sino que también pueden intentar resolver problemas donde la estadística clásica es insuficiente o iluminar el sistema subyacente con un modelo más flexible. Es entonces que se define la distribución predictiva $$ p_{X_\text{test} \mid X = x}(x_\text{test}) = \int_{\Theta} p_{X \mid T = \theta}(x_\text{test}) ~ p_{T \mid X = x}(\theta) ~ d\theta $$ donde $X_\text{test}$ es una variable aleatoria no vista en el conjunto de entrenamiento $X$  ^distribucion-predictiva
