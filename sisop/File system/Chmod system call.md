---
dia: 2023-11-08
materia: sisop
capitulo: 6
---
### Definición
---
La [[System call]] `chmod()` cambia los bits de modos de acceso

```c
#include <sys/stat.h>

int chmod(const char *pathname, mode_t mode);
int fchmod(int fd, mode_t mode);
```
* `S_IRUSR (00400)` read by owner 
* `S_IWUSR (00200)` write by owner 
* `S_IXUSR (00100)` execute/search by owner (“search” applies for directories, and means that entries within the directory can be accessed) 
* `S_IRGRP (00040)` read by group 
* `S_IWGRP (00020)` write by group 
* `S_IXGRP (00010)` execute/search by group 
* `S_IROTH (00004)` read by others 
* `S_IWOTH (00002)` write by others 
* `S_IXOTH (00001)` execute/search by others

La única diferencia entre ambas system calls es la forma en que se accede al [[Archivo]] en cuestión