---
dia: 2024-09-09
tags:
  - carrera/ingeniería-electrónica/embebidos/Microcontroladores-de-32-bits
  - nota/facultad
aliases:
  - Minimum viable product
  - MVP
referencias:
  - "238"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En desarrollo de producto, el producto viable mínimo (MVP) es un producto con suficientes características para satisfacer a los clientes iniciales, y proporcionar retroalimentación para el desarrollo futuro<sup><a href="#ref-238" style="color: inherit; text-decoration: none;">[238]</a></sup> 

## En sistemas embebidos
---
Cuando un ingeniero tiene que diseñar una nueva solución [[System on a Chip|SoC]] y ha considerado las cuestiones relevantes destacadas en la sección anterior según lo que se requiere que haga el producto, debe pensar en los elementos clave que se utilizarán y/o desarrollarán

En primer lugar, suele ser bueno establecer un primer sistema funcional como [[Prototipado|prototipo]] para verificar la funcionalidad del dispositivo esperado

Si es demasiado trabajo diseñar una [[Placa de circuito impreso (PCB) (Printed Circuit Board)|PCB]] específica para el producto, es posible optar por un sistema basado en [[Computers on modules|CoM]] o [[System on Module|SoM]]

Para comenzar el diseño o la integración de un nuevo sistema, un ingeniero debe hacer preguntas sobre
* Potencia informática necesaria
    * Dependerá en gran medida de los [[Algoritmo|algoritmos]] utilizados en la [[Aplicación|aplicación]] y de cualquier unidad/dispositivo adicional requerido
* Energía eléctrica necesaria
    * Dependerá de la aplicación, dónde se ubicará el sistema y qué fuentes de energía estarán disponibles
    * Uso de energía de la batería o de la red eléctrica/alimentación externa
* Ancho de banda de los datos a gestionar y/o transferir
    * El número de operaciones por segundo involucradas en la comunicación
* Comunicaciones necesarias
    * Inalámbrico
        * [[Bluetooth|Bluetooth]], [[Wireless Fidelity|WiFi]], [[Long Range (LoRa)|LoRa]], [[SigFox|SigFox]], [[Zigbee|Zigbee]], [[Arquitectura de la red celular|GSM]], [[Arquitectura de la red celular con 3G|3G]], [[Arquitectura de la red celular con 4G|4G]], entre otros
    * Cableado
        * [[Ethernet|Ethernet]], Bus CAN, USBxx, entre otros
* Tipo y tamaño de memoria
    * La que sea necesaria o se podría esperar
* Conectores de extensión
    * Estándar
        * [[Peripheral Component Interconnect Express (PCI Express) (PCIe) (PCI-e)|PCIe]], [[Versa Module Europa (Versa Module Eurocard) (VME)|VME]], entre otros
    * Serie
        * [[Universal Asynchronous Receiver-Transmitter (UART)|UART]], [[Universal Serial Bus (USB)|USB]], entre otros
    * Propietarios


# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```