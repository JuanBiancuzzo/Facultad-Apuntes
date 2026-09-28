---
dia: 2026-09-28
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 710
etapa: empezado
---
# Enunciado
---
Para cada uno de los siguientes fragmentos de código, indique si es o no es un [[Busy wait|busy wait]]. Justifique en cada caso
1. ```rust
	loop {
		match TcpStream::connect("127.0.0.1:8080") {
			Ok(mut stream) => {
				stream.write_all(message.as_bytes()).expect("error")
			},
			Err(_) => {
				let random_result: f64 = rand::thread_rng().gen();
				thread::sleep(
					Duration::from_millis(5000 as f64 * rando_result as u64); 
				);
			},
		}
	}
	``` 
	^parte-1
	
2. ```rust
	loop {
		let random_result: rand::thread_rng().gen();
		thread::sleep(Duration::from_millis(random_result as u64));
		
		let mut items = self.pending_acks.lock().unwrap();
		let now = Instant::now();
		let mut i = 0;
		while i < items.len() {
			if items[i].expiration <= now {
				if items[i].item_type == "ACK" {
					let _ = items.remove(i);
					drop(items);
					self.send_result_interfaces();
					break;
				}
			} else {
				i += 1;
			}
		}
	}
	``` 
	^parte-2
	
3. ```rust
	for _ in 0..MINERS {
		let copper = Arc::clone(&resource);
		thread::spwan(move || loop{
			let minde_amount = rand::thread_rng().gen_range(1..10);
			*copper.write().expect("failed to mine") += mined_amount;
			let delay = rand::thread_rng().gen_range(3000..7000);
			thread::sleep(Duration::from_millis(delay));
		});
	}
	``` 
	^parte-3

# Resolución
---
[[colección/ejercicios/Ejercicio N° 710#^parte-1|1.]]

[[colección/ejercicios/Ejercicio N° 710#^parte-2|2.]]

[[colección/ejercicios/Ejercicio N° 710#^parte-3|3.]]
