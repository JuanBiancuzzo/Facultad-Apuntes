---
dia: 2025-09-05
etapa: empezado
referencias: []
aliases: 
  - Extensión de una fuente discreta sin memoria#Extensión
  - Fuente extendida#Extensión
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Elementos-de-Teoría-de-Información
  - nota/facultad
vinculoFacultad:
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Una fuente discreta sin memoria se la conoce de esa forma ya que genera [[ingeniería en informática/estructura/Sistemas numéricos/Símbolo|símbolo]] discretos y [[ingeniería en informática/proba/Representación de variables aleatorias/Covarianza cruzada|descorrelacionadas]] entre sí 

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \ancho = 2; \alto = 1.5; \largo = 1.6; \sep = \alto / 2;
        \scale = 0.9; 
    }
    
    \draw (0, 0) rectangle (\ancho, \alto)
        node[midway, scale=\scale, align=center]{Fuente de\\Información};
        
    \draw[->] (\ancho, {\alto / 2}) -- ++({\largo / 2}, 0)
        node (temp) {};
    \draw (temp.center) -- ++({\largo / 2}, 0);
    
    \path (\ancho, {\alto / 2}) -- ++(\largo, 0)
        node[pos=0.8, above=2pt, scale=\scale] {$s_i$};
        
    \path ($ (temp.center) + (0, -\sep) $)
        node[right=0, scale=\scale] 
            {$\cdots ~ s_i,~ s_{i + 1},~ s_{i + 2} ~ \cdots$};
    
\end{tikzpicture}
\end{document}
```

Estos símbolos denotados $s_i$, son [[ingeniería en informática/proba/Variables y vectores aleatorios/Variable aleatoria|variable aleatorias]], pertenecen al [[ingeniería en informática/discreta/Autómatas/Alfabeto|alfabeto]] de la fuente, la cual la denotaremos como $$ \mathcal{S} \triangleq \Set{s_0,~ s_1,~ \cdots,~ s_{k-1}} $$ 

Por último se define a partir de esta fuente, su estadística, la cual define una [[investigación/matemática/Probabilidad/Probabilidad|probabilidad]] a cada símbolo que puede generar la fuente, es decir, cada símbolo del alfabeto $$ \mathbb{P}(s = s_k) = p_k,~~~ k \in \Set{0,~ 1,~ \cdots,~ k - 1} $$ donde $$ \sum_{k = 0}^{k - 1} p_k = 1 $$

## Extensión
---
Una fuente extendida, denotada $\mathcal{S}^n$, donde cada símbolo de esta fuente extendida es una [[ingeniería electrónica/analisis 3/Series/Sucesión|sucesión]] de $n$ símbolos de la fuente discreta sin memoria $\mathcal{S}$ 

Se puede pensar como que el [[ingeniería en informática/discreta/Autómatas/Alfabeto|alfabeto]] de la fuente extendida se define como el [[ingeniería en informática/analisis 2/Nomenclatura/Producto cartesiano|producto cartesiano]] entre el alfabeto $\mathcal{S}$ con el mismo $n$ veces $$ \mathcal{S}^n = \underbrace{\mathcal{S} \times \mathcal{S} \times \cdots \times \mathcal{S}}_{n ~ \text{veces}} $$  
Las propiedades de una fuente extendida, en relación de la fuente son 
* Cantidad de símbolos se calcula como $$ |\mathcal{S}^n| = |\mathcal{S}|^n $$
* Su [[ingeniería en informática/orga/Compresión/Entropía|entropía]] se calcula de la siguiente forma $$ H\left(\mathcal{S}^n \right) = n ~ H(\mathcal{S}) $$
* Su [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Longitud promedio de un alfabeto|longitud promedio]] se calcula como $$ \bar{L}_{\mathcal{S}^n} = n ~ \bar{L}_{\mathcal{S}} $$