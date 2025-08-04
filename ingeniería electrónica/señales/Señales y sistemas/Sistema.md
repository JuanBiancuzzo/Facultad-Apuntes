---
dia: 2023-08-26
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - carrera/ingeniería-electrónica/embebidos/Diseño-desarrollo-y-depuración
  - carrera/ingeniería-electrónica/señales/Señales-y-sistemas
  - nota/facultad
referencias:
  - "898"
etapa: ampliar
vinculoFacultad:
  - "[[ingeniería electrónica/control/Respuesta dinámica/Resumen.md]]"
  - "[[ingeniería electrónica/embebidos/Diseño, desarrollo y depuración/Resumen.md]]"
  - "[[ingeniería electrónica/señales/Señales y sistemas/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Conjunto de reglas o principios sobre una materia racionalmente enlazados entre sí. En otras palabras, un sistema es una combinación de componentes que actúan juntos y realizan un objetivo determino

También se lo puede entender como un objeto que acepta [[Señal|señales]], las [[ingeniería electrónica/señales/Señales y sistemas/Transformación|transforma]] de acuerdo a una determinada ley y proporciona a su salida dicha señales transformada

La forma de [[Modelar|modelizar]] un sistema de forma universal, de forma matemática e independiente de su naturaleza física, es con un [[Operador|operador]] que pueda operar entre dos [[Espacio vectorial|espacios]] de [[Señal|señales]]

## Clasificación
---
Se puede clasificar un sistema con
* [[Memoria de un sistema|Memoria]]
* [[Sistema invertible|Invertible]]
* [[Sistema causal|Causalidad]]
* [[Sistema estable|Estabilidad]]
* [[Sistema invariante en el tiempo|Invariancia en el tiempo]]
* [[Sistema lineal|Linealidad]]


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```