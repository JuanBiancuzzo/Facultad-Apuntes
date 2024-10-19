---
dia: 2024-10-19
estado: 'Sin empezar'
tags: 
 - proyecto/investigación
 - ray-marching-con-a-diagramas-de-voronói
---
# Propuesta
---
Vamos a intentar implementar el [[Ray marching|algoritmo de Ray marching]] usando la ayuda de un [[Diagrama de Voronoi|diagrama de voronoi]] para saber las [[Distancia|distancia]], usando esta como una estructura de [[Cache|cache]] para optimizar la búsqueda

Vamos a establecer una una escena con objetos que describiremos como [[Conjunto|conjunto]] de triángulos e intentaremos recrear una imagen a partir de los mismo 

Para probar esto vamos a buscar una implementación tradicional, esta debería ser una representación correcta de la escena, por lo que nos permitirá saber que tan correcta es nuestra implementación aceptando un margen de error que determinaremos luego

Vamos a intentar medir
* El tiempo de ejecución, para ver si se consigue una mejora
* Comparar y medir si existe una diferencia entre el resultado esperado y el dado por este algoritmo


# Presentar
---


## Pruebas
---
%% Mostrar las pruebas %%


## Mejoras
---
%% Describir que se puede mejorar %%


# Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarArchivos", { indice: dv.current() });
```

# Notas
---
```dataviewjs
await dv.view("_scripts/dataview/proyectos/mostrarNotas", { proyecto: dv.current() });
```