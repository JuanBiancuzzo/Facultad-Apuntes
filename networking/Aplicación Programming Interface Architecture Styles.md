---
dia: 2024-07-08
etapa: empezado
referencias:
  - "1"
aliases:
  - API Architecture Styles
tags:
  - nota/investigacion
  - networking
orden: 22
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
Las [[Aplicación Programming Interface|API's]] son claves para el desarrollo de [[Software|software]]
* SOAP
* [[Representational state transfer|RESTful]]
* GraphQL
* [[Remote Procedure Call#gRPC|gRPC]]
* WebSocket
* Webhook


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```