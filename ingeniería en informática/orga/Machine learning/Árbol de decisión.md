---
dia: 2023-08-11
tags:
  - "#investigación/matemática/Estadística/Machine-learning"
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - curso/introduction-to-algorithms/Sorting-and-Trees
  - investigación/ciencias-de-la-computación/Machine-learning
  - investigación/machine-Learning
  - nota/curso
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - tema: Machine learning
    capitulo: 9
    materia: Organización de datos
    carrera: Ingeniería en informática
vinculoCurso:
  - "[[cursos/introduction to algorithms/Sorting and Trees/Resumen.md]]"
---
# Definición
---
Se define un árbol de decisión como un [[Árbol binario|árbol binario]] en el cual cada nodo intermedio en este árbol es una decisión binaria, y cada hoja es el resultado final de las decisiones

## En algoritmos
---
Podemos analizar un [[Algoritmo|algoritmo]] (usando el [[Modelo comparativo de computación|modelo comparativo de computación]]) se puede usar este árbol, donde nos permite ver

| Árbol de decisión                                              | Algoritmo                                        |
| -------------------------------------------------------------- | ------------------------------------------------ |
| Nodo interno                                                   | Decisión binaria                                 |
| Nodo hoja                                                      | Encontrar un resultado                           |
| Un [[Camino#Camino simple (Path)\|camino]] del root a una hoja | Una ejecución del algoritmo                      |
| Es el largo de ese camino                                      | El tiempo de ejecución                           |
| Es el camino más largo o altura del árbol                      | [[Worse-case complexity\|Worse-case complexity]] |

> [!teorema]+ Teorema 3.1.1 (Cota inferior de búsqueda) 
> Dado $n$ elementos preprocesados, buscar un elemento entre ellos, usado el modelo comparativo, requiere $\Omega(\log_2(n))$ en el peor de los casos
> 
> > [!demostracion]- Demostración
> > Dado que es un árbol binario, y como debería tener un resultado para cada posible búsqueda, debe tener al menos $n$ resultas, es decir, $n$ hojas. Esto nos hace concluir que la altura del árbol será $\log(n)$ y la mejor Worse-case complexity del algoritmo
^teo-3-1-1

> [!teorema]+ Teorema 3.1.2 (Cota inferior de ordenamiento)
> Dado $n$ elementos, ordenar estos elementos, usando el modelo comparativo, requiere $\Omega(n ~ \log_2(n))$ en el peor de los casos
> 
> > [!demostracion]- Demostración
> > Dado que es un árbol binario, necesitamos encontrar el mínimo de posibles soluciones deberíamos encontrar y a partir de eso, calcular la altura dándonos la prueba de lo que queremos probar
> > 
> > La mínima cantidad de soluciones posibles es $n!$ siendo que podemos permutar todos los elementos. Por lo tanto la altura es $h = \log_2(n!)$ que por propiedades del [[Logaritmo principal|logaritmo]] podemos expresar de la siguiente forma $$ \begin{align} 
> >     \log_2(n!) &= \log_2\left( \prod_{i = 1}^{n} i \right) \\
> >      &= \sum_{i = 1}^{n} \log_2(i) \\
> >      &\ge \sum_{i = \frac{n}{2}}^{n} \log_2(i) \\
> >      &\ge \sum_{i = \frac{n}{2}}^{n} \log_2\left( \frac{n}{2} \right) \\
> >      &= \sum_{i = \frac{n}{2}}^{n} \left( \log_2(n) - 1 \right) \\
> >      &= \frac{n}{2} ~ \log_2(n) - \frac{n}{2} \\
> >      &= \Omega(n ~ \log_2(n))
> > \end{align} $$
> > 
> > Llegando a lo que buscábamos probar
^teo-3-1-2

## En machine learning
---
Lo que se quiere aprender en estos algoritmos de [[investigación/machine Learning/Machine learning|machine learning]] es como se debería tomar las decisiones para llegar a una respuesta con la mayor [[Probabilidad|probabilidad]] de estar en lo correcto, según los datos dados

Hay varios árboles de decisión como
* [[Random forest|Random forest]]
* [[XGBoost|XGBoost]]