---
dia: 2024-08-29
tags: 
 - estructura/Microarquitectura
 - nota/facultad
---
### Definición
---
Hay dos formas de implementarla, con lógica micro-programada o con lógica cableada. El diseño cableado puede ser más difícil de diseñar y de modificar. El microprograma se puede grabar, mientras que el diseño cableado debe cambiar completamente. Sin embargo, es un método más rápido. Nos vamos a centrar en diseño micro-programado

![[Unidad de control.png]]

Para diseñarlo, se utilizan [[Contador|contadores]] que permiten indicar en que estado nos encontramos
* [[Read Only Memory (ROM)|ROM]]
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
