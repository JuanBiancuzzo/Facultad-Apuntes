---
dia: 2024-09-12
tags:
  - carrera/ingeniería-electrónica/electro/Campo-electromagnético
  - nota/facultad
aliases:
  - Vector de Poyting
  - Intensidad de la radiación de una onda electromagnética#^intensidad-radiacion
  - Potencia perdida de una onda electromagnética#En medios materiales
vinculoFacultad:
  - "[[ingeniería electrónica/electro/Campo electromagnético/Resumen.md]]"
---
# Definición
---
El vector de Poynting de una [[Onda plana electromagnética|onda plana en el vacío]] es $$ \begin{align} 
    \vec{N}(\vec{r},~t) &= \vec{E}(\vec{r},~t) \times \vec{H}(\vec{r},~t) \\
     &= \vec{E}(\vec{r},~t) \times \left( \pm \frac{\hat{z} \times \vec{E}(\vec{r},~t)}{\eta_0} \right) \\
     &= \pm \frac{1}{\eta_0} E^2(\vec{r},~t) ~ \hat{z}
\end{align} \implies \vec{N}(\vec{r},~t) = \pm \frac{1}{\eta_0} E^2(\vec{r},~t) ~ \hat{z} $$ donde $\eta_0$ es la [[Impedancia intrínseca|impedancia intrínseca del vacío]] y donde el signo $(+)$ corresponde a una [[Ecuación de onda#^onda-progresiva|onda progresiva]] y el signo $(-)$ para la [[Ecuación de onda#^onda-regresiva|onda regresiva]]

Este resultado es válido para cualquiera sea la forma de onda de la onda plana

Considerando una onda plana, [[Polarización de una onda electromagnética#^polarizacion-lineal|linealmente polarizada]] progresiva $$ \begin{matrix}
    \vec{E}(\vec{r},~t) = \tilde{E}_0 ~ e^{i(\omega t - k z)} ~ \hat{x}, &&& 
    \vec{H}(\vec{r},~t) = \frac{\tilde{E}_0}{Z_{00}} ~ e^{i(\omega t - k z)} ~ \hat{y}    
\end{matrix} $$
Para calcular el vector de Poynting, como se trata de una operación no lineal, hay que expresar los campos en su forma verdadera $$ \begin{matrix}
    \vec{E}(\vec{r},~t) = E_0 ~ \cos( \omega t - k z + \psi_0 ) ~ \hat{x}, &&& 
    \vec{H}(\vec{r},~t) = \frac{E_0}{Z_{00}} ~ \cos( \omega t - k z + \psi_0 ) ~ \hat{y}
\end{matrix} $$ donde $E_0$ es el módulo y $\psi_0$ es el ángulo de fase del fasor $\tilde{E}_0$. Entonces $$ \vec{N}(\vec{r},~t) = \frac{E_0^2}{\eta_0} ~ \cos^2(\omega t - k z + \psi_0) ~ \hat{z} $$
## Valor medio
---
La ecuación hallada da el valor instantáneo del vector de Poynting. En la mayoría de los casos la magnitud significativa es su valor medio o promedio temporal, definido como $$ \langle \vec{N} \rangle = \frac{1}{T} \int_0^{T} \vec{N}(\vec{r},~t) ~ dt $$ para $\vec{N}(\vec{r},~t)$ periódica de [[Función periódica#^periodo|periodo]] $T$. Tenemos así $$ \begin{align} 
    \langle \vec{N} \rangle &= \frac{1}{T} \int_0^T \frac{E_0^2}{\eta_0} ~ \cos^2(\omega t - k z + \psi_0) ~ dt ~ \hat{z} \\
     &= \frac{E_0^2}{2\pi \eta_0} \int_{-kz + \psi_0}^{2\pi - kz + \psi_0} \cos^2(\omega t - kz + \psi_0) ~ d(\omega t - kz + \psi_0) ~ \hat{z} \\
     &= \frac{E_0^2}{2\pi \eta_0} \int_{-kz + \psi_0}^{2\pi - kz + \psi_0} \cos^2(u) ~ du ~ \hat{z} \\
     &= \frac{E_0^2}{2\pi \eta_0} \int_{-kz + \psi_0}^{2\pi - kz + \psi_0} \frac{1 + \cos(2u)}{2} ~ du ~ \hat{z} \\
    \langle \vec{N} \rangle &= \frac{E_0^2}{2\eta_0} ~ \hat{z}
\end{align} $$ donde usamos la relación $\omega T = 2\pi$

El promedio temporal del vector de Poynting de una onda representa la [[Potencia media|potencia media]] que la onda transporta por unidad de área transversal a la propagación, y se conoce como intensidad de la radiación ^intensidad-radiacion

### En medios materiales
---
El valor medio del vector de Poynting es $$ \begin{align} 
    \langle \vec{N} \rangle &= \frac{1}{2} ~ \mathcal{Re} \Set{ \tilde{E} \times \tilde{H}^* } \\
     &= \pm \frac{1}{2} ~ \mathcal{Re} \Set{ \tilde{E} \times \frac{\hat{z} \times \tilde{E}^*}{\eta^*} } \\
     &= \pm \frac{\mathcal{Re}\set{\eta} ~ \left| \tilde{E} \right|^2 }{2|\eta|^2} ~ \hat{z} \\
    \langle \vec{N} \rangle &= \pm \frac{\mathcal{Re}\set{\eta} ~ \left| \tilde{E}_{0\pm}  e^{\mp 2 \alpha z} \right|^2 }{2|\eta|^2} ~ \hat{z}
\end{align} $$ donde el signo superior corresponde a la onda progresiva y el inferior a la regresiva

Como el vector de Poynting medio decae con la propagación por la potencia perdida, podemos relacionar estas dos cantidades

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{3d}
\usepackage{ifthen}

\begin{document} 
\definecolor{adelante}{RGB}{223, 223, 223}
\definecolor{arriba}{RGB}{170, 170, 170}
\definecolor{costado}{RGB}{218, 218, 218}
\definecolor{borde}{RGB}{189, 189, 189}

\begin{tikzpicture}[scale=1.5, transform shape, thick]
    \tikzmath { \espesor = 0.65; \ancho = 3; \alto = 3; \rotacion = 0.25; }
    
    \coordinate (centro_delante) at ({\espesor/2}, 0, 0);
    \coordinate (centro_atras) at ({-\espesor/2}, 0, 0);
    
    \draw[<-, red, ultra thick] ($ (centro_atras) + (-0.44, 0, 0) $) 
        -- ++(-2, 0, 0) node[above=2pt] {$\vec{N}(z)$};

    \filldraw[fill=adelante, draw=borde] ({\espesor/2}, {-\alto/2}, {\ancho/2}) 
        -- ++(0, 0, -\ancho)
        -- ++(0, \alto, 0)
        -- ++(0, 0, \ancho)
        -- cycle;
    \filldraw[fill=costado, draw=borde] ({\espesor/2}, {-\alto/2}, {\ancho/2}) 
        -- ++(0, \alto, 0)
        -- ++(-\espesor, 0, -\rotacion)
        -- ++(0, -\alto)
        -- cycle;
    \filldraw[fill=arriba, draw=borde] ({\espesor/2}, {\alto/2}, {\ancho/2}) 
        -- ++(0, 0, -\ancho)
        -- ++(-\espesor, 0, -\rotacion)
        -- ++(0, 0, \ancho)
        -- cycle;
    
    \draw[->, red, ultra thick] (centro_delante) 
        -- ++(2, 0, 0) node[above=2pt] {$\vec{N}(z + dz)$};
        
    \draw ({\espesor/2}, {-\alto/2 - 0.1}, {\ancho/2}) -- ++(0, -0.5, 0)
        node[midway] (temp_der) {};
    \draw ({-\espesor/2}, {-\alto/2 - 0.1}, {\ancho/2 - \rotacion}) 
        -- ++(0, -0.5, 0) node[midway] (temp_izq) {};
    \draw[<->] (temp_izq.center) -- (temp_der.center)
        node[midway, below=2pt, scale=0.7] {$dz$};

    \begin{scope}[
        plane origin={({\espesor/2}, {-\alto/2}, {\ancho/2})},
        plane x={($ ({\espesor/2}, {-\alto/2}, {\ancho/2}) + (0, 0, -1)$)},
        plane y={($ ({\espesor/2}, {-\alto/2}, {\ancho/2}) + (0, 1, 0)$)},
        canvas is plane
    ]
        \path[white] (0, 0) rectangle ({\ancho/2}, {\alto/2})
            node[midway, scale=3] {$S$};
    \end{scope}
    
\end{tikzpicture}
\end{document}
```

Para ello planteamos el balance de la potencia electromagnética que entra a un paralelepípedo de sección $S$ transversal a la propagación y espesor $dz$, parte de ella se pierde (por cualquier mecanismo) dentro del paralelepípedo y parte sale por la otra cara $$ \langle N(z) \rangle ~ S = \langle P(z) \rangle + \langle N(z + dz) \rangle ~ S $$ donde $\langle P \rangle$ es la potencia perdida en el material por cualquier mecanismo y $$ \frac{d}{dz} \langle \vec{N} \rangle \Bigg|_{z} = -\frac{\langle P(z) \rangle}{S} \implies  \frac{d}{dz} \langle \vec{N} \rangle \Bigg|_{z} = -\frac{d}{dV} \langle P(z) \rangle $$
Pero como, en general $$ \langle \vec{N}(z) \rangle = \pm \langle \vec{N}_{0\pm} \rangle ~ e^{\mp 2 \alpha z} \implies \frac{d}{dz} \langle \vec{N} \rangle \Bigg|_{z} = -2\alpha \langle \vec{N}(z) \rangle =  -\frac{d}{dV} \langle P(z) \rangle $$
Finalmente $$ \frac{d}{dz} \langle \vec{N} \rangle \Bigg|_{z} = -\frac{d}{dV} \langle P(z) \rangle \implies \frac{d}{dV} \langle P(z) \rangle = 2\alpha \langle \vec{N} \rangle $$
Se ve que esta expresión es válida independientemente del sentido de la propagación