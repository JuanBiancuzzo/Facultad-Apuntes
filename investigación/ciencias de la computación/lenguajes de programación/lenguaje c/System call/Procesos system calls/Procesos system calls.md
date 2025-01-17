---
dia: 2024-12-22
tags:
  - investigación/índice
  - nota/investigacion
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/Procesos-system-calls
estado: Sin empezar
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarSuperTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a investigar las [[investigación/ciencias de la computación/sistemas operativos/File system/System call|system calls]] relacionadas a los [[Proceso|procesos]]

## Resumen
---
Estas system call son usadas por los usuarios para conseguir información sobre el proceso y usarlos

Falta
* [[Getuid system call|getuid()]]
* [[Geteuid system call|geteuid()]]
* [[Getgid system call|getgid()]]
* [[Getegid system call|getegid()]]
* [[Signal system call|signal()]]
* [[Kill system call|kill()]]
* [[Alarm system call|alarm()]]

## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarTemaInvestigacion", { indice: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/investigacion/biblioIndice', { indice: dv.current() });
```