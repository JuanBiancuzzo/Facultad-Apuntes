---
dia: 2026-11-03
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 772
etapa: empezado
nombre: Transacciones - Diseño
---
# Enunciado
---
Estamos diseñando un sistema de reservas de turnos médicos en línea para una red de clínicas. Este sistema debe soportar transacciones concurrentes realizadas por múltiples pacientes que consultan y reservan turnos en tiempo real. Las transacciones incluyen operaciones de lectura para consultar la disponibilidad de turnos con los médicos y operaciones de escritura para confirmar la reserva de un turno

El sistema enfrenta un alto nivel de contención de datos durante ciertos horarios pico (como las primeras horas de la mañana), ya que muchos pacientes intentan acceder y reservar los mismos turnos disponibles de forma simultánea

El objetivo es seleccionar un algoritmo de control de concurrencia que garantice la consistencia de los datos, minimice los conflictos y optimice el rendimiento del sistema bajo estas condiciones

1. Describir los siguientes algoritmos de control de concurrencia ^parte-1
	* [[Commit de 2 fases (Two-Phase Locking) (2PL)|Two-Phase Locking (2PL)]] 
	* Timestamp
	* Control de concurrencia optimista
2. Analizar las ventajas y desventajas de cada uno de estos algoritmos en el contexto del sistema de reservas de turnos médicos descrito, teniendo en cuenta sus características de uso ^parte-2
3. Basándose en el análisis anterior, recomendar el algoritmo de control de concurrencia más adecuado para este sistema. Justificar la elección detalladamente, teniendo en cuenta el nivel de concurrencia, la necesidad de mantener la consistencia de los datos y el impacto en el rendimiento del sistema durante las horas pico ^parte-3

# Resolución
---
> [!ejercicio] ![[colección/ejercicios/Ejercicio N° 772#^parte-1]]



> [!ejercicio] ![[colección/ejercicios/Ejercicio N° 772#^parte-2]]



> [!ejercicio] ![[colección/ejercicios/Ejercicio N° 772#^parte-3]]
