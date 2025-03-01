---
dia: 2024-08-05
tags:
  - carrera/ingeniería-en-informática/analisis-2/Nomenclatura
  - nota/facultad
  - licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - carrera/ingeniería-electrónica/analisis-2/Nomenclatura
  - licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
aliases:
  - Imagen de una función
referencias:
  - "184"
  - "411"
etapa: sin-empezar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La imagen de una [[Función|función]] $f: D \to H$, es el [[Conjunto|conjunto]] contenido en $H$ formado por todos los valores que puede llegar a tomar la función<sup><a href="#ref-184" style="color: inherit; text-decoration: none;">[184]</a></sup>  $$ \text{Im}(f) = \Set{ y \in H : \exists x \in D, f(x) = y } $$
En términos del diagrama, la imagen es el conjunto de elementos de $H$ a los que les llega al menos una flecha. En términos del gráfico, es el conjunto de puntos del eje vertical que cuando tiro una recta horizontal por ese punto, corta el gráfico en al menos un punto

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```