---
dia: 2026-09-29
etapa: empezado
referencias: []
aliases: []
tags:
  - investigación/ciencias-de-la-computación/Programación-asincrónica
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust/async_std
  - nota/facultad
  - carrera/ingeniería-en-informática/concurrentes/Programación-Asincrónica
ejercicios: []
vinculoFacultad:
  - tema: Programación Asincrónica
    capitulo: 3
    materia: Programación Concurrente
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Esta [[ingeniería en informática/analisis 2/Nomenclatura/Función#Expresión en Rust|función]] sincrónica que produce el valor final de una función [[investigación/ciencias de la computación/Programación asincrónica/Programación asincrónica|asincrónica]], esto en [[investigación/ciencias de la computación/lenguajes de programación/lenguaje Rust/Lenguaje Rust|Rust]] lo logra, iterativamente llamando a la [[investigación/ciencias de la computación/Programación asincrónica/Programación asincrónica|tarea asincrónica]] hasta que el [[ingeniería en informática/concurrentes/Programación Asincrónica/Future|Future]] devuelva `Poll<Self::Output>::Ready(output)`

## Ejemplo
---
Supongamos que tenemos una función asincrónica `cheap_request`, entonces podríamos tener en el main lo siguiente 
```rust
use async_std::task;

fn main() -> stdd::io::Result<()> {
	task::block_on(cheap_request("example.com", 80, "/"))?;
	println!("{}", response);
	Ok(())
}
```
