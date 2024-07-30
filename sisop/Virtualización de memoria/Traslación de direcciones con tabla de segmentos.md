---
dia: 2023-12-01
tags:
  - sisop/Virtualización-de-memoria
  - nota/facultad
---
### Definición
---
A diferencia del uso de un único par de [[Traslación de direcciones con registros de base y segmento|registros de base y segmento]], esté método tiene un arreglo de pares de registros de base y segmento por cada [[Proceso|proceso]].

Cada entrada en el arreglo controla una porción de [[Dirección de memoria virtual|virtual address space]]. La [[Memoria|memoria]] física de cada segmento es almacenada continuamente, pero distintos segmentos pueden estar ubicados en distintas partes de la memoria física

Una [[Dirección de memoria virtual|dirección virtual]] tiene dos componentes
* Un número de segmento
* Un offset de segmento

El número de segmento es el índice de la tabla para ubicar el inicio del segmento en la memoria física. El registro bound es chequeado contra la suma del registro $\text{base} ~ + ~ \text{offset}$ por [[Protección de memoria|protección]], previniendo que el proceso lea o escriba fuera de su región de memoria

En una dirección virtual utilizando esta técnica, los bit de más alto orden son utilizados como índice en la tabla de segmentos. El resto se toma como offset y es sumado el registro base y comparado contra el registro de segmento. El número de segmentos depende de la cantidad de bits que se utilizan como índice.

![[Traslación de direcciones con tabla de segmentos.webp]]

#### Detalles
---
1. El [[Stack|stack]] crece hacia atrás o backward, por ende [[Hardware|hardware]] necesita saber sobre eso en un bit de información
2. A veces es necesario poder compartir ciertos segmentos entre varios procesos, para ello el hardware necesita proporcionar un mecanismo, otro bit que permita saber si se puede ejecutar, escribir o leer por varios procesos a la vez. Para ello se usan un par de bits llamados bits de protección
3. Todo lo hace el hardware en este caso la [[Memory Management Unit|MMU]]
4. Segmentación de grano fino vs segmentación de grano grueso. La primera consiste en tener muchos segmentos pequeños y la segunda consiste en tener pocos segmentos grandes.

#### Problemas
---
El problema principal es la fragmentación, precisamente la fragmentación extrema. Donde la cantidad de segmentos aumenta, y se dispersa la memoria de cada proceso.
