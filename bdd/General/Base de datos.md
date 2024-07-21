---
dia: 2023-11-28
capitulo: 1
tags:
  - bdd/General
---
### Definición
---
Una base de datos es una colección ordenada de [[Dato|datos]] administrada por un [[Sistema|sistema]] de gestión

#### Tipos de base de datos
---
Tenemos lo siguientes tipos de base de datos
* [[Base de datos relacionales|Base de datos relacionales]] ![[Base de datos relacionales#Características]]
* [[Base de datos NoSQL|Base de datos NoSQL]] ![[Base de datos NoSQL#Características]]
* [[Base de datos con series de tiempo|Base de datos con series de tiempo]] ![[Base de datos con series de tiempo#Características]]
* [[Base de datos NewSQL|Base de datos NewSQL]] ![[Base de datos NewSQL#Características]]
* [[Base de datos en memoria|Base de datos en memoria]] ![[Base de datos en memoria#Características]]
* [[Base de datos distribuidos|Base de datos distribuidos]] ![[Base de datos distribuidos#Características]]

#### Transformación del [[Modelado de dominio|modelo de dominio]] a la base de datos
---

```tikz
\usetikzlibrary{matrix}
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

		\draw[thick] (empleado-4-1.south) -- (telefono-1-1.north)
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

```tikz
\usetikzlibrary{matrix}
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
	
		\matrix (persona) at (0, 0) [table] {
			Persona \\
			DNI \\
			Nombre \\
		};
	
		\matrix (auto) at (8, 0) [table] {
			Auto \\
			Patente \\
			Modelo \\
		};

		\draw[thick] (persona-2-1.east) -- (auto-2-1.west)
			node[pos=0, above right=2pt] {1}
			node[pos=1, above left=2pt] {1};
	
		\path (persona.south) -- ++(0, -1)
			node[font=\bfseries, align=center] 
				{Persona(DNI, Nombre, PatenteAuto) \\ Auto(Patente, Modelo)};
		\path (auto.south) -- ++(0, -1) 
			node[font=\bfseries, align=center] {Persona(DNI, Nombre) \\ Auto(Patente, Modelo, DNI)};
	
	\end{tikzpicture}
\end{document}
```

##### Relaciones 1 a 0..*
---

```tikz
\usetikzlibrary{matrix}
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
	
		\matrix (oficina) at (0, 1) [table] {
			Oficina \\
			IdOficina \\
			Capacidad \\
			Ocupación \\
			Ubicación \\
		};
	
		\matrix (persona) at (6, 1) [table] {
			Persona \\
			DNI \\
			Nombre \\
			Apellido \\
			Sueldo \\
		};

		\draw[thick] (oficina-2-1.east) -- (persona-2-1.west)
			node[pos=0, above right=2pt] {1}
			node[pos=1, above left=2pt] {0..*};

		\draw[ultra thick, ->] (3, 0) -- ++(0, -2);
	
		\path (-1, -2.75) -- (7, -2.75)
			node[midway, font=\bfseries] {Oficina};
		\matrix (empleadoBdd) at (3, -4) [table, nodes={text width=6em}] {
			ID & Capacidad & Ocupación & Ubicación \\
			PM1 & 150 & 100 & Pto Mader \\
		};

		\path (-1, -6.5) -- (7, -6.5)
			node[midway, font=\bfseries] {Empleado};
		\matrix (telefonoBdd) at (3, -8) [table, nodes={text width=6em}] {
			DNI & Nombre & Apellido & Sueldo & ID \\
			22222222 & Juan & Ceo & 100000 & PM1 \\
			33333333 & Felipe & Codeo & 1 & PM1 \\
		};

		\draw [ultra thick, rounded corners=1em] (empleadoBdd-1-1.west) 
			-- ++ (-0.7, 0)
			-- ++ (0, -1.7)
			-- ++ (12, 0)
			-- ++ (0, -1.9)
			-- (telefonoBdd-1-5.east);
	
	\end{tikzpicture}
\end{document}
```

##### Relación 0..* a 0..*
---

```tikz
\usetikzlibrary{matrix}
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
	
		\matrix (actor) at (0, 0) [table] {
			Actor \\
			DNI \\
		};
	
		\matrix (pelicula) at (5, 0) [table] {
			Película \\
			Código \\
		};

		\draw[thick] (actor-2-1.east) -- (pelicula-2-1.west)
			node[pos=0, above right=2pt] {0..*}
			node[pos=1, above left=2pt] {0..*}
			node[midway, below=1em] (puntoMedio) {};

		\draw[->, ultra thick] (puntoMedio) -- ++(0, -1.5)
			node[below=1em, font=\bfseries, align=center] 
				{Actor(DNI) \\ Pelicula(Código) \\ Actuación(DNI, Código)};

		\draw[->, ultra thick] (7, -1) -- ++(1, 0);

		\path (9, 1.25) -- ++ (2, 0)
			node[midway, font=\bfseries] {Actor};
		\matrix at (10, 0) [table, nodes={text width=6em}] {
			DNI \\
			22222222 \\
			33333333 \\
		};

		\path (13, 1.25) -- ++ (2, 0)
			node[midway, font=\bfseries] {Película};
		\matrix at (14, 0) [table, nodes={text width=6em}] {
			Código \\
			LUJ8 \\
			A4E \\
		};

		\path (10, -1.8) -- ++ (4, 0)
			node[midway, font=\bfseries] {Actuación};
		\matrix at (12, -3.5) [table, nodes={text width=6em}] {
			DNI & Código \\
			22222222 & LUJ8 \\
			33333333 & LUJ8 \\
			33333333 & A4E \\
		};

	\end{tikzpicture}
\end{document}
```

##### Recursivas 0..1 a 0..1
---

```tikz
\usetikzlibrary{matrix}

\begin{document}

	\definecolor{azul}{RGB}{23, 65, 125}
	
	\begin{tikzpicture}
	
		\matrix (persona) at (0, 0) [
			matrix of nodes,
			text depth=0.5ex, 
			text height=2ex,
			nodes={
	            rectangle,
	            align=center,
	            draw=black,
	            text width=8em,
	            font=\bfseries
	        },
	        row 1/.style={
	            nodes={
	                fill=azul,
	                font=\bfseries
	            }
	        }
		] {
			Persona \\
			DNI \\
		};

		\draw [thick, rounded corners=1em] (persona-2-1.west)
			-- ++(-0.8, 0) 
				node[midway, above=2pt] {0..1}
			-- ++(0, -1)
			-- ++(4.7, 0)
				node[midway, below=2pt] {Es cónuyge de}
			-- ++(0, 1)
			-- (persona-2-1.east)
				node[midway, above=2pt] {0..1};

		\draw[->, ultra thick] (3, 0) -- ++(2, 0)
			node[right=1em, font=\bfseries] {Persona(DNI, DNI-Cónuyge)};
	
	\end{tikzpicture}
\end{document}
```

##### Recursivas 0..1 a 0..*
---

```tikz
\usetikzlibrary{matrix}
\begin{document}

	\definecolor{azul}{RGB}{23, 65, 125}
	
	\begin{tikzpicture}
	
		\matrix (persona) at (0, 0) [
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
		] {
			Persona \\
			DNI \\
		};

		\draw [thick, rounded corners=1em] (persona-2-1.west)
			-- ++(-0.8, 0) 
				node[midway, above=2pt] {0..1}
			-- ++(0, -1)
			-- ++(4.7, 0)
				node[midway, below=2pt] {Es madre de}
			-- ++(0, 1)
			-- (persona-2-1.east)
				node[midway, above=2pt] {0..*};

		\draw[->, ultra thick] (3, 0) -- ++(2, 0)
			node[right=1em, font=\bfseries] {Persona(DNI, DNI-Madre)};
	
	\end{tikzpicture}
\end{document}
```

##### Recursividad muchos a muchos
---

```tikz
\usetikzlibrary{matrix}
\begin{document}

	\definecolor{azul}{RGB}{23, 65, 125}
	
	\begin{tikzpicture}
	
		\matrix (pieza) at (0, 0) [
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
		] {
			Pieza \\
			Código \\
		};

		\draw [thick, rounded corners=1em] (pieza-2-1.west)
			-- ++(-0.8, 0) 
				node[midway, above=2pt] {0..*}
			-- ++(0, -1)
				node[midway, left=2pt] {Compuesto}
			-- ++(4.7, 0)
				node[midway, below=2pt] {Tiene}
			-- ++(0, 1)
				node[midway, right=2pt] {Componente}
			-- (pieza-2-1.east)
				node[midway, above=2pt] {0..*};

		\draw[->, ultra thick] (3, 0) -- ++(2, 0)
			node[right=1em, font=\bfseries, align=center] 
				{Pieza(Código) \\ Compueso(Codigo-Compuesto, \\ Código-Componente)};
	
	\end{tikzpicture}
\end{document}
```

##### Clases asociativas
---

```tikz
\usetikzlibrary{matrix}
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
	
		\matrix (cliente) at (0, 0) [table] {
			Cliente \\
			CUIL \\
		};
	
		\matrix (producto) at (6, 0) [table] {
			Producto \\
			Código \\
		};

		\matrix (venta) at (3, -2.5) [table] {
			Venta \\
			Cantidad \\
		};

		\draw[thick] (cliente-2-1.east) -- (producto-2-1.west)
			node[pos=0, above right=2pt] {0..*}
			node[pos=1, above left=2pt] {0..*}
			node[midway, above=2pt] {Compra}
			node[midway] (puntoMedio) {};

		\draw[thick, dashed] (venta-1-1.north) -- (puntoMedio);

		\draw[->, ultra thick] (8, 0) -- ++(2, 0)
			node[right=1em, font=\bfseries, align=center] 
				{Cliente(CUIL) \\ Producto(Codigo) \\ Venta(Cantidad, CUIL, Código)};
	
	\end{tikzpicture}
\end{document}
```

##### Herencia
---

```tikz
\usetikzlibrary{matrix}
\usetikzlibrary {arrows.meta}

\begin{document}

	\definecolor{azul}{RGB}{23, 65, 125}
	
	\tikzset{ 
	    table/.style={
		    matrix of nodes,    
		    text depth=0.5ex,
	        text height=2ex,
	        nodes in empty cells,
	            
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
	
		\matrix (persona) at (0, 4.5) [table] {
			Persona \\
			- CUIL {id} \\
		};
	
		\matrix (fisica) at (-4, 1) [table, nodes={text width=10em}] {
			Física \\
			- ApellidoYNombre \\
			- fechaNacimiento \\
		};

		\matrix (juridica) at (4, 1) [table, nodes={text width=10em}] {
			Jurídica \\
			- razonSocial (u) \\
		};

		\draw[thick] (fisica-1-1.north) 
			-- (-4, 2.5) 
			-- (4, 2.5)
				node[midway] (puntoMedio) {}
			-- (juridica-1-1.north);
		\draw[thick] (puntoMedio) -- ++(0, 0.2)
			-- ++(0, -0.2);

		\draw[thick, -{Stealth[inset=0pt, length=15pt, open, angle'=45]}]
			(puntoMedio) -- (persona-2-1.south);

		\draw[ultra thick, ->] (0, 0) -- ++(0, -1.5);

		\matrix (personaBdd) at (-5, -2.5) [table] {
			 CUIL \\
			 \\
		};
		\path (personaBdd.north) 
			node[above=2pt, font=\bfseries] {Persona};

		\matrix (juridicaBdd) at (4.5, -2.5) [table] {
			 CUIL & RazónSocial \\
			 & \\
		};
		\path (juridicaBdd.north) 
			node[above=2pt, font=\bfseries] {Persona Jurídica};

		\draw[ultra thick] (personaBdd-1-1.east) -- (juridicaBdd-1-1.west);

		\matrix (fisicaBdd) at (0, -5) [table, nodes={text width=10em}] {
			 CUIL & ApellidoYNombre & FechaNacimiento \\
			 & & \\
		};
		\path (fisicaBdd.north) 
			node[above=2pt, font=\bfseries] {Persona Física};

		\draw [ultra thick, rounded corners=1em] (personaBdd-1-1.west) 
			-- ++(-0.7, 0)
			-- ++(0, -2.5)
			-- (fisicaBdd-1-1.west);

		\path (fisicaBdd.south) -- ++(0, -0.5)
			node[below=2pt, align=center, font=\bfseries]
				{Persona(CUIL) \\ PersonaFísica(CUIL, apellidoYNombre, fechaNacimiento) \\ PersonaJurídica(CUIL, razónSocial)};

	\end{tikzpicture}
\end{document}
```