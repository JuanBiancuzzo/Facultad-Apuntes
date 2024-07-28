---
dia: 2023-12-01
tags:
  - sisop/Virtualización-de-memoria
  - nota
---
### Definición
---
Una alternativa a la memoria segmentada planteada por métodos como [[Traslación de direcciones con registros de base y segmento|Registros de base y segmento]] y [[Traslación de direcciones con tabla de segmentos|Tabla de segmentos]], es la memoria paginada. Con la paginación, la [[Memoria|memoria]] es reservada en pedazos de tamaño fijo llamados page frames. 

El [[Traslación de direcciones|address translation]] es similar a como se trabaja con la segmentación. En vez de tener una página de segmentos cuyas entradas contienen punteros a segmentos, hay una tabla de páginas por cada [[Proceso|proceso]] cuyas entradas contienen punteros a las page frames.

Teniendo en cuenta que los page frames tienen un tamaño fijo, y son potencia de 2, las entradas en la page table sólo tienen que proveer los bit superiores de la dirección de la page frame. De esta forma van a ser más compactos. No es necesario tener un límite, la página entera se reserva como una unidad

![[Memoria paginada.webp]]

#### Translación con Page Table
---
La [[Dirección de memoria virtual|virtual address]] tiene dos componentes
* El número de página virtual
* El offset dentro de esa página

El número de la página virtual es el índice en la page table para obtener el page frame en la [[Memoria|memoria]] física. La [[Dirección de memoria|dirección]] física está compuesta por The Physical Frame Page que se obtiene de la page table concatenando con el offset de la página que se obtiene de la virtual address. El [[Sistema operativo|sistema operativo]] maneja los accesos a la memoria.

Una de las cosas que pueden parecer raras sobre la paginación es que si bien el [[Programa|programa]] cree que su memoria es lineal, de hecho, su memoria está desparramada por toda la memoria física como si fuera un mosaico.

El [[Procesador|procesador]] va a ejecutar una instrucción después de otra usando direcciones virtuales y esas direcciones virtuales son lineales. Si bien la instrucción ubicada en el final de una página podría estar ubicada en una región completamente diferente de la memoria física de la próxima instrucción que debe empezar en la siguiente página.

Las estructuras de datos que también son contiguas usando direcciones virtuales, en la realidad una matriz muy grande podría estar desparramada por distintos page frames físicos. La paginación encuentra el mismo [[Traslación de direcciones con tabla de segmentos#Problemas|problema que la segmentación]], saber qué espacio de la memoria está vacío es muy complicado

![[Translación con Page Table.webp]]