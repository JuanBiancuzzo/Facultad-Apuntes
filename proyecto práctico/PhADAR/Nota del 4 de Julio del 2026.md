---
dia: 2026-07-04
tags:
  - proyecto-práctico/PhADAR
  - nota/proyecto
---
# Progreso
---
Actualmente solo tengo la idea del [[colección/componentes/sensores/Sensores|sensor]], y tengo pensado algunas formas para probarlo. Pero todavía no confirme si tiene sentido o tiene un funcionamiento correcto

La idea en general es, utilizar uno o multiples transmisores, generando una señal con una rampa en frecuencia, utilizando un [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Phase Locked Loop|PLL]]. Luego con un [[Phase array|phase array]], de antenas receptoras, donde sus señales se multiplican con la señal transmitida, [[ingeniería electrónica/adc/Respuesta en frecuencia/Filtro pasa-bajo|filtradas]] y [[ingeniería electrónica/señales/Muestreo e Interpolación/Conversor Analógico-Digital|digitalizadas]]. Con este resultado se pueden manipular en digital para tener información de la distancia y dirección

La intención sería implementar un prototipo de la idea, después de verificar si es posible, utilizando transmisores y receptores sonoros, similares a un sensor de distancia ultrasónico

Lo que tendría que investigar mejor es la utilización de phase array, transmisión continua, PLL, distintas modulaciones para la transmisión, y manejo de información a altas frecuencias

