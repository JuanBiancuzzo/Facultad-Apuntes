---
dia: 2024-12-24
etapa: ampliar
referencias: 
tags:
  - ingeniería-en-informática/algo-1/Lenguaje-C
  - carrera/ingeniería-electrónica/algo-1/Lenguaje-C
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - nota/facultad
aliases:
  - Firma de una función
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se denomina prototipo de una [[Función|función]], o firma, a la declaración de la función sin la implementación. Esto permite al [[Compilador|compilador]] o [[Interpretación|interpretador]] conocer la existencia de una función

## En C
---
Este se puede definir como el [[Tipo de dato|tipo de dato]] de retorno, seguido del nombre de la función y por último, el listado de tipos de datos de los parámetros de las mismas. Notemos que es opcional el nombre de estas

```c
tipoDeDato nombreAlgoritmo(tipoDeDato, ...);
```

### Ejemplo
---
```c
// Firma de la funcion
int cuadrado(int);

int main() {
    int i = cuadrado(5);
    printf("%d\n", i);
    
    return 0;
}

// Implementacion de la firma
int cuadrado(int numero) {
    return numero * numero;
}
```

