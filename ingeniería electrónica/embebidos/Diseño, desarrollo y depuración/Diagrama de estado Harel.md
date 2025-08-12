---
dia: 2024-09-10
tags:
  - carrera/ingeniería-electrónica/embebidos/Diseño-desarrollo-y-depuración
  - nota/facultad
vinculoFacultad:
  - tema: Diseño, desarrollo y depuración
    capitulo: 1
    materia: Taller de sistemas embebidos
    carrera: Ingeniería electrónica
---
# Definición
---
Aunque las [[Máquina Mealy|máquinas Mealy]] ya pueden reducir el número de estados requeridos, en el caso de sistemas complejos, estos [[Autómata|autómatas]] se vuelven fácilmente inmanejables

Harel concluyó que "un enfoque de estados debe ser modular, jerárquico y bien estructurado" e introdujo conceptos adicionales como estados compuestos y ortogonalidad 

Acuñó el término "statechart" y lo definió como
* "statecharts = state-diagrams + depth + orphogonality + broadcast communication"

Básicamente, los [[Diagrama de estado|diagramas de estados]] de Harel son máquinas de Mealy/[[Máquina de Moore|Moore]] ampliadas con conceptos adicionales que nos permiten [[Modelar|modelar]] sistemas complejos de una manera práctica

Al utilizar estados compuestos y subdiagramas, podemos aportar más profundidad a los diagramas de estado, manteniendo al mismo tiempo los diagramas claros y bien estructurados

Las regiones nos ayudan a expresar la ortogonalidad, diferentes máquinas de subestados que se pueden ejecutar una junto de la otra

Los eventos nos permiten lograr una comunicación en broadcast y nos brindan un medio sólido para describir comportamientos complejos

Usando guardas, podemos afirmar que un determinado evento desencadena una transición solo si se cumple una condición determinada

Las transiciones entre niveles, los estados históricos, la lógica temporal, así como las acciones al entrar, salir y permanecer en un estado son otros elementos del diagrama de estado de Harel

![[Diagrama de estado Harel.png]]