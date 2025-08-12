---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - carrera/ingeniería-electrónica/fisica-2/Electrostática-en-el-vacío
  - carrera/ingeniería-electrónica/intro/Reducción-de-circuitos
  - carrera/ingeniería-en-informática/fisica-2/Electrostática-en-el-vacío
  - nota/facultad
aliases:
  - Teorema de superposición
referencias:
  - "200"
  - "899"
  - "873"
etapa: ampliar
vinculoFacultad:
  - tema: Respuesta dinámica
    capitulo: 1
    materia: Control automático
    carrera: Ingeniería electrónica
  - tema: Reducción de circuitos
    capitulo: 2
    materia: Introducción a la ingeniería electronica
    carrera: Ingeniería electrónica
  - tema: Electrostática en el vacío
    capitulo: 2
    materia: Física 2 A
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El principio de superposición es una herramienta matemática que permite descomponer un [[Función lineal|problema lineal]] o de otro tipo en dos o más subproblemas más sencillos, de tal manera que el problema original se obtiene como "superposición" de estos subproblemas más sencillos

Técnicamente, el principio de superposición afirma que cuando las ecuaciones de comportamiento que rigen un problema físico son lineales, entonces el resultado de una medida o la solución de un problema práctico relacionado con una magnitud extensiva asociada al fenómeno, cuando están presentes los conjuntos de factores causantes A y B, puede obtenerse como la suma de los efectos de A más los efectos de B<sup><a href="#ref-200" style="color: inherit; text-decoration: none;">[200]</a></sup> 

Otra forma de explicarlo es que este principio establece que la respuesta producida por la aplicación simultánea de dos funciones de entrada diferentes es la suma de las dos respuestas individuales

Se puede expresar matemáticamente, considerando un [[Sistema|sistema]] con entradas $u$ y salidas $y$, y supongamos que el sistema en reposo, lo excitamos con la entrada $u_1(t)$ y obtenemos la salida $y_1(t)$, y desde el reposo, excitamos el sistema con la entrada $u_2(t)$ y obtenemos la salida $y_2(t)$. Entonces si el sistema es lineal, y este está en reposo, al excitarlo con la entrada $u(t) = \alpha_1 ~ u_1(t) + \alpha_2 ~ u_2(t)$ se tiene que obtener la salida  $y(t) = \alpha_1 ~ y_1(t) + \alpha_2 ~ y_2(t)$

## Superposición de fuerzas
---

## Superposición de ondas
---
Cuando hay más de una fuente de [[Onda electromagnética|ondas electromagnéticas]] presentes simultáneamente se dan dos situaciones

### Las fases de las fuentes están correlacionadas en el tiempo
---
En este caso se dice que las fuentes son coherentes. Los campos individualmente de cada onda se superponen linealmente para dar un campo resultante. Esta superposición introduce diferencias de fase debido a la relación de fase original de las fuentes y la posición del punto de observación, que llevan a una redistribución de la [[Energía|energía]] en el espacio que llamamos [[Interferencia|interferencia]] 

Un ejemplo de fuentes coherentes es un conjunto de antenas alimentadas desde una misma fuente

### Las fases de las fuentes no están correlacionadas en el tiempo
---
En este caso se dice que las fuentes son incoherentes. Se superponen las [[Intensidad|intensidad]] ([[Teorema de Poynting|vectores de Poynting]]) individuales de las ondas para dar una intensidad resultante. Como las intensidades no contienen relaciones de fase, no se produce interferencia

Un ejemplo típico de fuentes incoherentes son las fuentes extensas de luz como un tubo fluorescente

## Para circuitos
---
Se establece que la [[Tensión|tensión]] entre los extremos (o la [[Corriente eléctrica|corriente]] a través) de un elemento en un [[Circuito lineal|circuito lineal]] es la suma algebraica de las tensiones (o corrientes) a través de ese elemento debido a que cada fuente independiente actúa sola 

### Condiciones
---
- [[Circuito lineal|Circuito lineal]]
- Hay igual cantidad de fuentes ([[Fuente de tensión|tensión]] o [[Fuente de corriente|corriente]]) que de circuitos.
- Las fuentes de tension se cierran.
- Las fuentes de corriente se abren.

### Pasos
---
1.  Apagar todas las fuentes ([[Fuente de tensión|fuente de tensión]] y [[Fuente de corriente|fuente de corriente]]) independientes excepto una. Calcular la salida (tensión o corriente eléctrica) debido a la única fuente activa
2.  Repetir el paso anterior para cada una de las fuentes independientes presentes en el circuito
3.  La contribución total viene dada por la suma algebraica de las contribuciones de cada una de las fuentes independientes


# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```