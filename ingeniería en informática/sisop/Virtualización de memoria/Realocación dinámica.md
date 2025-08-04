---
dia: 2023-11-30
tags:
  - carrera/ingeniería-en-informática/sisop/Virtualización-de-memoria
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/sisop/Virtualización de memoria/Resumen.md]]"
---
# Definición
---
La técnica de [[Memoria|memoria]] segmentada permite dar la ilusión de que una [[Espacio de direcciones|space address]] empieza en la posición $0$ cuando en realidad ese address space esta reubicado en algún lugar en otra [[Dirección de memoria|dirección]] física. Donde el proceso que transforma la virtual address en la physical address es exactamente la técnica conocida como [[Traslación de direcciones|address translation]]. 

### [[Traslación de direcciones con registros de base y segmento|Address translation con registros de base y segmento]]
---
![[Traslación de direcciones con registros de base y segmento#Definición]]

### [[Traslación de direcciones con tabla de segmentos|Address Translation con Tabla de segmentos]]
---
![[Traslación de direcciones con tabla de segmentos#Definición]]

### [[Traslación de direcciones con memoria paginada|Traslación de direcciones con memoria paginada]]
---
![[Traslación de direcciones con memoria paginada#Definición]]

### [[Traslación de direcciones multinivel|Traslación multinivel]]
---
![[Traslación de direcciones multinivel#Definición]]

## Eficiencia
---
Uno de los problemas con [[Traslación de direcciones|address translation]] reside en la velocidad de la traslación para ello se utilizan técnicas que mejoran esta velocidad. Para mejorar el address translation se utiliza un mecanismo de hardware llamado [[Translation-Lookaside Buffer|Translation-Lookaside Buffer]]