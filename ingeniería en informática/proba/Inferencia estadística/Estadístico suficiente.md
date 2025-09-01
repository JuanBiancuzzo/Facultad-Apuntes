---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/proba/Inferencia-estadística
  - carrera/ingeniería-en-informática/proba/Inferencia-estadística
  - nota/facultad
aliases:
  - Teorema de Neyman-Fisher#^teo-7-2-1
vinculoFacultad:
  - tema: Inferencia estadística
    capitulo: 10
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
  - tema: Repaso de probabilidad y estadística
    capitulo: 1
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
# Definición
---
Un [[ingeniería en informática/proba/Inferencia estadística/Estadístico|estadístico]] $S(X)$ se denomina suficiente para $\theta$ si la distribución de $X \big|_{S(X) = s}$ no depende de $\theta$. Es decir que toda la [[ingeniería en informática/algo 1/Introducción a la programación/Información|información]] que posee la [[ingeniería en informática/proba/Inferencia estadística/Muestra|muestra]] sobre $\theta$ se encuentra en el estadístico. Además, el [[ingeniería en informática/proba/Inferencia estadística/Estadístico suficiente#^teo-7-2-1|teorema de Neyman-Fisher]] nos permite encontrar estadísticos suficientes de forma muy sensilla

> [!teorema]+ Teorema 7.2.1 (Teorema de Neyman-Fisher) 
> El [[ingeniería en informática/proba/Inferencia estadística/Estadístico|estadístico]] $S(X)$ es suficiente, si y solo si su [[ingeniería en informática/proba/Inferencia estadística/Función de verosimilitud|verosimilitud]] se puede descomponer como $$ p_{X \mid T = \theta}(x) = g(\theta,~ S(x)) \cdot h(x) $$
^teo-7-2-1

En términos bayesianos un estadístico suficiente se interpreta como una independencia condicional $X \perp \theta \big|_{S(X) = s}$ (es decir que la muestra y los parámetros son independientes cuando se conoce el estadístico suficiente). Este resultado implica que la distribución a posteriori debe cumplir $p_{T \mid X = x}(\theta) = p_{T \mid S(X) = s(x)}(\theta)$, y por lo tanto nos permite intercambiar el conocimiento de toda la muestra por el estadístico suficiente
