---
dia: 2024-03-20
aliases:
  - Sistemas descriptos por ecuaciones en diferencias
tags:
  - carrera/ingeniería-electrónica/señales/Sistemas-LTI
  - nota/facultad
etapa: ampliar
referencias:
  - "1041"
vinculoFacultad:
  - "[[ingeniería electrónica/señales/Sistemas LTI/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Una ecuación en diferencias es una expresión que relaciona distintas [[Sucesión|sucesiones]], siendo una de ellas una sucesión desconocida

## Punto de vista de los sistemas
---
Las descripciones de [[Sistema|sistemas]] a través de ecuaciones en diferencia es muy común en la práctica. Aunque vamos a considerar ecuaciones en diferencia con coeficientes constantes. Una ecuación en diferencias es el análogo en tiempo discreto a una [[Ecuación diferencial ordinaria|ecuación diferencial]] $$ \sum_{k = 0}^{N} a_k ~ y[n - k] = \sum_{k = 0}^{M} b_k ~ x[n - k] $$
Para nuestros [[Sistema lineal e invariante en el tiempo|sistemas LTI]] vamos asumir la condición de reposo inicial: si la entrada es cero para $n \le n_0$ entonces la salida del sistema es cero para $n \le n_0$. De esta forma podemos asegurar que las condiciones iniciales son nulas lo cual nos asegura la linealidad del sistema. Esto también nos da la [[Sistema causal|causalidad del sistema]]

Es interesante escribir la ecuación en diferencias de la siguiente forma $$ y[n] = \frac{1}{a_0} \left[\sum_{k = 0}^{M} b_k ~ x[n - k] - \sum_{k = 1}^{N} a_k ~ y[n - k]\right] $$
Notar que la ecuación es recursiva, ya que el valor de la salida al instante $n$ depende (además de la entrada) de los $N$ valores anteriores de la salida


### Aplicando la transformada de Fourier discreta
---
Si aplicamos el operador de [[Transformada de Fourier|Fourier]] $\mathcal{F}\Set{\cdot}$ a ambos lados obtenemos, aplicando [[Transformada de Fourier en tiempo discreto#Linealidad|linealidad]]  $$ \sum_{k = 0}^{N} a_k ~ \mathcal{F}\Set{y(n - k)} = \sum_{k = 0}^{M} b_k ~ \mathcal{F}\Set{x(n - k)}, ~~ \forall N, ~ M \in \mathbb{N}_0 $$ 
Usando la propiedad de [[Transformada de Fourier en tiempo discreto#Diferencia|diferencia]] $$ Y\left(e^{j\Omega}\right) \sum_{k = 0}^{N} a_k ~ \exp(-j\Omega k) = X\left(e^{j\Omega}\right) \sum_{k = 0}^{M} b_k ~ \exp(-j\Omega k) $$
Para un [[Sistema lineal e invariante en el tiempo|sistema LTI]] sabemos que $$ Y\left(e^{j\Omega}\right) = H\left(e^{j\Omega}\right) ~ X\left(e^{j\Omega}\right), ~~~ H\left(e^{j\Omega}\right) = \frac{Y\left(e^{j\Omega}\right)}{X\left(e^{j\Omega}\right)} $$
Entonces obtenemos la [[Transferencia del sistema#Transformada de Laplace|transferencia transformada]] $$ H\left(e^{j\Omega}\right) = \frac{\displaystyle \sum_{k = 0}^{M} b_k ~ \exp(-j\Omega k)}{\displaystyle \sum_{k = 0}^{N} a_k ~ \exp(-j\Omega k)} $$


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```