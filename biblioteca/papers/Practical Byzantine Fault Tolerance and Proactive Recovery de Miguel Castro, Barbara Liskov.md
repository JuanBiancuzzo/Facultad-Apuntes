---
dia: 2024-10-15
etapa: ampliar
tipoCita: Paper
numReferencia: 356
autores:
  - apellido: Castro
    nombre: Miguel
  - apellido: Liskov
    nombre: Barbara
tituloInforme: Practical Byzantine Fault Tolerance and Proactive Recovery
numeroInforme: 
anio: "2002"
editores: 
url: 
tags:
  - referencia/paper
  - biblioteca/paper
  - nota/investigacion
  - algoritmos
  - protocolos
aliases:
  - Practical Byzantine Fault Tolerance
  - pBFT
referencias:
  - "286"
  - "355"
orden: 69
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
Practical Byzantine Fault Tolerance es un [[Algoritmo|algoritmo]] de consenso hecho por Barbara Liskov y Miguel Castro. Este fue diseñado para trabajar de forma eficiente en [[Sistema|sistemas]] asincrónicos. Tiene la meta de resolver los problemas asociados a [[Byzantine Fault Tolerance|BFT]]

## Ventajas
---
* Eficiencia energética
    * pBFT puede llegar a un consenso sin necesitar computación muy compleja como el mecanismo de [[Proof of Work (Prueba de trabajo)|PoW]]
* Transacciones fiables
    * No se necesita multiples confirmaciones después de haber llegado a un resultado
* Poca variación en el beneficio de colaboración
    * Como cada nodo en la [[Red|red]] toma parte en responder, todos tienen el mismo incentivo en ayudar a tomar la decisión

## Cómo funciona?
---
Se puede representar en $4$ partes, donde vamos a tomar como líder como primario, y el resto como secundario
1. El cliente manda la request al primario
2. El primario broadcast el request a los secundarios
3. El primario y los secundarios realizan el request y se los demás
4. El request de cada nodo, primerio o secundario, es mandado al cliente el cual espera recibir $m + 1$ respuestas iguales

%% Ver el paper para entender mejor todo %%

## Variaciones
---
Para mejorar la calidad y velocidad de este algoritmo, dependiendo de las condiciones hay distintas variaciones
* [[RBFT, Redundant Byzantine Fault Tolerance de Pierre-Louis Aublin, Sonia Ben Mokhtar, Vivien Quéma|RBFT]]
* [[Fault-Scalable Byzantine Fault-Tolerant Services de Michael Adb-El-Malek, Gregory R. Ganger, Garth R. Goodson, Michael K. Reiter, Jay J. Wylie|Q/U]]
* [[HQ Replication, A Hybrid Quorum Protocol for Byzantine Fault Tolerance de James Cowling, Daniel Myers, Barbara Liskov, Rodrigo Rodrigues, Liuba Shrira|HQ - Hybrid Quorum Protocol for BFT]]
* [[Zyzzyva, Speculative Byzantine Fault Tolerance de Ramakrishna Kotla, Lorenzo Alvisi, Mike Dahlin, Allen Clement, Edmund Wong|Zyzzyva - Speculative Byzantine Fault Tolerance]]
* [[Making Byzantine Fault Tolerant Systems Tolerate Byzantine Faults de Allen Clement, Edmund Wong, Lorenzo Alvisi, Mike Dahlin|Aardvark]]


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```