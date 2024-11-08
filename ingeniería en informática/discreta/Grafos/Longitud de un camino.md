---
dia: 2024-08-09
tags: 
 - ingeniería-en-informática/discreta/Grafos
 - nota/facultad
---
# Definición
---
La longitud de un [[Camino|camino]] es la cantidad de aristas que tiene la sucesión. El camino trivial tiene longitud $0$

La [[Distancia|distancia]] entre dos vértices es infinita si no hay un camino entre ellos, y es la longitud de un camino de longitud mínima cuando están conectados. Se denota $d(u,~ v)$, como la longitud del camino $u-v$ geodésico ([[Mínimo|mínimo]])

Esta longitud forma una [[Métrica|métrica]], ya que cumple los axiomas
 1. $d(u,~ v) = 0$ si y solo si $u = v$
 2. $d(u,~ v) = d(v,~u)$
 3. $d(u,~ w) \le d(u,~ v) + d(v,~ w)$ ([[Desigualdad de Cauchy-Schwarz|desigualdad de Cauchy-Schwarz]])