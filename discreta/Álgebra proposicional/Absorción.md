---
dia: 2024-08-06
tags:
  - discreta/Álgebra-proposicional
  - nota/facultad
referencias:
  - "190"
---
# Definición
---
Absorción es una forma lógica de argumento válido y una regla de inferencia de la [[Álgebra de proposiciones|lógica proposicional]]. La repla establece que si $P \to Q$ entonces $P \to (P \land Q)$ <sup><a href="#ref-190" style="color: inherit; text-decoration: none;">[190]</a></sup> 

## Casos específicos
---
Para el [[Álgebra de proposiciones|álgebra de proposiciones]] se entiende como 

$$ p + pq = p, ~~~~ p(p + q) = p $$ ^49d912

Para el [[Álgebra de conjuntos|álgebra de conjuntos]] se entiende como 

$$ P \cup (P \cap Q) = P, ~~~~ P \cap (P \cup Q) = P $$ ^bf732a

Para el [[Álgebra de Boole|álgebra de Boole]] $(B,~+,~\cdot,~',~0_B,~1_B)$ se tiene 

$$ \forall x, y \in B: ~~~~~ x + xy = x, ~~~ x(x + y) = x $$ ^350a2d

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```