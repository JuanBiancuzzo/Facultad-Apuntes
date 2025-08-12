---
dia: 2022-11-27
tags:
  - carrera/ingeniería-electrónica/analisis-3/Integrales-impropias
  - carrera/ingeniería-en-informática/analisis-3/Integrales-impropias
  - nota/facultad
vinculoFacultad:
  - tema: Integrales impropias
    capitulo: 10
    materia: Análisis matemático 3
    carrera: Ingeniería electrónica
---
# Definición para $\int_a^\infty f(x) \cdot dx$
---
Dada $f : [a, \infty) \to \mathbb{R}$ [[Seccionalmente continua]], sea $F : [a, \infty) \to \mathbb{R}$ tal que $F(\lambda) = \int_a^\lambda f(x) \cdot dx$. Entonces, si existe el limite $\lim_{\lambda \to \infty} F(\lambda)$ (y es finito), se dice que la integral $\int_a^\infty f(x) \cdot dx$ converge.

### Notación
$$ \int_a^\infty f(x) \cdot dx = \lim_{\lambda \to \infty} \int_a^\lambda f(x) \cdot dx $$

## Nota
---
* $\int_a^\infty f(x) \cdot dx$ converge sii para cualquier $b > a$ la integral $\int_b^\infty f(x) \cdot dx$ converge.
* Si $f$ es [[Función continua|continua]], $F$ no es otra cosa que la [[Primitiva]] de $f$ que se anula en $a$.
* Para la convergencia de la integral $\int_a^\infty f(x) \cdot dx$ no es necesario ni suficiente que $\lim_{x \to \infty} f(x) = 0$



# Definición para $\int_{-\infty}^\infty f(x) \cdot dx$
---
Indiquemos con $\Lambda = \Set{(\mu, \lambda) \in \mathbb{R}^2 : \mu, \lambda \ge 0}$ el primer cuadrante del plano. Dada una función $f : \mathbb{R} \to \mathbb{R}$ [[Seccionalmente continua]], sea $F : \Lambda \to \mathbb{R}$ tal que $F(\mu, \lambda) = \int_{-\mu}^\lambda f(x) \cdot dx$. Entonces, se dice que la integral $\int_{-\infty}^\infty f(x) \cdot dx$ converge sii existe el [[Límite]] (doble) $$ \lim_{(\mu, \lambda) \to (\infty, \infty)} F(\mu, \lambda)$$ y es finito.

### Notación
$$ \int_{-\infty}^\infty f(x) \cdot dx = \lim_{(\mu, \lambda) \to (\infty, \infty)} \int_{-\mu}^\lambda f(x) \cdot dx $$

Puesto que para cada $(\mu, \lambda) \in \Lambda$ es $$ F(\mu, \lambda) = \int_{-\mu}^{\lambda} f(x) \cdot dx = \int_{-\mu}^{0} f(x) \cdot dx + \int_{0}^{\lambda} f(x) \cdot dx = F(\mu, 0) + F(0, \lambda) $$
Resulta que $$ \int_{-\infty}^\infty f(x) \cdot dx = \lim_{(\mu, \lambda) \to (\infty, \infty)} \int_{-\mu}^{\lambda} f(x) \cdot dx = \lim_{\mu \to \infty} \int_{-\mu}^{0} f(x) \cdot dx + \lim_{\lambda \to \infty} \int_{0}^{\lambda} f(x) \cdot dx$$
En el caso de exitir estos limites, este coincide con el limite de $$\lim_{\lambda \to \infty} \int_{-\lambda}^{\lambda} f(x) \cdot dx$$ donde este se lo denomina como el valor principal 

## Nota
---
1) Si $f$ es par: $$ \int_{-b}^{b} f(x) \cdot dx = 2 \cdot \int_0^b f(x) \cdot dx $$
2) Si $f$ es impar: $$ \int_{-b}^{b} f(x) \cdot dx = 0 $$

# Impropiedades
---
1) En las integrales de la forma $\int_a^b f(x) \cdot dx$, donde $f : (a, b) \to \mathbb{R}$ es [[Seccionalmente continua]] en cada intervalo $[c, d] \subset (a, b)$. Diremos que esta integral converge sii existe el límite doble $$ \int_a^b f(x) \cdot dx = \lim_{(\delta, \varepsilon) \to (0, 0)} \int_{a + \delta}^{b - \varepsilon} f(x) \cdot dx $$ donde podemos estudiar la convergencia de las siguientes integrales, donde existe un punto intermedio $a < c < b$, resulta $$ \lim_{(\delta, \varepsilon) \to (0, 0)} \int_{a + \delta}^{b - \varepsilon} f(x) \cdot dx = \lim_{\delta \to 0} \int_{a + \delta}^{c} f(x) \cdot dx + \lim_{\varepsilon \to 0} \int_{c}^{b - \varepsilon} f(x) \cdot dx $$

2) En las integrales de la forma $\int_a^b f(x) \cdot dx$, donde existe un punto interior $c \in (a, b)$ tal que $f : [a, c) \cup (c, b] \to \mathbb{R}$ es [[Seccionalmente continua]] y tiene [[Límite]] laterales infinitos en $c$. Diremos que esta integral converge sii existe (y es finito) el limite doble $$ \int_a^b f(x) \cdot dx = \lim_{(\delta, \varepsilon) \to (0,0)} \Bigg( \int_a^{c - \delta} f(x) \cdot dx + \int_{c + \varepsilon}^b f(x) \cdot dx \Bigg) $$

