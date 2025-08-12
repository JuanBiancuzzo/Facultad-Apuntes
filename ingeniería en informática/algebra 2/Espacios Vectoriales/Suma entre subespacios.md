---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/algebra-2/Espacios-Vectoriales
  - carrera/ingeniería-en-informática/algebra-2/Espacios-Vectoriales
  - nota/facultad
vinculoFacultad:
  - tema: Espacios Vectoriales
    capitulo: 1
    materia: Álgebra 2 A
    carrera: Ingeniería en informática
---
# Definición
---
Con dos subespacios $S$ y $T$ la suma esta definida como 
$$S+T:=\{v \in \mathbb{V} : \exists ~~ s \in S, t \in T : v = s + t \}$$

Donde esta suma es el menor subespacio que contiene a $S$ y a $T$

Se puede conseguir teniendo la union de los generadores de $S$ y de $T$
$$S = gen\{ v_1, v_2, \cdots, v_n \}, ~~ T = gen\{ w_1, w_2, \cdots, w_m \}$$
$$S + T = gen\{ v_1, v_2, \cdots, v_n, w_1, w_2, \cdots, w_m \}$$
pero esto no necesariamente es una base de $S + T$ 