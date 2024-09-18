---
dia: 2024-06-14
tags:
  - redes/Capa-de-Red
  - nota/facultad
---
# Definición
---
Conecta los puertos de entrada con los puertos de salida ^57bb3f

Existe diversas formas para cumplir esta funcionalidad
* Switching via memory
	* Los [[Router|routers]] mas simples y antiguos eran [[Computadora|computadoras]] tradicionales. El [[Router input port|input port]] señalaba al [[Procesador|Microprocesador]] con un [[Interrupción|interrupt]]. Este luego copiaba el [[Paquete|paquete]] en la memoria, indexaba la tabla de envío y copiaba el paquete en el buffer de salida adecuado. Hoy en día se puede utilizar esta técnica, pero el lookup y el guardado en [[Memoria|memoria]] es realizado por el input line card 
* Switching via a bus
	* En este enfoque, el input port transfiere el paquete directamente al output a través de un [[Bus|bus]] compartido, sin ninguna intervención. El input port agrega un header al paquete indicando el puerto utilizado, el cual es posteriormente removido por el output port. Al ser compartido, todos reciben el paquete, pero solo el indicado lo mantiene. Únicamente un único paquete puede atravesar el bus a la vez. Esta técnica suele ser suficiente para routers de área locales y redes empresariales
* Switching via an interconnection network
	* Se utiliza un [[Crossbar switch|crossbar switch]] en una red interconectada de $2N$ buses que conectan $N$ input ports con $N$ [[Router output port|output ports]]. Esta técnica es no bloqueante, únicamente habrá espera si dos paquetes deben ser enviados al mismo output port. Redes más sofisticadas de múltiples etapas se puede utilizar para permitir enviar múltiples paquetes al mismo link al mismo tiempo