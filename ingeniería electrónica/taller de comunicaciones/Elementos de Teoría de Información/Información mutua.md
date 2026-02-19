---
dia: 2026-02-19
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Elementos-de-Teoría-de-Información
  - nota/facultad
vinculoFacultad:
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La información mutua representa la incerteza sobre la entrada del canal "disipada" con la observación de la salida del canal. Se define en función de la [[ingeniería en informática/orga/Compresión/Entropía|entropía]] particular, y la [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Entropía condicional|entropía condicional]] como $$ I(X \mid Y) \triangleq H(X) - H(X \mid Y) $$

> [!propiedad]+ Propiedad 8.2.1  
> La información mutua tiene la propiedad de ser simétrica, es decir, $I(X \mid Y) = I(Y \mid X)$
> 
> > [!demostracion]- Demostración
> > La demostración es simplemente algebraica, partimos de la definición $$ \begin{align}
> >     I(X \mid Y) &= H(X) - H(X \mid Y) \\
> >      &= H(X) - (H(X,~ Y) - H(Y)) \\
> >      &= H(Y) + H(X) - H(X,~ Y) \\
> >      &= H(Y) + H(X) - (H(Y \mid X) + H(X)) \\
> >      &= H(Y) - H(Y \mid X) \\
> >     I(X \mid Y) &= I(Y \mid X) \\ 
> > \end{align} $$
^pro-8-2-1

