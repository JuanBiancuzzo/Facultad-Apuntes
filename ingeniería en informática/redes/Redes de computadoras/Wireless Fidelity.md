---
dia: 2024-04-22
aliases:
  - WiFi
  - "802.11"
tags:
  - carrera/ingeniería-electrónica/redes/Capa-Física-Inalámbrica
  - carrera/ingeniería-electrónica/redes/Redes-de-computadoras
  - carrera/ingeniería-en-informática/redes/Capa-Física-Inalámbrica
  - carrera/ingeniería-en-informática/redes/Redes-de-computadoras
  - nota/facultad
---
# Definición
---
En entornos tanto corporativos como domésticos, se utiliza una [[Local Area Network|red de área local (LAN)]] para conectar un sistema de [[Host|hosts]] al [[Router|router]]. Los usuarios inalámbricos transmiten/reciben [[Paquete|paquetes]] hacia/desde un punto de acceso que está conectado a la [[Red|red]], que a su vez se conecta a la [[Acceso a una red por cable|red cableada]]

Existen muchos estándares para esta clase, todos ellos comparten algunas características comunes. Todos utilizan el mismo [[Protocolo|protocolo]] de acceso al medio [[Carrier Sense Multiple Access with collision avoidance|CSMA/CA]]. Todos reducen su tasa de transmisión para llegar a mayores distancias, y todos son backwards compatible. La mayor diferencia radica en la [[Capa física|capa física]]

Existen dos rangos frecuencias principales, 2.4 GHz y 5.8 GHz. Las redes 5.8 tienen menor rango para un nivel de [[Potencia|potencia]] dado, y sufren más de propagación multipath. Los estándares más recientes utilizan múltiples antenas (tanto receptoras como emisoras), y utilizan antenas inteligentes para direccionar las mismas en dirección del receptor. Esto redujo la interferencia e incremento la [[Distancia euclidiana|distancia]] alcanzada para una tasa dada

## Arquitectura
---
El bloque fundamental de construcción de la arquitectura de 802.11 es el [[Basic Service Set (BSS)|basic service set (BSS)]]. Este contiene una o más estaciones inalámbricas, y una estación base central, conocida como [[Access Point (AP)|access point (AP)]]. En una red típica de hogar, hay un AP y un router, típicamente integrados en la misma unidad

Las [[Local Area Network|redes LAN inalámbricas]] que despliegan un access point son frecuentemente referidas como infrastructure wireless LAN. Las estaciones, a su vez, pueden concentrarse con otras estaciones formando una [[Red descentralizada|red descentralizada (ad hoc)]]

### Channels and associations
---
Cuando un administrador de red instala un access point, deben configurarse dos parámetros. El Service Set Identifier (SSID), y el número de canales. Las redes de 2.4 GHz operan entre 2.4 GHz y 2.4835 GHz, definiendo 11 canales parcialmente superpuestos. Dos canales no se superponen si distan a 4 o más canales.

Una jungla Wi-Fi es una cualquier punto donde se reciben suficientemente fuertes, señales de dos o más access points. Cuando un dispositivo se encuentra en una jungla, para obtener acceso al [[Internet|internet]], debe asociarse con exactamente uno de estos AP. Asociarse implica crear un cable virtual entre él y dicho AP

Para que los dispositivos conozcan a un dado AP, este periódicamente envía beacon frames, que incluyen el SSID de la red y una [[Media Access Control Address|dirección MAC]]. El dispositivo escanea los 11 canales para hallar las direcciones Wi-Fi cercanas. Este proceso se conoce como passive scanning. Un dispositivo también puede realizar active scanning, al enviar un probe [[Frame|frame]] que será recibido por todos los access points en el rango. Los access points responderán con un probe request frame

Una vez seleccionado el AP al cual desea conectarse, enviara un association request frame a dicho AP. Este responderá con un association response frame. Este intercambio es necesario incluso tras un escaneo activo, debido a que los AP no saben con cuál AP deseara conectarse, luego del escaneo. Una vez recibida la confirmación, el dispositivo puede pedir una [[Internet Protocol Address|dirección IP]] utilizando el protocolo [[Dynamic Host Configuration Protocol|DHCP]]

En algunas situaciones, un host necesitará autenticarse para crear una conexión. Existen diversas formas de realizarlo. Un enfoque podría ser utilizando la dirección MAC del dispositivo, otro enfoque, más utilizado, podría ser la utilización de usuarios y contraseñas. En general, esta autenticación se realiza a partir de un [[Servidor|servidor]] de autenticación, con el protocolo [[Remote Authentication Dial-In User Service|RADIUS]]