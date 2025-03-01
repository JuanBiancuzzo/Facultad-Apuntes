---
dia: 2024-08-07
tags:
  - nota/facultad
  - carrera/ingeniería-electrónica/fisica-3/Átomo-de-Bohr
  - carrera/ingeniería-en-informática/discreta/Álgebra-de-Boole
  - carrera/ingeniería-en-informática/estructura/Álgebra-de-Boole
  - carrera/ingeniería-en-informática/fisica-3/Átomo-de-Bohr
  - carrera/ingeniería-electrónica/estructura/Álgebra-de-Boole
---
# Definición
---
El concepto de átomo tiene diferentes definiciones dependiendo del área de investigación

## Álgebra de Boole
---
En el [[Álgebra de Boole|álgebra de Boole]], se llama átomo a los sucesores inmediatos del $0_B$. En otras palabras, $a \ne 0_B$ es un átomo si y solo si $$ \forall x \in B, ~~~~~ ax = b \implies x = a \lor x= 0_B $$
Es decir, si $x \le b$, entonces $x$ deberá ser el propio elemento o el [[Elemento neutro|elemento neutro]] $0_B$

* El producto de dos átomos distintos es $0_B$
* Todo elemento del álgebra puede anotarse como una combinación de los átomos del [[Conjunto|conjunto]] $$ \forall x \in B: ~~~~~ x = \alpha_1 ~ a_1 + \alpha_2 ~ a_2 + \cdots + \alpha_n ~ a_n $$ donde $a_1, \cdots, a_n$ son átomos en $B$ y $\alpha_1, \cdots, \alpha_n \in \set{ 0_B, ~ 1_B}$
* Como todos los elementos del álgebra pueden anotarse como una combinación de los átomos, entonces la cantidad de elementos del álgebra será $|B| = 2^n$, donde $n$ es la cantidad de átomos