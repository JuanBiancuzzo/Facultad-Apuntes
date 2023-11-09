---
dia: 2023-11-08
materia: sisop
capitulo: 6
---
### Definición
---
Es virtual [[File system]] es el [[Sistema|subsistema]] del [[Kernel]] que implementa la interfaces que tiene que ver con los archivos y el sistema de [[Archivo|archivos]] provistos a los programas corriendo en [[Modo usuario]]. Todos los sistemas de archivos deben basarse en VFS para coexistir e interoperar. Esto habilita a los [[Programa|programas]] a utilizar las [[System call|system calls]] de [[Unix]] para leer y escribir en diferentes sistemas de archivos y diferentes medios.

Los VFS es el pegamento que habilita a las system calls como por ejemplo `open()`, `read()` y `write()` a funcionar sin que estas necesiten tener en cuenta el [[Hardware]] subyacente.

#### Objetos
---
Los VFS presentan una serie de estructuras que [[Modelar|modelan]] un [[File system]], estas estructuras se denominan objetos. Estos objetos son:
* Super bloque:
	* Representa a un sistema de archivos
* Inodo:
	* Representa a un determinado [[Archivo]]
* Dentry
	* Representa una entrada de [[Directorio]], que es un componente simple de un path
* File:
	* Representa a un [[Archivo]] asociado a un determinado [[Proceso|proceso]] 

![[Objetos del Virtual File System (VFS).png]]

A tener en cuenta que un directorio es tratado como un archivo normal, no hay un objeto especifico para directorios. En [[Unix]] los directorios son archivos normales que listan los archivos contenidos en ellos.

#### Operaciones
---
Existe un conjunto de operaciones
* Las `super_operations`:
	* Son los métodos aplica el [[Kernel]] sobre un determinado [[File system|sistema de archivos]], por ejemplo `write_inode()` o `sync_fs()`
* Las `inode_operations`:
	* Son los métodos que aplica el kernel sobre un [[Archivo]] determinado, por ejemplo `create()` o `link()`
* Las `dentry_operations`:
	* Son los métodos que se aplican directamente por el kernel a una determinada directory entry, como por ejemplo, `d_compare()` y `d_delete()`
* Las `file_operations`:
	* Son los métodos que el kernel aplica directamente sobre un archivo abierto por un [[Proceso|proceso]], `read()` y `write()`