---
dia: 2023-04-03
tags:
  - carrera/ingeniería-en-informática/orga/Compresión
  - nota/facultad
vinculoFacultad:
  - tema: Compresión
    capitulo: 4
    materia: Organización de datos
    carrera: Ingeniería en informática
---
# Definición
---
Se define como cual es la [[Entropía de shannon|entropía]] de mi mensaje diseñado con una [[Función de masa de probabilidad]] $Q$ pero se envían con una [[Función de masa de probabilidad]] $P$. Dándonos lo siguiente
$$ H(P, Q) = - \sum_i P_i \cdot log_2(Q_i) $$

También se puede plantear como 
$$ H(P,Q) = H(P) + D_{KL}(P||Q) $$
Donde $H(P)$ es la [[Entropía de shannon]] para $P$ y $D_{KL}(P||Q)$ es la [[Divergencia de Kullback-Leibler]] 