---
dia: 2026-02-22
etapa: empezado
referencias: []
aliases:
  - Constelación#Constelación
  - Interferencia inter simbólica#^isi
  - ISI#^isi
  - Inter Symbol Interference#^isi
  - Criterio de Nyquist para ISI nulo#^prop-9-1-1
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Modulación-digital
  - nota/facultad
vinculoFacultad:
  - tema: Modulación digital
    capitulo: 3
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es un tipo de [[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/Modulación|modulación]] donde los símbolos utilizado están [[ingeniería electrónica/señales/Señales y sistemas/Discretización|discretizados]] o desde un inicio es discreta. Tomando como ejemplo la [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Transmisión en banda base|transmisión en banda base]], pero aplica a la [[Transmisión en banda pasante|transmisión en banda pasante]]

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.15, transform shape, thick]
    \tikzmath { 
        \ancho = 2.3; \alto = 1.2; \sep = 1.7; \radio = 0.45;
        \scale = 0.9; \distancia = \alto + 1.5 * \sep; 
        \distAWGN = 0.8 * \sep;
    }
    
    \path (0, 0) node (temp) {}; 
    \foreach \texto [count=\i] in {Gen\\de pulsos, $H_{tx}(\omega)$, $H_c(\omega)$} {
        \draw (temp.center) rectangle ++(\ancho, \alto)
            node[midway, scale=\scale, align=center] {\texto};
            
        \path (temp.center) node (pos_in_\i) {};
        \path ($ (temp.center) + ({\ancho + \sep}, 0) $) 
            node (temp) {};
    }
    
    \path (0, -\distancia) node (temp) {}; 
    \foreach \texto [count=\i] in {Desición, Analogica\\a digital, $H_{rx}(\omega)$} {
        \draw (temp.center) rectangle ++(\ancho, \alto)
            node[midway, scale=\scale, align=center] {\texto};
            
        \path (temp.center) node (pos_out_\i) {};
        \path ($ (temp.center) + ({\ancho + \sep}, 0) $) 
            node (temp) {};
    }
    
    \draw ($ (pos_in_3)!0.5!(pos_out_3) + ({\ancho + \distAWGN}, {\alto / 2}) $)
        circle (\radio)
        node[scale = 1.5] {$+$}
        node (plus) {};
        
    \draw ($ (pos_out_2)!0.5!(pos_out_3) + (0, {-\alto / 2 - \sep}) $)
            node (clock_rec) {} 
        rectangle ++(\ancho, \alto)
            node[midway, align=center, scale=\scale] 
                {Clock\\recovery};

    \path (pos_in_1) -- ++(\ancho, 0) 
        node[midway, below=2pt, scale=\scale] 
            {Reloj de $R_s$ baudio};
        
    \begin{scope}[rounded corners=0.5em, shorten >=0.5em, shorten <=0.5em]
       \draw[->] ($ (pos_in_1) + (\ancho, {\alto / 2}) $)
           -- ($ (pos_in_2) + (0, {\alto / 2}) $)
               node[midway, above=2pt, scale=\scale] {$x(t)$};
               
       \draw[<-] ($ (pos_out_2) + (\ancho, {\alto / 2}) $)
           -- ($ (pos_out_3) + (0, {\alto / 2}) $)
               node[midway, above=2pt, scale=\scale] {$y(t)$};
    
       \draw[->] ($ (pos_in_2) + (\ancho, {\alto / 2}) $)
           -- ($ (pos_in_3) + (0, {\alto / 2}) $);
            
       \draw[<-] ($ (pos_out_1) + (\ancho, {\alto / 2}) $)
           -- ($ (pos_out_2) + (0, {\alto / 2}) $);
       
       \draw[->] ($ (pos_in_3) + (\ancho, {\alto / 2}) $)
               node (temp) {}
           -- (temp -| plus)
           -- ($ (plus.center) + (0, \radio) $);
           
       \draw[<-] ($ (pos_out_3) + (\ancho, {\alto / 2}) $)
               node (temp) {}
           -- (temp -| plus)
           -- ($ (plus.center) + (0, -\radio) $);

       \fill ($ 
           (pos_out_2)!0.5!(pos_out_3) + 
           ({\ancho / 2}, {\alto / 2}) 
        $) circle (0.075) node (temp) {};
            
       \draw[->, shorten <=0] (temp.center) -- ($ (clock_rec) + ({\ancho / 2}, \alto) $);
       \draw[->] ($ (clock_rec) + (0, {\alto / 2}) $)
           -- ($ (clock_rec -| pos_out_2) + ({\ancho / 2}, {\alto / 2}) $)
           -- ($ (pos_out_2) + ({\ancho / 2}, 0) $);

        \draw[<-] ($ (pos_in_1) + (0, {\alto / 2}) $) 
            -- ++({-0.75 * \sep}, 0) node[left=0, scale=\scale] 
                    {$\{ a_k \}$};
        \draw[->] ($ (pos_out_1) + (0, {\alto / 2}) $) 
            -- ++({-0.75 * \sep}, 0) node[left=0, scale=\scale] 
                    {$\{ \hat{a_k} \}$};
           
        \draw[<-] ($ (plus.center) + (-\radio, 0) $) -- ++(-\distAWGN, 0)
            node[left=-0.5em, scale=\scale] {AWGN};
    \end{scope}
    
\end{tikzpicture}
\end{document}
```

Se tiene tiene valores que caracterizan a una modulación
* $R_s$ es la tasa de símbolos del modulador, medido en símbolos por segundo o baudios
* $R_b$ es la tasa de bits para un alfabeto de $M$ símbolos, medida en bits por segundo
    * $M$ es la cantidad de símbolos con $M = 2^k$
    * $k$ es la cantidad de bits por símbolo
    * $R_b = k ~ R_s$
* $T_s$ es el tiempo de un símbolo $T_s = R_s^{-1}$, medida en segundos
* $T_b$ es el tiempo de un bit $T_b = R_b^{-1}$, medidas en segundos
* $E_s$ es la [[ingeniería electrónica/señales/Señales y sistemas/Energía de una señal|energía]] media de la [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Modulación digital#Constelación|constelación]], medida en Joules
    * Esta se puede calcular como $$ E_s = \sum_{i = 0}^{M - 1} \mathbb{P}(s_i) ~ \lVert s_i \rVert^2 $$
* $E_b$ es la energía media de la constelación por bit, medida en Joules
* $P$ es la [[ingeniería electrónica/intro/Potencia/Potencia|potencia]], medida en Watts
    * $P = E_s ~ R_s$
    * También se lo puede escribir como $S_{rx}$ o $S_{tx}$ para la del receptor o transmisor respectivamente

## Constelación
---
Se denomina constelación al [[ingeniería en informática/algebra 2/Espacios Vectoriales/Conjunto|conjunto]] de símbolos en la [[ingeniería en informática/analisis 2/Nomenclatura/Base ortonormal|base ortonormal]] generada por los componentes

## Filtros terminales
---
La entrada esta dada por $$ x(t) = \sum_{k} a_k ~ p_g(t - k ~ T_s) $$ donde $p_g$ es el pulso del generador, para tener después del canal $$ y(t) = \left[ \sum_k A_k ~ p_r(t - t_d - k ~ T_s) \right] + n_0(t) $$ donde 
* $t_d$ representa los retardos que introduce tanto los filtros como la transmisión
* $A_k = K_c ~ a_k$ representando la modificación por atenuación del canal
* $p_r$ son los pulsos habiendo pasado por las [[ingeniería electrónica/señales/Sistemas LTI/Transferencia del sistema|transferencias]] del trasmisor, el receptor y del canal

Se evalúa $y(t)$ periódicamente en $t_m = m ~ T_s + t_d$ con $m \in \mathbb{Z}$ $$ y(t) = A_m + \sum_{k < m} A_k ~ p_r\big( T_s ~ (m - k) \big) + n_0(t_m) $$ donde 
* $A_m$ es la amplitud que se necesita para reconocer el valor enviado
* $\sum_{k < m} A_k ~ p_r\big( T_s ~ (m - k) \big)$ representa la interferencia inter simbólica o ISI, es el efecto que producen los símbolos previos en la lectura de este símbolo ^isi
* $n_0(t_m)$

El ISI aparece cuando el [[Ancho de banda|ancho de banda]] del canal $W$ es capaz de distorsionar el pulso del generador, al punto que se extiendan $T_s = \frac{1}{R_s}$. Por lo que se dividen en dos casos
* Caso 1, $W \gg R_s$
    * El ISI es despreciable, solo se tiene que considerar el ruido
    * Los pulsos transmitidos son rectangulares
* Caso 2, $W \simeq R_s$ 
    * Se considera el ISI como el ruido 
    * Los pulsos transmitidos son suavemente conformados por el efecto del ISI

### Caso 1
---
Como en este caso el ISI es despreciable, la señal de salida muestreada $$ y(t_m) \simeq A_m + n_0(t_m) $$

Se tiene que definir el $H_{tx}(\omega)$, $H_{rx}(\omega)$ y el umbral de decisión. Algo a tener en cuenta, es que el caso de $H_{tx}(\omega)$ solo tiene la funcionalidad de definir el [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Código de línea|código de línea]], ya que el canal no afecta la "forma" de onda enviada 

Partiendo de un ejemplo de un caso binario, con un [[ingeniería en informática/discreta/Autómatas/Alfabeto|alfabeto]] $\set{s_1,~ s_2}$ y podemos plantear la idea de una [[ingeniería en informática/proba/Variables y vectores aleatorios/Variable aleatoria|variable aleatoria]] $z$ que representa el valor recibido, por lo tanto debemos hacer la decisión $$ \mathbb{P}(s_1 \mid z) \underset{H_2}{\overset{H_1}{\gtrless}} \mathbb{P}(s_2 \mid z) $$
Este es un [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Clasificador Bayesiano|clasificador Bayesiano]], usando [[ingeniería en informática/proba/Teoría de probabilidades/Teorema de Bayes|bayes]] podemos reescribirlo como $$ \frac{f_{Z \mid S_1}(z) ~ \mathbb{P}(s_1)}{f_Z(z)} \underset{H_2}{\overset{H_1}{\gtrless}} \frac{f_{Z \mid S_2}(z) ~ \mathbb{P}(s_2)}{f_Z(z)} $$ generando esta representación ![[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Clasificador Bayesiano#^representacion-grafica|Clasificador Bayesiano]] 
Tomando la suposición de símbolos equiprobables y que la [[ingeniería en informática/proba/Representación de variables aleatorias/Varianza|varianza]] del ruido es aplicado de igual forma a ambos símbolos, entonces utilizando el resultado del clasificador se tiene la situación $$ \begin{cases} 
    d = 1 \\ 
    r = 1 \\
\end{cases} \implies \begin{cases}
    a = 0 \\
    b = 2 (a_2 - a_1) \\
    c = a_1^2 - a_2^2
\end{cases} $$ por lo tanto se obtiene que existe un único punto de intersección dado por $$ \begin{align}
    2(a_2 - a_1) z + a_1^2 - a_2^2 &= 0 \\
    2(a_2 - a_1) z + (a_1 - a_2)(a_1 + a_2) &= 0 \\
    2z - (a_1 + a_2) &= 0 \\
    \gamma &= \frac{a_1 + a_2}{2} \\
\end{align} $$
Donde $\gamma$ es la variable de define la [[Región de decisión|región de decisión]]

Finalmente la probabilidad de error $P_e$ que por ser un caso binario este es igual que $P_b$ y esta dado por $$ \begin{align}
    P_e &= \underbrace{\mathbb{P}(\text{elegido}~s_2 \mid \text{enviado}~s_1)}_{\mathbb{P}(Z < \gamma)} ~ \mathbb{P}(s_1) + \underbrace{\mathbb{P}(\text{elegido}~s_1 \mid \text{enviado}~s_2)}_{\mathbb{P}(Z > \gamma)} ~ \mathbb{P}(s_2) \\
     &= \mathbb{P}(s_1) ~ \int_{-\infty}^{\gamma} f_{Z \mid S_1}(z) ~ dz + \mathbb{P}(s_2) ~ \int_{\gamma}^{\infty} f_{Z \mid S_2}(z) ~ dz 
\end{align} $$ como ambas integrales son simétricas respecto de $\gamma$ y los símbolos son equiprobables como mencionamos antes, se puede simplificar a $$ P_e = \int_{\gamma}^{\infty} f_{Z \mid S_2}(z) ~ dz $$ [[ingeniería en informática/proba/Teorema central del límite/Proceso de normalización de una variable aleatoria|normalizando]] la variable aleatoria se puede escribir como $$ \begin{align} 
    P_e &= Q\left( \frac{\gamma}{\sigma} \right) \\
     &= Q\left( \frac{a_1 - a_2}{2 ~ \sigma} \right) \\
     &= Q\left( \frac{1}{2} \sqrt{\frac{(a_1 - a_2)^2}{\sigma^2}} \right) \\
\end{align} $$ se plantea $\frac{(a_1 - a_2)^2}{\sigma^2}$ para relacionarlo a una [[Relación señal-ruido|relación señal a ruido]]

Para minimizar $P_e$ se necesita maximizar el argumento de $Q(\cdot)$ y esto se logra con un [[Filtro adaptativo|filtro adaptativo]] que propone para maximizar la relación señal a ruido $$ h(t) = k ~ m(T - t) $$ donde $m(t)$ es la forma de onda utilizada y $k \in \mathbb{R}$, el cual tomaremos como $k = 1$

Para definir $m(t)$ debemos notar que buscamos que $$ \begin{cases} 
    s_1(t) \ast h_{opt}(t) = a_1 \\
    s_2(t) \ast h_{opt}(t) = a_2
\end{cases} $$ por lo tanto ya que buscamos maximizar la relación $\frac{(a_1 - a_2)^2}{\sigma^2}$, por lo tanto vamos a plantear que $m(t) = s_1(t) - s_2(t)$ produciendo que el filtro adaptado optimo sea $$ h_{opt}(t) = h_{rx}(t) = s_1(T - t) - s_2(T - t) $$ donde toma un máximo $$ \max \frac{(a_1 - a_2)^2}{\sigma^2} = \frac{2 E_d}{N_0}, ~~~~ E_d = \int_{-\infty}^{\infty} \big[ s_1(t) - s_2(t) \big]^2 ~ dt  $$
Finalmente se obtiene los siguiente resultados $$ \begin{dcases}
    h_{rx}(t) = s_1(T - t) - s_2(T - t) \\
    \gamma = \frac{a_1 - a_2}{2} \\ 
    P_e = Q\left(\frac{1}{2} \sqrt{\frac{2 E_d}{N_0}} \right) = Q\left( \sqrt{\frac{E_d}{2 N_0}} \right)
\end{dcases} $$
Podemos notar un detalle, donde si describimos el coeficiente de correlación entre ambas señales, dado por $$ \rho = \frac{1}{E_s} \langle s_1,~ s_2 \rangle $$ entonces podemos reescribir la energía de la diferencia como $$ \begin{align} 
    E_d &= \underbrace{\int_0^T (s_1(t))^2 ~ dt + \int_0^T (s_2(t))^2 ~ dt}_{2 E_s} -  \int_0^T s_1(t) ~ s_2(t) ~ dt \\
     &= 2E_b - 2E_b ~ \rho \\
     &= 2E_b (1 - \rho)
\end{align} $$
Por lo tanto, teniendo en cuenta que $\rho \in [-1,~ 1]$, se buscará un $s_1$ y $s_2$ tal que $\rho = -1$ obteniendo una probabilidad de error mínima de $$ P_e = Q\left( \sqrt{\frac{2 E_b}{N_0}} \right) $$
### Caso 2
---
En este caso se tiene que considerar el ISI, y el ruido, también se puede interpretar que este caso es más general que el anterior, por lo que el resultado de este debe llevar al del caso $1$ si el término del ISI desaparece

En este caso tendremos que definir $H_{tx}(\omega)$, $H_{rx}(\omega)$ y el umbral $\gamma$, y si notamos podemos plantear una transferencia equivalente de todo el sistema $$ H(\omega) = H_{tx}(\omega) ~ H_{c}(\omega) ~ H_{rx}(\omega) $$ 
Esto es util para definir el comportamiento general del sistema, como que se busca anular el ISI necesitamos lo siguiente $$ h(n ~ T_s) = \begin{dcases}
    1 & \text{si} ~ n = 0 \\
    0 & \text{si} ~ n \ne 0 \\
\end{dcases} $$ forzando que en el momento de [[ingeniería electrónica/señales/Muestreo e Interpolación/Muestreo|muestreo]] sea nulo para todo valor que no sea el actual ($n = 0$)


> [!proposicion]+ Proposición 9.1.1 (Criterio de Nyquist para ISI nulo) 
> Dado una transferencia $h(t)$ para obtener un ISI nulo se necesita $$ h(n ~ T_s) = \begin{dcases} 
>     1 & \text{si} ~ n = 0 \\
>     0 & \text{si} ~ n \ne 0 \\
> \end{dcases} $$ por lo que se define $$ \sum_{k = -\infty}^{\infty} H\left(\omega - \frac{k}{T_s} \right) = T_s $$
> 
> > [!demostracion]- Demostración
> > Se puede demostrar de forma algebraica, utilizando la [[ingeniería electrónica/señales/Transformada discreta de Fourier/Transformada Discreta de Fourier|DFT]] y el [[ingeniería electrónica/señales/Muestreo e Interpolación/Muestreo periódico|Teorema de muestreo de Nyquist]] se puede expresar de la siguiente de las siguientes dos formas $$ \begin{align}
> >     \sum_{n = -\infty}^{\infty} h(n ~ T_s) ~ \exp(-j\omega ~ n ~ T_s) &= \frac{1}{T_s} \sum_{k = -\infty}^{\infty} H\left( \omega - \frac{k}{T_s} \right) \\
> >     \underbrace{h(0 ~ T_s)}_{=~1} ~ \exp(-j\omega ~ 0 ~ T_s) &= \frac{1}{T_s} \sum_{k = -\infty}^{\infty} H\left( \omega - \frac{k}{T_s} \right) \\
> >     1 &= \frac{1}{T_s} \sum_{k = -\infty}^{\infty} H\left( \omega - \frac{k}{T_s} \right) \\
> > \end{align} $$
^prop-9-1-1

Lo que buscamos es una transferencia que 
1. Cumpla el criterio de Nyquist
2. Sea implementable, incluye que sea causal
3. Que tenga el mínimo [[Ancho de banda|ancho de banda]] posible 

El segundo punto descarta la elección de un [[ingeniería electrónica/adc/Respuesta en frecuencia/Filtro pasa-bajo|filtro pasa-bajo]] ideal con frecuencia de corte de $\frac{1}{2 T_s} = W_0$

El tercer punto descarta la elección de un triangulo, de ancho de $\frac{1}{T_s}$ generando el doble del ancho de banda que el ideal

Podemos proponer un [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Función coseno elevado|filtro de coseno elevado]] con un $r > 0$ ![[ingeniería electrónica/taller de comunicaciones/Modulación digital/Función coseno elevado#^representacion]]
Donde podemos definir $W$ en función del ancho de banda idea $W_0$ y el factor de caída $r$, dado por $$ \begin{align} 
    W &= W_0 (r + 1) \\
     &= \frac{1}{2 T_s} (r + 1) \\
     &= \frac{R_s}{2} (r + 1) \\
     &= \frac{R_b}{2 \log_2(M)} (r + 1), & R_s = \frac{R_b}{\log_2(M)} \\
\end{align} $$ donde $M$ es la cantidad de símbolos

Tiene el problema de ser [[ingeniería electrónica/señales/Señales y sistemas/Sistema causal|no es causal]], para resolver esto se propone un filtro basado en el filtro $h(t)$ del coseno elevado que aproxima a este dado por $$ \hat{h}(t) \simeq \mathbb{1}\Set{-k T_s \le t - t_0 \le k T_s} h(t - t_0),~~~ \text{con} ~ k \in \mathbb{N}_0 $$ introduciendo un delay de $k T_s$ pero logrando que sea causal y [[ingeniería electrónica/señales/Filtros digitales/Filtro de Respuesta Finita al impulso|FIR]]

Existe una relación de compromiso donde un $k$ muy grande, permite reducir la complejidad del filtro aumentando el valor de $r$, pero con la desventaja de un ancho de banda mayor. Por otro lado un $r$ chico aumenta la complejidad pero permite un $k$ más chico, reduciendo el delay 

Actualmente tiene un mayor peso el uso de ancho de banda por lo que se suele usar un $r \in [0.2,~ 0.35]$ 

### Filtros terminales óptimos
---
Tenemos como datos 
 * Definimos la transferencia del generador $P_g(\omega)$, ya sea de pulsos como señales [[ingeniería electrónica/analisis 3/Funciones elementales/Función senoidal|senoidales]] 
 * $S_{tx}$ la [[ingeniería electrónica/intro/Potencia/Potencia|potencia]] de salida del transmisor
 * La transferencia del [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Canal discreto sin memoria|canal]] $H_c(\omega)$ la cual tiene un ancho de banda $W$
 * La [[ingeniería electrónica/estoca/Introducción a procesos aleatorios/Densidad espectral de potencia|PSD]] del ruido del canal $G_n(\omega)$
 * $R_s$ la tasa de símbolos por segundo 

Se tiene como requisitos
 * Se necesita cumplir que $P_g(\omega) ~ H_{tx}(\omega) ~ H_c(\omega) ~ H_{rx}(\omega) = K_c ~ H(\omega)$ donde $$ \sum_{k = -\infty}^{\infty} H\left(\omega - \frac{k}{T_s} \right) = T_s $$ notemos que se usará el filtro del coseno elevado para $H(\omega)$
   
 * Se busca minimizar el $P_e$ lo cual implica maximizar $\frac{A^2}{\sigma_0^2}$ la relación señal ruido

Con estos datos y estos requisitos, se obtiene los filtros óptimos $$ \begin{align}
    \left| H_{tx}^{opt}(\omega) \right|^2 &= \frac{ K_c^2 ~ |H(\omega)| ~ G_n^{\frac{1}{2}}(\omega) }{ |P_g(\omega)|^2 ~ |H_c(\omega)| } \\\\
    \left| H_{rx}^{opt}(\omega) \right|^2 &= \frac{ |H(\omega)| }{ |H_c(\omega)| ~ G_n^{\frac{1}{2}}(\omega) } \\
\end{align} $$ donde la probabilidad de error esta dada por $$ \frac{A^2}{\sigma_0^2} \Big|_\text{max} = \frac{3 ~ S_{tx} ~ T_s}{M^2 - 1} \left[ \int_{-\infty}^{\infty} \frac{ |H(\omega)| ~ G_n^{\frac{1}{2}}(\omega) }{ |H_c(\omega)| } ~ d\omega \right]^{-2} $$ entonces $$ P_b = \frac{2 (M - 1)}{M ~ \log_2(M)} ~ Q\left( \frac{3 ~ S_{tx} ~ T_s}{M^2 - 1} \left[ \int_{-\infty}^{\infty} \frac{ |H(\omega)| ~ G_n^{\frac{1}{2}}(\omega) }{ |H_c(\omega)| } ~ d\omega \right]^{-2} \right) $$

Tomando estas suposiciones
 * Que para el caso de pulsos del generador, estos con una duración $\tau$ cumplen que $$ \tau \ll T_s : |P_g(\omega)| \simeq 1, ~~ \forall |\omega| < W $$
 * [[ingeniería electrónica/estoca/Introducción a procesos aleatorios/Ruido blanco|Ruido blanco]] constante dado por $G_n(\omega) = \frac{N_0}{2}$
 * La respuesta del canal sea plana implicando $$ |H_c(\omega)| = \alpha < 1, ~~~ \arg(H_c(\omega)) = -a^2 ~ \omega,~ \text{con}~ a \in \mathbb{R} $$
Podemos simplificar obteniendo $$ \begin{align}
    \left| H_{tx}^{opt}(\omega) \right|^2 &\propto |H(\omega)| &\implies \left| H_{tx}^{opt}(\omega) \right|^2 &\propto \sqrt{|H(\omega)|} \\
    \left| H_{rx}^{opt}(\omega) \right|^2 &\propto |H(\omega)| &\implies \left| H_{rx}^{opt}(\omega) \right|^2 &\propto \sqrt{|H(\omega)|} \\
    \frac{A^2}{\sigma_0^2} \Big|_\text{max} &= \frac{3 S_{tx} ~ T_s}{M^2 - 1} \frac{2 \alpha^2}{N_0} \underbrace{\left[ \int_{-\infty}^{\infty} |H(\omega)| ~ d\omega \right]^{-2}}_{=~1,~~ \forall r \in [0,~ 1]} & S_{tx} ~ \alpha^2 = S_{rx},~~& T_s ~ S_{rx} = E_s \\
    &= \frac{6 E_b ~ \log_2(M)}{(M^2 - 1) ~ N_0} \\
    P_b &\simeq \frac{2 (M - 1)}{M \log_2(M)} ~ Q\left( \sqrt{\frac{6 E_b ~ \log_2(M)}{(M^2 - 1) ~ N_0}} \right)
\end{align} $$