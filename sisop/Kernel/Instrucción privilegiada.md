---
dia: 2023-09-04
materia: sisop
capitulo: 1
---
### Definición
---
Al tener [[Modo de operación|modos de operación]], y darle la capacidad de ejecutar instrucciones a un subconjunto de los modos, hace que algunas instrucciones tengan privilegio.

Este conjunto de instrucciones sólo puede ser ejecutado en [[Modo de operación#Modo kernel|modo kernel]]

| Instrucción | Descripción                                                    |
| ----------- | -------------------------------------------------------------- |
| LGDT        | Carga la [[Dirección de memoria\|dirección]] del GDT en GDTR   |
| LLDT        | Carga la [[Dirección de memoria\|dirección]] del LDT en LDTR   |
| LTR         | Carga el [[Registro de tarea]] en TR                           |
| MOVCR       | Copia la información y la guarda en el [[Registro de control]] |
| LMSW        | Carga un nuevo [[Estado de máquina]] en WORD                   |
| CLTS        | Limpia el [[Cambio de tarea]] en el registro de control CR0    |
| MOV         |                                                                |
| INVD        |                                                                |
| INVLPG      |                                                                |
| WBINVD      |                                                                |
| HLT         |                                                                |
| RDMSR       |                                                                |
| WRMSR       |                                                                |
| RDPMC       |                                                                |
| RDTSC       |                                                                |
