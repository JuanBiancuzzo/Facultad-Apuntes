---
dia: 2023-11-08
tags:
  - sisop/File-system
  - nota
---
### Definición
---
La [[System call]] `closedir()` cierra el stream de tipo `DIR *` cuyo nombre es `dirstream`

```c
#include <sys/types.h>
#include <dirent.h>

int closedir(DIR *dirstream);
```
 