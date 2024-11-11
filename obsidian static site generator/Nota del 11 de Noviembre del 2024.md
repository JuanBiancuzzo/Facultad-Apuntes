---
dia: 2024-11-11
tags: 
 - obsidian-static-site-generator
 - nota/proyecto 
---
# Progreso
---
Vamos a establecer el flow del proyecto para poder concentrarnos en los pasos generales y después ir mejorándolos poco a poco

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.5, transform shape, thick]
    
    \tikzmath{ 
        \anchoBlock = 2.5; \altoBlock = 1.5; 
        \sepX = 1.5; \sepY = 1.5;
        \ancho = 2 * (\anchoBlock + \sepX);
        \escala = 0.7;
    }
    
    \begin{scope}[cm={1, 0, 0, 1, (0, {3 * (\altoBlock + \sepY)})}, align=center]
        
        \draw[->] (0, {\altoBlock / 2}) -- ++(\sepX, 0) 
            node[midway, below=2pt, scale=\escala] {Entran\\archivos\\(path)};
        \draw (\sepX, 0) rectangle ++(\anchoBlock, \altoBlock)
            node[midway, scale=\escala] {Parsea el\\archivo};
            
        \draw[->] ({\sepX + \anchoBlock / 3}, \altoBlock) .. controls
                ({\sepX + \anchoBlock / 3}, {\altoBlock + 0.7}) and 
                ({\sepX + 2 * \anchoBlock / 3}, {\altoBlock + 0.7})
            .. ({\sepX + 2 * \anchoBlock / 3}, \altoBlock)
                node[midway, above=2pt, scale=\escala] {Modificar el\\archivo};
        
        \draw[->] ({\sepX + \anchoBlock}, {3 * \altoBlock / 4}) -- ++(\sepX, 0) 
            node[midway, above=2pt, scale=\escala] {JSON\\archivo};
        \draw[->] ({\sepX + \anchoBlock}, {\altoBlock / 4}) -- ++(\sepX, 0) 
            node[midway, below=2pt, scale=\escala] {JSON\\outlink};
        
        \draw ({2 * \sepX + \anchoBlock}, 0) rectangle ++(\anchoBlock, \altoBlock)
            node[midway, scale=\escala] {Agregar una\\queue los\\JSON};
            
        \draw ({2 * \sepX + \anchoBlock}, {\altoBlock + \sepY / 2}) 
            rectangle ++(\anchoBlock, {\altoBlock / 2})
                node[midway, scale=\escala] {BDD};
                
        \draw[->] ({2 * \sepX + 1.5 * \anchoBlock}, \altoBlock) 
            -- ++(0, {\sepY / 2}) node[midway, right=2pt, scale=\escala]
                {Insertar info};
    \end{scope}
    
    \draw[dashed] ({-\sepX / 2}, {3 * \altoBlock + 2.5 * \sepY}) 
        -- ++({\ancho + \sepX}, 0) node[pos=0, below right=2pt, scale=\escala] 
            {Después de procesar todos los archivos};
    
    \begin{scope}[cm={1, 0, 0, 1, (0, {\altoBlock + \sepY})}, align=center]
        \draw[->] (0, {\altoBlock + \sepY / 2}) -- ++(\sepX, 0) 
            node[midway, below=2pt, scale=\escala] {Entran\\archivos\\(path)};
        \draw (\sepX, {(\altoBlock + \sepY) / 2}) 
            rectangle ++(\anchoBlock, \altoBlock)
                node[midway, scale=\escala] {Modificar los\\archivo};
                
        \draw (\sepX, {1.5 * \altoBlock + \sepY}) 
            rectangle ++(\anchoBlock, {\altoBlock / 2})
                node[midway, scale=\escala] {BDD};
        \draw[<-] ({\sepX + 0.5 * \anchoBlock}, {1.5 * \altoBlock + \sepY/2}) 
            -- ++(0, {\sepY / 2}) node[midway, right=2pt, scale=\escala]
                {API};
        \draw (\sepX, 0) rectangle ++(\anchoBlock, {\altoBlock / 2})
            node[midway, scale=\escala] {Configuración\\de plugins};
        \draw[->] ({\sepX + 0.5 * \anchoBlock}, {\altoBlock / 2}) 
            -- ++(0, {\sepY / 2}) node[midway, right=2pt, scale=\escala] {};
        
        
        \coordinate (esquina) at 
            ({\sepX + \anchoBlock}, {(\altoBlock + \sepY) / 2});
        
        \tikzmath { \diffEsq = 0.5; \sepEsq = 0.7; }    
        \draw[->] ($ (esquina) + (-\diffEsq, 0) $) 
            .. controls 
                ($ (esquina) + ({-\diffEsq + \sepEsq / 2}, -\sepEsq) $) and 
                ($ (esquina) + (\sepEsq, {\diffEsq - \sepEsq / 2}) $)
            .. ($ (esquina) + (0, \diffEsq) $)
                node[midway, below right=0.05cm, scale=\escala] 
                    {Modificar el\\archivo};
        
        \draw[->] ({\sepX + \anchoBlock}, {\altoBlock + 0.5 * \sepY}) 
            -- ++(\sepX, 0) node[midway, above=2pt, scale=\escala] 
                {JSON\\modificación};
        
        \draw ({2 * \sepX + \anchoBlock}, {(\altoBlock + \sepY) / 2}) 
            rectangle ++(\anchoBlock, \altoBlock)
                node[midway, scale=\escala] {Agregar una\\queue los\\JSON};
            
        \draw ({2 * \sepX + \anchoBlock}, {1.5 * \altoBlock + \sepY}) 
            rectangle ++(\anchoBlock, {\altoBlock / 2})
                node[midway, scale=\escala] {BDD};
                
        \draw[->] ({2 * \sepX + 1.5 * \anchoBlock}, {1.5 * \altoBlock + \sepY/2}) 
            -- ++(0, {\sepY / 2}) node[midway, right=2pt, scale=\escala]
                {Insertar info};
    \end{scope}
    
    \draw[dashed] ({-\sepX / 2}, {\altoBlock + \sepY / 2}) 
        -- ++({\ancho + \sepX}, 0) node[pos=0, below right=2pt, scale=\escala] 
            {Después de procesar todos los archivos};
    
    \begin{scope}[cm={1, 0, 0, 1, (0, -\sepY)}, align=center]
        \draw[->] (0, {\altoBlock / 2}) -- ++(\sepX, 0) 
            node[midway, below=2pt, scale=\escala] {Entran\\archivos\\(path)};
        
        \draw (\sepX, 0) rectangle ++(\anchoBlock, \altoBlock)
            node[midway, scale=\escala] {Preparando info\\para HUGO};
            
        \draw (\sepX, {\altoBlock + \sepY / 2}) 
            rectangle ++(\anchoBlock, {\altoBlock / 2})
                node[midway, scale=\escala] {BDD};
                
        \draw[->] ({\sepX + 0.5 * \anchoBlock}, \altoBlock) 
            -- ++(0, {\sepY / 2}) node[midway, right=2pt, scale=\escala]
                {Leer info};
    \end{scope}

\end{tikzpicture}
\end{document}
```

Lo importante de este flujo es que cada bloque procesa el archivo que se pasa por [[Standard input|stdin]] por lo que podemos usar el comando [[GNU parallel|GNU parallel]] para que se pueda usar todos los núcleos que tenga disponible, sin tener que integrar mi propia implementación de [[Thread|multithreading]]