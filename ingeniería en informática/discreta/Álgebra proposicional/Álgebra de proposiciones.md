---
dia: 2024-08-02
tags:
  - carrera/ingeniería-en-informática/discreta/Álgebra-proposicional
  - nota/facultad
aliases:
  - Lógica proposicional
vinculoFacultad:
  - tema: Álgebra proposicional
    capitulo: 2
    materia: Matemática discreta
    carrera: Ingeniería en informática
---
# Definición
---
Para una [[Proposición|proposición]] $p$, entonces tendremos $4$ [[Función#Álgebra proposicional|funciones]] $f(p)$. Podemos visualizar esta cuatro funciones de una tabla de verdad 

$$ \begin{array}{|c||c:c:c:c|}
\hline
p & F & p & p' & T\\
\hline
0 & 0 & 0 & 1 & 1\\
1 & 0 & 1 & 0 & 1 \\
\hline
\end{array} $$

Para el caso de dos variables proposicionales, $p$ y $q$, tendremos $16$ funciones proposicionales $f(p, ~q)$ 

$$ \begin{array}{|c:c:c:c:c:c:c:c:c|}
\hline
p & q & pq & p + q & p \oplus q & p \to q & q \to p & F \\\hline
0 & 0 & 0 & 0 & 0 & 1 & 1 & 0 \\
0 & 1 & 0 & 1 & 1 & 1 & 0 & 0 \\
1 & 0 & 0 & 1 & 1 & 0 & 1 & 0 \\
1 & 1 & 1 & 1 & 0 & 1 & 1 & 0 \\\hline
p' & q' & p \uparrow q & p \downarrow q & p \leftrightarrow q & (p \rightarrow q)' & (q \rightarrow p)' & T \\\hline
1 & 1 & 1 & 1 & 1 & 0 & 0 & 1 \\
1 & 0 & 1 & 0 & 0 & 0 & 1 & 1 \\
0 & 1 & 1 & 0 & 0 & 1 & 0 & 1 \\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 1 \\\hline
\end{array} $$

## Operaciones
---
El álgebra proposicional tiene las siguientes operaciones
* [[Operador condicional|Operador condicional]] $(\to)$
* [[Demostración de equivalencia|Operador bicondicional]] $(\leftrightarrow)$
* [[Operador NAND|Operador NAND]] $(\uparrow)$
* [[Operador NOR|Operador NOR]] $(\downarrow)$
* [[Operador XOR|Operador XOR]] $(\oplus)$

## Identidades
---
* [[Conmutatividad|Conmutatividad]] ![[Conmutatividad#^370681]]
* [[Distributividad|Distributividad]] ![[Distributividad#^5d5bd9]]
* [[Elemento neutro|Neutros]] ![[Elemento neutro#^d06bfa]]
* [[Complementario|Complementarios]] ![[Complementario#^2a2c00]]
* [[Acotación|Acotación]] ![[Acotación#^8d99f4]]
* [[Asociatividad|Asociatividad]] ![[Asociatividad#^ce342d]]
* [[Involución|Involución]] ![[Involución#^3ddcb0]]
* [[Ley de De Morgan|Ley de De Morgan]] ![[Ley de De Morgan#^9e560c]] ![[Ley de De Morgan#^fbb41e]]
* [[Idempotente|Idempotencia]] ![[Idempotente#^4f2f11]]
* [[Absorción|Absorción]] ![[Absorción#^49d912]]

