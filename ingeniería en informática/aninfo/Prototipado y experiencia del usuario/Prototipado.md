---
dia: 2023-09-05
tags:
  - ingeniería-en-informática/aninfo/Prototipado-y-experiencia-del-usuario
  - nota/facultad
aliases:
  - Prototipo
---
# Definición
---
Permiten [[Modelo|modelar]] las interfaces del software a desarrollar. Se utiliza para [[Análisis de requisitos|analizar requisitos]]. Se puede emplear como medio para descubrir, [[Verificación|verificar]] y [[Validación|validar]] [[Requisito|requisitos]] durante las [[Entrevista|entrevistas]], [[Taller|talleres]], [[Técnicas de descubrimiento de requisitos|etc]]. Se integran con [[Unified modelling language#Diagrama de casos de uso|casos de uso]], [[Historia de usuario|user stories]], etc. 

Pueden ser evolutivos o descartables. Pueden ser hechos con "papel y lápiz"

No esta relacionado al [[Diseño de sistemas]], sino al [[Técnicas de descubrimiento de requisitos|descubrimiento de requisitos]].

También los construiremos para aclarar, completar [[Validación de requerimientos|validar los requisitos]]. Explorar alternativas de diseño y/o desarrollar una parte del producto en condiciones de evolucionar.

## Tipos
---
Podemos separarlos en dos grupos según su uso a futuro:
* Descartables: 
	* Se desechan
	* Como lo son los [[Wireframe]]
* Evolutivos
	* Se transforman para convertirse en el producto final

Si lo clasificamos según su alcance tenemos
* Mock up
	* Experiencia del usuario
	* Es un prototipo de la interfaz del usuario
	* No implementa comportamiento pero lo sugiere
* Proof of concept
	* Viabilidad técnica
	* Implementa todo pero en un slice pequeño
	* Es un slice vertical del producto

## Riesgos
---
* Presión para liberar el prototipo
* Foco en detalles del diseño visual
* Expectativas de desempeño
* Demasiado esfuerzo

## Recomendaciones
---
* Incluir en el plan
* Clarificar el propósito
* Planear múltiples prototipos
* Desarrollar rápidamente prototipos descartables (y baratos)
* Prototipar aspectos no entendidos
* Usar datos creíbles
* No reemplazar [[Requisito|requisitos]] con prototipos