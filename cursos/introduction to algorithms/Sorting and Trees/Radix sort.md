---
dia: 2025-01-22
etapa: empezado
referencias:
  - "701"
  - "840"
tags:
  - curso/introduction-to-algorithms/Sorting-and-Trees
  - investigación/ciencias-de-la-computación/algoritmos/Sorting-algorithms
  - nota/curso
  - nota/investigacion
aliases:
  - Ordenamiento Radix
  - Bucket sort
  - Digital sort
vinculoCurso:
  - tema: Sorting and Trees
    capitulo: 2
    tipo: Online
    curso: Introduction to Algorithms
    anio: "2011"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es un [[Algoritmo de ordenamiento|algoritmo de ordenamiento]] que ordena enteros procesando sus dígitos en forma individual en una [[ingeniería en informática/estructura/Sistemas numéricos/Base numérica|base]] $b$. Podemos decir que $d$ es la cantidad de dígitos $d = \log_b(k)$ 

1. Ordenar, con [[Counting sort|counting sort]], todos los $n$ elementos por el digito menos significativo
*  `...`
3. Ordenar por el digito más significativos sin desordenar lo ordenado

```
function RedixSort :: array: Element[], n: Integer, k: Integer -> Element[]
    where GetKey Element -> Integer
then
    let digitos = log(n, k)
    
    for i in 0..digitos then
        let exponente = n^i
        let nuevoGetKey = element: Element -> Integer 
            return ( (GetKey element) // exponente ) % n
        end
        
        CountingSort array, n, n
            where GetKey = nuevoGetKey        
    end
end
```

Como se usa counting sort para el ordenamiento por dígitos, entonces cada iteración es $\Theta(n + b)$. Esto lo hacemos por $d$ iteraciones, entonces $\Theta((n + b) ~ d) = \Theta((n + b) ~ \log_b(k))$ 

Si estamos intentando de maximizar $b$ pero minimizar el resultado $b$ tiene que ser igual a $n$, resultando en un [[Worse-case complexity|worse-case complexity]] $\Theta(n ~ \log_n(k))$ y si proponemos que $k = n^c$, donde $c$ es constante, entonces resulta $\Theta(n ~ c)$

## Ejemplo
---
Veamos un ejemplo donde tenemos el array $[25,~ 452,~ 4,~ 348,~ 866,~ 677,~ 33,~ 211,~ 873,~ 536]$ y lo tenemos que ordenar de menor a mayor con  $k = n^3 = 10^3 = 1000$ 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{verde}{RGB}{24, 134, 75} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \def\elementos{{
         25, 452,   4, 348, 866, 677,  33, 211, 873, 053, 
        211, 452,  53,  33, 873,   4,  25, 866, 677, 348,
          4, 211,  25,  33, 348, 452,  53, 866, 873, 677,
          4,  25,  33,  53, 211, 348, 452, 677, 866, 873
    }}
    \tikzmath { \n = 10; \digitos = dim(\elementos) / \n - 1; }
    
    \tikzmath { 
        \alto = 0.8; \ancho = 0.8;
        \separacion = (\digitos + 1.5) * \ancho;
    }
    
    \foreach \iteracion [parse=true] in {0, ..., \digitos - 1} { \begin{scope}
        [cm={1, 0, 0, 1, ({\iteracion * \separacion}, 0)}]
        \draw[<-, shorten <=0.2cm, ultra thick] 
            ({-(\iteracion - 0.5) * \ancho}, \alto) -- ++(0, 1) 
                node[above=2pt] {i};
    \end{scope} }
    
    \foreach \iteracion [parse=true] in {0, ..., \digitos} { \begin{scope}
        [cm={1, 0, 0, 1, ({\iteracion * \separacion}, 0)}]
        
        \foreach \i [parse=true] in {0, ..., \n - 1} {
            \tikzmath { 
                \indice = \n * \iteracion + \i;
                \valor = \elementos[\indice]; 
            }
            
            \foreach \j [parse=true] in {0, ..., \digitos - 1} {
                \tikzmath { 
                    \digito = mod(int( \valor / (\n^\j) ), \n); 
                    \caracter = \digito < 10 
                        ? int(\digito + 48) 
                        : int(\digito + 65 - 10);
                    \color = \j < \iteracion ? "verde" : "white";
                }
                
                \fill[\color] ({-\j * \ancho}, {-\i * \alto}) 
                    rectangle ++(\ancho, \alto);
                \draw ({-\j * \ancho}, {-\i * \alto}) 
                    rectangle ++(\ancho, \alto) 
                        node[midway] {$\char\caracter$};
            }        
        }
        
    \end{scope} }

\end{tikzpicture}
\end{document}
```

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```