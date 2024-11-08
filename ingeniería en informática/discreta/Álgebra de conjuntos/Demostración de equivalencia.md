---
dia: 2024-08-03
tags:
  - ingeniería-en-informática/discreta/Álgebra-de-conjuntos
  - nota/facultad
  - ingeniería-en-informática/discreta/Álgebra-proposicional
aliases:
  - Recíproca
  - Contrarrecíproca
  - Contraria
---
# Definición
---
Para demostrar que dos [[Proposición|proposiciones]] $p$, $q$ son equivalentes, debemos demostrar la doble inclusión para sus [[Conjunto de veracidad|conjuntos de veracidad]]
* $P \subseteq Q$ 
* $Q \subseteq P$ 

Otra forma de demostrar la igualdad de dos [[Función proposicional|funciones]] es que estas toman en el mismo valor para todo elemento del [[Dominio de una función|dominio]]. Aprovechando que las proposiciones únicamente tienen dos valores, basta con demostrar que se cumple que $v(p) = 1$ sii $q(p) = 1$. Nótese que el análisis análogo con $v(p) = 0$ es válido

Para las demostraciones de los conjuntos de veracidad, usualmente será más simple si tratamos de hallar una expresión equivalente igualada al vacío. Para esto, utilizaremos la identidad $$ A = B \iff A'B + AB' = \emptyset $$
Cuando nos hallamos con una inclusión, esta podrá ser reemplazada con igualdad $$ A \subseteq B \iff AB = A \iff AB' = \emptyset  $$
## Usando proposiciones
---
A veces demostrar que una [[Operador condicional|implicancia]] es complicada, por lo que se puede trabajar con la contrarrecíproca, la cual es equivalente. A su vez, la contraria es equivalente a la recíproca $$ \begin{array}{r l ccc r l}
    \text{Original:} & p \to q && \xlongequal{~~~~~~~~~~~~~~~~~~~~~~} && \text{Contrarrecíproca:} & q' \to p' \\
    \text{Recíproca:} & q \to p && \xlongequal{} && \text{Contraria:} & p' \to q' 
\end{array} $$


