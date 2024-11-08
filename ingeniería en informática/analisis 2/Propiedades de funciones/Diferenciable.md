---
dia: 2023-01-22
tags:
  - nota/facultad
  - ingeniería-en-informática/analisis-2/Propiedades-de-funciones
---
# Definición
---
Dado una [[Función|función]] $f : I \subseteq \mathbb{R}$ es diferenciable en $x_0 \in I$ si existe una constante $A$ tal que 

$$ f(x_0 + h) = f(x_0) + A cdot h + r(h) $$

donde 

$$ \lim_{h \to 0} \frac{r(h)}{h} = 0 $$

En efecto, escribiendo explicitamente la constante $A$ de la ultima definicion, tenemos 

$$ A = \frac{f(x_0 + h) - f(x)}{h} - \frac{r(h)}{h} $$

de donde (al tomar limite cuando $h \to 0$) se puede ver facilmente la equivalencia entre las definiciones 

## Teoremas
---
### Informativas
 * Si $f$ es diferenciable en el punto $a$, entonces $f$ es continua en $a$
 * Si $f$ es diferenciable en el punto $a$, entonces $f$ es [[analisis 3/Derivabilidad y holomorfía/Derivable.md|derivable]] en $a$
 * Si $f$ es diferenciable en $x_0$, entonces existen todas las derivadas direccionales (calcular con la definición de [[Derivada direccional|derivada direccional]]) y vale que $\nabla f(x_0) \cdot \hat{v}$
### Calificativas
 * Una función vectorial es diferenciable en un punto si, y solo si, sus componentes son diferenciables en dicho punto
 * Sea $f : U \subseteq \mathbb{R}^n \to \mathbb{R}$ con $n > 1$, si $f \in C^1(E(\vec{a}))$ entonces $f$ es diferenciable en $\vec{a}$
 * $D\vec{f}$ (la [[Jacobiana|Jacobiana]] de $f$) continua en un conjunto $H$ es equivalente a $\vec{f} \in C^1(H)$ => $\vec{f}$ diferenciable en $H$
 * Es diferenciable si existen todas las derivada direccional y son lineales

## Notas
---
 * Las funciones diferenciables son continuas y derivables
	 * Solo las funciones de una sola variable, si son derivables tambien son diferenciables
	 * Las de varias variables, aun siendo continuas y derivables, pueden no ser diferenciables
 * Las funciones de varias variables que tienen derivadas parciales de 1er orden continuas en el [[Entorno|entorno]] de un punto, son diferenciables en dicho punto
 
 ## Consecuencias
 Cuando $f : U \subseteq \mathbb{R}^n \to \mathbb{R}^m$ es diferenciable en $a$, la [[Transformación lineal|transformación lineal]], y específicamente la [[Matriz|matriz]] asociada a esta, se llama Jacobiana