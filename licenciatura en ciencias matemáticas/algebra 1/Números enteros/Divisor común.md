---
dia: 2024-12-21
etapa: empezado
referencias:
  - "414"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sean $a, ~b \in \mathbb{Z}$, no ambos nulos y sea $d \in \mathbb{Z}$, donde $d \ne 0$. Entonces 

$$ d \mid a ~~ \text{y} ~~ d \mid b \iff d \mid (a ~:~ b) $$ ^4bc026


> [!quote]+ Demostración
> * $(\implies)$ Esta es la implicación interesante y no trivial. Por [[Combinación entera|combinación entera]] existen $s,~ t \in \mathbb{Z}$ tales que $(a ~:~ b) = s ~ a + t ~ b$ . Ahora, dado que por hipótesis, $c \mid a$ y $c \mid b$, se tiene que $c \mid s ~ a + t ~ b = (a ~:~ b)$
> * $(\impliedby)$ Esta implicación es obvia por la transitividad de la [[Divisibilidad|divisibilidad]]



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```