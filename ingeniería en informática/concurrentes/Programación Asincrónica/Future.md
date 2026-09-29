---
dia: 2026-09-29
etapa: empezado
referencias: []
aliases: []
tags:
  - investigación/ciencias-de-la-computación/Programación-asincrónica
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust
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
El lenguaje [[investigación/ciencias de la computación/lenguajes de programación/lenguaje Rust/Lenguaje Rust|Rust]] utiliza el [[ingeniería en informática/taller/Sintaxis/Interfaz#Trait|trait]] `std::future::Future` que representa la tarea a realizar de forma incremental, y está dada por 
```rust
trait Future {
	type Output;
	
	fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output>;
}

enum Poll<T> {
	Ready(T),
	Pending,
}
```

Donde veamos el uso de [[Pin|Pin]], y el [[ingeniería en informática/taller/Sintaxis/Enum|enum]] del poll. Esto muestra como este método nunca bloquea e incluso es un método "lazy", solo cuando es polleado avanza todo lo que puede 

Mientras la operación no haya terminado, se devuelve `Poll<Self::Output>::Pending`, y cuando la operación termina, el resultado es `Poll<Self::Output>::Ready(output)`,  siendo `output` el resultado de la operación

Llamar `.await` en un `Future` toma [[ingeniería en informática/taller/Ownership/Ownership|ownership]] del mismo. Si está `Ready` el valor del `Future` es el valor devuelto en la expresión `await` y continúa. En caso contrario, retorna `Pending` a la [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]] que lo invocó