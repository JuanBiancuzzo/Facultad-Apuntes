---
dia: 2025-03-22
etapa: ampliar
referencias:
  - "452"
tags:
  - carrera/ingeniería-electrónica/circuitos/Amplificadores-con-varios-dispositivos-activos-de-bajo-nivel-de-potencia
  - nota/facultad
aliases:
  - Modelo de pequeña señal del amplificador colector-colector común#Modelo de pequeña señal
  - MPS del amplificador colector-colector común#Modelo de pequeña señal
vinculoFacultad:
  - "[[ingeniería electrónica/circuitos/Amplificadores con varios dispositivos activos de bajo nivel de potencia/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Estas configuraciones incorporan otro [[Transistor bipolar de juntura|transistor]] para aumentar la [[Corriente eléctrica|corriente]] de salida y la [[Impedancia|impedancia]] de entrada de la configuración [[Amplificador Colector Común con un transistor bipolar de juntura|colector común]] 

![[Amplificador colector-colector común.png]]

Este segundo transistor esta en la configuración colector común. Donde usamos una [[Fuente de corriente|fuente de corriente]] $I_{BIAS}$ para establecer el punto de trabajo en continua

## Modelo de pequeña señal
---
Para el análisis de [[Linealización Jacobiana|pequeña señal]] podemos ver que esta configuración funciona como un único [[Transistor bipolar de juntura|TBJ]] y por lo tanto vamos a encontrar sus parámetros [[Modelo de pequeña señal del transistor bipolar de juntura#Transconductancia|transconductancia]] $g_m$, [[Modelo de pequeña señal del transistor bipolar de juntura#Conductancia de entrada o de base|resistencia de entrada]] $r_\pi$ y [[Ganancia de corriente en modo activo directo|ganancia de corriente]] $\beta_0$

%% Grafico de mps %%

### Transconductancia
---


### Resistencia de entrada
---


### Ganancia de corriente
---



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```