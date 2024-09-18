---
dia: 2023-10-14
aliases:
  - MPS del transistor bipolar de juntura
  - MPS del TBJ
  - Transconductancia para transistor bipolar de juntura#Transconductancia
  - Transconductancia para TBJ#Transconductancia
  - Conductancia de colector para transistor bipolar de juntura#Conductancia de salida o de colector
  - Conductancia de colector para TBJ#Conductancia de salida o de colector
  - Conductancia de salida para transistor bipolar de juntura#Conductancia de salida o de colector
  - Conductancia de salida para TBJ#Conductancia de salida o de colector
  - Conductancia de base para transistor bipolar de juntura#Conductancia de entrada o de base
  - Conductancia de base para TBJ#Conductancia de entrada o de base
  - Conductancia de entrada para transistor bipolar de juntura#Conductancia de entrada o de base
  - Conductancia de entrada para TBJ#Conductancia de entrada o de base
  - Conductancia de realimentación para transistor bipolar de juntura#Conductancia de realimentación
  - Conductancia de realimentación para TBJ#Conductancia de realimentación
tags:
  - dispo/Transistor-bipolar-de-juntura
  - nota/facultad
  - circuitos/Dispositivos-de-control-de-señal-y-en-conmutación
---
# Definición
---
El [[Transistor bipolar de juntura|TBJ]] es un dispositivo [[Función lineal|alineal]] por lo que no cumple el [[Principio de superposición|principio de superposición]]. Entonces teniendo el [[Circuito eléctrico|circuito]]

```tikz
\usepackage[
	straightvoltages,
	americancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester
]{circuitikz} 

\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
}

\begin{document} 
	\begin{circuitikz}[voltage shift=0.5, scale=1.3, transform shape, thick]
		\draw (0, 0) node[ground] (gr) {};
		\draw (0, 0) to[american, V, invert, l^=$V_{BE}$] ++(0, 2)
			to[sV, l^=$v_{be}$] ++(2, 0)
			to[short, i^=$I_B + i_b$] ++(1, 0)
				node[npn, xscale=1.2, yscale=1.5, anchor=B] (npn) {};
		
		\draw (npn.E) to[short] ($ (gr -| 0, 0) + (npn.E |- 0, 0) $)
			node[ground] (gr) {};

		\draw ($ (gr -| 2, 0) + (npn.E |- 0, 0) $) 
				node[ground] {}
			to[american, V, invert, l^=$V_{CE}$] ++(0, 2)
			to[sV, l^=$v_{ce}$] ++(0, 2)
				node (temp) {}
			to[short] ($ (temp.center -| 0, 0) + (npn.C |- 0, 0) $)
			to[short, i^=$I_C + i_c$] (npn.C);
	
	\end{circuitikz}
\end{document}
```


Por lo tanto vamos a aproximarla usando el [[Serie de Taylor#Polinomio de Taylor|polinomio de Taylor]] de primer orden $$
i_C(V_{BE} + v_{be}, V_{CE} + v_{ce}) \simeq ~ I_C(V_{BE}, V_{CE})
+ \frac{\partial i_C}{\partial v_{BE}} \biggm|_{Q} v_{be} 
+ \frac{\partial i_C}{\partial v_{CE}} \biggm|_{Q} v_{ce} $$ $$
i_B(V_{BE} + v_{be}, V_{CE} + v_{ce}) \simeq ~ I_B(V_{BE}, V_{CE})
+ \frac{\partial i_B}{\partial v_{BE}} \biggm|_{Q} v_{be} 
+ \frac{\partial i_B}{\partial v_{BC}} \biggm|_{Q} v_{bc} $$
donde $Q \equiv$  punto de polarización  $(V_{BE}, V_{CE})$.

## Rango de validez del modelo
---
El error que cometemos entre el valor estimado de señal $i_c(t)$ y el valor real $i_C(t) - I_C$ debe ser pequeño. Al igual que el [[Modelo de pequeña señal para diodo]], a temperatura ambiente se obtiene $$ v_{be} \approx 5.2~mV $$ donde en la práctica se tolera $$ |v_{be}| < 10~mV $$

## Modelo para bajas frecuencias
---
Generalizamos la idea de linealización para todas las corrientes y todas las señales aplicadas sobre cualquiera de las fuentes de polarización

Puntos fundamentales:
* Podemos separar la respuesta del transistor en polarización y pequeña señal
* La señal es pequeña, aunque la respuesta no [[Función lineal|lineal]] puede aproximarse a una respuesta lineal
* Al poder considerar la respuesta lineal, se puede aplicar una pseudo-[[Principio de superposición|superposición]]

Podemos evaluar a las [[Corriente eléctrica|corrientes]] $$ i_C(V_{BE} + v_{be}, V_{CE} + v_{ce}) \approx I_C(V_{BE}, V_{CE}) + \frac{\partial i_C}{\partial v_{BE}} \biggm|_{Q}  v_{be} + \frac{\partial i_C}{\partial v_{CE}} \biggm|_{Q} v_{ce} $$ $$ i_B(V_{BE} + v_{be}, V_{CE} + v_{ce}) \approx I_C(V_{BE}, V_{CE}) + \frac{\partial i_B}{\partial v_{BE}} \biggm|_{Q} v_{be} + \frac{\partial i_B}{\partial v_{BC}} \biggm|_{Q} v_{bc} $$
donde $Q \equiv$  punto de polarización  $(V_{BE}, V_{CE})$

$$ i_c = \frac{\partial i_C}{\partial v_{BE}} \biggm|_{Q}  v_{be} + \frac{\partial i_C}{\partial v_{CE}} \biggm|_{Q} v_{ce} = g_m v_{be} ~ + ~ g_o v_{ce} $$
$$ i_b = \frac{\partial i_B}{\partial v_{BE}} \biggm|_{Q} v_{be} + \frac{\partial i_B}{\partial v_{BC}} \biggm|_{Q} v_{bc} = g_\pi v_{be} ~ + ~ g_\mu v_{be} $$

Produciendo el circuito equivalente

```tikz
\usepackage[
	europeanvoltages,
	americancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester
]{circuitikz} 

\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
}

\begin{document} 
	\begin{circuitikz}[voltage shift=0.5, scale=1.3, transform shape, thick]

		\draw (0, 0) to[short, o-] ++(2, 0)
				node (rpi) {}
			to[short] ++(5.5, 0)
				node (ro) {}
			to[short, -o] ++(2, 0);
		
		\path (rpi) -- (ro) node[midway, below=2pt] {$E$};

		\draw (rpi) to[R, l_=$r_\pi$, *-] ++(0, 3)
				node (vb) {}
			to[short, -o] ++(-2, 0)
				node[above left=2pt] {$B$};
				
		\draw (ro) to[R, l_=$r_o$, *-] ++(0, 3)
				node (vc) {}
			to[short, -o] ++(2, 0)
				node[above right=2pt] {$C$};

		\draw (vb) to[R, l^=$r_\mu$, *-] ++(3, 0)
			to[isource, l^=$g_m ~ v_{be}$, -*] ++(0, -3);
		\draw (vc) to[short, *-*] ++(-2.5, 0);

	\end{circuitikz}
\end{document}
```

### Transconductancia
---
Calculándolo en [[Modo activo directo del transistor bipolar de juntura|MAD]] y un TBJ de tipo [[Transistor bipolar de juntura#NPN|NPN]], tenemos que $$ i_C = I_S \exp \left( \frac{v_{BE}}{V_{th}} \right) $$ entonces $$ g_m = \frac{\partial i_C (v_{BE})}{\partial v_{BE}} \biggm|_{Q} = \frac{I_S}{V_{th}} \exp \left( \frac{V_{BE}}{V_{th}} \right) $$ por lo que podemos reescribir como $$ \begin{align} 
    g_m &= \frac{I_C(V_{BE})}{V_{th}} \tag{NPN} \\
    g_m &= -\frac{I_C(V_{BE})}{V_{th}} \tag{PNP} \\
\end{align} $$

### Conductancia de salida o de colector
---
Calculándolo en MAD y un TBJ de tipo NPN, tenemos que $$ i_C = I_S \exp \left( \frac{v_{BE}}{V_{th}} \right) \left( 1 + \frac{v_{CE}}{V_A} \right) $$ entonces $$ g_0 = \frac{\partial i_C}{\partial v_{CE}} \biggm|_{Q} = \frac{I_S}{V_A} \exp \left( \frac{V_{BE}}{V_{th}} \right) $$ por lo que podemos reescribir como $$ \begin{align} 
    g_0 &= \frac{\beta_F ~ I_B}{V_A} \simeq \frac{I_C(Q)}{V_A} \tag{NPN} \\
    g_0 &= - \frac{\beta_F ~ I_B}{V_A} \simeq - \frac{I_C(Q)}{V_A} \tag{PNP}
\end{align} $$

### Conductancia de entrada o de base
---
Calculándolo en MAD y un TBJ de tipo NPN, tenemos que $$ i_B = \frac{i_C}{\beta_F} \simeq \frac{I_S}{\beta_F} \exp \left( \frac{v_{BE}}{V_{th}} \right) $$ donde $\beta_F$ es la [[Ganancia de corriente en modo activo directo|ganancia en MAD]], y entonces $$ g_\pi = \frac{i_B(v_{BE})}{\partial v_{BE}} \biggm|_{Q} = \frac{1}{\beta_F} \frac{i_C(v_{BE})}{\partial v_{BE}} \biggm|_{Q} = \frac{1}{\beta_F} \frac{I_S}{V_{th}} \exp \left( \frac{V_{BE}}{V_{th}} \right) $$ por lo que podemos reescribir como $$ \begin{align} 
    g_\pi &= \frac{I_B(V_{BE})}{V_{th}} = \frac{g_m}{\beta_F} \tag{NPN} \\
    g_\pi &= \frac{I_B(V_{BE})}{V_{th}} = -\frac{g_m}{\beta_F} \tag{PNP} \\
\end{align} $$

### Conductancia de realimentación
---
Los cambios en $v_{BE}$ también producen cambios en $i_B$ $$ I_B = I_{B1} + I_{B2} $$ donde
* $I_{B1}$ [[Corriente eléctrica|corriente]] debido a la inyección de [[Hueco|huecos]] de la base hacia el emisor
* $I_{B2}$ corriente de [[Recombinación|recombinación]] de [[Carga eléctrica|portadores]] en la base

Para el cálculo de polarización, $I_{B2}$ se considera despreciable y $I_{B1}$ es predominante.

Los cambios en $v_{CE}$ alteran la extensión de la zona de vaciamiento de la [[Juntura PN|juntura]] Base-Colector, afectando la distribución de minoritarios en la base.

Entonces, considerando $V_{BE}$ constante $$ g_\mu = \frac{\partial i_B}{\partial v_{CE}} \biggm|_{Q} = \frac{\partial (i_{B1} + i_{B2})}{\partial v_{CE}} \biggm|_{Q} = \frac{\partial i_{B1}}{\partial v_{CE}} \biggm|_{Q} +~ \frac{\partial i_{B2}}{\partial v_{CE}} \biggm|_{Q} $$
Como la variación de la zona de vaciamiento de la juntura BC no afecta a la inyección de huecos en el emisor $$ \frac{\partial i_{B1}}{\partial v_{CE}} \biggm|_{Q} = 0 $$
Si consideramos que toda la corriente $i_B$ está determinada por $i_{B2}$ podemos decir que $$ \frac{\partial i_{B2}}{\partial i_C} = \frac{\partial i_B}{\partial i_C} = \frac{1}{\beta_0} $$ donde $\beta_0$ es la [[Ganancia de corriente de pequeña señal para el transistor bipolar de juntura|ganancia de corriente en pequeña señal]]  y entonces podemos reescribirla como $$ g_\mu = \frac{\partial i_{B2}}{\partial i_C} \biggm|_{Q} \frac{\partial i_C}{\partial v_{CE}} \biggm|_{Q} = \frac{1}{\beta_0} g_o $$donde $g_o$ es la [[Modelo de pequeña señal del transistor bipolar de juntura#Conductancia de salida o de colector|conductancia de colector]] 

Como $i_{B2} < i_B$ la relación entre $g_\mu$ y $g_o$ resulta en una [[Cota superior]], es decir $$ g_\mu < \frac{1}{\beta_0} g_o $$ y esto hace que $g_\mu$ tenga un valor muy bajo y generalmente puede despreciarse

## Modelo para altas frecuencias
---
Generalizamos la idea de linealización para todas las corrientes y todas las señales aplicadas sobre cualquiera de las fuentes de polarización. Se aplica las [[Capacidad de juntura|capacitancias de juntura]] y la [[Capacidad de difusión|capacitancia de difusión]]

Donde se definen dos capacidades
* $C_\pi \equiv$ [[Capacidad de entrada]] $[C_\pi] = F$
* $C_\mu \equiv$ [[Capacidad de realimentación]] $[C_\mu] = F$

```tikz
\usepackage[
	europeanvoltages,
	americancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester
]{circuitikz} 

\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
}

\begin{document} 
	\begin{circuitikz}[voltage shift=0.5, scale=1.3, transform shape, thick]

		\draw (0, 0) to[short, o-] ++(2, 0)
				node (cpi) {}
			to[short] ++(2.5, 0)
				node (rpi) {}
			to[short] ++(5.5, 0)
				node (ro) {}
			to[short, -o] ++(2, 0);
		
		\path (cpi) -- (ro) node[midway, below=2pt] {$E$};

		\draw (rpi) to[R, l_=$r_\pi$, *-] ++(0, 3)
				node (vb) {}
			to[short, -*] ++(-2.5, 0);
		
		\draw (cpi) to[R, l_=$C_\pi$, *-] ++(0, 3)
			to[short, -o] ++(-2, 0)
				node[above left=2pt] {$B$};
				
		\draw (ro) to[R, l_=$r_o$, *-] ++(0, 3)
				node (vc) {}
			to[short, -o] ++(2, 0)
				node[above right=2pt] {$C$};

		\draw (vb) to[R, l^=$r_\mu$, *-] ++(3, 0)
			to[isource, l^=$g_m ~ v_{be}$, -*] ++(0, -3);
		
		\draw (vc) to[short, *-*] ++(-2.5, 0)
			to[short, *-] ++(0, 1.5)
			to[C, l_=$C_\mu$] ++(-3, 0)
			to[short, -*] ++(0, -1.5);

	\end{circuitikz}
\end{document}
```