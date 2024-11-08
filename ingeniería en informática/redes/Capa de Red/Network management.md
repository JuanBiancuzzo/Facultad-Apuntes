---
dia: 2024-08-18
tags: 
 - ingeniería-en-informática/redes/Capa-de-Red
 - nota/facultad
---
# Definición
---
El network management incluye el despliegue, integración, coordinación del [[Hardware|hardware]], [[Software|software]], y elementos humanos a monitorear, verificar, consultar, configurar, analizar, evaluar y controlar la red y los recursos necesarios para alcanzar un rendimiento operacional y en tiempo real, y los servicios de calidad necesarios a un costo razonable

## Manejo de servidores
---
El manejo de [[Servidor|servidores]] es una aplicación, supervisada por un humano, corriendo una estación de manejo de red centralizada en un centro de operaciones de red. El servidor controla la colección, el procesado, el análisis, y la visualización de la información del manejo de la [[Red|red]]. Aquí se inician las acciones necesarias para el control de comportamiento de la red

## Manejo de dispositivos
---
Un managed device es una pieza de equipamiento de red, incluyendo a su software, que reside en una red manejada. Puede ser un [[Host|host]], [[Router|router]], [[Packet switches|switch]], [[Middlebox|middlebox]], modem, thermometer, o cualquier otro dispositivo conectado a la red. Los managed objects son las actuales piezas de hardware dentro de un managed device, y puede haber múltiples por cada dispositivo

## Manejo de objetos
---
Cada managed object dentro de un managed device tiene información, la cual es recolectada en un [[Management information base|management information base (MIB)]]. Estos valores están disponibles para el servidor. Los objetos MIB son especificados en un lenguaje de descripción de datos llamado [[Structure of Management Information|Structure of Management Information (SMI)]]. Los objetos MIB son reunidos en módulos MIB

## Manejo de agentes
---
Dentro de cada managed device hay un network management agent. Un [[Proceso|proceso]] ejecutándose que se comunica con el servidor, tomando acciones locales debajo del comando y control del servidor

## Manejo de protocolos
---
El network management protocol es ejecutado entre el servidor y los agents para permitirle al servidor consultar y establecer la información del dispositivo. Los agents también pueden utilizar el [[Protocolo|protocolo]] para informarle al servidor de eventos excepcionales. El protocolo no maneja la red, sino que provee una forma para que los administradores lo hagan