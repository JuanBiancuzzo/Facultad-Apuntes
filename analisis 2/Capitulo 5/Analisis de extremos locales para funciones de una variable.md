---
dia: 2023-01-22
materia: analisis 2
capitulo: 5
---
### Definición
---
Veremos como analizar los [[Maximos y minimos locales]] para funciones de una variable

![[Pasted image 20211104153314.png]]

Comencemos observando el grafico, donde en rojo se representa $y =f(x)$ en un cierto dominio $D$

Vemos que:

 * $f(x_1)$ es maximo local con $f'(x_1) = 0$, recta tangente horizontal en $A_1$
 * $f(x_2)$ es minimo local, pero $f$ no es derivable en $x_2$
 * $f(x_3)$ no es extremo local, pero $f'(x_3) = 0$. Recta tangente horizontal en $A_3$

Es decir $f'(x_0) = 0$ no asegura que $f(x_0)$ sea extremo local. Tambien que un extremo local puede ser un punto que no sea derivable, como el caso de $x_2$

Entonces para analizar seguimos los siguientes pasos
 1. Se determinan los punto criticos, estos son los $x_0$ tales que 
	 * $f$ no es derivable en $x_0$
	 * $f$ es derivable en $x_0$ y $f'(x_0) = 0$. En este caso $x_0$ se denomina punto estacionario
 2. Siendo $x_0$ un punto critico, el analisis es como sigue
	 * Debe aplicarse la definicion de [[Maximos y minimos locales]]
	 * En esta situacion tenemos alternativas
		 1. Se aplica la definicion de extremo local
		 2. Se analisza en un $E(x_0)$ el signo de la derivada a ambos lados de dicho punto ![[Pasted image 20211104154320.png]]
		 3. Si la funcion admite [[Derivadas parciales de ordenes superiores]], suponga que con $k > 1$ la derivada la derivada de menor orden que no se anula es $f^{(k)}(x_0) \ne 0$:
			  * Si $k$ es impar, $f(x_0)$ no es extremo local
			  * Si $k$ es par: cuando $f^{(k)}(x_0) > 0$ es minimo, si $f^{(k)}(x_0) < 0$ es maximo