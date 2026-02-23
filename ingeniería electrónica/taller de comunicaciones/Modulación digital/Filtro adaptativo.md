---
dia: 2026-02-23
etapa: empezado
referencias:
  - "1086"
aliases:
  - Matched filter
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
La [[ingeniería electrónica/señales/Señales y sistemas/Señal|señal]] es $r(t) = s(t) + n(t)$, con $s(t)$ el mensaje, determinística, con [[ingeniería electrónica/señales/Señales y sistemas/Energía de una señal|energía]] finita y de duración $T$, y $n(t)$ es el ruido aditivo, [[ingeniería electrónica/estoca/Introducción a procesos aleatorios/Ruido blanco|blanco gaussiano y gaussiano]] con [[ingeniería en informática/proba/Representación de variables aleatorias/Esperanza|valor medio]] nulo y [[Valor cuadrático medio|valor cuadrático medio]] $\sigma_n^2 = \frac{N_0}{2}$, donde $N_0$ es la [[ingeniería electrónica/estoca/Introducción a procesos aleatorios/Densidad espectral de potencia|densidad espectral de potencia]]. Se tiene el [[ingeniería electrónica/señales/Señales y sistemas/Sistema|sistema]]

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
        \tikzmath { 
            \ancho = 2.5; \alto = 1.3; \sep = 1.5; \scale = 1; 
        }
        \draw (0, 0) rectangle ++(\ancho, \alto)
            node[midway, scale=\scale] {$h(t)$};
            
        \draw[<-] (0, {\alto / 2}) -- ++(-\sep, 0)
            node[pos=1.1, left=0, scale=\scale] {$r(t)$};
        \draw[->] (\ancho, {\alto / 2}) -- ++(\sep, 0)
            node[pos=1.1, right=0, scale=\scale] 
                {$z(t) = a(t) + n_0(t)$};
                
	\end{tikzpicture}
\end{document}
```

Queremos encontrar $h(t)$ tal que se maximice la [[Relación señal-ruido|relación señal a ruido]] $\frac{a(t)^2}{\sigma_0^2}$, en $t = T$ ya que se espera muestrear al periodo $T$

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\definecolor{color_s}{RGB}{255, 0, 127} 
	\definecolor{color_r}{RGB}{0, 127, 204}
	\definecolor{color_z}{RGB}{102, 127, 229} 
    
	\tikzmath {
        \sep = 0.25; \interSep = 2; \ancho = 5; \alto = 3;
        \T = 0.8 * \ancho; \altoF = 0.6 * \alto; \dx = 0.05; 
        \scale = 1;
        
        function ruido(\x) {
            return 0.05 * sin(deg(10 * \x)) 
                + 0.055 * cos(deg(7.5 * \x))
                + 0.065 * sin(deg(15 * \x))
                + 0.06 * cos(deg(12.5 * \x));
        };
        function mensaje(\x) {
           if \x > 0 && \x < \T then {
               return \altoF + ruido(\x);
           } else {
               return ruido(\x);
           }; 
        };
        function recibido(\x) {
            let \s = 0.3;
            return ruido(1.3 * \x) 
                + \altoF * exp(-(\x - \T)^2 / (2 * \s^2));
        };
	}
	\begin{tikzpicture}[scale=1.1, transform shape, ultra thick]
        \coordinate (plot_s) at (0, 0);
        \coordinate (plot_z) at ({\ancho + \interSep}, 0);
        
        \foreach \coorNombre in {s, z} {
            \begin{scope}[cm={1, 0, 0, 1, (plot_\coorNombre)}]
                \draw[->] (-\sep, 0) -- ({\ancho + \sep}, 0) 
                    node[pos=1.01, above=2pt, scale=\scale] {$t$};
                \draw[->] (0, -\sep) -- (0, \alto);
                
                \draw (\T, {\sep / 2}) -- (\T, {-\sep / 2})
                    node[below=2pt, scale=\scale] {$T$};
            \end{scope}
        }
        
        \begin{scope}[cm={1, 0, 0, 1, (plot_s)}]
            \path (0, \alto)
                node[left=2pt, scale=\scale, color=color_s] {$s(t)$}
                node[right=2pt, scale=\scale, color=color_r] {$r(t)$};
                
            \draw[color_s] ({-\sep / 2}, 0) -- (0, 0)
                -- (0, \altoF)
                -- (\T, \altoF)
                -- (\T, 0)
                -- (\ancho, 0);

            \draw[color_r] (-\sep, {mensaje(-\sep)})
            \foreach \x [parse=true] in {-\sep + \dx, -\sep + 2 * \dx, ..., \ancho} {
                -- (\x, {mensaje(\x)})
            };
                
        \end{scope}
        
        \begin{scope}[cm={1, 0, 0, 1, (plot_z)}]
            \path (0, \alto)
                node[right=2pt, scale=\scale, color=color_z] {$z(t)$};
            \draw[color_z] (-\sep, {recibido(-\sep)})
            \foreach \x [parse=true] in {-\sep + \dx, -\sep + 2 * \dx, ..., \ancho} {
                -- (\x, {recibido(\x)})
            };
            
            \draw[dashed] (\T, -\sep) -- (\T, \alto);
        \end{scope}
    
        \draw[->, shorten >=5pt, shorten <=5pt] 
            ($ (plot_s) + ({0.7 * \ancho}, \alto) $) .. controls 
                ($ (plot_s) + ({0.9 * \ancho}, {1.45 * \alto}) $) and 
                ($ (plot_z) + ({0.1 * \ancho}, {1.45 * \alto}) $)
            .. ($ (plot_z) + ({0.3 * \ancho}, \alto) $) 
                node[midway, above=2pt] {$h(t)$};
        
	\end{tikzpicture}
\end{document}
```

Para encontrar $h(t)$ necesitamos plantear esa relación como la siguiente $$ \begin{align} 
    a(t) &= \mathcal{F}^{-1}\Set{ S(\omega) ~ H(\omega) } \\
     &= \int_{-\infty}^{\infty} S(\omega) ~ H(\omega) ~ \exp(j\omega t) ~ d\omega \\
    |a(t = T)|^2 &= \left| \int_{-\infty}^{\infty} S(\omega) ~ H(\omega) ~ \exp(j\omega t) ~ d\omega \right|^2 \\
\end{align} $$
Utilizando la propiedad de la [[ingeniería electrónica/estoca/Introducción a procesos aleatorios/Densidad espectral de potencia|PSD]] con respecto a un sistema lineal $$ \begin{align} 
    G_{0}(\omega) &= G_n(\omega) ~ |H(\omega)|^2 \\   
     \sigma_0^2 &= \int_{-\infty}^{\infty} G_n(\omega) ~ |H(\omega)|^2 ~ d\omega \\
\end{align} $$
Finalmente la relación señal a ruido $$ \frac{|a(t = T)|^2}{\sigma_0^2} = \frac{2}{N_0} \frac{\displaystyle \left| \int_{-\infty}^{\infty} S(\omega) ~ H(\omega) ~ \exp(j\omega t) ~ d\omega \right|^2}{\displaystyle \int_{-\infty}^{\infty} |H(\omega)|^2 ~ d\omega} $$ usando la [[ingeniería en informática/analisis 2/Nomenclatura/Desigualdad de Cauchy-Schwarz|desigualdad de Cauchy-Schwarz]] $$ \begin{align} 
     \frac{2}{N_0} \frac{\displaystyle \left| \int_{-\infty}^{\infty} S(\omega) ~ H(\omega) ~ \exp(j\omega t) ~ d\omega \right|^2}{\displaystyle \int_{-\infty}^{\infty} |H(\omega)|^2 ~ d\omega} &\le  \frac{2}{N_0} \frac{\displaystyle \int_{-\infty}^{\infty} |H(\omega)|^2 ~ d\omega ~ \int_{-\infty}^{\infty} \left| S^*(\omega) ~ \exp(-j\omega t) \right|^2 ~ d\omega}{\displaystyle \int_{-\infty}^{\infty} |H(\omega)|^2 ~ d\omega} \\
      &\le \frac{2}{N_0} \int_{-\infty}^{\infty} \left| S^*(\omega) ~ \exp(-j\omega t) \right|^2 ~ d\omega \\
      &\le \frac{2}{N_0} \int_{-\infty}^{\infty} \left| S^*(\omega) \right|^2 ~ d\omega \\
      &\le \frac{2}{N_0} ~ E_S \\
\end{align} $$
Donde $E_S$ es la energía de la señal, y por lo tanto para maximizar la relación señal a ruido, se tiene una relación de $\frac{2 ~ E_S}{N_0}$ y esta no depende de la forma de la señal

Se llega al máximo cuando se cumple la igualdad, esto ocurre cuando $$ H_{opt}(\omega) = k ~ S^*(\omega) ~ \exp(-j\omega T), ~~~ k \in \mathbb{R} $$ en general tomando $k = 1$. Destransformándolo se obtiene $$ \begin{align} 
    h(t) &= \mathcal{F}^{-1}\Set{H(\omega)} \\
     &= \mathcal{F}^{-1}\Set{k~ S^{*}(\omega) ~ \exp(-j\omega T)} \\
     &= k ~ s^*(T - t)
\end{align} $$ este siendo un [[ingeniería electrónica/señales/Señales y sistemas/Sistema causal|filtro causal]], y notemos que nuestra señal es real, por lo que no es necesario el [[Conjugado|conjugador]]

Se puede implementar este filtro de forma exacta con un [[Correlador|correlador]] ya que se puede expresar de la siguiente forma $$ \begin{align}
    z(t) &= r(t) \ast h(t) \\
     &= \int_{-\infty}^{\infty} r(\tau) ~ h(t - \tau) ~ d\tau && \begin{cases}
        h(t - \tau) = 0, & \forall t < \tau\\
        r(\tau) = 0, & \forall \tau < 0 
     \end{cases} \\
     &= \int_{0}^{t} r(\tau) ~ h(t - \tau) ~ d\tau \\
     &= \int_{0}^{t} r(\tau) ~ s(T - (t - \tau)) ~ d\tau \\
    z(T) &= \int_{0}^{t} r(\tau) ~ s(T - (T - \tau)) ~ d\tau \\
     &= \int_{0}^{t} r(\tau) ~ s(\tau) ~ d\tau \\
\end{align} $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```