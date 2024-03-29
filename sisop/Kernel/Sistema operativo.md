---
dia: 2023-11-15
materia: sisop
capitulo: 1
---
### Definición
---
El [[Software]] que maneja y dispone de los recursos de una [[Computadora|computadora]], con esta definición el [[Kernel]] puede ser equivalente al sistema operativo.

### Iniciar
---
El sistema operativo es la capa de [[Software]] de más bajo nivel en la [[Computadora|computadora]]. Este contiene por un lado una capa para la gestión de dispositivos específicos y por otro una serie de servicios para la gestión de dispositivos agnósticos del [[Hardware]] que son utilizados por las aplicaciones.

Estas dos capas suelen ser conocidas como el [[Kernel]] del sistema operativo. Cuando el código fuente de esta capa es ejecutado la computadora pasa a un estado llamado Modo Supervisor.

#### Etapas de inicio 
---
El [[Proceso|proceso]] de inicio de una computadora se divide esencialmente en 3 partes

##### Booteo
---
Este proceso es denominado bootstrap, y generalmente depende del [[Hardware]] de la [[Computadora|computadora]]. En él se realizan los chequeos de hardware y se carga el Bootloader, que es el programa encargado de cargar el [[Kernel]] del sistema operativo. Este proceso consiste en 3 partes
1. Carga el BIOS
2. Crear la [[Interrupción|interrupt]] vector table y cargar las rutinas de manejo de interrupciones
3. La BIOS genera una interrupción 19
4. Ejecutar el servicio de interrupciones

##### Carga del kernel
---
El Bootloader por el momento de forma más o menos transparente es un [[Programa|programa]] que se encarga de 
1. Pasar a Modo supervisor
2. Buscar el kernel al dispositivo donde se encuentra almacenado
3. Lo carga en [[Memoria|memoria]]
4. Setear el registro de PI (próxima instrucción)
5. Ejecutar la primer instrucción del [[Kernel]]

##### Inicio de las aplicaciones de usuario
---
Una vez que el [[Kernel|kernel]] terminó de ejecutarse, las últimas operaciones que realiza son
1. Carga en [[Memoria|memoria]] la aplicación a ejecutarse
2. Setear el PI a la primera instrucción del [[Programa|programa]]
3. Pasar a [[User mode|modo usuario]] y dejar el control a la aplicación