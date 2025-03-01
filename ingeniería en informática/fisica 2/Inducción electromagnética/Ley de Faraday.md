---
dia: 2023-08-24
tags:
  - carrera/ingeniería-en-informática/fisica-2/Inducción-electromagnética
  - nota/facultad
  - carrera/ingeniería-electrónica/fisica-2/Inducción-electromagnética
aliases:
  - Ley de Faraday-Lenz#Ley de Faraday-Lenz
  - Regla de flujo#Ley de Faraday-Lenz
  - Ley de Maxwell-Faraday#Ley de Maxwell-Faraday
  - Tensión inducida#^tension-inducida
  - Fuerza electromotriz inducida#^tension-inducida
  - FEM#^tension-inducida
---
# Definición
---
Faraday notó, luego de unos experimentos, que un [[Campo de inducción magnética|campo magnético]] puede generar [[Corriente eléctrica|corriente]] en un [[Circuito eléctrico|circuito]] cercano. Sin embargo, esta corriente es temporal. Solo surge cuando el campo no es estacionario, sino que depende del tiempo. A esta corriente, se la denomina [[Corriente inducida|corriente inducida]]

## Ley de Faraday-Lenz
---
Esta ley, también conocida como regla de flujo, propone que la variación del flujo de un campo magnético genera una [[Tensión|potencial]] en un circuito cercano. Este potencial va a generar la corriente inducida

La corriente inducida va a generar un campo magnético, que va a contrarrestar la variación de flujo del campo magnético inicial 

Expresada matemáticamente $$ \mathcal{E} = -\frac{d\phi}{dt} $$ ^tension-inducida
## Ley de Maxwell-Faraday
---
Maxwell reinterpretó la ley de Faraday. Indicando que todo campo variable en el tiempo genera, además de un [[Campo de inducción magnética|campo magnético inducido]], un [[Campo eléctrico|campo eléctrico]] $$ \begin{align} 
    \oint_{C} \vec{E} ~ d\vec{l} &= -\frac{d}{dt} \iint_S \vec{B} ~ d\vec{A} \tag{integral} \\
    \nabla \times \vec{E} &= - \frac{\partial\vec{B}}{\partial t} \tag{diferencial}
\end{align} $$
Esta nueva interpretación parece cerrar el ciclo del electromagnetismo. Los campos eléctricos ejercen [[Ley de Coulomb|fuerzas]] sobre las [[Carga eléctrica|cargas]] estacionarias, quienes crean campos eléctricos. Por otro lado, los campos magnéticos ejercen fuerzas sobre las corrientes, quienes crean campos magnéticos. Gracias a la [[Ley de Ohm|ley de Ohm]], [[Ley de Biot y Savalt|Biot-Savalt]] y [[Ley de Ampère|Ampère]], encontramos que los campos eléctricos generan corrientes y a su vez, campos magnéticos