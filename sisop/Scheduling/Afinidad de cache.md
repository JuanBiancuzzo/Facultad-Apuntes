---
dia: 2023-11-19
materia: sisop
capitulo: 4
---
### Definición
---
El concepto de afinidad de cache se tiene que tener en cuenta al armar un [[Scheduler|planificador]] con [[Arquitectura multiprocesador|multiprocesadores]] con [[Cache|cache]].

Cuando un [[Proceso|proceso]] corre sobre una [[Procesador|procesador]] en particular va construyendo un cachito del estado de si mismo en las cache de esa [[Procesador|CPU]]. 

Entonces la próxima vez que el proceso se ejecute sería bastante interesante que se ejecutara en la misma CPU, ya que se va a ejecutar más rápido si parte de su estado esta en esa CPU.

Si, en cambio, se ejecuta el proceso en una CPU diferente cada vez, el rendimiento del proceso va a ser peor, ya que tendrá que volver a cargar su estado o parte del mismo cada vez que se ejecuta.

Por ende un planificador multiprocesador debería considerar la afinidad de cache cuando toma sus decisiones de [[Políticas de planificación|planificación]], tal vez prefiriendo mantener a un proceso en un determinado CPU si es posible