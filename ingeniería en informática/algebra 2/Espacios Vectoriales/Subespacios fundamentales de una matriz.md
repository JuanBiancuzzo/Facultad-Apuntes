---
dia: 2023-01-22
aliases:
  - Espacio nulo
  - Espacio columna
  - Espacio fila
tags:
  - carrera/ingeniería-en-informática/algebra-2/Espacios-Vectoriales
  - nota/facultad
  - carrera/ingeniería-electrónica/algebra-2/Espacios-Vectoriales
---
# Definición
---
Con $A\in\mathbb{K}^{n \times m}$

 * El [[Subespacio|subespacio]] nulo de $A$: $nul(A) := \{x\in\mathbb{K}^m: Ax = 0_{\mathbb{K}^n}\} \subseteq \mathbb{K}^m$
 * El subespacio columna de $A$: $col(A) := gen\{A_1, A_2, \cdots, A_m\} \subseteq \mathbb{K}^n$
 * El subespacio fila de $A$: $fil(A) := col(A^T) \subseteq \mathbb{K}^m$

## Igualdades
---
Sea $A \in \mathbb{R}^{m \times n}$

 1. $nul(A^TA) = nul(A)$
 2. $col(A^TA) = col(A^T) = fil(A)$
 3. $nul(A) = col(A^T)^\perp$
 4. $nul(A^T) = col(A)^\perp$