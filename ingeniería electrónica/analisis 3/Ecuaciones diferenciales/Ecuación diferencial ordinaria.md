---
dia: 2022-12-08
tags:
  - carrera/ingeniería-electrónica/analisis-3/Ecuaciones-diferenciales
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-3/Ecuaciones-diferenciales
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - carrera/ingeniería-electrónica/señales/Sistemas-LTI
etapa: ampliar
referencias:
  - "873"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La [[Función|función]] incógnita depende de una sola variable y se presenta en la ecuación con sus derivadas hasta cierto orden

Se puede garantizar la existencia y la unicidad, si la función cumple con la [[Lipschitz continuity|continuidad de Lipschitz]]

## Punto de vista de los sistemas
---
Las descripciones de [[Sistema|sistemas]] a través de ecuaciones diferenciales es muy común en la práctica. Aunque vamos a considerar ecuaciones diferenciales ordinarias con coeficientes constantes $$ \sum_{k = 0}^{N} a_k ~ \frac{d^k y(t)}{dt^k} = \sum_{k = 0}^{M} b_k ~ \frac{d^k x(t)}{dt^k}, ~~ \forall N, ~ M \in \mathbb{N}_0 $$
En un sistema descripto por ecuaciones diferenciales, la salida está expresada en forma implícita y para obtener la misma es necesario resolver la ecuación diferencial

Se sabe que para obtener la solución a una ecuación diferencial ordinaria a coeficientes contantes es necesario especificar las condiciones iniciales de la misma.

Si bien la intuición diría que un sistema descripto por una ecuación diferencial ordinaria es lineal, lo cierto es que ello dependerá de las condiciones iniciales.
* Para que el [[Sistema lineal|sistema lineal]] entonces por la condición inicial, tenemos que asegurar que para la entrada nula la salida sea la nula ($\mathcal{T}[0] = 0$)

Para nuestros [[Sistema lineal e invariante en el tiempo|sistemas LTI]] vamos asumir la condición de reposo inicial: si la entrada es cero para $t \le t_0$ entonces la salida del sistema es cero para $t \le t_0$. De esta forma podemos asegurar que las condiciones iniciales son nulas lo cual nos asegura la linealidad del sistema. Esto también nos da la [[Sistema causal|causalidad del sistema]]

### Aplicando la transformada de Fourier
---
Si aplicamos el operador de [[Transformada de Fourier|Fourier]] $\mathcal{F}[\cdot]$ a ambos lados obtenemos, aplicando [[Transformada de Fourier#Linealidad|linealidad]]  $$ \sum_{k = 0}^{N} a_k ~ \mathcal{F}\left[\frac{d^k y(t)}{dt^k}\right] = \sum_{k = 0}^{M} b_k ~ \mathcal{F}\left[\frac{d^k x(t)}{dt^k} \right], ~~ \forall N, ~ M \in \mathbb{N}_0 $$ 
Usando la propiedad de [[Transformada de Fourier#Derivación|derivación]] $$ Y(j\omega) \sum_{k = 0}^{N} a_k ~ (j\omega)^k = X(j \omega) \sum_{k = 0}^{M} b_k ~ (j\omega)^k $$
Para un [[Sistema lineal e invariante en el tiempo|sistema LTI]] sabemos que $$ Y(j\omega) = H(j\omega) ~ X(j\omega), ~~~ H(j\omega) = \frac{Y(j\omega)}{X(j\omega)} $$
Entonces obtenemos la [[Transferencia del sistema#Transformada de Laplace|transferencia transformada]] $$ H(j\omega) = \frac{\displaystyle \sum_{k = 0}^{M} b_k ~ (j\omega)^k}{\displaystyle \sum_{k = 0}^{N} a_k ~ (j\omega)^k} $$
# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```