---
dia: 2023-08-26
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - carrera/ingeniería-electrónica/embebidos/Diseño-desarrollo-y-depuración
  - carrera/ingeniería-electrónica/señales/Señales-y-sistemas
  - carrera/ingeniería-electrónica/quimica/Termodinámica
  - nota/facultad
referencias:
  - "898"
etapa: ampliar
vinculoFacultad:
  - tema: Respuesta dinámica
    capitulo: 1
    materia: Control automático
    carrera: Ingeniería electrónica
  - tema: Diseño, desarrollo y depuración
    capitulo: 1
    materia: Taller de sistemas embebidos
    carrera: Ingeniería electrónica
  - tema: Señales y sistemas
    capitulo: 1
    materia: Señales y sistemas
    carrera: Ingeniería electrónica
  - tema: Termodinámica
    capitulo: 10
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
aliases:
  - Sistema abierto#^abierto
  - Sistema cerrado#^cerrado
  - Sistema aislado#^aislado
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Conjunto de reglas o principios sobre una materia racionalmente enlazados entre sí. En otras palabras, un sistema es una combinación de componentes que actúan juntos y realizan un objetivo determino

También se lo puede entender como un objeto que acepta [[ingeniería electrónica/señales/Señales y sistemas/Señal|señales]], las [[ingeniería electrónica/señales/Señales y sistemas/Transformación|transforma]] de acuerdo a una determinada ley y proporciona a su salida dicha señales transformada

La forma de [[ingeniería en informática/ingenieria de software 1/Diseño de software/Modelar|modelizar]] un sistema de forma universal, de forma matemática e independiente de su naturaleza física, es con un [[Operador|operador]] que pueda operar entre dos [[ingeniería en informática/algebra 2/Espacios Vectoriales/Espacio vectorial|espacios]] de señales

Desde el punto de vista de la [[ingeniería electrónica/quimica/Termodinámica/Termodinámica|termodinámica]], el sistema es una región bien definida del universo que elegimos para su estudio. Este está separado del entorno por fronteras

Las señales que maneja un sistema termodinámico, es materia y [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía|energía]], donde esto define diferentes sistemas
* Sistema abierto, puede intercambiar energía y materia^abierto
* Sistema cerrado, puede intercambiar energía y pero no materia^cerrado
* Sistema aislado, no puede intercambiar energía ni materia^aislado

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