---
capitulo: 1
tags:
  - embebidos/Diseño-desarrollo-y-depuración
  - resumen
---
# Índice
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarResumen", { resumen: dv.current() });
```

# Resumen
---
## ¿Qué es un sistema embebido?
---
Un [[Sistema embebido|sistema embebido]] es un [[Sistema|sistema]] electrónico de cómputo, es una combinación de [[Hardware|hardware]] y [[Software|software]] para el procesamiento de datos y así llevar a cabo una función específica. Se le dice "[[Embebido|embebido]]" porque es un sistema que suele estar integrado dentro de otro sistema más grande

## ¿Qué se busca a la hora de diseñar un Sistema Embebido?
---
* Reducir de tamaño para tecnología portátil
* Reducir de consumo de energía para que cuando es alimentado por batería se pueda aliviar el peso del dispositivo
* Reducir del costo (acorde al mercado)
* Aumentar la eficiencia y confiabilidad (capacidad para funcionar correctamente)
* Aumentar la re-usabilidad, es decir, que lo que diseño lo puedo volver a aplicar a futuros diseños (ya sea tal cual está o con alguna modificación)
* Asegurar el determinismo, lo que quiere decir que debe comportarse de la misma manera ante una misma excitación, no es aleatorio
* Asegurar el tiempo de respuesta
* Asegurar la seguridad (algunos campos de aplicación exigen estándares de seguridad)
* Atender la mayor cantidad de tareas posibles
* Contar con conectividad e [[Interfaz de usuario|interfaz de usuario]] en uso corriente (el sistema debe ser capaz de establecer comunicación con otros dispositivos y ofrecer un medio a través del cual el usuario puede interactuar con el sistema)
* Congeniar recursos de hardware con los requerimientos del software

## Un pantallazo del Diseño/Desarrollo/Depuración de Hardware
---
### Diagrama de bloques
---
Se realizan diagramas de bloques de [[Función|funciones]] principales que muestran cómo se divide el sistema en cada una de estas funciones y como ellas se interconectan entre sí. Además, se realiza un diagrama para cada función donde se puede visualizar la interconexión de los componentes y módulos electrónicos entre sí. Es importante tener en cuenta las reglas de interconexión (las familias lógicas tienen reglas específicas para la interconexión de sus componentes. Por ejemplo, en un [[dispo/Circuitos digitales y procesos de fabricación CMOS/Resumen|CMOS]] no se puede dejar una entrada flotante)

### Tipos de sistema según restricciones de tiempo
---
* ![[Diseño, desarrollo y depuración de software#^HRT]]
* ![[Diseño, desarrollo y depuración de software#^SRT]]
### Acerca de las computadoras
---
![[Computadora#^743ae8]]

