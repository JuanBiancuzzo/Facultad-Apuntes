---
dia: 2024-10-15
estado: Sin empezar
tags:
  - investigación/índice
  - nota/investigacion
  - investigación/ciencias-de-la-computación/sistemas-operativos
referencias:
  - "325"
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/superTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a investigar como funcione un sistema operativo desde $0$

## Resumen
---
#carrera/ingeniería-en-informática/sisop/Kernel #carrera/ingeniería-electrónica/embebidos/Diseño-desarrollo-y-depuración 
El [[Software|software]] que maneja y dispone de los recursos de una [[Computadora|computadora]], con esta definición el [[Kernel|kernel]] puede ser equivalente al sistema operativo

Este usa las siguientes abstracciones
* [[Virtualización del procesador|Virtualización del CPU]]
* [[Virtualización de memoria|Virtualización de memoria]]
* [[Concurrencia|Concurrencia]]
* [[Persistencia de datos|Persistencia]]

Las cuales tiene que tener en cuenta para mantener la seguridad y la eficiencia del mismo

### Iniciar
---
El sistema operativo es la capa de [[Software|software]] de más bajo nivel en la [[Computadora|computadora]]. Este contiene por un lado una capa para la gestión de dispositivos específicos y por otro una serie de servicios para la gestión de dispositivos agnósticos del [[Hardware|hardware]] que son utilizados por las aplicaciones.

Estas dos capas suelen ser conocidas como el [[Kernel|kernel]] del sistema operativo. Cuando el código fuente de esta capa es ejecutado la computadora pasa a un estado llamado Modo Supervisor.

#### Etapas de inicio 
---
El [[Proceso|proceso]] de inicio de una computadora se divide esencialmente en 3 partes

##### Booteo
---
Este proceso es denominado bootstrap, y generalmente depende del [[Hardware|hardware]] de la [[Computadora|computadora]]. En él se realizan los chequeos de hardware y se carga el Bootloader, que es el programa encargado de cargar el [[Kernel|kernel]] del sistema operativo. Este proceso consiste en 3 partes
1. Carga el [[BIOS|BIOS]]
2. Crear la [[Interrupción|interrupt]] vector table y cargar las rutinas de manejo de interrupciones
3. La BIOS genera una interrupción 19
4. Ejecutar el servicio de interrupciones

##### Carga del kernel
---
El Bootloader por el momento de forma más o menos transparente es un [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]] que se encarga de 
1. Pasar a Modo supervisor
2. Buscar el kernel al dispositivo donde se encuentra almacenado
3. Lo carga en [[Memoria|memoria]]
4. Setear el [[Registro|registro]] de PI (próxima instrucción)
5. Ejecutar la primer instrucción del [[Kernel|kernel]]

##### Inicio de las aplicaciones de usuario
---
Una vez que el [[Kernel|kernel]] terminó de ejecutarse, las últimas operaciones que realiza son
1. Carga en [[Memoria|memoria]] la aplicación a ejecutarse
2. Setear el PI (próxima instrucción) a la primera instrucción del [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]]
3. Pasar a [[User mode|modo usuario]] y dejar el control a la aplicación


Leer
* [[The Linux Programming Interface, a Linux and UNIX System Programming Handbook de Michael Kerrisk|The Linux Programming Interface, a Linux and UNIX System Programming Handbook]]
* [[Linux From Scratch de Gerard Beekmans|Linux From Scratch]]

## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/contenido/listaAcumulada", { archivo: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/referencia/referenciasAcumuladas', { archivo: dv.current() });
```

