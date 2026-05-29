---
dia: 2026-05-29
etapa: empezado
referencias:
  - "1155"
aliases: 
 - Porcentaje en masa#^porcen-masa
 - Porcentaje en volumen#^porcen-volumen
 - Porcentaje en masa en volumen#^porcen-masa-volumen
 - Molaridad#^molaridad
 - Normalidad#^normalidad
 - Partes por millón#^ppm
tags:
  - carrera/ingeniería-electrónica/quimica/Soluciones-y-solubilidad
  - nota/facultad
vinculoFacultad:
  - tema: Soluciones y solubilidad
    capitulo: 8
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La concentración de una [[ingeniería electrónica/quimica/Soluciones y solubilidad/Solución|solución]] es la proporción o relación que hay entre la cantidad de [[ingeniería electrónica/quimica/Soluciones y solubilidad/Solución#^composicion|soluto]] y la cantidad de [[ingeniería electrónica/quimica/Soluciones y solubilidad/Solución#^composicion|solvente]]

Existen varias formas de expresar la concentración, entre ellas están
* Porcentaje en masa, %m/m o %p/p ^porcen-masa
	* Es la cantidad de [[Gramo|gramos]] de soluto disuelto en $100$ gramos de solución $$ \%\text{m/m} = \frac{\text{masa de soluto (g)}}{\text{masa de la solución (g)}} \cdot 100 $$
* Porcentaje en volumen, %v/v ^porcen-volumen
	* Es el [[Volumen|volumen]] de soluto disuelto en $100$ unidades de volumen de solución $$ \%\text{v/v} = \frac{\text{voluemn de soluto}}{\text{voluemn de la solución}} \cdot 100 $$
* Porcentaje en masa en volumen, %m/v^porcen-masa-volumen
	* Es la cantidad de gramos de soluto disuelto en $100 ~ \text{ml}$ de solución $$ \%\text{m/v} = \frac{\text{masa de soluto (g)}}{\text{voluemn de la solución (ml)}} \cdot 100 $$
* Molaridad, M ^molaridad
	* Es el número de [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Número de Avogradro|moles]] de soluto disuelto en un [[Litro|litro]] de solución $$ \text{M} = \frac{\text{moles de soluto}}{\text{voluemn de la solución (L)}} $$
* Normalidad, N ^normalidad
	* Es el número equivalentes de soluto disuelto en un litro de solución $$ \text{N} = \frac{\text{n° Eq de soluto}}{\text{voluemn de la solución (L)}}, ~~~ \text{n° Eq} = \frac{\text{masa}}{\text{masa del Eq}}  $$ donde como se refiere a un equivalente, se tiene que hacer referencia a que es equivalente
	* Equivalente gramo de un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Oxoácido|ácido]]: es la masa de ácido que origina un mol de [[ingeniería electrónica/quimica/Modelo atómico/Ion|iones]] [[Hidrógeno|hidrógeno]] 
	* Equivalente gramo de un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hidróxido|hidróxido]]: es la masa de hidróxido que origina un mol de iones hidróxido
	* Equivalente gramo de una [[Sal|sal]]: es la masa de sal que contiene un equivalente gramo del [[ingeniería electrónica/quimica/Tabla periódica/Carácter metálico|metal]] (que esta relacionado con la [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Carga eléctrica|carga]] del [[ingeniería electrónica/quimica/Modelo atómico/Ion|catión]])
* Partes por millón, ppm ^ppm
	* Es la cantidad de unidades de soluto disuelto por millón de unidades de solvente $$ \text{ppm} = \frac{\text{masa de soluto (mg)}}{\text{masa de solución (Kg)}} $$ 

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```