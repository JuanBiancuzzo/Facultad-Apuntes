---
dia: 2023-11-17
aliases:
  - Respuesta al impulso
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - carrera/ingeniería-electrónica/señales/Sistemas-LTI
  - nota/facultad
referencias:
  - "899"
  - "873"
etapa: ampliar
vinculoFacultad:
  - tema: Respuesta dinámica
    capitulo: 1
    materia: Control automático
    carrera: Ingeniería electrónica
  - tema: Sistemas LTI
    capitulo: 2
    materia: Señales y sistemas
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La respuesta en [[Función periódica#Frecuencia|frecuencia]] de un [[Circuito eléctrico|circuito]] es la variación de su comportamiento al cambiar la frecuencia de la [[Señal|señal]], donde se define como $h(t)$

Si recordamos que una señal [[Función periódica#^periodo|periódica]] puede descomponerse en una suma de [[Función senoidal|senoides]] por la [[Serie de Fourier|serie de Fourier]] y la propiedad de [[Circuito lineal|linealidad de los circuitos]], entonces la respuesta en frecuencia brinda una descripción completa del circuito en estado estacionario

Para obtener $h(t)$ tendremos que usar como entrada la [[Delta de Dirac|delta de Dirac]], la cual es el impulso para obtener la respuesta en frecuencia del mismo, ya que tiene todas las frecuencias

## Aplicando transformada de Fourier o de Laplace
---
Usando la [[Transformada de Fourier|transformada de Fourier]] o la [[Transformada de Laplace|Laplace]], se lo define como $H(j\omega)$ o $H(s)$ respectivamente, o en el [[Transformada de Fourier en tiempo discreto|caso discreto]] $H\left(e^{-j\omega}\right)$

* Notemos que si un [[Bounded Input-Bounded Output|sistema LTI es estable]] siempre existe $H(s)$ $$ |H(s)| = \left| \int_{-\infty}^{\infty} h(t) \exp(-st) ~ dt \right| \le \int_{-\infty}^{\infty} |h(t) \exp(-st)| ~ dt = \exp(\mathcal{Re}(s)) \int_{-\infty}^{\infty} |h(t)| ~ dt < \infty $$
  
# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```