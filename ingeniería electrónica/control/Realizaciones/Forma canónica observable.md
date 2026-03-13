---
dia: 2025-04-16
etapa: empezado
referencias: []
tags:
  - carrera/ingeniería-electrónica/control/Realizaciones
  - nota/facultad
vinculoFacultad:
  - tema: Realizaciones
    capitulo: "3"
    materia: Control automático
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Similarmente a la [[ingeniería electrónica/control/Realizaciones/Forma canónica controlable|forma canónica controlable]]. Partimos de una [[ingeniería electrónica/señales/Sistemas LTI/Transferencia del sistema|función de transferencia]] del tipo $$ G(s) = \frac{b_1 ~ s^{n - 1} + \cdots b_{n - 1} ~ s + b_n}{s^n + a_1 ~ s^{n - 1} + \cdots a_{n - 1} ~ s + a_n} + d $$
Armamos el [[ingeniería electrónica/control/Respuesta dinámica/Diagrama de bloques|diagrama de bloques]], donde la idea es plantear a cada [[ingeniería electrónica/control/Respuesta dinámica/Variable de estado|variable de estado]] $x_i$ como función de $x_1$, $x_{i + 1}$ y $u$, exceptuando a $x_n$ ya que no tiene siguiente. Luego, $y$ se plantea como función solo de $x_1$ y de $u$. El diagrama de bloques se plantea como 

![[ingeniería electrónica/control/Realizaciones/img/Forma canónica observable.png]]

Desde este punto se puede plantear $$ \begin{dcases}
    \dot{x}_1 = -a_1 ~ x_1 + x_2 + b_1 ~ u \\
    \dot{x}_2 = -a_2 ~ x_1 + x_3 + b_2 ~ u \\
    ~~~~~~ \vdots \\
    \dot{x}_n = -a_n ~ x_1 + b_n ~ u \\
    y = x_1  + d ~ u 
\end{dcases} $$ de esta forma, planteamos la ecuación de estados y de salida como $$ \begin{align}
    \dot{x}(t) &= \underbrace{\begin{bmatrix} 
        -a_1 & 1 & 0 & \cdots & 0 & 0 \\
        -a_2 & 0 & 1 & \cdots & 0 & 0 \\
        \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\
        -a_n & 0 & 0 & \cdots & 0 & 0
    \end{bmatrix}}_{\displaystyle A} x + \underbrace{\begin{bmatrix} 
        b_1 \\ b_2 \\ \vdots \\ b_n
    \end{bmatrix}}_{\displaystyle B} u \\
    y &= \underbrace{\begin{bmatrix} 
        1 & 0 & \cdots & 0
    \end{bmatrix}}_{\displaystyle C} ~ x + \underbrace{d}_{\displaystyle D} ~u
\end{align} $$
Las matrices quedan en función de los coeficientes de numerador y denominador de la transferencia. Con relación a la [[Forma canónica controlable|forma canónica controlable]], podemos que las matrices $A$ son iguales pero [[Matriz#Matriz transpuesta|transpuestas]], $D$ coincide, y $C$ y $D$ están intercambiados

