---
dia: 2023-10-02
tags:
  - aninfo/Analizar-y-especificar-requisitos
  - nota/facultad
---
# Definición
---
Es una descripción de la funcionalidad esperada de un sistema, desde el punto de vista de un usuario.

Estas no son [[Requisito|requisitos]] en el sentido tradicional, sino que constituyen un recordatorio de que se debe mantener una conversación respecto al tema en cuestión. Lo podemos pensar como un puntero al requisito real.

## Formato
---
Como [actor], quiero poder [función] de modo que/para así [razón]

## 3 Cs: Card, Conversation, confirmation
---
Al hacer la historia de usuario, hay que tener en cuenta que hay 3 cosas que la componen

### Card
Descripción de la intención del usuario al utilizar el sistema, registrada en una ficha, post-it o en algún tipo de herramienta.

### Conversation
Se debe mantener una conversación respecto a la historia para descubrir los detalles del comportamiento esperado.

### Confirmation
Se deben definir criterios de aceptación para garantizar que se cubren adecuadamente todos los aspectos relacionados con la historia.

Estos criterios de aceptación ayudan a definir la funcionalidad.

El formato del criterio de aceptación esta dado por:
	Dado que [contexto], cuando [acción] entonces [consecuencias]

## Criterio de calidad
---
![[Regla INVEST#Definición]]
![[QUS Framework#Definición]]

## Ejemplo
---
Como **cliente**, quiero poder consultar los **productos disponibles** para así poder tomar una **decisión de compra**

Criterio de aceptación:
**Dado** que soy cliente, 
**cuando** consulto productos disponibles 
**entonces** se me informa descripción, precios e inventario de los productos disponibles