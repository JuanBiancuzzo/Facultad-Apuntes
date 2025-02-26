---
dia: 2025-02-23
etapa: ampliar
referencias:
  - "841"
tags:
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-zig
  - nota/investigacion
aliases:
  - ABI
  - Interfaz binaria de aplicación
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta es una [[Interfaz|interfaz]] entre dos [[Módulo|módulos]] de un [[Programa|programa]]. Una ABI determina detalles como la forma de llamar a las [[Función|funciones]], en qué formato binario se debería pasar la información de un componente de programa al siguiente, o al [[Sistema operativo|sistema operativo]] en el caso de una [[investigación/ciencias de la computación/sistemas operativos/File system/System call|system call]]

Las ABIs cubren aspectos como
* Tamaños, disposición y [[Alineamiento de bits|alineamiento]] de los tipos de datos
* La convención de llamadas, que controlan cómo se pasan los argumentos de las funciones
* Cómo una aplicación debería realizar system call
* En caso de que la ABI sea del sistema operativo completo, el formato binario de los [[Archivo objeto|archivo objeto]] de las librerías de programas, etc.




# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```