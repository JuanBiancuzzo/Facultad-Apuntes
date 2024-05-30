---
dia: 2024-04-19
materia: redes
capitulo: 3
aliases:
  - DoS
  - DDoS
  - Distributed Denial of Service
---
### Definición
---
Los ataques [[Denial of Service|DoS]] distribuidos controlan varios orígenes y hace que cada uno de ellos bombardee el objetivo con [[Tráfico|tráfico]]

Vuelve inutilizable una [[Red|red]], [[Host|host]] o cualquier otro elemento. Puede clasificarse en una de las 3 categorías
* Ataque de vulnerabilidad
	* Envío de [[Paquete|mensajes]] especialmente diseñados a una [[Aplicación|aplicación]] o [[Sistema operativo|sistema operativo]] vulnerable. Puede detener el servicio o sufrir un fallo catastrófico
* Inundación del [[Bandwidth|ancho de banda]]
	* Envía gran cantidad de [[Paquete|paquetes]] al host objetivo de modo que inunda el [[Capa de enlace|enlace]] de acceso al objetivo, no llegan los paquetes legítimos
* Inundación de conexiones
	* Establece gran número de conexiones con el host objetivo, puede llegar a atascarse impidiendo que acepte las conexiones legítimas

