---
dia: 2025-03-19
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-electrónica/control/Linealización
  - carrera/ingeniería-electrónica/quimica/Termodinámica
  - nota/facultad
aliases:
  - Punto de equilibro estable
  - Punto de equilibrio inestable
  - Equilibro térmico#^termico
  - Equilibro mecánico#^mecanico
  - Equilibro químico#^quimico
vinculoFacultad:
  - tema: Linealización
    capitulo: 2
    materia: Control automático
    carrera: Ingeniería electrónica
  - tema: Termodinámica
    capitulo: 10
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dado un [[Sistema|sistema]] $$ \dot{x} = f(x,~ u) $$ si $x_e$, $u_e$ son tales que $f(x_e,~ u_e) = 0$ entonces representan un punto de equilibro
En sistemas físicos, estos se los conocen como
* Equilibrio térmico, cuando la [[ingeniería electrónica/seguridad/Prevención de incendios/Temperatura|temperatura]] del sistema es igual al del entorno ^termico
* Equilibrio mecánico, cuando la sumatoria de todas las [[Fuerza|fuerzas]] exteriores es nula. Es decir, la [[Presión|presión]] del sistema y del entorno es la misma ^mecanico
* Equilibrio químico, si en el sistema ocurre una [[ingeniería electrónica/quimica/Reacciones químicas/Reacción química|reacción química]], esta debe llegar al equilibrio (concentración de [[ingeniería electrónica/quimica/Reacciones químicas/Reacción química#^reactivo|reactivos]] y [[ingeniería electrónica/quimica/Reacciones químicas/Reacción química#^producto|productos]] permanecen constantes). La estructura interna y la composición permanecen constantes ^quimico

## Propiedades
---
* Si el sistema tiene como condiciones iniciales a $x_e$, $u_e$ entonces el mismo permanecerá en ese punto
* El [[Entorno|entorno]] a esos valores, se llevará a cabo la [[Linealización Jacobiana|linealización]]