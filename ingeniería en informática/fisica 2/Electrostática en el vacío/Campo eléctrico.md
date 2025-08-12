---
dia: 2024-09-01
tags:
  - carrera/ingeniería-electrónica/electro/Campos-eléctricos-y-magnéticos
  - carrera/ingeniería-electrónica/fisica-2/Electrostática-en-conductores-y-dieléctricos
  - carrera/ingeniería-electrónica/fisica-2/Electrostática-en-el-vacío
  - carrera/ingeniería-en-informática/fisica-2/Electrostática-en-conductores-y-dieléctricos
  - carrera/ingeniería-en-informática/fisica-2/Electrostática-en-el-vacío
  - nota/facultad
aliases:
  - Densidad lineal de carga#^densidad-lineal
  - Densidad superficial de carga#^densidad-superficial
  - Densidad volumétrica de carga#^densidad-volumetrica
  - Campo electrostático
vinculoFacultad:
  - tema: Campos eléctricos y magnéticos
    capitulo: 1
    materia: Electromagnetismo aplicado
    carrera: Ingeniería electrónica
  - tema: Electrostática en conductores y dieléctricos
    capitulo: 3
    materia: Física 2 A
    carrera: Ingeniería en informática
  - tema: Electrostática en el vacío
    capitulo: 2
    materia: Física 2 A
    carrera: Ingeniería en informática
---
# Definición
---
El campo eléctrico es una magnitud vectorial que en cada punto $p$ apunta en la dirección de la [[Ley de Coulomb|fuerza eléctrica]] si pusiéramos en el punto $p$ una [[Carga eléctrica|carga]] $q_0 = 1~C$ $$ \vec{E} = \frac{\vec{F_0}}{q_0} \implies \left[ \vec{E} \right] = \frac{N}{C} $$
## Carga puntual
---
Usando la [[Ley de Coulomb|ley de Coulomb]], podemos encontrar que el campo eléctrico de una carga puntual $q_0$ en $\vec{r_0}$ es $$ \vec{E}(\vec{r}) = \frac{q_0}{4\pi \epsilon_0} ~ \frac{\vec{r} - \vec{r}_0}{\lVert \vec{r} - \vec{r}_0 \rVert^3} $$
## Conjunto de cargas
---
Debido al [[Principio de superposición|principio de superposición]], podemos sumar los campos eléctricos de cada carga puntual y llegar a la siguiente definición $$ \vec{E}(\vec{r}) = \frac{1}{4\pi \epsilon_0} ~ \sum_{i} q_i ~ \frac{\vec{r} - \vec{r}_i}{\lVert \vec{r} - \vec{r}_i \rVert^3} $$

## Distribución continua
---
Podemos pensar a este campo eléctrico como una suma de [[Carga eléctrica|cargas]] infinitesimales. Es decir, una integral $$ \vec{E}(\vec{r}) = \frac{1}{4\pi\epsilon_0} \int_{OC} \frac{\vec{r} - \vec{r}'}{\lVert \vec{r} - \vec{r}' \rVert^3} ~ dq $$

Si está distribuida, la carga, en una [[Curva|línea]], entonces podemos definir la densidad lineal de carga $\lambda$ o $\rho_l$ y entonces $dq = \lambda ~ dl$ ^densidad-lineal

Si está distribuida, la carga, en una [[Superficie|superficie]], entonces podemos definir la densidad superficial de carga $\sigma$ o $\rho_s$ y entonces $dq = \sigma ~ ds$ ^densidad-superficial

Si está distribuida, la carga, en una volumen, entonces podemos definir la densidad volumétrica de carga $\rho$ o $\rho_v$ y entonces $dq = \rho ~ dv$ ^densidad-volumetrica

## Campo modificado por un dieléctrico
---
Siendo $\vec{E}_0$ el campo eléctrico sin [[Dieléctrico|dieléctrico]] y $\vec{E}$ el campo eléctrico con dieléctrico, entonces $$ \vec{E} = \frac{1}{\epsilon_r} \vec{E}_0 $$
Vemos entonces como afecta a la [[Capacitancia|capacidad]] y el [[Tensión|potencial]] de un [[Capacitor|capacitor]] $$ \Delta V = \frac{1}{\epsilon_r} \Delta V_0 \iff C = \epsilon_r ~ C_0 $$

