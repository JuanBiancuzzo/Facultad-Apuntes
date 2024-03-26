---
dia: 2023-10-22
materia: aninfo
capitulo: 8
---
### Definición
---
Es un estilo [[Arquitectura de software|arquitectónico]] que propone una separación del problema en 3 grupos

#### Model
---
Encapsula el estado de la aplicación, notificando el view de cualquier cambio en el estado

#### View
---
Muestra o renderiza el [[Modelo]], y actualizándose con las correspondientes notificaciones

#### Controller
---
Mapea las acciones del usuario a actualizaciones del modelo, modificando su estado