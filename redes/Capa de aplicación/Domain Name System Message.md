---
dia: 2024-05-29
aliases:
  - DNS Query
  - DNS Message
  - DNS Response
tags:
  - redes/Capa-de-aplicación
  - nota/facultad
---
### Definición
---
Los [[Domain Name System|DNS]] queries como los DNS response tienen el mismo formato. Los primeros $12$ bytes son el header section. Estos contienen un identificador de la query, los flags de la misma, y contadores de ocurrencias de los tipos de datos que le siguen al header

Luego del header tendremos la question section, la cual tiene información sobre la consulta realizada. Después, la answer section contiene los [[Domain Name Server Records|RR]] de la consulta

En la authority section estarán los RR de otros authoritative servers. En additional section se encuentran RR útiles

#### Métodos de consulta
---
Las consultas pueden ser tanto recursivas como iterativas. Por lo general, el [[Domain Name System#Local|DNS local]] utiliza consultas recursivas, mientras todo el resto utiliza consultas iterativas
* Las consultas recursivas se encargan de la consulta, devolviendo la [[Internet Protocol Address|IP]] buscada
* Las consultas iterativas únicamente devuelven el siguiente en la cadena de DNS