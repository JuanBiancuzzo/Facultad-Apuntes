---
dia: 2023-11-08
tags:
  - carrera/ingeniería-en-informática/sisop/File-system
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/File-system-system-calls
  - investigación/ciencias-de-la-computación/sistemas-operativos/File-system/System-call
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|system call]] `write()` escribe hasta una determinada cantidad de bytes desde un buffer que comienza en `buf` al [[Archivo|archivo]] referenciado por el [[File descriptor|file descriptor]]

```c
#inlude <unistd.h>

ssized_t write(int fd, const void *buf, size_t count);
```
