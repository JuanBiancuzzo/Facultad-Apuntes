---
dia: 2024-08-26
tags:
  - ingeniería-en-informática/redes/Capa-Física-Inalámbrica
  - nota/facultad
  - ingeniería-electrónica/redes/Capa-Física-Inalámbrica
---
# Definición
---
Un [[Capa física inalámbrica|host]] se conecta con otro host a través de un enlace de comunicación inalámbrico. Las distintas tecnologías difieren en diversos parámetros, como el área de cobertura o la tasa de transmisión ^4cfb60

## Características
---
Podemos encontrar numerosas diferencias importantes entre un [[Acceso a una red por cable|enlace]] y uno inalámbrico

* Decreasing Signal Strength
    * La radiación electromagnética es atenuada a medida que atraviesa materia (por ejemplo, una pared). Esta reducción en la fuerza de la [[Señal|señal]] se conoce como path loss
* Interference from Other Sources
    * Las centrales de radio que transiten a la misma frecuencia interfieren unas con otras. Además, el ruido electromagnético del ambiente (un microondas, un motor) también puede ocasionar interferencia
* Multipath Propagation
    * Esta ocurre cuando porciones de ondas electromagnéticas son reflejadas en distintos objetos, causando que tomen caminos distintos entre el remitente y el receptor

Esto sugiere que la corrupción de paquetes es frecuente en las redes inalámbricas. Debido a esto, los protocolos inalámbricos de [[Capa de Enlace|capa de enlace]] emplean no solo poderosas técnicas de corrección de errores, sino también envío confiable a nivel de enlace

Desde el lado del receptor, un host recibirá una combinación de una vieron degradada de la señal transmitida originalmente y ruido de fondo del ambiente

* El remitente puede incrementar el [[Signal to noise|SNR]] al incrementar la fuerza de transmisión. Luego, puede reducir el [[Bit error rate|BER]] al incrementar la fuerza de transmisión. Esta técnica pierde la utilidad a partir de cierto límite, ya que también hay desventajas asociadas a incrementar la potencia
    * Se debe utilizar más [[Energía|energía]] para enviar información
    * La señal enviada puede interferir con otras señales
* La decisión de la técnica de modulación dependerá de la máxima tasa de errores permitida. Esta característica dio surgimiento a la siguiente y final
* Para los casos de dispositivos móviles, el SNR (y entonces el BER) puede cambiar en respuesta al desplazamiento o cambios en el entorno. Se utiliza una selección dinámica de técnicas de modulación para adaptarse mejor a las condiciones dadas

Existen múltiples diferencias más entre las conexiones alámbricas y las inalámbricas. El llamado hidden terminal problem ocurre cuando dos estaciones $A$, $B$ no se escuchan entre sí debido a la obstrucción de, por ejemplo, una montaña. Pero sus transmisiones hacia una estación compartida $C$ si interfieren. Las estaciones no estarán al tanto de la interferencia. Esta es una colisión indetectable

Otro escenario de colisiones indetectables es el de la atenuación de las señales a medida que se propagan por el medio. La señal de dos estaciones $A$, $B$ pueden dispersarse antes de llegar a la otra estación, pero interferir en el envío a una estación intermedia $C$