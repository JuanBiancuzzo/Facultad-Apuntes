---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/estructura/Álgebra-de-Boole
  - carrera/ingeniería-electrónica/fisica-3/Átomo-de-Bohr
  - carrera/ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
  - carrera/ingeniería-en-informática/discreta/Álgebra-de-Boole
  - carrera/ingeniería-en-informática/estructura/Álgebra-de-Boole
  - carrera/ingeniería-en-informática/fisica-3/Átomo-de-Bohr
  - carrera/ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - carrera/ingeniería-electrónica/quimica/modelo-atómico
  - nota/facultad
etapa: ampliar
aliases:
  - Modelo de Thomson#^modelo-de-thomson
  - Modelo de Rutherford#^modelo-de-rutherford
  - Modelo atómico actual#^modelo-moderno
  - Modelo atómico moderno#^modelo-moderno
vinculoFacultad:
  - tema: Átomo de Bohr
    capitulo: 5
    materia: Física 3
    carrera: Ingeniería electrónica
  - tema: Álgebra de Boole
    capitulo: 3
    materia: Matemática discreta
    carrera: Ingeniería en informática
  - tema: Álgebra de Boole
    capitulo: 3
    materia: Estructura del computador
    carrera: Ingeniería en informática
  - tema: Variables y vectores aleatorios
    capitulo: 2
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
  - tema: Repaso de probabilidad y estadística
    capitulo: 1
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
  - tema: Modelo atómico
    capitulo: 1
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El concepto de átomo tiene diferentes definiciones dependiendo del área de investigación

## Álgebra de Boole
---
En el [[Álgebra de Boole|álgebra de Boole]], se llama átomo a los sucesores inmediatos del $0_B$. En otras palabras, $a \ne 0_B$ es un átomo si y solo si $$ \forall x \in B, ~~~~~ ax = b \implies x = a \lor x= 0_B $$
Es decir, si $x \le b$, entonces $x$ deberá ser el propio elemento o el [[Elemento neutro|elemento neutro]] $0_B$

* El producto de dos átomos distintos es $0_B$
* Todo elemento del álgebra puede anotarse como una combinación de los átomos del [[Conjunto|conjunto]] $$ \forall x \in B: ~~~~~ x = \alpha_1 ~ a_1 + \alpha_2 ~ a_2 + \cdots + \alpha_n ~ a_n $$ donde $a_1, \cdots, a_n$ son átomos en $B$ y $\alpha_1, \cdots, \alpha_n \in \set{ 0_B, ~ 1_B}$
* Como todos los elementos del álgebra pueden anotarse como una combinación de los átomos, entonces la cantidad de elementos del álgebra será $|B| = 2^n$, donde $n$ es la cantidad de átomos

## En probabilidad
---
Diremos que $a \in \mathbb{R}$ es un [[Átomo|átomo]] de la [[Función de distribución|función de distribución]] $F_X(x)$ si su peso es positivo, es decir $\mathbb{P}(X = a) > 0$

### Característica
---
El [[Conjunto|conjunto]] de todos los átomos de $F_X(x)$ coincide con todos los puntos de discontinuidad de $F_X(x)$

## En física
---
A lo largo de la historia se tuvieron distintos [[ingeniería en informática/ingenieria de software 1/Ingeniería de software/Modelo|modelos]] del átomo

La concepción corpuscular de la materia, en el siglo $5$to antes de cristo, enunciado por Demócrito, el cual proponía una partícula indivisible e indestructible que constituye la materia. De aquí sale el nombre de átomo

Entre $1803$ y $1803$, Dalton propone el modelo corpuscular de la materia, la cual fue la misma idea de Demócrito

Para el $1897$ se descubre la naturaleza eléctrica de la materia, y se plantea el modelo de Thomson, la cual define al átomo como una esfera homogénea con carga positiva, con [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrones]] en su interior que neutralizan la carga de la esfera ^modelo-de-thomson

En $1911$, con el descubrimiento de la radiactividad, se plantea el modelo de Rutherford, el cual define al átomo como un núcleo con carga positiva rodeado de electronos que se encuentran fuera del núcleo en igual número que las cargas positivas de este ^modelo-de-rutherford

En $1913$, con el descubrimiento de las [[ingeniería electrónica/electro/Ondas electromagnéticas/Onda electromagnética|radiaciones electromagnéticas]], se propone el [[ingeniería electrónica/quimica/Modelo atómico/Modelo de Bohr|modelo de Bohr]], el cual define al átomo como un núcleo con carga positiva donde está concentrada toda la masa del átomo, con electrones que giran alrededor del núcleo constantemente sin ganar o perder [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía|energía]] excepto cuando saltan de una órbita a otra

En la actualidad, pero propuesto en $1925$ se utiliza el modelo atómico moderno, aplicando la [[investigación/física/física cuántica/Física cuántica|mecánica cuántica]] de las partículas. Se define una [[Función de onda|función de onda]] que describe la [[investigación/matemática/Probabilidad/Probabilidad|probabilidad]] de hallar al electrón alrededor del núcleo del átomo. Esta probabilidad es una zona que está caracterizada por los números cuánticos ^modelo-moderno
