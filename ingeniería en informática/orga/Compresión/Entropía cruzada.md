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
Se define como cual es la [[ingeniería en informática/orga/Compresión/Entropía de Shannon|entropía]] de mi mensaje diseñado con una [[ingeniería en informática/proba/Variables y vectores aleatorios/Función de masa de probabilidad|función de masa de probabilidad]] $Q$ pero se envían con una función de masa de probabilidad $P$. Dándonos lo siguiente
$$ H(P, Q) = - \sum_i P_i \cdot log_2(Q_i) $$

También se puede plantear como 
$$ H(P,Q) = H(P) + D_{KL}(P||Q) $$
Donde $H(P)$ es la entropía para $P$ y $D_{KL}(P||Q)$ es la [[Divergencia de Kullback-Leibler]] 

