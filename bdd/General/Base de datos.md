---
dia: 2023-11-28
materia: bdd
capitulo: 1
---
### Definición
---
Una base de datos es una colección ordenada de [[Dato|datos]] administrada por un [[Sistema|sistema]] de gestión

|                             | Base de datos relacionales | Base de datos NoSQL | Base de datos con series en el tiempo | Base de datos NewSQL | Base de datos en memoria | Base de datos distribuidas |
| --------------------------- | -------------------------- | ------------------- | ------------------------------------- | -------------------- | ------------------------ | -------------------------- |
| Tipos de datos soportados   | Datos estructurados        |                     |                                       |                      |                          |                            |
| Modelo de guardado de datos |                            |                     |                                       |                      |                          |                            |
| Caso de uso principal       |                            |                     |                                       |                      |                          |                            |
| ACID compliance*            |                            |                     |                                       |                      |                          |                            |
| Escalabilidad               |                            |                     |                                       |                      |                          |                            |
\* ACID es un acrónimo en inglés de Atomicity, Consistency, Isolation and Durability


![[Base de datos.webp]]

#### Transformación del [[Modelado de dominio|modelo de dominio]] a la base de datos
---

```tikz
\usetikzlibrary{matrix}
\begin{document}
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
	                fill=black,
	                text=white,
	                font=\bfseries
	            }
	        }
	    }
	}

	\begin{tikzpicture}
	
		\matrix (empleado) at (0, 0) [table] {
			Empleado \\
			DNI \\
			Nombre \\
			Apellido \\
			Sueldo \\
		};
	
		\draw[->, ultra thick] (2, 0) -- (3.5, 0);
	
		\matrix at (10, 0) [table] {
			DNI & Nombre & Apellido & Sueldo \\
			22222222 & Juan & Ceo & 100000 \\
			33333333 & Felipe & Codeo & 1 \\
		};
	
		\path (4, -1.5) -- (16, -1.5)
			node[midway, font=\bfseries] {= Empleado(DNI, Nombre, Apellido, sueldo)};
		\path (4, 1.5) -- (16, 1.5)
			node[midway, font=\bfseries] {Empleados};
	
	\end{tikzpicture}
\end{document}
```

##### Atributos multivaluados
---

```tikz
\usetikzlibrary{matrix}
\begin{document}
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
	                fill=black,
	                text=white,
	                font=\bfseries
	            }
	        }
	    }
	}

	\begin{tikzpicture}
	
		\matrix at (0, 0) [table, nodes={text width=6em}] {
			Empleado \\
			DNI \\
			Nombre \\
			Apellido \\
			Telefono \\
		};

		\draw[->, ultra thick] (1.6, 0) -- (2.75, 0);

		\matrix (empleado) at (4, 2) [table, nodes={text width=6em}] {
			Empleado \\
			DNI \\
			Nombre \\
			Apellido \\
		};

		\matrix (telefono) at (4, -2) [table, nodes={text width=6em}] {
			Telefono \\
			Número \\
		};

		\draw (empleado.south) -- (telefono.north)
			node[pos=0, below right=2pt] {$1$}
			node[pos=1, above right=2pt] {*};

		\draw[->, ultra thick] (5.75, 0) -- (6.75, 0);

		\path (8, 3.25) -- (16, 3.25)
			node[midway, font=\bfseries] {Empleados};
		\matrix (empleadoBdd) at (12, 2) [table, nodes={text width=6em}] {
			DNI & Nombre & Apellido & Sueldo \\
			22222222 & Juan & Ceo & 100000 \\
		};

		\path (8, -0.5) -- (16, -0.5)
			node[midway, font=\bfseries] {Teléfono};
		\matrix (telefonoBdd) at (12, -2) [table, nodes={text width=6em}] {
			Número & DNI \\
			1567548821 & 22222222 \\
			47906678 & 22222222 \\
		};

		\draw [ultra thick, rounded corners=1em] (empleadoBdd-2-1.west) 
			-- ++ (-0.5, 0)
			-- ++ (0, -1)
			-- ++ (8.5, 0)
			-- ++ (0, -2)
			-- (telefonoBdd-1-2.east);
	
	\end{tikzpicture}
\end{document}
```

##### Relaciones 1 a 1
---
![[Transformación relación 1 a 1 a una base de datos relacional.webp]]

##### Relaciones 1 a 0..*
---
![[Transformación relación 1 a 0..muchos a una base de datos relacional.webp]]

##### Relación 0..* a 0..*
---
![[Transformación relación 0..muchos a 0..muchos a una base de datos relacional.webp]]

##### Recursivas 0..1 a 0..1
---
![[Transformación recursivas 0..1 a 0..1 a una base de datos relacional.webp]]

##### Recursivas 0..1 a 0..*
---
![[Transformación recursivas 0..1 a 0..muchos a una base de datos relacional.webp]]

##### Recursividad muchos a muchos
---
![[Transformación recursivas muchos a muchos a una base de datos relacional.webp]]

##### Clases asociativas
---
![[Transformación clases asociativas a una base de datos relacional.webp]]

##### Herencia
---
![[Transformación herencia a una base de datos relacional.webp]]

