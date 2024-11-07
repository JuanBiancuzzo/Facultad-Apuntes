---
dia: 2024-10-09
tags:
  - algo-1/Introducción-a-la-programación
  - nota/facultad
aliases:
  - Recursividad indirecta#Recursividad indirecta
---
# Definición
---
La recursividad es una característica de ciertos problemas los cuales son solucionables mediante la solución de una instancia del mismo problema. En informática la recursividad está fuertemente asociada a las [[Función|funciones]] y a los [[Tipo de dato|tipos de datos]]

Para entender como funcionan veamos ejemplos de matemática, como el caso del [[Factorial|factorial]] ![[Factorial#^5daa79]] en este caso puede verse como la definición de factorial se invoca a si misma 

## En informatica
---
Para programar una función recursiva, podemos verlo en [[lenguajes de programación/lenguaje c/Índice|C]] donde vamos a separarlo en $3$ secciones
* Condición de corte
* Procesamiento
* Llamado recursivo

Notemos que no necesariamente tiene que estar separadas estas secciones, y pueden combinarse, especialmente la parte de procesamiento con el llamado recursivo. Como podemos ver en la implementación del factorial

```c
long factorial (int numero) {
    if (numero <= 0) {
        return 0; // Condición de corte
    }
    return numero * factorial(numero - 1); // Procesamiento y llamado recursivo
}
```

### Recursividad indirecta
---
Se dice que una función usa recursividad directa, si la misma se llama a sí misma. Por otro lado existe otra forma de recursividad, la recursividad indirecta, que se da cuando una función `f` llama a una función `g`, la función `g` llama a la función `f` y así sucesivamente