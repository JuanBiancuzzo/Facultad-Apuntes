---
dia: 2024-12-24
tags:
  - investigación/ciencias-de-la-computación/Programación-asincrónica
  - investigación/índice
  - nota/investigacion
estado: Empezandolo con el contenido de Programación Concurrente
referencias:
  - "1229"
aliases:
  - Tarea asincrónica
vinculoFacultad:
  - tema: Programación Asincrónica
    capitulo: 3
    materia: Programación Concurrente
    carrera: Ingeniería en informática
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/superTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a investigar este modelo de [[Concurrencia|concurrencia]]

## Resumen
---
#carrera/ingeniería-en-informática/concurrentes/Programación-Asincrónica 
Programación asincrónica refiere a la aparición de eventos independientes al flujo del programa principal, y la forma en la cual se maneja estos eventos

Estos eventos pueden pueden venir de "afuera" como una [[ingeniería electrónica/señales/Señales y sistemas/Señal|señal]], o acción que un programa [[ingeniería en informática/sisop/Concurrencia/Concurrencia|concurrente]], la cual no se [[ingeniería en informática/taller/Concurrencia/Estados de un proceso#Blocked|bloquearía]] al esperar para obtener resultados

Se puede usar tareas asincrónicas en [[investigación/ciencias de la computación/lenguajes de programación/lenguaje Rust/Lenguaje Rust|Rust]] para intercalar tareas en un único [[ingeniería en informática/sisop/Concurrencia/Thread|thread]] o en un pool de threads, estas son mucho más livianas que los threas, y requiriendo menos overhead ya que comparte el [[ingeniería en informática/sisop/Virtualización de memoria/Stack|stack]] con otras tareas asincrónicas

### Ejemplo
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