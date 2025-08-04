---
dia: 2023-04-03
tags:
  - carrera/ingeniería-en-informática/orga/Compresión
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/orga/Compresión/Resumen.md]]"
---
# Definición
---
Se define como cual es la [[Entropía de shannon|entropía]] de mi mensaje diseñado con una [[Función de masa de probabilidad]] $Q$ pero se envian con una [[Función de masa de probabilidad]] $P$. Dandonos lo siguiente
$$ H(P, Q) = - \sum_i P_i \cdot log_2(Q_i) $$

También se puede plantear como 
$$ H(P,Q) = H(P) + D_{KL}(P||Q) $$
Donde $H(P)$ es la [[Entropía de shannon]] para $P$ y $D_{KL}(P||Q)$ es la [[Divergencia de Kullback-Leibler]] 