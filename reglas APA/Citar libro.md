---
dia: 2024-07-08
etapa: terminado
tema: Reglas APA
indice: "[[Reglas APA/Índice|Índice]]"
referencias:
  - "6"
---
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---
En esta entrada, detallaremos el proceso de citar y referenciar diversos tipos de fuentes, como libros, enciclopedias, diccionarios, monografías, tesis, entre otros. También abordaremos la citación de libros exclusivamente electrónicos y aquellos libros que, estando agotados, podrían encontrarse únicamente en repositorios en línea.

#### Formato general
---
* Libro impreso
	* Apellido, N. (año). Título del trabajo. Editorial.
	* Ejemplo
		* Herrera Cáceres, C. y Rosillo Peña, M. (2019). _Confort y eficiencia energética en el diseño de edificaciones_. Universidad del Valle.
	* Citar capítulo
		* Apellido, A. y Apellido, B. (año). Título del capítulo. En N. Apellido (Ed.), _Título del libro_ (pp. xx-xx). Editorial.
* Libro en línea
	* Apellido, N. y Apellido, N. (año). Título del libro. Editorial. [[Digital Object Identifier (DOI)|DOI]] o [[Uniform Resource Locator (URL)|URL]]
	* Ejemplo
		* Versión electrónica de la versión impresa
			* Herrera Cáceres, C. y Rosillo Peña, M. (2019). _Confort y eficiencia energética en el diseño de edificaciones_. Universidad del Valle. https://www.reddebibliotecas.org.co/
		* Disponible sólo en formato electrónico
			* Panza, M. (2019). _Números: elementos de matemáticas para filósofos._ Universidad Del Valle. https://www.reddebibliotecas.org.co/.
	* Citar capítulo
		* Apellido, A. y Apellido, B. (año). Título del capítulo. En N. Apellido y B. Apellido (Eds.), _Título del libro_ (pp. xx-xx). Editorial. DOI o URL
* Libro con editor
	* Apellido, N. (Ed.). (año). Título del trabajo. Editorial.
	* Citar capítulo
		* Apellido Autor, N. N. (año). Título del capítulo o entrada en N. Apellido Editor (Ed.), Título del libro (xx dc., Vol. xx, pp. xxx-xxx). Editorial
		* Ejemplo
			* Renteria Salazar, P. (2006). El comienzo de la renovación. En M. A. Flórez Góngora (Ed.), _Bogotá: Renovacion Urbana, Renovacion Humana_ (pp. 80-100). Empresa De Renovacion Urbana.
		* Si no tienes los números de página en el ejemplo anterior, el título del capítulo o de la entrada es suficiente. Si el libro no tiene número de edición o volumen, omitir esta información

##### Número de edición o volumen
---
Apellido Autor, N. N. (1994). _Título del trabajo._ ==(3ª ed., Vol. 4).== Editorial.


### Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```