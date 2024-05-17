---
dia: 2023-11-14
materia: sisop
capitulo: 3
aliases:
  - MMU
---
### Definición
---
Esta técnica transforma cada acceso a [[Memoria|memoria]], en la [[Virtualización de memoria|dirección virtual]] que es provista desde dentro del [[Espacio de direcciones|espacio de direcciones]] en una [[Dirección de memoria|dirección física]] en la cual la información deseada se encuentra realmente almacenada.

Entonces, en todos y por cada una de las referencias a memoria un [[Traslación de direcciones|mapeo]] es realizado por [[Hardware|hardware]], más específicamente por Memory Management Unit.

Hay que denotar que para que funcione correctamente el mapeo el [[Sistema operativo|sistema operativo]] tiene que involucrarse en los puntos claves para 
* Setear al hardware de forma correcta
* Tener un control de la memoria, manteniendo información de en que lugar hay áreas libres y en que lugar hay un área en uso
* Intervenir en forma criteriosa como mantener el control sobre toda la memoria usada