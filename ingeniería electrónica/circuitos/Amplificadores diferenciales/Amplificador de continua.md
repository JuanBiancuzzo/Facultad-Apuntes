---
dia: 2024-11-24
etapa: empezado
referencias:
  - "435"
tags:
  - carrera/ingeniería-electrónica/circuitos/Amplificadores-diferenciales
  - nota/facultad
vinculoFacultad:
  - tema: Amplificadores diferenciales
    capitulo: 5
    materia: Circuitos microelectrónicos
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es una [[Amplificador operacional|amplificador]] que carece de [[Capacitor|capacitores]] de acople y desacople de [[Señal|señal]], permitirá el paso de señales sin atenuación, desde la frecuencia nula hasta una máxima dada por una frecuencia de corte superior resultante de la influencia de las capacitancias internas del componente. Podemos ver que es un [[Filtro pasa-bajo|filtro pasa-bajos]]



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```