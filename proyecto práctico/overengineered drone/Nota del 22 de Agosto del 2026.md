---
dia: 2026-08-22
tags:
  - proyecto-práctico/Overengineered-drone
  - nota/proyecto
---
# Progreso
---
Definimos los componentes que utilizaremos en el drone
* El [[investigación/placa de Desarrollo/Microcontrolador|microcontrolador]]  utilizaremos el [[investigación/placa de Desarrollo/ESP 32/ESP 32|ESP 32 WROOM32]]
	* Puede ser que necesitemos cambiarlo en el caso que no tenga $4$ señales [[ingeniería electrónica/embebidos/Estrategias de control de periféricos/Modulación por ancho de pulsos|PWM]]
* Los [[colección/componentes/actuadores/Actuadores|actuadores]] vamos a usar $4$ motores 3.7Vdc 50000rpm 7x16mm
	* Seguramente necesario un [[ingeniería electrónica/circuitos 2/Fuentes de alimentación lineales/Regulador de tensión|regulador lineal]] (1 o 2 para los motores de 3.7V, en función del consumo de [[ingeniería en informática/fisica 2/Circuitos de corrientes no dependientes del tiempo/Corriente continua|corriente]] de los motores, se debe testear y 1 para el micro 3.3V)
	* Como [[ingeniería electrónica/embebidos/Estrategias de control de periféricos/Device Driver|driver]] para los motores conviene [[ingeniería electrónica/dispo/Transistor bipolar de juntura/Transistor|transistores]] porque no es necesario invertir el giro del motor y que sean [[ingeniería electrónica/dispo/Transistor MOSFET/Transistor de efecto de campo metal-óxido-semiconductor|MOSFET]], para reducir el consumo de corriente. El gate del MOSFET recibirá la señal PWM, y se polarizará el transistor en saturación durante el tiempo de encendido del mismo
* Los [[colección/componentes/sensores/Sensores|sensores]] utilizaremos una combinación de una $3$ sensores
	* Una [[Inertial Measurement Unit (IMU)|IMU]], especificamente una [[MPU6050|MPU6050]], el cual obtendríamos una medición de $3$ ángulos de rotación, por medio de la [[Velocidad angular|velocidad angular]] y aceleraciones para estimar la dirección de la gravedad
	* Usar $4$ rotámetros para medir la [[Velocidad|velocidad]] de cada motor
	* Un sensor infrarojo para la altura, donde deberíamos asignar confizanza en función del ángulo que retorna la IMU o el [[Observador|observador]], lo que implica que ángulo de $0\degree$ tiene la máxima confianza de la medición y cualquier ángulo mayor tendría una menor confianza
* Para la comunicación y direcciones generales podemos utilizar otro ESP32 y utilizar [[investigación/placa de Desarrollo/ESP 32/ESP-NOW|ESP-NOW]]
