---
dia: 2023-11-08
tags:
  - carrera/ingeniería-en-informática/sisop/File-system
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/File-system-system-calls
  - investigación/ciencias-de-la-computación/sistemas-operativos/File-system/System-call
aliases:
  - Fstat system call
---
# Definición
---
La [[investigación/ciencias de la computación/lenguajes de programación/lenguaje c/System call/System call|system call]] `stat()` devuelve información sobre un [[Archivo|archivo]], en el buffer apuntado por `statbuf`. No se requiere ningún permiso sobre el archivo en cuestión, pero si en los [[Directorio|directorios]] que conforma el [[File system#Path|path]] hasta llegar el archivo

```c
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>

int stat(const char *pathname, struct stat *statbuf);
int fstat(int fd, struct stat *statbuf);
```

Donde la estructura apuntada por `statbuf` se describe de la siguiente manera:
```c
struct stat { 
	dev_t st_dev; /* ID of device containing file */ 
	ino_t st_ino; /* Inode number */ 
	mode_t st_mode; /* File type and mode */ 
	nlink_t st_nlink; /* Number of hard links */ 
	uid_t st_uid; /* User ID of owner */ 
	gid_t st_gid; /* Group ID of owner */ 
	dev_t st_rdev; /* Device ID (if special file) */ 
	off_t st_size; /* Total size, in bytes */ 
	blksize_t st_blksize; /* Block size for filesystem I/O */ 
	blkcnt_t st_blocks; /* Number of 512B blocks allocated */ 
	
	/*  Since Linux 2.6, the kernel supports nanosecond 
		precision for the following timestamp fields. 
		For the details before Linux 2.6, see NOTES. */ 
	
	struct timespec st_atim; /* Time of last access */ 
	struct timespec st_mtim; /* Time of last modification */ 
	struct timespec st_ctim; /* Time of last status change */ 
	
	#define st_atime st_atim.tv_sec /* Backward compatibility */ 
	#define st_mtime st_mtim.tv_sec 
	#define st_ctime st_ctim.tv_sec 
};
```
 