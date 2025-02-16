---
dia: 2024-10-03
etapa: ampliar
tipoCita: Libro
numReferencia: 302
tituloObra: The Illusion of Life
nombreAutores:
  - apellido: Thomas
    nombre: Frank
  - apellido: Johnston
    nombre: Ollie
anio: "1981"
editorial: Walt Disney Productions
edicion: 
volumen: 
url: 
capitulos:
  - numReferencia: 303
    numeroCapitulo: "3"
    nombreCapitulo: The Principles of Animation
    editores: []
    paginas:
      inicio: "47"
      final: "70"
cover: The Illusion of Life de Frank Thomas, Ollie Johnston.jpg
aliases:
  - "The Illusion of Life de Frank Thomas, Ollie Johnston, Capítulo 3: The Principles of Animation#Capítulo 3: The Principles of Animation"
  - Secondary Action#Secondary Action
  - Timing#Timing
  - Squash and Stretch#Squash and Stretch
  - Pose to Pose#Straight ahead & Pose to Pose
  - Straight ahead#Straight ahead & Pose to Pose
  - Overlapping Action#Follow Through & Overlapping Action
  - Follow Through#Follow Through & Overlapping Action
  - Anticipation#Anticipation
  - Anticipación#Anticipation
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
referencias:
  - "22"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/coleccion/libro/capitulos", { libro: actual, capitulos: actual?.capitulos });
```


#### Capítulo 3: The Principles of Animation
---
Menciona los $12$ principios de la animación

### Squash and Stretch
---
Este principio enuncia que los objetos/personajes, se pueden enlongar o achatar para enfatizar
* Velocidad
* Momentum
* Peso
* Masa

Se debe mantener el volumen del objeto

### Anticipation
---
La anticipación es cuando un personaje se prepara para hacer una acción, para dar una pista a la audiencia que va a pasar después como también hacer que la acción es más realista

Es más que nada una técnica para dirigir a la audiencia a lo que debe ver, ya que le da la información suficiente para entender donde debe mirar o que debe entender para interpretar lo que viene después

### Staging
---
Se refiere con Staging la presentación de cualquier idea para que sea completamente clara. Esto involucra muchas áreas de las animaciones, desde actuar, timing, posición de la cámara y [[Setting|setting]]

Queremos mantener total control de donde tiene que ver la audiencia, y la cámara puede ayudar, ya que una cámara lejos, es buena para acciones grandes, y una cámara cerca es buena para expresiones. Las acciones importantes (o del personaje principal de la escena) deberían estar en el centro o respetando la [[Regla de los tercios|regla de los tercios]]

También lo podemos interpretar como demostrar, y en cierto sentido, exagerar las emociones y acciones de un personaje

### Straight ahead & Pose to Pose
---
Esto describe dos métodos para hacer animaciones. Straight ahead es animar cada frame seguido al otro. Pose to Pose es animar dos momentos, una al principio y otra al final de una pose, y después animar los frame intermedios

Pose to Pose, es mejor para acciones donde necesitas saber el resultado final, permite dar una idea general de donde va a estar el personaje a lo largo de la acción, al principio del proceso de animar

Straight ahead es muy útil para animaciones que son impredecibles, como lo sería animar fuego y también se puede usar con el método de overlapping action

#### Vocabulario para Pose to Pose
---
Se tiene $3$ tipos de frames que se le da nombre
* Las posiciones de inicio y final, se las llama `keys`
* Las frames anteriores o siguientes a realizar una acción se llaman `extremes`
* Los puntos intermedios entre estos `extremes` se los llama `breakdowns`

Primero se hacen las keys, se perfeccionan, para pasar a los extremes que muestran que tan lejos va a llegar el personaje dado una acción y para conectar los extremes se usan los breakdowns, y ahí es donde se completa los frames intermedios

### Follow Through & Overlapping Action
---
Esta es la técnica de tener objetos, y partes del cuerpo que se adelantan o atrasan a la acción del personaje. Ambas pueden asociarse a drag

* Follow through describe como objetos se adelantan a la acción
* Overlapping action describe el timing de como los objetos se atrasan o adelantan a la acción
* Drag describe como objetos se atrasan a la acción

La presencia o ausencia, en distintas cantidades puede dar a entender aspectos del objeto, como rigidez, y masa

### Slow In & Slow Out
---
Se refiere a como los movimientos empiezan lentos, aumentan su velocidad, la reducen y frenan lento

La ausencia se lo ve asociado a un movimiento robótico, mientras que la presencia de esta velocidad se lo asocia con un movimiento más natural

### Arcs
---
La gran mayoría de objetos naturales se mueven en un [[Arco de curva|arco]], tanto acciones o reacciones, dando carácter a un personaje dependiendo de como es su arco de movimiento

### Secondary Action
---
No confundirse con Overlapping Action, se refieren a gestos u objetos que complementan la acción del personaje para agregar dimensión al personaje

El principio de Staging hay que tenerlo presente para que la acción secundaria no tome el papel de la primaria, y en el caso de ser importante darle el espacio para que la audiencia lo vea

### Timing
---
Este principio enuncia que la personalidad y naturaleza de una animación se ve afectada en gran medida por la cantidad de frames que hay entre cada acción principal

Recordando que la cantidad de frames puede determinar la velocidad de movimiento, esta puede darle personalidad al movimiento

### Exaggeration
---
Toda acción o expresión, se puede exagerar para generar mayor impacto en la audiencia, y se puede no exagerar para crear el efecto opuesto

### Solid Drawing
---
Es la representación en $3$ [[Dimensión|dimensiones]] de las animaciones, en las cuales se tiene que respetar su presentación real, y usar [[Proyección con perspectiva|perspectiva]]. Puede ayudar crear personajes con objetos como cubos, cilindros y esferas, y después completar sobre eso

#### Notas
---
Evitar simetrías, ya que genera un dibujo poco realista y menos dinámico

### Appeal
---
Los personajes que creamos tienen que tener algún aspecto que sea interesante para ver, o más general, poder aceptar como personaje

#### Tips
---
* Usar formas distintas para crear los personajes, esto creará algo interesante sobre ellos
* Agrandar los aspectos interesantes y reducir los aspectos que sean similares a otros personajes
* Mantener simple el personaje

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```