---
dia: 2023-03-20
materia: taller
capitulo: 2
---
### Definición
---
Los test son funciones de Rust que verifican que el resto del código funciona de la manera esperada.

El cuerpo del test se hace:
* Setup de los datos y estado necesarios para el test.
* Ejecutar el código que se quiere testear.
* Afirmar (`assert`) los resultados esperados

Se identifica a las funciones test con una anotación antes de la línea `fn` con `#[test]`. Para realizar las afirmaciones, se utilizan las macros de la familia `assert` por ejemplo

``` rust
#[test]
fn prueba_suma() {
    let primero: i32 = 3;
    let segundo: i32 = 4;
    let resultado_esperado: i32 = 7;
  
    let resultado: i32 = sumar(&primero, &segundo);
  
    assert_eq!(resultado_esperado, resultado);
}
```

Los test se organizan en un módulo test
``` rust
#[cfg(test)]
mod tests {
	// ...
}
```

Donde se coloca en el directorio `test/`, y en la compilación se compila como un [[Crate]] separado y debemos incluir como crate nuestro código.