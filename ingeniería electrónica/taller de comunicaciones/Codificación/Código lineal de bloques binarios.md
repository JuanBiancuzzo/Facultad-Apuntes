---
dia: 2026-03-02
etapa: empezado
referencias: []
aliases: 
  - Distancia mínima de un código lineal#^distancia-minima
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Codificación
  - nota/facultad
vinculoFacultad:
  - tema: Codificación
    capitulo: 5
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es un método de corrección o detección de errores, dado un mensaje de $k$ [[ingeniería en informática/algo 1/Introducción a la programación/Información#Bit|bit]] y agregando $n - k$ bits con $n > k$. Esta codificación asigna a cada uno de los $2^k$ mensajes uno de los $2^n$ palabras de códigos, mediante una [[ingeniería en informática/algebra 2/Transformaciones lineales/Transformación lineal|transformación lineal]] y por lo tanto generado un [[ingeniería en informática/algebra 2/Espacios Vectoriales/Espacio vectorial|espacio vectorial]] de $S = \Set{0,~ 1}^n$ por lo que existe una [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz|matriz]] $G$ que represente la transformación

Por convención, los $n - k$ bits agregados, los concatenamos al final del mensaje. Por lo que podemos restringir los valores de $G$ a $$ G_{k \times n} = \left[\begin{array}{c:c} 
    P_{k \times (n - k)} & \mathbb{I}_{k \times k} \\
\end{array}\right] $$
Lo que nos permite esta transformación es tener un espacio mucho mayor al del mensaje y por lo tanto si se modifica la palabra de código, por ruido, se puede observar si hubo un error y tal vez incluso la posibilidad de corregirla

Para lograr esto lo que buscaremos, tendremos un paso donde dado una palabra de código $u$, con un posible error $e$, transformarlo por una transformación $H^T$ para solo tener la información del error que llamaremos síndrome $s$ $$ \begin{align}
    (u + e) ~ H^T &= \underbrace{u ~ H^T}_{=~0} + e ~ H^T \\
     &= e ~ H^T \\
     &= s
\end{align} $$
De esto nos fuerza a un valor de $H$ dado por $$ \begin{align}
    u ~ H^T &= 0 \\
    (m ~ G) ~ H^T &= 0 \\
    G ~ H^T &= 0 \\
    \left[\begin{array}{c:c} 
        P_{k \times (n - k)} & \mathbb{I}_{k \times k} \\
    \end{array}\right] ~ H^T &= 0 \\
    \left[\begin{array}{c:c} 
        P_{k \times (n - k)} & \mathbb{I}_{k \times k} \\
    \end{array}\right] ~ \left[\begin{array}{c:c} 
        A_{(n - k) \times (n - k)} \\ B_{k \times (n - k)} \\
    \end{array}\right] &= 0 \\
    P_{k \times (n - k)} ~ A_{(n - k) \times (n - k)} \oplus \mathbb{I}_{k \times k} ~ B_{k \times (n - k)} &= 0 \\
\end{align} $$ donde la suma $\oplus$ es la suma binaria dada por la operación de [[ingeniería en informática/discreta/Álgebra proposicional/Operador XOR|XOR]] con la propiedad que $a \oplus a = 0$ y por lo tanto $$ \begin{align}
    P_{k \times (n - k)} ~ A_{(n - k) \times (n - k)} &= B_{k \times (n - k)} \\
    P_{k \times (n - k)} ~ \mathbb{I}_{(n - k) \times (n - k)} &= \left( P_{k \times (n - k)} \right)^T \\
\end{align} $$ por lo tanto $$ H_{(n - k) \times n} = \left[\begin{array}{c:c} \mathbb{I}_{(n - k) \times (n - k)} & \left( P_{k \times (n - k)} \right)^T \end{array}\right] $$ esta matriz $H^T$ se la conoce como matriz de paridad 

Notemos que por las dimensiones, tendremos que los síndromes pueden ser $2^{(n - k)} - 1$ valores posibles, por lo que si se puede asociar un síndrome a un error, entonces vamos a poder corregir esta cantidad de errores. En el caso de buscar detectarlos vamos a poder detectar de los $2^n - 2^k$ ya que si un error modifica el mensaje tal que sea otro mensaje valido no lo vamos a poder detectar 

Se define la distancia mínimo de un código de línea como $$ \begin{align} 
    d_{min} &= \min_{u \ne v} d(u,~ v) \\
    &= \min_{u \ne v} W\underbrace{\left(u \oplus v \right)}_{T \in S} \\
    &= \min_{u \ne v} W\left(T \right) \\
\end{align} $$ donde $W(\cdot)$ es la [[investigación/machine Learning/Distancia Hamming|función peso de Hamming]] ^distancia-minima

Con esta distancia se puede definir la capacidad de detección y corrección de errores 
* Permite corregir $\alpha \le t = \left\lfloor \frac{d_{min} - 1}{2} \right\rfloor$
* Permite detectar $\beta \le e = d_{min} - 1$
Donde se tiene que cumplir que $d_{min} \ge \alpha + \beta + 1$

## Categorización
---
Se puede categorizar un código como
* Perfecto si se detecta y corrige todos los patrones hasta $t$ y ningún otro
* Cuasi-perfecto si detecta y corrige todos los patrones hasta $t$ y algunos de $t + 1$
* Ningún tipo si no es perfecto ni cuasi-perfecto

## Probabilidad de error
---
Podemos calcular la probabilidad de error en un bloque como la probabilidad de tener más de $t + 1$ errores pesados por la probabilidad de que ocurra un error así $$ P_m \le \sum_{j = t + 1}^{n} \binom{n}{j} ~ p^{j} ~ (1 - p)^{n - j} $$ donde $p$ es la probabilidad que un bit sea incorrecto, que por lo general podría ser $0.5$ pero dependerá del canal. Notemos que se da una inecuación ya que estamos suponiendo que todos los errores de $t + 1$ bits no los pudimos corregir. Esta desigualdad se vuelve igualdad si el código es perfecto

Podemos calcular la probabilidad de error de bit como $$ P_b \le \frac{1}{n} \sum_{j = t + 1}^{n} j ~ \binom{n}{j} ~ p^{j} ~ (1 - p)^{n - j} $$
