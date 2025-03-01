---
dia: 2022-09-12
tags:
  - carrera/ingeniería-electrónica/analisis-3/Funciones-elementales
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-3/Funciones-elementales
---
# Definición
---
Son la [[Inversa local|inversa local]] de la [[Función potencia|función potencia]], por el [[Inversa local#Teorema de Inversibidad local|teorema de inversibilidad]], sabemos que las inversas locales de $p_n$, que significa $\sqrt[n]{~~}$, existen en torno de cada $z_0 \ne 0$ y que son [[Holomorfa|holomorfas]] 

El calculo de sus derivadas $$ (\sqrt[n]{z})' = \frac{1}{p_n'(\sqrt[n]{z}) } = \frac{1}{n \cdot (\sqrt[n]{z})^{n - 1}} $$

Dado la ecuación $p_n(w) = z$ se define la raíz $w = \sqrt[n]{z}$, es decir, la [[Inversa local|inversa local]] de la [[Función potencia|función potencia]], por lo que necesitamos una región del espacio para que la función $p_n(w)$ sea una [[Función biyectiva|función biyectiva]]
$$ \sqrt[n]{~~} = {p_n}_{|D_k} : D_k \to \mathbb{C} - corte $$
$$\begin{align}
	D_k &= \bigg\{ z \in \mathbb{C} : z = r \cdot e^{i \cdot \theta} \text{ con } r,\theta \in \mathbb{R} : \theta \in \bigg(\theta_0 + \frac{2\pi k}{n}; \theta_0 + \frac{2\pi(k + 1)}{n}\bigg) \bigg\} \\
	corte &= \{ z \in \mathbb{C} : z = t \cdot e^{i \cdot n \cdot \theta_0}, t \in \mathbb{R}, t \geq 0 \}
\end{align}$$
Donde $k \in \{0, 1, 2, \cdots, n - 1 \}$ y define las $n$ [[Partición|partición]] es de $\mathbb{C} - \{0\}$. Notar que es una notación propia

# Observación
---
Con la $\sqrt[n]{~~}$ divide el espació en $n$ regiones rotadas con respecto al origen

# Acotación
---
A pesar de lo parece indicar la notación, esta cuenta solamente es válida en el dominio de definición de cada inversa local $\sqrt[n]{~~}$. **No existe** una función raíz $n$-ésima en $\mathbb{C} - \{ 0 \}$  