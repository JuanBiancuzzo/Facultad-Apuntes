---
dia: 2024-08-03
tags:
  - discreta/Álgebra-de-conjuntos
  - nota/facultad
  - discreta/Álgebra-proposicional
---
### Definición
---
Para demostrar que dos [[Proposición|proposiciones]] $p$, $q$ son equivalentes, debemos demostrar la doble inclusión para sus [[Conjunto de veracidad|conjuntos de veracidad]]
* $P \subseteq Q$ 
* $Q \subseteq P$ 

Otra forma de demostrar la igualdad de dos [[Función proposicional|funciones]] es que estas toman en el mismo valor para todo elemento del [[Dominio|dominio]]. Aprovechando que las proposiciones únicamente tienen dos valores, basta con demostrar que se cumple que $v(p) = 1$ sii $q(p) = 1$. Nótese que el análisis análogo con $v(p) = 0$ es válido

Para las demostraciones de los conjuntos de veracidad, usualmente será más simple si tratamos de hallar una expresión equivalente igualada al vacío. Para esto, utilizaremos la identidad $$ A = B \iff A'B + AB' = \emptyset $$