---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/proba/Inferencia-estadística
  - carrera/ingeniería-en-informática/proba/Inferencia-estadística
  - nota/facultad
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
Este [[ingeniería en informática/aninfo/Ingeniería de software/Modelo|modelo]] consiste en asumir información parcial en el conocimiento de la [[ingeniería en informática/proba/Variables y vectores aleatorios/Función de distribución|distribución]] de la [[ingeniería en informática/proba/Variables y vectores aleatorios/Variable aleatoria|variable]] $p(x \mid \theta)$. Es decir que se conoce dicha distribución exceptuando un conjunto de parámetros $\theta \in \Theta$

La [[ingeniería electrónica/taller de señales/Repaso de probabilidad y estadística/Estadística frecuentista|estadística frecuentista]] asume que las muestras son [[ingeniería en informática/proba/Variables y vectores aleatorios/Variables aleatorias independientes|independientes]] e idénticamente distribuidas para cada posible parámetro, y la [[ingeniería en informática/proba/Variables y vectores aleatorios/Función de distribución|distribución conjunta]] del set de datos observados $X = (x_1,~ \cdots,~ x_n)$ se la conoce como verosimilitud $$ \mathcal{L}(\theta) = p(\mathcal{D}_n \mid \theta) = \prod_{i = 1}^n p(x_i \mid \theta) $$
