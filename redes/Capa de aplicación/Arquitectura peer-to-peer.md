---
dia: 2024-04-18
aliases:
  - P2P
tags:
  - redes/Capa-de-aplicación
  - nota/facultad
---
# Definición
---
En esta [[Arquitectura de aplicaciones|arquitectura]] hay una mínima o nula dependencia en [[Servidor|servidores dedicados]] en [[Data center|data centers]]. Esta arquitectura usa directamente las comunicaciones entre los pares de [[Host|host]] que llamamos peers

Los peers son dueños del [[Servicio|servicio]] que provee, y son las computadoras que controlan los usuarios

Esta arquitectura tiene el beneficio de ser auto escalable, e incluso mientras más host mejor es la experiencia. También son eficientes en sus costos ya que no necesitan los costos generados por conexiones a servidores

Por otro lado, también hay problemas de seguridad ya que no hay un lugar centralizado para asegurar ninguna política más allá de la comunicación y la funcionalidad de actores buenos en la [[Red|red]]

## Escalabilidad
---
Denotemos $u_s$ la tasa de subida del servidor, $u_i$ la taza de subida del cliente $i$, y $d_i$ la taza de descarga del cliente $i$. Considerando un archivo de tamaño $F$ y un número $N$ de clientes. El tiempo de distribución es el tiempo que toma distribuir el archivo a todos los clientes

Para una arquitectura P2P, cuando un cliente recibe información, puede comenzar a transmitirla a otros clientes. Ahora, la tasa de subida del archivo es la del servidor junto a la de cada uno de los clientes. Mientras que el servidor solo tiene que subir el archivo al menos una vez $$ DP2P = \max \Set{ F ~ u_s, F ~ d_{min}, N ~ F ~ (u_s + \sum u_i) } $$
Vemos que el aumento no es lineal, ya que a medida que aumenta $N$ , también aumenta la capacidad de la red