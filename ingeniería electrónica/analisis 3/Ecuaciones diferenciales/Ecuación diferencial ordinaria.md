---
dia: 2022-12-08
tags:
  - carrera/ingeniería-electrónica/analisis-3/Ecuaciones-diferenciales
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-3/Ecuaciones-diferenciales
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La [[Función|función]] incógnita depende de una sola variable y se presenta en la ecuación con sus derivadas hasta cierto orden

### Ejemplo
---
Las ecuaciones diferenciales lineales a coeficientes constantes. Sabemos, por ejemplo, que el [[Conjunto|conjunto]] de todas las soluciones de la ecuación diferencial $$ y''(x)+y(x) = 0, ~x\in\mathbb{R} $$ ese $\Set{c_1 y_1 + c_2 y_2 : c_1, c_2 \in \mathbb{R}}$, donde $y_1(x) = cos(x)$ e $y_2(x) = sen(x)$

## Existencia y Unicidad
---
Se puede garantizar la existencia y la unicidad, si la función cumple con la [[Lipschitz continuity|continuidad de Lipschitz]]