---
dia: 2023-05-26
tags:
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - nota/facultad
referencias:
  - "514"
  - "515"
etapa: empezado
aliases:
  - Mérito de un modelo
vinculoFacultad:
  - tema: Machine learning
    capitulo: 9
    materia: Organización de datos
    carrera: Ingeniería en informática
  - tema: Regresión en Inteligencia Artificial
    capitulo: 2
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
  - tema: Clasificación en Inteligencia Artificial
    capitulo: 3
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Hay diferentes métricas que pueden usarse para la [[Validación del modelo|validación de un modelo]], estas intentan cuantificar lo "correcto" que es dicho modelo

## Para valores numéricos
---
En el caso que el resultado sea valores numéricos se tienen las siguientes métricas
* [[ingeniería en informática/proba/Inferencia estadística/Consistencia en media cuadrática|Error cuadrático medio]] donde se puede [[ingeniería en informática/proba/Inferencia estadística/Estimador|estimador]] como $$ \frac{1}{n} \sum (y - \hat{y})^2 $$
* [[Error absoluto medio|Error absoluto medio]] donde se puede estimar como $$ \frac{1}{n} \sum \lvert y - \hat{y} \rvert $$
## Para clasificaciones
---
En el caso que el resultado sea una [[ingeniería en informática/discreta/Relaciones/Clase|clase]]

## Clasificación binaria
---
En la clasificación binaria, existe dos tipos de errores posibles, falla de detección ([[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Matriz de confusión#^fn|falsos negativos]]) y falsa alarma ([[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Matriz de confusión#^fp|falso positivo]]), donde para el primero lo podemos encontrar usando [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Recall|Recall]] mientras que el segundo usaríamos [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Precisión|Precision]]
* [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Accuracy|Accuracy]]
* [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Recall|Recall]]
* [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Precisión|Precision]]
* [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/F-beta score|F1 score]]

* Specificity
* Hard error ^bf4e62
* [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Loss 0-1|Loss 0-1]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```