---
dia: 2023-03-16
capitulo: 1
tags:
  - taller/Sintaxis
  - nota
---
### Definición
---
Siempre que una [[Función|función]] devuelva un [[Resultado]], significa que puede ocurrir un error y por lo tanto hay que manejarlo. En el caso de ser una [[Opción]] también hay que manejarlo.

Para eso tenemos las operaciones:
* operador $?$: Este propaga el error o la opción a la función que lo llame. Para el caso de los [[Resultado|resultados]] el error tiene que coincidir. 
``` rust
enum ErroresMatematicos {
	ErrorDivisionPorCero,
}

fn dividir(num: f64, den: f64) -> Result<f64, ErroresMatematicos> {
	if den == 0.0 {
		Err(ErroresMatematicos::ErrorDivisionPorCero)
	} else {
		Ok(num / den)
	}
}

fn operar(num: f64, den: f65) -> Result<f64, ErroresMatematicos> {
	let division: f64 = dividir(num, den)?;
	Ok(division)
}
```
* Los métodos unwrap() y expect("..."): Estos En si no manejan el error simplemente obtienen el valor Ok en un resultado, o Some en una opción y [[Pánico|paniquean]] en el caso de haber un error o ser None.
* El método unwrap_or(valor): En el caso de Ok o Some actua como el unwrap(), pero en el caso de error o None, este devuelve el valor otorgado.
* Por último tenemos métodos como is_some(), is_none(), is_ok(), is_err(): Nos sirven para manejarlos.