---
dia: 2024-09-01
tags:
  - nota/facultad
  - ingeniería-en-informática/fisica-2/Electrostática-en-conductores-y-dieléctricos
  - carrera/ingeniería-electrónica/fisica-2/Electrostática-en-conductores-y-dieléctricos
---
# Definición
---
La carga es una propiedad de la materia, por lo que las [[Carga eléctrica|cargas]] están ubicadas en medio materiales

Experimentalmente, podemos probar que el [[Campo eléctrico|campo eléctrico]] dentro de un conductor en equilibrio estático, resulta nulo. Una manera de pensar esto intuitivamente es que las cargas, inducidas por el campo, se reordenan en el conductor y modifican el campo hasta que estas se posicionan en la [[Superficie|superficie]] del conductor y dejan de moverse. Anulando el campo, el campo eléctrico dentro del mismo

![[Campo eléctrico en un conductor.png]]

## Campo eléctrico en las cercanías de un conductor
---
Si analizamos un punto muy cercano a la superficie, el campo eléctrico es perpendicular a la superficie, por lo que si aplicamos la [[Teorema de Gauss#Para campo eléctrico|ley de gauss]], llegamos a la expresión del campo eléctrico en las cercanías de la superficie. Es similar al campo de un plano infinito, pero solo tenemos en cuenta una de las tapas de la superficie de gauss, ya que la que se encuentra dentro del conductor tiene flujo nulo $$ \vec{E}_p = \frac{\sigma_p}{\epsilon_0} ~ \hat{n}_c $$

## Cascará esférica conductora
---
Este caso es similar al del [[Blindaje electroestático|blindaje electroestático]], pero al tener una carga en el interior, el campo en el medio ya no es nulo. Por ley de gauss, tenemos que la carga de la superficie interior del cascarón $Q_{int}$ debe anular a la carga de la esfera conductora $Q$. Por otro lado, la carga del cascarón era inicialmente nula, por lo que se deben anular las cargas de la superficie interior y exterior $Q_{ext}$ (carga total permanece constante) $$ \begin{align} Q_{int} &= -Q \\ Q_{ext} &= Q \end{align} $$
```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath {
        \r1 = 1.5;
        \r2 = 2.75;
        \r3 = 3.5;
    }
    
    \fill[darkgray, opacity=0.8] circle (\r1);
    \path[draw=none, fill=darkgray, opacity=0.8, even odd rule] 
		(0, 0) circle (\r3) 
		(0, 0) circle (\r2);
		
	\foreach \angulo in {0, 20, ..., 360} {
    	\path ({(\r1 - 0.2) * cos(\angulo)}, {(\r1 - 0.2) * sin(\angulo)})
        	node[red] {$+$};
	}
    
    \path (0, {\r1 - 0.7}) node {$\vec{E} = 0$};
    \path ({-\r1 - 0.3}, 0) node {$Q$};
    
    \tikzmath { \mitad = \r3 / 2 + \r2 / 2; }
    \path ({\mitad * cos(60)}, {\mitad * sin(60)}) node {$~\vec{E} = 0$};

\end{tikzpicture}
\end{document}
```
