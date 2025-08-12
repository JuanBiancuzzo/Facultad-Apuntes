---
dia: 2024-08-22
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Enlace
  - carrera/ingeniería-en-informática/redes/Capa-de-Enlace
  - investigación/ciencias-de-la-computación/Networking/Protocolos
  - investigación/networking/Protocolos
  - investigación/protocolos/protocolo-de-internet
  - nota/facultad
  - nota/investigacion
aliases:
  - MPLS
vinculoFacultad:
  - tema: Capa de Enlace
    capitulo: 5
    materia: Redes
    carrera: Ingeniería en informática
---
# Definición
---
El objetivo no era abandonar la infraestructura centrada en direcciones de destino en [[Internet Protocol Address|IP]], sino selectivamente etiquetar datagramas y permitir a los routers reenviarlos utilizando etiquetas de tamaño fijo siempre que sea posible

Los frames de MLPS agregan un pequeño header entre los headers de IP y los headers de link-layer. Entre ellos están: Una etiqueta, tres bits reservados para uso experimental, un único bit 'S', que es utilizado para indicar el final de una serie de stacked MPLS headers, y un [[Internet Protocol Versión 4#^b40fdb|TTL]]

Los paquetes pueden ser enviados únicamente entre routers MPLS capable, usualmente conocido como label-switched [[Router|router]]

La principalmente ventaja de MPLS subyace en las nuevas capacidades de manejo de tráfico que estas ofrecen. El administrador de [[Red|red]] puede configurar que distintos flujos viajen por distintos caminos, aunque estos tengan la misma dirección de destino. Esto es a partir de las etiquetas de MPLS

A pesar de esto, MPLS siempre fue usado principalmente para la implementación de las conocidas [[Virtual Private Network|VPN]]