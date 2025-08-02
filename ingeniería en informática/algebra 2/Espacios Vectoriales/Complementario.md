---
dia: 2023-04-08
tags:
  - carrera/ingeniería-electrónica/algebra-2/Espacios-Vectoriales
  - carrera/ingeniería-en-informática/algebra-2/Espacios-Vectoriales
  - carrera/ingeniería-en-informática/discreta/Álgebra-proposicional
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - nota/facultad
aliases:
  - Elemento inverso
referencias:
  - "414"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El complemento de un [[Conjunto|conjunto]] es otro conjunto que contiene todos los elementos que no están en el conjunto original ^fbd3f4

## Álgebra proposicional
---
Para el [[Álgebra de proposiciones|álgebra de proposiciones]] se entiende como 

$$ p + p' = T, ~~~~ pp' = F, ~~~~ T' = F $$ ^2a2c00

## Álgebra de conjuntos
---
Para el [[Álgebra de conjuntos|álgebra de conjuntos]] se entiende como 

$$ P \cup P' = \mathbb{U}, ~~~~ P \cap p' = \emptyset, ~~~~ \mathbb{U}' = \emptyset $$ ^ea3733

donde $\mathbb{U}$ es el conjunto universal

## Álgebra de Boole
---
Para el [[Álgebra de Boole|álgebra de Boole]] $(B,~+,~\cdot,~',~0_B,~1_B)$ se tiene 

$$ \forall x \in B: ~~~~~ x + x' = 1_B, ~~~ xx' = 0_B $$ ^634d78

## Números enteros
---
Para todo $a \in \mathbb{Z}$, existe un (único) elemento, que se nota $-a$, que satisface que 

$$ a + (-a) = 0 $$ ^8e8cca

## Espacios vectoriales
---
Para un [[Espacio vectorial|espacio vectorial]] $V$, y la [[Ley de composición interna|operación suma]] $+$, se tiene

$$ u + (-u) = (-u) + u = 0_\mathbb{V}, ~~~ \forall u \in\mathbb{V} $$ ^2ecf94

donde $0_\mathbb{V}$ es el [[Elemento neutro|elemento neutro]] de la suma


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```