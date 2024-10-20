---
dia: 2024-07-08
etapa: empezado
referencias:
  - "95"
  - "233"
aliases:
  - HyperText Markup Language
  - HTML
tags:
  - nota/investigacion
  - lenguaje-de-marcado
  - redes/Capa-de-aplicación
orden: 303
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
Este estándar que sirve de referencia del [[Software|software]] que interactúa con la elaboración de [[Página web|páginas web]] en sus diferentes versiones. Define una estructura básica y un código para la presentación de contenido de una página web, que incluye texto, imágenes, videos, juegos, entre otros elementos

## Listado de etiquetas
---
Estas se pueden dividir en las siguientes categorías
* Tags iniciales
    * `<!DOCTYPE html>`
    * `<html></html>`
* Metadatos del documento
    * `<head></head>`
    * `<title></title>`
    * `<link>`
    * `<meta>`
    * `<style></style>`
* Tags de secciones
    * `<body></body>`
    * `<nav></nav>`
    * `<main></main>`
    * `<section></section>`
    * `<article></article>`
    * `<aside></aside>`
    * `<h1></h1>`, `<h2></h2>`, `<h3></h3>`, `<h4></h4>`, `<h5></h5>`, `<h6></h6>`
    * `<header></header>`
    * `<footer></footer>`
* Tags para la agrupación de contenido
    * `<p></p>`
    * `<hr>`: Es la línea horizontal
    * `<pre></pre>`: Usada para pegar texto manteniendo el pre formato propio del texto
    * `<blockquote></blockquote>`
    * `<ol></ol>`: Lista ordenada
    * `<ul></ul>`: Lista desordenada
    * `<dl></dl>`: Usada para crear una lista de definiciones
    * `<dt></dt>`: Representa un término definido por la siguiente etiqueta `<dd>`
    * `<dd></dd>`: Se usa para definir los términos listados antes que él
    * `<figure></figure>`: Indica una figura ilustrada como parte del documento
    * `<figcaption></figcaption>`: Utilizada para definir la leyenda de una figura
    * `<div></div>`
* Etiquetas semánticas para texto
    * `<a></a>`: Etiqueta utilizada para crear hiperenlaces en el documento
    * `<strong></strong>`: Etiqueta para definir una palabra o conjunto de ellas como importantes
    * `<small></small>`: Utilizada para dejar un comentario aparte, del tipo una nota de derechos de autoría, u otros textos que no son esenciales para la compresión del documento
    * `<cite></cite>`: Para indicar el titulo de una obra
    * `<sub></sub>`, `<sup></sup>`: Utilizadas para representar un subíndice o superíndice
    * `<mark></mark>`: Usada para resaltar texto
    * `<span></span>`: No tiene un significado especifico. Se usa conjuntamente con los atributos de `class` o `id` para atribuirle ciertas características
    * `<br>`: Utilizada para crear un salto de línea
* Etiquetas para incrustar contenido
    * `<img>`: Para pintar una imagen en la [[Página web|página web]]
    * `<iframe></iframe>`: Es una etiqueta que sirve para anidar otro documento HTML dentro del documento principal
    * `<embed>`: Usada para integrar una aplicación o contenido interactivo externo que no suele ser HTML
    * `<object></object>`: Utilizada llamar a un recurso externo de la web. Este recurso será tratado como una imagen, o un recurso externo para ser procesado por un plugin
    * `<video></video>`: Se usa para reproducir un video junto a sus archivos de audio y capciones asociadas
    * `<audio></audio>`: Usada para cargar un archivo de audio o stream de audio
    * `<source>`: Permite a autores especificar recursos multimedia alternativos para las etiquetas de `<video>` o `<audio>`
    * `<svg></svg>`: Se usa para llamar a una [[Scalable Vector Graphics (SVG)|imagen vectorizada]]
* Etiquetas para la creación de tablas
    * `<table></table>`: Etiquetas de apertura y cierre de una tabla. El resto de etiquetas de la tabla han de ir siempre recogidas entre estas dos etiquetas
    * `<caption></caption>`: Usada para indicar el título de la tabla
    * `<colgroup></colgroup>`: Utilizada para agrupar dos o más columnas de una tabla
    * `<tbody></tbody>`: Usada para describir los datos concretos de una tabla
    * `<thead></thead>`: Indica los bloques de filas que describen los resúmenes, o datos totales de una columna de una tabla
    * `<tfoot></tfoot>`: Indica los bloques de filas que describen los resúmenes, o datos totales de una columna de una tabla
    * `<tr></tr>`: Se usa para indicar una fila de celdas de una tabla
    * `<td></td>`: Usada para definir una celda de una tabla
    * `<th></th>`: Etiqueta que se usa para definir el encabezado de una celda
* Etiquetas para la creación de formularios
    * `<form></form>`: Etiqueta de apertura y cierre de un formulario. El resto de etiquetas de formulario deben ir siempre recogidas entre estas etiquetas de apertura y cierre de formulario
    * `<fieldset></fieldset>`
    * `<legend></legend>`: Etiqueta ligada a `<fieldset>`, indica el título de este último
    * `<label></label>`: Se usa para definir el nombre o título de un control del formulario
    * `<input>`: Pinta un campo de introducción de datos para el usuario. Es decir las principales etiquetas de un formulario
    * `<button></button>`: Utilizada para representar un botón en el formulario
    * `<select></select>`: Input que permite una selección entre un conjunto de opciones
    * `<option></option>`:  Etiqueta ligada a `<select>`, donde permite añadir diferentes opciones al `<select>`
    * `<textarea></textarea>`: Añade un campo al usuario para que pueda introducir texto en unas líneas máximas de texto que el desarrollador puede definir

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```




# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```