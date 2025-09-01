---
dia: 2023-01-23
tags:
  - colección/distribuciones/distribución
  - distribuciones/continua
  - nota/colección
nombreDistribucion: Chi cuadrado
tipoDistribucion: continua
vinculoFacultad:
  - tema: Repaso de probabilidad y estadística
    capitulo: 1
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
# Definición
---
Se dice que una [[Variable aleatoria]] $X$ tiene distribución Chi cuadrado de parámetro $k$ si su [[Función de densidad de probabilidad]] es $$ f_X(x) = \frac{1}{2^{\frac{k}{2}} \cdot \Gamma(\frac{k}{2})} \cdot x^{\frac{k}{2} - 1} \cdot e^{-\frac{x}{2}} $$ donde $\Gamma(x)$ es la [[Función gamma]].

### Notación
$$ X \sim \chi_k^2 $$

## Notas
---
* El [[Soporte]] de $X$ es $Sop(X) = [0, \infty)$
* $k \in \mathbb{N}$
* La [[Esperanza]] es $E[X] = k$ y la [[Varianza]] es $Var(X) = 2k$.

# Relaciones
---
![[Relaciones entre distribuciones#Distribución Chi cuadrado]]

![[Relaciones entre distribuciones#Distribución Chi cuadrado y Distribución normal]]

![[Relaciones entre distribuciones#Distribución Chi cuadrado , Distribución normal y Distribución t-Student]]

![[Relaciones entre distribuciones#Distribución Chi cuadrado y Distribución Gamma]]

![[Relaciones entre distribuciones#Distribución exponencial y Distribución Chi cuadrado]]


