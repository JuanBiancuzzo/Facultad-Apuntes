---
dia: 2024-11-04
etapa: terminado
referencias:
  - "412"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Supongamos que queremos sumar los $100$ primeros [[Números Naturales|números naturales]], o sea $$ 1 + 2 + 3 + \cdots + 98 + 99 + 100 $$
Gauss propone la forma de visualizarlo de la siguiente forma $$ \begin{matrix} 
    S & = & 1 & + & 2 & + & 3 & + & \cdots & + & 98 & + & 99 & + & 100 \\
    S & = & 100 & + & 99 & + & 98 & + & \cdots & + & 3 & + & 2 & + & 1 \\\hline
    2S & = & 101 & + & 101 & + & 101 & + & \cdots & + & 101 & + & 101 & + & 101 & = 100 \cdot 101
\end{matrix} $$
Luego $S = (100 \cdot 101) / 2$

Este procedimiento es claramente generalizable a cualquier número natural $n$, y se obtiene $$ \forall n \in \mathbb{N}: ~~~~ 1 + 2 + \cdots + (n - 1) + n = \frac{n (n + 1)}{2} $$
Notar que este número siempre es un número natural ya que $n (n + 1)$ siempre es un número par

> [!demostracion]- Demostración
> Podemos demostrarla usando el [[Principio de inducción|principio de inducción]], y lo que vamos a demostrar es $$ \sum_{i = 1}^n i = \frac{n(n + 1)}{2}, ~~ \forall n \in \mathbb{N} $$
> 
> Aquí la afirmación $p(n)$ para cada número natural $n$ es $$ p(n): ~~ \sum_{i = 1}^n i = \frac{n(n + 1)}{2} $$
> 
> #### Caso base
> ---
> Con $n = 1$ vemos que $$ \sum_{i = 1}^1 i = 1 = \frac{1 (1 + 1)}{2} $$ como esto es verdad, se cumple el caso base
> 
> #### Paso inductivo
> ---
> Dado $h \in \mathbb{N}$, suponiendo la [[Principio de inducción#^hipotesis-inductiva|hipótesis inductiva (HI)]] "$p(h)$ Verdadera", es decir $$ \sum_{i = 1}^h i = \frac{h (h + 1)}{2} $$
> 
> Entonces queremos probar que $p(h + 1)$ es Verdadera también, es decir, queremos probar que $$ \sum_{i = 1}^{h + 1} i = \frac{(h + 1)((h + 1) + 1)}{2} = \frac{(h + 1)(h + 2)}{2} $$
>
> Pero $\displaystyle \sum_{i = 1}^{h + 1} i = \left( \sum_{i = 1}^{h} i \right) + (h + 1)$. Y por HI, $\displaystyle \sum_{i = 1}^h i = \frac{h (h + 1)}{2}$, luego $$ \begin{align} 
>     \sum_{i = 1}^{h + 1} i &= \left( \sum_{i = 1}^{h} i \right) + (h + 1) \underset{\text{HI}}{=} \frac{h (h + 1)}{2} + (h + 1) \\
>     &= \frac{h(h + 1) + 2(h + 1)}{2} = \frac{(h + 1)(h + 2)}{2}
> \end{align} $$ que es lo que se quería probar
> 
> Se concluye, por principio de inducción, que $p(n)$ es Verdadero, $\forall n \in \mathbb{N}$


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```