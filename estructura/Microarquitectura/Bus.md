---
dia: 2024-08-29
tags:
  - estructura/Microarquitectura
  - nota/facultad
aliases:
  - Solución del problema de conexionado
---
### Definición
---
Cuando quiero conectar muchos dispositivos, no pueden estar todos conectados con la [[Procesador|CPU]] directamente. Para resolver esto, se utilizando buses

Lo más común es la utilización de tres líneas
* Línea de datos
    * Por aquí se envían los datos
* Línea de direcciones
    * Por aquí se envía la dirección con la que se está comunicando la CPU
* Línea de control
    * Por aquí índica si los datos son de entrada o de salida

De esta forma, todos los dispositivos se comunican con el procesador a través del Bus

Este sistema de buses permite conectar componente de una [[Computadora|computadora]], así como varias computadoras entre sí. Los componentes electrónicos dentro de un procesador también interactúan con el bus

![[Diagrama de Bus.png]]

En este sistema, los [[Puerto Input-Output|dispositivos de entrada y salida]] están mapeados en [[Memoria|memoria]]. En caso de no ser así, se deberá usar un bus distinto para comunicarse con ellos