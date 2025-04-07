---
dia: 2024-12-25
tags:
  - investigación/índice
  - nota/investigacion
  - investigación/matemática/Probabilidad
estado: Sin empezar
referencias:
  - "941"
aliases:
  - Medida de probabilidad
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/superTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a investigar la rama de matemática que es la probabilidad

## Resumen
---
#carrera/ingeniería-electrónica/proba/Teoría-de-probabilidades #carrera/ingeniería-en-informática/proba/Teoría-de-probabilidades #carrera/ingeniería-electrónica/estoca/Repaso-probabilidad
La probabilidad de un [[Evento|evento]] $A$ es un número positivo (o nulo) que se le asigna a cada suceso o evento del [[Espacio muestral|espacio muestra]]

Una probabilidad (o medida de probabilidad) es una función $P: \mathscr{A} \to [0, 1]$ que a cada evento $A$ le hace corresponder un número real $\mathbb{P}(A)$ con las siguientes propiedades
1. $0 \le \mathbb{P}(A) \le 1$, $\forall A \in \mathscr{A}$
2. $\mathbb{P}(\Omega) = 1$
3. Si $A \cap B = \emptyset$ entonces $\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B)$
4. [[Axioma de continuidad|Axioma de continuidad]]

> [!teorema]+ Teorema 5.1.1  
> Sea $(A_n)_{n \ge 1}$ una [[Sucesión|sucesión]] de [[Evento|eventos]] tales que $A_n \subset A_{n+1}, \forall n$ y $A = \displaystyle \bigcup^{\infty}_{i=1} A_i$, luego $$ \mathbb{P} = \lim_{n \to \infty} \mathbb{P}(A_n) $$
^teo-5-1-1

> [!teorema]+ Teorema 5.1.2  
> Sea $(A_n)_{n \ge 1}$ una [[Sucesión|sucesión]] de [[Evento|eventos]] tales que $A_{n+1} \subset A_n, \forall n$ y $A = \displaystyle \bigcap^{\infty}_{i=1} A_i$, luego $$ \mathbb{P} = \lim_{n \to \infty} \mathbb{P}(A_n) $$
^teo-5-1-2

## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/contenido/listaAcumulada", { archivo: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/referencia/referenciasAcumuladas', { archivo: dv.current() });
```