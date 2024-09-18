---
dia: 2023-12-01
tags:
  - sisop/Virtualización-de-memoria
  - nota/facultad
---
# Definición
---
Si se desea implementar un mecanismo eficiente de paginación, posiblemente elegir un arreglo no sea la solución más correcta. Un [[Árbol|árbol]] o un [[Hash table|hash table]] son más apropiados ya que son usados en [[Sistema operativo|sistemas]] más modernos

Muchos sistemas utilizan técnicas de [[Traslación de direcciones|address translation]] basados en árboles, si bien los detalles varían de sistema en sistema y la terminología también es un poco confusa, sin embargo estos sistemas que se describirán a continuación tiene propiedades bastantes similares. Estas técnicas soportan
* [[Protección de memoria|Protección de memoria]] de grano fino
* Memoria compartida
* Ubicación de memoria flexible
* Reserva eficiente de memoria
* Un sistema de búsqueda de [[Espacio de direcciones|espacios de direcciones]] eficiente

Si bien todos los sistemas multinivel de address translation usan [[Traslación de direcciones con memoria paginada|paginación]] en el nivel más bajo del árbol. La principal diferencia entre ellos es como se llega a la page table a nivel de las hojas del árbol, ya sea usando segmentación más paginación, múltiples niveles de paginación, segmentación más múltiples niveles de paginación.

## Segmentación paginada
---
Este [[Sistema|sistema]] utiliza dos niveles de un [[Árbol|árbol]]. Con segmentación paginada, la [[Memoria|memoria]] esta segmentada, pero en vez de que cada entrada en la página de segmentos apunte directamente a una región continua de la memoria física, cada entrada de la tabla de segmentos apunta a una tabla de páginas, que a su vez apunta a la memoria correspondiente a ese segmento. 

La tabla de segmentos tiene una entrada llamada límite o tamaño que describe la longitud de la página de tablas, ósea la longitud de los segmentos en las páginas. El proceso de traducción de [[Dirección de memoria virtual|virtual address]] a physical address es el siguiente. 

La virtual address tiene 3 componentes
* Un número de segmento
	* Es el índice para la segment table que aloja la page table para ese segmento
* Un número de pagina virtual dentro de ese segmento
	* Es el índice de la page table que contiene una page frame en la memoria física
* Un offset dentro de la página
	* La physical address esta compuesta por el physical page frame que pertenece a la page table con el offset 

![[Segmentación paginada.webp]]
## [[Traslación de direcciones|Address translation]] con 3 niveles de page tables
---
![[Tres niveles de paginación.webp]]

## [[Traslación de direcciones|Address translation]] con [[Hash table|Tabla de Hash]] por [[Software|software]]
---
![[Tabla de hash.webp]]

## Multinivel segmentación paginada
---
Este es el sistema utilizado por las [[Arquitectura de aplicaciones|arquitecturas x86]] para 64 y 32 bit.

En la arquitectura x86 cada proceso posee una Global Descriptor Table (GDT), que es equivalente a la segment table. La GDT es almacenada en la [[Memoria|memoria]], cada entrada a esta tabla apunta a una tabla de páginas (multinivel) para ese segmento. Para inicializar el proceso de [[Traslación de direcciones|address translation]] el [[Sistema operativo|sistema operativo]] setea la GDT e inicializa un [[Registro|registro]] llamado GDTR que contiene la [[Dirección de memoria|dirección]] y la longitud de la GDT.

Por cada 32 bit en la arquitectura x86 la [[Dirección de memoria virtual|virtual address]] posee un segmento a una tabla de 2 niveles
* Los primeros 10 bits de la virtual address son el índice de la paged table de primer nivel, llamada page directory
* Los otros 10 bit son el índice de una page table de segundo nivel
* Finalmente los 12 bit restantes son el offset dentro de la página

Cada entrada en la page table ocupan 4 bytes y existen 1024 entradas por ende el tamaño total de la page directory es de 4k, sucede los mismo con la page table de segundo nivel y justo coincide con el tamaño de una página en memoria física
