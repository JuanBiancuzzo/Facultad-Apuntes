---
dia: 2026-02-10
etapa: empezado
referencias: []
aliases: 
  - Licitación pública
  - Licitación privada
  - Concurso pública
  - Concurso privada
tags:
  - carrera/ingeniería-electrónica/legal/Administración-Pública-Nacional
  - nota/facultad
vinculoFacultad:
  - tema: Adminstración Pública Nacional
    capitulo: 5
    materia: Legislación y ejercicio profesional
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
El [[ingeniería electrónica/legal/Introducción al derecho/Estado|Estado]] encarga la construcción, mejora o mantenimiento de una [[Obra pública|obra pública]] a una empresa pero esta recupera parcialmente o totalmente la inversión mediante la explotación de un activo, a través del cobro de una tarifa a los usuarios de esta

## Procedimiento de selección
---
El procedimiento depende si es una licitación o concurso, y si es pública o privada, o esta la posibilidad de ser una contratación directa

Si es una licitación, implica que el criterio del cocontratante recaerá primordialmente en factores económico, y si es un concurso, en factores no económicos

Si es pública, el llamado esta dirigido a una cantidad indeterminada de posible oferentes, debe ser publicado en el Boletín Oficial $20$ días antes de la fecha de apertura, y con difusión en medios oficiales, provinciales o municipales. En el caso de ser privado el llamado a participar es dirigido exclusivamente a, al menos $5$, proveedores que se hallen incorporados al [[Sistema de Información de Proveedores (SIPro)|SIPro]], con $7$ días de anticipación a la fecha de apertura

En el caso de ser privada, debe tener un monto menor a $5000$ módulos (un módulo es una cantidad de plata que puede variar en el tiempo, pero simplifica la idea de un límite por plata), si lo supera, deberá pasar a ser pública

En el caso de contratación directa, se contrata directamente a un particular. Generalmente se dan en los siguientes casos
* Cuando el monto no es significativo
* Se busca contratar una persona particular, puede ser por tratarse de obras científicas, técnicas o artistas
* Desierta o fracasada una licitación o concurso anterior
* Por urgencia o emergencia
* Secreto por razones de seguridad o defensa nacional
* Reparaciones maquinarias, vehículos, equipos o motores
* Para la prestación de servicios de seguridad, logística o salud
* Contrataciones con universidades nacionales

## Clases de licitaciones y concursos
---
* Según las fases o etapas de selección
    * De etapa única, la comparación de las ofertas y calidad de los oferentes se realiza en un mismo acto
    * De etapa multiple, se realiza en dos o más fases la comparación de calidad de oferentes, antecedentes empresariales y técnicos, y capacidad económica financiera
    
* Según la ubicación
    * Nacional, donde el domicilio o sede principal está en el país, o tiene una sucursal en el país
    * Internacional, no tienen ninguna sucursal registrada en el país

## Proceso de licitación pública
---
En principio, la licitación pública busca
* La libre concurrencia, mientras más oferentes mayor es la posibilidad de obtener el precio y condiciones más convenientes
* Igualdad, el licitante (el estado) no podrá poner a oferentes en una situación más ventajosa sobre otros

Tiene las siguiente etapas

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\pasos  {{"Elaboración\\del pliego", "Llamado", "Oferta y\\presentación", "Apertura de\\los sobres", "Adjudicación", "Perfeccionamiento", "La mejora de\\propuesta" }}
    \def\largos {{ -1, 1.5, -1, -1, -1, 2.3, -1 }}

    \tikzmath { 
        \largoPasos = dim(\pasos); \posInicial = 0;
        \primerPaso = \pasos[\posInicial];
        \largo = 2; \alto = 1.5; \flecha = \largo / 4;
        \size = 0.7;
    }
    \draw (0, 0) 
        -- ++({0.75 * \largo}, 0) node (temp) {}
        -- ++(\flecha, {-\alto / 2})
        -- ++(-\flecha, {-\alto / 2})
        -- ++({-0.75 * \largo}, 0)
        -- cycle;
    \path (0, {-\alto / 2}) -- ++({3 * \largo / 2}, 0)
        node[pos=0.3, scale=\size, align=center] {\primerPaso};
    
    \foreach \indice [parse=true] in {\posInicial + 1, ..., \largoPasos - 1} {
        \tikzmath { 
            \paso = \pasos[\indice]; 
            \largoActual = \largos[\indice];
            \largoPaso = (\largoActual > 0) ? \largoActual : \largo;
        }
        
        \path ($ (temp.center) + (\flecha, {-\alto / 2}) $) 
            -- ++(\largoPaso, 0) node[pos=0.45, scale=\size, align=center] {\paso};
        
        \draw (temp.center) 
            -- ++(\largoPaso, 0) node (temp) {}
            -- ++(\flecha, {-\alto / 2})
            -- ++(-\flecha, {-\alto / 2})
            -- ++(-\largoPaso, 0)
            -- ++(\flecha, {\alto / 2})
            -- cycle;        
    }
    
\end{tikzpicture}
\end{document}
``` 

1. Elaboración el pliego de bases y condiciones
     * Las cláusulas redactadas por la [[ingeniería electrónica/legal/Administración Pública Nacional/Administración Pública Nacional|administración pública]]  especificando la [[ingeniería electrónica/legal/Administración Pública Nacional/Obra pública|obra]] o servicio que se licita estableciendo las condiciones del [[ingeniería electrónica/legal/Contratos/Contrato|contrato]], objeto de la prestación y determina el tramite a seguir en el proceso de licitación en caso de interés
2. El llamado a licitación
     * Invitación al público para que presente ofertas
3. Oferta y presentación del pliego
     * Las [[ingeniería electrónica/legal/Contratos/Contrato#Oferta|ofertas]] deben realizarse dentro del plazo, cumpliendo todos los requisitos formales, como que el monto ofertado deba ser claro, determinado, escrito y firmado. También junto con la propuesta el oferente da una garantía de oferta
4. Apertura de los sobres
     * Se abren las propuestas en presencia de funcionarios designados y comienza el periodo de análisis de las ofertas
5. Adjudicación
     * Acto administrativo en el cual se elige de entre los oferentes a aquel que ha prestado la oferta calificada como la más conveniente
6. Perfeccionamiento
     * Se notifica al oferente de forma fehaciente y dentro del plazo de la oferta. Se perfecciona el contrato y la administración devuelve la garantía de oferta, a los oferentes que no fueron elegidos
7. La mejora de propuesta
     * Seleccionar al mejor oferente en el caso de que $2$ o más tengan la misma propuesta