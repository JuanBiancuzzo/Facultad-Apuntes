---
dia: 2024-08-29
tags:
  - ingeniería-en-informática/estructura/Microarquitectura
  - nota/facultad
  - carrera/ingeniería-electrónica/embebidos/Microcontroladores-de-32-bits
  - carrera/ingeniería-electrónica/estructura/Microarquitectura
aliases:
  - ALU
  - Flags de la Unidad Aritmético Lógica#Flags
  - Flags de la ALU#Flags
  - Program Status Register#^PSR
  - PSR#^PSR
---
# Definición
---
Para implementar las operaciones, utiliza dos componentes
* Look-Up Table
    * Esta tabla contiene la [[Tabla de verdad|tabla de verdad]] de cada operación. Se opera de a un bit por vez, llevando el [[Carry flag|carry]] para la próxima operación
* Barrel-Shifter
    * Este componente permite desplazar bits a izquierda o derecha en un solo ciclo de reloj, a diferencia de un [[Registro de desplazamiento|registro de desplazamiento]]

En la tabla no están todas las operaciones, la operación `subcc` por ejemplo se puede realizar con un complemento y un suma. De esto se encarga la unidad de control

## Flags
---
La ALU calcula los flags de cada operación y los carga en el registro PSR en cada de ser necesario 
^PSR
*  Carry identificado en general por una `C` ![[Carry flag#Definición]]
* Overflow identificado en general por una `V` ![[Overflow#Definición]]
* Cero identificado en general por una `Z` ![[Cero flag#Definición]]
* Negativo identificado en general por una `N` ![[Signo flag#Definición]]
* Paridad identificado en general por una `P` ![[Parity check#Definición]]