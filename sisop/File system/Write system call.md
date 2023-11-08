---
dia: 2023-11-08
materia: sisop
capitulo: 6
---
### Definición
---
La [[System call]] `write()` escribe hasta una determinada cantidad de bytes desde un buffer que comienza en `buf` al archivo referenciado por el [[File descriptor|file descriptor]].

```c
#inlude <unistd.h>

ssized_t write(int fd, const void *buf, size_t count);
```
