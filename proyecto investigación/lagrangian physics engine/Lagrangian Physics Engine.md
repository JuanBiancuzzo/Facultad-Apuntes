---
dia: 2024-10-17
estado: 'Sin empezar'
tags: 
 - proyecto/investigación
 - proyecto-ingestigación/lagrangian-physics-engine
---
# Propuesta
---
Vamos a intentar crear un [[game engine/physics engine/Índice|motor de física]] usando [[física/lagrangian mechanics/Índice|Lagrangian mechanics]] para poder resolver las colisiones entre objetos

Para conseguirlo vamos a crear una interfaz para poder usar este motor, y esta encapsulará toda la lógica necesaria para usarla

Para probarlo vamos a usar un motor de físicas existente para tener como control y vamos a crear escenarios para poder crear comparaciones. En los casos donde el motor preexistente de el resultado incorrecto, tendremos que crear una forma de cuantificar que tan correcto es nuestro motor

Las pruebas tendrán como objetivo medir
* El tiempo de ejecución
* La precisión del resultado dado un margen de error

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