---
dia: 2026-02-22
etapa: empezado
referencias: []
aliases:
  - Interferencia inter simbólica#^isi
  - ISI#^isi
  - Inter Symbol Interference#^isi
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

