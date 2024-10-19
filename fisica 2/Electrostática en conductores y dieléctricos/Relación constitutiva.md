---
dia: 2024-09-03
tags:
  - fisica-2/Electrostática-en-conductores-y-dieléctricos
  - nota/facultad
  - fisica-2/Magnetismo-estacionario-en-medios-materiales
  - electro/Campos-eléctricos-y-magnéticos
referencias:
  - "215"
aliases:
  - Relación constitutiva eléctrica#Para campo eléctrico
  - Relación constitutiva magnética#Para campo magnético
etapa: ampliar
orden: 162
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
Una ecuación constitutiva es una relación entre las variables termodinámicas o mecánicas de un sistema físico: presión, volumen, tensión, deformación, [[Temperatura|temperatura]], densidad, entropía, etcétera. Cada material o sustancia tiene una ecuación constitutiva específica, dicha relación solo depende de la organización molecular interna<sup><a href="#ref-215" style="color: inherit; text-decoration: none;">[215]</a></sup> 

## Para campo eléctrico
---
Si combinamos las expresiones del [[Campo eléctrico|campo eléctricos]] $\vec{E}$, con el [[Campo de desplazamiento|campo desplazamiento]] $\vec{D}$ y el [[Campo de polarización|campo de polarización]] $\vec{P}$ llegamos a la siguiente relación constitutiva
$$ \vec{E} = \frac{1}{\epsilon_0} \left( \vec{D} - \vec{P} \right) \iff \vec{D} = \epsilon_0 ~ \vec{E} + \vec{P} $$ siendo $\epsilon_0$ la [[Permitividad eléctrica#^permitividad-vacio|permitividad del vacío]]

## Para campo magnético
---
Si combinamos las expresiones del [[Campo de inducción magnética|campo de inducción magnética]] $\vec{B}$, con el [[Material magnético#^campo-magnetico|campo magnético]] $\vec{H}$ y el [[Material magnético#^campo-magnetizacion|campo de magnetización]] $\vec{M}$ llegamos a la siguiente relación constitutiva $$ \vec{B} = \mu_0 ~ (\vec{M} + \vec{H}) $$ siendo $\mu_0$ la [[Permeabilidad magnética#^permeabilidad-magnetica-en-el-vacio|permeabilidad magnética del vacío]]



# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```