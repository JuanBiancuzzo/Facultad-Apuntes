---
dia: 2024-08-31
tags:
  - ingeniería-en-informática/redes/Capa-Física-Inalámbrica
  - nota/facultad
  - ingeniería-electrónica/redes/Capa-Física-Inalámbrica
---
# Definición
---
El enfoque mostrado previamente sufre una ineficiencia conocida como [[Triangle routing problem (Triangulamiento)|triangle routing problem]]. Los [[Paquete|paquetes]] se envían primero a la [[Red|red]] local, luego a la red extranjera, y finalmente al nodo móvil

Este enfoque soluciona el problema, ya que el correspondent agent primero aprende la dirección [[Agent Discovery in Mobile Internet Protocol#^COA|COA]] del nodo móvil, y le envía paquetes directamente. Para aprender esta dirección, puede inicialmente realizar una consulta al agente local para aprender la dirección. Al igual que con el agente extranjero, el correspondiente puede manualmente realizar estas consultas, sin necesidad de que lo haga el correspondent agent

Esto, trae dos dificultades importantes
* Se necesita un mobile-user location protocol, para que el correspondiente consulte a la red local la dirección temporal del nodo
* Cuando un nodo móvil se mueve de una red extranjera a otra, como se envían los paquetes a la nueva red. Una solución es la de adoptar un [[Protocolo|protocolo]] para notificarle al correspondiente el cambio de COA. Sin embargo, otra solución alternativa la utilizada en la realidad

Denominaremos anchor foreign agent al agente la red en la que el nodo móvil se encontraba originalmente. Cuando el nodo móvil cambia de red, este registra con el nuevo agente, y el nuevo agente le provee al anchor foreign agent de la dirección COA del nodo móvil

Cuando el anchor foreign agent recibe un datagrama para el nodo móvil, entonces puede reencapsularlo y enviárselo al nodo móvil utilizando su nuevo COA