---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/intro/Circuitos-con-resistencias
  - nota/facultad
  - ingeniería-en-informática/fisica-2/Circuitos-de-corrientes-no-dependientes-del-tiempo
  - carrera/ingeniería-electrónica/dispo/Física-de-semiconductores
  - carrera/ingeniería-electrónica/fisica-2/Circuitos-de-corrientes-no-dependientes-del-tiempo
aliases:
  - Densidad de corriente#Densidad de corriente
  - Densidad de corriente superficial#Corriente superficial
  - Densidad de corriente volumétrica#Corriente volumétrica
  - Corriente eléctrica superficial#Corriente superficial
  - Corriente eléctrica volumétrica#Corriente volumétrica
---
# Definición
---
La intensidad de corriente ($I$) es una magnitud física que indica la cantidad de [[Carga eléctrica|cargas]] que atraviesan la sección de un determinado [[Conductor|conductor]] por unidad de tiempo $$ \begin{align} 
    I &= \frac{dq}{dt} \\
     &= q ~ n ~ A ~ \vec{v}_a
\end{align} $$ siendo $q$ una [[Carga eléctrica|carga]], $n$ la cantidad de partículas, $A$ el área de la sección transversal a cable y $\vec{v}_a$ la [[Modelo de Drude|velocidad de arrastre]]

La corriente tiene un escalar, su valor, y un sentido. Indica el sentido del movimiento de las cargas positivas

### Unidad
---
$$ [I] = \frac{C}{s} = Ampere \space (A) $$

## Densidad de corriente
---
La corriente no tiene por qué ser uniforme en todo el conductor, por lo que definimos la $\vec{J}$ como la densidad volumétrica de corriente 

En general, la corriente puede fluir independientemente por [[Corriente de arrastre|arrastre]] o por [[Corriente de difusión|difusión]], por lo que $$ \begin{matrix} 
	J^n &=& J_n^\text{arr} + J_n^\text{dif} &=& qn\mu_n ~ E + q ~ D_n ~ \frac{dn}{dx} \\
	J^p &=& J_p^\text{arr} + J_p^\text{dif} &=& qn\mu_p ~ E - q ~ D_p ~ \frac{dp}{dx} \\
\end{matrix} $$ donde $E$ es el [[Campo eléctrico|campo eléctrico]], $\mu_{n, ~p}$ es la [[Movilidad|movilidad]], $D_{n, ~p}$ es el [[Coeficiente de difusión|coeficiente de difusión]] y $n, p$ son las [[Modelo de enlace de Silicio|concentraciones]] de [[Electrón|electrones]] y [[Hueco|huecos]]

Esto dándonos la corriente total $$ J_\text{total} = J_n + J_p $$

## Densidad de corriente superficial
---


## Densidad de corriente volumétrica
---
Esta densidad es volumétrica, ya que el conductor es un volumen, pero es por unidad de área (área de un corte transversal del conductor) $$ \begin{matrix} 
    \vec{J}(\vec{r}) = q ~ n ~ \vec{v}_a ~~~~~ [J] = \frac{A}{m^2} \\
    \displaystyle I = {\subset\!\supset} \llap{\iint}_A \vec j(\vec r) \ dA
\end{matrix} $$