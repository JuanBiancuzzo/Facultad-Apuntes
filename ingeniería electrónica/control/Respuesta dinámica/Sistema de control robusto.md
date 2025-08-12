---
dia: 2025-03-17
etapa: ampliar
referencias:
  - "898"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
vinculoFacultad:
  - tema: Respuesta dinámica
    capitulo: 1
    materia: Control automático
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El primer paso para el diseño de un sistema de control es la obtención del [[Modelo|modelo]] matemático de la [[Planta|planta]]. Este proceso introduce un error ya que siempre va a diferencias entre el modelo y la planta en el mundo físico

Una aproximación razonable para asegurar que el [[Controlador|controlador]] diseñado basado en un modelo es incorporar la [[Incertidumbre|incertidumbre]] introducidas por las [[Perturbación|perturbaciones]]. El sistema de control diseñado basado en esta aproximación se denomina sistema de control robusto

Si se supone que la planta real que se desea controlar es $\tilde{G}(s)$ y que el modelo matemático de la planta real es $G(s)$. Donde pueden estar relacionadas por un factor multiplicativo del tipo $$ \tilde{G}(s) = G(s) ~ [1 + \Delta(S)] $$ o por un factor aditivo $$ \tilde{G}(s) = G(s) + \Delta(S) $$ o de otras formas 

Puesto que no se conoce la descripción exacta de la incertidumbre o error $\Delta(s)$, se utiliza una estimación de $\Delta(s)$ y en el diseño del controlador se emplea esta estimación, $W(s)$. $W(s)$ es una [[Función|función]] de [[Transferencia del sistema|transferencia]] escalar del tipo $$ \lVert \Delta(s) \rVert_\infty < \lVert W(s) \rVert_\infty = \max_{0 \le \omega \le \infty} |W(j\omega)| $$ donde $\lVert W(s) \rVert_\infty$ es el máximo valor de $|W(j\omega)|$ para $0 \le \omega \le \infty$ y se denomina [[Norma infinito|norma H infinito]] de $W(s)$

Si se utiliza el [[Teorema de la pequeña ganancia|teorema de la pequeña ganancia]], el [[Proceso|proceso]] de diseño conlleva la determinación del controlador $K(s)$ que satisfaga la desigualdad $$ \left\lVert \frac{W(S)}{1 + K(s) ~ G(s)} \right\rVert_\infty < 1 $$ donde $K(s)$ es la función de transferencia del controlador y $W(s)$ se escoge como una función de transferencia que aproxima $\Delta(s)$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```