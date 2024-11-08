---
dia: 2024-11-04
etapa: empezado
referencias:
  - "411"
  - "423"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - nota/facultad
  - licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
orden: 384
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Cuando $f : A \to B$ es una [[Función biyectiva|función biyectiva]], el [[Conjunto|conjunto]] $\mathcal{R}' = \set{ (y,~x): f(x) = y } \subset B \times A$ es una [[Relación|relación]] de $B$ en $A$ que también satisface las propiedades de una [[Función|función]]. Esta función $\mathcal{R}'$ se nota $f^{-1}$ y se llama función inversa de $f$. Esta definida únicamente cuando la función $f$ es biyectiva

Se tiene que $f^{-1} : B \to A$ es la función que satisface para todo $y \in B$ $$ f^{-1}(y) = x \iff f(x) = y $$
## Propiedades
---
Las funciones biyectivas y su inversa están relacionadas por medio de la [[Composición de relaciones#Funciones|composición]]

Sea $f : A \to B$ una función. Si $f$ es biyectiva, entonces $f^{-1} \circ f = \text{id}_A$ y $f \circ f^{-1} = \text{id}_B$

> [!quote]+ Demostración
> $f^{-1} \circ f(x) = f^{-1}(f(x)) = f^{-1}(y)$ donde $y = f(x)$ y por lo tanto $f^{-1}(y) = x$ por la definición de la función inversa. Es decir $f^{-1} \circ f(x) = x$, $\forall x \in A$. Así $f^{-1} \circ f = \text{id}_A$. Del mismo modo, se prueba que $f \circ f^{-1} = \text{id}_B$

Sea $f : A \to B$ una función. Si existe una función $g : B \to A$ tal que $g \circ f = \text{id}_A$ y $f \circ g = \text{id}_B$, entonces $f$ es biyectiva y $f^{-1} = g$

> [!quote]+ Demostración
> Sea $g : B \to A$ la función tal que $g \circ f = \text{id}_A$ y $f \circ f = \text{id}_B$. Probemos primero que $f$ es biyectiva
> * $f$ es inyectiva pues $f(x) = f(x')$ implies $g(f(x)) = g(f(x'))$, es decir $g \circ f(x) = g \circ f(x')$. Pero $g \circ f = \text{id}_A$, por lo tanto $x = \text{id}_A(x) = \text{id}_A(x') = x'$. Es decir $x = x'$ como se quería probar
> * $f$ es sobreyectiva pues si $y \in B$, podemos tomar $x = g(y)$. Luego $f(x) = f(g(y)) = f \circ g(y) = \text{id}_B(y) = y$ Por lo tanto $y$ tiene un antecedente, que es $x = g(y)$
> 
> Así acabamos de probar que $f$ es biyectiva
> 
> Para probar que $g = f^{-1}$, hay que probar que $g(y) = f^{-1}(y)$, $\forall y \in B$. Pero $g(y) = g(f(x))$ donde $y = f(x)$, y por lo tanto $g(y) = g \circ f(x) = \text{id}_A(x) = x = f^{-1}(y)$ por la definición de $f^{-1}$, $\forall y \in B$. Así $g = f^{-1}$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```