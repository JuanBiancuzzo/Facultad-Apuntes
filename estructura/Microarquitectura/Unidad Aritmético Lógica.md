---
dia: 2024-08-29
tags:
  - estructura/Microarquitectura
  - nota/facultad
aliases:
  - ALU
---
### Definición
---
Para implementar las operaciones, utiliza dos componentes
* Look-Up Table
    * Esta tabla contiene la [[Tabla de verdad|tabla de verdad]] de cada operación. Se opera de a un bit por vez, llevando el [[Carry flag|carry]] para la próxima operación
* Barrel-Shifter
    * Este componente permite desplazar bits a izquierda o derecha en un solo ciclo de reloj, a diferencia de un [[Registro de desplazamiento|registro de desplazamiento]]

En la tabla no están todas las operaciones, la operación `subcc` por ejemplo se puede realizar con un complemento y un suma. De esto se encarga la unidad de control

La ALU calcula los [[Flags|flags]] de cada operación y los carga en el [[Set instrucciones ARC|registro PSR]] en cada de ser necesario