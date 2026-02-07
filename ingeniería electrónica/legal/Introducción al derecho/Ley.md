---
dia: 2026-02-06
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/legal/Introducción-al-derecho
  - nota/facultad
vinculoFacultad:
  - tema: Introducción al derecho
    capitulo: 1
    materia: Legislación y ejercicio profesional
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La ley es una [[ingeniería electrónica/legal/Introducción al derecho/Norma jurídica|norma jurídica]] de carácter general, obligatoria, escrita, constitutiva del derecho y emanada de una autoridad competente mediante procedimientos que veremos a continuación

## Creación
---
La creación de una ley, como se mencionó anteriormente, es emanada de una autoridad competente, y esta es creada por una serie de pasos hasta el punto de publicación

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\pasos  {{"Iniciativa", "Discusión", "Sanción", "Promulgación", "Publicación"}}

    \tikzmath { 
        \largoPasos = dim(\pasos); \posInicial = 0;
        \primerPaso = \pasos[\posInicial];
        \largo = 2.5; \alto = 1.5; 
        \size = 0.85;
    }
    \draw (0, 0) 
        -- ++(\largo, 0) node (temp) {}
        -- ++({\largo / 2}, {-\alto / 2})
        -- ++({-\largo / 2}, {-\alto / 2})
        -- ++(-\largo, 0)
        -- cycle;
    \path (0, {-\alto / 2}) -- ++({3 * \largo / 2}, 0)
        node[pos=0.4, scale=\size] {\primerPaso};
    
    \foreach \indice [parse=true] in {\posInicial + 1, ..., \largoPasos - 1} {
        \tikzmath { \paso = \pasos[\indice]; }
        
        \path ($ (temp.center) + ({\largo / 2}, {-\alto / 2}) $) 
            -- ++(\largo, 0) node[pos=0.4, scale=\size] {\paso};
        
        \draw (temp.center) 
            -- ++(\largo, 0) node (temp) {}
            -- ++({\largo / 2}, {-\alto / 2})
            -- ++({-\largo / 2}, {-\alto / 2})
            -- ++(-\largo, 0)
            -- ++({\largo / 2}, {\alto / 2})
            -- cycle;        
    }
    
\end{tikzpicture}
\end{document}
``` 

### Iniciativa
---
Propuesta de un proyecto de ley al órgano legislativo para que este lo discuta. La propuesta puede provenir de 
* La [[Cámara de diputados|Cámara de diputados]] o la [[Cámara de senadores|Cámara de senadores]]
* Poder ejecutivo
* Los ciudadanos

### Discusión
---
Las Cámaras deliberan si el proyecto debe ser aprobado o no. Primero pasa por la Cámara de origen y si es aprobado a la Cámara revisora

### Sanción
---
El [[Poder Legislativo|órgano legislativo]] aprueba el proyecto de ley. Debe reunir el voto de la mayoría absoluta de los miembros de cada Cámara

### Promulgación
---
El [[Poder Ejecutivo|Poder Ejecutivo]] aprueba el proyecto sancionado por el Poder Legislativo. El Poder Ejecutivo tiene la facultad de vetar un proyecto de ley, rechazando parte o todo el proyecto

### Publicación
---
Se publica la ley en el Boletín Oficial para que sea de conocimiento de la población y comience su obligatoriedad

## Interpretación
---
Como se dice en el [[colección/documentos/Código Civil y Comercial de la Nación/Título preliminar/Capítulo 1/Art. 2 del CC y CN, Interpretación|Art. 2 del CC y CN]], la ley debe ser interpretada en función de
* Sus palabras
* Su finalidad
* Las leyes análogas
* Las disposiciones que surgen de los [[Tratado de derechos humanos|tratados sobre derechos humanos]]
* Los principio y los valores jurídicos
* De modo coherente con todo el [[ingeniería electrónica/legal/Introducción al derecho/Ordenamiento jurídico|ordenamiento]]

Es el labor del juez realizar la interpretación, y como se dice en el [[colección/documentos/Código Civil y Comercial de la Nación/Título preliminar/Capítulo 1/Art. 3 del CC y CN, Deber de resolver|Art. 3 del CC y CN]], la obligación a fallar interpretando la ley para pasar de la norma fría a la aplicación a un caso concreto. Ya que puede haber problemas 
* Lingüísticos como ambigüedades, imprecisiones y discrepancias entre la intención de la ley con lo que esta escrito
* Lógicos como contradicciones entre las normas, redundancias y lagunas en la ley

## Fin de la obligatoriedad 
---
Se puede finalizar su obligatoriedad de $2$ formas
* Derogación
    * Derogar una ley significa dejarla sin efecto total o parcial por el órgano legislativo. Puede ser expresa (que lo establezca la ley) o tácita (cuando dos normas de igual jerarquía son incompatibles se da por derogada la anterior)
        * Derogación propiamente dicha es dejar parcialmente sin efecto
        * Modificación es dejar parcialmente sin efecto y se reemplaza el texto derogado por otro
        * Abrogación es dejar totalmente sin efecto la ley
        * Subrogación es dejar totalmente sin efecto y reemplazarla por otra
* Enervación
    * La ley pierde eficacia por alguna practica social
        * Por ejemplo, fotocopiar un texto de un autor es una actividad que va en contra de la [[Propiedad Intelectual|Ley de Propiedad Intelectual]]

## Características
---
* Efecto irretroactivo [[colección/documentos/Código Civil y Comercial de la Nación/Título preliminar/Capítulo 2/Art. 7 del CC y CN, Eficacia temporal|Art. 7 del CC y CN]] 
    * La ley rige hacia el futuro, no puede aplicarse a hechos sucedidos previos a que la ley entre en vigencia (existen excepciones). La ley no tiene efecto retroactivo sea o no de orden público
* Obligatoriedad [[colección/documentos/Código Civil y Comercial de la Nación/Título preliminar/Capítulo 2/Art. 4 del CC y CN, Ámbito subjetivo|Art. 4 del CC y CN]]
    * El obligatoria para todos los que habitan el territorio de la República Argentina
* Principio de inexcusabilidad [[colección/documentos/Código Civil y Comercial de la Nación/Título preliminar/Capítulo 2/Art. 8 del CC y CN, Principio de inexcusabilidad|Art. 8 del CC y CN]]
    * No se puede decir que no se conocía la ley como excusa de incumplir alguna norma. Cuando entra en vigencia se supone conocida por todos
* Fraude a la ley [[colección/documentos/Código Civil y Comercial de la Nación/Título preliminar/Capítulo 3/Art. 12 del CC y CN, Orden público. Fraude a la ley|Art. 12 del CC y CN]] 
    * Consiste en realizar un acto aparentemente válido considerando una norma vigente (ley de cobertura) cuando en realidad se busca obtener un resultado prohibido por una norma imperativa (ley defraudada)
    * Ejemplo, hay un impuesto elevado sobre la importación de productos electrónicos excepto por libros educativos. Entonces una empresa importa tablets diciendo que son libros educativos para evadir el impuesto elevado