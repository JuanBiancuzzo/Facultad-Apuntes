---
dia: 2024-08-26
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Enlace
  - carrera/ingeniería-en-informática/redes/Capa-de-Enlace
  - nota/facultad
aliases:
  - MDC
---
# Definición
---
Consiste en agrupar en contenedores pequeños y cercanos entre sí miles de [[Host|hosts]], agrupados en decenas de racks. Múltiples contenedores son a su vez interconectados entre ellos y con el [[Internet|internet]]. Estos contenedores ya son prefabricaos y son difíciles de mantener, por lo que su rendimiento se degradara lentamente, pero continuaran operando. Una vez la tasa de errores pasa cierto umbral, son removidos y reemplazados por uno nuevo

Con MDC tendremos dos tipos de redes, las redes internas de los contenedores, y la [[Red|red]] central que conecta los contenedores. El diseño de la red central es un problema desafiante, ya que consiste en conectar múltiples contenedores, cada uno con miles de hosts

Cuando se usan topologías altamente interconectadas, uno de los mayores problemas es diseñar los algoritmos de ruteo entre los switches. Existen múltiples posibilidades como random [[Routing|routing]], o dejar que los hosts se encarguen de inteligentemente dirigir tráfico a los switches