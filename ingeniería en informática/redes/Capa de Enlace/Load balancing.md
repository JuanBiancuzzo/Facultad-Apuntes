---
dia: 2024-08-22
tags:
  - carrera/ingeniería-en-informática/redes/Capa-de-Enlace
  - nota/facultad
  - carrera/ingeniería-electrónica/redes/Capa-de-Enlace
aliases:
  - Leyer-4 switch
---
# Definición
---
Cada aplicación tiene asociada una [[Internet Protocol Address|IP]] pública que es recibida por el [[Data center|data center]]. Para soportar peticiones de clientes externos, las peticiones son primero dirigidas a un load balancer que tiene el trabajo de tomar las peticiones y repartirlas entre los hosts de forma distribuida. En grandes data centers, puede haber múltiples load balancers, cada uno encargado de una aplicación distinta. Cuando el [[Host|host]] termina de resolver la petición, este envía la respuesta al load balancer el cual le devolverá la respuesta al cliente

Estos load balancers suelen ser referidos como layer-4 switch debido a que toma decisiones basadas en el [[Socket|puerto]] de destino y a la dirección de destino. También realiza funciones de [[Network Address Translation|NAT]], traduciendo las direcciones de IP externas en direcciones de IP internas al data center