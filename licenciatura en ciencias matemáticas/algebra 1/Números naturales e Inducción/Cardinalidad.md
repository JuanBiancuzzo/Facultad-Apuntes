---
dia: 2024-11-07
etapa: empezado
referencias:
  - "413"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $A$ un [[Conjunto|conjunto]], se llama cardinal de $A$ a la cantidad de elementos distintos que tiene $A$, y se nota $\#A$. Cuando el conjunto no tiene un número finito de elementos, se dice que es infinito, y se nota $\# A = \infty$

Notar que si $A$ es un conjunto finito, $\# A \in \mathbb{N} \cup \set{0} =: \mathbb{N}_0$

## Cardinal de un subconjunto
---
Sea $A$ es un conjunto finito y sea $B \subseteq A$. Entonces el cardinal de un [[Subconjunto|subconjunto]] $\# B \le \# A$. (esto vale también para conjuntos infinitos)

## Cardinal de la unión de conjuntos
---
Sean $A$, $B$ conjuntos finitos
* Si $A$ y $B$ son conjuntos disjuntos, entonces el cardinal de la [[Operador OR|unión]] es $\# (A \cup B) = \# A + \# B$
* En general $\# (A \cup B) = \# A + \# B - \#(A \cap B)$

## Cardinal del complemento de un conjunto
---
Sean $A$, $B$ conjuntos finitos dentro de un conjunto referencial $U$
* Si $U$ es un conjunto finito, entonces el cardinal del [[Operador NOT|complemento]] es $\# (A') = \# U - \# A$

## Cardinal de un producto cartesiano
---
Sean $A$ y $B$ conjuntos finitos. Entonces el cardinal del [[Producto cartesiano|producto cartesiano]] es $\# (A \times B) = \# A \cdot \# B$. En general, $A_1,~ \cdots,~ A_n,~ A$ conjuntos finitos. Entonces $$ \begin{array}{l} 
    \displaystyle \# (A_1 \times \cdots \times A_n) = \# A_1 \cdots \# A_n = \prod_{i = 1}^{n} \# A_i, \\
    \# \left( A^n \right) = \left( \# A \right)^n
\end{array} $$

## Cardinal del conjunto de partes
---
Sea $A$ un conjunto finito, entonces el cardinal del [[Conjunto de partes|conjunto de partes]] es $\# (\mathcal{P}(A)) = 2^{\# A}$

## Cardinal de relaciones
---
Sean $A_m$ y $B_n$ conjuntos finitos, con $m$ y $n$ elementos respectivamente. Entonces la cantidad de [[Relación|relaciones]] que hay de $A_m$ en $B_n$ es igual a $2^{m ~ n}$

## Cardinal de funciones
---
Sean $A_m$ y $B_n$ conjuntos finitos, con $m$ y $n$ elementos respectivamente. Entonces la cantidad de [[Función|funciones]] $f$ que hay de $A_m$ en $B_n$ es igual a $n^m$

De las definiciones de función [[Función inyectiva|inyectiva]], [[Función sobreyectiva|sobreyectiva]] y [[Función biyectiva|biyectiva]] se desprenden las propiedades siguientes sobre cardinales
* Sea $f: ~ A_m \to B_n$ una función inyectiva. Entonces $\# A_m \le \# B_n$
* Sea $f: ~ A_m \to B_n$ una función sobreyectiva. Entonces $\# A_m \ge \# B_n$
* Sea $f: ~ A_m \to B_n$ una función biyectiva. Entonces $\# A_m = \# B_n$

### Cantidad de funciones inyectivas
---
Sean $A_m$ y $B_n$ conjuntos finitos, con $m$ y $n$ elementos respectivamente, donde $m \le n$. Entonces la cantidad de funciones inyectivas $f: ~ A_m \to B_n$ que hay es $$ n \cdot (n - 1) \cdots (n - m + 1) = \frac{n!}{(n - m)!} $$ notemos que es $m! ~ \binom{n}{m}$, donde $\binom{n}{m}$ es el [[Número combinatorio|número combinatorio]]

### Cantidad de funciones biyectivas
---
Sean $A$ y $B$ conjuntos finitos, con $n$ elementos ambos. Entonces la cantidad de funciones biyectivas $f: ~ A \to B$ que hay es $$ n \cdot (n - 1) \cdots 2 \cdot 1 $$ notemos que es el [[Factorial|factorial]]



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```