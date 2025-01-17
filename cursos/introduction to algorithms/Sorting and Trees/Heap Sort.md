---
dia: 2025-01-17
etapa: empezado
referencias:
  - "701"
tags:
  - cursos/introduction-to-algorithms/Sorting-and-Trees
  - nota/curso
  - investigación/ciencias-de-la-computación/algoritmos/Sorting-algorithms
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El [[Algoritmo|algoritmo]] de ordenamiento que usa la [[Heap|estructura Heap]] como la fuente de generar el ordenamiento

Los pasos son
1. [[Heap#Crear Max-Heap|Crear Max-Heap]] a partir del [[Array|array]]
2. Encontramos el [[Máximo|máximo]] que es la raíz del árbol `array[0]`
3. Intercambiar `array[n - 1]` con `array[0]`
    * Esto hace que el máximo este al final de array
4. Reducimos el tamaño de $n$ por uno, eliminando el máximo
5. La nueva raíz viola la propiedad de Max-Heap, pero los hijos la mantienen, por lo que se puede aplicar [[Heap#Max-Heapify|Max-Heapify]] para reestablecer la propiedad
6. Volver al paso $2$ si todavía el tamaño no es nulo


```
function HeapSort :: array: Key[] n: Integer -> Key[]
    
    let heapfyArray = CrearMaxHeap array n
    let arrayOrdenado: Key[] = []
    let indice = 0
    
    while n > 0 then
        // Encontramos el máximo
        arrayOrdenado[indice] = array[0]
        indice += 1
        
        // Descartamos el máximo
        array[0] = array[n - 1]
        n -= 1
        
        // Reestablecemos la propiedad de Max-Heap
        MaxHeapify array n 0    
    end
    
    return arrayOrdenado
end
```

## Observaciones
---
La [[Big O Notation|complejidad]] de este algoritmo es $O(n ~ \log_2(n))$, ya que tenemos $n$ pasos y `MaxHeapify` tiene una complejidad de $O(log_2(n))$

Actualmente ocupa $O(2n)$ en espacio de [[Memoria|memoria]] por crear el array ordenado. Pero notemos que si pusiéramos el máximo en la última posición, el array termina estando ordenado de menor a mayor. Entonces podemos modificar el algoritmo para tener un algoritmo in place

```
function HeapSort :: array: Key[] n: Integer -> void
    
    let heapfyArray = CrearMinHeap array n
        
    while n > 0 then        
        // Intercambiamos el mínimo con el último
        let temp = array[0]
        array[0] = array[n - 1]
        array[n - 1] = temp
        
        n -= 1
        
        // Reestablecemos la propiedad de min-Heap
        MinHeapify array n 0    
    end
end
```

## Ejemplo
---
Veamos un ejemplo donde tenemos el array $[5,~ 2,~ 4,~ 8,~ 6,~ 7,~ 3,~ 1]$ y lo tenemos que ordenar de menor a mayor

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```