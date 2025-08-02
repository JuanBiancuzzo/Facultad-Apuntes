---
dia: 2022-09-12
tags:
  - carrera/ingeniería-electrónica/analisis-3/Funciones-elementales
  - carrera/ingeniería-en-informática/analisis-3/Funciones-elementales
  - nota/facultad
---
# Definición
---
Una [[Función|función]] $f : D \to \mathbb{C}$ definida en un [[Conjunto abierto|conjunto abierto]] $D \subseteq \mathbb{C}$ se dice localmente inversible en $D$ sii para cada $z_0 \in D$ existen abiertos $U_0$ y $V_0$ tales que 
1) $z_0 \in U_0$, $f(z_0) \in V_0$, $U_0 \subseteq D$
2) La restricción de $f$ a $U_0$ es una [[Función biyectiva|función biyectiva]] $f_{|U_0}: U_0 \to V_0$

Cada inversa $f_{|U_0}^{-1} : V_0 \to U_0$ se denomina inversa local de $f$ en un [[Entorno|entorno]] del punto $z_0$.

# Teorema de Inversibidad local
---
Sea $f : D \to \mathbb{C}$ [[Holomorfa|holomorfa]] en un abierto $D \subseteq \mathbb{C}$. Entonces, $f$ es localmente inversible en torno cada punto $z_0 \in D$ tal que $f'(z_0) \ne 0$, y sus inversas locales en torno de dichos puntos son, también, holomorfas


## Unicidad local de las inversas locales
---
Dos inversas locales de una función coinciden en la intersección de sus dominios. Es decir: si $g : V_0 \to U_0$ y $h : W_0 \to U_0$ son inversas locales de $f$ en torno de un mismo punto $z_0$, entonces $g(w) = h(w)$ para todo $w \in V_0 \cap W_0$. Esto es porque para cada $w \in V_0 \cap W_0$ existe un único $z \in U_0$ tal que $f(z) = w$ y entonces $g(w) = g(f(z)) = z = h(f(z)) = h(w)$.

