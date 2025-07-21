---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Inferencia-estadística
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Inferencia-estadística
  - carrera/ingeniería-electrónica/estoca/Análisis-de-datos
  - carrera/ingeniería-electrónica/estoca/Repaso
etapa: ampliar
referencias: 
aliases:
  - Estimador convergente#^estimador-convergente
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Un estimador es una [[Función de variable aleatoria|función]] de la [[Muestra|muestra]] $\set{ X_1,~ \cdots,~ X_n }$ ([[Estadístico|estadístico]]) que provee un valor aproximado de un parámetro o característica desconocida, generalmente se usa la letra $\theta$ y se la escribe así $$ \hat{\theta} = \phi(X_1,~ \cdots,~ X_n) $$ donde $\phi : \mathbb{R}^n \to \mathbb{R}^m$, donde $m$ es las dimensión del parámetro que vamos a estimar ya que no necesariamente es un valor escalar

Para lograr esto vamos a tener que definir que significa $\hat{\theta} \approx \theta$ en términos probabilísticos, con esto vamos a definir el estimador convergente, donde diremos que $\hat{\theta}(n)$ es un estimador convergente a $\theta$ en alguna métrica ([[Convergencia en forma casi segura|en forma casi segura]], [[Consistencia en media cuadrática|en media cuadrática]], [[Convergencia en probabilidad|en probabilidad]], [[Convergencia en distribución|en distribución]]) cuando $$ \hat{\theta}(n) \xrightarrow{n \to \infty~} \theta $$ en la métrica especificada ^estimador-convergente
