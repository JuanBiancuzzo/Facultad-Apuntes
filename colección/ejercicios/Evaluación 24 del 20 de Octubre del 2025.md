---
dia: 2026-10-17
tags:
  - colección/ejercicios/evaluacion
numero: 24
fecha: 2025-10-20
descripción: 1er Parcial
ejercicios:
  - 751
  - 752
  - 753
  - 754
  - 755
  - 756
  - 757
  - 758
  - 759
  - 760
---
# Contexto
---
La Empresa EBT I [[ingeniería electrónica/legal/Derecho societario/Sociedad Anónima|SA]] inició sus operaciones en Agosto $2023$ y la misma cierra [[Balance|Balance]] los días $30$ de Septiembre de cada año. EBT I SA es una empresa de servicios especializada en Criptografía y Seguridad Informática. Algunos datos a tener en cuenta
* Para simpliciar las cuentas, en este ejercicio no hay [[Impuesto al Valor Agregado (IVA)|IVA]]
* El [[Impuesto a las ganancias|impuesto a las ganancias]] es del $35\%$ de las utilidades antes del impuesto a las ganancias
* Las remuneraciones y cargas sociales se pagan el primer día hábil de cada mes
* Las [[Deuda|deudas fiscales se pagan el quinto día hábil de cada mes]]Las deudas financieras son de largo plazo, sin interes y se pagan $\$500,000$ cada $30$ de Septiembre
* Los [[ingeniería electrónica/legal/Introducción al derecho/Bien|bienes]] de uso se amortizan el $20\%$ de su valor original por año
* Las [[Inversión|inversiones]] se pueden convertir en efectivo $3$ meses después del cierre del ejercicio
* Los créditos por venta se cobran $1$ mes después del cierre del ejercicio

A continuación, se presenta el Balance

```tikz
\usetikzlibrary{fit, matrix}
\usetikzlibrary{math}

\begin{document}
\definecolor{azul}{RGB}{0, 127, 204}
\definecolor{rellenoAzul}{RGB}{204, 204, 255} 
\tikzset{ 
    table/.style={
	    matrix of nodes,    
	    text depth=0.5ex,
        text height=1.2em,
        nodes in empty cells,
            
        nodes={ 
	        align=center,
	        text width=6em
	    },        
        row 1/.style={ nodes={ fill=azul } },
		
        row 2/.style={  nodes={ fill=rellenoAzul, text=white, draw=black } },
        row 9/.style={  nodes={ fill=rellenoAzul, text=white, draw=black } },
        row 15/.style={ nodes={ fill=rellenoAzul, text=white, draw=black } },
		
        row 8/.style={  nodes={ fill=rellenoAzul, text=white, draw=white } },
        row 14/.style={ nodes={ fill=rellenoAzul, text=white, draw=white } },
        row 18/.style={ nodes={ fill=rellenoAzul, text=white, draw=white } },
		
		column 1/.style={
			nodes={ 
				text width=20em,
				align=left,
			}
		},
    }
}
\begin{tikzpicture}
	\tikzmath { \columnas = 3; \filas = 18; }
    \matrix (balance) [table] {
		Estado de situación patrimonial & 30/09/2025 & 30/09/2024 \\
		Activo & & \\
		Caja y bancos             & $1,500,000.0$ & $4,000,000.0$ \\
		Inversiones               & $2,400,000.0$ & $2,000,000.0$ \\
		Créditos por ventas       & $4,000,000.0$ &         $0.0$ \\
		Bienes de uso             & $2,000,000.0$ & $2,000,000.0$ \\
		Amortizaciones acumuladas &  $-400,000.0$ &         $0.0$ \\
		Total activo              & $9,500,000.0$ & $8,000,000.0$ \\
		
		Pasivo & & \\
		Deudas comerciales               & $2,000,000.0$ & $2,000,000.0$ \\
		Remuneraciones y cargas sociales & $1,500,000.0$ &         $0.0$ \\
		Deudas fiscales                  &   $175,000.0$ &         $0.0$ \\
		Deudas financieras               & $1,500,000.0$ & $2,000,000.0$ \\
		Total pasivo                     & $5,175,000.0$ & $4,000,000.0$ \\
		
		Patrimonio neto & & \\
		Capital social           & $4,000,000.0$ & $4,000,000.0$ \\
		Resultados del ejercicio &   $325,000.0$ &         $0.0$ \\
		Total patrimonio neto    & $4,325,000.0$ & $4,000,000.0$ \\
    };

	\foreach \columna in {1, ..., \columnas} {
		\draw (balance-1-\columna.north -| balance-1-\columna.west)
			rectangle (balance-\filas-\columna.south -| balance-\filas-\columna.east)
				node[midway, align=center] {};
	}
	
\end{tikzpicture}
\end{document}
``` 

Y el [[Cuadro de resultados|Cuadro de resultados]] al $30$ de Septiembre de $2025$

```tikz
\usetikzlibrary{fit, matrix}
\usetikzlibrary{math}

\begin{document}
\definecolor{azul}{RGB}{0, 127, 204}
\definecolor{rellenoAzul}{RGB}{204, 204, 255} 
\tikzset{ 
    table/.style={
	    matrix of nodes,    
	    text depth=0.5ex,
        text height=1.2em,
        nodes in empty cells,
            
        nodes={ 
	        align=center,
	        text width=6em
	    },        
        row 1/.style={ nodes={ fill=azul } },
		
        row 4/.style={  nodes={ fill=rellenoAzul, text=white, draw=black } },
        row 8/.style={  nodes={ fill=rellenoAzul, text=white, draw=black } },
        row 11/.style={ nodes={ fill=rellenoAzul, text=white, draw=black } },
        row 14/.style={ nodes={ fill=rellenoAzul, text=white, draw=black } },
        row 16/.style={ nodes={ fill=rellenoAzul, text=white, draw=black } },
		
		column 1/.style={
			nodes={ 
				text width=26em,
				align=left,
			}
		},
    }
}
\begin{tikzpicture}
	\tikzmath { \columnas = 2; \filas = 16; }
    \matrix (resultados) [table] {
		Cuadro de resultados EBT I 30/09/2024 al 30/09/2025 & \\
		Ventas                                     &  $4,000,000.0$ \\
		Costo de ventas                            & $-2,000,000.0$ \\
		Utilidad bruta                             &  $2,000,000.0$ \\
		Sueldos de administración y ventas         & $-1,000,000.0$ \\
		Cargas sociales de administración y ventas &   $-500,000.0$ \\
		Amortizaciones acumuladas                  &   $-400,000.0$ \\
		Utilidad de explotación                    &    $100,000.0$ \\
		Ingresos secundarios                       &          $0.0$ \\
		Gastos secundarios                         &          $0.0$ \\
		Utilidad operativa                         &    $100,000.0$ \\
		Intereses ganados                          &    $400,000.0$ \\
		Intereses pagados                          &          $0.0$ \\
		Utilidad antes de I.G.                     &    $500,000.0$ \\
		Impuesto a las ganancias ($35\%$)          &   $-175,000.0$ \\
		Utilidad neta                              &    $325,000.0$ \\
    };

	\foreach \columna in {1, ..., \columnas} {
		\draw (resultados-1-\columna.north -| resultados-1-\columna.west)
			rectangle (resultados-\filas-\columna.south -| resultados-\filas-\columna.east)
				node[midway, align=center] {};
	}
	
\end{tikzpicture}
\end{document}
``` 


# Ejercicio
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/coleccion/ejercicios/guia", { ejercicios: actual["ejercicios"] });
```

