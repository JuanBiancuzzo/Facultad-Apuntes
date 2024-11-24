---
dia: 2024-07-15
etapa: ampliar
referencias:
  - "156"
aliases:
  - GDD
tags:
  - nota/investigacion
  - investigación/game-creation
orden: 193
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En resumen, un GDD muestra todos los elementos claves del juego y sirve como plano para el juego. Estos elementos claves pueden ser
* Mecánicas
* [[Requisito del sistema|Requisitos del sistema]]
* Plataformas en las que estará disponible
* etc.

Esta también muestra los elementos claves de la narrativa, permitiendo que la narrativa como los elementos visuales estén alineados al proyecto, entre ellos tendría que mostrar
* [[Setting|Setting]]
* [[Theme|Theme]]
* La historia
* [[Personajes|Personajes]]
* [[investigación/storytelling/worldbuilding/Índice|Worldbuilding]]
* Interacción entre personajes y el mundo

Esto se puede pensar como el [[Outline of a book (Outline de un libro) (Esquema de un libro)|outline de un libro]], donde te permite pensar en el conjunto de elementos que conforman este juego, y poder identificar 
* Elementos debería quedarse
* Elementos necesitan un cambio para poder ser coherentes con el resto del juego
* Elementos por ser muy ambiciosos, o no alinearse con la idea del juego, que deben sacarse 

Podemos ver un par de templates
* [Una única página](https://drive.google.com/file/d/1-yiF2Pq-OgJaTXsMAQbIckoDzGINz26O/view)
* [Template general](https://docs.google.com/document/d/1KO8kQkX8v7YGZhWu6YUnfmFCRBy0cqZeCmSxHeTVy3k/edit#heading=h.t9nnq84x9u7o)
* [Alternativa](https://docs.google.com/document/d/1N83Bnr2o9QWRYWRlN5KIxZDUCJAnC3g1/edit#heading=h.gjdgxs)
* [Template Pozefsky](https://wwwx.cs.unc.edu/~pozefsky/seriousgames/NewDesignDocTemplate.pdf)

Y veamos un par de ejemplos
* [GDD de Mass Flux](https://docs.google.com/document/d/1Vl7BMvzUOhbunJrI_X1gUc6x-LAp3aaBiPwHUf27B70/edit#heading=h.lr899156xjnx)
* [GDD de Double Coconut](https://docs.google.com/document/d/1h4p_3wMyBtUjyW7p6VdXFcv1vWBNFcT6cLr1DzaD7V0/edit#heading=h.wswitvrtlk2f)

## Template general
---
Veamos varias posibilidades de headers que tenga el GDD, para poder describir
* Packaging
    * Título, tagline/hook, y si hay una representación artística del juego
    * Sirve como resumen del juego, y dar una idea de por donde va el juego
* Introducción
    * Resumen del juego/elevator pitch
    * Inspiraciones
    * Plataformas en las que estará disponible
    * Software que se va a usar
    * [[Genre (Genero)|Genero]]
    * La audiencia que se espera llegar
* Concepto
    * [[Game loop|Loop mecánico]]
    * Theme
    * Mecánicas principales
    * Mecánicas secundarias
    * Progresión
    * Combate
    * [[Quest|Quests]]
    * [[investigación/game creation/npc AI/Índice|NPC AI]]
    * Sistemas específicos del juego
* Historia
    * [[Narrativa en videojuegos|Narrativa]]
    * Personajes
    * [[Diálogo|Diálogo]]
    * [[Storyboard|Storyboards]]
* Dirección artística
    * Diseño
    * Efectos visuales
    * Iluminación
* Audio
    * Música
    * Efectos de sonido
* Experiencia de juego
    * [[Interfaz de usuario|UI]]/[[Experiencia del usuario|UX]]
    * Controles
    * Menus
* [[Requisito de negocio|Requisitos de mercado]]
    * Prioridades
    * [[Producto mínimo viable|MVP]]
    * Marketing
    * Post-lanzamiento
* [[Requisito de software|Requisitos técnicos]]
    * Sistemas
    * Tareas
    * Actividades


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```