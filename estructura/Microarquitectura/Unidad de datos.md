---
dia: 2024-08-29
tags:
  - estructura/Microarquitectura
  - nota/facultad
aliases:
  - Unidad de datos de la arquitectura ARC#En la arquitectura ARC
---
### Definición
---
La unidad de datos es la parte del [[Procesador|procesador]] que se encarga de realizar las operaciones y guardar los registros

#### En la arquitectura ARC
---
Para realizar esto utiliza tres buses. Se puede realizar con menos buses, pero son soluciones más lentas, ya que requiere más ciclos de reloj para guardar los datos a usar en registros correspondientes, para luego ser usados

![[Unidad de datos.png]]

* [[Bus]] A: Está conectado con la salida de los registros y con la primera entrada de la [[Unidad Aritmético Lógica|ALU]]. Además, está conectado con la línea de direcciones
* Bus B: Está conectado con la salida de los registros y con la segunda entrada de la ALU. Además, está conectado con la línea de datos
* Bus C: Está conectado con la entrada de los registros

Para operar con los registros, se utilizan tres decodificadores
* Decodificador A: Decide cuál [[Registro|registro]] enviará sus datos por el bus A
* Decodificador B: Decide cuál registro enviará sus datos por el bus B
* Decodificador C: Decide en cuál registro se guardará la información del bus C

Además de los registros utilizados por el programador, el microprocesador tiene más registros que son utilizados por el mismo para realizar operaciones

* Registros Temporales
    * En estos registros se guardará información adicional que necesite el microprocesador
* Registro IR
    * En este registro se cargará la instrucción que se debe ejecutar

La [[Unidad de control#En la arquitectura ARC|unidad de control]] contiene también el multiplexor del bus C. Este define si debe leer la información proveniente de la ALU o de la línea de datos

No todos los registros se implementan de la misma forma, hay algunos con características especiales

* Registro %r$0$
    * Este registro no necesita Flip-Flops, ya que siempre vale $0$
* Registro PC
    * Los últimos dos bits valen siempre $0$, por lo que no necesita [[Flip-Flop D asincrónico|Flip-Flops]] allí
* Registro IR
    * Tiene salidas especiales para cada campo, tiene comunicación bit a bit. Esto permite analizar la instrucción a ejecutar