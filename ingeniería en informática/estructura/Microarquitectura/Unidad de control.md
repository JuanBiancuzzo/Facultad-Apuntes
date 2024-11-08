---
dia: 2024-08-29
tags:
  - ingeniería-en-informática/estructura/Microarquitectura
  - nota/facultad
  - embebidos/Microcontroladores-de-32-bits
aliases:
  - Unidad de control de la arquitectura ARC#En la arquitectura ARC
  - UC
  - Control unit
  - CU
  - Program Counter#^PC
  - Contador de programa#^PC
  - PC#^PC
referencias:
  - "220"
etapa: ampliar
orden: 165
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La unidad de control, es uno de los tres bloques funcionales principales en los que se divide una [[Procesador|CPU]]. Su función es buscar las instrucciones en la [[Memoria|memoria]] principal, decodificarlas y ejecutarlas, empleando para ello la unidad de proceso<sup><a href="#ref-220" style="color: inherit; text-decoration: none;">[220]</a></sup> 

El código se almacena en una memoria externa al propio procesador, pero puede estar en el mismo chip

Para acceder al código actual es necesario saber dónde está la siguiente instrucción, leerla decodificarla y ejecutarla. Se utiliza un [[Registro|registro]] especifico para proporcionar esta dirección y se denomina contador del programa ^PC

Su contenido se pasa al [[Arquitectura de una computadora#^bus-direccion|bus de direcciones]] externo para seleccionar la [[Instruction Set Architecture|instrucción]] de la memoria. Normalmente, la siguiente instrucción se encuentra en la siguiente [[Dirección de memoria|dirección]]. El PC se incrementa automáticamente según el tamaño de la instrucción

Cuando el programa tiene una bifurcación(`branch` o `jump`), la nueva dirección debe cargarse desde el código de la instrucción o el contenido de un registro global o mediante alguna otra operación

El PC recibe un nuevo valor, que es la dirección desde la cual leerá la siguiente instrucción

## En la arquitectura ARC
---
Hay dos formas de implementarla, con lógica micro-programada o con lógica cableada. El diseño cableado puede ser más difícil de diseñar y de modificar. El microprograma se puede grabar, mientras que el diseño cableado debe cambiar completamente. Sin embargo, es un método más rápido. Nos vamos a centrar en diseño micro-programado

![[Unidad de control.png]]

Para diseñarlo, se utilizan [[Contador|contadores]] que permiten indicar en que estado nos encontramos
* [[Read Only Memory|ROM]]
    * Esta contiene $2048$ instrucciones, de $41$ bits cada una. Acá está programada la lógica de cada instrucción del sistema
* [[Microprogram Instruction Register en la arquitectura ARC|Instrucciones MIR]]
    * Acá se almacenan las instrucciones de la ROM que deben ser ejecutadas
* CS-Address-MUX
    * Envía la dirección a ejecutar dependiendo de su entrada de control
    * Esta conectado con el CSAT, con los códigos de operación de la instrucción almacenada en registro de instrucciones, y con la dirección de salto de la MIR
    * A partir de una entrada de control proveniente del CBL, decide que entrada tomar y envía al decodificador
* Decodificador
    * Permite habilitar únicamente la instrucción deseada de la ROM, para ser copiada en el MIR
* CSAT
    * Es el contador de instrucciones, indica cuál es la siguiente instrucción en la ROM
* CBL
    * Está conectado con los flags y los códigos de condición y el bit 13 del registro IR. Decide que tipo de salto se debe realizar y lo envía al CS-Address-MUX
* MUX A, B y C
    * Estos tres multiplexores deciden si tomar el registro indicado por el MIR o por el IR, dependiendo de los correspondientes bits en el MIR

Como la lectura de [[Memoria|memoria]] puede ser más lenta, se utiliza el ACK (Acknowledge), por este canal se envía un 1 una vez que termino la operación en memoria. Permite indicarle a la unidad de control que puede seguir con la próxima instrucción



# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```