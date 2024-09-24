---
dia: 2024-08-06
tags:
  - discreta/Álgebra-proposicional
  - nota/facultad
  - discreta/Álgebra-de-Boole
referencias:
  - "188"
---
# Definición
---
En [[Álgebra de proposiciones|lógica proposicional]] y [[Álgebra de Boole|álgebra de Boole]], las leyes de De Morgan son un par de reglas de [[señales/Señales y sistemas/Transformación.md|transformación]]. Las normas permiten la expresión de las [[Operador AND|conjunciones]] y [[Operador OR|disyunciones]] puramente de términos de vía [[discreta/Álgebra de conjuntos/Operador NOT.md|negación]]<sup><a href="#ref-188" style="color: inherit; text-decoration: none;">[188]</a></sup> 

## Casos específicos
---
Para el [[Álgebra de proposiciones|álgebra de proposiciones]] se entiende como 

$$ (p + q)' = p'q', ~~~~ (pq)' = p' + q' $$ ^9e560c

Donde también se cumple para las operaciones [[Operador NAND|NAND]] $(\uparrow)$ y [[Operador NOR|NOR]] $(\downarrow)$ de la siguiente forma

$$ (p \uparrow q)' = p' \downarrow q', ~~~~ (p \downarrow q)' = p' \uparrow q' $$ ^fbb41e

Para el [[Álgebra de conjuntos|álgebra de conjuntos]] se entiende como 

$$ (P \cup Q)' = P' \cap Q' , ~~~~ (P \cap Q)' = P' \cup Q' $$ ^5efbce

Para el [[Álgebra de Boole|álgebra de Boole]] $(B,~+,~\cdot,~',~0_B,~1_B)$ se tiene 

$$ \forall x, y \in B: ~~~~~ (x + y)' = x' y', ~~~ (xy)' = x' + y' $$ ^094b93

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```