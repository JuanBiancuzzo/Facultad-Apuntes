---
dia: 2026-09-05
etapa: empezado
referencias: []
aliases: 
  - Elasticidad de la demanda#De la demanda
  - Elasticidad de la oferta#De la oferta
  - Elasticidad del ingreso#Elasticidad del ingreso
  - Elasticidad curzada#Elasticidad curzada
  - Demanda perfectamente inelástica#^perfectamente-inelastica-demanda
  - Demanda inelástica#^inelastica-demanda
  - Demanda unitaria#^unitaria-demanda
  - Demanda elástica#^elastica-demanda
  - Demanda perfectamente elástica#^perfectamente-elastica-demanda
  - Oferta perfectamente inelástica#^perfectamente-inelastica-oferta
  - Oferta inelástica#^inelastica-oferta
  - Oferta unitaria#^unitaria-oferta
  - Oferta elástica#^elastica-oferta
  - Oferta perfectamente elástica#^perfectamente-elastica-oferta
tags:
  - carrera/ingeniería-en-informática/ebt-1/Economía
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Economía
    capitulo: 2
    materia: Empresas de Bases Tecnológicas 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La elasticidad mide la sensibilidad de una variable respecto de la otra. Es una cifra que indica la variación porcentual que experimenta una variable (como el [[ingeniería en informática/ebt 1/Economía/Precio|precio]] o la cantidad) cuando otra varía un $1 \%$

## Elasticidad del ingreso
---
La elasticidad del ingreso mide cuánto cambia la cantidad demandada cuando cambia el ingreso del [[ingeniería en informática/ebt 1/Economía/Mercado#^demandante|comprador]], y se puede calcular de la siguiente forma $$ E_y = \frac{\%\Delta Q}{\%\Delta Y} $$
Donde se entiende
* Si $E_y > 1$ es un [[ingeniería electrónica/legal/Introducción al derecho/Bien|bien]] de lujo, ya que al variar el ingreso, hay una varaición mayor de la cantidad. También se puede entender que es no escencial
* Si $0 < E_y < 1$ es un bien normal, por lo que es necesario, pero se puede acomodar reduciendo la cantidad
* Si $E_y < 0$ es un bien inferior, cuando hay más ingresos, no se utiliza más 

## Elasticidad curzada
---
La elasticidad cruzado mide cuánto cambia la cantidad demandada del bien $x$ cuando cambia el precio del bien $y$, y se puede calcular de la siguiente forma $$ E_{xy} = \frac{\%\Delta Q_x}{\%\Delta P_y} $$
Donde se entiende 
* Si $E_{xy} > 0$ es un [[ingeniería en informática/ebt 1/Economía/Bien sustituto|bien sustituto]]
* Si $E_{xy} < 0$ es un [[ingeniería en informática/ebt 1/Economía/Bien complementario|bien complementario]]
* Si $E_{xy} \simeq 0$ son bienen independientes

## De la demanda
---
La elasticidad del precio en cuanto a la [[ingeniería en informática/ebt 1/Economía/Demanda|demanda]], mide cuánto cambia la cantidad demandada cuando el precio sube el $1 \%$, y se puede calcular de la siguiente forma $$ E_p = \frac{\% \Delta Q}{\% \Delta P} = \frac{ \frac{\Delta Q}{Q} }{ \frac{\Delta P}{P} } = \frac{P}{Q} ~ \frac{\Delta Q}{\Delta P} $$ 
En generar es una cantidad negativa, por lo que por convención se trabaja con su magnitud

### Clasificación
---
Se puede clasificar, la elasticidad de la demanda, en $5$ tipos y para eso vamos a separar por valores de la elasticidad

* Perfectamente inelástica ^perfectamente-inelastica-demanda
	* Donde se tiene que $E_p = 0$, por lo que $\% \Delta Q = 0$
	* Se entiende que al variar el precio, la cantidad demandada es la misma
	* La curva de demanda estaría dado por
		```tikz
		\usetikzlibrary{math}
		\usetikzlibrary{calc}
		
		\begin{document}
		\definecolor{demanda}{RGB}{218, 111, 142}
		\begin{tikzpicture}[scale=0.8, transform shape, thick]
			\tikzmath { \alto = 5.5; \largo = 8; \diff = 0.5; \sep = 0.3; \escala = 1.2; }
			
			\draw[->] (-\diff, 0) -- ++({\largo + 2 * \diff}, 0)
				node[pos=1.01, right=2pt, scale=\escala] {Cantidad};
			\draw[->] (0, -\diff) -- ++(0, {\alto + 2 * \diff})
				node[pos=1.01, above=2pt, scale=\escala] {Precio};
				
			\coordinate (inicio) at ({\largo / 2}, 0);
			\coordinate (final) at ($ (inicio) + (0, \alto) $);
				
			\draw[demanda, shorten <=\sep cm, shorten >=\sep cm, ultra thick] 
				(inicio) -- (final);
		\end{tikzpicture}
		\end{document}
		```
	* Un ejemplo son las medicaciones, donde se compran lo mismo cuesten lo que cueste, ya que alternativa es peor
	
* Inelástica ^inelastica-demanda
	* Donde se tiene que $E_p \in (0,~ 1)$, por lo que $\% \Delta Q < \% \Delta P$
	* Se entiende que variando el precio, la cantidad demandada se modifica levemente
	* La curva de demanda estaría dado por
		```tikz
		\usetikzlibrary{math}
		\usetikzlibrary{calc}
		
		\begin{document}
		\definecolor{demanda}{RGB}{218, 111, 142}
		\begin{tikzpicture}[scale=0.8, transform shape, thick]
			\tikzmath { \alto = 5.5; \largo = 8; \diff = 0.5; \sep = 0.3; \escala = 1.2; }
			
			\draw[->] (-\diff, 0) -- ++({\largo + 2 * \diff}, 0)
				node[pos=1.01, right=2pt, scale=\escala] {Cantidad};
			\draw[->] (0, -\diff) -- ++(0, {\alto + 2 * \diff})
				node[pos=1.01, above=2pt, scale=\escala] {Precio};
				
			\coordinate (inicio) at ({\largo / 2 + \largo / 8}, 0);
			\coordinate (final) at ({\largo / 2 - \largo / 8}, \alto);
				
			\draw[demanda, shorten <=\sep cm, shorten >=\sep cm, ultra thick] 
				(inicio) -- (final);
		\end{tikzpicture}
		\end{document}
		```
	* Un ejemplo es la electricidad, donde si sube las tarifas el consubo baja peo levemente, ya que es necesario para realizar otras cosas
	  
* Unitaria ^unitaria-demanda
	* Donde se tiene que $E_p = 1$, por lo que $\% \Delta Q = \% \Delta P$
	* Se entiende cumpliendo perfectamente la [[ingeniería en informática/ebt 1/Economía/Demanda#^ley-demanda|ley de la demanda]]
	* La curva de demanda estaría dado por
		```tikz
		\usetikzlibrary{math}
		\usetikzlibrary{calc}
		
		\begin{document}
		\definecolor{demanda}{RGB}{218, 111, 142}
		\begin{tikzpicture}[scale=0.8, transform shape, thick]
			\tikzmath { \alto = 5.5; \largo = 8; \diff = 0.5; \sep = 0.3; \escala = 1.2; }
			
			\draw[->] (-\diff, 0) -- ++({\largo + 2 * \diff}, 0)
				node[pos=1.01, right=2pt, scale=\escala] {Cantidad};
			\draw[->] (0, -\diff) -- ++(0, {\alto + 2 * \diff})
				node[pos=1.01, above=2pt, scale=\escala] {Precio};
				
			\coordinate (inicio) at (0, \alto);
			\coordinate (final) at (\largo, 0);
				
			\draw[demanda, shorten <=\sep cm, shorten >=\sep cm, ultra thick] 
				(inicio) -- (final);
		\end{tikzpicture}
		\end{document}
		```
	  
* Elástica ^elastica-demanda
	* Donde se tiene que $E_p \in (1,~ \infty)$, por lo que $\% \Delta Q > \% \Delta P$
	* Se entiende que variando el precio, cambia mucho la demada, generalmente ocurriendo con [[ingeniería electrónica/legal/Introducción al derecho/Bien|bienes o servicios]] no escenciales
	* La curva de demanda estaría dado por
		```tikz
		\usetikzlibrary{math}
		\usetikzlibrary{calc}
		
		\begin{document}
		\definecolor{demanda}{RGB}{218, 111, 142}
		\begin{tikzpicture}[scale=0.8, transform shape, thick]
			\tikzmath { \alto = 5.5; \largo = 8; \diff = 0.5; \sep = 0.3; \escala = 1.2; }
			
			\draw[->] (-\diff, 0) -- ++({\largo + 2 * \diff}, 0)
				node[pos=1.01, right=2pt, scale=\escala] {Cantidad};
			\draw[->] (0, -\diff) -- ++(0, {\alto + 2 * \diff})
				node[pos=1.01, above=2pt, scale=\escala] {Precio};
				
			\coordinate (inicio) at (0, {\alto / 2 + \alto / 8});
			\coordinate (final) at (\largo, {\alto / 2 - \alto / 8});
				
			\draw[demanda, shorten <=\sep cm, shorten >=\sep cm, ultra thick] 
				(inicio) -- (final);
		\end{tikzpicture}
		\end{document}
		```
	* Un ejemplo son los pasajes de avión, cuando el precio del pasaje aumenta, el viaje se posterga hasta que se pueda, cayendo la demanda
	
* Perfectamente elástica ^perfectamente-elastica-demanda
	* Donde se tiene que $E_p = \infty$, por lo que $\% \Delta P = 0$
	* Se entiende que no hay variación de precio, únicamente de cantidad
	* La curva de demanda estaría dado por
		```tikz
		\usetikzlibrary{math}
		\usetikzlibrary{calc}
		
		\begin{document}
		\definecolor{demanda}{RGB}{218, 111, 142}
		\begin{tikzpicture}[scale=0.8, transform shape, thick]
			\tikzmath { \alto = 5.5; \largo = 8; \diff = 0.5; \sep = 0.3; \escala = 1.2; }
			
			\draw[->] (-\diff, 0) -- ++({\largo + 2 * \diff}, 0)
				node[pos=1.01, right=2pt, scale=\escala] {Cantidad};
			\draw[->] (0, -\diff) -- ++(0, {\alto + 2 * \diff})
				node[pos=1.01, above=2pt, scale=\escala] {Precio};
				
			\coordinate (inicio) at (0, {\alto / 2});
			\coordinate (final) at (\largo, {\alto / 2});
				
			\draw[demanda, shorten <=\sep cm, shorten >=\sep cm, ultra thick] 
				(inicio) -- (final);
		\end{tikzpicture}
		\end{document}
		```
	* Un ejemplo es la soja, se vende al precio del mercado


## De la oferta
---
La elasticidad del precio en cuanto a la [[ingeniería en informática/ebt 1/Economía/Oferta|oferta]], mide cuánto cambia la cantidad ofertada cuando el precio sube el $1 \%$, y se puede calcular de la siguiente forma $$ E_p = \frac{\% \Delta Q}{\% \Delta P} $$
En este caso, el signo es positivo, por lo que hablar de magnitud, o no, es igual

### Clasificación
---
Se puede clasificar, la elasticidad de la oferta, en $5$ tipos y para eso vamos a separar por valores de la elasticidad

* Perfectamente inelástica ^perfectamente-inelastica-oferta
	* Donde se tiene que $E_o = 0$, por lo que $\% \Delta Q = 0$
	* Se entiende que al variar el precio, la cantidad demandada es la misma
	* La curva de demanda estaría dado por
		```tikz
		\usetikzlibrary{math}
		\usetikzlibrary{calc}
		
		\begin{document}
		\definecolor{oferta}{RGB}{0, 127, 204}
		\begin{tikzpicture}[scale=0.8, transform shape, thick]
			\tikzmath { \alto = 5.5; \largo = 8; \diff = 0.5; \sep = 0.3; \escala = 1.2; }
			
			\draw[->] (-\diff, 0) -- ++({\largo + 2 * \diff}, 0)
				node[pos=1.01, right=2pt, scale=\escala] {Cantidad};
			\draw[->] (0, -\diff) -- ++(0, {\alto + 2 * \diff})
				node[pos=1.01, above=2pt, scale=\escala] {Precio};
				
			\coordinate (inicio) at ({\largo / 2}, 0);
			\coordinate (final) at ($ (inicio) + (0, \alto) $);
				
			\draw[oferta, shorten <=\sep cm, shorten >=\sep cm, ultra thick] 
				(inicio) -- (final);
		\end{tikzpicture}
		\end{document}
		```

* Inelástica ^inelastica-oferta
	* Donde se tiene que $E_0 \in (0,~ 1)$, por lo que $\% \Delta Q < \% \Delta P$
	* Se entiende que variando el precio, la cantidad ofertada se modifica levemente
	* La curva de demanda estaría dado por
		```tikz
		\usetikzlibrary{math}
		\usetikzlibrary{calc}
		
		\begin{document}
		\definecolor{oferta}{RGB}{0, 127, 204}
		\begin{tikzpicture}[scale=0.8, transform shape, thick]
			\tikzmath { \alto = 5.5; \largo = 8; \diff = 0.5; \sep = 0.3; \escala = 1.2; }
			
			\draw[->] (-\diff, 0) -- ++({\largo + 2 * \diff}, 0)
				node[pos=1.01, right=2pt, scale=\escala] {Cantidad};
			\draw[->] (0, -\diff) -- ++(0, {\alto + 2 * \diff})
				node[pos=1.01, above=2pt, scale=\escala] {Precio};
				
			\coordinate (inicio) at ({\largo / 2 - \largo / 8}, 0);
			\coordinate (final) at ({\largo / 2 + \largo / 8}, \alto);
				
			\draw[oferta, shorten <=\sep cm, shorten >=\sep cm, ultra thick] 
				(inicio) -- (final);
		\end{tikzpicture}
		\end{document}
		```

* Unitaria ^unitaria-oferta
	* Donde se tiene que $E_o = 1$, por lo que $\% \Delta Q = \% \Delta P$
	* Se entiende cumpliendo perfectamente la [[ingeniería en informática/ebt 1/Economía/Oferta#^ley-oferta|ley de la oferta]]
	* La curva de demanda estaría dado por
		```tikz
		\usetikzlibrary{math}
		\usetikzlibrary{calc}
		
		\begin{document}
		\definecolor{oferta}{RGB}{0, 127, 204}
		\begin{tikzpicture}[scale=0.8, transform shape, thick]
			\tikzmath { \alto = 5.5; \largo = 8; \diff = 0.5; \sep = 0.3; \escala = 1.2; }
			
			\draw[->] (-\diff, 0) -- ++({\largo + 2 * \diff}, 0)
				node[pos=1.01, right=2pt, scale=\escala] {Cantidad};
			\draw[->] (0, -\diff) -- ++(0, {\alto + 2 * \diff})
				node[pos=1.01, above=2pt, scale=\escala] {Precio};
				
			\coordinate (inicio) at (0, 0);
			\coordinate (final) at (\largo, \alto);
				
			\draw[oferta, shorten <=\sep cm, shorten >=\sep cm, ultra thick] 
				(inicio) -- (final);
		\end{tikzpicture}
		\end{document}
		```

* Elástica ^elastica-oferta
	* Donde se tiene que $E_o \in (1,~ \infty)$, por lo que $\% \Delta Q > \% \Delta P$
	* Se entiende que variando el precio, cambia mucho la oferta, generalmente ocurriendo con bienes o servicios no escenciales
	* La curva de demanda estaría dado por
		```tikz
		\usetikzlibrary{math}
		\usetikzlibrary{calc}
		
		\begin{document}
		\definecolor{oferta}{RGB}{0, 127, 204}
		\begin{tikzpicture}[scale=0.8, transform shape, thick]
			\tikzmath { \alto = 5.5; \largo = 8; \diff = 0.5; \sep = 0.3; \escala = 1.2; }
			
			\draw[->] (-\diff, 0) -- ++({\largo + 2 * \diff}, 0)
				node[pos=1.01, right=2pt, scale=\escala] {Cantidad};
			\draw[->] (0, -\diff) -- ++(0, {\alto + 2 * \diff})
				node[pos=1.01, above=2pt, scale=\escala] {Precio};
				
			\coordinate (inicio) at (0, {\alto / 2 - \alto / 8});
			\coordinate (final) at (\largo, {\alto / 2 + \alto / 8});
				
			\draw[oferta, shorten <=\sep cm, shorten >=\sep cm, ultra thick] 
				(inicio) -- (final);
		\end{tikzpicture}
		\end{document}
		```

* Perfectamente elástica ^perfectamente-elastica-oferta
	* Donde se tiene que $E_o = \infty$, por lo que $\% \Delta P = 0$
	* Se entiende que no hay variación de precio, únicamente de cantidad
	* La curva de demanda estaría dado por
		```tikz
		\usetikzlibrary{math}
		\usetikzlibrary{calc}
		
		\begin{document}
		\definecolor{oferta}{RGB}{0, 127, 204}
		\begin{tikzpicture}[scale=0.8, transform shape, thick]
			\tikzmath { \alto = 5.5; \largo = 8; \diff = 0.5; \sep = 0.3; \escala = 1.2; }
			
			\draw[->] (-\diff, 0) -- ++({\largo + 2 * \diff}, 0)
				node[pos=1.01, right=2pt, scale=\escala] {Cantidad};
			\draw[->] (0, -\diff) -- ++(0, {\alto + 2 * \diff})
				node[pos=1.01, above=2pt, scale=\escala] {Precio};
				
			\coordinate (inicio) at (0, {\alto / 2});
			\coordinate (final) at (\largo, {\alto / 2});
				
			\draw[oferta, shorten <=\sep cm, shorten >=\sep cm, ultra thick] 
				(inicio) -- (final);
		\end{tikzpicture}
		\end{document}
		```

