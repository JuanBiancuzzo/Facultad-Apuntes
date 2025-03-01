---
dia: 2024-08-02
tags:
  - nota/facultad
  - carrera/ingeniería-en-informática/discreta/Álgebra-proposicional
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
referencias:
  - "411"
etapa: sin-empezar
aliases:
  - Diferencia simétrica entre conjuntos
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este [[Operación lógica|operador lógico]] tiene varias representaciones 

## Álgebra de proposiciones
---
Se define las implicancias utilizando los elementos del [[Álgebra de Boole|álgebra de Boole]] $$ p \oplus q \overset{\text{def}}{=} (p + q)(pq)' $$
Dada por la [[Tabla de verdad|tabla de verdad]] $$ \begin{array}{|c:c|c|}
\hline
p & q & p \oplus q\\
\hline
0 & 0 & 0 \\
0 & 1 & 1 \\
1 & 0 & 1 \\
1 & 1 & 0 \\
\hline
\end{array} $$

Notemos que 
* $p \oplus 0_B = p$
* $p \oplus p = 0$
* $p \oplus q = p \oplus q$

Por lo tanto si se tiene los número $p$ y $q$, podemos intercambiarlo sin usar otro número de la siguiente forma $$ \begin{align} 
    p &= p \oplus q \\
    q &= q \oplus p &&= (q \oplus p) \oplus q \\
        &&&= (q \oplus q) \oplus p \\
        &&&= 0_B \oplus p \\
        &&&= p \\
    p &= p \oplus q && (p \oplus q) \oplus q \\
        &&&(p \oplus q) \oplus p \\
        &&&= (p \oplus p) \oplus q \\
        &&&= 0_B \oplus q \\
        &&&= q \\
\end{align} $$
Por lo que finalmente, $p$ es $q$ y $q$ es $p$

## Álgebra de conjuntos
---
Sean $A$, $B$ [[Subconjunto|subconjuntos]] de un [[Conjunto|conjunto]] referencial $U$. Se define la diferencia simétrica $A \triangle B$ es el conjunto de los elementos de $U$ que pertenecen a $A$ o a $B$ pero no a los dos a la vez. Es decir $$ A \triangle B = \Set{ c \in U : (c \in A \land c \notin B) \lor (c \in B \land c \notin A)  } $$
También se puede definir según la [[Diferencia entre conjuntos|diferencia]] de la siguiente forma $$ A \triangle B = (A - B) \cup (B - A) = (A \cup B) - (A \cap B) $$

## En C
---
Para obtener el resultado del `XOR` entre dos números, el [[Lenguaje C|lenguaje C]] lo expresa de la siguiente manera 

```c
size_t numero1 = 0b11110000;
size_t numero2 = 0b00111100;

size_t resultado = numbero1^numero2; // 0b11001100;
```


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```