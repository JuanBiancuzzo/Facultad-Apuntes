---
dia: 2024-08-22
tags:
  - redes/Capa-de-Enlace
  - nota/facultad
  - protocolos/protocolo-de-internet
---
# Definición
---
Las operaciones de cada nodo en el canal son simples
* Si un nodo tiene un [[Paquete|paquete]] para enviar, esperará hasta el inicio del próximo slot para transmitir el paquete completo en este slot
* Si ocurre una colisión, este retransmitirá el paquete con [[Probabilidad|probabilidad]] $p$ en cada subsecuente slot disponible, hasta que se transmita sin colisión
* Si no ocurre una colisión, entonces puede prepararse para enviar el próximo paquete, de ser necesario

Si hay un único nodo transmitiendo, este transmitirá [[Información|información]] a la tasa completa, solucionando el problema de los protocolos de particionamiento de canal. Es un [[Protocolo|protocolo]] altamente descentralizado

Consideraremos un successful slot cuando un solo nodo transmite un mensaje en este slot. La eficiencia del protocolo se define como la fracción a largo plazo de los successful slots. Si suponemos que todos los nodos siempre tienen un paquete para enviar, entonces la probabilidad de envío un successful slot será de $N ~ p(1-p) ~ (N - 1)$. Debemos hallar el $p$ que maximiza la expresión. Para $N$ tendiendo a infinito, la probabilidad de un slot exitoso será de únicamente $\frac{1}{e} = 0.37$. Se está utilizando correctamente un tercio de la [[Bandwidth|banda ancha]] total