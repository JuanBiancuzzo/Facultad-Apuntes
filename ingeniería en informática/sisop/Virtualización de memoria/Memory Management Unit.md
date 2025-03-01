---
dia: 2023-11-14
aliases:
  - MMU
tags:
  - carrera/ingeniería-en-informática/sisop/Virtualización-de-memoria
  - nota/facultad
  - carrera/ingeniería-electrónica/embebidos/Memorias
---
# Definición
---
Esta técnica transforma cada acceso a [[Memoria|memoria]], en la [[Virtualización de memoria|dirección virtual]] que es provista desde dentro del [[Espacio de direcciones|espacio de direcciones]] en una [[Dirección de memoria|dirección física]] en la cual la información deseada se encuentra realmente almacenada

Entonces, en todos y por cada una de las referencias a memoria un [[Traslación de direcciones|mapeo]] es realizado por [[Hardware|hardware]], más específicamente por Memory Management Unit

Hay que denotar que para que funcione correctamente el mapeo el [[Sistema operativo|sistema operativo]] tiene que involucrarse en los puntos claves para 
* Setear al hardware de forma correcta
* Tener un control de la memoria, manteniendo información de en que lugar hay áreas libres y en que lugar hay un área en uso
* Intervenir en forma criteriosa como mantener el control sobre toda la memoria usada

![[Memory Management Unit.png]]

La segunda tarea realizada por una MMU es la protección de diferentes áreas de memoria e interfaces programables dependiendo de la tarea en ejecución y los privilegios del [[Procesador|procesador]] en ese momento. Algunas áreas de memoria pueden ser accedidas por algunas partes del código y otras no. Esta es la misma funcionalidad que está disponible en la [[Protección de memoria|MPU]]; este último es un elemento opcional en algunos procesadores [[ARM's Cortex-M|Cortex-M]] y depende de la implementación según el fabricante

La tercer y última capacidad de una MMU es proporcionar [[Dirección de memoria virtual|memorias virtuales]], lo cual es un medio para ofrecer más [[Dirección de memoria|espacio de direcciones]] lógicas que el espacio de memoria físicamente disponible

## Implementación
---
Consideremos la siguiente representación de MMU

![[Pasted image 20240910151856.png|500]]

En la que tenemos un área de memoria utilizada para el acceso al programa a través del registro de [[Unidad de control#^PC|contador de programa]]

Podemos ver que tenemos un espacio de memoria lógica que es mayor que la memoria física disponible 

Cuando el PC accede a una dirección en la región del espacio de memoria lógica marcada con `(1)`, la MMU traduce esta dirección lógica `(LA)` a una dirección física `(PA)` en la memoria física. Si bien la PC solo accede a esta región, todo está bien

Sin embargo, tan pronto como la PC se aventura en la siguiente región del espacio de memoria `(2)`, no hay memoria física correspondiente disponible en el otro lado de la MMU

En esta situación, la MMU genera una excepción, la instrucción defectuosa se suspende y se ejecuta un [[Lenguaje de programación#Lenguaje de bajo nivel|software de bajo nivel]] para guardar el estado actual de la memoria física en un dispositivo extremo (podría ser una unidad de disco, una [[Memoria flash|memoria flash]] o algún otro almacenamiento de memoria de alta capacidad), y reemplácelo con una imagen de la memoria física correspondiente a `(2)` carga desde el almacén de memoria externa

El mapa de memoria de la MMU se actualiza para reflejar el nuevo mapeo de `(LA)` a `(PA)` y se debe volver a ejecutar la instrucción que provocó la [[Interrupción|excepción]]

Estas operaciones de intercambio las realiza el procesador en una memoria que debe estar siempre disponible

En una característica interesante pero tiene un costo, el tiempo para intercambiar los datos entre la memoria física y la memoria externa

En general, estos intercambios no se realizan en grandes áreas de memoria sino que utilizan páginas pequeñas de unos pocos kilobytes