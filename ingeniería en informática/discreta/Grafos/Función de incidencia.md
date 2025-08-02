---
dia: 2024-08-09
tags:
  - carrera/ingeniería-en-informática/discreta/Grafos
  - nota/facultad
---
# Definición
---
Dado un [[Grafo|grafo]] $G = \big( V(G),~E(G),~\Psi_G \big)$, se define la [[Función|función]] de incidencia $$ \Psi_G: ~ E(G) \to \mathcal{P}\big( V(G) \big) $$
Para definir $\Psi_G$ utilizamos alguna de las siguientes notaciones $$ \begin{align} 
    \Psi_G(e_1) &= \Set{ v_1,~v_2 } \\
    \Psi_G(e_1) &= v_1~v_2 \\
    e_1 &= v_1~v_2
\end{align} $$
* Las aristas que inciden dos veces en el mismo vértice se denominan [[Lazo|lazos]]
* Si hay dos aristas que inciden sobre los mismos dos vértices, entonces es una [[Arista múltiple|arista múltiples]]