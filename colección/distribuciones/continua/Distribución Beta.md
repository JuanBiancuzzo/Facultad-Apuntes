---
dia: 2023-01-23
tags:
  - colección/distribuciones/distribución
  - distribuciones/continua
  - nota/colección
nombreDistribucion: Beta
tipoDistribucion: continua
vinculoFacultad:
  - tema: Repaso de probabilidad y estadística
    capitulo: 1
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
# Definición
---
Se dice que una [[Variable aleatoria|variable aleatoria]] $X$ tiene distribución Beta de parámetros $a$ y $b$ si su [[Función de densidad de probabilidad|función de densidad]] es $$ f_X(x) = \frac{\Gamma(a + b)}{\Gamma(a)\cdot\Gamma(b)} \cdot x^{a - 1} \cdot (1 - x)^{b - 1} $$ donde $\Gamma(x)$ es la [[Función gamma|función gamma]].

### Notación
$$ X \sim \beta(a, b) $$
## Notas
---
* El [[Soporte|soporte]] de $X$ es $Sop(X) = (0, 1)$ 
* $a > 0$ y $b > 0$
* La [[Esperanza|esperanza]] es $E[X] = \displaystyle\frac{a}{a + b}$ y la [[Varianza|varianza]] es $Var(X) = \displaystyle\frac{a \cdot b}{(a + b)^2 \cdot (a + b + 1)}$.

# Relaciones
---
![[Relaciones entre distribuciones#Distribución Beta y Distribución uniforme]]
