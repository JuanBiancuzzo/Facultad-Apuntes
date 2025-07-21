---
dia: 2024-11-07
etapa: ampliar
referencias:
  - "412"
tags:
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
  - carrera/ingeniería-en-informática/discreta/Ecuaciones-de-recurrencia
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
aliases:
  - Ecuación de recurrencia lineal de segundo orden homogénea
  - Sucesión de recurrencia de segundo orden homogénea
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Una sucesión de Lucas es una [[Sucesión|sucesión]] $(a_n)_{n \in \mathbb{N}_0}$ definida recursivamente por $$ a_0 = a, ~~ a_1 = b, ~~~~~ a_{n + 1} = c ~ a_{n + 1} + d ~ a_n, ~~ \forall n \in \mathbb{N}_0 $$ donde $a,~b,~c,~d \in \mathbb{C}$ son números dados

En lo que sigue desarrollamos un método que permite determinar el término general $a_n$ de la sucesión de Lucas

Consideramos la ecuación $X^2 -cX - d = 0$ ([[Ecuación característica|ecuación característica]]) asociada a la sucesión de Lucas. Supongamos que estamos en el caso en que $X^2 -cX -d$ tiene dos [[Raíz de una función|raíces]] distintas $r$ y $\overline{r}$. Observamos que estas dos raíces $r$ y $\overline{r}$ satisfacen las relaciones $$ r^2 = c ~ r + d ~~~ \text{y} ~~~ \overline{r}^2 = c ~ \overline{r} + d $$
## Afirmación 1
---
Las sucesiones $\left( r^n \right)_{n \in \mathbb{N}_0}$, $\left( \overline{r}^n \right)_{n \in \mathbb{N}_0}$, y más aún cualquier [[Combinación lineal|combinación lineal]] de ellas $$ \left( \gamma_n \right)_{n \in \mathbb{N}_0} = (\alpha ~ r^n + \beta ~ \overline{r}^n)_{n \in \mathbb{N}_0} $$ satisfacen la misma recurrencia $$ \gamma_{n + 1} = c ~ \gamma_{n + 1} + d ~ \gamma_n, ~~ \forall n \in \mathbb{N}_0 $$
Esto es cierto ya que $$ \begin{align}
    \gamma_{n + 2} &\underset{def}{=} \alpha ~ r^{n + 2} + \beta ~ \overline{r}^{n + 2} \\
     &= \alpha ~ r^2 ~ r^n + \beta ~ \overline{r}^2 ~ \overline{r}^n \\
     &= \alpha ~ ( c ~r + d ) ~ r^n + \beta ~ (c ~ \overline{r} + d) ~ \overline{r}^n \\
     &= c ~ (\alpha ~ r^{n + 1} + \beta ~ \overline{r}^{n + 1}) + d ~ (\alpha ~ r^n + \beta ~ \overline{r}^n) \\
     &= c ~ \gamma_{n + 1} + d ~ \gamma_n
\end{align} $$
## Afirmación 2
---
Existe una única sucesión $(\gamma_n)_{n \in \mathbb{N}_0} = (\alpha ~ r^n + \beta ~ \overline{r}^n)_{n \in \mathbb{N}_0}$ que satisface las condiciones iniciales $\gamma_0 = a$, $\gamma_1 = b$

Esto es cierto pues para ello hay que resolver el [[Sistema lineal|sistema lineal]] $$ \begin{cases} 
    \alpha & + & \beta & = & a \\
    \alpha ~ r & + & \beta ~ \overline{r} & = & b
\end{cases} $$ que tiene solución y es única pues $r \ne \overline{r}$ por hipótesis: se obtiene $$ \alpha = \frac{b - a ~ \overline{r}}{r - \overline{r}} ~~~~ \text{y} ~~~~ \beta = \frac{a ~ r - b}{r - \overline{r}} $$
## Conclusión
---
Se concluye que esta sucesión $(\gamma_n)_{n \in \mathbb{N}_0} = (\alpha ~ r^n + \beta ~ \overline{r}^n)_{n \in \mathbb{N}_0}$ coincide con la sucesión de Lucas original $(a_n)_{n \in \mathbb{N}_0}$, ya que satisface las mismas condiciones iniciales y la misma recurrencia. Por lo tanto el término general de la sucesión $(a_n)_{n \in \mathbb{N}_0}$ es $$ a_n = \alpha ~ r^n + \beta ~ \overline{r}^n, ~~~ \forall n \in \mathbb{N}_0 $$
## Distintos casos de raíces
---
Podemos obtener la solución general como suma de solución de la homogénea más una solución particular

1. Definimos la ecuación homogénea $x_{n+2} + ax_{n+1} +bx_n = 0$ y la ecuación característica $\lambda^2 + a\lambda +b= 0$. De aquí, obtenemos el espectro $\sigma = \{\lambda_1, \lambda_2\}$. Luego, la solución de la homogénea será de la forma
	1. Si $\lambda_1 \neq \lambda_2 \in \mathbb{R}$, entonces proponemos como solución $x_n = C_1\lambda_1^n + C_2\lambda_2^n$
	2. Si $\lambda_1 = \lambda_2 \in \mathbb{R}$, entonces proponemos como solución $x_n = C_1\lambda_1^n + C_2n\lambda_1^n$
	3. Si $\lambda_1 = \overline\lambda_2 \in \mathbb{C}$ con $\lambda_{1,2} = re^{\pm i\theta}$, entonces proponemos como solución a $$ x_n = C_1r^n\cos(n\theta) + C_2r^n\sin(n\theta) $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```