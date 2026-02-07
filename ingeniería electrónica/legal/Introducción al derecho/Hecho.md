---
dia: 2026-02-06
etapa: empezado
referencias: []
aliases:
  - Hecho Simple#Hecho simple
  - Hecho jurídico#Hecho jurídico
  - Hecho jurídico externo#Hecho jurídico externo
  - Hecho jurídico humano#Hecho jurídico humano
  - Hecho jurídico humano involuntario#Hecho jurídico humano involuntario
  - Hecho jurídico humano voluntario#Hecho jurídico humano voluntario
  - Hecho jurídico humano voluntario ilícito#Hecho jurídico humano voluntario ilícito
  - Hecho jurídico humano voluntario lícito#Hecho jurídico humano voluntario lícito
  - Simple acto lícito#Simple acto lícito
  - Acto jurídico#Acto jurídico
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
```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos  {{"Hechos", "Jurídicos", "Simples", "Humanos", "Externos, no humanos,\\naturales", "Voluntarios", "Involutanrios", "Lícitos", "Ilícitos", "Simple acto lícito", "Acto jurídico"}}
    \def\padres     {{0,  0,  0,  1,  1,  3,  3,  5,  5,  7,  7}}
    \def\direcciones{{0, -1,  1, -1,  1, -1,  1, -1,  1, -1,  1}}
    \def\niveles    {{0,  1,  1,  2,  2,  3,  3,  4,  4,  5,  5}}

    \tikzmath { 
        \largo = dim(\elementos);
        \cantNiveles = ceil(log2(\largo)); \raiz = \elementos[0];
        \radio = 0.5; \sepX = 1.8; \sepY = 1.8;
        
        \supIzqX = \radio * cos(135); \supIzqY = \radio * sin(135);
        \supDerX = \radio * cos(45); \supDerY = \radio * sin(45);
        \infIzqX = \supIzqX; \infIzqY = -\supIzqY;
        \infDerX = \supDerX; \infDerY = -\supDerY;
        
        \raiz = \elementos[0];
    }
    
    \path (0, 0) node (centro_0) {\raiz};
    
    \path (\infIzqX, \infIzqY) node (inf_izq_0) {};
    \path (\infDerX, \infDerY) node (inf_der_0) {};
    \path (\supIzqX, \supIzqY) node (sup_izq_0) {};
    \path (\supDerX, \supDerY) node (sup_der_0) {};
    
    \foreach \indice [parse=true] in {1, ..., \largo - 1} {
        \tikzmath { 
            int \indicePadre;
            \indicePadre = \padres[\indice];
            \nivelActual = \niveles[\indice];
            \direccion = \direcciones[\indice];
            
            \dir = (int(\direccion) > 0) ? "izq" : "der";
            \dirPadre = (int(\direccion) > 0) ? "der" : "izq";
            \sepActual = int(\direccion) * \sepX;
            \valor = \elementos[\indice];
        }
        \coordinate (padre) at (centro_\indicePadre);
        \coordinate (pos) at ($ (padre) + (\sepActual, -\sepY) $);
        
        \path (pos) node[align=center] (centro_\indice) {\valor};
        
        \path ($ (pos) + (\infIzqX, \infIzqY) $) node (inf_izq_\indice) {};
        \path ($ (pos) + (\infDerX, \infDerY) $) node (inf_der_\indice) {};
        \path ($ (pos) + (\supIzqX, \supIzqY) $) node (sup_izq_\indice) {};
        \path ($ (pos) + (\supDerX, \supDerY) $) node (sup_der_\indice) {};
        
        \draw[<-, shorten <=0.1cm, shorten >=0.1] (sup_\dir_\indice)
            -- (inf_\dirPadre_\indicePadre);
    }
    
\end{tikzpicture}
\end{document}
``` 

## Hecho Simple
---
Manifestación que ocurre y no tiene relevancia desde el punto de vista jurídico

## Hecho jurídico
---
Como se menciona en el [[colección/documentos/Código Civil y Comercial de la Nación/Libro Primero/Título 4/Capítulo 1/Art. 257 del CC y CN, Hecho jurídico|Art. 257 del CC y CN]], todo acontecimiento que produce el nacimiento, modificación o extinción de [[ingeniería electrónica/legal/Introducción al derecho/Relación jurídica|relación o situación jurídica]]. Por ejemplo, contraer matrimonio

### Hecho jurídico externo
---
Acontecimiento natural o accidental producto de la naturaleza. Por ejemplo un terremoto que ha generado daños a personas y/o propiedades

### Hecho jurídico humano
---
Acontecimiento para el cual ha intervenido el hombre. Por ejemplo una persona destruye la propiedad de otro

#### Hecho jurídico humano involuntario
---
Aquel que la ausencia de discernimiento, intención o libertad. Por ejemplo un niño menor de edad que participa de un robo

#### Hecho jurídico humano voluntario
---
Es aquel realizado con discernimiento, intención y libertad. Por ejemplo comprar una casa

##### Hecho jurídico humano voluntario Ilícito
---
Implica una lesión o transgresión antijuridica. Son los [[Delito|delitos]] y [[ingeniería electrónica/legal/Introducción al derecho/Delito#^cuasidelito|cuasidelitos]]

##### Hecho jurídico humano voluntario lícito
---
Se obra de acuerdo a lo establecido en el [[ingeniería electrónica/legal/Introducción al derecho/Ordenamiento jurídico|ordenamiento jurídico]]. Por ejemplo vender un inmueble

###### Simple acto lícito
---
Como se menciona en el [[colección/documentos/Código Civil y Comercial de la Nación/Libro Primero/Título 4/Capítulo 1/Art. 258 del CC y CN, Simple acto lícito|Art. 258 del CC y CN]] Producen consecuencias jurídicas, pero no son realizados con ese fin. Por ejemplo escribir un libro

###### Acto jurídico
---
![[ingeniería electrónica/legal/Introducción al derecho/Acto jurídico#^definicion]]
