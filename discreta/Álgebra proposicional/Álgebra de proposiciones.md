---
dia: 2024-08-02
tags:
  - nota/facultad
  - discreta/Álgebra-proposicional
---
### Definición
---
Para una [[Proposición|proposición]] $p$, entonces tendremos $4$ [[Función proposicional|funciones]] $f(p)$. Podemos visualizar esta cuatro funciones de una tabla de verdad 

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

#### Operaciones
---
El álgebra proposicional tiene las siguientes operaciones
* [[Operador condicional|Operador condicional]] $(\to)$
* [[Operador bicondicional|Operador bicondicional]] $(\leftrightarrow)$
* [[Operador NAND|Operador NAND]] $(\uparrow)$
* [[Operador NOR|Operador NOR]] $(\downarrow)$
* [[Operador XOR|Operador XOR]] $(\oplus)$
