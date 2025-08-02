---
dia: 2024-08-16
tags:
  - carrera/ingeniería-en-informática/discreta/Grafos
  - investigación/ciencias-de-la-computación/algoritmos
  - nota/facultad
  - nota/investigacion
---
# Definición
---
El [[Algoritmo|algoritmo]] de Prim busca generar un [[Árbol generador|árbol generador]] mínimo, esto es, a partir de un [[Grafo pesado|grafo pesado]], genera un árbol generador que minimice la suma del peso de sus aristas

1. Parto de un vértice cualquiera del [[Grafo|grafo]]
2. Mientras queden vértices sin conectar, agrego la arista mínima, conectada con el grafo actual, que incida sobre un vértice aún no seleccionado
3. Una vez conecte todos los vértices, tendré un árbol generador mínimo

El árbol generado no es único, pero su peso será el mínimo posible