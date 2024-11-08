---
dia: 2024-08-13
tags:
  - ingeniería-en-informática/discreta/Grafos
  - nota/facultad
aliases:
  - Join graphs
---
# Definición
---
Definimos la operación de ensamble entre $G$ y $H$ como $G \ast H$, donde $$ \begin{align} 
    V(G \ast H) &= V(G) + V(H) \\
    H(G \ast H) &= E(G) + E(H) + \set{\set{u,~v}: ~~ u \in G, v \in H}
\end{align} $$