---
dia: 2023-01-22
tags:
  - nota/facultad
  - algo-1/Lenguaje-C
  - taller/Sintaxis
  - analisis-2/Nomenclatura
  - lenguajes-de-programación/lenguaje-c
  - lenguajes-de-programación/lenguaje-Rust
---
# Definición
---
Escribimos estas funciones como $f: D \to H$ donde los conjuntos $D$ (el [[Dominio de una función|dominio]]) y $H$ (el [[Codominio|codominio]]) son no vacíos

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, thick]

	\coordinate (d) at (-1.5, 0);
	\coordinate (i) at ( 1.5, 0);
	
	\draw (d) ellipse (1.2 and 0.7);
	\path ($ (d) + (0, 0.7) $) node[above left=2pt] {$D$};
	\draw (i) ellipse (1.2 and 0.7);
	\path ($ (i) + (0, 0.7) $) node[above right=2pt] {$H$};

	\fill (d) circle (0.05)
		node[left=2pt] {$a$};
	\fill (i) circle (0.05)
		node[right=2pt] {$f(a)$};
	
	\draw[->, ultra thick, shorten >=5pt, shorten <=5pt] 
		(d) .. controls 
			($ (d) + (0.5, 1) $) and ($ (i) + (-0.5, 1) $)
		.. (i) 
			node[midway, above right=2pt] {$f$};
	
	\end{tikzpicture}
\end{document}
```

## Expresión en C
---
Se puede representar un [[algo 1/Introducción a la programación/Algoritmo|algoritmo]]
```c
tipoDeDato nombreAlgoritmo(tipoDeDato variable1, ...) {
	accion1;
	accion2;
	// ...
}
```

## Expresión en Rust
---
Las funciones, al igual que en c tienen que especificar el [[Tipo de dato|valor de retorno]] y tienen la siguiente sintaxis

```rust
fn sumar_uno(numero: i32) -> i32 {
	numero + 1
}

// como alternativa
fn sumar_uno(numero: i32) -> i32 {
	return numero + 1;
}

// o funcion que no devuelve nada
fn imprimir_numero(numero: i32) {
	println!("{}", numero);
}
```

## Expresión matemática
---
Esta función, la podemos pensar, como que establece una relación entre [[Espacio vectorial|vector]] de $A$ con los vectores de $B$. Tal que, $a \in A$ tiene un (y solo uno) $b \in B$, y esto se escribe como $f(a) = b$

## Operaciones
---
* [[Suma entre funciones|Suma entre funciones]] ![[Suma entre funciones#^7715e3]]
* [[Producto entre funciones|Producto entre funciones]] ![[Producto entre funciones#^ff1a85]]
* [[Cociente entre funciones|Cociente entre funciones]] ![[Cociente entre funciones#^b3bde8]]

