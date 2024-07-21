---
dia: 2023-03-30
capitulo: 3
tags:
  - orga/NLP/cap3
  - nota
---
### Definición
---
Es una forma en la que se puede contabilizar una palabra, utilizando su frecuencia en documentos. 

Esta se define como:
$$ IDF(\text{palabra}) = \log \left(\frac{N + 1}{f} \right) $$

Donde $N$ es la cantidad total de documentos y $f$ es la cantidad de documentos en los que aparece la palabra.