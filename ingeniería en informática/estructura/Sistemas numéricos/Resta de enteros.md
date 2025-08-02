---
dia: 2023-04-06
tags:
  - carrera/ingeniería-electrónica/estructura/Sistemas-numéricos
  - carrera/ingeniería-en-informática/estructura/Sistemas-numéricos
  - nota/facultad
---
# Definición
---
Usando una [[Representación de enteros complemento a la base|representación de enteros]] con [[Complemento a la base]], podemos transformar la resta como:
$$\begin{matrix} 
	A - B = C \\
	A - B + r^d = C + r^d \\
	A + (r^d - B) = A + C_B = C + r^d 
\end{matrix} $$ $$ 	A + C_B - r^d = C $$

Donde $d$ es la cantidad de digitos del número más grande, y $r$ es la base.

Esto nos permite transformar una resta a una [[Suma de enteros|suma]], donde para el último paso debemos sacar el 1, más grande.

# Ejemplo
---
$$ \begin{matrix} 
	~~~7 ~ 9 ~ 6_{10} \\
	-~5~6~8_{10} \\\hline
\end{matrix} $$
Sacamos el complemento de $568$, este es $432$. Por lo tanto $796 + 432 = 1228$ y por último paso tenemos que restarle $r^d$, en este caso $r = 10$ y $d = 3$, es decir que tenemos que restarle $1000$, que notemos siempre$^1$ va a ser el digito más grande. Por lo que podemos descartar el [[Carry flag|carry]]. Como resultado de nuestra resta, nos queda $228_{10}$

$^1$ No siempre es el caso, ya que esto no ocurre en el siguiente ejemplo.

$$  \begin{matrix} 
	~~~5 ~ 6 ~ 8_{10} \\
	-~7~9~6_{10} \\\hline
\end{matrix} $$
Sacamos el complemento de $796$, este nos da $204$. Por lo tanto $568 + 204 = 772$, que no tiene [[Carry flag|carry]]. A este número, como no se activo la flag de carry, podemos entender que es un número negativo, ya que notemos que el complemento de este es $228$, por lo tanto la respuesta para la computadora es la misma, simplemente que para interpretarlo notamos que es $-228_10$.
