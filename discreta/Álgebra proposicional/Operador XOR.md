---
dia: 2024-08-02
tags:
  - nota/facultad
  - discreta/Álgebra-proposicional
  - lenguajes-de-programación/lenguaje-c
---
# Definición
---
Este [[Operación lógica|operador lógico]] tiene varias representaciones 

## Álgebra de proposiciones
---
Se define las implicancias utilizando los elementos del [[Álgebra de Boole|álgebra de Boole]] $$ p \oplus q \overset{\text{def}}{=} (p + q)(pq)' $$
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

## En C
---
Para obtener el resultado del `XOR` entre dos números, el [[lenguajes de programación/lenguaje c/Índice|lenguaje C]] lo expresa de la siguiente manera 

```c
size_t numero1 = 0b11110000;
size_t numero2 = 0b00111100;

size_t resultado = numbero1^numero2; // 0b11001100;
```