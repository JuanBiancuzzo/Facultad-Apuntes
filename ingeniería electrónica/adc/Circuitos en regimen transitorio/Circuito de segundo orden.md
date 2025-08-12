---
dia: 2023-09-23
tags:
  - carrera/ingeniería-electrónica/adc/Circuitos-en-regimen-transitorio
  - carrera/ingeniería-en-informática/adc/Circuitos-en-regimen-transitorio
  - nota/facultad
aliases:
  - Sobreamortiguado#Sobreamortiguado
  - Críticamente amortiguado#Críticamente amortiguado
  - Subamortiguado#Subamortiguado
vinculoFacultad:
  - tema: Circuitos en regimen transitorio
    capitulo: 2
    materia: Análisis de circuitos
    carrera: Ingeniería electrónica
---
# Definición
---
Un [[Circuito eléctrico|circuito]] de segundo orden se caracteriza por una [[Ecuación diferencial ordinaria|ecuación diferencial]] de segundo orden (lineal y con coeficientes constantes)

## Resolución de ejercicios
---
Los pasos para resolver ejercicios de segundo orden son
* Determinar la ecuación diferencial del circuito de segundo orden
* Encontrar las condiciones iniciales de las [[Tensión|tensiones]] y [[Corriente eléctrica|corrientes]], así como también de sus derivadas
* Proponer la solución homogénea y particular de manera genérica (con constantes indeterminadas)
* Encontrar las constantes de las soluciones utilizando las condiciones iniciales

## Posibles soluciones
---
Debemos proponer una posible soluciones para nuestras soluciones, por lo que imaginemos que tenemos la siguiente ecuación diferencial $$ y'' + 2 \alpha ~ y' + \omega_0^2 ~ y = f(t) $$
### Homogénea
---
Para la homogénea consideraremos que $f(t) = 0$, y plantearemos el [[Polinomio caracteristico del operador L|polinomio característico]] y consiguiendo sus raíces nos queda $$ \begin{align} 
	s_1 = - \alpha + \sqrt{\alpha^2 - \omega_0^2} && 
	s_2 = - \alpha - \sqrt{\alpha^2 - \omega_0^2}
\end{align} $$
Donde podemos separarlos en 3 casos
#### Sobreamortiguado
---
Cuando $\alpha > \omega_0$, o $s_1, s_2 \in \mathbb{R}$ y que $s_1 \ne s_2$, entonces propongo $$ y_h(t) = A_1 \exp \left( s_1 \cdot t \right) + A_2 \exp \left( s_2 \cdot t \right) $$
#### Críticamente amortiguado
---
Cuando $\alpha = \omega_0$, o $s_1, s_2 \in \mathbb{R}$ y que $s_1 = s_2$, entonces propongo $$ y_h(t) = (A_2 + A_1 \cdot t) \exp \left( s \cdot t \right) = (A_2 + A_1 \cdot t) \exp \left( - \alpha \cdot t \right) $$
#### Subamortiguado
---
Cuando $\alpha < \omega_0$, o $s_1, s_2 \in \mathbb{C}$, entonces propongo $$ y_h(t) = \left[ A_1 \sin \left( | \Im (s) | \cdot t \right) + A_2 \cos \left( |\Im(s)| \cdot t \right) \right] \exp \left( \Re (s) \cdot t \right) $$
También podemos expresarlo como $$ y_h(t) = \left[ A_1 \sin \left( \omega_d \cdot t \right) + A_2 \cos \left( \omega_d \cdot t \right) \right] \exp \left( - \alpha \cdot t \right) $$ donde $\omega_d = \sqrt{\omega_0^2 - \alpha^2}$

### Particular
---
Para la solución particular, nos concentraremos en $f(t)$ y tenemos 3 tipos de posibles tipos

#### Constante
---
Si $f(t) = K_0$ entonces propongo $$ y_p(t) = K $$
#### Trigonométrica
---
Si $f(t) = A_1 \sin \left( \omega \cdot t - \theta_1 \right) + A_2 \cos \left( \omega \cdot t - \theta_2 \right)$ entonces propongo $$ y_p(t) = A_3 \sin \left( \omega \cdot t - \theta_3 \right) + A_4 \cos \left( \omega \cdot t - \theta_4 \right) $$
#### Exponencial
---
Si $f(t) = A \exp \left( B \cdot t \right)$ entonces propongo $$ y_p(t) = C \exp \left( B \cdot t \right) $$