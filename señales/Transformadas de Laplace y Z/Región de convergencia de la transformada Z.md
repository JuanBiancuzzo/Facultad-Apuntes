---
dia: 2024-05-31
aliases:
  - ROC de la transformada Z
tags:
  - señales/Transformadas-de-Laplace-y-Z
  - nota/facultad
---
# Definición
---
Sea una [[Señal|señal]] $x(n)$. Definiremos la ROC de la [[Transformada Z|transformada Z]] $x(n) \xleftrightarrow{~~\mathcal{Z}} X(z)$ como $$ ROC\Set{X(z)} = \Set{ z = r ~ e^{j\Omega} \in \mathbb{C} : \sum_{k = -\infty}^{\infty} |x(k)| ~ r^{-k} < \infty } $$
Notar que la ROC de la transformada Z de una señal $x(n)$ esta definida donde $x(n) ~ r^{-n}$ es [[analisis 3/Series/Criterios de convergencia|absolutamente sumable]], lo que implica que la [[Transformada de Fourier|transformada de Fourier]] de $x(n) ~ r^{-n}$ está bien definida

## Propiedades
---
Dado que la ROC es muy importante en la especificación de la transformada Z de una señal temporal, exploraremos algunas conexiones entre las características de la señal y la correspondiente ROC

1. La ROC de $X(z)$ consiste en anillos o discos centrados en el origen. Es decir $0 \le r_1 < |z| < r_2 < \infty$  ![[Serie de Laurent#^0b0277]]
   
2. La ROC de $X(z)$ (racional) no contiene ningún [[Singularidad|polo]]
   
3. Si $x(n)$ es de duración finita, entonces la ROC es el plano $\mathbb{C}$ completo (con la posible excepción de $z = 0$ o el punto en el infinito)
   
4. Si $x(n)$ es una señal derecha ($\exists ~ N_1$ tal que $x(n) = 0 ~ \forall n < N_1$) y $|z| = r_1$ está en la ROC entonces $$ \Set{ z \in \mathbb{C} : |z| \ge r_1 } \subseteq ROC\Set{ X(z) } $$ con la posible excepción del punto en el infinito
   
5. Si $x(n)$ es una señal izquierda ($\exists ~ N_2$ tal que $x(n) = 0 ~ \forall n > N_2$) y $|z| = r_2$ está en la ROC entonces $$ \Set{ z \in \mathbb{C} : |z| \le r_2 } \subseteq ROC\Set{ X(z) } $$ con la posibilidad excepción de $z = 0$
   
6. Si $x(n)$ es una señal bilateral y la circunferencia $|z| = r_3$ está en la ROC, la misma será un anillo en $\mathbb{C}$ que incluye a $|z| = r_3$
   
7. Si $x(n)$ es tal que su transformada Z es racional, su ROC está limitada por sus polos. Además ningún polo está contenido en la ROC

## Propiedades de la transformada Z
---
![[Transformada Z#Propiedades]]
