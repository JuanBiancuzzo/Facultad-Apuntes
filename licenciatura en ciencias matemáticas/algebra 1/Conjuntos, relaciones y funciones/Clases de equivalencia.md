---
dia: 2024-11-02
etapa: ampliar
referencias:
  - "411"
tags:
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Podemos ver que al introducir una [[Relación de equivalencia|relación de equivalencia]] en un [[Conjunto|conjunto]], formaremos pequeños clústeres aislados en el conjunto, de modo que cualquier elemento de un clúster está en relación todos los elementos del mismo clúster, y con ningún elemento fuera del clúster

Donde cada clúster es una [[Clase|clase]], la cual normalmente se elige un representante de cada clase

La relación de equivalencia introduce una partición de clases, coloquialmente conocida como [[Partición|partición]]. Todos los elementos están en por lo menos una clase y las clases son disjuntas

Se entiende $A/\mathcal{R}$ como el conjunto de clases de $A$ bajo la relación de equivalencia $\mathcal{R}$ $$ A/\mathcal{R} = \Set{ [a] : ~ a \in A } $$
## Propiedad fundamental
---
Sean $A$ un con conjunto y $\mathcal{R}$ una relación de equivalencia en $A$. Sean $x,~y \in A$. Entonces, o bien $[x] \cap [y] = \emptyset$, o bien $[x] = [y]$

> [!demostracion]- Demostración
> Supongamos que $[x] \cap [y] \ne \emptyset$. Existe entonces $z \in A$ tal que $z \in [x] \cap [y]$, es decir $z\mathcal{R}x$ y $z\mathcal{R}y$. Pero por [[Relación simétrica|simetría]], $x\mathcal{R}z$ también, y por [[Relación transitiva|transitividad]], $x \mathcal{R} z$ y $z \mathcal{R} y$, implica $x \mathcal{R} y$, esto quiere decir que $x \in [y]$ (y por simetría, $y \in [x]$) 
> 
> Pero luego, todo elemento $z' \in [x]$ satisface $z' \mathcal{R} x$, y como $x \mathcal{R} y$, se tiene $z' \mathcal{R} y$, o sea $z' \in [y]$. Es decir, hemos probado que $[x] \subseteq [y]$, y del mismo modo se prueba $[y] \subseteq [x]$. Por lo tanto $[x] = [y]$

## Relaciones de equivalencia y particiones
---
Sea $A$ un conjunto. Hay una manera natural de asociarle a una relación de equivalencia en $A$ una partición de $A$. [[Demostración de equivalencia#Usando proposiciones|Recíprocamente]], a toda partición se le puede asociar una relación de equivalencia, y estas asociaciones son inversas una de la otra

> [!demostracion]- Demostración
> Si $\mathcal{R}$ es una relación de equivalencia, como vimos anteriormente podemos considerar las clases de equivalencia de los elementos de $A$. Cada clase de equivalencia es un [[Subconjunto|subconjunto]], y dos de estos subconjuntos distintos son disjuntos. Como el conjunto es la unción de las clases, obtenemos una partición
> 
> Recíprocamente, dada una partición, definimos la relación $\mathcal{R}$ de la siguiente manera: $x \mathcal{R} x$ si y sólo si $x$ e $y$ están en el mismo subconjunto. Es fácil ver que esto da una relación de equivalencia. También es fácil ver que estas asignaciones son una la versa de la otra, en el sentido de que si empezamos con una relación de equivalencia, miramos la partición asociada, y la relación asociada a esta partición, recuperamos la relación original. Asimismo, si empezamos con una partición, miramos la relación de equivalencia asociada, y la partición que tiene esta relación, recuperamos la partición original

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```