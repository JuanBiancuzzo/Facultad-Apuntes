---
dia: 2023-08-10
capitulo: 9
tags:
  - orga/Machine-learning
---
### Definición
---
Es la modificación de algún parámetro numérico aplicándole alguna función que no cambie el orden de los datos, como $f(x) = \sqrt{x}$, $f(x) = \log(x)$, etc. Esto nos permite de alguna forma compactar o separar los datos para que los modelos no tengan tantos problemas para encontrar sus relaciones

Modelos basados en árboles no se debería usar ya que estos trabajando dándole un orden a los datos y como estas funciones no deben cambiar el orden, entonces computación desperdiciada.

##### Transformaciones
* [[Normal estandar|Normalización]] en un rango de $0$ a $1$, o entre $-1$ y $1$
* Binning, que transforma una variable numérica en una categórica, dando regiones de valores a una categoría. 
	* Donde esto si puede aplicarse a árboles, ya que delimita donde puede hacer un split
* Cambiar de una variable categórica a una numérica se llama [[Codificación de variables categóricas|Encoding]]