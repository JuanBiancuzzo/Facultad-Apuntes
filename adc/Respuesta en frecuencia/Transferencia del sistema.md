---
dia: 2023-11-17
materia: adc
capitulo: 5
---
### Definición
---
La función de transferencia $H(s)$ es el cociente del [[Fasor|fasor]], que depende en [[Función senoidal#Frecuencia|frecuencia]], de salida $Y(s)$ y el fasor de entrada $X(s)$, suponiendo que todas las condiciones iniciales son nulas $$ H(s) = \frac{Y(s)}{X(s)} $$
Esta función también se puede expresar como un cociente de [[Función polinomica|polinomios]] $$ H(s) = \frac{N(s)}{D(s)} $$
Un cero, como una raíz del polinomio del numerador, es un valor que produce un valor cero en la función. Un [[Singularidad|polo]], como una raíz del polinomio del denominador, es un valor para el cual la función tiende a infinito.

Si expresamos a la función de transferencia como el cociente de dos polinomios factorizados, entonces obtenemos $$ H(s) = K ~
	\frac{ \displaystyle \prod_i \left(1 + \frac{s}{z_i} \right) }
	{ \displaystyle \prod_i \left(1 + \frac{s}{p_i} \right) } 
$$ donde 
* $K$ se lo llama ganancia
* $z_i$ representa a un cero de la transferencia
* $p_i$ representa a un polo de la transferencia

Por las propiedades de los [[Función logaritmica|logaritmos]] y las características de los [[Decibel|dB]], esta ecuación puede escribirse como $$ H_{dB}(s) = K_{dB} ~
	\frac{ \displaystyle \sum_i \left(1 + \frac{s}{z_i} \right) \biggm|_{dB} }
	{ \displaystyle \sum_i \left(1 + \frac{s}{p_i} \right) \biggm|_{dB} } 
$$
es decir que podemos sumar las contribuciones independientes de la constante, de cada polo y de cada cero.

#### Definiciones
---
Se definen $4$ transferencias

##### Ganancia de [[Tensión|tensión]]
$$ H(s) = \frac{V_o(s)}{V_i(S)} $$

##### Ganancia de [[Corriente eléctrica|corriente]]
$$ H(s) = \frac{I_o(s)}{I_i(S)} $$

##### [[Impedancia|Impedancia]]
$$ H(s) = \frac{V(s)}{I(S)} $$

##### [[Admitancia|Admitancia]]
$$ H(s) = \frac{I(s)}{V(S)} $$