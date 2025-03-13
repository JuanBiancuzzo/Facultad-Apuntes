---
dia: 2024-04-03
tags:
  - carrera/ingeniería-en-informática/algo-1/Introducción-a-la-programación
  - nota/facultad
  - investigación/matemática/teoría-de-la-información
  - carrera/ingeniería-en-informática/orga/Compresión
  - carrera/ingeniería-electrónica/algo-1/Introducción-a-la-programación
aliases:
  - Bit#Bit
  - Byte#Byte
  - Bit de información
---
# Definición
---
Dado un [[Paquete|mensaje]], cuanta información útil estoy dando. La cantidad de bit's necesarios para ser eficiente, cumple esta formula
$$ bits = - \log_2(P) $$
Donde $P$ es la [[Probabilidad|probabilidad]] de que ocurra lo que estamos mandando.

La lógica es que cuando un [[Evento|evento]] es muy probable que ocurra, queremos optimizar la cantidad de bits que mandemos, mientras que para los eventos muy improbables mandaremos más bits ya que estamos mandando más información

Por ejemplo, digamos que tenemos una moneda cargada, dando una probabilidad de $0.75$ de caer en cara. Por lo tanto como es más común no nos conviene mandar muchos bits, por eso $-log_2(0.75) = 0.415037~bits$, mientras que para ceca como tiene $0.25$ de probabilidad se tiene que enviar con mayor información $-log_2(0.25)=2~bits$

## Cuantificación
---
En términos de información las computadoras únicamente manejan pulsos eléctricos, por ende podría pensarse que la ausencia de electricidad se representa con un $0$. Por otro lado la presencia de electricidad se representa con un $1$.

### Bit
---
A este par $0$/$1$ se lo denomina bit ó digito binario o BInary digiT. El bit representa la unidad de información más pequeña que una [[Computadora|computadora]] maneja. Un bit solo puede representar dos valores o estados

Estos valores se pueden guardar usando [[Transistor|transistores]], mientras más bits, más transistores se necesitan para mantenerlos

### Byte
---
Brooks propuso en su artículo que una computadora accediera a la información en "pedazos" de $8$ bits. Estos pedazos fueron denominados bytes, con lo cual formalmente un Byte equivale a 8 bits

| Unidad        | Cantidad de Bytes                                  | Equivalencia      |
| ------------- | -------------------------------------------------- | ----------------- |
| $1$ byte      | $2^{0}~ = 1$ byte                                  | $8$ bits          |
| $1$ KiloByte  | $2^{10} = 1~024$ bytes                             | $1024$ bytes      |
| $1$ MegaByte  | $2^{20} = 1~048~576$ bytes                         | $1024$ KiloBytes  |
| $1$ GigaByte  | $2^{30} = 1~073~741~824$ bytes                     | $1024$ MegaBytes  |
| $1$ TeraByte  | $2^{40} = 1~099~511~627~776$ bytes                 | $1024$ GigaBytes  |
| $1$ PettaByte | $2^{50} = 1~125~899906~824~624$ bytes              | $1024$ TeraBytes  |
| $1$ ExaByte   | $2^{60} = 1~152~921~504~606~846~976$ bytes         | $1024$ PettaBytes |
| $1$ ZettaByte | $2^{70} = 1~180~591~620~717~411~303~424$ bytes     | $1024$ ExaBytes   |
| $1$ YottaByte | $2^{80} = 1~205~925~916~614~629~174~706~176$ bytes | $1024$ ZettaBytes |
