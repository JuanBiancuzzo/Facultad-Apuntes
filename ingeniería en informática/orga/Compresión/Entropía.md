---
dia: 2023-04-03
tags:
  - carrera/ingeniería-en-informática/orga/Compresión
  - investigación/matemática/teoría-de-la-información
  - carrera/ingeniería-electrónica/quimica/Termodinámica
  - nota/facultad
  - nota/investigacion
referencias:
  - "196"
etapa: ampliar
vinculoFacultad:
  - tema: Compresión
    capitulo: 4
    materia: Organización de datos
    carrera: Ingeniería en informática
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
  - tema: Clasificación en Inteligencia Artificial
    capitulo: 3
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
  - tema: Termodinámica
    capitulo: 10
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
aliases: 
  - Entropía de Shannon#En la teoría de la información
  - Entropía molar estándar#^entropia-molar-estandar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---

## En física
---
La entropía es una [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]] [[ingeniería electrónica/quimica/Termodinámica/Termodinámica|termodinámica]] que es una medida del desorden del [[ingeniería electrónica/señales/Señales y sistemas/Sistema|sistema]], y esta es una [[ingeniería electrónica/quimica/Termodinámica/Función de estado|función de estado]]

La variación de entropía $dS$ de un sistema cuando pasa de un [[ingeniería electrónica/legal/Introducción al derecho/Estado|estado]] a otro se define por la expresión $$ dS = \frac{dq_{rev}}{T} $$
### Para un gas ideal
---
Para un [[ingeniería electrónica/quimica/Estados de la materia/Gas#Gas ideal|gas ideal]], se puede calcular cual es la variación de entropía cuando este absorbe una cantidad de [[ingeniería en informática/fisica 2/Termodinámica/Calor|calor]] $dq$ [[ingeniería en informática/sisop/La abstracción de proceso/Proceso#^reversible|proceso reversible]], partiendo de la [[ingeniería electrónica/quimica/Termodinámica/Termodinámica#Primera ley|primera ley de la termodinámica]] dado entonces por $$ \begin{align} 
	dq &= dU - \delta w, & \delta w_\text{reversible} = -P_{ext} ~ dV = -P ~ dV \\
	 &= dU + P ~ dV \\
	dq &= n c_{V,m} ~ dT + \frac{n R T}{V} ~ dV \\
\end{align} $$ donde en el último paso utilizamos la [[ingeniería electrónica/quimica/Termodinámica/Capacidad calorífica#Volumen constante|capacidad calorífica molar, a volumen constante]], para el primer térmico y la [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Ley de Gases Ideales|ley de gases ideales]] para el segundo

Finalmente, como esto no es integrable, porque aparece la [[ingeniería electrónica/seguridad/Prevención de incendios/Temperatura|temperatura]] en el segundo término, se puede dividir por la temperatura obteniendo $$ \begin{align}
	dq &= n c_{V,m} ~ dT + \frac{n R T}{V} ~ dV \\
	\frac{dq_{rev}}{T} &= \frac{n c_{V,m}}{T} ~ dT + \frac{n R}{V} ~ dV \\
	dS &= \frac{n c_{V,m}}{T} ~ dT + \frac{n R}{V} ~ dV \\
	\Delta S &= \int_i^f \frac{n c_{V,m}}{T} ~ dT + \int_i^f \frac{n R}{V} ~ dV \\
	\Delta S &= n c_{V,m} ~ \ln\left(\frac{T_f}{T_i}\right) + n R ~ \ln\left(\frac{V_f}{V_i}\right) \\
\end{align} $$
Es importante mencionar que esta es la forma de encontrar la variación de entropía conociendo la temperatura y el [[Volumen|volumen]], inicial y final, para un proceso reversible como también [[ingeniería en informática/sisop/La abstracción de proceso/Proceso#^irreversible|irreversible]], ya que como la entropía es una función de estado, no importa el camino que se encontró

Podemos reescribir la última expresión, recordando las [[ingeniería electrónica/quimica/Termodinámica/Capacidad calorífica#Relación entre ambas|relación entre las capacidades caloríficas]], dada por $C_p = C_V + R$, obteniendo así la expresión $$ \Delta S = n c_{P,m} ~ \ln\left(\frac{T_f}{T_i}\right) - n R ~ \ln\left(\frac{P_f}{P_i}\right) $$
Entre ambas ecuaciones, se puede obtener una expresión de la variación de entropía si
* Es un proceso a temperatura constante $$ \Delta S = -nR ~ \ln\left(\frac{P_f}{P_i}\right) = nR ~ \ln\left(\frac{V_f}{V_i}\right) $$
* Es un proceso a [[Presión|presión]] constante $$ \Delta S = n C_{P,m} ~ \ln\left(\frac{T_f}{T_i}\right) $$
* Es un proceso a volumen constante $$ \Delta S = n C_{V,m} \ln\left(\frac{T_f}{T_i}\right) $$
### Para un cambio de fase
---
Recordemos que para un [[ingeniería electrónica/quimica/Estados de la materia/Estado de agregación de la materia#Cambio de estado|cambio de fase]], la temperatura permanece constante, el calor se transfiere de forma reversible y la presión es constante entonces el calor es igual a la variación [[ingeniería electrónica/quimica/Soluciones y solubilidad/Entalpía|entalpía]] $\Delta H$, por lo tanto partiendo de la expresión general se tiene que para cualquier cambio de fase $$ \Delta S_\text{cambio de fase} = \frac{\Delta H_\text{cambio de fase}}{T_\text{cambio de fase}} $$
### Calculo general para una sustancia
---
Utilizando la [[ingeniería electrónica/quimica/Termodinámica/Termodinámica#Tercera ley|tercera ley de la termodinámica]], se puede calcula la entropía a una temperatura final, dado por $$ S_m(T) = \int_{0}^{T_{fus}} \frac{C_{P,m}(s)}{T} ~ dT + \frac{\Delta H_{fus}}{T_{fus}} + \int_{T_{fus}}^{T_{eva}} \frac{C_{P,m}(l)}{T} ~ dT + \frac{\Delta H_{eva}}{T_{eva}} + \int_{T_{eva}}^{T} \frac{C_{P,m}(g)}{T} ~ dT  $$ en este ejemplo, la temperatura final es tal que la sustancia es [[ingeniería electrónica/quimica/Estados de la materia/Gas|vapor]], pero en el caso de no serlo, se puede ir sacando términos para que termine en la fase que la sustancia tendría a dicha temperatura

Se define la entropía molar estándar, denotada como $S^0$, la cual es la entropía como calculamos, para un [[ingeniería electrónica/quimica/Magnitudes atómicas y moleculares/Número de Avogradro|mol]] en condición de $1 ~ \text{atm}$, en unidades de $\frac{\text{J} ~ \text{mol}}{\text{K}}$, y esto nos permitiría saltear alta la temperatura que este dada la tabla, y de ahí obtener la entropía absoluta ^entropia-molar-estandar

### Calculo para el entorno
---
Si se puede suponer que el entorno mantiene temperatura constantes, entonces podemos decir que $$ \Delta S_\text{ent} = -\frac{q_\text{sist}}{T} $$ pero si podemos además suponer que la presión se mantiene constante, entonces $q_\text{sist} = \Delta H_\text{sist}$, por lo que podemos decir $$ \Delta S_\text{ent} = - \frac{\Delta H_\text{sist}}{T} $$

## En la teoría de la información
---
La entropía, o entropía de Shannon, recibe su nombre por su analogía con la [[Entropía|termodinámica]], y representa el [[ingeniería en informática/proba/Representación de variables aleatorias/Esperanza|valor medio]] de la [[ingeniería en informática/algo 1/Introducción a la programación/Información|información]] que aporta una [[ingeniería en informática/proba/Variables y vectores aleatorios/Variable aleatoria|variable aleatoria]] 

En el caso de tener una [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Fuente discreta sin memoria|fuente discreta sin memoria]] con [[ingeniería en informática/discreta/Autómatas/Alfabeto|alfabeto]] $\mathcal{S}$, es el valor medio de la información $I(s_i)$ sobre el alfabeto $\mathcal{S}$ $$ H = E[I(\mathcal{S})] = -\sum_i \mathbb{P}(s_i) \cdot \log_2(\mathbb{P}(s_i)) $$ donde $s_i$ es el [[ingeniería en informática/proba/Teoría de probabilidades/Evento|evento]] que se quiere mandar, y por lo tanto $\mathbb{P}(s_i)$ es la [[investigación/matemática/Probabilidad/Probabilidad|probabilidad]] que ocurra ese evento

Las unidades de la entropía son [[ingeniería en informática/algo 1/Introducción a la programación/Información#Bit|bits]] por símbolo de la fuente, donde cabe aclarar que si la base del [[ingeniería electrónica/analisis 3/Funciones elementales/Logaritmo principal|logaritmo]] es distinto de $2$ las unidades cambiarán. En los casos más conocidos 
* Con base igual a $10$ se lo llama Hartley
* Con base igual a $e$ se lo llama Nat

Esta entropía nos va a dar una idea de que tan impredecible es un fenómeno. Ya que se compensan la probabilidad de un evento y los bits de información de ese evento

### Propiedades
---
Se tiene las siguientes propiedades
1. $H(\mathcal{S}) \ge 0$
2. $H(\mathcal{S}) = 0$ sii $\mathbb{P}(s_i) = 1$ para algún $s_i \in \mathcal{S}$
3. $H(\mathcal{S}) \le \log_2(|\mathcal{S}|)$

### Ejemplo
---
Dada una moneda, donde la probabilidad de cara es $x \in [0,1]$ y la probabilidad de ceca es $1-x$. Si calculamos $H(x)$ de este problema, nos queda

```tikz
\usepackage{pgfplots}
\begin{document} 

\pgfplotsset{minor grid style={color=gray, thin, opacity=0.5}} 
\pgfplotsset{major grid style={color=gray, thick}} 

\begin{tikzpicture}[scale=1.5, transform shape]
	\begin{axis}[
		xmin=-0.2, ymin=-0.2,
		xmax=1.2, ymax=1.2, 
		samples=50,
		axis lines=middle,
		xtick={-0.5, 0, 0.5, 1, 1.5},
		ytick={-0.5, 0, 0.5, 1, 1.5},
		minor tick num=5,
		grid=both,
		xticklabel style={anchor={north west}},
		yticklabel style={anchor={south east}},
	]
	  \addplot[orange, ultra thick, domain=0:1] 
		  { -\x * log2(\x) - (1 - \x) * log2(1 - \x) };
	\end{axis}	
\end{tikzpicture}
\end{document}
```

Donde vemos que cuando $x = 0.5$ que es el momento donde es más difícil predecir si la moneda es cara o ceca, es donde la [[Entropía|entropía]] es mayor. También en los extremos donde la probabilidad de que sea cara, o en otro extremos que sea ceca, es $1$ la entropía termina siendo $0$ ya que no es necesario mandar información

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```