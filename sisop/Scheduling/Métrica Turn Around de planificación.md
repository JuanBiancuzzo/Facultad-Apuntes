---
dia: 2023-11-15
tags:
  - sisop/Scheduling
  - nota/facultad
---
# Definición
---
Para poder hacer algún tipo de análisis se debe tener algún tipo de [[Métrica|métrica]] estandarizada para comparar las distintas políticas de [[Scheduler|planificación o scheduling]]. Bajo las siguientes suposiciones

## Métrica
Por ahora, para que todo sea simple se utilizará una única métrica llamada turnaround time. Que se define como el tiempo en el cual el [[Proceso|proceso]] se completa menos el tiempo de arribo al [[Sistema|sistema]] $$ T_\text{turn around} = T_\text{completo} - T_\text{arribo} $$
Debido a que el $T_\text{arribo} = 0$, esta métrica mide el performance