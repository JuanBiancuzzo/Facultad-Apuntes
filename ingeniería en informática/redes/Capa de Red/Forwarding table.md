---
dia: 2024-06-07
aliases:
  - Tabla de routeo
tags:
  - ingeniería-en-informática/redes/Capa-de-Red
  - nota/facultad
  - carrera/ingeniería-electrónica/redes/Capa-de-Red
---
# Definición
---
En la versión más simple, una tabla de ruteo tiene dos columnas

Cuando se recibe un [[Paquete|paquete]], se debe comparar con las entradas de la tabla para definir a que [[Socket|puerto]] de salida debe ir. Por ejemplo, `12.168.0.1/24`, donde el `24` es la [[Classless Interdomain Routing|mascara]]

La tabla guarda el prefijo y una mascara asociada a ese prefijo, entonces podemos decir que una entrada coincide con una fila de la tabla si, y solo si

$$ \text{Dirección destino} ~ \& ~ \text{Mascara} == \text{Prefijo} $$

El paquete deberá ser enviado a la [[Router interface|interfaz]] indicada por la entrada de la tabla con el prefijo más restrictivo (más largo) que coincide. Esto se debe a que si una subred particular está incluida en otra, entonces debe enviarle el paquete a la particular

## Default Gateway
---
Es el puerto configurado para cualquier para cualquier entrada que no coincide con las tabla, se denota con `0.0.0.0./0`, esto se debe a que, por lo que vimos recién, cualquier dirección IP coincidirá con esta entrada, pero no la preferirá por sobre cualquier otra entrada, ya que es de longitud mínima

## Optimización
---
Existen dos procedimientos para optimizar tablas
1. [[Address aggregation|Agregación de entradas]]
2. [[Contención de entradas|Contención de entradas]]