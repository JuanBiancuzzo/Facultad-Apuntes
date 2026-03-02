---
dia: 2026-02-28
etapa: empezado
referencias: []
aliases:
  - PLL
  - Lazo de seguimiento de fase
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Modulación-digital
  - nota/facultad
vinculoFacultad:
  - tema: Modulación digital
    capitulo: 3
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Los PLL se pueden utilizar de multiples formas, pero una de las formas es para sincronizar señales para [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Modulación digital coherente|modulaciones coherentes]], donde se necesita generar una onda de referencia con la misma fase que la señal para poder demodularizarla 

%% Grafico del PLL %%

Como primer paso, utilizando un detector de fase, crea una [[ingeniería electrónica/señales/Señales y sistemas/Señal|señal]] proporcional a la diferencia de fase entre la señal de entrada, y la señal generada por el PLL, esta señal será la señal de error $$ \epsilon(t) \propto \theta(t) - \hat{\theta}(t) $$ donde $\hat{\theta}(t)$ es la fase de nuestra señal generada por el PLL

Se utiliza un [[ingeniería electrónica/adc/Respuesta en frecuencia/Filtro pasa-bajo|filtro pasa-bajos]], también conocido como filtro de lazo $L(s)$, para eliminar los componentes de alta frecuencia, que posiblemente generen más errores que señal útil. Esta señal se inyecta al [[Voltage Controlled Oscillator (VCO)|Voltage Controlled Oscillator (VCO)]] que dada una magnitud de tensión la transforma, en este caso, en una señal con una fase $\hat{\theta}(t)$

Este es un [[ingeniería electrónica/control/Respuesta dinámica/Controlador closed-loop|feedback loop]] que permite constantemente corregir el valor de $\hat{\theta}(t)$ para que el error entre él y la fase de la señal tienda a $0$, y por lo tanto permitiendo sincronizar la señal recibida con la generada para la demodularización

## Transferencias
---
%% Transferencia a lazo cerrado y Transferencia de error, ambas en función de L(s) %%
%% Mostrar el error en estado estacionario %%