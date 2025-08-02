---
etapa: sin-empezar
dia: 2025-04-06
tags:
  - colección/distribuciones/distribución
  - distribuciones/continua
  - nota/colección
nombreDistribucion: Bose-Einstein
tipoDistribucion: continua
referencias:
  - "1040"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---


### Notación
$$ X \sim $$

# Relaciones
---
```dataviewjs
	await dv.view("_scripts/dataview/coleccion/distribuciones/relaciones", { distribucion: dv.current() });
```


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```