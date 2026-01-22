---
dia: 2025-12-21
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Siguiendo el pensamiento que tuve el [[proyecto práctico/own wiki/Nota del 14 de Diciembre del 2025|otro día]], quiero proponer una nueva estructura al proyecto, donde tiene como objetivo que sea independiente de la plataforma, capaz de registrar los eventos para su testeabilidad y extensible por el usuario, todo esto sobre las capacidades del sistema de crear estructuras para ordenar los datos, y poder visualizar, modificarlo y crear nuevos.

Con todo eso en mente, la estructura que propongo se compone en módulos
1. Para abstraernos de la plataforma dado como inputs, se va a utilizar una [[ingeniería en informática/sisop/Virtualización de memoria/Stack|pila]] de eventos, estos son específicos al proyecto e independientes a la plataforma. Esto nos deja deter una forma de independizarnos del ingreso de información al sistema, y permite la reproducibilidad de situaciones
2. Una estructura Entidad-Componente-View, esta representa una forma flexible de permitirle al usuario crear estructuras ordenadas de datos, y definir la forma de visualizarlos
    * Entidad, representa los archivos del sistema, un [[ingeniería en informática/algebra 2/Espacios Vectoriales/Conjunto|conjunto]] de Componentes que el usuario quiere mostrar juntos
    * Componente, representa un bloque mínimo de información, como la información de un Libro o un Capítulos. Los componentes pueden ser Fuertes o Débiles
        * Un componente Fuerte, representa información que no depende de otra. Como la información de un Libro
        * Un componente Débil, representa, por oposición, información que depende de otro componente. Como la información de un Capítulo, ya que depende de la información de un Libro
    * View, representa la forma de transformar una entidad en una representación visual del mismo. En este [[ingeniería en informática/aninfo/Ingeniería de software/Modelo|modelo]] no existe una Entidad sin una representación visual, pero si existe una Entidad con varias representaciones visuales
3. Para abstraernos de la plataforma dado la salida, vamos a establecer nuestra propia representación de como construir una visualización, y luego, cada plataforma se encargará de mostrarla de la misma forma que la mostrarían otras plataformas

