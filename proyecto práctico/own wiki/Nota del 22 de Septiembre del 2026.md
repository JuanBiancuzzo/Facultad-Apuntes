---
dia: 2026-09-22
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Hoy estoy intentando plazmar todo lo que me gustaría hacer, porque siento que hay muchas cosas por definir que son fundamentales

Yendo a la propuesta del proyecto, que dice
> Para conseguir esto se busca tener $2$ conceptos principales
>  1. Representar la información en una [[ingeniería en informática/bdd/General/Base de datos relacionales|base de datos relacional]], esto permitiría darlo una estructura a la información y utilizarla de forma más eficiente
>  2. Utilizando herramientas para visualizar los datos guardados, y poder modificarlos

Donde la primera la forma de lograrlo es relativamente obvia, y por lo tanto no hay problema, pero donde sí hay un problema de definición, es en la segunda

Necesitamos, para el segundo concepto, agrupar un conjunto de datos para las visualizaciones, es decir, una query tan compleja como se necesite, y una forma arbitraria para renderizar esta información

El problema con esta situación es que tal vez es demasiada libertad laqe se está definiendo, porque no impone ninguna limitación en la forma de renderizar, y tomando mi obsidian como ejemplo, lo que estoy buscando es
* Renderizar texto
* Crear ecuaciones
	* Que puedan ser interactuables
* Crear imagenes/animaciones
	* Ya sea 2D o 3D
	* Con la posibilidad de interactuar
	* Con la posibilidad de generar imagenes reutilizables y parametrizables
* Crear formas de moverme entre las visualizaciones

Casi que las herramientas que utilice para visualizar la información, las tenga disponibles para las visualizaciones también, es decir, que la creación de la [[Graphical User Interface (GUI)|interfaz]] sea igual que estar en mis datos, y ahí radica la dificultad, y por eso pienso que debería ver como generar herramientas que se pueda utilizar "estaticamente" al momento de generar el programa y "dinámicas" cuando esté usando el programa

Actualmente, la meta sería crear estas herramientas para tener 
* Texto como Markdown
* Ecuaciones como Katex
* Diagrama como Tikz
* Animaciones como Manim
* Generaciones de modelos como Blender Geometry Nodes

Donde debería poder relacionarse todos con todos, y como ejemplos sería
* Generar la ecuación de una [[colección/distribuciones/continua/Distribución Normal|Normal]] (usando Katex), donde $\sigma$ y $\mu$ funcione como un slider. Utilizando ese valor poder generar un digrama generado por esos valores utilizados (usando Tikz)
* Generar una ecuación de [[ingeniería electrónica/robótica industrial/Sistema de referencias/Ángulo de Euler|ángulos de Euler]], donde $\varphi$, $\theta$ y $\psi$ funcionen como un slider, y que en la ecuación pueda visualizar los valores de las matrices. Después que se genere una animación donde las [[ingeniería en informática/analisis 2/Nomenclatura/Sistema cartesiano|ternas]] se mueva los ángulos definidos por las variables, y que se pueda interactuar con la terna inicial
* Generar una animación, donde se utiliza el modelo 3D generado, de un [[ingeniería electrónica/robótica industrial/Cinemática y estática/Robot IRB140|robot IRB140]] y se muestre que se puede llegar con [[investigación/animation/Cinemática inversa|cinemática inversa]] dado por una posición que el usuario puede interactuar

Lo que realmente busco es una forma en la que pueda interactuar con las notas que estoy generado, y que pueda usarlo para explicar conceptos que estoy intentando aprender, todo desde el mismo lugar y que usarlo sea tan estetico como verlo 