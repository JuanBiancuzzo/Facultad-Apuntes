---
dia: 2024-10-17
estado: 'Sin empezar'
tags: 
 - proyecto/investigación
 - proyecto-ingestigación/lagrangian-physics-engine
---
# Propuesta
---
Vamos a intentar crear un [[investigación/game engine/physics engine/Índice|motor de física]] usando [[investigación/física/lagrangian mechanics/Índice|Lagrangian mechanics]] para poder resolver las colisiones entre objetos

Para conseguirlo vamos a crear una interfaz para poder usar este motor, y esta encapsulará toda la lógica necesaria para usarla

## Features que se quiere lograr
---
Basándonos en el motor de físicas [JoltPhysics](https://github.com/jrouwe/JoltPhysics) 

- Simulation of rigid bodies of various shapes using continuous collision detection
    - Sphere
    - Box
    - Capsule
    - Tapered-capsule
    - Cylinder
    - Tapered-cylinder
    - Convex hull
    - Plane
    - Compound
    - Mesh (triangle)
    - Terrain (height field)
- Simulation of constraints between bodies:
    - Fixed
    - Point
    - Distance (including springs)
    - Hinge
    - Slider (also called prismatic)
    - Cone
    - Rack and pinion
    - Gear
    - Pulley
    - Smooth spline paths
    - Swing-twist (for humanoid shoulders)
    - 6 DOF
- Motors to drive the constraints.
- Collision detection:
    - Casting rays.
    - Testing shapes vs shapes.
    - Casting a shape vs another shape.
    - Broadphase only tests to quickly determine which objects may intersect.
- Sensors (trigger volumes).
- Animated ragdolls:
    - Hard keying (kinematic only rigid bodies).
    - Soft keying (setting velocities on dynamic rigid bodies).
    - Driving constraint motors to an animated pose.
    - Mapping a high detail (animation) skeleton onto a low detail (ragdoll) skeleton and vice versa.
- Game character simulation (capsule)
    - Rigid body character. Moves during the physics simulation. Cheapest option and most accurate collision response between character and dynamic bodies.
    - Virtual character. Does not have a rigid body in the simulation but simulates one using collision checks. Updated outside of the physics update for more control. Less accurate interaction with dynamic bodies.
- Vehicles
    - Wheeled vehicles.
    - Tracked vehicles.
    - Motorcycles.
- Soft body simulation (e.g. a soft ball or piece of cloth).
    - Edge constraints.
    - Dihedral bend constraints.
    - Tetrahedron volume constraints.
    - Long range attachment constraints (also called tethers).
    - Limiting the simulation to stay within a certain range of a skinned vertex.
    - Internal pressure.
    - Collision with simulated rigid bodies.
    - Collision tests against soft bodies.
- Water buoyancy calculations.
- An optional double precision mode that allows large worlds.

## Pruebas
---
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