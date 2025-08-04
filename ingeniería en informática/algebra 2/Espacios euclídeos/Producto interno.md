---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/algebra-2/Espacios-euclídeos
  - carrera/ingeniería-electrónica/analisis-2/Nomenclatura
  - carrera/ingeniería-en-informática/algebra-2/Espacios-euclídeos
  - carrera/ingeniería-en-informática/analisis-2/Nomenclatura
  - nota/facultad
aliases:
  - Producto escalar
vinculoFacultad:
  - "[[ingeniería en informática/algebra 2/Espacios euclídeos/Resumen.md]]"
  - "[[ingeniería en informática/analisis 2/Nomenclatura/Resumen.md]]"
---
# Definición
---
Sea $\mathbb{V}$ un $\mathbb{K}$-[[Espacio vectorial|espacio vectorial]]. Un producto interno en $\mathbb{V}$ es una [[Función|función]] $\langle \cdot , \cdot \rangle : \mathbb{V} \times \mathbb{V} \to \mathbb{K}$, tal que

 1. Para cada $\lambda \in \mathbb{K}$ y para cada $x, y, z \in \mathbb{V}$
	  * $\langle x + y, z \rangle = \langle x, y \rangle + \langle y, z \rangle$
	  * $\langle \lambda x, y \rangle = \lambda \langle x, y \rangle$
 2. $\langle x, y \rangle = \overline{\langle x, y \rangle}$, para todo $x, y \in \mathbb{V}$
 3. $\langle x, x \rangle > 0$ si $x \ne 0$

Un $\mathbb{K}$-espacio vectorial con producto interno $\langle \cdot , \cdot \rangle$ se llama espacio euclídeo y lo denotaremos por $(\mathbb{V}, \langle \cdot, \cdot \rangle)$