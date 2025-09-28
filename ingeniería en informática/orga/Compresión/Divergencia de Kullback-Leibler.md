---
dia: 2023-04-03
tags:
  - carrera/ingeniería-en-informática/orga/Compresión
  - nota/facultad
aliases:
  - Entropía relativa
vinculoFacultad:
  - tema: Compresión
    capitulo: 4
    materia: Organización de datos
    carrera: Ingeniería en informática
  - tema: Clasificación en Inteligencia Artificial
    capitulo: 3
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
# Definición
---
> [!definicion]+ Definición 8.1.7 (Divergencia de Kullback Leibler) 
> Sea $P(\cdot)$ y $Q(\cdot)$ dos [[ingeniería en informática/proba/Variables y vectores aleatorios/Función de masa de probabilidad|funciones de masa de probabilidad]] tales que si $Q(y) = 0$ entonces $P(y) = 0$. Se define la divergencia de Kullback Leibler como $$ D_{KL}(P \mid\mid Q) = \sum_{y \in \mathcal{Y}} P(y) ~ \ln\left(\frac{P(y)}{Q(y)} \right) = \mathbb{E}_P\left[ \ln\left(\frac{P(Y)}{Q(Y)}\right) \right] $$ donde el subíndice $P$ en la [[ingeniería en informática/proba/Representación de variables aleatorias/Esperanza|esperanza]] hace referencia a que medida se utiliza para calcularla
^def-8-1-7

La divergencia de Kullback Leibler no es una [[Distancia|distancia]] ya que no es simétrica $D_{KL}(P \mid\mid Q) \ne D_{KL}(Q \mid\mid P)$, pero si tiene la siguiente propiedad


> [!propiedad]+ Propiedad 8.1.8  
> $D_{KL}(P \mid\mid Q) \ge 0$ con igualdad sii $P(y) = Q(y)$ para todo $y \in \mathcal{Y}$
> 
> > [!demostracion]- Demostración
> > Sea $f(x) = x - 1 - \log(x)$ con $x > 0$, es inmediato notar que $f'(x) = 1 - \frac{1}{x}$ y que $f''(x) = \frac{1}{x^2} > 0$. Debido a la [[ingeniería electrónica/analisis 3/Serie de Fourier/Convergencia puntual|convergencia]] de $f(x)$, la función alcanza su mínimo cuando $f'(x) = 0$ (se alcanza en $x = 1$). Por lo tanto la función $f(x) \ge f(1) = 0$ es no negativa. Esto quiere decir que $\log(x) \le x - 1$ con igualdad sii $x = 1$
> > 
> > Luego $$ -D_{KL}(P \mid\mid Q) = \mathbb{E}_P\left[ \ln\left(\frac{Q(Y)}{P(Y)}\right) \right] \le \mathbb{E}_P\left[ \frac{P(Y)}{Q(Y)} - 1 \right] = \mathbb{E}_P\left[ \frac{P(Y)}{Q(Y)} \right] - 1 $$ con igualdad sii $P(y) = Q(y)$ para todo $y \in \mathcal{Y}$. Esa última esperanza puede escribirse como $$ \mathbb{E}_P\left[ \frac{P(Y)}{Q(Y)} \right] = \sum_{y \in \mathcal{Y}} P(y) \frac{Q(y)}{P(y)} = 1 $$
> > 
 > > Finalmente $D_{KL}(P \mid\mid Q) \ge 0$ con igualdad sii $P(y) = Q(y)$ para todo $y \in \mathcal{Y}$
^pro-8-1-8

Esta propiedad implica que la divergencia alcanza su [[ingeniería en informática/discreta/Relaciones/Mínimo|mínimo]] cuando las distribuciones son iguales. Esta [[Métrica|métrica]] permite proponer modelos cuyo valor óptimo sea la verdadera distribución