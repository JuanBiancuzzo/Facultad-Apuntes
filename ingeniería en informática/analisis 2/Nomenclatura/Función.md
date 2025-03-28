---
dia: 2023-01-22
tags:
  - nota/facultad
  - carrera/ingeniería-en-informática/algo-1/Lenguaje-C
  - carrera/ingeniería-en-informática/taller/Sintaxis
  - carrera/ingeniería-en-informática/analisis-2/Nomenclatura
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
  - carrera/ingeniería-en-informática/estructura/Álgebra-de-Boole
  - carrera/ingeniería-electrónica/analisis-2/Nomenclatura
  - carrera/ingeniería-electrónica/algo-1/Lenguaje-C
  - carrera/ingeniería-electrónica/taller/Sintaxis
  - carrera/ingeniería-electrónica/estructura/Álgebra-de-Boole
  - carrera/ingeniería-en-informática/discreta/Álgebra-proposicional
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-zig
aliases:
  - Prototipo de una función#Expresión en C
  - Firma de una función#Expresión en C
referencias:
  - "411"
  - "845"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sean $A$ y $B$ [[Conjunto|conjuntos]], y sea $\mathcal{R}$ una [[Relación|relación]] de $A$ en $B$. Se dice que $\mathcal{R}$ es una función cuando todo elemento $x \in A$ está relacionado con algún $y \in B$, y este elemento $y$ es único. Es decir $$ \forall x \in A, ~~ \exists! ~ y \in B : x \mathcal{R} y $$
Donde el símbolo "$\exists!$" significa "existe un único", es decir $$ \begin{align} 
    & \forall X \in A, ~~ \exists ~ y \in b ~~ \text{tal que} ~~ x \mathcal{R} y \\
    & \text{y si} ~~ y,~z \in B ~ \text{son tales que} ~ x \mathcal{R} y ~ \text{y} ~ x \mathcal{R} z, ~ \text{entonces} ~ y = z
\end{align} $$
Como a cada $x \in A$ le corresponde un $y \in B$ y este $y$ es único, se le puede dar un nombre que hace notar que $y$ depende de $x$. Se dice que $y$ es la [[Codominio|imagen]] de $x$ por $f$, y se suele denotar "$y = f(x)$", que es la forma usual en la que conocemos las funciones

Escribimos estas funciones como $f: D \to H$ donde los conjuntos $D$ (el [[Dominio|dominio]]) y $H$ (el [[Codominio|codominio]]) son no vacíos

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

## Álgebra de Boole
---
Es una función cuyo [[Conjunto|conjunto]] de llegada (el dominio) y el conjunto de salida (el codominio), son elementos definidos por el [[Álgebra de Boole|álgebra de Boole]]

## Álgebra proposicional
---
La función proposicional del argumento $x$ escribe como $p(x)$ se convierte en una [[Proposición|proposición]] $p(a)$ cuando al argumento $x$ se le asigna un valor fijo $a$, tomando de un [[Conjunto|conjunto]] de referencia $I$

## Expresión en C
---
Se puede representar un [[Algoritmo|algoritmo]]

```c
tipoDeDato nombreAlgoritmo(tipoDeDato variable1, ...) {
	accion1;
	accion2;
	// ...
}
```

Notemos que podemos pasar como tipo de datos a un [[Puntero|puntero]] esto tiene el beneficio de poder acceder y modificar variables por fuera del [[Bloque de acción|scope]] de la función definida

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

## Expresión en Zig
---
Las funciones en [[Lenguaje Zig|Zig]] se declaran de la siguiente forma

```Zig
fn add(a: i32, b: i32) i32 {
    return a + b;
}
```

Se tiene que especificar los tipos de datos de cada argumento 

## Expresión matemática
---
Esta función, la podemos pensar, como que establece una relación entre [[Espacio vectorial|vector]] de $A$ con los vectores de $B$. Tal que, $a \in A$ tiene un (y solo uno) $b \in B$, y esto se escribe como $f(a) = b$

## Operaciones
---
* [[Suma entre funciones|Suma entre funciones]] ![[Suma entre funciones#^7715e3]]
* [[Producto entre funciones|Producto entre funciones]] ![[Producto entre funciones#^ff1a85]]
* [[Cociente entre funciones|Cociente entre funciones]] ![[Cociente entre funciones#^b3bde8]]


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```