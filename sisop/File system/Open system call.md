---
dia: 2023-11-08
tags:
  - sisop/File-system
  - nota/facultad
---
# Definición
---
La [[System call|system call]] `open()` convierte el nombre de un [[Archivo|archivo]] en una entrada de la tabla de [[File descriptor|descriptores]] de archivos, y devuelve dicho valor. Siempre devuelve el [[File descriptor|descriptor]] más pequeño que no está abierto

Las flags, estos flags pueden combinarse:
* `O_RDONLY`: modo solo lectura
* `O_WRONLY`: modo solo escritura
* `O_RDWR`: modo lectura y escritura
* `O_APPEND`: el archivo se abre en modo lectura y el offset se setear al final, de forma tal que este pueda agregar al final
* `O_CREATE`: si el archivo no existe se crea con los permisos seteados en el parámetro mode: 
	* `S_IRWXU 00700` user (file owner) el usuario tiene permisos par leer, escribir y ejecutar 
	* `S_IRUSR 00400` el usuario tiene permisos para leer
	* `S_IWUSR 00200` el usuario tiene permisos para escribir
	* `S_IXUSR 00100` el usuario tiene permisos para ejecutar
	* `S_IRWXG 00070` el grupo tiene permisos para leer, escribir y ejecutar 
	* `S_IRGRP 00040` el grupo tiene permisos para leer
	* `S_IWGRP 00020` el grupo tiene permisos para escribir 
	* `S_IXGRP 00010` el grupo tiene permisos para ejecutar 
	* `S_IRWXO 00007` otros tienen permisos para leer, escribir y ejecutar 
	* `S_IROTH 00004` otros tienen permisos para leer 
	* `S_IWOTH 00002` otros tienen permisos para escribir
	* `S_IXOTH 00001` otros tienen permisos para ejecutar

```c
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

int open(const char *pathname, int flags);
int open(const char *pathname, int flags, mode_t mode);
```