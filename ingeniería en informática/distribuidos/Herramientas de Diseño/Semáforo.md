---
dia: 2025-03-03
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
  - carrera/ingeniería-en-informática/concurrentes/Semaphores-Barriers-y-Condvars
vinculoFacultad:
  - tema: Herramientas de Diseño
    capitulo: 1
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
  - tema: Semaphores, Barriers y Condvars
    capitulo: 5
    materia: Programación Concurrente
    carrera: Ingeniería en informática
aliases:
  - Semaphore
  - Semáforo binario#^semaforo-binario
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un semáforo es un [[Mecanismo de sincronización|mecanismo de sincronización]] el cual utiliza una variable [[Números enteros|entera]] para acceder a recursos compartido. Esta misma queda definida por los valores que puede adoptar, por ejemplo $S = \set{0,~ 1,~ 2}$

Si el conjunto representativo de $S$ es $\set{0,~ 1}$, se lo llama semáforo binario, y este se comporta  como un [[ingeniería en informática/sisop/Concurrencia/Lock#^lock-escritura|mutex]], el cual se usa para acceder a [[Sección critica|secciones críticas]] ^semaforo-binario

Para lograr el funcionamiento, este está compuesto por dos campos
* Un entero no negativo llamado $V$, que representa la cantidad de recursos disponibles, y se inicializa con un valor $k \in \set{0,~ 1,~ 2}$, siguiendo el ejemplo del inicio
* Un [[ingeniería en informática/algebra 2/Espacios Vectoriales/Conjunto|conjunto]] de [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|procesos]] llamado $L$, que guarda todo proceso que quedó [[ingeniería en informática/taller/Concurrencia/Estados de un proceso#Blocked|bloqueado]] y que empieza vacio

Tiene dos [[ingeniería en informática/sisop/Concurrencia/Operación atómica|operaciones atómicas]] que operan sobre un semáforo $S$
* ```
	signal(S) {
		if (S.V > 0) {
			S.V := S.V - 1;
		} else {
			S.L add p // Siendo p el proceso que lo llamó
			p.state := blocked
		}
	}
  ``` 
  
* ```
	wait(S) {
		if (S.L is empty) {
			S.V := S.V + 1;
		} else {
			S.L remove q // Siendo q un elemento arbitrario del conjunto S.L
			p.state := ready
		}
	}
  ``` 
  En proceso `q` puede ser cualquier proceso bloqueado previamente, y no está definido cual debería ser, pero debería ser [[ingeniería en informática/sisop/Concurrencia/Concurrencia#Corrección|justo]]

En el caso de que se llame a `signal` pero $S$ este en su valor máximo, el [[Proceso|proceso]] que lo llamo se queda [[Estados de un proceso#Blocked|bloqueado]] hasta que algún otro proceso use `wait` liberando ese recurso

## En rust
---
Usando el [[ingeniería en informática/taller/Organizacion/Crate|crate]] [[investigación/ciencias de la computación/lenguajes de programación/lenguaje Rust/std_semaphore/Índice|Std-Semaphore]], se inicializa un semáforo de la siguiente forma
```rust
	let semaforo = Semaphore::new(5); // Siendo $5$ el valor inicial de S.V
```

La operación de `wait(S)` se puede hacer de $2$ formas 
```rust
	fn acquire(&self);
	
	fn access(&self);
```
donde la diferencia es que el `fn access(&self)` obtiene el acceso con el [[Patrón RAII|patrón RAII]], es decir, cuando se droppea la referencia, se libera el acceso

La operación de `signal(S)` se logra con
```rust
	fn release(&self);
```