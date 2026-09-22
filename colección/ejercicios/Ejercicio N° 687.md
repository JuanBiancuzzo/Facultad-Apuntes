---
dia: 2026-09-08
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 687
etapa: terminado
---
# Enunciado
---
Indique las opciones correctas en relación a la descripción por [[ingeniería electrónica/robótica industrial/Sistema de referencias/Ángulo de Euler|ángulos de Euler]]
1. Describen las rotaciones de forma unívoca ^parte-1
2. Cuando $\theta = 0$, se produce una indeterminación en el cálculo de $\varphi$ y $\psi$ ^parte-2
3. La representación es única en cuanto a los ejes involucrados ^parte-3
4. Existen dos grupos de ángulos que representan la misma [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|rotación]] siempre que $|\theta| > 0$ ^parte-4

# Resolución
---
Aunque no es necesario, es útil pensar como que se usa $\hat{z} ~ \hat{y} ~ \hat{z}$ para la asignación de ángulos, pero recordemos que los ángulos de Euler tiene la estructura $\hat{x}_1 ~ \hat{x}_2 ~ \hat{x}_1$ 

Vemos que el [[colección/ejercicios/Ejercicio N° 687#^parte-1|punto 1]] y [[colección/ejercicios/Ejercicio N° 687#^parte-3|punto 3]], expresan lo mismo, y que es opuesto a lo que expresan [[colección/ejercicios/Ejercicio N° 687#^parte-2|punto 2]] y [[colección/ejercicios/Ejercicio N° 687#^parte-4|punto 4]]. Por lo que primero veremos si realmente es única la rotación que describen las rotaciones

Notemos que una rotación alrededor de $\hat{y}$ y $-\hat{y}$, podría ser equivalentes, utilizando el ángulo opuesto. Por lo que nos está mostrando que existe la posibilidad de expresar la misma rotación de $2$ formas distintas

Formalmente, si se tiene la rotación dada por $R = R(\varphi_1,~ \theta_1,~ \phi_1) = R(\hat{z},~ \varphi_1) R(\hat{y},~ \theta_1) R(\hat{z},~ \psi_1)$, se puede interpretar como las $3$ rotaciones por separado, por lo que podríamos expresar $R = R_0^3$ y por lo tanto $R(\hat{z}_0^1,~ \varphi_1) = R_0^1$, $R(\hat{y}_1^1,~ \theta_1) = R_1^2$ y $R(\hat{z}_2^1,~ \psi_1) = R_2^3$, donde expresamos $\hat{z}_0^1$ como la componente $\hat{z}$ de la [[ingeniería en informática/analisis 2/Nomenclatura/Sistema cartesiano|terna]] $0$ y es correspondiente a los valores $1$ de $\varphi_1$, $\theta_1$ y $\psi_1$ 

Por lo tanto queremos expresar una rotación, donde la terna $1$ resulte $\hat{y}_1^2 = -\hat{y}_1^1$, y para lograr esto se modifica la rotación $R_0^1$ de la siguiente forma $R_0^1 = R(\hat{z}_0^1,~ \varphi_1 \pm \pi)$, donde notemos que $\hat{x}_1^2 = -\hat{x}_1^1$. Ahora como rotación es sobre $\hat{y}_1^2$, sabemos que tenemos que generar la rotación opuesta, por lo que $R_1^2 = R(\hat{y}_1^2,~ -\theta_1)$. Finalmente, para la terna $2$ se tiene $\hat{y}_2^2 = -\hat{y}_2^1$, $\hat{z}_2^2 = \hat{z}_2^1$ (porque es lo que se logra con $\theta_2 = -\theta_1)$ por lo tanto queda que $\hat{x}_2^2 = -\hat{x}_2^1$, con lo que para conseguir la misma rotación $R$, se aplica la tercer rotación $R_2^3 = R(\hat{z}_2^2,~ \psi \pm \pi)$, resultando en $$ \begin{align} 
	R(\hat{z},~ \varphi_1) R(\hat{y},~ \theta_1) R(\hat{z},~ \psi_1) = R(\hat{z},~ \varphi_1 \pm \pi) R(\hat{y},~ -\theta_1) R(\hat{z},~ \psi_1 \pm \pi) &= R(\hat{z},~ \varphi_2) R(\hat{y},~ \theta_2) R(\hat{z},~ \psi_2)
\end{align} $$
Por lo tanto descartando el [[colección/ejercicios/Ejercicio N° 687#^parte-1|punto 1]] y [[colección/ejercicios/Ejercicio N° 687#^parte-3|punto 3]], y afirmando el [[colección/ejercicios/Ejercicio N° 687#^parte-4|punto 4]]. Ahora queda ver que pasa con el [[colección/ejercicios/Ejercicio N° 687#^parte-2|punto 2]], y vemos que en el caso que $\theta = 0$, la rotación dada por $\theta$ es la [[Matriz identidad|identidad]], por lo que la rotación esta dada por $$ R = R(\hat{z},~ \varphi) ~ R(\hat{z},~ \psi) $$ y como la rotación sobre un eje no modifica este eje, se podría expresar como $$ R = R(\hat{z},~ \alpha) $$ donde $\alpha = \varphi + \psi$, y por lo tanto existen infinitos valores para $\varphi$ y $\psi$ que satisfasen esa ecuación, por lo que también se puede afirmar el [[colección/ejercicios/Ejercicio N° 687#^parte-2|punto 2]]

# Resultado
---
Las respuestas correctas son [[colección/ejercicios/Ejercicio N° 687#^parte-2|punto 2]] y [[colección/ejercicios/Ejercicio N° 687#^parte-4|punto 4]]