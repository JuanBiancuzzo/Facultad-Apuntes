---
dia: 2024-04-18
tags:
  - ingeniería-en-informática/redes/Capa-de-aplicación
  - nota/facultad
  - ingeniería-electrónica/redes/Capa-de-aplicación
---
# Definición
---
En esta [[Arquitectura de aplicaciones|arquitectura]] hay un [[Host|host]] que siempre esta, llamado [[Servidor|servidor]], que sirve request de otros host que llamaremos clientes.

Notemos que los clientes no tienen forma directa de comunicarse entre ellos sino que tiene que ser por medio de esa entidad centralizada llamada servidor.

Una característica importante de esta arquitectura el servidor tiene una [[Internet Protocol Address|dirección IP]] conocida y fija, esto es porque los clientes tienen que saber a donde comunicarse.

En esta arquitectura, es difícil que un solo servidor pueda soportar todos los request de los clientes, por ese motivo aparecieron los [[Data center|data centers]], que pueden tener un número grande de host que usualmente los usan para obtener muchas [[Máquina virtual|máquinas virtuales]]

## Escalabilidad
---
Denotemos $u_s$ la tasa de subida del servidor, $u_i$ la taza de subida del cliente $i$, y $d_i$ la taza de descarga del cliente $i$. Considerando un archivo de tamaño $F$ y un número $N$ de clientes. El tiempo de distribución es el tiempo que toma distribuir el archivo a todos los clientes

El tiempo mínimo será la máxima entre el tiempo de subida máximo del servidor a todos los clientes, y el tiempo de descarga mínimo de los clientes $$ DCS = \max \set{ N ~ F ~u_s, F ~ d_{min} } $$
El tiempo de distribución aumenta linealmente con el número de clientes