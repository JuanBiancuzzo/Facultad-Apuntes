---
dia: 2024-08-27
tags:
  - carrera/ingeniería-electrónica/redes/Capa-Física-Inalámbrica
  - carrera/ingeniería-en-informática/redes/Capa-Física-Inalámbrica
  - nota/facultad
aliases:
  - 802.15.4
vinculoFacultad:
  - tema: Capa Física Inalámbrica
    capitulo: 6
    materia: Redes
    carrera: Ingeniería en informática
---
# Definición
---
Una segunda [[Red|red]] personal, estandarizado por el [[Institute of Electrical and Electronics Engineers (IEEE)|IEEE]], es el estándar 802.15.4, conocido como Zigbee. Mientras que [[Bluetooth]] provee un reemplazo del cable a una tasa de megabits, el enfoque de esta red es el de una red incluso de menor costo y poder. No todos los dispositivos necesitan altas tasas de transferencia, por lo que este estándar es utilizado en dispositivos pequeños y sin necesidad de altas tasas de transferencia

Existen dos tipos de nodos en una red de Zigbee. Los reduced-function devices operan como slaves ante el control de un único full-function device. Estos funcionan de forma similar a Bluetooth. Además, los full-function device de distintas redes pueden conectarse para formar una red completa donde full-function devices se envían [[Frame|frames]] entre sí

Este [[Protocolo|protocolo]] utiliza acknowledgements similares a los de [[Wireless Fidelity|802.11]], y protocolos de [[Carrier Sense Multiple Access|CSMA]] con [[Binary exponential backoff|binary exponential backoff]]. Además, permite la reserva de timeslots fijos y garantizados, similar a [[Data Over Cable Service Interface Specifications|DOCSIS]]

Estas redes dividen al tiempo en timeslots activos e inactivos. Durante los timeslots inactivos, todos los dispositivos duermen, para ahorrar energía. Durante los timeslots activos, se puede enviar información a través de CSMA. Algunos de los time slots serán reservados por el controlador para algunos dispositivos seleccionados