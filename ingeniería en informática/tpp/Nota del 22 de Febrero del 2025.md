---
dia: 2025-02-22
tags:
  - proyecto-práctico/Trabajo-Profesional-de-Ingeniería-Informática
  - nota/proyecto
---
# Progreso
---
Establecimos algunos apartados que necesitamos considerar para el proyecto, estas son
* Como se logra un [[File system|file system]] distribuido
    * Establecer que limitaciones necesitamos poner sobre esta
* Un [[Scheduler|scheduler]] basado en un sistema multithreading pero considerando el tiempo de comunicación entre los peers
    * Analizar el tiempo como [[Recovery time objective#Estimación|la estimación del RTT]] para usarlo como parte fundamental de calculo para tomar decisiones
    * Buscar hacer pruebas con distintos estimadores y políticas de schedulers
* Ver modelo [[Modelo Transmission Control Protocol, Internet Protocol|TCP/IP]] 
    * Decidir si implementar o usar la implementación del [[Kernel|kernel]] [[Linux|linux]] de [[Transmission Control Protocol|TCP]] y [[User Datagram Protocol|UDP]]
    * Decidir si el [[Protocolo|protocolo]] que necesitamos lo hacemos sobre UDP o crearlo al mismo nivel de UDP y TCP
* Ver si podemos utilizar elementos de [[GNU|GNU]] y partes del kernel de linux, para implementar lo mínimo posible
    * Por ejemplo una [[Shell|shell]] como [[Bash|bash]]

También establecimos los tiempos general para el año

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.8, transform shape, thick]
    \tikzmath { 
        \propuesta = 1; \intermedio = 3; \buffer = 1; \nuevo = 3.5;
        \alto = 2; \anguloFecha = 45;
    }

    \path (0, 0) node (inicio) {};
    
    \foreach \inc/\mensaje/\fecha [parse=true] in {
		\propuesta/Propuesta/10 de Marzo,
		\intermedio/Desarrollo del\\Sistema operativo/10 de Abril,
		\buffer/Buffer/Inicio de\\Julio,
		\nuevo/Agregar nuevo\\contenido/Inicio de\\Agosto} 
	{
		\tikzmath { \angulo = atan2(\alto, \inc); }
		
        \draw (inicio.center) rectangle ++(\inc, \alto);
        
        \path (inicio.center) -- ++(\inc, \alto)
            node[midway, scale=0.8, rotate=\angulo, align=center] {\mensaje};
        
        \path ($ (inicio.center) + (-0.2, \alto) $) 
            node[scale=0.7, above right=0.1cm, rotate=\anguloFecha, align=center] 
                {\fecha};

        \draw[|<->|] ($ (inicio.center) + (0, -0.2) $) -- ++(\inc, 0)
            node [midway, below = 2pt, scale=0.8] {$\inc$ meses};

        \path ($ (inicio.center) + (\inc, 0) $)
            node (inicio) {};
    }

    \path ($ (inicio.center) + (-0.2, \alto) $) 
        node[scale=0.7, above right=0.1cm, rotate=\anguloFecha, align=center] 
            {Mitad de\\Noviembre};

\end{tikzpicture}
\end{document}
```
