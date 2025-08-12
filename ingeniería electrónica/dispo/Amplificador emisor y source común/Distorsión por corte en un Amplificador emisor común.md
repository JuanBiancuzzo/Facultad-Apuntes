---
dia: 2023-11-27
tags:
  - carrera/ingeniería-electrónica/dispo/Amplificador-emisor-y-source-común
  - nota/facultad
vinculoFacultad:
  - tema: Amplificador emisor y source común
    capitulo: 7
    materia: Dispositivos semiconductores
    carrera: Ingeniería electrónica
---
# Definición
---
Límite superior de la señal de salida, para $v_s$ demasiado negativa el [[Transistor bipolar de juntura|transistor]] se va a [[Corte del transistor bipolar de juntura|régimen de corte]], por lo que la [[Corriente eléctrica|corriente]] de señal anula la corriente de polarización $$ \begin{align} 
	i_c = -I_{CQ} \implies i_C = 0 \\
	v_{OUT,~max} = V_{CC}
\end{align} $$
Por lo tanto el límite es $$ v_{out, ~ max} = I_{CQ} R_C = V_{CC} - V_{CEQ} $$