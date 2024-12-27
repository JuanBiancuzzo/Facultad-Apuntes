---
dia: 2023-11-12
tags:
  - ingeniería-en-informática/sisop/Concurrencia
  - nota/facultad
---
# Definición
---
La programación [[Thread|multihilo]] extiende el [[Modelo secuencial]] de programación de un único [[Thread|hilo]] de ejecución. En este [[Modelo]] se puede encontrar dos escenarios posibles
1. Un [[ingeniería en informática/sisop/La abstracción de proceso/Programa]] está compuesto por un conjunto de [[Thread|threads]] independientes que operan sobre un conjunto de datos que están completamente separados entre sí y son independientes
2. Un programa está compuesto por un conjunto de thread que trabajan en forma cooperativa sobre un set de [[Memoria]] y datos que son compartidos

Ambos escenarios son completamente distintos y tienen distintas formas de tratamiento. El segundo caso, en el cual existe datos que son compartidos entre los distintos threads merece una atención particular. Este tipo de programa es mucho más complejo de construir que los programa del modelo o caso 1.

En un programa que utiliza un modelo de programación de threads cooperativo, la forma de pensar [[Modelo secuencial|secuencial]] no sirve:
1. La ejecución del programa depende de la forma en que los threads se intercalan en su ejecución, esto influye en los accesos a la memoria de recursos compartidos
2. La ejecución de un programa puede no ser determinística. Diferentes corridas pueden producir distintos resultados, por ejemplo debido a decisiones del [[Thread scheduler|scheduler]]
3. Los [[Compilador|compiladores]] y el [[Procesador|procesador físico]] pueden reordenar las instrucciones. Los compiladores modernos pueden reordenar las instrucciones para mejorar la performance del programa que se está ejecutando, este reordenamiento es generalmente invisible a los ojos de un solo thread

Teniendo en cuenta lo anterior, la programación multithreading puede incorporar [[Bug|bugs]] que se caracterizan por ser:
* Sutiles
* No determinísticos
* No reproducibles

El approach a seguir en estos casos es
1. Estructurar el programa para que resulte fácil el razonamiento [[Concurrencia|concurrente]] 
2. Utilizar un conjunto de primitivas estándares para sincronizar el acceso a los recursos compartidos

## Tipos de datos
---
Estos tipos de datos son de extremada necesidad cuando se trabaja en un entorno [[Concurrencia|concurrente]]

### Contador
---
```c
typedef struct __counter_t { 
	int value; 
} counter_t; 

void init(counter_t* c) { 
	c->value = 0; 
} 

void increment(counter_t* c) { 
	c->value++; 
} 

void decrement(counter_t* c) { 
	c->value--; 
} 

int get(counter_t* c) { 
	return c->value; 
}
```