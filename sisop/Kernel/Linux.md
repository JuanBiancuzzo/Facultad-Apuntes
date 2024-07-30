---
dia: 2023-11-15
tags:
  - sisop/Kernel
  - nota/facultad
---
### Definición
---
En el caso de Linux y contrariamente a lo que la mayoría de los usuarios creen, Linux no es un sistema operativo sino que Linus desarrolló solo un [[Kernel|kernel]]. El resto de los componentes de Linux son desarrollos de terceros como por ejemplo GNU.

![[Linux kernel.webp]]

El kernel de Linux posee ciertas características a la hora de ser comparado con otros [[Programa|programas]]: 
* El kernel no tiene acceso a la biblioteca C ni a los encabezados C estándar. 
* El kernel está codificado en GNU C. 
* El kernel carece de la protección de memoria internamente, no se protege de sí mismo.
* El kernel no puede ejecutar fácilmente operaciones de punto flotante. 
* El kernel tiene una pequeña pila de tamaño fijo y no es dinámica. 
* Debido a que el kernel tiene interrupciones sincrónicas, es [[Preemptive|preemptive]] y admite SMP, la sincronización y la [[Concurrencia|concurrencia]] son preocupaciones importantes dentro del kernel.
* La portabilidad es importante.

El kernel de Linux posee es un único programa ejecutándose en la [[Memoria|memoria]] de la computador. Para tener una idea la versión 3.0 del kernel de Linux liberada el 27 de julio de 2012, comprendía unos 37.792 archivos por un total de 19.688.408 líneas de Código Fuente que ocupaban uno 460,8 MB de memoria. Este tipo de kernel se denomina Kernel Monolítico. 