---
dia: 2026-05-29
etapa: empezado
referencias: []
aliases:
  - Reactivo de una reacción química#^reactivo
  - Producto de una reacción química#^producto
  - Coeficiente estequiométrico de una reacción química#^coeficientes
  - Reacción de síntesis#^sintesis
  - Reacción de descomposición#^descomposicion
  - Reacción de sustitución simple#^sustitucion-simple
  - Reacción de desplazamiento simple#^sustitucion-simple
  - Reacción de sustitución doble#^sustitucion-doble
  - Reacción de desplazamiento doble#^sustitucion-doble
tags:
  - carrera/ingeniería-electrónica/quimica/Reacciones-químicas/1
  - carrera/ingeniería-electrónica/quimica/Termoquímica
  - nota/facultad
vinculoFacultad:
  - tema: Reacciones químicas
    capitulo: 9
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
  - tema: Termoquímica
    capitulo: 11
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Son aquellos donde se producen un reordenamiento de los [[ingeniería en informática/estructura/Álgebra de Boole/Átomo|átomos]] de las sustancias intervinientes debido a la ruptura de [[ingeniería electrónica/quimica/Enlaces químicos/Unión química|enlaces químicos]] y formación de nuevos enlaces provocando un cambio en la identidad de la sustancia

Estas se representan mediante una ecuación química, la cual tiene $2$ miembros separados por una flecha que indica hacia donde evoluciona la reacción, como ejemplo $$ \text{CH}_4 ~ \text{(g)} + 2 \text{O}_2 ~ \text{(g)} \to \text{CO}_2  ~ \text{(g)} + 2\text{H}_2 \text{O} ~ \text{(l)} $$ donde se deben considerar los siguientes elementos
* A la izquierda se escriben los reactivos^reactivo
* A la derecha se escriben los productos^producto
* Se indican los [[ingeniería electrónica/quimica/Estados de la materia/Estado de agregación de la materia|estados de agregación]] de las sustancias, con (s) para [[ingeniería electrónica/quimica/Estados de la materia/Sólido|sólido]], (l) para [[ingeniería electrónica/quimica/Estados de la materia/Líquido|líquido]], (g) para [[ingeniería electrónica/quimica/Estados de la materia/Gas|gaseoso]] y (ac) para una [[ingeniería electrónica/quimica/Soluciones y solubilidad/Solución|solución]] acuosa
* Se indican los coeficientes estequiométricos son los números que acompañan a los compuestos, tiene que ajustarse de manera tal que haya la misma cantidad de cada elemento en los reactivos y en los productos. De esta forma se cumple la [[Ley de conservación de la masa|Ley de conservación de la masa]] ^coeficientes

## Clasificaciones
---
Esta clasificación no es una separación única, sino que las reacciones pueden entrar en más de una clasificación

### Criterio energético
---
Todas las reacciones están acompañadas de un cambio de [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía|energía]]. Esto es debido a que toda sustancia tiene su [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía#Energía interna|energía interna]]. Cuando una sustancia se transforma en otra, u otras, mediante una reacción química se rompen [[ingeniería electrónica/quimica/Enlaces químicos/Unión química|enlaces]] y se forman nuevos, de modo que se libera o absorbe energía, no se pierde energía como se enuncia en la [[ingeniería electrónica/quimica/Termodinámica/Termodinámica#Primera ley|primera ley de la termodinámica]]

Si la reacción absorbe energía del entorno es una [[Proceso endergónico|reacción endergónica]], mientra que si libera energía del entorno es una [[Proceso Exergónico|reacción exergónica]]

Según la forma de energía intercambiada
* Intercambio de forma de [[ingeniería electrónica/electro/Ondas electromagnéticas/Onda electromagnética|luz]], lo cual lo ve la [[Fotoquímica|fotoquímica]], es [[Proceso endoluminoso|endoluminosa]] o [[Proceso exoluminoso|exoluminosa]]
	* Por ejemplo, la [[Fotosíntesis|fotosíntesis]] $$ 6 \text{C0}_2 + 6 \text{H}_2 \text{O} + \text{luz} \to \text{C}_6 ~ \text{H}_{12} ~ \text{O}_6  + 6 \text{O}_2 $$
* Intercambio en forma de [[ingeniería en informática/fisica 2/Termodinámica/Calor|calor]], lo cual lo ve la [[ingeniería electrónica/quimica/Termoquímica/Termoquímica|termoquímica]], es [[Proceso endotérmico|endotérmica]] o [[Proceso exotérmico|exotérmica]]
	* Por ejemplo, la [[Combustión|combustión]] $$ \text{CH}_4 ~ \text{(g)} + 2 \text{O}_2 ~ \text{(g)} \to \text{CO}_2  ~ \text{(g)} + 2\text{H}_2 \text{O} ~ \text{(g)} + \text{calor} $$
* Intercambio en forma de [[Electricidad|electricidad]], lo cual lo ve la [[Electroquímica|electroquímica]], es [[Proceso endoeléctrico|endoeléctrica]] o [[Proceso exoeléctrico|exoeléctrica]]
	* Por ejemplo, la [[Electrolisis|electrolisis]] $$ 2 \text{H}_2 \text{O} ~ \text{(l)} \xrightarrow{\text{electricidad}} \text{O}_2  ~ \text{(g)} + 2\text{H}_2 ~ \text{(g)} $$
### Reagrupamiento de átomos
---
Estas reacciones están caracterizadas por el reagrupamiento de [[ingeniería en informática/estructura/Álgebra de Boole/Átomo|átomos]] 
* Síntesis, donde dos o más reactivos sencillos forman un solo producto, representado como $$ \text{A} + \text{B} \to \text{AB} $$ ^sintesis
* Descomposición, donde un reactivo forma dos o más productos, representado como $$ \text{AB} \to \text{A} + \text{B} $$^descomposicion
* Sustitución o desplazamiento simple, cuando reaccionan un elemento y un compuesto y el elemento reemplaza en su posición a uno de los átomos del compuesto, representado como $$ \text{AB} + \text{C} \to \text{AC} + \text{B} $$^sustitucion-simple
* Sustitución o desplazamiento doble, cuando reaccionan $2$ compuestos y se produce el intercambio muto entre alguno de los átomos de dichas sustancia, representado como $$ \text{AB} + \text{CD} \to \text{AB} + \text{CB} $$^sustitucion-doble

### Partícula intercambiada
---
En esta clasificación se pueden dividir en 
* [[Neutralización|Neutralización]], donde la partícula intercambiada es [[ingeniería electrónica/quimica/Modelo atómico/Ion|ion]] [[Hidrógeno|hidrógeno]] $H^+$
* [[Precpitación|Precpitación]], donde la partícula intercambiada es un ion
* [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Reacción química de óxido-reducción|REDOX]], donde la partícula intercambiada son [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrones]]