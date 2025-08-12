---
dia: 2023-11-17
tags:
  - carrera/ingeniería-electrónica/control/Realizaciones
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - carrera/ingeniería-electrónica/señales/Sistemas-LTI
  - nota/facultad
referencias:
  - "899"
  - "873"
etapa: ampliar
aliases:
  - Función de transferencia
  - Polo de una transferencia#Polos
  - Cero de una transferencia#Ceros
  - Frecuencia de amortiguación#^relacion-amortiguacion
  - Damping ratio#^relacion-amortiguacion
  - Frecuencia natural no amortiguada#^frecuencia-no-amortiguada
  - Undamped natural frequency#^frecuencia-no-amortiguada
  - Cero de fase no minimal#Ceros de fase no minimal
  - Nonminimum-phase zeros#Ceros de fase no minimal
  - RHP#Ceros de fase no minimal
  - Transferencia estrictamente propia#^estrictamente-propia
  - Transferencia propia#^propia
  - Transferencia bipropia#^bipropia
  - Transferencia impropia#^impropia
vinculoFacultad:
  - tema: Realizaciones
    capitulo: "3"
    materia: Control automático
    carrera: Ingeniería electrónica
  - tema: Respuesta dinámica
    capitulo: 1
    materia: Control automático
    carrera: Ingeniería electrónica
  - tema: Sistemas LTI
    capitulo: 2
    materia: Señales y sistemas
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se puede definir la transferencia de un [[Sistema lineal e invariante en el tiempo|sistema LTI]] a partir de su [[Respuesta en frecuencia|respuesta en frecuencia]] $h(t)$, donde se puede definir completamente este sistema $$ y(t) = \mathcal{T}[x(t)] $$ de la forma $$ y(t) = h(t) * x(t) $$ donde $h(t) * x(t)$ es la [[Convolución|convolución]] entre la respuesta en frecuencia y la [[Señal|señal]]

Usando la [[Transformada de Laplace|transformada de Laplace]] de la función de transferencia $H(s)$, (notemos que se puede hacer lo mismo en estos casos para la [[Transformada de Fourier|transformada de Fourier]]) es el cociente del [[Fasor|fasor]], que depende en [[Función periódica#Frecuencia|frecuencia]], de salida $Y(s)$ y el fasor de entrada $X(s)$, suponiendo que todas las condiciones iniciales son nulas $$ H(s) = \frac{Y(s)}{X(s)} $$
Notemos que usando la [[Transformada de Fourier#Convolución|propiedad de convolución]] de la transformada, y la definición mencionada anteriormente $$ Y(s) = H(s) ~ X(s) $$
Esto muestra como la transferencia es la transformada de la [[Respuesta en frecuencia|respuesta al impulso]], ya que si la entrada es la [[Delta de Dirac|delta de Dirac]], entonces la salida es la respuesta al impulso, y como la transformada de la delta es $1$ entonces $Y(s) = H(s)$

Cuando el [[Ecuación diferencial ordinaria#Punto de vista de los sistemas|sistema está descripto por ecuaciones diferenciales]], la transferencia resulta un cociente de [[Función polinómica|polinomios]] $$ H(s) = K ~ \frac{N(s)}{D(s)} $$ donde el $m$ es el [[Función polinómica#^grado|grado]] de $N(s)$ y $n$ es el grado de $D(s)$

Si expresamos a la función de transferencia como el cociente de dos polinomios factorizados, entonces obtenemos $$ H(s) = K ~
	\frac{ \displaystyle \prod_i^m \left(s + z_i \right) }
	{ \displaystyle \prod_i^n \left(s + p_i \right) } 
$$ donde 
* $K$ se lo llama [[Ganancia|ganancia]]
* $z_i$ representa a un cero de la transferencia
* $p_i$ representa a un polo de la transferencia

Donde podemos interpretarlo como una cascada en sistemas LTI y por lo tanto $$ h(t) = h_1(t) * h_2(t) * \cdots * h_n(t) \implies H(s) = \prod_{i = 1}^{n} H_i(s) $$

Por las propiedades de los [[Función logaritmica|logaritmos]] y las características de los [[Decibel|dB]], esta ecuación puede escribirse como $$ H_{dB}(s) = K_{dB} ~
	\frac{ \displaystyle \sum_i \left(s + z_i \right) \biggm|_{dB} }
	{ \displaystyle \sum_i \left(s + p_i \right) \biggm|_{dB} } 
$$
es decir que podemos sumar las contribuciones independientes de la constante, de cada polo y de cada cero

## Clasificación
---
Dada una ecuación diferencial ordinaria a coeficientes constantes que expresaremos como $$ \frac{d^n }{dt^n} y + a_1 \frac{d^{n - 1}}{dt^{n - 1}} y + \cdots + a_n ~ y = b_0 \frac{d^m}{dt^m} u + b_1 \frac{d^{m - 1}}{dt^{m - 1}} u + \cdots + b_m ~ u $$
donde notemos que estamos tomando con una única entrada $u$ y una única salida $y$

Transformándolas y teniendo en cuenta valores iniciales nulos, obtenemos la siguiente $$ Y(s) ~ \left( s^n + a_1 ~ s^{n - 1} + \cdots + a_{n - 1} ~ s + a_n \right) = \left( b_0 ~ s^m + b_1 ~ s^{m - 1} + \cdots + b_{m - 1} ~ s + b_m \right) ~ U(s) $$
Despejando la transferencia tenemos $$ \frac{Y(s)}{U(s)} = \frac{s^n + a_1 ~ s^{n - 1} + \cdots + a_{n - 1} ~ s + a_n}{b_0 ~ s^m + b_1 ~ s^{m - 1} + \cdots + b_{m - 1} ~ s + b_m} = \frac{a(s)}{b(s)} $$
A partir de $n$ y $m$ podemos clasificarlas en 
* Estrictamente propia si $m < n$ ^estrictamente-propia
* Propia si $m \le n$ ^propia
* Bipropia si $m = n$ ^bipropia
* Impropia si $m > n$ ^impropia

## Ceros
---
Un cero, como una [[Raíz de una función|raíz del polinomio]] del numerador $N(s)$, es un valor que produce un valor cero en la función, es decir $$ H(s) \bigg|_{s = -z_i} = 0 $$
Estas también corresponden a las propiedad de bloquear señales transmitida por el sistema, esto es que puede bloquear frecuencias las cuales se ubican donde se ubican los ceros

Los ceros expresan su influencia modificando los coeficientes de los términos de exponentes, donde la forma en sí misma esta definida por los polos

### Ceros de fase no minimal
---
Es el caso donde el cero se encuentra en $\sigma > 0$, produciendo en la salida una anticipación al impulso

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, ultra thick]
    \tikzmath { 
        \xmax = 8; \xsep = 1;
        \ymax = 4; \ymin = -2; \ysep = 1;
        \dif = 0.5; \tick = 0.1; \definicion = 0.1;
    
        function senial(\t) {
            return 3 - 3 * exp(-\t) * cos(deg(\t)) - 9 * exp(-\t) * sin(deg(\t)));
        };
    }

    \draw[->] (0, 0) -- ({\xmax + \dif}, 0);
    \draw[->] (0, {-\dif + \ymin}) -- (0, {\ymax + \dif});
    
    \foreach \xtick [parse=true] in {\xsep, 2 * \xsep, ..., \xmax} {
        \tikzmath { int \xlable; \xlabel = int(\xtick); }
        \draw (\xtick, \tick) -- ++(0, {-2 * \tick})
            node[midway, below right=2pt] {$\xlabel$};
    }
    
    \foreach \ytick [parse=true] in {\ymin, \ymin + \ysep, ..., \ymax} {
        \tikzmath { int \ylable; \ylabel = int(\ytick); }
        \draw (\tick, \ytick) -- ++({-2 * \tick}, 0)
            node[midway, left=2pt] {$\ylabel$};
    }
    
    \draw [cyan] (0, {senial(0)}) \foreach \x [parse=true] in 
        {\definicion, 2 * \definicion, ..., \xmax + \definicion} {
        -- (\x, {senial(\x)})
    };

\end{tikzpicture}
\end{document}
```

Esto puede ser negativo para un sistema de control al moverse en dirección opuesta a la esperada

## Polos
---
Un [[Singularidad|polo]], como una raíz del polinomio del denominador $D(s)$, es un valor para el cual la función tiende a infinito, es decir $$ |H(s)| \bigg|_{s = -p_i} = \infty $$
Estas también corresponden a las propiedades de [[Sistema estable|estabilidad]], como también el comportamiento natural o no forzado del sistema, también conocido como [[Modo de sistema|modos del sistema]]

### Sistema de primer orden
---
Tomando la transferencia de primer orden $$ H(s) = \frac{1}{s + \sigma}, ~~~ \sigma \in \mathbb{R} $$ con una respuesta al impulso $$ h(t) = e^{-\sigma t} ~ u(t) $$ donde $u(t)$ es la [[Función de Heaviside|función de Heaviside]]

Si se toma un $\sigma > 0$, el polo esta en $s < 0$, y la respuesta al impulso es estable, y si $\sigma < 0$ el sistema se vuelve inestable

Notemos que $\tau = \frac{1}{\sigma}$ es la [[Constante de tiempo|constante de tiempo]]

Podemos analizar el caso general donde $$ H(s) = \frac{1}{s + z}, ~~~ z \in \mathbb{C} $$
y obtenemos esta relación 

![[Sistema de primer orden valores distintos de polos.png|400]]

### Sistemas de segundo orden
---
Tomando la transferencia de primer orden $$ H(s) = \frac{\omega_n^2}{s^2 + 2 \zeta \omega_n ~ s + \omega_n^2}, ~~~ \zeta,~ \omega_n \in \mathbb{R} $$ donde esto corresponde a un polo con complejos conjugados, y si llamamos a este polo $z = \sigma \pm j \omega_d$, obtenemos que $$ \begin{array}{c} 
    \sigma = \zeta ~ \omega_n, && \omega_d = \omega_n \sqrt{1 - \zeta^2}
\end{array} $$
Se puede definir
* El parámetro $\zeta$ como la relación de amortiguación ^relacion-amortiguacion
    * Se puede obtener el ángulo en el cual se encuentran los polos usando $\theta = \sin^{-1} \zeta$
* El parámetro $\omega_n$ es la frecuencia natural no amortiguada ^frecuencia-no-amortiguada
    * Este es el radio en el cual se encuentran los polos ubicados

![[Sistema de segundo orden valores posicion.png|300]]

Donde la respuesta al impulso es $$ h(t) = \frac{\omega_n}{\sqrt{1 - \zeta^2}} ~ \exp(-\sigma t) ~ \sin(\omega_d t) ~ u(t) $$
Obtenemos distintas curvas para de respuesta el escalón

![[Respuesta al escalón de un sistema con polos conjugados.png|500]]

## Clasificaciones para amplificadores
---
Se definen $4$ transferencias
* Ganancia de [[Tensión|tensión]] $$ H(s) = \frac{V_o(s)}{V_i(S)} $$
* Ganancia de [[Corriente eléctrica|corriente]] $$ H(s) = \frac{I_o(s)}{I_i(S)} $$
* [[Impedancia|Impedancia]] $$ H(s) = \frac{V(s)}{I(S)} $$
* [[Admitancia|Admitancia]] $$ H(s) = \frac{I(s)}{V(S)} $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```