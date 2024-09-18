---
dia: 2024-08-26
tags:
  - redes/Redes-de-computadoras
  - nota/facultad
aliases:
  - VLAN
---
# Definición
---
Usualmente, las redes switched [[Local Area Network|LAN]] son configuradas jerárquicamente, donde cada grupo contiene su propia switched LAN que es a su vez conectada con otros grupos a través de una jerarquía de switches. Podemos identificar tres inconvenientes principales de esta configuración

* Lack of Traffic Isolation
    * Aunque las jerarquías localizan el tráfico del grupo en un único switch, el tráfico de [[Internet Protocol Versión 4#Broadcast|broadcast]] debe aún recorrer toda la red completa. Limitar este tráfico incrementaría el rendimiento de la red. Para solucionar esto podríamos reemplazar el switch central (que conecta los switches de los distintos departamentos) con un [[Router|router]]
* Inefficient use of Switches
    * Si aumenta el número de grupos, pero se reduce el número de hosts por grupo, estaremos ante una situación donde o bien podríamos tener muchos switches y tener un uso ineficiente de los mismos, o bien tener un único switch pero sin proveer aislamiento de tráfico
* Managing Users
    * Si un empleado se mueve de un grupo al otro, se debe modificar el [[Acceso a una red por cable|cableado físico]] para reflejar este cambio en la red

Afortunadamente, estas dificultades pueden ser resueltas utilizando un Virtual Local Area Network (VLAN). Un switch que permite VLAN permite que múltiples VLAN sean definidas por sobre una única LAN física. En una port-based VLAN, los puertos del switch central son distribuidos entre los distintos grupos por el administrador de red (cada [[Socket|puerto]] es asociado a una VLAN distinta)

* Cuando se realiza un broadcast, el switch limita el broadcast a únicamente los puertos de ese grupo
* Podremos agrupar todos los switches en un solo switch central, separando los grupos virtualmente
* Si un empleado se mueve a otro grupo, simplemente debe reconfigurar a qué grupo está asociado su puerto designado en el switch

Al aislar completamente los grupos, nos encontramos con un nuevo problema. Para resolverlo, se puede conectar un puerto de switch a un router externo y configurar para que este puerto este asociado a todos los grupos. De esa forma, para enviar un [[Paquete|paquete]] entre dos grupos, deben pasar primero por el router externo antes de ser dirigido a otro grupo. Afortunadamente, existen dispositivos que contienen internamente un VLAN switch como un router

¿Qué pasa si los dos grupos están situados en distintos edificios? En ese caso se utiliza la técnica de VLAN trunking. Se designa un puerto, en especial en cada switch, asociado con todos los grupos, que se utilizara para conectar ambos switches. Cuando se quiere enviar un paquete a un grupo externo, se enviara a este puerto, el cual utilizará el VLAN tag (campo del header de [[Ethernet]]) para determinar a qué grupo reenviar el paquete

En las [[Media Access Control Address|MAC]]-based VLAN, el administrador de red especifica que conjunto de direcciones MAC le pertenecen a cada grupo. También se permite que las redes VLAN se extiendan entre routers de [[Internet Protocol Address|IP]], permitiendo islas de LAN interconectadas a través del mundo