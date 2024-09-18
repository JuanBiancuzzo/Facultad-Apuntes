---
dia: 2023-11-08
tags:
  - sisop/File-system
  - nota/facultad
---
# Definición
---
La [[System call|system call]] `access()` chequea si un [[Proceso|proceso]] tiene o no los permisos para utilizar el [[Archivo|archivo]] con un determinado `pathname`. El argumento `mode` determina el tipo de permiso a ser chequeado

```c
#include <unistd.h>

int access(const char *pathname, int mode);
```

El `mode` especificado el tipo de accesibilidad a ser chequeada, los valores pueden conjugarse como una mascara de bits con el operador `|`:
* `F_OK`: el archivo existe
* `R_OK`: el archivo puede ser leído
* `W_OK`: el archivo puede ser escrito
* `X_OK`: el archivo puede ser ejecutado

 