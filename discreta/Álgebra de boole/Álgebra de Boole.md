---
dia: 2023-04-08
tags:
  - discreta/Álgebra-de-Boole
  - nota/facultad
  - estructura/Algebra-de-boole
---
### Definición
---
Dado un [[Conjunto|conjunto]] $B$ en el que se han definido dos operaciones binarias interna $\oplus$ y $\odot$, y la operación unitaria interna $'$. La estructura $(B, ', \oplus, \odot)$ es un álgebra de Boole si y solo si cumple con los [[Postulados de Huntington|Postulados de Huntington]].


#### Representaciones
---
* [[Tabla de verdad|Tabla de verdad]]
* Expresión algebraica por [[Suma de minitérminos|suma de minitérminos]]
* Expresión algebraica por [[Producto de maxitérminos|producto de maxitérminos]]
* Diagrama de [[Compuerta|compuertas]]

#### Propiedades
---
Dado los [[Postulados de Huntington|axiomas]] del [[Álgebra de Boole]], se pueden deducir y demostrar los siguientes teoremas fundamentales:

1) Ley de idempotencia: $$ \forall a \in B: ~ a \oplus a = a $$$$ \forall a \in B: ~ a \odot a = a $$
2) Ley de dominación: $$ \forall a \in B: ~ a \oplus U = U $$ donde $U$ es el [[Conjunto]] de todos los elementos. $$ \forall a \in B: ~a \odot \emptyset = \emptyset $$
3) Ley de identidad: $$ \forall a \in B: ~ a \oplus \emptyset = a $$ $$ \forall a \in B: ~ a \odot U = a $$  donde $U$ es el [[Conjunto]] de todos los elementos. 
4) Ley de absorción: $$ \forall a, b \in B: ~ a \oplus (a \odot b) = a $$ $$ \forall a, b \in B: ~ a \odot (a \oplus b) = a $$
5) Ley de De Morgan: $$ \forall a, b \in B: ~ (a \oplus b)' = (a' \odot b') $$ $$ \forall a, b \in B: ~ (a \odot b)' = (a' \oplus b') $$
6) Ley de involución: $$ \forall a \in B: ~ (a')' = a $$
7) Ley del complemento: $$ U' = \emptyset, ~ \emptyset' = U $$  donde $U$ es el [[Conjunto]] de todos los elementos. 

