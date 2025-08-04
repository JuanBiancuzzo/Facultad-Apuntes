---
dia: 2022-12-08
tags:
  - carrera/ingeniería-electrónica/analisis-3/Ecuaciones-diferenciales
  - carrera/ingeniería-en-informática/analisis-3/Ecuaciones-diferenciales
  - investigación/matemática/koopman-operator-theory
  - nota/facultad
  - nota/investigacion
aliases:
  - Ecuación diferencial parcial
  - PDE
referencias:
  - "230"
vinculoFacultad:
  - "[[ingeniería electrónica/analisis 3/Ecuaciones diferenciales/Resumen.md]]"
---
# Definición
---
La [[Función|función]] incógnita depende de dos o más variables y se presenta en la ecuación con sus [[Derivada parcial|derivadas parciales]] hasta cierto orden

### Ejemplo
---
Dada la ecuación diferencial parcial $$ \frac{\partial u(x,~y)}{\partial x} - \frac{\partial u(x,~y)}{\partial y} = 0 $$
Se ve fácilmente que para cualquier función $f : \mathbb{R} \to \mathbb{R}$ de clase $C^1$ en toda la recta, la función $u : \mathbb{R}^2 \to \mathbb{R}$ tal que $u(x,~y) = f(x + y)$ es una solución de la ecuación. Por lo que vemos que todas las soluciones de la ecuación depende de una función arbitraria


# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```