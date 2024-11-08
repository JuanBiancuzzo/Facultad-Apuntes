---
dia: 2024-08-06
tags:
  - ingeniería-en-informática/discreta/Álgebra-proposicional
  - nota/facultad
aliases:
  - Ley de dominación para la suma
  - Ley de dominación para el producto
referencias:
  - "186"
---
# Definición
---
Dada dos [[Ley de composición interna|operaciones binarias internas]] $$ \oplus: U \times U \to U, ~~~~ \odot: U \times U \to U$$ donde $U$ es un [[Conjunto|conjunto]] de todos los elementos, donde se tiene un máximo $\top$ y un mínimo $\bot$ 

Se establece la dominación para $\oplus$, dado un $a \in U$ de la siguiente forma $$ a \oplus \top = \top $$ y la dominación para $\odot$ de la siguiente forma $$ a \odot \bot = \bot $$
## Casos específicos
---
Para el [[Álgebra de proposiciones|álgebra de proposiciones]] se entiende como 

$$ p + T = T, ~~~~ pF = F $$ ^8d99f4

Para el [[Álgebra de conjuntos|álgebra de conjuntos]] se entiende como 

$$ P \cup \mathbb{U} = \mathbb{U}, ~~~~ P \cap \emptyset = \emptyset $$ ^f5e1e9

donde $\mathbb{U}$ es el conjunto universal

Para el [[Álgebra de Boole|álgebra de Boole]] $(B,~+,~\cdot,~',~0_B,~1_B)$ se tiene 

$$ \forall x \in B: ~~~~~ x + 1_B = 1_B, ~~~ x ~ 0_B = 0_B $$ ^90ffb1

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```