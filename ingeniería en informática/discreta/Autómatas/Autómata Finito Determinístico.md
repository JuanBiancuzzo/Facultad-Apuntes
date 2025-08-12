---
dia: 2024-08-08
tags:
  - carrera/ingeniería-en-informática/discreta/Autómatas
  - nota/facultad
aliases:
  - DFA
vinculoFacultad:
  - tema: Autómatas
    capitulo: 5
    materia: Matemática discreta
    carrera: Ingeniería en informática
---
# Definición
---
Se designa $M = \left( \Sigma, Q, q_0, \Upsilon, F \right)$ el autómata finito determinístico donde
* $\Sigma$ es un [[Alfabeto|alfabeto]]
* $Q$ es un [[Conjunto|conjunto]] de estados
* $q_0 \in Q$ es un estado inicial. Puede haber múltiples, pero todo autómata de múltiples estados iniciales puede reducirse a uno de un solo estado
* $\Upsilon: Q \times \Sigma \to Q$ es la [[Función|función]] de transición
* $F \subset Q$ es el conjunto de aceptación

Podremos representar la función de transición a partir de una tabla, o a partir de un [[Grafo orientado|grafo dirigido]]. El estado inicial suele indicarse con una flecha $\stackrel{\text{in}}{\to}$. Los estados que pertenecen al conjunto de aceptación se muestran en un doble círculo

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{automata, positioning}

\begin{document} 
	\begin{tikzpicture}[
		scale=1.3, transform shape, thick, shorten >=1pt
	]
		\node[state, initial]   (q_a)                      {$a$};
		\node[state]            (q_b) [above right=of q_a] {$b$};
		\node[state]            (q_c) [below right=of q_a] {$c$};
		\node[state, accepting] (q_d) [below right=of q_b] {$d$};
		
		\path[->] (q_a) edge (q_b)
					    edge (q_c)
				  (q_b) edge (q_d)
				        edge [loop above] ()
				  (q_c) edge (q_d)
				        edge [loop below] ();
	\end{tikzpicture}
\end{document}
```

## Lenguaje reconocido
---
Definimos $L(M)$ como el [[Lenguaje|lenguaje]] reconocido por el automata $$ L(M) \stackrel{\text{def}}{=} \bigg\{ x \in \Sigma^*: ~~ \Upsilon(q_0,~x) \in F \bigg\} $$
Siempre existe un DFA para un [[Lenguaje regular|lenguaje regular]], y los DFA solo dan lenguajes regulares