---
dia: 2025-07-25
tags:
  - proyecto-práctico/Own-wiki
  - nota/proyecto
---
# Progreso
---
Como primer paso estoy intentando generar una [[Base de datos|base de datos]] en la cual tenga todo el contenido de estos [[Archivo|archivos]]. Para esto, leí todos los archivos de la [[Vault|vault de obsidian]], y  obtengo toda su [[Frontmatter|metadata]] (actualmente la información que se encuentre en el contenido del archivo no lo estoy tocando) y a partir de esto voy creando tablas en una base de datos [[MySQL|MySQL]], estas tablas son

```tikz
\usepackage{amssymb}
\usetikzlibrary{matrix}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document}

	\definecolor{azul}{RGB}{23, 65, 125}
	
	\tikzset{ 
	    table/.style={
		    matrix of nodes,    
		    text depth=0.5ex,
	        text height=2ex,
	            
	        nodes={
	            rectangle,
	            draw=black,
	            align=center,
	            text width=8em,
	            font=\bfseries
	        },        
	
	        row 1/.style={
	            nodes={
	                fill=azul,
	                draw=black,
	                font=\bfseries
	            }
	        }
	    }
	}

	\begin{tikzpicture}
    	\tikzmath { \ancho = 3; \sep = 2; }
    	\coordinate (pos_archivos) at (0, 0);
    	\matrix (archivos) at (pos_archivos) [table, nodes={text width=\ancho cm}]
        	{ archivos \\ id \\ path \\ };
    	\tikzmath { 
        	coordinate \izq, \der, \arr, \aba;
        	\izq = (archivos-1-1.east); \der = (archivos-1-1.west);
            \arr = (archivos-1-1.north); \aba = (archivos-1-1.south);
        	\anchoEx = abs(\derx - \izqx) / 28.45; % de pt a cm
        	\altoEx = abs(\arry - \abay) / 28.45; % de pt a cm
    	}
        
        \coordinate (pos_tags) at ($ (archivos) + ({\sep + \anchoEx}, 0) $);
        \matrix (tags) at (pos_tags) [table, nodes={text width=\ancho cm}] 
            { tags \\ tag \\ idArchivo \\ };
        
        \coordinate (pos_autores) at ($ (archivos) + (0, {-\sep - 3.5*\altoEx}) $);
        \matrix (autores) at (pos_autores) [table, nodes={text width=\ancho cm}] 
            { autores \\ id \\ nombre \\ apellido \\ };
            
        \coordinate (pos_libros) at ($ (autores) + (0, {-\sep - 6.5*\altoEx}) $);
        \matrix (libros) at (pos_libros) [table, nodes={text width=\ancho cm}]  { 
            libros \\ id \\ titulo \\ subtitulo \\ anio \\ idEditoral \\ 
            edicion \\ volumen \\ url \\
        };
        
        \coordinate (pos_editoriales) at 
            ($ (libros) + ({2 + \anchoEx}, {-3 * \altoEx}) $);
        \matrix (editoriales) at (pos_editoriales) [table, nodes={text width=\ancho cm}] 
            { editoriales \\ id \\ editorial \\ };
            
        \coordinate (pos_autor_lib) at ($ (autores) + ({\sep + \anchoEx}, 0) $);
        \matrix (autor_lib) at (pos_autor_lib) [table, nodes={text width=\ancho cm}] 
            { autoresLibro \\ idAutor \\ idLibro \\ };
        
        
        \begin{scope}[ultra thick]
            \draw[->] (tags-3-1.west) -- (archivos-2-1.east);
            \draw[->] (libros-6-1.east) -- (editoriales-2-1.west);
        
            \draw[->] (autor_lib-2-1.west) -- (autores-2-1.east);
            \draw[->] (autor_lib-3-1.west) -- (libros-2-1.east);
        \end{scope}
	
	\end{tikzpicture}
\end{document}
```


![[BDD de own_wiki.svg]]