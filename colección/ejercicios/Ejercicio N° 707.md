---
dia: 2026-09-28
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 707
etapa: empezado
---
# Enunciado
---
Se quiere abrir una estación de servicio YPF con $10$ surtidores. Por el momento solamente se logró la habilitación de $3$ tanques internos de nafta, el objetivo es a futuro poder habilitar más. Los surtidores atienden a los autos que vienen a cargar combustible, pero deben acceder a los tanques internos de un surtidor a la vez. Además, cuando llega el camión cisterna de YPF a recargar el combustible disponible en la estación de servicio, este debe asegurarse de que ningún tanque esté siendo usado por un surtidor ya que eso representa un riesgo de seguridad

Diseñe el sistema utilizando el modelo de actores, y para cada entidad defina cuáles son los estados internos y los mensajes que intercambian

# Resolución
---
%% Suena como el problema de un RWLock, donde se puede tener multiples readers pero un solo Writer %%