---
etapa: terminado
dia: 2026-07-22
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 231
---
# Enunciado
---
Demostrar las siguientes propiedades sobre la paridad las [[ingeniería electrónica/señales/Señales y sistemas/Señal#^continua|señales en el tiempo continuo]]

1. Si $x(t)$ es [[ingeniería electrónica/analisis 3/Transformada de Fourier/Función impar|impar]], entonces su [[ingeniería electrónica/señales/Señales y sistemas/Valor medio de una señal|valor medio]] es cero $$ \int_{-\infty}^{\infty} x(t) ~ dt = 0 $$ ^punto-1
2. Si $x(t)$ es [[ingeniería electrónica/analisis 3/Transformada de Fourier/Función par|par]], entonces $$ \int_{-\infty}^{\infty} x(t) ~ dt = 2 \int_{0}^{\infty} x(t) ~ dt = 2 \int_{-\infty}^{0} x(t) ~ dt $$ ^punto-2
3. Si $x_1(t)$ es par y $x_2(t)$ es impar, entonces $x_1(t) ~ x_2(t)$ es impar ^punto-3
4. Si $x_1(t)$ es par y $x_2(t)$ es par, entonces $x_1(t) ~ x_2(t)$ es par ^punto-4
5. Si $x_1(t)$ es impar y $x_2(t)$ es impar, entonces $x_1(t) ~ x_2(t)$ es par ^punto-5

# Resolución
---
[[colección/ejercicios/Ejercicio N° 231#^punto-1|1.]] Si $x(t)$ es impar podemos decir que $x(t) = -x(-t)$ y que existe una función $y(t)$ tal que $$ x(t) = \frac{y(t) - y(-t)}{2} $$

Usando estas propiedades, podemos hacer lo siguiente $$ \begin{align*}
    \int_{-\infty}^{\infty} x(t) ~ dt &= \int_{-\infty}^{\infty} \frac{y(t) - y(-t)}{2} ~ dt \\
    &= \frac{1}{2} \int_{-\infty}^{\infty} (y(t) - y(-t)) ~ dt \\
    &= \frac{1}{2} \left( \int_{-\infty}^{\infty} y(t) ~ dt - \int_{-\infty}^{\infty} y(-t) ~ dt \right)
\end{align*} $$

Notemos que $$ \begin{align*}
    \int_{-\infty}^{\infty} y(-t) ~ dt &\underset{\substack{z=-t\\dz=-dt}}{=} -\int_{\infty}^{-\infty} y(z) ~ dz\\
    &= - \left( - \int_{-\infty}^{\infty} y(z) ~ dz \right) \\
    &= \int_{-\infty}^{\infty} y(z) ~ dz
\end{align*} $$

Por lo tanto, reemplazando en la ecuación anterior $$ \begin{align*}
    \int_{-\infty}^{\infty} x(t) ~ dt &= \frac{1}{2} \left( \int_{-\infty}^{\infty} y(t) ~ dt - \int_{-\infty}^{\infty} y(-t) ~ dt \right) \\
    &= \frac{1}{2} \left( \int_{-\infty}^{\infty} y(t) ~ dt - \int_{-\infty}^{\infty} y(z) ~ dz \right) = 0
\end{align*} $$

[[colección/ejercicios/Ejercicio N° 231#^punto-2|2.]] Si $x(t)$ es par podemos decir que $x(t) = x(-t)$, y usando esta propiedad, podemos hacer lo siguiente

$$ \int_{-\infty}^{\infty} x(t) ~ dt = \int_{-\infty}^{0} x(t) ~ dt + \int_{0}^{\infty} x(t) ~ dt $$

Notemos que $$ \begin{align*}
    \int_{-\infty}^{0} x(t) ~ dt &\underset{\substack{z=-t\\dz=-dt}}{=} -\int_{\infty}^{0} x(-z) ~ dz\\
    &= - \left( - \int_{0}^{\infty} x(-z) ~ dz \right) \\
    &= \int_{0}^{\infty} x(z) ~ dz
\end{align*} $$

Por lo tanto, reemplazando en la ecuación anterior $$ \begin{align*}
    \int_{-\infty}^{\infty} x(t) ~ dt &= \int_{-\infty}^{0} x(t) ~ dt + \int_{0}^{\infty} x(t) ~ dt \\
    &=  \int_{0}^{\infty} x(t) ~ dt + \int_{0}^{\infty} x(t) ~ dt = 2 ~ \int_{0}^{\infty} x(t) ~ dt 
\end{align*} $$

[[colección/ejercicios/Ejercicio N° 231#^punto-3|3.]] Calculemos el producto $x_1(t) ~ x_2(t)$, donde vamos a considerar que existen las funciones $y_1(t)$ e $y_2(t)$ donde $$ x_1(t) = \frac{y_1(t) + y_1(t)}{2}, ~~~ x_2(t) = \frac{y_2(t) - y_2(t)}{2} $$ respectivamente, por lo tanto $$ \begin{align*}
    x_1(t) ~ x_2(t) &= \left( \frac{y_1(t) + y_1(-t)}{2} \right) \left( \frac{y_2(t) - y_2(-t)}{2} \right) \\
    &= \frac{1}{4}  \left( y_1(t) ~ y_2(t) - \underbrace{y_1(t) ~ y_2(-t)}_{y_1(-t) ~ y_2(-t)} + \underbrace{y_1(-t) ~ y_2(t)}_{y_1(t) ~ y_2(t)} - y_1(-t) ~ y_2(-t) \right) \\
    &= \frac{1}{4}  \left( 2 ~y_1(t) ~ y_2(t) - 2 ~ y_1(-t) ~ y_2(-t) \right) = \frac{y_1(t) ~ y_2(t) - y_1(-t) ~ y_2(-t)}{2} 
\end{align*} $$

De esta forma, podemos decir que existe una función $h(t) = y_1(t) ~ y_2(t)$ tal que $$ x_1(t) ~ x_2(t) =  \frac{y_1(t) ~ y_2(t) - y_1(-t) ~ y_2(-t)}{2} $$ 

Demostrando que el producto de $x_1(t)$ con $x_2(t)$, siendo par e impar, resulta ser impar

[[colección/ejercicios/Ejercicio N° 231#^punto-4|4.]] Calculemos el producto $x_1(t) ~ x_2(t)$, donde vamos a considerar que existen las funciones $y_1(t)$ e $y_2(t)$ donde $$ x_i(t) = \frac{y_i(t) + y_i(t)}{2}, ~~i = 1, 2 $$por lo tanto $$ \begin{align*}
    x_1(t) ~ x_2(t) &= \left( \frac{y_1(t) + y_1(-t)}{2} \right) \left( \frac{y_2(t) + y_2(-t)}{2} \right) \\
    &= \frac{1}{4}  \left( y_1(t) ~ y_2(t) + \underbrace{y_1(t) ~ y_2(-t)}_{y_1(-t) ~ y_2(-t)} + \underbrace{y_1(-t) ~ y_2(t)}_{y_1(t) ~ y_2(t)} + y_1(-t) ~ y_2(-t) \right) \\
    &= \frac{1}{4}  \left( 2 ~y_1(t) ~ y_2(t) + 2 ~ y_1(-t) ~ y_2(-t) \right) = \frac{y_1(t) ~ y_2(t) + y_1(-t) ~ y_2(-t)}{2} 
\end{align*} $$

De esta forma, podemos decir que existe una función $h(t) = y_1(t) ~ y_2(t)$ tal que $$ x_1(t) ~ x_2(t) =  \frac{y_1(t) ~ y_2(t) + y_1(-t) ~ y_2(-t)}{2} $$ 

Demostrando que el producto de $x_1(t)$ con $x_2(t)$, siendo ambas pares, resulta ser par

[[colección/ejercicios/Ejercicio N° 231#^punto-5|5.]] Calculemos el producto $x_1(t) ~ x_2(t)$, donde vamos a considerar que existen las funciones $y_1(t)$ e $y_2(t)$ donde $$ x_i(t) = \frac{y_i(t) - y_i(t)}{2}, ~~i = 1, 2 $$por lo tanto $$ \begin{align*}
    x_1(t) ~ x_2(t) &= \left( \frac{y_1(t) - y_1(-t)}{2} \right) \left( \frac{y_2(t) - y_2(-t)}{2} \right) \\
    &= \frac{1}{4}  \left( y_1(t) ~ y_2(t) - \underbrace{y_1(t) ~ y_2(-t)}_{-y_1(-t) ~ y_2(-t)} - \underbrace{y_1(-t) ~ y_2(t)}_{-y_1(t) ~ y_2(t)} + y_1(-t) ~ y_2(-t) \right) \\
    &= \frac{1}{4}  \left( 2 ~y_1(t) ~ y_2(t) + 2 ~ y_1(-t) ~ y_2(-t) \right) = \frac{y_1(t) ~ y_2(t) + y_1(-t) ~ y_2(-t)}{2} 
\end{align*} $$

De esta forma, podemos decir que existe una función $h(t) = y_1(t) ~ y_2(t)$ tal que $$ x_1(t) ~ x_2(t) =  \frac{y_1(t) ~ y_2(t) + y_1(-t) ~ y_2(-t)}{2} $$ 

Demostrando que el producto de $x_1(t)$ con $x_2(t)$, siendo ambas impares, resulta ser par