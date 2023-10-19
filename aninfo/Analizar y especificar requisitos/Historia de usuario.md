---
dia: 2023-10-02
materia: aninfo
capitulo: 4
---
### Definición
---
Es una descripción de la funcionalidad esperada de un sistema, desde el punto de vista de un usuario.

Estas no son [[Requisito|requisitos]] en el sentido tradicional, sino que constituyen un recordatorio de que se debe mantener una conversación respecto al tema en cuestión. Lo podemos pensar como un puntero al requisito real.

#### 3 Cs: Card, Conversation, confirmation
---
Al hacer la historia de usuario, hay que tener en cuenta que hay 3 cosas que la componen

##### Card
Descripción de la intención del usuario al utilizar el sistema, registrada en una ficha, post-it o en algún tipo de herramienta.

##### Conversation
Se debe mantener una conversación respecto a la historia para descubrir los detalles del comportamiento esperado.

##### Confirmation
Se deben definir criterios de aceptación para garantizar que se cubren adecuadamente todos los aspectos relacionados con la historia.

Estos criterios de aceptación ayudan a definir la funcionalidad.

#### Criterio de calidad
---
##### Sintáctico
- Atomic:
	- Una historia de usuario expresa un [[Requisito|requisito]] para exactamente una característica.
- Mínimo:
	- Una historia de usuario no contiene más que un rol, medios y fines.
- Bien formada:
	- Una historia de usuario incluye al menos un rol y un medio.
##### Semántico
- Libre de conflictos:
	- Una historia de usuario no debe ser inconsistente con ninguna otra historia de usuario.
- Conceptualmente sólido:
	- Los medios expresan una característica y los fines expresan una razón, no otra cosa.
- Orientada a problemas:
	- Una historia de usuario sólo especifica el problema, no la solución.
- Sin ambigüedades:
	- Una historia de usuario evita términos o abstracciones que puedan dar lugar a múltiples interpretaciones.
##### Pragmático
- Completar:
	- La implementación de un conjunto de historias de usuarios crea una aplicación con funciones completas, no faltan pasos
- Dependencias explícitas:
	- Vincula todas las dependencias inevitables y no obvias de las historias de los usuarios.
- Oración completa:
	- Una historia de usuario es una oración completa bien formada.
- Independiente:
	- La historia de usuario es autónoma, lo que evita dependencias inherentes de otras historias de usuario.
- Escalable:
	- Las historias de usuarios escalables no denotan requisitos demasiado generales que sean difíciles de planificar y priorizar.
- Uniforme:
	- Todas las historias de usuarios siguen aproximadamente la misma plantilla
- Único:
	- Cada historia de usuario es única, se evitan duplicados

#### Ejemplo
---
Como **cliente**, quiero poder consultar los **productos disponibles** para así poder tomar una **decisión de compra**

Criterio de aceptación:
**Dado** que soy cliente, 
**cuando** consulto productos disponibles 
**entonces** se me informa descripción, precios e inventario de los productos disponibles