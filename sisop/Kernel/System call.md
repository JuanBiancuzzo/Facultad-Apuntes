---
dia: 2023-11-15
materia: sisop
capitulo: 1
---
### Definición
---
Las system calls son funciones que permiten a los [[Proceso|procesos]] de usuario pedirle al [[Kernel]] que realice operaciones en su nombre. Una system call es cualquier función que el kernel expone que puede ser utilizada por un proceso a [[User mode|nivel usuario]].

Desde el punto de vista del [[Programa]], llamar a una system call es más o menos como invocar a una función de `C`. Por supuesto, de fondo ocurre
1. El programa realiza un llamado a una system call mediante la invocación de una función wrapper en la biblioteca
2. Dicha función wrapper tiene que proporcionar todos los argumentos al system call `trap_handling`. Estos argumentos son pasados al wrapper por el [[Stack]], pero el [[Kernel]] los espera en determinados [[Registro|registros]]. La función wrapper copia estos valores a los registros
3. Dado que todas las system calls son accedidas de la misma forma, el kernel tiene que saber identificarlas de alguna forma. Para poder hacer esto, la función wrapper copia el número de la system call a un determinado registro de la [[CPU]] la `%eax`
4. La función wrapper ejecuta una instrucción de código máquina llamada `trap_machine_instruction`, esta causa que el [[Procesador|procesador]] pase de [[User mode]] a [[Kernel mode]] y ejecute el código apuntado por la [[Dirección de memoria|dirección]] `0x80` del vector de [[Trap|traps]] del sistema
5. En respuesta al [[Trap|trap]] de la posición 128 (`0x80`), el kernel invoca su propia función llamada `system_call()` para manejar esa trap. Este manejador
	1. Graba el valor de los registros en el stack del kernel
	2. Verifica la validez del número de system call
	3. Invoca el servicio correspondiente a la system call llamada a través del vector de system calls, el servicio realiza su tarea y finalmente le devuelve un resultado de estado a la rutina `system_call()`
	4. Se restauran los registros almacenados en el stack del kernel y se agrega el valor de retorno en el stack
	5. Se devuelve el control al wrapper y simultáneamente se pasa a [[User mode]]
6. Si el valor de retorno de la rutina de servicios de la system call da error, la función wrapper setea el valor en `errno`

#### API
---
Las system calls conforman una API

##### [[Unix file systems system calls|Relacionados a sistema de archivos]]
---
* [[Creat system call|creat()]]
* [[Open system call|open()]]
* [[Close system call|close()]]
* [[Read system call|read()]]
* [[Write system call|write()]]
* [[Lseek system call|lseek()]]
* [[Dup system call|dup()]]
* [[Link system call|link()]]
* [[Unlink system call|unlink()]]
* [[Stat system call|stat()]]
* [[Stat system call|fstat()]]
* [[Access system call|accss()]]
* [[Chmod system call|chmod()]]
* [[Chown system call|chown()]]
* [[Umask system call|umask()]]
* [[Ioctl  system call|ioctl()]]
* [[Chdir system call|chdir()]]

##### [[Unix process system calls|Relacionadas a los procesos]]
---
* [[Exec system call|exec()]]
* [[Fork system call|fork()]]
* [[Wait system call|wait()]]
* [[Exit system call|exit()]]
* [[Getuid system call|getuid()]]
* [[Geteuid system call|geteuid()]]
* [[Getgid system call|getgid()]]
* [[Getegid system call|getegid()]]
* [[Getpid system call|getpid()]]
* [[Getppid system call|getppid()]]
* [[Signal system call|signal()]]
* [[Kill system call|kill()]]
* [[Alarm system call|alarm()]]
* [[Brk system call|brk()]]

##### Relacionadas a la intercomunicación entre [[Proceso|procesos]]
---
* [[Pipe system call|pipe()]]
* [[Msgget system call|msgget()]]
* [[Msgsnd system call|msgsnd()]]
* [[Msgrcv system call|msgrcv()]]
* [[Msgctl system call|msgctl()]]
* [[Semget system call|semget()]]
* [[Semop system call|semop()]]
* [[Shmget system call|shmget()]]
* [[Shmat system call|shmat()]]
* [[Shmdt system call|shmdt()]]