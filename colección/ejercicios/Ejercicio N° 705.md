---
dia: 2026-09-28
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 705
etapa: empezado
---
# Enunciado
---
Para cada uno de los siguientes fragmentos de código, indique si es o no es un [[Busy wait|busy wait]]. Justifique en cada caso
1. ```rust
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
	^parte-1
	
2. ```rust
	fn philosopher(id: usize, first_chopstick: Arc<Semaphore>, second_chopstick: Arc<Semaphore>) {
		loop {
			println!("Philosopher {}: thinking", id);
			thread::sleep(Duration::from_millis(rng.gen_range(3000..7000)));
			
			loop {
				println!("Philosopher {}: taking first chopstick", id);
				let first_access = first_chopstick.acquire();
				
				println!("Philosopher {}: attemping second chopstick", id);
				match second_chopstick.try_acquire() {
					Ok(second_access) => {
						println!("Philosopher {} eating", id);
						let delay = rand::thread_rng().gen_range(3000..7000);
						thread::sleep(Duration::from_millis(delay));
						break;
					},
					Err(_) => {
						println!("Philosopher {} eating", id);
						drop(first_access);
					},
				}
			}
		}
	}
	``` 
	^parte-2
	
1. ```rust
	struct Data {
		value: Option<i32>,	
	}
	
	fn main() {
		let data = Arc::new(Mutex::new(Data { value: None }));
		
		let c1 = Arc::clone(&data);
		let t1 = thread::spawn(move || {
			_ // does some work_
			let mut lock = cl.lock().unwrap();
			lock.value = Some(42);
			_
		});
		
		let c2 = Arc::clone(&data);
		let t2 = thread::spawn(move || {
			_ // does some work_
			loop {
				let lock = cl.lock().unwrap();
				if lock.value.is_some() {
					println!("Valor obtenido: {}", lock.valor.unwrap());
					break;
				}
			}
			_
		});
		
		t1.join().unwrap();
		t2.join().unwrap();
	}
	``` 
	^parte-3

# Resolución
---
[[colección/ejercicios/Ejercicio N° 705#^parte-1|1.]]

[[colección/ejercicios/Ejercicio N° 705#^parte-2|2.]]

[[colección/ejercicios/Ejercicio N° 705#^parte-3|3.]]
