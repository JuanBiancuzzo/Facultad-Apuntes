---
dia: 2026-02-07
etapa: empezado
referencias: []
aliases:
  - Sociedad comercial
  - Responsabilidad limitada#^responsabilidad-limitada
  - Responsabilidad ilimitada#^responsabilidad-ilimitada
  - Responsabilidad mancomunada#^responsabilidad-mancomunada
  - Responsabilidad solidaria#^responsabilidad-solidaria
  - Responsabilidad subsidiaria#^responsabilidad-subsidiaria
  - Responsabilidad no subsidiaria#^responsabilidad-no-subsidiaria
  - Sociedades irregulares#Sociedades irregulares
  - Sociedades de hecho#Sociedades irregulares
  - Sociedades de interés#Sociedades de interés
  - Sociedades de Personas#Sociedades de interés
  - Sociedades por cuotas#Sociedades por cuotas
  - Sociedades por acciones#Sociedades por acciones
tags:
  - carrera/ingeniería-electrónica/legal/Derecho-societario
  - nota/facultad
vinculoFacultad:
  - tema: Derecho societario
    capitulo: 2
    materia: Legislación y ejercicio profesional
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La sociedad comercial, según el [[colección/documentos/Ley General de Sociedades/Capítulo 1/Sección 1/Art. 1 de la LGS, Concepto|Art. 1 de la LGS]], es cuando una o más [[ingeniería electrónica/legal/Introducción al derecho/Persona|personas]] en forma organizada, conforman a uno de los tipos previstos en la [[colección/documentos/Ley General de Sociedades/Ley General de Sociedades|LGS]], y se obligan a realizar aportes para aplicarlos a la producción o intercambio de [[ingeniería electrónica/legal/Introducción al derecho/Bien|bienes]] o servicios participando de los beneficios y soportando las pérdidas

Esta se trata de un contrato de organización creado como medio de concentrar capitales para la realización de una actividad de carácter económico y a través del cual sus otorgantes disponen de un complejo de normas estructurales y funcionales destinadas a regular permanentemente las relaciones emergentes del negocio jurídico constituido

Los contratos de sociedades se caracterizan por
* Es [[ingeniería electrónica/legal/Contratos/Contrato#^contrato-consencual|consensuales]]
    * Basta con el consentimiento de los otorgantes para hacer nacer los [[Derecho|derechos]] y [[Obligación|obligaciones]] que se derivan del carácter de socios
* Es [[ingeniería electrónica/legal/Contratos/Contrato#contrato-conmutativo|conmutativo]]
    * Al momento de constituir la sociedad las partes pueden conocer las ventajas y sacrificios que el negocio ofrece
* Es [[ingeniería electrónica/legal/Contratos/Contrato#^contrato-oneroso|oneroso]]
    * Porque no es concebible que una persona pueda adquirir los derechos de socio si no cumple con la necesaria aportación al fondo común
* Es de ejecución continuada o duradera
    * El contrato no se celebra para una operación sino para realizar actividades y generar con ellas ganancias a sus socios
* Es [[ingeniería electrónica/legal/Contratos/Contrato#^contrato-plurilateral|plurilateral]]
    * Porque el contrato ha sido pensado como instrumento de concentración de capital, y alberga a un número ilimitado de socios
* Es un contrato de organización
    * Cada parte constituye, a través de prestaciones coordinadas, el [[Patrimonio|patrimonio]] de un nuevo [[ingeniería electrónica/legal/Introducción al derecho/Persona|sujeto de derecho]] creado en virtud del contrato a través del cual los socios obtendrán los beneficios esperados

## Elementos específicos
---
Los elementos específicos del contratos de sociedad comercial son, los siguientes
* La organización
    * Está referido a la realización por el ente de una actividad mercantil de producción o intercambio de bienes o servicios
* La tipicidad
    * En virtud del cual los constituyentes de la sociedad no puede apartarse de los tipos creados por el legislador si pretenden tener una sociedad regularmente constituida
* Los aportes
    * Constituye un requisito de existencia, ya que sin aportes no puede haber socios y, por ende, tampoco sociedad
* La participación en los beneficios y suportación en las pérdidas
    * La obtención de beneficios económicos es el fin común o causa del contrato de sociedad, debiendo los socios soportar las perdidas sufridas por la sociedad

## Órganos sociales
---
* De gobierno
    * La asamblea o reunión de socios, tiene como función la toma de decisiones de la sociedad
* De administración y representación
    * Están a cargo de 
        * Balances e inventarios
        * Convocar a asambleas
        * Realización de negocios con terceros
    * Actúan en nombre de la sociedad 
* De fiscalización ^fiscalizacion
    * Controla a los demás órganos, por medio de sus integrantes como también por órganos especiales (Sindicatura o Consejo de Vigilancia)

## Responsabilidades de los socios
---
* Según los [[Bien|bienes]] con los que puede responder
    * Limitada  ^responsabilidad-limitada
        * Los socios responden sólo con los aportes efectuados a la sociedad
    * Ilimitada ^responsabilidad-limitada
         * Los socios responden ante los acreedores sociales no sólo con el aporte efectuado, sino también con sus bienes personales 
* Según el alcance de sus responsabilidades
    * Mancomunada ^responsabilidad-mancomunada
        * Cada socio responde sólo por una parte de las [[Obligación|obligaciones]]
    * Solidaria ^responsabilidad-solidaria
        * El acreedor puede exigirle el cumplimiento de toda la obligación a un solo socio y éste no puede exigir la división de la deuda entre los demás 
* Según el orden en que deben responder
    * Subsidiaria ^responsabilidad-subsidiaria
        * El acreedor social podrá ir contra el patrimonio personal de los socios, sólo si ya se dirigió contra el patrimonio de la sociedad y éste no alcanzó para satisfacer su crédito
    * No subsidiaria ^responsabilidad-no-subsidiaria
        * El acreedor social puede exigir el cumplimiento de la obligación directamente al socio, y éste no podrá exigirle que accione primero contra el patrimonio de la sociedad

## Clasificación
---

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, thick]
    \tikzmath {
        \scaleTitle = 1.2; \scale = 0.8;
    }
    
    \coordinate (sociedad) at (0, 0);
    
    \coordinate (irregular) at (-3, -2);
    \coordinate (regular) at (3, -2);
    
    \coordinate (interes) at (-1.5, -4);
    \coordinate (cuotas) at (3, -4);
    \coordinate (acciones) at (7.5, -4);
    
    % Sociedades de interes 
    \coordinate (colectivas)       at ($ (interes) + (1, -1) $);
    \coordinate (comanditasSimple) at ($ (interes) + (0.75, -2) $);
    \coordinate (capitalIndustria) at ($ (interes) + (1, -3) $);
    
    
    % Sociedades por cuotas 
    \coordinate (responsabilidad) at ($ (cuotas) + (1.2, -1) $);
    
    % Sociedades por acciones 
    \coordinate (garantia)           at ($ (acciones) + (0.75, -1) $);
    \coordinate (cooperativas)       at ($ (acciones) + (1.2, -2) $);
    \coordinate (simplificada)       at ($ (acciones) + (1.05, -3) $);
    \coordinate (economia)           at ($ (acciones) + (0.7, -4) $);
    \coordinate (comanditasAcciones) at ($ (acciones) + (1.15, -5) $);
    \coordinate (anonimas)           at ($ (acciones) + (0.75, -6) $);
    \coordinate (anonimasMayoria)    at ($ (acciones) + (1.2, -7) $);
    

    \begin{scope}[scale=\scaleTitle, align=center]
        \path (sociedad) node {Sociedad};
        
        \path (irregular) node {Irregular};
        \path (regular) node {Regular};
        
        \path (interes) node {Sociedades de\\interés};
        \path (cuotas) node {Sociedades por\\cuotas};
        \path (acciones) node {Sociedades por\\acciones};
        
    \end{scope}
    
    \begin{scope}[scale=\scale, align=left, anchor=north]
        % Sociedades de interes 
        \path (colectivas) node {Sociedades colectivas}; 
        \path (comanditasSimple) node {Sociedades en\\comandita simple};
        \path (capitalIndustria) node {Sociedades de capital\\e industria}; 
        
        % Sociedades por cuotas 
        \path (responsabilidad) node {Sociedades de\\responsabilidad limitada\\(SRL)};
        
        % Sociedades por acciones 
        \path (garantia) node {Sociedades por\\garantía reciproca};
        \path (cooperativas) node {Sociedades cooperativas};
        \path (simplificada) node {Sociedades por\\acciones simplificadas};
        \path (economia) node {Sociedad de\\economía mixta};
        \path (comanditasAcciones) node {Sociedades en\\comandita por acciones};
        \path (anonimas) node {Sociedad anónima};
        \path (anonimasMayoria) node {Sociedades anónimas con\\participación estatal\\mayoritaria};
        
    \end{scope}
    
    \begin{scope}[->, rounded corners=0.7em, shorten >=0.6cm, shorten <=0.6cm]
       \draw (sociedad) 
           -- ($ (irregular)!0.5!(regular |- sociedad) $)
           -- ($ (irregular)!0.5!(sociedad -| irregular) $)
           -- (irregular);
       \draw (sociedad) 
           -- ($ (irregular)!0.5!(regular |- sociedad) $)
           -- ($ (regular)!0.5!(sociedad -| regular) $)
           -- (regular);
           
        \draw (regular) 
            -- ($ (regular)!0.5!(cuotas) $)
            -- ($ (interes)!0.5!(regular -| interes) $)
            -- (interes);
        \draw (regular) -- (cuotas);
        \draw (regular) 
            -- ($ (regular)!0.5!(cuotas) $)
            -- ($ (acciones)!0.5!(regular -| acciones) $)
            -- (acciones);

        \coordinate (posInteres) at ($ (interes) + (-1, 0.35) $);
        \foreach \sociedad in {colectivas, comanditasSimple, capitalIndustria} {
            \draw (posInteres)
                -- ($ (\sociedad -| posInteres) + (0, -0.2) $)
                -- ++(1, 0);
        }
        \coordinate (posCuotas) at ($ (cuotas) + (-1, 0.35) $);
        \draw (posCuotas)
            -- ($ (responsabilidad -| posCuotas) + (0, -0.2) $)
            -- ++(1, 0);
        
        \coordinate (posAcciones) at ($ (acciones) + (-1, 0.35) $);
        \foreach \sociedad in {garantia, cooperativas, simplificada, economia, comanditasAcciones, anonimas, anonimasMayoria} {
            \draw (posAcciones)
                -- ($ (\sociedad -| posAcciones) + (0, -0.2) $)
                -- ++(1, 0);
        }
        
    \end{scope}
    
\end{tikzpicture}
\end{document}
``` 
### Sociedades irregulares
---
Si la sociedades no es creada mediante contrato escrito, carece de tipicidad o no está inscripta en el registro público de comercio, se la define como sociedad irregular o de hecho

### Sociedades de interés
---
Son sociedades que cuentan por lo general con muy pocos socios, y se caracterizan fundamentalmente por 
* La responsabilidad solidaria e ilimitada, aunque subsidiaria de sus integrantes
* Por un esquema sencillo de funcionamiento
* La relevancia de la personalidad de los socios, y de ello se deriva la necesidad de obtener la conformidad de los restantes socios para la cesión de la parte de interés por uno de ellos

Entre ellas se cuentan
* Las [[Sociedad colectiva|sociedades colectivas]]
* Las [[Sociedad en comandita simple|sociedades en comandita simple]]
* Las [[Sociedad de capital e industria|sociedades de capital e industria]]

### Sociedades por cuotas
---
Son exclusivamente las [[Sociedad de Responsabilidad Limitada|sociedades de responsabilidad limitada]], caracterizadas por 
* La división de su capital social en cuotas de igual valor
* La responsabilidad de todos sus socios por la cuotas que hubieran suscripto e integrado

### Sociedades por acciones
---
Son aquellas sociedades en las cuales su capital social se divide en [[Acciones|acciones]] que se incorporan a títulos representativos, y así circulan. Sus socios, denominados accionistas, limitan su responsabilidad a la integración de las acciones suscriptas

Entre ellas se cuentan
* Las [[Sociedad Anónima|sociedades anónimas]]
* Las [[Sociedad Anónima#Participación estatal mayoritaria|sociedades anónimas con participación estatal mayoritaria]]
* Las [[Sociedad en comandita por acciones|sociedades en comandita por acciones]]
* Las [[Sociedad de economía mixta|sociedades de economía mixta]]
* Las [[Sociedad por acciones simplificada|sociedades por acciones simplificadas]]
* Las [[Sociedad cooperativas|sociedades cooperativas]]
* Las [[Sociedad de garantía recíproca|sociedades de garantía recíproca]]

## Disolución
---
La disolución de una sociedad puede ser por 
* Pérdida total del capital social
* Quiebra
* Fusión con otra sociedad
* Resolución firme que le retire autorización para funcionar