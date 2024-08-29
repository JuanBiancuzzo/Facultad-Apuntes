---
dia: 2024-07-27
tags:
  - nota/facultad
  - algo-1/Lenguaje-C
  - taller/Sintaxis
aliases:
  - Sentencia while
  - Sentencia mientras
---
### Definición
---
Esta [[Estructura de control iterativa|estructura de control]] repite una acción o [[Bloque de acción|bloque de acciones]] mientras el resultado de la evaluación de la expresión de control de la iteración arroje el valor true, esta evaluación se realiza antes de la ejecución del bloque. Funciona de la siguiente manera

1. Se evalúa la expresión booleana de control de la iteración
2. Si la evaluación arroja un resultado verdadero se ejecuta el bloque de acciones y se vuelve al paso anterior
3. Sino se continua con la ejecución de la acción siguiente al bloque de acciones

```c
while (expresion)
	accion;
```

En su defecto utilizando un [[Bloque de acción|bloque de acciones]] 

```c
while (expresion) {
	accion1;
	accion2;
	// ...
}	
```

^b1e802

#### Rust
---
El while puede repetir su bloque de código mientras se cumpla su condición

``` rust
let mut i = 0;

while i < 30 {
	println!("{}", i);
	i += 1;
}
```

O al igual que la [[Asignación condicional|asignación condicional]] se puede hacer

``` rust
while let Some(i) = opcional {
	// código
}
```

