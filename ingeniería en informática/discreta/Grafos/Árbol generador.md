---
dia: 2024-08-14
tags: 
 - carrera/ingeniería-en-informática/discreta/Grafos
 - nota/facultad
---
# Definición
---
Un árbol generador de un [[Grafo|grafo]] $G$ es un subgrafo que contiene todos los vértices del grafo original y es un [[Árbol|árbol]]

> [!demostracion]- Demostración
> Todo [[Grafo conexo|grafo conexo]] admite un árbol generador, esto es un subgrafo que contiene todos los vértices y es un [[Árbol|árbol]]
> 
> Sea $T$ un grafo generador de $G$, entonces usando la [[Fórmula de Euler|fórmula de Euler]] $$ \begin{align}
>     n(T) - m(T) + f(T) &= 2 \\
>     n(G) - \big( n(G) - 1 \big) + 1 &= 2
> \end{align} $$ donde $n(T)$ es el [[Orden de un grafo|orden]] de $T$, $m(T)$ es el [[Tamaño de un grafo|tamaño]] de $T$ y $f(T)$ es la caras de $T$
> 
> Se añade a ese árbol generador una a una las aristas hasta completar $G$, por cada arista agregada, crearemos un círculo y entonces, crearemos una cara $$ n(T) + \big( n(G)  1 - k \big) + f + k = 2 $$
