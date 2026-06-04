---
dia: 2026-05-31
etapa: empezado
referencias:
  - "1156"
aliases:
  - Primera ley de la termodinámica#Primera ley
  - Ley de la conservación de la energía#Primera ley
  - Segunda ley de la termodinámica#Segunda ley
  - Tercera ley de la termodinámica#Tercera ley
tags:
  - carrera/ingeniería-electrónica/quimica/Termodinámica
  - nota/facultad
vinculoFacultad:
  - tema: Termodinámica
    capitulo: 10
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es la rama de la física que estudia la [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía|energía]] y sus transformaciones en los [[ingeniería electrónica/señales/Señales y sistemas/Sistema|sistemas]]

Las [[ingeniería electrónica/control/Respuesta dinámica/Variable de estado|variable de estado]] de un sistema termodinámico depende de la naturaleza del sistema, por ejemplo
* Para un [[ingeniería electrónica/quimica/Estados de la materia/Gas#Gas ideal|gas]], son los [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Número de Avogradro|moles]], el [[Volumen|volumen]], la [[Presión|presión]] y la [[ingeniería electrónica/seguridad/Prevención de incendios/Temperatura|temperatura]]

## Primera ley
---
En un [[ingeniería electrónica/dispo/Física de semiconductores/Sistema aislado|sistema aislado]] que evoluciona de un estado inicial $\mathcal{A}$ a otro estado final $\mathcal{B}$, el [[ingeniería en informática/fisica 2/Electrostática en el vacío/Trabajo|trabajo]] realizado no depende ni del tipo de trabajo, ni del [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|proceso]] seguido. Por lo tanto la energía del sistema se conserva $$ \Delta U = U_\mathcal{B} - U_\mathcal{A} = 0 $$

En un [[ingeniería electrónica/señales/Señales y sistemas/Sistema#^cerrado|sistema cerrado]], la forma de en la que varía su [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía#Energía interna|energía interna]] será intercambiando energía con el entorno, y eso lo logrará mediante el intercambio de trabajo $W$ o de [[ingeniería en informática/fisica 2/Termodinámica/Calor|calor]] $Q$ son las maneras de transferir la energía es $$ \Delta U = Q - W $$ donde se utiliza $$ \Delta U = Q + W $$ cuando se piensa desde el punto de vista del sistema

## Segunda ley
---
En todo [[ingeniería en informática/sisop/La abstracción de proceso/Proceso#^espontaneo|proceso espontáneo]], correspondiente a un [[ingeniería en informática/sisop/La abstracción de proceso/Proceso#^irreversible|proceso irreversible]], la [[ingeniería en informática/orga/Compresión/Entropía|entropía]] del universo aumenta. Por lo tanto la entropía es $$ \Delta S_\text{universo} = \Delta S_\text{sistema} + \Delta S_\text{entorno} $$ donde el sistema y su entorno constituye un sistema aislado

En todo sistema en [[ingeniería electrónica/control/Respuesta dinámica/Punto de equilibrio|equilibrio]], correspondiente a un [[ingeniería en informática/sisop/La abstracción de proceso/Proceso#^reversible|proceso reversible]], la entropía del universo permanece constante, por lo que $$ \Delta S = 0 $$

## Tercera ley
---
Las entropías de todos los [[ingeniería electrónica/quimica/Estados de la materia/Red cristalina|cristales]] perfectos se aproximan a cero a medida que la [[ingeniería electrónica/seguridad/Prevención de incendios/Temperatura#Escala Kelvin|temperatura absoluta]] se aproxima a $0$

La importancia de esta ley, es que nos permite calcular entropías absolutas de las sustancias, ya que siempre podríamos plantear $$ S(\text{estado final}) = S(0~\text{K}) + \Delta S $$

Esta entropía absoluta se pueden utilizarse para determinar la dirección de las [[ingeniería electrónica/quimica/Reacciones químicas/Reacción química|reacciones químicas]], esto es porque se puede relacionar con la [[ingeniería electrónica/quimica/Termodinámica/Energía libre de Gibbs|energía libre de Gibbs]], donde como [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]], su [[ingeniería en informática/discreta/Relaciones/Mínimo|mínimo]] es el punto de equilibrio, y por lo tanto para donde disminuya será la dirección de la reacción

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```