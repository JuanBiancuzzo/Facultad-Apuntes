---
dia: 2024-07-08
etapa: terminado
referencias:
  - "17"
tags:
  - nota/investigacion
  - investigación/reglas-APA
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Con las diferentes formas de información de hoy día, es posible que necesitemos referenciar o citar textos desde diferentes fuentes así como vídeos en YouTube.

La referencias de Youtube siguen el estándar de **quién** (autor, usuario de youtube), **cuándo** (fecha de publicación del vídeo), **qué** (título del vídeo) y **dónde** (URL del vídeo).

Nombre del autor. \[Nombre de usuario en Youtube\] (fecha). _Título del video_ \[Archivo de video\]. Youtube. http://youtube.com/url-del-video

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```