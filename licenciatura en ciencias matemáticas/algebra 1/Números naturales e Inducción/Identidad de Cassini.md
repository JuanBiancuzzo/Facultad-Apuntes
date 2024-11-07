---
dia: 2024-11-06
etapa: sin-empezar
referencias:
  - "412"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Una propiedad de la [[Sucesión de Fibonacci|sucesión de Fibonacci]], que permite de hecho mostrar por qué el [[Número de Oro|número de Oro]] $\Psi$ aparece naturalmente en este contexto, es la Identidad de Casini $$ F_{n + 1} ~ F_{n - 1} - F_n^2 = (-1)^n, ~~~~ \forall n \in \mathbb{N} $$

> [!quote]+ Demostración
> Lo probamos por [[Principio de inducción|inducción]] $$ p(n): ~~~ F_{n + 1} ~ F_{n - 1} - F_n^2 = (-1)^n $$
> 
>  * Caso base $p(1)$: $F_2 ~ F_0 - F_1^2 = 1 ~ 0 - 1 = (-1)^1$
>  * Paso inductivo: Dado $h \in \mathbb{N}$
>      * HI: $F_{h + 1} ~ F_{h - 1} - F_h^2 = (-1)^h$
>      * Qpq: $F_{h + 2} ~ F_h - F_{h + 1}^2 = (-1)^{h + 1}$
>  
> Pero por definición de la sucesión, sabemos que para $h \ge 1$, $F_{h + 2} = F_{h + 1} + F_h$ y $F_{h + 1} = F_h + F_{h - 1}$ (pues en este último caso, $h \ge 1$ implica $h - 1 \ge 0$, luego $F_{h - 1}$ está definida). Lego $$ \begin{align} 
>     F_{h + 2} ~ F_h - F_{h + 1}^2 &= (F_{h + 1} + F_h) F_h - (F_h + F_{h - 1}) F_{h + 1} \\
>     &= F_{h + 1} F_h + F_h^2 - F_h F_{h + 1} - F_{h - 1} F_{h + 1} \\
>     &= F_h^2 - F_{h - 1} ~ F_{h + 1} \\
>     &= -(F_{h - 1} - F_{h + 1} - F_h^2) \\
>     &\underset{HI}{=} - (-1)^h = (-1)^{h + 1}
> \end{align} $$ como se quería probar
> 
> Se concluye que $p(n)$ es Verdadero, $\forall n \in \mathbb{N}$

Vamos a comprobar si la [[Sucesión|sucesión]] $\left( \frac{F_{n + 1}}{F_n} \right)_{n \in \mathbb{N}}$ [[Sucesión convergente|converge]], para eso vamos a ver si es una [[Sucesión de Cauchy|sucesión de Cauchy]] 

Notemos que la identidad implica que $\displaystyle \frac{F_{n + 1}}{F_n} - \frac{F_n}{F_{n - 1}} = \frac{(-1)^n}{F_{n - 1} ~ F_n}$. Así, $$ \left| \frac{F_{n + 1}}{F_n} - \frac{F_n}{F_{n - 1}} \right| = \frac{1}{F_{n - 1} F_n} $$
Esto implica que para $m > n$, $$ \begin{align} 
    \left| \frac{F_{n + 1}}{F_n} - \frac{F_n}{F_{n - 1}} \right| &\le \sum_{i = n}^{m} \left| \frac{F_{i + 1}}{F_i} - \frac{F_i}{F_{i - 1}} \right| \le \sum_{i = n}^{m} \frac{1}{F_{i - 1} F_i} \\
    &\le \sum_{i = n}^{m} \frac{1}{(i - 1) i} = \sum_{i = n}^{m}\left( \frac{1}{i - 1} - \frac{1}{i} \right) = \frac{1}{n - 1} - \frac{1}{m} \\
    &= \frac{m - n + 1}{(n - 1)m} \underset{n \to \infty}{\to} 0
\end{align} $$por lo tanto $\left( \frac{F_{n + 1}}{F_n} \right)_{n \in \mathbb{N}}$ converge

Sea entonces $F = \lim_{n \to \infty} \frac{F_{n + 1}}{F_n}$. Se observa que $F \ge 1$ dado que $F_{n + 1} \ge F_n$. Entonces $$ \begin{align} 
    F &= \lim_{n \to \infty} \frac{F_{n + 1}}{F_n} \\
     &= \lim_{n \to \infty} \frac{F_n + F_{n - 1}}{F_n} \\
     &= \lim_{n \to \infty} \left( 1 + \frac{F_{n - 1}}{F_n} \right) \\
     &= 1 + \lim_{n \to \infty} \frac{F_{n - 1}}{F_n} \\
     &= 1 + \frac{1}{F}
\end{align} $$
Por lo tanto el [[Límite|límite]] $F$ satisface la ecuación $F = 1 + \frac{1}{F}$, o equivalentemente la ecuación $F^2 = F + 1$. Se concluye que $F = \Psi$, ya que es la raíz $\ge 1$ del [[Función polinomica|polinomio]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```