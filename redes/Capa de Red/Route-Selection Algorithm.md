---
dia: 2024-08-18
tags: 
 - redes/Capa-de-Red
 - nota/facultad
---
### Definición
---
En la práctica, se utiliza un [[Algoritmo|algoritmo]] más complejo que incorpora [[Hot Potato Routing Protocol|hot potato routing]]. Por cada prefijo de destino, la entrada del algoritmo es un [[Conjunto|conjunto]] de todas las rutas a ese prefijo que son conocidas y aceptadas por el [[Router|router]]. Si hay más de un [[Camino|camino]] posible, se invocan reglas de eliminación hasta quedar uno solo

1. Una ruta es asignada un valor preferencia local como uno de sus atributos. Esta preferencia local puede haber sido elegida por el router o recibida de oro router en el mismo [[Autonomous system|AS]]. Es un valor que depende de una decisión política tomada por el administrador de la red
2. De las rutas restantes, se selecciona la ruta con el [[Border Gateway Protocol#^2aa4d2|AS-PATH]] más corto
3. De las rutas restantes, se utiliza hot potato routing. Se selecciona la ruta con el router [[Border Gateway Protocol#^755087|NEXT-HOP]] más cercano
4. Si queda más de una ruta, se utilizan identificadores [[Border Gateway Protocol|BGP]] para seleccionar una