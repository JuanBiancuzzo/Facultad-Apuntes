---
dia: 2023-11-20
tags:
  - sisop/Virtualización-de-memoria
  - nota/facultad
---
### Definición
---
Es el mecanismo, proporcionado por el [[Hardware|hardware]], que permite a partir de una [[Dirección de memoria virtual|dirección virtual]] obtener la [[Dirección de memoria|dirección física]] correspondiente. Esa traducción es realizada por el hardware.

El [[Sistema operativo|S.O.]] está en el medio de ese proceso y determina si el mismo se ha realizado correctamente. Lo que hace es gerenciar el manejo de la [[Memoria|memoria]]
1. Manteniendo registro de que parte está libre
2. Manteniendo el control de la forma en la cual la memoria está siendo utilizada

Desde la perspectiva del programador el proceso de address translation es completamente transparente, si bien, el hecho es que en realidad la memoria es almacenada en un lugar completamente diferente de donde él cree que está siendo almacenada

Un ejemplo de su implementación sería el [[Memory Management Unit|Memory management unit]].

#### Formalmente
---
El proceso de address translation es un mapeo entre dos elementos de un espacio de direcciones virtuales de N-elementos (VAS) y un espacio de direcciones físicas de M-elementos (PAS): $$ MAP : VAS \implies PAS ~ \cup \emptyset $$
donde $$ MAP(A) = \begin{cases} 
	A' & \text{si los datos en la dir. virtual} ~ A ~\text{están} \\ 
	& ~~~ \text{presentes la dir. física} ~ A' ~ \text{de} ~ PAS 
	\\ \\
	\emptyset & \text{si los datos en la dir. virtual} ~ A ~ \text{no} \\ 
	& ~~~ \text{estánpresentes la dir. física}
\end{cases} $$


#### Beneficios 
---
Este mecanismo provee ciertos beneficios

##### [[Proceso|Process]] isolation
---
Proteger el [[Kernel|kernel]] del [[Sistema operativo|sistema operativo]] y otras aplicaciones contra errores o el código malicioso requiere la capacidad de limitar las referencias a la [[Memoria|memoria]] por parte de las aplicaciones. Asimismo, Las aplicaciones pueden utilizar la traducción de direcciones para construir entornos limitados de ejecución segura para terceros Extensiones de partido.

##### [[Proceso|Interprocess]] communication
---
A menudo, los procesos necesitan coordinarse entre sí, y una forma eficiente de hacerlo es permitir que los procesos compartan una región de memoria común. 

##### Shared code segments
---
Instancias del mismo programa pueden compartir las instrucciones del programa, reduciendo su huella de memoria y haciendo más eficiente la caché del procesador. De la misma manera, diferentes programas pueden compartir bibliotecas comunes. 

##### [[Programa|Program]] initialization
---
Utilizando la traducción de direcciones, podemos iniciar la ejecución de un programa antes de que todo su código se cargue en la memoria desde el disco. 

##### Efficient dynamic [[Memoria|memory]] [[Memoria#`malloc()`|allocation]] 
---
Asignación eficiente de memoria dinámica: A medida que un proceso expande su montón de memoria o un hilo expande su pila, podemos utilizar la traducción de direcciones para llamar al kernel y asignar memoria solo cuando sea necesario para esos propósitos. 

##### [[Cache|Cache]] management
---
Gestión de caché: El sistema operativo puede organizar cómo se posicionan los programas en la memoria física para mejorar la eficiencia de la caché, a través de un sistema llamado coloración de páginas. 

##### [[Programa|Program]] debugging
---
El sistema operativo puede utilizar la traducción de memoria para evitar que un programa con errores sobrescriba su propia región de código; al detectar errores de puntero más temprano, se facilita su depuración. Los depuradores también utilizan la traducción de direcciones para instalar puntos de interrupción de datos, deteniendo un programa cuando hace referencia a una ubicación de memoria específica. 

##### Efficient I/O
---
Los sistemas operativos de servidor a menudo están limitados por la velocidad a la que pueden transferir datos hacia y desde el disco y la red. La traducción de direcciones permite transferir datos de manera segura directamente entre aplicaciones en modo usuario y [[Puerto Input-Output|dispositivos de E/S]].

##### [[Memoria|Memory]] mapped files
---
Una abstracción conveniente y eficiente para muchas aplicaciones es mapear archivos en el espacio de direcciones, de modo que el contenido del archivo pueda ser referenciado directamente con instrucciones de programa. 

##### [[Virtualización de memoria|Virtual memory]]
---
Memoria virtual: El sistema operativo puede proporcionar a las aplicaciones la abstracción de más memoria de la que está físicamente presente en una computadora dada. 

##### Checkpointing and restart
---
El estado de un programa que se ejecuta durante mucho tiempo puede ser checkpointeado periódicamente para que, en caso de que el programa o el sistema se bloquee, pueda reiniciarse desde el estado guardado. El desafío clave es poder realizar un checkpoint internamente consistente de los datos del programa mientras el programa continúa ejecutándose. 

##### Persistent data structures
---
El sistema operativo puede proporcionar la abstracción de una región persistente de memoria, donde los cambios en las estructuras de datos en esa región sobreviven a bloqueos del programa y del sistema. 

##### [[Proceso|Process]] migration
---
Un programa en ejecución puede ser trasladado de manera transparente de un servidor a otro, por ejemplo, para equilibrar la carga. 


##### Information flow control
---
Una capa adicional de seguridad consiste en verificar que un programa no esté enviando sus datos privados a terceros; por ejemplo, una aplicación de teléfono inteligente puede necesitar acceso a su lista de contactos, pero no se le debería permitir transmitir esos datos. La traducción de direcciones puede ser la base para gestionar el flujo de información dentro y fuera de un sistema. 

##### Information flow control
---
Podemos convertir de manera transparente una red de servidores en una computadora paralela de memoria compartida a gran escala mediante la traducción de direcciones.
