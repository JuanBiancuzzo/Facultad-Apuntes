---
dia: 2026-09-24
etapa: empezado
referencias: []
aliases: 
  - Valor nominal del dinero#Valor nominal
  - Valor tiempo del dinero#Valor tiempo
tags:
  - carrera/ingeniería-en-informática/ebt-1/Economía
  - carrera/ingeniería-en-informática/ebt-1/Finanzas
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Economía
    capitulo: 2
    materia: Empresas de Bases Tecnológicas 1
    carrera: Ingeniería en informática
  - tema: Finanzas
    capitulo: 4
    materia: Empresas de Bases Tecnológicas 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Todo activo generalmente aceptado como medio de pago. Es un activo plenamente [[ingeniería en informática/ebt 1/Economía/Liquidez|líquido]] que evita las inexactitudes del trueque 

Se puede categorizar como
* Mercancía, donde vale por lo que es
* Fiduciario, donde vale porque hay confianza y una [[ingeniería electrónica/legal/Introducción al derecho/Ley|ley]] detrás
* Electrónico, donde es una expresión del dinero sin soporte físico
* Signo, donde es un símbolo que vale más que el material del que está hecho

Tiene como funcionalidad
1. Medio de pago
	* Acepta con el solo propósito de intercambio por otra [[ingeniería electrónica/legal/Introducción al derecho/Cosa|cosa]] 
	* Por este motivo, tiene sentido que el dinero sea electrónico o como signo
2. Unidad de cuenta
	* Permite medir todos los [[ingeniería electrónica/legal/Introducción al derecho/Bien|bienes y servicios]]  en una escala común
	* Permite la [[Contabilidad|contabilidad]]
3. Depósito de valor 
	* Guarda poder de compra para usarlo más adelante 
	* Es el más importante para las personas

Donde si afecta el valor del dinero, lo primero que se pierde es el concepto del depósito de valor, y por último el medio de pago. Se pierde el medio de pago cuando está tan devaluado el dinero que el precio del material es mayor al del signo

## Valor del dinero
---
Existe un cierto [[ingeniería en informática/ebt 1/Economía/Costo de oportunidad|costo de oportunidad]] a que hacer con el dinero, donde la opción de no hacer nada siempre es peor, ya que 
* Puedo [[Inversión|invertir]] ese dinero para ganar un rendimiento, de manera tal que después valdrá más que lo que vale hoy
* Al dinero de hoy no lo afectará la [[Inflación|inflación]] ni el riesgo de los días siguientes
* Me permite satisfacer una necesidad o deseo de hoy

### Valor nominal
---
Es el valor que tiene el dinero en un momento determinado del tiempo sin considerar otras variables como [[ingeniería en informática/ebt 1/Finanzas/Tasa de interés|tasa de interés]], la inflación, el tipo de cambio, etc.

Es un valor incompleto porque ignora factores importantes como el tiempo y el lugar. Por ejemplo, no es lo mismo $100$ [[Dolar|dolares]] en [[República Argentina|Argentina]] que en [[Hong Kong|Hong Kong]], como tampoco es lo mismo $100$ dolares hoy que hace $100$ años

### Valor tiempo
---
Es el valor que tiene el dinero teniendo en cuenta que una misma suma de dinero vale más hoy que en el futuro. Esto se puede expresar con la siguiente ecuación $$ \text{VF} = \text{VP} ~ (1 + i)^t $$ donde 
* $\text{VF}$ es el valor futuro del dinero
* $\text{VP}$ es el valor presente del dinero
* $i$ es la tasa de interés
* $t$ es el periodo que estoy evaluando