---
dia: 2025-04-14
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dado un [[Vector aleatorio|vector aleatorio]] $X = [X_1,~ \cdots,~ X_n]^T$ definimos su [[Función|función]] característica $\Phi_X$ como $$ \Phi_X : \mathbb{R}^n \to \mathbb{C} : \Phi(\omega) = E\left[ \exp\left( j\omega^T X \right) \right] $$ donde $E[\cdot]$ es la [[Esperanza|esperanza]] y $\omega = [\omega_1,~ \cdots,~ \omega_n]^T$ es un vector $n$-dimensional, igual que $X$

### Propiedades
---
Esta función existe para cualquier vector aleatorio y es una [[Función biyectiva|función biyectiva]]

Es [[Conjunto acotado|acotada]] y alcanza su máximo en el origen $$ |\Phi_X(\omega)| \le \Phi_X(0) = 1,~~~ \forall \omega \in \mathbb{R}^n $$

Si $X = [X_1,~ \cdots,~ X_n]^T$ es un vector aleatorio y definimos un nuevo vector aleatorio a través de una transformación lineal $$ Y = AX + b $$ donde $A$ es una matriz fija de $m \times n$ y $b$ un vector fijo de $m \times 1$, entonces la función característica de $Y$ es $$ \Phi_Y(\omega) = \exp\left( j\omega^T b \right) ~ \Phi_X\left( A^T \omega \right) $$

Si $X = [X_1,~ \cdots,~ X_n]^T$ es un vector aleatorio con componentes [[Variables aleatorias independientes|independientes]], entonces su función característica es el producto de las funciones características de sus componentes $$ \Phi_X(\omega) = \prod_{i = 1}^{n} \Phi_{X_i}(\omega_i) $$ 
> [!demostracion]- Demostración
> Se puede demostrar en el siguiente desarrollo $$ \begin{align} 
>     \Phi_X(\omega) &= E\left[ \exp\left( j\omega^T X \right) \right] \\
>      &= E\left[ \exp\left( j \sum_{i = 1}^{n} \omega_i ~ X_i \right) \right] \\
>      &= E\left[ \prod_{i = 1}^{n} \exp\left( j \omega_i ~ X_i \right) \right] \\
> \end{align} $$
> 
> Usando la propiedad de la [[Esperanza|esperanza]] en el caso de de ser [[Variables aleatorias independientes|variables aleatorias independientes]] obtenemos $$ \begin{align} 
>     \Phi_X(\omega) &= E\left[ \prod_{i = 1}^{n} \exp\left( j \omega_i ~ X_i \right) \right] \\
>      &= \prod_{i = 1}^{n} E\left[ \exp\left( j \omega_i ~ X_i \right) \right] \\
>      &= \prod_{i = 1}^{n} \Phi_{X_i}(\omega_i)
> \end{align} $$
> 
> Que es lo que búscabamos probar

Se puede

## Para vector continuo
---
Para un [[Variable aleatoria continua#Para vector aleatorio|vector aleatorio continuo]], $X$ con [[Función de densidad de probabilidad#Para vector aleatoria|densidad]] $f_X$ la función característica puede calcularse como $$ \Phi(\omega) = E\left[ \exp\left( j\omega^T X \right) \right] = \int_{\mathbb{R}^n} f_X(x) ~ \exp\left( j\omega^T X \right) ~ dx $$
Notemos que la función característica de $X$ corresponde con la [[Transformada de Fourier|transformada de Fourier]] de su función de densidad, salvo por el signo $-$ en el exponente 

Donde la [[Función inversa|inversa]] de la función característica es entonces $$ f_X(x) = \frac{1}{(2\pi)^n} \int_{\mathbb{R}^n} \Phi_X(\omega) ~ \exp\left( -j\omega^T X \right) ~ d\omega $$
## Para vector discreto
---
Para un [[Variable aleatoria discreta#Para vector aleatorio|vector aleatorio discreto]], $X$ con [[Función de masa de probabilidad#Para vector aleatoria|masa de probabilidad]] $p_X$ la función característica puede calcularse como $$ \Phi_X(\omega) = \sum_{x \in R_X} p_X(x) ~ \exp\left( j\omega^T x \right) $$ donde $R_X$ es el [[Rango de una variable aleatoria|rango]] de $X$

Solo en el caso donde $R_X \subseteq \mathbb{Z}^n$, esta transformación, se la puede relacionar a la [[Transformada Discreta de Fourier|transformada discreta de Fourier]]