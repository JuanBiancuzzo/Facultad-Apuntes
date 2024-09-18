---
dia: 2024-07-31
etapa: empezado
referencias:
  - "206"
tags:
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
Markdown es un [[Lenguaje de marcado|lenguaje de marcado]] ligero creado por John Gruber y Aaron Swartz que trata de conseguir la máxima legibilidad y facilidad de publicación tanto en su forma de entrada como de salida, inspirándose en muchas convenciones existentes para marcar mensajes de correo electrónico usando texto plano<sup><a href="#ref-206" style="color: inherit; text-decoration: none;">[206]</a></sup> 

## Elementos
---
* Headers ($1$ - $6$)
    * H1
        * `# Título`
        * `Título\n===`
    * H2 
        * `## Título`
        * `Título\n---`
    * H3 - H6
        * `##...# Título`
* Párrafo
* Bold
    * `**texto**`
    * `__texto__`
* Italic
    * `*texto*`
    * `_texto_`
* Bloque de cita
    * `> texto`
    * Sub bloque
        * `>> sub texto`
    * Puede incluir cualquier cosa
* Lista ordenada
    * `1. item 1`
    * Sub lista
        * `1. item 1\n  1. sub item`
* Lista desordenada
    * `* item 1`
    * Sub lista
        * `* item 1\n  * sub item`
    * Se puede usar `-`, `*`, `+`
* Imagen
    * `![nombre](path)`
* Linea horizontal
    * `***`
    * `---`
    * `___`
* Link
    * `[nombre](link)`
* Escaping character
    * `\`
    * Caracteres que se pueden escapar
        * `\`
        * `_`
        * `<>`
        * `+`
        * `!`
        * `{}`
        * `()`
        * `[]`
        * `-`
        * `|`
        * `*`
        * `#`
        * `.`


# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```