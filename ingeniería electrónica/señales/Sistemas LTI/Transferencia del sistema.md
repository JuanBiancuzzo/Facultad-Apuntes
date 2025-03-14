---
dia: 2023-11-17
tags:
  - carrera/ingeniería-electrónica/señales/Sistemas-LTI
  - nota/facultad
---
# Definición
---
Se puede definir la transferencia de un [[Sistema lineal e invariante en el tiempo|sistema LTI]] a partir de su [[Respuesta en frecuencia|respuesta en frecuencia]] $h(t)$, donde se puede definir completamente este sistema $$ y(t) = \mathcal{T}[x(t)] $$ de la forma $$ y(t) = h(t) * x(t) $$ donde $h(t) * x(t)$ es la [[Convolución|convolución]] entre la respuesta en frecuencia y la [[Señal|señal]]

## Transformada de Laplace
---
Usando la [[Transformada de Laplace|transformada de Laplace]] de la función de transferencia $H(s)$, (notemos que se puede hacer lo mismo en estos casos para la [[Transformada de Fourier|transformada de Fourier]]) es el cociente del [[Fasor|fasor]], que depende en [[Función periódica#Frecuencia|frecuencia]], de salida $Y(s)$ y el fasor de entrada $X(s)$, suponiendo que todas las condiciones iniciales son nulas $$ H(s) = \frac{Y(s)}{X(s)} $$
Notemos que usando la [[Transformada de Fourier#Convolución|propiedad de convolución]] de la transformada, y la definición mencionada anteriormente $$ Y(s) = H(s) ~ X(s) $$

Esta función también se puede expresar como un cociente de [[Función polinómica|polinomios]] $$ H(s) = \frac{N(s)}{D(s)} $$
Un cero, como una raíz del polinomio del numerador, es un valor que produce un valor cero en la función. Un [[Singularidad|polo]], como una raíz del polinomio del denominador, es un valor para el cual la función tiende a infinito.

Si expresamos a la función de transferencia como el cociente de dos polinomios factorizados, entonces obtenemos $$ H(s) = K ~
	\frac{ \displaystyle \prod_i \left(1 + \frac{s}{z_i} \right) }
	{ \displaystyle \prod_i \left(1 + \frac{s}{p_i} \right) } 
$$ donde 
* $K$ se lo llama [[Ganancia|ganancia]]
* $z_i$ representa a un cero de la transferencia
* $p_i$ representa a un polo de la transferencia

Donde podemos interpretarlo como una cascada en sistemas LTI y por lo tanto $$ h(t) = h_1(t) * h_2(t) * \cdots * h_n(t) \implies H(s) = \prod_{i = 1}^{n} H_i(s) $$

Por las propiedades de los [[Función logaritmica|logaritmos]] y las características de los [[Decibel|dB]], esta ecuación puede escribirse como $$ H_{dB}(s) = K_{dB} ~
	\frac{ \displaystyle \sum_i \left(1 + \frac{s}{z_i} \right) \biggm|_{dB} }
	{ \displaystyle \sum_i \left(1 + \frac{s}{p_i} \right) \biggm|_{dB} } 
$$
es decir que podemos sumar las contribuciones independientes de la constante, de cada polo y de cada cero.

### Otro punto de vista
---
Teniendo un [[Sistemas descriptos por ecuaciones diferenciales ordinarias|sistema descripto por ecuaciones diferenciales]] o [[Sistemas descriptos por ecuaciones diferenciales ordinarias#Las ecuaciones en diferencias|ecuciones en diferencias]], es decir ![[Sistemas descriptos por ecuaciones diferenciales ordinarias#^134cea]]

![[Sistemas descriptos por ecuaciones diferenciales ordinarias#Aplicando la transformada de Fourier]]

![[Sistemas descriptos por ecuaciones diferenciales ordinarias#Aplicando la transformada de Fourier discreta]]



## Definiciones
---
Se definen $4$ transferencias

### Ganancia de [[Tensión|tensión]]
---
$$ H(s) = \frac{V_o(s)}{V_i(S)} $$

### Ganancia de [[Corriente eléctrica|corriente]]
---
$$ H(s) = \frac{I_o(s)}{I_i(S)} $$

### [[Impedancia|Impedancia]]
---
$$ H(s) = \frac{V(s)}{I(S)} $$

### [[Admitancia|Admitancia]]
---
$$ H(s) = \frac{I(s)}{V(S)} $$