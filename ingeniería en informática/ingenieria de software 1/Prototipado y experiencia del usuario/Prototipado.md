---
dia: 2023-09-05
tags:
  - carrera/ingeniería-en-informática/ingenieria-software-1/Prototipado-y-experiencia-del-usuario
  - nota/facultad
aliases:
  - Prototipo
vinculoFacultad:
  - tema: Prototipado y experiencia del usuario
    capitulo: 9
    materia: Análisis de la información
    carrera: Ingeniería en informática
---
# Definición
---
Permiten [[ingeniería en informática/ingenieria de software 1/Ingeniería de software/Modelo|modelar]] las interfaces del software a desarrollar. Se utiliza para [[ingeniería en informática/ingenieria de software 1/Analizar y especificar requisitos/Análisis de requisitos|analizar requisitos]]. Se puede emplear como medio para descubrir, [[ingeniería en informática/ingenieria de software 1/Verificación y validación/Verificación|verificar]] y [[ingeniería en informática/ingenieria de software 1/Verificación y validación/Validación|validar]] [[ingeniería en informática/ingenieria de software 1/Ingeniería de requisitos/Requisito|requisitos]] durante las [[ingeniería en informática/ingenieria de software 1/Descubrimiento de requisitos/Entrevista|entrevistas]], [[ingeniería en informática/ingenieria de software 1/Descubrimiento de requisitos/Taller|talleres]], [[ingeniería en informática/ingenieria de software 1/Descubrimiento de requisitos/Técnicas de descubrimiento de requisitos|etc]]. Se integran con [[ingeniería en informática/ingenieria de software 1/Ingeniería de software/Unified modelling language#Diagrama de casos de uso|casos de uso]], [[ingeniería en informática/ingenieria de software 1/Analizar y especificar requisitos/Historia de usuario|user stories]], etc. 

Pueden ser evolutivos o descartables. Pueden ser hechos con "papel y lápiz"

No esta relacionado al [[Diseño de sistemas]], sino al [[ingeniería en informática/ingenieria de software 1/Descubrimiento de requisitos/Técnicas de descubrimiento de requisitos|descubrimiento de requisitos]].

También los construiremos para aclarar, completar [[ingeniería en informática/ingenieria de software 1/Verificación y validación/Validación de requerimientos|validar los requisitos]]. Explorar alternativas de diseño y/o desarrollar una parte del producto en condiciones de evolucionar.

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
* No reemplazar [[ingeniería en informática/ingenieria de software 1/Ingeniería de requisitos/Requisito|requisitos]] con prototipos