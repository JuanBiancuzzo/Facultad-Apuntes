---
dia: 2024-11-04
etapa: sin-empezar
referencias:
  - "412"
tags:
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
aliases:
  - Axiomas de Peano#Los axiomas de Peano
  - Número natural
  - Sucesor#Los axiomas de Peano
vinculoFacultad:
  - tema: Números naturales e Inducción
    capitulo: 2
    materia: Álgebra 1
    carrera: Licenciatura en Ciencias Matemáticas
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Los números naturales son informalmente el [[Conjunto|conjunto]] infinito $$ \mathbb{N} = \Set{ 1,~ 2,~ 3,~ 4,~ \cdots,~ 1001,~ 1002,~ \cdots,~ 2356789,~ \cdots } $$ de números que empiezan en $1$ y se obtienen los demás sumando siempre $1$

En el conjunto $\mathbb{N}$ se puede sumar y multiplicar: si $m,~ n \in \mathbb{N}$, entonces $m + n \in \mathbb{N}$ y $m \cdot n \in \mathbb{N}$. Además la suma y el producto se "portan bien"

* Conmutatividad ![[Conmutatividad#^4544c3]]
* Asociatividad ![[Asociatividad#^00fd4d]]
* Distributividad del producto sobre la suma ![[Distributividad#^173bc3]]

## Los axiomas de Peano
---
La clave de la definición axiomática de Peano a los números naturales, es la noción de sucesor $S$ que es la [[Función|función]] de $S: ~ \mathbb{N} \to \mathbb{N}$, $S(n) = n + 1$, y las propiedades que satisface

El conjunto $\mathbb{N}$ de números naturales es un conjunto $\mathcal{N}$ que satisface los siguientes axiomas
1. $1 \in \mathcal{N}$
2. Existe una función "sucesor" $S$ definida sobre $\mathcal{N}$ que satisface
    * Para todo $n \in \mathcal{N}$, $S(n) \in \mathcal{N}$ (es decir $S$ es una función de $\mathcal{N}$ en $\mathcal{N}$)
    * Para todo $n \in \mathcal{N}$, $S(n) = 1$ es False (es decir, $1$ no es el sucesor de ningún $n \in \mathcal{N}$)
    * Para todo par de número $n,~m \in \mathcal{N}$, si $S(n) = S(m)$, entonces $n = m$ (es decir la función $S$ es [[Función inyectiva|inyectiva]])
3. Si $K$ es un conjunto cualquiera que satisface las dos propiedades siguientes
    * $1 \in K$,
    * para todo $n \in \mathcal{N}, ~~ n \in K \implies S(n) \in K$,
   entonces $\mathcal{N} \subset K$

Los axiomas $1$ y $2$ implican que el conjunto $\mathcal{N}$ contiene a los elementos $1,~S(1),~S(S(1)),~ \cdots$, que son todos distintos entre sí, y es por lo tanto infinito

Pero hay que garantizar que no es más "[[Cardinalidad|grande]]" que el conjunto $\Set{ 1,~ S(1),~ S(S(1)),~ \cdots~ }$, este es el papel que juega el axioma $3$, que es de hecho el axioma de [[Principio de inducción|Inducción]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```