---
dia: 2026-09-28
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 706
etapa: empezado
---
# Enunciado
---
Dado el siguiente fragmento de código, indique el nombre del problema que modela. Indique si la implementación es correcta o describa cómo mejorarla

```rust
fn main() {
	const N: usize = 5;
	
	let producers_waiting = Arc::new(Semaphore::new(0));
	let consumer_done = Arc::new(Semaphore::new(0));
	let data = Arc::new(Mutex::new(None));
	
	let producers_waiting_clone = producers_waiting.clone();
	let consumer_done_clone = consumer_done.clone();
	
	let consumer = thread::spawn(move || loop {
		println!("[Consumer] Sleeping...");
		producers_waiting_clone.acquire();
		
		println!("Doing my job with data{}...", data.lock().expect("can read"));
		thread::sleep(Duration::from_secs(2));
		
		consumer_done_clone.release();
		println!("Job finished");
	});
	
	let producers: Vec<_> = (0..N).map(|id| {
		let producers_waiting_clone = producers_waiting.clone();
		let consumer_done_clone = consumer_done.clone();
		
		thread::spawn(move || loop {
			let deley = rand::thread_rng().gen_range(3000..7000);
			thread::sleep(Duration::from_millis(delay));
			println!("[Producer {}] Arrived", id);
			producers_waiting_clone.release();
			
			*data.lock().expect("can't set data") = Some(id);
			
			println!("[Producer {}] waiting to be consumed", id);
			consumer_done_clone.acquire();
			
			println!("[Producer {}] Leaving", id);
		})
	}).collect();
	
	consumer.join().unwrap();
	for p in producers { p.join().unwrap(); }
}
```

Modele una [[Red de Petri|red de Petri]] para el problema del punto anterior. Si hubiera propuesto mejoras, inclúyalas

# Resolución
---
%%  Parece el problema del peluquero %%
