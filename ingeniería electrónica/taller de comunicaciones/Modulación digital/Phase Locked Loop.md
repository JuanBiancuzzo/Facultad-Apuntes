---
dia: 2026-02-28
etapa: empezado
referencias: []
aliases:
  - PLL
  - Lazo de seguimiento de fase
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
Los PLL se pueden utilizar de multiples formas, pero una de las formas es para sincronizar señales para [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Modulación digital coherente|modulaciones coherentes]], donde se necesita generar una onda de referencia con la misma fase que la señal para poder demodularizarla 

%% Grafico del PLL %%

Como primer paso, utilizando un detector de fase, crea una [[ingeniería electrónica/señales/Señales y sistemas/Señal|señal]] proporcional a la diferencia de fase entre la señal de entrada, y la señal generada por el PLL, esta señal será la señal de error $$ \epsilon(t) \propto \theta(t) - \hat{\theta}(t) $$ donde $\hat{\theta}(t)$ es la fase de nuestra señal generada por el PLL

Se utiliza un [[ingeniería electrónica/adc/Respuesta en frecuencia/Filtro pasa-bajo|filtro pasa-bajos]], también conocido como filtro de lazo $L(s)$, para eliminar los componentes de alta frecuencia, que posiblemente generen más errores que señal útil. Esta señal se inyecta al [[Voltage Controlled Oscillator (VCO)|Voltage Controlled Oscillator (VCO)]] que dada una magnitud de tensión la transforma, en este caso, en una señal con una fase $\hat{\theta}(t)$

Este es un [[ingeniería electrónica/control/Respuesta dinámica/Controlador closed-loop|feedback loop]] que permite constantemente corregir el valor de $\hat{\theta}(t)$ para que el error entre él y la fase de la señal tienda a $0$, y por lo tanto permitiendo sincronizar la señal recibida con la generada para la demodularización

## Transferencias
---
Planteando la transferencias de este sistema, se tiene las ecuaciones $$ \begin{dcases}
    E(s) = \Theta(s) - \hat{\Theta}(s) \\
    C(s) = E(s) ~ L(s) \\
    C(s) = s ~ \hat{\Theta}(s) \\
\end{dcases} $$ esta última es por la definición de la VCO

Estas nos permiten encontrar lo siguiente $$ \begin{align}
    E(s) &= \frac{C(s)}{L(s)} \\
     &= \frac{s ~ \hat{\Theta}(t)}{L(s)} \\
    \Theta(s) - \hat{\Theta}(s) &= \frac{s ~ \hat{\Theta}(t)}{L(s)}  \\
    \Theta(s) &= \frac{s ~ \hat{\Theta}(t)}{L(s)} + \hat{\Theta}(s)  \\
    \Theta(s) &= \hat{\Theta}(s) ~ \left( 1 + \frac{s}{L(s)} \right) \\
    \frac{\hat{\Theta}(s)}{\Theta(s)} &= \frac{L(s)}{s + L(s)} \\
\end{align} $$
Siendo esta la expresión de la transferencia de lazo cerrado $G(s)$, y con esta podemos calcular la siguiente transferencia $$ \begin{align}
    E(s) &= \Theta(s) - \hat{\Theta}(s) \\
     &= \Theta(s) - \Theta(s) ~ \frac{L(s)}{s + L(s)} \\
    \frac{E(s)}{\Theta(s)} &= 1 - \frac{L(s)}{s + L(s)} \\
    \frac{E(s)}{\Theta(s)} &= \frac{s}{s + L(s)} \\
\end{align} $$
Siendo esta la expresión de la transferencia del error $G_e(s)$

Se puede calcular el [[Error de estado estacionario|error de estado estacionario]] $$ \begin{align}
    \varepsilon &= \lim_{t \to \infty} \epsilon(t) \\
    &= \lim_{s \to 0} s ~ E(s) \\
    &= \lim_{s \to 0} \frac{s^2}{s + L(s)} ~ \Theta(s) \\
\end{align} $$ lo cual nos dice que depende tanto del filtro de lazo como la transferencia de la fase de la señal de entrada

## Ordenes
---
Se define el orden de un PLL en función del filtro utilizado para el filtro de lazo
* PLL de primer orden, propone $L(s) = K$
    * Generando las transferencias $$ \begin{matrix} G(s) = \frac{K}{s + K} && G_e(s) = \frac{s}{s + K} \end{matrix} $$
    * Permite el control para saltos en la fase, pero no saltos en frecuencia
        * $\theta(t) = \theta_0 ~ u(t)$ produce un error estacionario $$ \varepsilon = \lim_{s \to 0} \frac{s^2}{s + K} ~ \frac{\theta_0}{s} = \lim_{s \to 0} \frac{s ~ \theta_0}{s + K} = 0 $$        
        * $\theta(t) = \Delta \omega ~ t ~ u(t)$ produce un error estacionario $$ \varepsilon = \lim_{s \to 0} \frac{s^2}{s + K} ~ \frac{\Delta \omega}{s^2} = \lim_{s \to 0} \frac{\Delta \omega}{s + K} = \frac{\Delta \omega}{K} $$ donde solo se puede reducir aumentando la [[ingeniería electrónica/intro/Respuesta en frecuencia/Ganancia|ganancia]] del filtro $L(s)$, pero el valor de $K$ también aumenta el [[Ancho de banda|ancho de banda]] de $G(s)$
%% Grafico de la transferencia de G(s) %%
    
* PLL de segundo orden, propone $L(s) = K ~ \frac{s + K_1}{s + K_2}$
    * Generando las transferencias $$ \begin{matrix} G(s) = \frac{K ~ (s + K_1)}{s^2 + (K_2 + K) ~ s + K ~ K_1} && G_e(s) = \frac{s ~ (s + K_2)}{s^2 + (K_2 + K) ~ s + K ~ K_1} \end{matrix} $$
    * Permite el control para saltos en la fase, y los saltos en frecuencia
        * $\theta(t) = \theta_0 ~ u(t)$ produce un error estacionario $$ \varepsilon = \lim_{s \to 0} \frac{s^2 ~ (s + K_2)}{s^2 + (K_2 + K) ~ s + K ~ K_1} ~ \frac{\theta_0}{s} = \lim_{s \to 0} \frac{s ~ (s + K_2) ~ \theta_0}{s^2 + (K_2 + K) ~ s + K ~ K_1} = 0 $$
        * $\theta(t) = \Delta \omega ~ t ~ u(t)$ produce un error estacionario $$ \varepsilon = \lim_{s \to 0} \frac{s^2 ~ (s + K_2)}{s^2 + (K_2 + K) ~ s + K ~ K_1} ~ \frac{\Delta \omega}{s^2} = \lim_{s \to 0} \frac{\Delta \omega ~ (s + K_2)}{s^2 + (K_2 + K) ~ s + K ~ K_1} = \frac{\Delta \omega ~ K_2}{K ~ K_1} $$ donde se puede reducir este error utilizando los $3$ valores, sin afectar el ancho de banda del sistema
    