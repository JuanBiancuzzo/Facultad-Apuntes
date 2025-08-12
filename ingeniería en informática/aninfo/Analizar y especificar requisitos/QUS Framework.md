---
dia: 2023-10-02
tags:
  - carrera/ingeniería-en-informática/aninfo/Analizar-y-especificar-requisitos
  - nota/facultad
vinculoFacultad:
  - tema: Analizar y especificar requisitos
    capitulo: 4
    materia: Análisis de la información
    carrera: Ingeniería en informática
---
# Definición
---
Para determinar la calidad de las [[Historia de usuario|historias de usuario]] están los siguientes atributos de calidad, en 3 categorías

### Sintáctico
- Atomic:
	- Una historia de usuario expresa un [[Requisito|requisito]] para exactamente una característica.
	- Debe expresar una única funcionalidad
- Mínimo:
	- Una historia de usuario no contiene más que un rol, medios y fines.
	- Debe contener solamente un rol, una acción y un fin
- Bien formada:
	- Una historia de usuario incluye al menos un rol y un medio.
	- Debe incluir al menos un rol y una acción
### Semántico
- Libre de conflictos:
	- Una historia de usuario no debe ser inconsistente con ninguna otra historia de usuario.
	- Debe ser consistente con otra historias de usuario
- Conceptualmente sólido:
	- Los medios expresan una característica y los fines expresan una razón, no otra cosa.
	- La acción expresa una funcionalidad y el fin una razón
- Orientada a problemas:
	- Una historia de usuario sólo especifica el problema, no la solución.
	- No debe especificar la solución
- Sin ambigüedades:
	- Una historia de usuario evita términos o abstracciones que puedan dar lugar a múltiples interpretaciones.
	- Debe evitar el uso de términos que pueden llevar a múltiples interpretaciones
### Pragmático
- Completar:
	- La implementación de un conjunto de historias de usuarios crea una aplicación con funciones completas, no faltan pasos
	- No faltan pasos
- Dependencias explícitas:
	- Vincula todas las dependencias inevitables y no obvias de las historias de los usuarios.
- Oración completa:
	- Una historia de usuario es una oración completa bien formada.
	- Debe ser una oración bien formada
- Independiente:
	- La historia de usuario es autónoma, lo que evita dependencias inherentes de otras historias de usuario.
	- No debe depender de otras historias, debe ser autocontenida
- Escalable:
	- Las historias de usuarios escalables no denotan requisitos demasiado generales que sean difíciles de planificar y priorizar.
- Estimable:
	- Debe poder ser estimada y planificada
- Uniforme:
	- Todas las historias de usuarios siguen aproximadamente la misma plantilla
	- Todas las historias de usuario emplean el mismo formato
- Único:
	- Cada historia de usuario es única, se evitan duplicados
	- No debe haber duplicados