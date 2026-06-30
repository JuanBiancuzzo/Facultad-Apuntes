---
dia: 2026-06-28
tags:
  - colección/ejercicios/guia
numero: 23
nombre: Sincronización
ejercicios:
  - 200
  - 201
  - 202
  - 203
  - 204
  - 205
---
# Ejercicio
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/coleccion/ejercicios/guia", { ejercicios: actual["ejercicios"] });
```

