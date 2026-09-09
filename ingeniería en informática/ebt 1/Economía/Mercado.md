---
dia: 2026-09-03
etapa: empezado
referencias: []
aliases: 
  - Demandante#^demandante
  - Comprador#^demandante
  - Ofertante#^ofertantes
  - Vendedor#^ofertantes
  - Monopolio#^monopolio
  - Oligopolio#^oligopolio
  - Competencia monopólica#^competencia-monopolica
tags:
  - carrera/ingeniería-en-informática/ebt-1/Economía
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Economía
    capitulo: 2
    materia: Empresas de Bases Tecnológicas 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
El mercado es el ámbito donde compradores y vendedores intercambian [[ingeniería electrónica/legal/Introducción al derecho/Bien|bienes y servicios]] para satisfacer sus necesidades. Todo lo que pasa en un mercado, dos variables mandan, el [[Precio|precio]] $P$ y la cantidad $Q$

Los compradores, en el contexto del mercado, son los denominados demandantes ^demandante
Los vendedores, en el contexto del mercado, son los denominados ofertantes ^ofertantes

Existen $4$ cosas que definen a un mercado
1. Cuántos venden
	* La cantidad de [[Empresa|empresas]] u organizaciones que participan del mercado
2. Qué tan parecidos son los productos
	*  La capacidad de diferenciar o de [[ingeniería en informática/ebt 1/Economía/Bien sustituto|sustituir los productos]] y servicios
	* Una gran diversidad de productos permite aumentar el precio por un [[Valor agregado|valor agregado]] por un elemento diferenciativo
3. Quién fija el precio
	*  El poder que tienen las empresas de fijar el precio o de no tenerlo
	* Quién lo fija, y por el mismo valor
4. Qué tan fácil se entre y se sale
	*  Las barreras de entrada y de salida del mercado
	* Se entiende como los requisitos para entrar
		* Como ejemplo de requisitos difíciles es la industria automotriz, o la petrolera que necesitan un gran capital de inicio. También lo puede ser el conocimiento o si el mercado está saturado
	* Se entiende como las barreras para salir
		* Es lo complicado de liquidar el negocio al querer irse
		* Como ejemplo es en la industria automotriz, donde las fabricas de autos es dificil de vender ya que ninguna otra industria necesita ese tamaño de fábrica 
	* Si son ambas bajas, como las empresas informáticas, se promueve crear muchas empresas
	
Estas cuatro respuestas deciden si un mercado se parace a la competencia perfecta

## Competencia perfecta
---
Para que un mercado se lo considere competencia perfecta, debe cumplir estas $5$ condiciones
1. Muchos [[ingeniería en informática/ebt 1/Economía/Mercado#^ofertantes|ofertantes]]
	*  Gran cantidad de [[Empresa|empresas]] u organizaciones
2. Información perfecta
	*  Se conoce toda la información con la que opera el mercado
3. Bien homogéneo
	*  Lo que se comercializa es indistinguible entre ofertantes
4. Sin barreras
	*  Entre y salir del mercado no cuesta nada
5. Nadie fija el precio
	*  Ninguna empresa tiene poder de mercado para influir en él

Cuando alguna no se cumple, hablamos de imperfecciones en el mercado, y los $3$ casos más comúnes son 
* Monopolio ^monopolio
	* Es cuándo una empresa es la única en el mercado, obteniendo la totalidad del mismo
	* Condiciones
		* Cumple únicamente la información perfecta, ya que al haber una única empresa, conociendo esta ya se conoce todo con lo que maneja el mercado. De igual forma se cumple que está bien homogéneo el mercado, porque solo hay una opción
		* No cumple claramente muchos ofertante, es el caso más opuesto, las barreras de entrada son muy difíciles o imposibles, y esta empresa fija el precio
* Oligopolio ^oligopolio
	* Es cuando un par de empresas son las únicas del mercado, logran dividir el mercado, y eliminan a la competencia, similar al [[ingeniería en informática/ebt 1/Economía/Mercado#^monopolio|monopolio]]
	* Condiciones
		* No necesariamente cumple que el está bien homogéneo el mercado
		* No cumple que haya muchos ofertantes, la información es imperfecta, puede ser no homogéneo el mercado, es difícil de entrar, y el poder lo fijan estas $2$ o $3$ empresas
	* Como se reparten el mundo, entonces eliminar a la poca competencia que queda implicaría tener la capacidad de manejar el incremento gigante de demanda, y por lo tanto previo a esto, se necesita hacer una inversión gigante en infraestructura pero esta es obvia para la competencia 
* Competencia monopólica ^competencia-monopolica
	* Es cuándo varias empresas generan lo mismo, pero donde se compite por ser distinto
	* Condiciones
		* Son muchas empresas, las barreras son bajas y es relativamente difícil para una empresa fijar los precios
		* Los información no es perfecta, porque la diferenciación suele ser un aspecto casi cualitativos, y por lo tanto los bienes en cierta manera son diferenciables

Como resumen, se puede ver la siguiente tabla

|                         | Competencia perfecta |                   Monopolio                   |           Oligopolio            | Competencia monopólica |
| ----------------------- | :------------------: | :-------------------------------------------: | :-----------------------------: | :--------------------: |
| Cantidad de empresas    |        Muchas        |                      Una                      |              Pocas              |         Muchas         |
| Información             |       Perfecta       |                   Perfecta                    |           Imperfecta            |       Imperfecta       |
| Diferenciabilidad       |      Homogénea       |                   Uno solo                    |    Homogéneo o diferenciado     |      Diferenciado      |
| Barreras de entrada     |        No hay        | Monopolio natural, petentes, tecnología única | Inversiones y ventaja en costos |         Bajas          |
| Influencia en el precio |       Ninguna        |                   Muchísima                   |             Muchas              |          Poca          |
