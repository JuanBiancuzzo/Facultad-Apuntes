---
dia: 2026-09-29
etapa: empezado
referencias: []
aliases: []
tags:
  - investigación/ciencias-de-la-computación/Programación-asincrónica
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
Se puede usar tareas asincrónicas en [[investigación/ciencias de la computación/lenguajes de programación/lenguaje Rust/Lenguaje Rust|Rust]] para intercalar tareas en un único [[ingeniería en informática/sisop/Concurrencia/Thread|thread]] o en un pool de threads, estas son mucho más livianas que los threas, y requiriendo menos overhead ya que comparte el [[ingeniería en informática/sisop/Virtualización de memoria/Stack|stack]] con otras tareas asincrónicas

## Ejemplo
---
Si se tuviera un caso sincrónico
```rust
use std::{net, thread};

fn main() {
	let listener = net::TcpListener::bind(address)?;
	
	for socket_result in listener.incoming() {
		let socket = socket_result?;
		let groups = chat_group_table.clone();
		thread::spawn(|| {
			log_error(serve(socket, groups));
		});
	}
}
```

El código asíncronico sería
```rust
use async_std::{net, task};

async fn _main() {
	let listener = net::TcpListener::bind(address).await?;

	let mut new_connections = listener.incoming();
	while let Some(socket_result) = new_connections.next().await {
		let socket = socket_result?;
		let groups = chat_group_table.clone();
		task::spawn(async || {
			log_error(serve(socket, groups));
		});
	}
}
```

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```