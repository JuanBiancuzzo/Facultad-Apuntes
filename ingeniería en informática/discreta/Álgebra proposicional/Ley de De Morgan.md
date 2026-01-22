---
dia: 2024-08-06
tags:
  - carrera/ingeniería-en-informática/discreta/Álgebra-de-Boole
  - carrera/ingeniería-en-informática/discreta/Álgebra-proposicional
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - nota/facultad
referencias:
  - "188"
etapa: ampliar
vinculoFacultad:
  - tema: Álgebra de Boole
    capitulo: 3
    materia: Matemática discreta
    carrera: Ingeniería en informática
  - tema: Álgebra proposicional
    capitulo: 2
    materia: Matemática discreta
    carrera: Ingeniería en informática
  - tema: Conjuntos, relaciones y funciones
    capitulo: 1
    materia: Álgebra 1
    carrera: Licenciatura en Ciencias Matemáticas
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En [[Álgebra de proposiciones|lógica proposicional]] y [[Álgebra de Boole|álgebra de Boole]], las leyes de De Morgan son un par de reglas de [[ingeniería electrónica/señales/Señales y sistemas/Transformación|transformación]]. Las normas permiten la expresión de las [[Operador AND|conjunciones]] y [[Operador OR|disyunciones]] puramente de términos de vía [[Operador NOT|negación]]<sup><a href="#ref-188" style="color: inherit; text-decoration: none;">[188]</a></sup> 

## Álgebra proposicional
---
Para el [[Álgebra de proposiciones|álgebra de proposiciones]] se entiende como 

$$ (p + q)' = p'q', ~~~~ (pq)' = p' + q' $$ ^9e560c

Donde también se cumple para las operaciones [[Operador NAND|NAND]] $(\uparrow)$ y [[Operador NOR|NOR]] $(\downarrow)$ de la siguiente forma

$$ (p \uparrow q)' = p' \downarrow q', ~~~~ (p \downarrow q)' = p' \uparrow q' $$ ^fbb41e

## Álgebra de conjunto
---
Para el [[Álgebra de conjuntos|álgebra de conjuntos]] se entiende como 

$$ (P \cup Q)' = P' \cap Q' , ~~~~ (P \cap Q)' = P' \cup Q' $$ ^5efbce
 
> [!demostracion]- Demostración
> Haremos la demostración de $(A \cup B)' = A' \cap B'$ en forma directa, donde tenemos que probar la doble inclusión
> 
> $(A \cup B)' \subseteq A' \cap B'$
> * Sea $x \in (A \cup B)'$
>     * Entonces $x \notin A \cup B$
> * Como $A \cup B = \set{x \in U : x \in A ~~\lor~~ x \in B }$
>     * $x \notin A$, es decir $x \in A'$, y 
>     * $x \notin B$, es decir $x \in B'$
> * Por lo tanto $x \in A' \cap B'$
>   
> $(A \cup B)' \supseteq A' \cap B'$ 
>  * Sea $x \in A' \cap B'$
>      * Entonces $x \in A'$, es decir $x \notin A$, y $x \in B'$, es decir $x \notin B$
>  * Por lo tanto no está en la [[Operador OR|unión]] $x \notin A \cup B$, o sea $x \in (A \cup B)'$

## Álgebra de Boole
---
Para el [[Álgebra de Boole|álgebra de Boole]] $(B,~+,~\cdot,~',~0_B,~1_B)$ se tiene 

$$ \forall x, y \in B: ~~~~~ (x + y)' = x' y', ~~~ (xy)' = x' + y' $$ ^094b93


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```