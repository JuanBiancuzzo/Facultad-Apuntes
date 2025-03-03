---
dia: 2023-10-22
tags:
  - carrera/ingeniería-en-informática/aninfo/Diseño-de-software
  - nota/facultad
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
aliases:
  - Layer
etapa: ampliar
---
# Definición
---
Es un estilo [[Arquitectura de aplicaciones|arquitectónico]] que propone una agrupación lógica de componentes y funcionalidades de un sistema

![[Arquitectura por layers.png]]

Podemos tener dos tipos de capas, verticales, donde propone una jerarquía, mientras que las transversales u horizontales, tienen una completa con todas las capas jerárquicas pero buscan ofrecer el servicio que proponen a todas las capas como lo puede ser la seguridad

## Estructura típica
---
Veamos una división de como puede ser una estructura típica

![[Arquitectura por layers típico.png]]

### Capa de presentación
---
Se concentra toda la lógica que se encarga con el diálogo con el usuario, parecido al [[Model view controller#View|view del MVC]]

### Capa de negocios
---
Esta capa tiene toda la lógica de la aplicación

### Capa de persistencia
---
Esta capa se encarga de obtener la información que debe mantenerse a lo largo del tiempo

### Capa de datos
---
Esta capa se encarga de mantener los datos, como por medio de una [[Base de datos|base de datos]]