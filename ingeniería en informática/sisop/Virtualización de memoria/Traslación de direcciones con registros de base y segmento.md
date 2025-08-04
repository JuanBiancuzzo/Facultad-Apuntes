---
dia: 2023-11-30
tags:
  - carrera/ingeniería-en-informática/sisop/Virtualización-de-memoria
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/sisop/Virtualización de memoria/Resumen.md]]"
---
# Definición
---
Debido a que esta ubicación sucede en run-time y debido a que se puede mover el address space incluso una vez que el [[Proceso|proceso]] empezó a ejecutarse la técnica habitualmente se refiere como [[Realocación dinámica|realocación dinámica]].

Donde la idea es usar dos [[Registro|registros]] de [[Hardware|hardware]] dentro de cada [[Microprocesadores|cpu]]: 
* Registro base
* Registro límite o segmento

Este par base-limite va a permitir que el address space pueda ser ubicado en cualquier lugar deseado de la [[Memoria|memoria]] física, y se hará mientras el [[Sistema operativo|sistema operativo]] se asegura que el [[Proceso|proceso]] solo pueda acceder a su [[Espacio de direcciones|address space]]

En esta configuración, cada [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]] es escrito y [[Compilador#Fase de compilación|compilado]] como si fuera cargado en la dirección física 0. A su vez cuando se inicia la ejecución del programa el OS decide en que lugar va a carga el mismo y para hacerlo setea el registro base en un determinado valor. 

![[Traslación de direcciones con registros de base y segmento.webp]]

## Registro Base
---
Algunas cosas interesantes pasan cuando el proceso se esta ejecutando. A partir de ahora cuando cualquier referencia es generada por el proceso es traducida por el [[Microprocesadores|procesador]] de la siguiente manera $$ \text{dirección física} = \text{dirección virtual} + \text{base} $$
Cada referencia de memoria generada por el procesador es una [[Dirección de memoria virtual|dirección virtual]]. El [[Hardware|hardware]] cada vez que se hace referencia a esta dirección tiene que sumar el contenido del registro base y su resultado es la dirección física que tiene que ser utilizada en la memoria del [[Sistema|sistema]]

## Registro de Segmento
---
El registro de segmento está allí para ayudar con la [[Protección de memoria|protección]]. Específicamente, el [[Microprocesadores|procesador]] antes que hacer nada va a checkear que la referencia a [[Memoria|memoria]] este dentro de los límites del [[Espacio de direcciones|address space]] para asegurarse que la misma sea legal.

Si un proceso genera una [[Virtualización de memoria|dirección virtual]] que es mayor que los límites o una dirección que  sea negativa, la [[Microprocesadores|CPU]] va a generar una [[Excepción del procesador|excepción]] y el [[Proceso|proceso]] va a terminarse.

El punto es que los límites están ahí para asegurarse que todas las direcciones generadas por el proceso sean legales y estén dentro del límite del mismo

Este registro puede ser definido de dos formas
* Este registro mantiene el tamaño del address space entonces el hardware chequea la dirección virtual contra el registro de segmento, sumándole primero el registro de base
* El registro de segmento almacena la dirección física del fin del espacio de direcciones