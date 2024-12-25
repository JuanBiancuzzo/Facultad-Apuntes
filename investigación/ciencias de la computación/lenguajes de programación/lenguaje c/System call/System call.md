---
dia: 2024-12-22
tags:
  - índice
  - nota/investigacion
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call
  - ingeniería-en-informática/sisop/Kernel
estado: Nos falta pasar algunas system calls
orden: 605
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarSuperTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a enumerar las system calls, en este caso usando el lenguaje C

## Resumen
---
Las system calls son funciones que permiten a los [[Proceso|procesos]] de usuario pedirle al [[Kernel|kernel]] que realice operaciones en su nombre. Una system call es cualquier función que el kernel expone que puede ser utilizada por un proceso a [[User mode|nivel usuario]]

Desde el punto de vista del [[Programa|programa]], llamar a una system call es más o menos como invocar a una función de `C`. Por supuesto, de fondo ocurre
1. El programa realiza un llamado a una system call mediante la invocación de una función wrapper en la biblioteca
2. Dicha función wrapper tiene que proporcionar todos los argumentos al system call `trap_handling`. Estos argumentos son pasados al wrapper por el [[ingeniería en informática/sisop/Virtualización de memoria/Stack|Stack]], pero el kernel los espera en determinados [[Registro|registros]]. La función wrapper copia estos valores a los registros
3. Dado que todas las system calls son accedidas de la misma forma, el kernel tiene que saber identificarlas de alguna forma. Para poder hacer esto, la función wrapper copia el número de la system call a un determinado registro de la [[Procesador|procesador]] la `%eax`
4. La función wrapper ejecuta una instrucción de código máquina llamada `trap_machine_instruction`, esta causa que el procesador pase de [[User mode|user mode]] a [[Kernel mode|kernel mode]] y ejecute el código apuntado por la [[Dirección de memoria|dirección]] `0x80` del vector de [[Trap|traps]] del sistema
5. En respuesta al [[Trap|trap]] de la posición 128 (`0x80`), el kernel invoca su propia función llamada `system_call()` para manejar esa trap. Este manejador
	1. Graba el valor de los registros en el stack del kernel
	2. Verifica la validez del número de system call
	3. Invoca el servicio correspondiente a la system call llamada a través del vector de system calls, el servicio realiza su tarea y finalmente le devuelve un resultado de estado a la rutina `system_call()`
	4. Se restauran los registros almacenados en el stack del kernel y se agrega el valor de retorno en el stack
	5. Se devuelve el control al wrapper y simultáneamente se pasa a user mode
6. Si el valor de retorno de la rutina de servicios de la system call da error, la función wrapper setea el valor en `errno`

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