---
dia: 2024-11-10
etapa: empezado
referencias:
  - "487"
aliases:
  - GMM
  - Gaussian Mixture Model
  - Función discriminante#^funcion-discriminante
  - Análisis del discriminante cuadrático
  - Quadratic Discriminant Analysis
  - QDA
  - Análisis del discriminante lineal#Análisis del discriminante lineal
  - Linear Discriminant Analysis#Análisis del discriminante lineal
  - LDA#Análisis del discriminante lineal
tags:
  - carrera/ingeniería-electrónica/taller-de-señales/Clasificación-en-Inteligencia-Artificial
  - nota/facultad
  - investigación/ciencias-de-la-computación/algoritmos
  - investigación/ciencias-de-la-computación/Machine-learning
  - investigación/machine-Learning
  - investigación/matemática/Estadística/Machine-learning
  - nota/investigacion
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
El [[ingeniería en informática/aninfo/Ingeniería de software/Modelo|modelo]] de mezcla de Gaussianas (GMM) cae en la categoría de [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Algoritmo generativo|modelo generativo]], en él, se asume tanto que $Y$ es una variable categórica $Y \sim \text{Cat}(c_1,~ \cdots,~ c_K)$ como que la [[colección/distribuciones/Distribuciones|distribución]] de $X \mid_{Y = k} \sim \mathcal{N}(\mu_k,~ \Sigma_k)$ una [[colección/distribuciones/multivariada/Distribución Normal multivariada|distribución gaussiana multivariada]]

Vale la pena resaltar que una vez estimados los parámetros del modelo, será posible simular nuevas realizaciones como $k \leftarrow \text{Cat}(c_1,~ \cdots,~ c_K)$  para luego simular $x \leftarrow \mathcal{N}(\mu_k,~ \Sigma_k)$. En el GMM, la distribución de los predictores es una [[ingeniería en informática/proba/Variables aleatorias condicionadas/Variable aleatoria mezcla|mezcla]] de gaussianas $$ \hat{p}(x) = \sum_{k = 1}^{K} \underbrace{\mathbb{P}(Y = k)}_{c_k} ~ p_{X \mid Y = k}(x) = \sum_{k = 1}^{K} c_k ~ \frac{1}{\sqrt{(2 \pi)^d ~ \sqrt{|\Sigma_k|}}} ~ \exp\left( -\frac{(x - \mu_k)^T ~ \Sigma_k^{-1} ~ (x - \mu_k)}{2} \right)  $$ donde $d$ es la cantidad de parámetros 

Además la [[ingeniería electrónica/estoca/Distribuciones multivariables/Distribución condicional|distribución condicional]] es de la forma $$ \hat{P}(y \mid x) \propto \exp\left( \log(c_y) - \frac{1}{2} (x - \mu_k)^T ~ \Sigma_k^{-1} ~ (x - \mu_k) - \frac{1}{2} \log |\Sigma_k| \right) $$ dando que en este modelo, $\hat{P}(y \mid x)$ es el [[ingeniería en informática/orga/NLP/Softmax|softmax]] de la forma cuadrática $\delta_y(x) = \log(c_y) - \frac{1}{2} (x - \mu_k)^T ~ \Sigma_k^{-1} ~ (x - \mu_k) - \frac{1}{2} \log |\Sigma_k|$, la cuál recibe el nombre de función discriminante, esta define la [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Frontera de decisión|frontera de decisión]] del problema ^funcion-discriminante

Por esta función discriminante genera una frontera cuadrática, es por esto que el algoritmo utilizado para modelar la GMM recibe el nombre de análisis del discriminante cuadrático, donde las [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Clasificador#^hard|predicción hard]] son definidas a partir de $$ \varphi(x) = \underset{y \in \mathcal{Y}}{\arg\max} ~ \hat{P}(y \mid x) = \underset{y \in \mathcal{Y}}{\arg\max} ~ \delta_y(x) $$
De esta manera, la [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Clasificador#^soft|predicción soft]] $\hat{P}(y \mid x)$ y la predicción hard $\varphi(x)$ serán el softmax y el argmax de la función discriminante $\delta_y(x)$ respectivamente

## Análisis del discriminante lineal
---
Uno de los problemas de los modelos generativos es que al estimar tanto $P_{Y \mid X = x}(y)$ como $p(x)$, los modelos poseen mayor cantidad de parámetros. Esta característica vuelve a estos modelos más complejos que sus contra-partes [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Algoritmo discriminativo|discriminativas]], aumentando los riesgos de [[ingeniería en informática/orga/Machine learning/Overfitting|overfitting]] si no se tiene suficiente cantidad de muestras

Con el fin de bajar la complejidad, una habitual simplificación es suponer todas las [[ingeniería en informática/proba/Representación de variables aleatorias/Covarianza cruzada#^def-5-3-2|matriz de covarianza]] iguales ($\Sigma_y = \Sigma$ para todo $y \in \mathcal{Y}$), hipótesis que recibe el nombre de [[Hipótesis de homocedasticidad|homocedasticidad]]. Bajo esta hipótesis, la distribución condicional puede reescribirse agrupando constantes multiplicativos como $$ \begin{align} 
    \hat{P}(y \mid x) &\propto \exp\left( \log(c_y) - \frac{1}{2} (x - \mu_y)^T ~ \Sigma^{-1} ~ (x - \mu_y) \right) \\
     &\propto \exp\left( \log(c_y) + x^T \Sigma^{-1} \mu_y - \frac{1}{2} \mu_y^T \Sigma^{-1} \mu_y \right)
\end{align} $$ donde se redefine la función discriminante para este caso como una función lineal $\tilde{\delta}_k(x) = \log(c_y) + x^T \Sigma^{-1} \mu_y - \frac{1}{2} \mu_y^T \Sigma^{-1} \mu_y$. Por este motivo, el algoritmo utilizado para modelar la GMM recibe el nombre de análisis del discriminante lineal, donde la predicción soft $\hat{P}(y \mid x)$ y la predicción hard $\varphi(x)$ serán el softmax y el argmax de la función discriminante $\tilde{\delta}_y(x)$ respectivamente. Es importante destacar que el modelo asociado a la [[ingeniería en informática/orga/Machine learning/Regresión logística|regresión logística]], es un caso particular de LDA donde $\omega_k = \Sigma^{-1} ~ \mu_k$ y $b = \log(c_k) - \frac{1}{2} \mu_k^T \Sigma^{-1} \mu_k$

## Algoritmo
---
Una de las características de los [[investigación/ciencias de la computación/algoritmos/Algoritmo|algoritmos]] de LDA y QDA es que ambos desarrollan su etapa de entrenamiento a partir de computar [[ingeniería en informática/proba/Inferencia estadística/Estimador|estimador]] puntuales. Es habitual utilizar para ello [[ingeniería en informática/proba/Inferencia estadística/Sesgo#^estimador-insesgado|estimadores insesgados]] entre todos vamos a estar utilizando $$ \mathcal{D}_k = \Set{ x_i : 1 \le i \le n \land y_i = k } $$ y suponiendo que $X \mid_{Y = k} \sim \mathcal{N}(\mu_k,~ \Sigma_k)$ y $Y \sim Cat(c_1,~ \cdots,~ c_K)$

Empezando por el estimador de $c_k$ se tiene $$ \hat{c}_k = \frac{1}{n} ~ \#(\mathcal{D}_k) $$
> [!demostracion]- Demostración
> Para demostrar que es un estimador insesgado, vamos a calcular la [[ingeniería en informática/proba/Representación de variables aleatorias/Esperanza|esperanza]] del estimador. Donde notemos por las suposiciones, veamos que $\#(\mathcal{D}_k) \sim Bin(n,~ c_k)$ ([[colección/distribuciones/discreta/Distribución Binomial|distribución binomial]]) y por lo tanto si recordamos que la esperanza de una binomial es (con los parámetros dado en este caso) $n \cdot c_k$ por lo tanto $$ \begin{align} 
>     \mathbb{E}\left[ \hat{c}_k \right] &= \mathbb{E}\left[ \frac{1}{n} ~ \#(\mathcal{D}_k) \right] \\
>      &= \frac{1}{n} ~ \mathbb{E}\left[ \#(\mathcal{D}_k) \right] \\
>      &= \frac{1}{n} ~ n ~ c_k \\
>     \mathbb{E}\left[ \hat{c}_k \right] &= c_k \\
> \end{align} $$

Para el estimador del [[ingeniería en informática/proba/Representación de variables aleatorias/Esperanza|media]] por categoría $\mu_k$ se tiene $$ \hat{\mu}_k = \frac{1}{\#(\mathcal{D}_k)} \sum_{x \in \mathcal{D}_k} x $$
> [!demostracion]- Demostración
> Se tiene que ver como para cada categoría es una [[ingeniería electrónica/estoca/Análisis de datos/Media muestral|media muestral]] por lo que es un estimador insesgado. Pero planteándolo de otra forma, se puede observar que las medias pueden escribirse como $$ \hat{\mu}_{k} = \frac{1}{\#(\mathcal{D}_k)} \sum_{i = 1}^{n} x_i ~ \mathbb{1}\Set{ y_i = k } $$ Se define $\textbf{y} = (y_1,~ \cdots,~ y_n)$ , donde $\#(\mathcal{D}_k) = f(\textbf{y})$ es función de las etiquetas. Utilizando las propiedades de la [[ingeniería en informática/proba/Esperanza condicional/Esperanza condicional|esperanza condicional]] $$ \mathbb{E}\left[ \hat{\mu}_k \right] = \mathbb{E}\left[ \mathbb{E}\left[ \hat{\mu}_k \mid \textbf{y} \right] \right] = \mathbb{E}\left[ \frac{1}{\#(\mathcal{D}_k)} \sum_{i = 1}^{n} \mathbb{E}\left[ x_i \mid \textbf{y} \right] \mathbb{1}\Set{ y_i = k } \right] $$
> 
> Dado que los pares $(x,~ y)$ son independientes entre ellos, $\mathbb{E}[x_i \mid \textbf{y}] = \mathbb{E}[x_i \mid y_i] = \mu_{y_i}$. Por lo tanto $$ \mathbb{E}\left[ \hat{\mu}_k \right] = \mathbb{E}\left[ \frac{\mu_k}{\#(\mathcal{D}_k)} \sum_{i = 1}^{n} \mathbb{1}\Set{ y_i = k } \right] = \mu_k $$

Para el estimador de la [[ingeniería en informática/proba/Representación de variables aleatorias/Covarianza cruzada#^def-5-3-2|covarianza]] por categoría $\Sigma_k$ se tiene $$ \hat{\Sigma}_{k} = \frac{1}{\#(\mathcal{D}_k) - 1} \sum_{x \in \mathcal{D}_k} (x - \hat{\mu}_k) ~ (x - \hat{\mu}_k)^T $$
> [!demostracion]- Demostración
> Se puede observar que las matrices de covarianza se pueden escribirse como $$ \hat{\Sigma}_{k} = \frac{1}{\#(\mathcal{D}_k) - 1} \sum_{i = 1}^{n} (x_i - \hat{\mu}_k) ~ (x_i - \hat{\mu}_k)^T ~ \mathbb{1}\Set{ y_i = k } $$ Se define $\textbf{y} = (y_1,~ \cdots,~ y_n)$ , donde $\#(\mathcal{D}_k) = f(\textbf{y})$ es función de las etiquetas. Utilizando las propiedades de la [[ingeniería en informática/proba/Esperanza condicional/Esperanza condicional|esperanza condicional]] $$ \mathbb{E}\left[ \hat{\Sigma}_k \right] = \mathbb{E}\left[ \mathbb{E}\left[ \hat{\Sigma}_k \mid \textbf{y} \right] \right] = \mathbb{E}\left[ \frac{1}{\#(\mathcal{D}_k)} \sum_{i = 1}^{n} \mathbb{E}\left[ (x_i - \hat{\mu}_k) ~ (x_i - \hat{\mu}_k)^T \mid \textbf{y} \right] \mathbb{1}\Set{ y_i = k } \right] $$ 
> 
> Donde el producto dentro de la esperanza puede reescribirse como $(x_i - \hat{\mu}_k) ~ (x_i - \hat{\mu}_k)^T = x_i x_i - x_i \hat{\mu}_k^T - \hat{\mu}_k x_i^T + \hat{\mu}_k \hat{\mu}_k^T$. La esperanza de cada uno de estos términos puede escribirse como $$ \begin{align} 
>     \mathbb{E}\left[ x_i x_i^T \mid \textbf{y} \right] &= \Sigma_{y_i} + \mu_{y_i} \mu_{y_i}^T \\
>     \mathbb{E}\left[ x_i \hat{\mu}_k^T \mid \textbf{y} \right] &= \frac{1}{\#(\mathcal{D}_k)} \sum_{j = 1}^{n} \mathbb{E}\left[ x_i x_j^T \mid \textbf{y} \right] \mathbb{1}\Set{y_j = k} \\
>      &= \frac{1}{\#(\mathcal{D}_k)} \left( \Sigma_k + \mu_k \mu_k^T + (\#(\mathcal{D}_k) - 1) \mu_{y_i} \mu_k^T \right) \\
>     \mathbb{E}\left[ \hat{\mu}_k x_i^T \mid \textbf{y} \right] &= \frac{1}{\#(\mathcal{D}_k)} \left( \Sigma_k + \mu_k \mu_k^T + (\#(\mathcal{D}_k) - 1) \mu_k \mu_{y_i}^T \right) \\
>     \mathbb{E}\left[ \hat{\mu}_k \hat{\mu}_k^T \mid \textbf{y} \right] &= \frac{1}{\#(\mathcal{D}_k)^2} \sum_{i = 1}^{n} \sum_{j = 1}^{n} \mathbb{E}\left[ x_i x_j^T \mid \textbf{y} \right] \mathbb{1}\Set{y_i = y_j = k} \\
>      &= \frac{1}{\#(\mathcal{D}_k)^2} \left(\#(\mathcal{D}_k) \left(\Sigma_k + \mu_k \mu_k^T \right) + (\#(\mathcal{D}_k)^2 - \#(\mathcal{D}_k)) \mu_k \mu_{y_i}^T \right) \\
>      &= \frac{1}{\#(\mathcal{D}_k)^2} \left(\#(\mathcal{D}_k) \Sigma_k + \#(\mathcal{D}_k)^2 \mu_k \mu_{y_i}^T \right) \\
>      &= \frac{1}{\#(\mathcal{D}_k)} \Sigma_k + \mu_k \mu_{y_i}^T \\
> \end{align} $$
> 
> Ahora, teniendo en cuenta que en la sumatoria inicial se tiene la indicadora $\mathbb{1}\Set{ y_i = k }$ las cuatro ecuaciones se simplifican a $$ \begin{align} 
>     \mathbb{E}\left[ x_i x_i^T \mid \textbf{y} \right] &= \Sigma_k + \mu_k \mu_k^T \\
>     \mathbb{E}\left[ x_i \hat{\mu}_k^T \mid \textbf{y} \right] &= \frac{1}{\#(\mathcal{D}_k)} \left( \Sigma_k + \mu_k \mu_k^T + (\#(\mathcal{D}_k) - 1) \mu_k \mu_k^T \right) \\
>      &= \frac{1}{\#(\mathcal{D}_k)} \left( \Sigma_k + \#(\mathcal{D}_k) \mu_k \mu_k^T \right) \\
>      &= \frac{1}{\#(\mathcal{D}_k)} \Sigma_k +\mu_k \mu_k^T \\
>     \mathbb{E}\left[ \hat{\mu}_k x_i^T \mid \textbf{y} \right] &= \frac{1}{\#(\mathcal{D}_k)} \Sigma_k +\mu_k \mu_k^T \\
>     \mathbb{E}\left[ \hat{\mu}_k \hat{\mu}_k^T \mid \textbf{y} \right] &= \frac{1}{\#(\mathcal{D}_k)} \Sigma_k + \mu_k \mu_{y_i}^T \\ 
> \end{align} $$
> 
> Resultando en el producto inicial dando $$ \begin{align} 
>     \mathbb{E}\left[ (x_i - \hat{\mu}_k) ~ (x_i - \hat{\mu}_k)^T \mid \textbf{y} \right] \mathbb{1}\Set{ y_i = k } &= \left( \Sigma_k + \mu_k \mu_k^T \right) - \left( \frac{1}{\#(\mathcal{D}_k)} \Sigma_k + \mu_k \mu_k^T \right) \\
>      &= \frac{\#(\mathcal{D}_k) - 1}{\#(\mathcal{D}_k)} \Sigma_k \mathbb{1}\Set{ y_i = k }
> \end{align} $$
> 
> Finalmente compilando lo desarrollado $$ \begin{align} 
>     \mathbb{E}\left[ \hat{\Sigma}_k \right] &= \mathbb{E}\left[ \mathbb{E}\left[ \hat{\Sigma}_k \mid \textbf{y} \right] \right] \\
>      &= \mathbb{E}\left[ \frac{1}{\#(\mathcal{D}_k) - 1} \sum_{i = 1}^{n} \frac{\#(\mathcal{D}_k) - 1}{\#(\mathcal{D}_k)} \Sigma_k \mathbb{1}\Set{ y_i = k } \right] \\
>      &= \mathbb{E}\left[ \frac{\Sigma_k}{\#(\mathcal{D}_k)} \sum_{i = 1}^{n} \mathbb{1}\Set{ y_i = k } \right] \\
>     \mathbb{E}\left[ \hat{\Sigma}_k \right] &= \Sigma_k \\
> \end{align} $$

Por último el estimador de $\Sigma$ donde solo es necesario para LDA donde en el caso de QDA se utilizan las $\hat{\Sigma}_k$ (no es necesario calcular $\hat{\Sigma}$) $$ \hat{\Sigma} = \frac{1}{n - K} \sum_{k = 1}^{K} (\#(\mathcal{D}_k) - 1) \hat{\Sigma}_{k} $$
> [!demostracion]- Demostración
> Supongamos que $X \mid_{Y = k} \sim \mathcal{N}(\mu_k,~ \Sigma)$ y $Y \sim Cat(c_1,~ \cdots,~ c_K)$. En este caso, las verdaderas covarianzas son iguales pero los estimadores $\hat{\Sigma}_k$ son distintos. Los mismos se combinan, utilizando el desarrollo de la demostración del estimador $\hat{\Sigma}_k$, como $$ \begin{align} 
>     \mathbb{E}\left[ \hat{\Sigma} \right] &= \frac{1}{n - K} \sum_{k = 1}^{K} \mathbb{E}\left[ (\#(\mathcal{D}_k) - 1) \hat{\Sigma}_{k} \right] \\
>     &= \frac{1}{n - K} \sum_{k = 1}^{K} \mathbb{E}\left[ \sum_{i = 1}^{n} (x_i - \hat{\mu}_k) ~ (x_i - \hat{\mu}_k)^T ~ \mathbb{1}\Set{ y_i = k } \right] \\
>     &= \frac{1}{n - K} \sum_{k = 1}^{K} \mathbb{E}\left[ (\#(\mathcal{D}_k) - 1) \Sigma_k \right] \\
>     &= \frac{\Sigma}{n - K} \sum_{k = 1}^{K} \mathbb{E}\left[ (\#(\mathcal{D}_k) - 1) \right] \\
>     &= \frac{\Sigma}{n - K} \sum_{k = 1}^{K} (n ~ c_k - 1) \\
>     &= \frac{\Sigma}{n - K} \left( n ~ \sum_{k = 1}^{K} c_k - K \right) \\
>    \mathbb{E}\left[ \hat{\Sigma} \right] &= \Sigma
> \end{align}$$


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```