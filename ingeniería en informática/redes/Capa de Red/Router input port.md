---
dia: 2024-06-14
tags:
  - carrera/ingeniería-en-informática/redes/Capa-de-Red
  - nota/facultad
  - carrera/ingeniería-electrónica/redes/Capa-de-Red
---
# Definición
---
Ejecuta varias funciones claves. Realiza la función de [[Capa física|capa física]] de terminación del enlace de entrada. También realiza funciones de [[Capa de Enlace|capa de enlace]] necesarias para operar con la capa de enlace del otro lado del enlace. Consulta la [[Forwarding table|forwarding table]], para determinar el link de salida del [[Paquete|paquete]] ^676d04

## Procesamiento
---
La tabla de envío es copiada del [[Microprocesadores|procesador]] a los input ports a través de un bus destino, como un [[Peripheral Component Interconnect (PCI) bus|PCI bus]]. De esta forma, las decisiones se toman localmente en cada input port

Para la creación de la tabla, no podremos tener una entrada para cada [[Internet Protocol Address|dirección]] posible, ya que tendríamos más de cuatro billones de entradas. Esto se resuelve teniendo entradas para distintos rangos de valores de la dirección de destino. El [[Router|router]] busca coincidencias en el [[Classless Interdomain Routing|prefijo de la dirección de destino]], si la encuentra, envía el paquete al link asociado a esa entrada en la tabla. Para los casos con múltiples coincidencias, el router utiliza la entrada con la mayor regla de prefijo que encuentre

Debido a la existencia de esta tabla, la búsqueda es un proceso relativamente simple, que tiene que realizarse de la forma más eficiente posible. Una simple búsqueda lineal no será suficiente

Una vez determinado el [[Router output port|output port]] de un paquete, este será enviado al [[Switching fabric|switching fabric]]. En algunos diseños, este puede estar temporalmente bloqueado por otros paquetes actualmente usando el fabric. En estos casos, el paquete será encolado en el input port y programado para ser enviado posteriormente

Aunque el proceso de lookup es el más importante, existen otras acciones que deben ser tomadas
* Procesamiento de capa física y de red
* La versión del paquete
* El checksum
* El time-to-live del paquete

Estas deben ser verificados, los contadores utilizados para el manejo de red deben ser actualizados

## Delay
---
Si el [[Switching fabric|switching fabric]] no es suficientemente rápido como para transferir todos los paquetes recibidos, puede ocurrir encolamiento en los input ports. Para el [[Crossbar switch|crossbar switch]], esto puede ocurrir cuando hay más de un paquete destino a un output switch, o cuando hay más de un paquete en un mismo input port. Este fenómeno se conoce como head-of-the-line blocking (HOL)