---
dia: 2024-08-22
tags:
  - redes/Capa-de-Enlace
  - nota/facultad
  - protocolos/protocolo-de-internet
aliases:
  - Carrier Sense Multiple Access con detección de colisiones
  - CSMA con detección de colisiones
  - CSMA with collision detection
  - CSMA/CD
---
# Definición
---
La segunda regla permite detectar las colisiones y reducir significativamente el tiempo perdido. Para determinar el tiempo de espera antes de volver a probar de transmitir, se utiliza el [[Algoritmo|algoritmo]] de binary exponential backoff

Cuando se retransmite un [[Paquete|paquete]] que ya experimento $n$ colisiones, el nodo toma un valor de $k$ aleatorio entre $0$ y $2n - 1$. Cuantas más colisiones ocurran, más tiempo de espera habrá. Para [[Ethernet]], el tiempo de espera será de $512 ~ K$ bit times. (es decir, el tiempo necesario para enviar $512 ~ K$ bits)

Debido al tiempo de espera creciente por colisiones, este [[Protocolo|protocolo]] no sirve para aplicaciones de tiempo real

## Eficiencia
---
Cuando únicamente hay un nodo enviando [[Información|información]], la tasa de envío será la máxima. Por el otro lado, si transmiten muchos nodos a la vez, la eficiencia será mucho menor

Denotemos $d_{prop}$ como el máximo tiempo que le toma a una [[Señal|señal]] propagarse entre dos adaptadores, y $d_{trans}$ el tiempo que toma en transmitir un paquete de tamaño máximo. Entonces la eficiencia tendrá una forma aproximada a la siguiente $$ \text{Eficiencia} = 1 + \frac{d_{prop}}{d_{trans}} $$
Si el tiempo de propagación es muy chico, la eficiencia tenderá a cero. Esto tiene sentido, ya que no habrá nodos transmitiendo a la vez. Si el [[Tiempo de transmisión|tiempo de transmisión]] es muy grande, entonces una vez que un nodo obtiene control del canal, lo usara por mucho tiempo. De esta forma obtendremos un alto porcentaje de canales utilizado exitosamente