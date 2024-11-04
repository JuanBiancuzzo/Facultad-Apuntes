---
dia: 2024-09-02
tags:
  - fisica-2/Circuitos-de-corrientes-no-dependientes-del-tiempo
  - nota/facultad
  - electro/Campo-electromagnético
referencias:
  - "213"
aliases:
  - Conservación de la carga#En electromagnetismo
etapa: ampliar
orden: 257
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Las leyes de conservación son las leyes físicas que postulan que durante la evolución temporal de un [[Sistema aislado|sistema aislado]], ciertas magnitudes tienen un valor constante. Puesto que el universo entero constituye un sistema aislado, se le pueden aplicar diversas leyes de conservación<sup><a href="#ref-213" style="color: inherit; text-decoration: none;">[213]</a></sup> 

## En electromagnetismo
---
Se deduce a partir de dos de las [[Ecuaciones de Maxwell|ecuaciones de Maxwell]] $$ \begin{align} 
    {\subset\!\supset} \llap{\iint}_{A} \vec{J} ~ d\vec{A} &= -\frac{\partial}{\partial t} ~ \iiint_{V(A)} \rho ~ dV \tag{integral} \\
    \nabla ~ \vec{J} &= -\frac{\partial \rho}{\partial t} \tag{diferencial}
\end{align} $$
La ecuación de continuidad indica que si tenemos [[Corriente eléctrica|corriente eléctrica]] neta saliendo de una región, la [[Carga eléctrica|carga]] en esta región tiene que estar disminuyendo

Para corrientes estacionarias, se cumple que toda corriente que entra a un volumen cerrado, sale $$ \begin{align} 
    {\subset\!\supset} \llap{\iint}_{A} \vec{J} ~ d\vec{A} &= 0 \\
    \nabla ~ \vec{J} &= 0
\end{align} $$
# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```