---
dia: 2024-10-04
tags:
  - carrera/ingeniería-electrónica/electro/Ondas-electromagnéticas-en-el-vacío
  - nota/facultad
aliases:
  - Incidencia normal de una onda electromagnéticas sobre una interface#Incidencia normal
  - Coeficiente de reflexión#^coeficientes
  - Coeficiente de transmisión#^coeficientes
  - Coeficiente de reflexión de potencia#^coeficientes-potencia
  - Coeficiente de transmisión de potencia#^coeficientes-potencia
  - Impedancia de campo#^impedancia-de-campo
  - Impedancia de onda#^impedancia-de-campo
  - Leyes de Snell#^ley-snell
vinculoFacultad:
  - "[[ingeniería electrónica/electro/Ondas electromagnéticas/Resumen.md]]"
---
# Definición
---
Cuando las ondas inciden normalmente sobre la interfase se producen reflexiones cuya descripción es equivalente a la de la propagación de ondas en líneas de transmisión

## Incidencia normal
---
Consideremos una [[Onda plana electromagnética|onda plana]] [[Onda monocromática|monocromática]] [[Polarización de una onda electromagnética#^polarizacion-lineal|linealmente polarizada]] que incide normalmente desde un medio ($1$) sobre un plano interfase que lo separa de un medio ($2$)

```tikz
\usepackage{amssymb}
\usetikzlibrary{3d}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    
    \coordinate (O) at (0, 0, 0);
    \coordinate (xhat) at (0, 1, 0);
    \coordinate (yhat) at (0, 0, 1);
    \coordinate (zhat) at ({3/sqrt(10)}, 0, {1/sqrt(10)});
    
    
    \draw[->] (O) -- ($ (O)!5!(zhat) $) node[above=2pt, scale=0.9] {$z$};
    \draw[->] (O) -- ($ (O)!2.25!(xhat) $) node[right=2pt, scale=0.9] {$x$};
    \draw[->] (O) -- ($ (O)!2!(yhat) $) node[above=2pt, scale=0.9] {$y$};
    \draw (O) -- ($ (O)!-7!(zhat) $);
    
    \path ($ (O)!1.5!(xhat) + (O)!-0.5!(zhat) $) node[draw, rectangle] {$1$};
    \path ($ (O)!1.5!(xhat) + (O)!0.5!(zhat) $) node[draw, rectangle] {$2$};
    
    \fill[opacity=0.4] ($ (O)!1.9!(xhat) $) -- ++($ (O)!3!(zhat) $)
        -- ++($ (O)!-3.8!(xhat) $)
        -- ++($ (O)!-3!(zhat) $)
        -- cycle;
    
    \begin{scope}[blue, ultra thick, ->]
        \coordinate (centro) at ($ (O)!1.5!(zhat) $);
        \draw(centro) -- ++(zhat) node[above=2pt, scale=0.9] {$N_t$};
        \draw (centro) -- ++($ (O)!1.5!(yhat)$) 
            node[right=2pt, scale=0.9] {$H_t$};
        \draw (centro) -- ++(xhat) node[above=2pt, scale=0.9] {$E_t$};
    \end{scope}
    
    \begin{scope}[red, ultra thick, ->]
        \coordinate (centro) at ($ (O)!-2!(zhat) $);
        \draw (centro) -- ++($ (O)!-1!(zhat)$) 
            node[above=2pt, scale=0.9] {$N_r$};
        \draw (centro) -- ++($ (O)!-1.5!(yhat)$) 
            node[right=2pt, scale=0.9] {$H_r$};
        \draw (centro) -- ++(xhat) node[above=2pt, scale=0.9] {$E_r$};
    \end{scope}
    
    \begin{scope}[ultra thick, ->]
        \coordinate (centro) at ($ (O)!-6!(zhat) $);
        \draw(centro) -- ++(zhat) node[above=2pt, scale=0.9] {$N_i$};
        \draw (centro) -- ++($ (O)!1.5!(yhat)$) 
            node[right=2pt, scale=0.9] {$H_i$};
        \draw (centro) -- ++(xhat) node[above=2pt, scale=0.9] {$E_i$};
    \end{scope}
    
\end{tikzpicture}
\end{document}
```

En la incidencia normal la dirección de propagación es perpendicular al plano interfase. Suponemos que el medio de incidencia ($1$) no tiene pérdidas ($k_1$ y $\eta_1$ reales). El medio de transmisión ($2$) tendrá en general parámetros complejos $\gamma_2$ y $\eta_2$

Planteamos las ecuaciones de los campos en las dos regiones $$ \begin{array} {rcllr}
    (1) &\implies& \begin{cases} 
        \vec{E}_1(\vec{r},~t) = E_{0+} ~ e^{i(\omega t - k_1 z)} ~ \hat{x} - E_{0-} ~ e^{i(\omega' t - k_1' z)} ~ \hat{x} \\
        \vec{H}_1(\vec{r},~t) = \frac{E_{0+}}{\eta_1} ~ e^{i(\omega t - k_1 z)} ~ \hat{y} - \frac{E_{0-}}{\eta_1} ~ e^{i(\omega' t - k_1' z)} ~ \hat{y} \\
    \end{cases} &~~~~& k_1' = k_1\left( \omega' \right) \\
    (2) &\implies& \begin{cases} 
        \vec{E}_2(\vec{r},~t) = E_{0t} ~ e^{i(\omega'' t - \gamma_2'' z)} ~ \hat{x} \\
        \vec{H}_2(\vec{r},~t) = \frac{E_{0t}}{\eta_2} ~ e^{i(\omega'' t - \gamma_2'' z)} ~ \hat{y} \\
    \end{cases} &~~~~& \gamma_2' = \gamma_2\left( \omega' \right) \\
\end{array} $$
En la región de incidencia, debe hacer en general una onda incidente y una onda reflejada, debido a la presencia de la interfase, debido a la presencia de la interfase que implica una discontinuidad en el medio donde ocurre la propagación. En la región de transmisión, supuesto semi-infinito, sólo hay una onda transmitida. Las [[Función periódica#Frecuencia|frecuencias]] de estas tras ondas son en general diferentes

Los campos deben cumplir las condiciones de contorno en la interfase $z = 0$. Como ambos campos son tangenciales a la [[Superficie|superficie]] de separación, se conservan $$ \begin{align} 
    E_1(z = 0,~t) = E_2(z = 0,~t) &\implies E_{0+} ~ e^{i\omega t} + E_{0-} ~ e^{i\omega' t} = E_{0t} ~ e^{i\omega'' t} \\
    H_1(z = 0,~t) = H_2(z = 0,~t) &\implies \frac{E_{0+}}{\eta_1} ~ e^{i\omega t} - \frac{E_{0-}}{\eta_1} ~ e^{i\omega' t} = \frac{E_{0t}}{\eta_2} ~ e^{i\omega'' t}
\end{align} $$
Estas ecuaciones se deben cumplir para todo $t$. Como las funciones exponenciales complejas son [[Ortogonalidad|ortogonales]] para distintos valores de $\omega$ debe ser $\omega = \omega' = \omega''$

Queda así $$ \begin{matrix} 
    \displaystyle E_{0+} + E_{0-} = E_{0t} &&& \displaystyle \frac{E_{0+}}{\eta_1} + \frac{E_{0-}}{\eta_1} = \frac{E_{0t}}{\eta_2}
\end{matrix} $$
De estas dos ecuaciones podemos despejar $E_{0-}$ y $E_{0t}$ en función de $E_{0+}$ $$ \begin{align} 
    \rho &= \frac{E_{0-}}{E_{0+}} = \frac{\eta_2 - \eta_1}{\eta_2 + \eta_1} \\
    \tau &= \frac{E_{0t}}{E_{0+}} = 1 + \rho = \frac{2\eta_2}{\eta_2 + \eta_1}
\end{align} $$ donde hemos definido los coeficientes de reflexión $\rho$ y transmisión $\tau$ ^coeficientes

Desde el punto de vista del transporte de [[Energía|energía]], podemos calcular el flujo medio de potencia por unidad de área que transportan las ondas involucradas $$ \begin{align} 
    \langle P_i \rangle &= \frac{1}{2} \mathcal{Re}\Set{ E_i ~ H_i^* } ~~~ (\eta_1 ~ \text{real}) \\
    \langle P_r \rangle &= \frac{1}{2} \mathcal{Re}\Set{ E_r ~ H_r^* } = |\rho|^2 \frac{E_{0+}^2}{2\eta_1} = |\rho|^2 &\implies R &= \frac{\langle P_r \rangle}{\langle P_i \rangle} = |\rho|^2 \\
    \langle P_t \rangle &= \frac{1}{2} \mathcal{Re}\Set{ E_t ~ H_t^* } = |\tau|^2 \frac{\eta_1 ~ \eta_2'}{|\eta_2|^2} ~ \langle P_i \rangle &\implies T &= \frac{\langle P_t \rangle}{\langle P_i \rangle} = \frac{\eta_1 ~ \eta_2'}{|\eta_2|^2} |\tau|^2 \\
\end{align} $$ donde $R$ y $T$ son los coeficientes de reflexión y transmisión de potencia ^coeficientes-potencia

Para una onda plana que se propaga en un medio infinito, la relación entre el campo eléctrico y el magnético es $\pm\eta$, donde $\eta$ es la [[Impedancia intrínseca|impedancia intrínseca]] de ese medio y el signo superior corresponde a la [[Ecuación de onda#^onda-progresiva|onda progresiva]] y el inferior a la [[Ecuación de onda#^onda-regresiva|regresiva]]. Esto ocurre para los campos transmitidos, que forman una onda progresiva, pero no para los campos en el medio de incidencia. En este último caso podemos definir la impedancia de campo o impedancia de onda $$ Z(z) = \frac{E_1}{H_1} = \frac{E_{0+} ~ e^{-ikz} + E_{0-} ~ e^{ikz}}{\frac{E_{0+}}{\eta_1} ~ e^{-ikz} - \frac{E_{0-}}{\eta_1} ~ e^{ikz}} \implies Z(z) = \eta_1 ~ \frac{e^{-ikz} + \rho e^{ikz}}{e^{-ikz} - \rho e^{ikz}} $$ que depende de la posición ^impedancia-de-campo

### Incidencia sobre un dieléctrico sin pérdidas
---
En este caso $\eta_2 \in \mathbb{R}$ y entonces $\rho \in \mathbb{R}$

El campo reflejado se hallará en fase con el campo incidente en $z = 0$ si $\eta_2 > \eta_1$ y en contrafase si $\eta_2 < \eta_1$. Sólo si las impedancias intrínsecas de ambos medios coinciden no habrá reflexión

En general, esto ocurrirá cuando se trate de un único medio (no existe interfase) si ambos medios son [[Dieléctrico|dieléctricos]], ya que serán medios paramagnéticos y las [[Permitividad eléctrica|permeabilidades]] habitualmente serán cercanas a la del vacío

### Incidencia sobre un dieléctrico con pérdidas
---
En este caso $\eta_2 \in \mathbb{C}$ y entonces $\rho \in \mathbb{C}$

Para dieléctricos de bajas pérdidas, con $\mathcal{Im}\set{\eta_2} \ll \mathcal{Re}\set{\eta_2}$ y el desfasaje entre los campos es pequeño. Los campos de la onda transmitida decaen lentamente en la propagación

### Incidencia sobre un conductor
---
En este caso $\eta_2 \in \mathbb{C}$ y $|\eta_2| \ll 1$

Si se tratara de un [[Conductor|conductor]] perfecto ($\sigma \to \infty$), $\eta_2 \to 0$. En tal caso $\rho = -1$ y se forman ondas estacionarias de $\vec{E}$ y $\vec{H}$ en el medio de incidencia. La onda de $\vec{E}$ estará desfasada en $\frac{\pi}{2}$ en tiempo y espacio respecto de la onda de $\vec{H}$. Toda la potencia incidente se refleja

Cuando el medio conductor no es perfecto, de todas formas $|\eta_2| \ll \eta_0$ y entonces $$ \begin{align} 
    \rho &= \frac{\eta_2 - \eta_1}{\eta_2 + \eta_1} \\
     &= -\frac{\eta_1 - \eta_2}{\eta_1 + \eta_2} \\
     &= -\frac{1 - \frac{\eta_2}{\eta_1}}{1 + \frac{\eta_2}{\eta_1}} \\
     &\approx -\left(1 - 2 \frac{\eta_2}{\eta_1} \right) \\
     &\approx -1 + 2 \frac{\eta_2}{\eta_1}
\end{align} $$ de modo que $\rho$ difiere del caso ideal por una pequeña diferencia

El coeficiente de transmisión es $$ \tau = 1 + \rho \approx 2 \frac{\eta_2}{\eta_1} \implies |\tau| \ll 1 $$
La potencia que se propaga por el conductor es $$ \begin{align} 
    \langle N_t \rangle &= \frac{\eta_2' ~ |E_{0t}|^2}{2|\eta_2|^2} ~ e^\frac{-2z}{\delta} \\ 
     &= \frac{\eta_2' ~ |\tau|^2 |E_{0+}|^2}{2|\eta_2|^2} ~ e^\frac{-2z}{\delta} \\
     &\approx \frac{2 |E_{0+}|^2}{\eta_1^2 \sigma \delta} ~ e^\frac{-2z}{\delta} \\
     &\approx \frac{4}{\eta_1 \sigma \delta} ~ \langle N_i \rangle ~ e^\frac{-2z}{\delta}
\end{align} $$ donde $\langle P_i \rangle$ es el valor medio de la potencia incidente

Toda esta [[Potencia|potencia]] se disipa por [[Efecto Joule|efecto Joule]] en el semiespacio conductor. Por lo tanto $\frac{4}{\eta_1 \sigma \delta}$ de la potencia incidente por unidad de área de interfase se disipa en el conductor. Este valor es muy pequeña

## Incidencia oblicua
---
Cuando el [[Onda monocromática#Vector de onda|vector de propagación]] $\vec{k}$ de una [[Onda electromagnética|onda electromagnética]] incidente no es normal a la interfase plana entre dos medios de impedancia intrínseca diferentes hablamos de incidencia oblicua

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{3d}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    
    \draw[->] (0, 0) -- (0, -1.5) node[below left=2pt] {$z$};
    \draw[ultra thick, ->] (0, 0) -- (0, -1) 
        node[left=2pt, scale=0.9] {$\vec{n}$};
    \draw[ultra thick, ->] (0, 0) -- (1, -1) 
        node[right=2pt, scale=0.9] {$\vec{k}_t$};
    
    \draw (0, -1) arc [radius=1cm, start angle=-90, delta angle=45]
        node[pos=0.4, above=2pt, scale=0.8] {$\theta_t$};
        
    \begin{scope}[canvas is xz plane at y=0, fill=darkgray]
        \fill[opacity=0.6] (-2.5, 2) rectangle (2.5, -2);
    \end{scope}
    
    \draw[->] (-1, 0) -- (3, 0) node[above right=2pt] {$x$};
    \draw (0, 0) -- (0, 1.5);
    
    \draw[ultra thick, <-] (0, 0) -- (-1, 1) 
        node[above=2pt, scale=0.9] {$\vec{k}_i$};
    \draw[ultra thick, ->] (0, 0) -- (1, 1) 
        node[above=2pt, scale=0.9] {$\vec{k}_r$};
        
    \draw (0, 1) arc [radius=1cm, start angle=90, delta angle=-45]
        node[pos=0.4, below=2pt, scale=0.8] {$\theta_r$};
    \draw (0, 1) arc [radius=1cm, start angle=90, delta angle=45]
        node[pos=0.4, below=2pt, scale=0.8] {$\theta_i$};
    
\end{tikzpicture}
\end{document}
```

En plano formado por la normal $\vec{n}$ a la interfase y el vector de incidencia $k_i$ es el plano de incidencia ($xz$). El ángulo de incidencia es $\theta_i$. Debido a la desadaptación de impedancias entre ambos medios habrá generalmente una onda reflejada, definida por su ángulo de reflexión $\theta_r$ y el vector $\vec{k}_r$ y una onda transmitida (o refractada), definida por el ángulo de refracción $\theta_t$ y el vector $\vec{k}_t$

Desde el punto de vista de la potencia que propagan las ondas, se ve que hay una potencia transmitida $\langle P_t \rangle$ en el medio de transmisión, mientras que en el medio de incidencia hay potencia que se propaga en dirección paralela a la interfase y potencia que se propaga en dirección normal a la interfase. Las componentes de los campos normales al plano de incidencia son transversales a las direcciones de propagación de potencia

La impedancia de onda, es la relación entre las componentes de los campos paralelas a la interfase $$ Z = \frac{|E_t|}{|H_t|} = \frac{\left| \hat{n} \times \vec{E} \right|}{\left| \hat{n} \times \vec{H} \right|} $$
La onda plana incidente tendrá sus campos polarizados en un plano perpendicular a $\vec{k}_i$. Suponemos por simplificad ondas linealmente polarizadas. En tal caso, cualquier dirección de polarización de los campos se puede resolver en dos componentes
1. Con $\vec{E}$ contenido en el plano de incidencia
2. Con $\vec{E}$ normal al plano de incidencia

Las condiciones de borde de los campos sobre la interfase son diferentes para estos dos casos, por lo que vamos a estudiarlos por separado. Los campos resultantes se pueden superponer en un caso de polarización lineal cualquiera

Para cualquier dirección de polarización de la onda incidente podemos escribir que $$ \begin{align} 
    \vec{E}_i(\vec{r},~t) &= E_0 ~ e^{i(\omega t - \vec{k}_i ~ \vec{r})}, && 
    \vec{H}_i(\vec{r},~t) &= \frac{1}{\omega \mu_1} \left( \vec{k}_i \times \vec{E}_i(\vec{r},~t) \right) \\
    \vec{E}_r(\vec{r},~t) &= E_0 ~ e^{i(\omega' t - \vec{k}_r' ~ \vec{r})}, && 
    \vec{H}_r(\vec{r},~t) &= \frac{1}{\omega' \mu_1} \left( \vec{k}_r' \times \vec{E}_r(\vec{r},~t) \right) \\
    \vec{E}_t(\vec{r},~t) &= E_0 ~ e^{i(\omega'' t - \vec{k}_t'' ~ \vec{r})}, && 
    \vec{H}_t(\vec{r},~t) &= \frac{1}{\omega'' \mu_2} \left( \vec{k}_t'' \times \vec{E}_t(\vec{r},~t) \right) \\
\end{align} $$ donde $\vec{k}_r' = \vec{k}_r(\omega')$, $\vec{k}_t'' = \vec{k}_t(\omega'')$

Estos campos deben satisfacer las condiciones de contorno sobre la interfase $z = 0$ $$ \begin{matrix} 
    \left(\vec{E}_i + \vec{E}_r - \vec{E}_t \right) \times \hat{n} = 0, &&& 
    \left(\vec{H}_i + \vec{H}_r - \vec{H}_t \right) \times \hat{n} = 0,
\end{matrix} $$ que es la expresión matemática de conservación de la componentes tangenciales

Estas ecuaciones de conservación implican que la fase de las ondas debe ser la misma sobre el plano interfase por la [[Ortogonalidad|ortogonalidad]] de las [[Función exponencial|exponenciales complejas]]. Nuevamente, como en el caso de la incidencia normal, la frecuencia de las ondas debe ser la misma $$ \omega = \omega' = \omega'' \implies \vec{k}_r' = \vec{k}_r = \vec{k}_r(\omega), ~~ \vec{k}_t'' = \vec{k}_t = \vec{k}_t(\omega) $$ para que estas condiciones se cumplan para todo instante de tiempo, y además $$ k_{i_x} x = k_{r_x} x = k_{t_x} x \implies k_{i_x} = k_{r_x} = k_{t_x} $$ para que se cumpla para todo punto ($x,~z = 0$) sobre la interfase

Entonces las componentes tangenciales de los vectores de onda deben ser iguales y tenemos $$ \begin{align} 
    k_{i_x} &= k_{r_x} 
        &\implies&& k_i \sin(\theta_i) &= k_r \sin(\theta_r) 
        &\implies&& \sin(\theta_i) &= \sin(\theta_r)
        &\implies& \theta_i = \theta_r \\
    k_{i_x} &= k_{t_x} 
        &\implies&& k_i \sin(\theta_i) &= k_t \sin(\theta_t) 
        &\implies&& \frac{\sin(\theta_i)}{\sin(\theta_t)} &= \frac{k_t}{k_i} = \frac{\mu_2 \eta_1}{\mu_1 \eta_2}
\end{align} $$
Estas relaciones entre los ángulos de las direcciones de propagación y la normal a la interfase se conocen como leyes de Snell de la óptica geométricas ^ley-snell

### Campo eléctrico incidentes es normal al plano de incidencia
---
En este caso los vectores eléctricos son transversales a las direcciones de propagación de potencia, mientras que el campo magnético tiene componentes longitudinales a esas direcciones. Se dice entonces que se trata de un modo de propagación TE (transversal eléctrico)

Además, los vectores eléctricos son paralelos a la interfase y entonces la condición de contorno lleva a $$ E_{0y} + E_{0ry} = E_{0ty} $$ y para los vectores magnéticos $$ H_{0x} + H_{0rx} = H_{0tx} $$
Obsérvese que la impedancia de onda para la onda incidente es $$ Z_{TE_1} = -\frac{E_{0y}}{H_{0x}} = \frac{E_0}{H_0 ~ \cos(\theta_i)} = \eta_1 \sec(\theta_i) $$ donde hemos colocado el signo menos para que el signo de $Z_{TE}$ sea positivo, ya que la componente tangencial del campo magnético es negativa

Análogamente, para la onda reflejada $$ Z_{TE} = \frac{E_{0ry}}{H_{0rx}} = \frac{E_{0r}}{H_{0r} ~ \cos(\theta_i)} = \eta_1 \sec(\theta_i) = Z_{TE_1} $$
Para la onda transmitida $$ Z_{TE} = -\frac{E_{0ty}}{H_{0tx}} = \frac{E_{0t}}{H_{0t} ~ \cos(\theta_t)} = \eta_2 \sec(\theta_t) = Z_{TE_2} $$

Entonces las ecuaciones de borde se puede escribir $$ \begin{matrix} 
E_0 + E_{0r} = E_{0t}, &&& 
\frac{E_0}{Z_{TE_1}} + \frac{E_{0r}}{Z_{TE_1}} = \frac{E_{0t}}{Z_{TE_2}}
\end{matrix} $$
Podemos calcular el coeficiente de reflexión y el coeficiente de transmisión a partir de estas ecuaciones $$ \begin{align} 
    \rho_{TE} &= \frac{Z_{TE_2} - Z_{TE_1}}{Z_{TE_2} - Z_{TE_1}}, &&&
    \tau_{TE} &= 1 + \rho_{TE} = \frac{2Z_{TE_2}}{Z_{TE_2} + Z_{TE_1}} \\\\ 
    \displaystyle &= \frac{\eta_2 \cos(\theta_i) - \eta_1 \cos(\theta_t)}{\eta_2 \cos(\theta_i) + \eta_1 \cos(\theta_t)}, &&&
    \displaystyle &= \frac{2\eta_2 \cos(\theta_i)}{\eta_2 \cos(\theta_i) + \eta_1 \cos(\theta_t)} \\\\
    \displaystyle &= \frac{ \cos(\theta_i) - \frac{\mu_1}{\mu_2} \sqrt{ \frac{\eta_1^2 \mu_2^2}{\eta_2^2 \mu_1^2} - \sin^2(\theta_i) } }{ \cos(\theta_i) + \frac{\mu_1}{\mu_2} \sqrt{ \frac{\eta_1^2 \mu_2^2}{\eta_2^2 \mu_1^2} - \sin^2(\theta_i) } }, &&&
    \displaystyle &= \frac{2\cos(\theta_i)}{ \cos(\theta_i) + \frac{\mu_1}{\mu_2} \sqrt{ \frac{\eta_1^2 \mu_2^2}{\eta_2^2 \mu_1^2} - \sin^2(\theta_i) } }
\end{align} $$
El campo eléctrico en el medio de incidencia es $$ \begin{align} 
    \vec{E}_1 &= E_0 ~ e^{i(\omega t - \vec{k}_i \cdot \vec{r})} ~ \hat{y} + \rho_{TE} E_0 ~ e^{i(\omega t - \vec{k}_r \cdot \vec{r})} ~ \hat{y} \\
     &= E_0 ~ e^{i\omega t} ~ \left( e^{-ik_{i_x}x} e^{-ik_{i_z}z} + \rho_{TE} ~ e^{-ik_{r_x}x} e^{-ik_{r_z}z} \right) ~ \hat{y}
\end{align} $$Pero $$ \begin{matrix}
    k_{r_x} = k_{i_x} = k_i ~ \sin(\theta_i) &&&
    k_{r_z} = -k_{i_z} = -k_i ~ \cos(\theta_i)
\end{matrix} $$
Luego $$ \vec{E}_1 = E_0 ~ e^{i(\omega t - k_i \sin(\theta_i) ~ x)} \left( e^{-ik_{i_x}x} e^{-ik_{i_z}z} + \rho_{TE} ~ e^{-ik_{r_x}x} e^{-ik_{r_z}z} \right) $$
Entonces puede verse que el campo eléctrico en el medio de incidencia se comporta como una onda viajera que se propaga en la dirección $x$ paralela a la interfase y como una onda semi-estacionaria en la dirección $z$ normal a la interfase (que se convierte en una onda estacionaria pura para $|\rho_{TE}| = 1$)

