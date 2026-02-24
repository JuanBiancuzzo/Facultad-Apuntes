---
dia: 2026-02-21
etapa: empezado
referencias:
  - "1104"
aliases:
  - M-aria Pulse-Amplitud Modulation
  - M-PAM
  - Pulse-Code modulation
  - PCM
tags:
  - nota/facultad
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Modulación-digital
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
Este tipo de [[ingeniería electrónica/taller de comunicaciones/Modulación Digital/Modulación digital|modulación]] se aplica cuando se [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Transmisión en banda base|transmite en banda base]], y con una [[ingeniería electrónica/señales/Señales y sistemas/Señal#^discreta|señal discreta]], este conjunto de símbolos genera un [[ingeniería en informática/discreta/Autómatas/Alfabeto|alfabeto]] y la transmisión de cada símbolo esta dado por un tiempo $T_s$

Para cada símbolo se define una amplitud de la señal, y se utiliza un tipo de [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Código de línea|código de línea]] para darle forma a la onda enviada. Esta modulación sobre la amplitud es el motivo que se conoce a esta modulación como M-ary Pulse-Amplitud Modulation o M-PAM, y en el caso de que $M = 2$, se lo suele llamar Pulse-Code Modulation o PCM

%% Dibujo de la constelación


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```