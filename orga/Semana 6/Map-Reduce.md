---
dia: 2023-04-27
materia: orga
capitulo: 6
---
### Definición
---
Es un procesamiento distribuido de datos utilizando un [[Cluster]] de computadoras. Para esto se necesita un [[Almacenamiento distribuido]] que se encargue de guardar la información para procesar, y un [[File system distribuido]] para organizarlo. Esto lo aplica en dos etapas:

##### Map
Para esto el usuario especifica una función **map** que procesa un par clave-valor para generar un conjunto intermedio de pares clave-valor.

Esta transforma nuestros datos, y tiene que ser aplicada a cada dato de nuestro set. Por eso lo recomendable es que sea paralelizable y de esa forma poder distribuirse entre las distintas máquinas de un cluster.


##### Reduce
Se debe especificar también una función **reduce** que combina todos los valores asociados a la misma clave.

Combina los resultados del map, por lo tanto es necesario procesar los datos de todas las máquinas del  [[Cluster]]. Reduce de forma local en paralelo y reduce entre m´quinas mediante la [[Etapa de shuffle & sort]].