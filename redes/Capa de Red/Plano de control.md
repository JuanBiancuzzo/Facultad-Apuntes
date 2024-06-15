---
dia: 2024-06-05
materia: redes
capitulo: 4
aliases:
  - Control plane
---
### Definición
---
El rol principal del control plane es el de coordinar estos envíos para que los [[Paquete|datagramas]] sean transferidos end-to-end, a lo largo de los caminos de [[Router|routers]] entre los [[Host|hosts]] en comunicación

#### Método tradicional
---
Los [[Routing|routing algorithms]] determinan el contenido de la [[Forwarding table|forwarding table]]. Para hacerlo, se comunican con los [[Algoritmo|algoritmos]] de otros routers intercambiando routing information de acuerdo a un [[Routing protocol|routing protocol]], computado así su propia tabla

#### Método con SDN
---
Otro enforque utilizado para estos algoritmos es el de utilizar un controlador remoto, el cual calculará y distribuirá los forwarding tables a todos los routers. En este caso, los routers únicamente realizan la operación de [[Forwarding|forwarding]]

Estos controladores son implementados en un [[Data center|data center]] remoto con alta confiabilidad y redundancia, y puede ser administrado por un [[Internet Service Providers|ISP]] o alguna otra organización. Para la comunicación entre los elementos, utilizaremos mensajes conteniendo forwarding tables y otras piezas de routing para comunicar los controladores con los routers

Se dice que este enfoque es de [[Software-defined networking|Software-defined networking (SDN)]], debido a que las tablas computadas y la interacción entre routers se implementa en software