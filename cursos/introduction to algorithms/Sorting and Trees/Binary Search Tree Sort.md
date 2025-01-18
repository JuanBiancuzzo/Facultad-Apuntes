---
dia: 2025-01-18
etapa: empezado
referencias:
  - "701"
tags:
  - cursos/introduction-to-algorithms/Sorting-and-Trees
  - nota/curso
  - investigación/ciencias-de-la-computación/algoritmos/Sorting-algorithms
aliases:
  - Ordenamiento con árbol binario de búsqueda
  - BST Sort
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se basa en la estructura de [[Árbol binario de búsqueda|árbol binario de búsqueda]] como la fuente de generar el ordenamiento

Los pasos son
1. [[Árbol binario de búsqueda#Insert|Insertar]] todos los elementos del [[Array|array]] en el árbol
2. [[Árbol binario de búsqueda#Recorrer|Recorrer]] el árbol y conseguir el array ordenado

```
function BSTSort :: array: Key[] n: Integer -> Key[]
    
    
end
```

Observemos que como insertar tiene [[Big O Notation|complejidad]] $O(\log_2(n))$, y como tenemos que insertar $n$ elementos, podemos concluir que su complejidad es $O(n ~ \log_2(n))$

## Ejemplo
---
Veamos un ejemplo donde tenemos el array $[5,~ 2,~ 4,~ 8,~ 6,~ 7,~ 3,~ 1]$ y lo tenemos que ordenar de  mayor a menor


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```