---
dia: 2026-05-17
etapa: empezado
referencias: []
aliases: 
  - Fluido supercrítico#^fluido-supercritico
  - Presión de vapor del sólido#^presion-vapor-solido
tags:
  - carrera/ingeniería-electrónica/quimica/Estados-de-la-materia
  - nota/facultad
vinculoFacultad:
  - tema: Estados de la materia
    capitulo: 7
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---


## En química
---
Este diagrama muestra las regiones en las cuales una sustancia está en una [[ingeniería electrónica/quimica/Estados de la materia/Estado de agregación de la materia|fase]] o cuando [[ingeniería electrónica/quimica/Estados de la materia/Estado de agregación de la materia#Cambio de estado|cambia de fase]]. Estos usan las variables de [[Presión|presión]] en función de la [[ingeniería electrónica/seguridad/Prevención de incendios/Temperatura|temperatura]]

%% Diagrama %%

Analizando el diagrama
* La [[ingeniería en informática/analisis 2/Topología/Curva|curva]] que separa el estado [[ingeniería electrónica/quimica/Estados de la materia/Líquido|líquido]] del [[ingeniería electrónica/quimica/Estados de la materia/Gas|vapor]], representa la [[ingeniería electrónica/quimica/Estados de la materia/Presión de vapor|presión de vapor]] a esa temperatura
* La curva que separa el estado [[ingeniería electrónica/quimica/Estados de la materia/Sólido|sólido]] del vapor, representa la presión de vapor del sólido a esa temperatura ^presion-vapor-solido
* La curva que separa el estado sólido del líquido, representa el punto de equilibrio en el cual el líquido se solidifica a la misma velocidad que el sólido hace fusión. Este no es una presión de vapor ya que no hay vapor, sino que la presión esta dada por lo aplicado en dicha situación
* El punto triple, es característico a cada sustancia, dando una situación donde se encuentran las $3$ fases simultáneamente
* El punto crítico es característico a cada sustancia, dando una temperatura crítica y una presión critica, donde la sustancia no se la puede definir que este en un estado gaseoso o líquido, sino que pasa a ser una sustancia homogénea llamada fluido supercrítico ^fluido-supercritico

### Curva de calentamiento
---
Este curva representa la temperatura en función del [[ingeniería en informática/fisica 2/Termodinámica/Calor|calor]] añadido para una presión constante, por lo que se puede pensar como una [[ingeniería electrónica/analisis 3/Transformaciones conformes/Recta|recta]] de pendiente nula, en el diagrama de fase de esa sustancia

![[ingeniería electrónica/quimica/Estados de la materia/img/Curva de calentamiento.png]]

Analizando el gráfico vemos que 
* Entre A y B, es el calentamiento del sólido hasta su temperatura de [[ingeniería electrónica/quimica/Estados de la materia/Estado de agregación de la materia#Cambio de estado|fusión]] $T_\text{fus}$
* Entre B y C, la fusión del sólido hasta que sea completamente líquido
* Entre C y D, es el calentamiento del líquido hasta su temperatura de [[ingeniería electrónica/quimica/Estados de la materia/Estado de agregación de la materia#Cambio de estado|ebullición]] $T_\text{eb}$
* Entre D y E, la ebullición del líquido hasta que sea completamente vapor
* Entre E y F, es el calentamiento del vapor hasta la temperatura final

### Curva de enfriamiento
---
Este curva representa la temperatura en función del [[ingeniería en informática/fisica 2/Termodinámica/Calor|calor]] liberado para una presión constante, por lo que se puede pensar como una recta de pendiente nula, en el diagrama de fase de esa sustancia

![[ingeniería electrónica/quimica/Estados de la materia/img/Curva de enfriamiento.png]]

Analizando el gráfico vemos que 
* Entre A y B, es el enfriamiento del vapor hasta la temperatura de [[ingeniería electrónica/quimica/Estados de la materia/Estado de agregación de la materia#Cambio de estado|condensación]] $T_\text{cond}$
* Entre B y C, la condensación del vapor hasta que sea completamente líquida
* Entre C y D, es el enfriamiento del líquido hasta su temperatura de [[ingeniería electrónica/quimica/Estados de la materia/Estado de agregación de la materia#Cambio de estado|solidificación]] $T_\text{soli}$
* Entre D y E, la solidificación del líquido hasta que sea completamente sólido
* Entre E y F, es el enfriamiento del sólido hasta la temperatura final