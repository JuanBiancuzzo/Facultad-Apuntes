---
dia: 2024-07-08
etapa: ampliar
referencias:
  - "23"
  - "24"
  - "154"
aliases:
  - Animación procedural con inverse kinematics
  - Animación procedural con IK
tags:
  - nota/investigacion
  - animation
orden: 159
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El principal motivo por el cual se usa animación procedural es la libertad de crear animaciones que sean demandadas por la situación actual, pero perdemos características de la animación tradicional como
* [[Keyframe#Curvas de interpolación|Curvas de interpolación entre keyframes]]

## Mover un personaje
---
Vamos a usar [[Inverse kinematics|IK]] para mover puntos que podrían el [[Skeleton for animation (Esquelo para animar)|esqueleto]] de un personaje, y el [[Inverse kinematics#Algoritmos|algoritmo de IK]] dado un punto final, nos permite determinar como debería colocarse el esqueleto para llegar a ese punto

En general se usa [[Ray casting|ray casting]] como una herramienta para entender el ambiente alrededor del personaje. Puede usarse para ver la [[Distancia|distancia]] al piso, o la distancia a una pared. Se usa esa información para generar puntos a los cuales se le puede pasar al algoritmo de IK para crear nuevas posiciones y orientaciones del esqueleto

Lo difícil del movimiento procedural, es encontrar cuales son los puntos finales en los cuales el personaje tiene que moverse, ya que el resto es dar el resultado a un algoritmo para encontrar las posiciones y orientaciones del esqueleto dado esa posición final que debería estar una parte del cuerpo del personaje

Por último se puede interpolar linealmente o como veremos a continuación, generar un movimiento más realista dado esos puntos finales

## Mover un objeto o personaje sin esqueleto
---
El proceso de mover un objeto, es crear puntos finales en donde debería estar, por lo que podemos modelar limitaciones en el objeto/personaje que nos permitan limitar los posibles posiciones finales

En general se usan dos tipos de limitaciones o constrains
* [[Position constrains|Position constrains]]
* [[Orientation constrains|Angle constrains]]

Lo difícil es encontrar que puntos tomar, ya que el movimiento suele dejar ambigua que posición debería tomarse para mantener las limitaciones. En general se usa la posición que minimice la posición final e inicial, porque visualmente es la que produce un movimiento más natural

Algo a considerar cuando se tiene un objeto o personaje sin un esqueleto, es que se puede construir el personaje/objeto de tal forma que se pueda usar los algoritmos de IK, por lo que también es una herramienta para determinar el movimiento de dicho objeto/personaje

## Mejorar la transición entre puntos
---
En el caso especifico de las curvas de interpolación, podemos crear una alternativa, donde podemos crear una [[Función|función]] $f: ~ \mathbb{R}^n \to \mathbb{R}^n$ , donde $x \in \mathbb{R}^n$ es el input dinámico dado por la situación, y $f(x)$ sigue el input dinámico pero agregando una característica, similar a las que podía dar una curva de interpolación

El extremo es tener la [[Función identidad|función identidad]] por lo que sigue perfectamente al input, pero nos permite ver que si partimos de acá, sabemos que tenemos que mantener que $$ \lim_{t \to \infty} f(x) - x = 0 $$ es decir, que siempre tiene que seguir a $x$

Podemos crear un [[Sistema dinámico|sistema dinámico]] de segundo orden, para reflejar un movimiento real, ya que tenemos aceleración y velocidad, donde por simplicidad llamaremos $y$ a $f(x)$ $$ y + k_1 \dot{y} + k_2 \ddot{y} = x + k_3 \dot{x} $$


Variando $k_1$,  $k_2$ y $k_3$, podemos crear distintas dinámicas, como
* Arrastrar un [[Cuerpo rígido|cuerpo rígido]] con masa $m$, con un [[Resorte|resorte]] de parámetro $k$ $$ y + \frac{b}{k} \dot{y} + \frac{m}{k} \ddot{y} = x + \frac{b}{k} \dot{x} $$
Dándole un mejor significado a estas variables $$ \begin{align} 
    f &= \frac{1}{2\pi\sqrt{k_2}} &&&
    \zeta &= \frac{k_1}{2\sqrt{k_2}} &&&
    r &= \frac{2k_3}{k_1} \\\\
    k_1 &= \frac{\zeta}{\pi f} &&&
    k_2 &= \frac{1}{(2\pi f)^2} &&&
    k_3 &= \frac{r\zeta}{2\pi f} 
\end{align} $$
Donde $f$ es la [[Función periódica#Frecuencia|frecuencia]] del [[Sistema|sistema]] en $Hz$, donde representa la velocidad con la que el sistema va a responder

%%  Crear graficos usando la teoria de señales, para crejar la respuesta al escalon %%

Donde $\zeta$ representa como se atenúa el sistema
* Si $\zeta = 0$ no se atenúa, y por lo tanto el sistema queda [[Resonancia|resonando]]
* Si $\zeta \in (0,~1)$, el sistema queda [[Circuito de segundo orden#Sobreamortiguado|sobreamortiguado]]
* Si $\zeta = 1$, el sistema queda [[Circuito de segundo orden#Críticamente amortiguado|críticamente amortiguado]]
* Si $\zeta > 1$ el sistema queda [[Circuito de segundo orden#Subamortiguado|subamortiguado]]

Donde $r$ representa la respuesta inicial del sistema
* Si $r = 0$, el sistema reacciona lento al [[Delta de Dirac|impulso]] 
* Si $r \in (0,~1]$, el sistema responde inmediatamente al impulso
* Si $r > 1$, el sistema se sobrepasa y vuelve al valor
* Si $r < 0$, el sistema anticipa el movimiento, que permite seguir el [[The Illusion of Life de Frank Thomas, Ollie Johnston#Anticipation|principio de anticipación]]

Para resolverla esta ecuación diferencial, podemos usar [[Integrador|integradores]] que son métodos iterativos para la aproximación de soluciones de [[Ecuación diferencial ordinaria\|ecuaciones diferenciales ordinarias]], concretamente, del [[Problema de valor inicial|problema de valor inicial]] 



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```