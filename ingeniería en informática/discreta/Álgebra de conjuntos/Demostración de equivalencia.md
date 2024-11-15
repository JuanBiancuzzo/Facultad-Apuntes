---
dia: 2024-08-03
tags:
  - ingeniería-en-informática/discreta/Álgebra-de-conjuntos
  - nota/facultad
  - ingeniería-en-informática/discreta/Álgebra-proposicional
  - licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
aliases:
  - Recíproca#Usando proposiciones
  - Contrarrecíproca#Usando proposiciones
  - Contraria#Usando proposiciones
  - Operador bicondicional
  - Igualdad de conjuntos
referencias:
  - "411"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Para demostrar que dos [[Proposición|proposiciones]] $p$, $q$ son equivalentes, debemos demostrar la doble inclusión para sus [[Conjunto de veracidad|conjuntos de veracidad]]
* $P \subseteq Q$ 
* $Q \subseteq P$ 

Otra forma de demostrar la igualdad de dos [[Función#Álgebra proposicional|funciones]] es que estas toman en el mismo valor para todo elemento del [[Dominio de una función|dominio]]. Aprovechando que las proposiciones únicamente tienen dos valores, basta con demostrar que se cumple que $v(p) = 1$ sii $q(p) = 1$. Nótese que el análisis análogo con $v(p) = 0$ es válido

Para las demostraciones de los conjuntos de veracidad, usualmente será más simple si tratamos de hallar una expresión equivalente igualada al vacío. Para esto, utilizaremos la identidad $$ A = B \iff A'B + AB' = \emptyset $$
Cuando nos hallamos con una inclusión, esta podrá ser reemplazada con igualdad $$ A \subseteq B \iff AB = A \iff AB' = \emptyset  $$
Es decir $A = B$ si tienen exactamente los mismos elementos (sin importar el orden y sin tener en cuenta repeticiones de elementos)

Dada por la [[Tabla de verdad|tabla de verdad]] $$ \begin{array}{|c:c|c|}
\hline
A & B & A = B\\
\hline
V & V & V \\
V & F & F \\
F & V & F \\
F & F & V \\
\hline
\end{array} $$

## Álgebra proposicional
---
Se define las implicancias utilizando los elementos del [[Álgebra de Boole|álgebra de Boole]] $$ p \leftrightarrow q \overset{\text{def}}{=} (p \to q)(q \to p) $$

### Usando proposiciones
---
A veces demostrar que una [[Operador condicional|implicancia]] es complicada, por lo que se puede trabajar con la contrarrecíproca, la cual es equivalente. A su vez, la contraria es equivalente a la recíproca $$ \begin{array}{r l ccc r l}
    \text{Original:} & p \to q && \xlongequal{~~~~~~~~~~~~~~~~~~~~~~} && \text{Contrarrecíproca:} & q' \to p' \\
    \text{Recíproca:} & q \to p && \xlongequal{} && \text{Contraria:} & p' \to q' 
\end{array} $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```