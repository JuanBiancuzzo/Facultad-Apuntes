---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/proba/Inferencia-estadística
  - carrera/ingeniería-en-informática/proba/Inferencia-estadística
  - nota/facultad
vinculoFacultad:
  - tema: Inferencia estadística
    capitulo: 10
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
---
# Definición
---
Sea $\underline{X}$ un [[Vector aleatorio]] con [[Función de densidad de probabilidad]] (o [[Función de masa de probabilidad|probabilidad conjunta]]) $f_\theta(\underline{x})$, $\theta \in \Theta$, entonces el [[Estadístico]] $T = r(\underline{X})$ es [[Estadistico suficiente|suficiente]] para $\theta$ si y solo si existen dos funciones $h$ y $g$ tales que $$ f_\theta(x) = g(r(\underline{x}), \theta) \cdot h(\underline{x}) $$