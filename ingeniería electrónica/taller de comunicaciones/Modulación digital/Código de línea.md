---
dia: 2026-02-21
etapa: empezado
referencias:
  - "1104"
aliases: 
  - Código nonreturn-to-zero#Nonreturn-to-zero
  - Código NRZ#Nonreturn-to-zero
  - Código return-to-zero#Return-to-zero
  - Código RZ#Return-to-zero
  - Código phase encoded#Phase encoded
  - Código multilevel binary#Multilevel binary
tags:
  - nota/facultad
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Modulación-digital
vinculoFacultad:
  - tema: Modulación digital
    capitulo: 3
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Estas son formas de ondas, de valor unitario, para poder moduladas según su amplitud. Se las puede separar en $4$ grupos
 * Nonreturn-to-zero (NRZ)
 * Return-to-zero (RZ)
 * Phase encoded
 * Multilevel binary

## Nonreturn-to-zero
---
Este es el grupo más común, y se puede separar en $3$ subgrupos
* NRZ-L
    * Donde L significa nivel (level)
    * Donde el símbolo $1$ representa la señal positiva, y $0$ la señal negativa
* NRZ-M
    * Donde M significa marca 
    * Donde el símbolo $1$ representa un cambio de signo, y el $0$ no
* NRZ-S
    * Donde S significa espacio (space)
    * Donde el símbolo $0$ representa un cambio de signo, y el $1$ no

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.1, transform shape, ultra thick]
    \def\senial {{1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1}}
	\tikzmath {
        \mas = 1; \menos = -1; \alto = 1.5 * (\mas - \menos);
        \largoPorSimb = 0.95; \scale = 0.9; \sep = 0.1;
        
        \largo = dim(\senial);
	}
    
    \foreach \i [parse=true] in {0, ..., \largo - 1} {
        \tikzmath { \bit = \senial[\i]; }
        
        \draw[thin] ({\i * \largoPorSimb}, {\alto / 2}) 
            -- ++(0, {-3 * \alto});
        \path ({(\i + 0.5) * \largoPorSimb}, {\alto / 2})
            node[above=2pt, scale=\scale] {$\bit$};
    }
    \draw[thin] ({\largo * \largoPorSimb}, {\alto / 2}) 
        -- ++(0, {-3 * \alto});
        
    \coordinate (nrz-l) at (0, 0);
    \coordinate (nrz-m) at (0, -\alto);
    \coordinate (nrz-s) at (0, {-2 * \alto});
    
    \foreach \coor/\texto in {nrz-l/NRZ-L, nrz-m/NRZ-M, nrz-s/NRZ-S} {
        \draw[dashed] ($ (\coor) + (-\sep, 0) $) 
            -- ++({\largo * \largoPorSimb + 2 * \sep}, 0);
        \path (\coor) node[left=1cm, scale=\scale] {\texto};
        \draw ($ (\coor) + (-\sep, \mas) $) 
                node[left=2pt, scale=\scale] {$+1$}
            -- ++({2 * \sep}, 0);
        \draw ($ (\coor) + (-\sep, \menos) $) 
                node[left=2pt, scale=\scale] {$-1$}
            -- ++({2 * \sep}, 0);
    }
        
    \begin{scope}[cm={1, 0, 0, 1, (nrz-l)}]
        \path (0, \mas) node (temp) {};
        \foreach \i [parse=true] in {0, ..., \largo - 1} {
            \tikzmath { 
                \bit = \senial[\i]; 
                \dir = (\bit == 1) ? \mas : \menos;
            } 
            \draw (temp.center) -- (temp |- 0, \dir)
                -- ++(\largoPorSimb, 0) node (temp) {};
        }
    \end{scope}

    \foreach \coor/\bitCambio in {nrz-m/1, nrz-s/0} {
        \begin{scope}[cm={1, 0, 0, 1, (\coor)}]
            \path (0, \menos) node (temp-mantiene) {};
            \path (0, \mas) node (temp-cambiar) {};
            
            \foreach \i [parse=true] in {0, ..., \largo - 1} {
                \tikzmath { 
                    \bit = \senial[\i]; 
                    \dir = (\bit == \bitCambio) ? "cambiar" : "mantiene";
                } 
                \draw (temp-mantiene.center) -- (temp-\dir.center)
                    -- ++(\largoPorSimb, 0) node (temp-proximo) {};
    
                \ifnum\bit=\bitCambio
                    \path ($ (temp-mantiene.center) + (\largoPorSimb, 0) $)
                        node (temp-cambiar) {};
                \else
                    \path ($ (temp-cambiar.center) + (\largoPorSimb, 0) $)
                        node (temp-cambiar) {};
                \fi
                
                \path (temp-proximo.center) node (temp-mantiene) {};
            }
        \end{scope}
    }
    
\end{tikzpicture}
\end{document}
```

## Return-to-zero
---
Este se aplica en [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Transmisión en banda base|transmisión en banda base]] y en guardar archivos de forma magnética, y se puede separar en $3$ subgrupos
* RZ-unipolar
    * El símbolo $1$ se representa con un pulso, y el símbolo $0$ se representa con la ausencia de un pulso
* RZ-bipolar
    * El símbolo $1$ se representa con un pulso positivo, y el símbolo $0$ se representa con un pulso negativo
    * Tiene la ventaja que el tiempo entre símbolos esta dada por el flanco de la señal
* RZ-AMI
    * El símbolo $1$ se representa con un pulso, de forma alternada, similar al NRZ-M, y el símbolo $0$ se representa con la ausencia de un pulso

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.1, transform shape, ultra thick]
    \def\senial {{1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1}}
	\tikzmath {
        \mas = 1; \menos = -1; \alto = 1.5 * (\mas - \menos);
        \largoPorSimb = 0.95; \scale = 0.9; \sep = 0.1;
        
        \largo = dim(\senial);
	}
    
    \foreach \i [parse=true] in {0, ..., \largo - 1} {
        \tikzmath { \bit = \senial[\i]; }
        
        \draw[thin] ({\i * \largoPorSimb}, {\alto / 2}) 
            -- ++(0, {-3 * \alto});
        \path ({(\i + 0.5) * \largoPorSimb}, {\alto / 2})
            node[above=2pt, scale=\scale] {$\bit$};
    }
    \draw[thin] ({\largo * \largoPorSimb}, {\alto / 2}) 
        -- ++(0, {-3 * \alto});
        
    \coordinate (rz-uni) at (0, 0);
    \coordinate (rz-bi) at (0, -\alto);
    \coordinate (rz-ami) at (0, {-2 * \alto});
    
    \draw[dashed] ($ (rz-uni) + (-\sep, \menos) $) 
        -- ++({\largo * \largoPorSimb + 2 * \sep}, 0);
    \path (rz-uni) node[left=1cm, align=center, scale=\scale] {RZ\\Unipolar};
    \draw ($ (rz-uni) + (-\sep, \mas) $) 
            node[left=2pt, scale=\scale] {$+1$}
        -- ++({2 * \sep}, 0);
    \draw ($ (rz-uni) + (-\sep, \menos) $) 
            node[left=2pt, scale=\scale] {$0$}
        -- ++({2 * \sep}, 0);
    
    \foreach \coor/\texto in {rz-bi/RZ\\Bipolar, rz-ami/RZ-AMI} {
        \draw[dashed] ($ (\coor) + (-\sep, 0) $) 
            -- ++({\largo * \largoPorSimb + 2 * \sep}, 0);
        \path (\coor) node[left=1cm, align=center, scale=\scale] {\texto};
        \draw ($ (\coor) + (-\sep, \mas) $) 
                node[left=2pt, scale=\scale] {$+1$}
            -- ++({2 * \sep}, 0);
        \draw ($ (\coor) + (-\sep, \menos) $) 
                node[left=2pt, scale=\scale] {$-1$}
            -- ++({2 * \sep}, 0);
    }
        
    \begin{scope}[cm={1, 0, 0, 1, (rz-uni)}]
        \path (0, \mas) node (temp) {};
        \foreach \i [parse=true] in {0, ..., \largo - 1} {
            \tikzmath { 
                \bit = \senial[\i]; 
                \dir = (\bit == 1) ? \mas : \menos;
            } 
            \draw (temp.center) -- (temp |- 0, \dir)
                -- ++({\largoPorSimb / 2}, 0)
                -- ($ (temp |- 0, \menos) + ({\largoPorSimb / 2}, 0) $)
                -- ++({\largoPorSimb / 2}, 0) node (temp) {};
        }
    \end{scope}
    
    \begin{scope}[cm={1, 0, 0, 1, (rz-bi)}]
        \path (0, \mas) node (temp) {};
        \foreach \i [parse=true] in {0, ..., \largo - 1} {
            \tikzmath { 
                \bit = \senial[\i]; 
                \dir = (\bit == 1) ? \mas : \menos;
            } 
            \draw (temp.center) -- (temp |- 0, \dir)
                -- ++({\largoPorSimb / 2}, 0)
                -- ($ (temp |- 0, 0) + ({\largoPorSimb / 2}, 0) $)
                -- ++({\largoPorSimb / 2}, 0) node (temp) {};
        }
    \end{scope}
    
    \begin{scope}[cm={1, 0, 0, 1, (rz-ami)}]
        \tikzmath { \bitCambio = 1; }
        \path (0, \menos) node (temp-mantiene) {};
        \path (0, 0) node (temp-nulo) {};
        \path (0, \mas) node (temp-cambiar) {};
        
        \foreach \i [parse=true] in {0, ..., \largo - 1} {
            \tikzmath { 
                \bit = \senial[\i]; 
                \dir = (\bit == \bitCambio) ? "cambiar" : "nulo";
                \opuesto = (\bit == \bitCambio) ? "mantiene" : "nulo";
            } 
            \draw ({\i * \largoPorSimb}, 0)
                -- ++({0.25 * \largoPorSimb}, 0)
                -- ++($ (temp-\dir -| 0, 0) $)
                -- ++({0.5 * \largoPorSimb}, 0)
                -- ++($ (temp-\opuesto -| 0, 0) $)
                -- ++({0.25 * \largoPorSimb}, 0);

            \ifnum\bit=\bitCambio
                \path (temp-cambiar.center) node (temp) {};
                \path (temp-mantiene.center) node (temp-cambiar) {};
                \path (temp.center) node (temp-mantiene) {};
            \fi
        }
    \end{scope}
    
\end{tikzpicture}
\end{document}
```

## Phase encoded
---
Este se aplica en guardar archivos de forma magnética y en comunicaciones ópticas, y se puede separar en $4$ subgrupos
* Bi-$\phi$-L o Manchester coding
    * Donde L significa nivel (level)
    * Donde el símbolo $1$ representa el cambio de la señal de positivo a negativo, y $0$ el cambio de la señal de negativo a positivo
* Bi-$\phi$-M
    * Donde M significa marca 
    * Donde al principio del intervalo, se ejecuta un cambio de signo, el símbolo $1$ representa la transición en el intervalo cambiando el signo, el símbolo $0$ no cambia el signo
* Bi-$\phi$-S
    * Donde S significa espacio (space)
    * Donde al principio del intervalo, se ejecuta un cambio de signo, el símbolo $0$ representa la transición en el intervalo cambiando el signo, el símbolo $1$ no cambia el signo
* Delay Modulation (DM) o Miller coding
    * Donde el símbolo $1$ cambia el signo en la duración de la transición, y el $0$ no lo cambia, excepto si el anterior fue un $0$

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.1, transform shape, ultra thick]
    \def\senial {{1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1}}
	\tikzmath {
        \mas = 1; \menos = -1; \alto = 1.5 * (\mas - \menos);
        \largoPorSimb = 0.95; \scale = 0.9; \sep = 0.1;
        
        \largo = dim(\senial); \cantCodigos = 4;
	}
    
    \foreach \i [parse=true] in {0, ..., \largo - 1} {
        \tikzmath { \bit = \senial[\i]; }
        
        \draw[thin] ({\i * \largoPorSimb}, {\alto / 2}) 
            -- ++(0, {-\cantCodigos * \alto});
        \path ({(\i + 0.5) * \largoPorSimb}, {\alto / 2})
            node[above=2pt, scale=\scale] {$\bit$};
    }
    \draw[thin] ({\largo * \largoPorSimb}, {\alto / 2}) 
        -- ++(0, {-\cantCodigos * \alto});
        
    \coordinate (bi-phi-l) at (0, 0);
    \coordinate (bi-phi-m) at (0, -\alto);
    \coordinate (bi-phi-s) at (0, {-2 * \alto});
    \coordinate (dm) at (0, {-3 * \alto});
    
    \foreach \coor/\texto in {bi-phi-l/Bi-$\phi$-L, bi-phi-m/Bi-$\phi$-M, bi-phi-s/Bi-$\phi$-S, dm/Delay\\modulation} {
        \draw[dashed] ($ (\coor) + (-\sep, 0) $) 
            -- ++({\largo * \largoPorSimb + 2 * \sep}, 0);
        \path (\coor) node[left=1cm, align=center, scale=\scale] {\texto};
        \draw ($ (\coor) + (-\sep, \mas) $) 
                node[left=2pt, scale=\scale] {$+1$}
            -- ++({2 * \sep}, 0);
        \draw ($ (\coor) + (-\sep, \menos) $) 
                node[left=2pt, scale=\scale] {$-1$}
            -- ++({2 * \sep}, 0);
    }
        
    \begin{scope}[cm={1, 0, 0, 1, (bi-phi-l)}]
        \path (0, \mas) node (temp) {};
        \foreach \i [parse=true] in {0, ..., \largo - 1} {
            \tikzmath { 
                \bit = \senial[\i]; 
                \dir = (\bit == 1) ? \mas : \menos;
                \invertir = (\bit == 1) ? -\mas + \menos : \mas - \menos;
            } 
            
            \draw (temp.center) 
                -- (temp.center |- 0, \dir) 
                -- ++({\largoPorSimb / 2}, 0)
                -- ++(0, \invertir)
                -- ++({\largoPorSimb / 2}, 0)
                    node (temp) {};
        }
    \end{scope}

    \foreach \coor/\bitCambio in {bi-phi-m/1, bi-phi-s/0} {
        \begin{scope}[cm={1, 0, 0, 1, (\coor)}]
            \path (0, \menos) node (temp-final) {};
            \path (0, \menos) node (temp-mantiene) {};
            \path (0, \mas) node (temp-cambiar) {};
            
            \foreach \i [parse=true] in {0, ..., \largo - 1} {
                \tikzmath { 
                    \bit = \senial[\i]; 
                    \dir = (\bit == \bitCambio) ? "cambiar" : "mantiene";
                } 
    
                \ifnum\bit=\bitCambio
                    \draw (temp-final.center) 
                        -- (temp-mantiene.center)
                        -- ++({\largoPorSimb / 2}, 0) node (temp) {}
                        -- (temp-cambiar -| temp)
                        -- ($ (temp-cambiar) + (\largoPorSimb, 0) $)
                            node (temp-final) {};
                
                    \path ($ (temp-mantiene.center) + (\largoPorSimb, 0) $)
                        node (temp-mantiene) {};
                    \path ($ (temp-cambiar.center) + (\largoPorSimb, 0) $)
                        node (temp-cambiar) {};
                \else
                    \draw (temp-final.center) 
                        -- (temp-mantiene.center)
                        -- ++(\largoPorSimb, 0) 
                        -- ($ (temp-cambiar.center) + (\largoPorSimb, 0) $)
                            node (temp-final) {};
                    
                    \path (temp-mantiene) node (temp) {};
                    \path ($ (temp-cambiar.center) + (\largoPorSimb, 0) $)
                        node (temp-mantiene) {};
                    \path ($ (temp.center) + (\largoPorSimb, 0) $)
                        node (temp-cambiar) {};
                \fi
                
            }
        \end{scope}
    }
    
    \begin{scope}[cm={1, 0, 0, 1, (dm)}]
        \path (0, \mas) node (temp-final) {};
        \path (0, \mas) node (temp-mantiene) {};
        \path (0, \menos) node (temp-cambiar) {};
        
        \foreach \i [parse=true] in {0, ..., \largo - 1} {
            \tikzmath { 
                \bit = \senial[\i]; 
                \nextI = (\i < \largo - 1) ? int(\i + 1) : int(\i);
                \nextBit = (\i < \largo - 1) ? \senial[\nextI] : 1;
                
                \hayCambio = (\bit == 1 || (\bit == 0 && \nextBit == 0))
                    ? 1 : 0;
            } 
            
            \ifnum\bit=1
                \draw (temp-final.center) 
                    -- (temp-mantiene.center) 
                    -- ++({\largoPorSimb / 2}, 0) node (temp) {}
                    -- (temp-cambiar -| temp)
                    -- ($ (temp-cambiar) + (\largoPorSimb, 0) $)
                        node (temp-final) {};
            \else
                \draw (temp-final.center) 
                    -- (temp-mantiene.center) 
                    -- ++(\largoPorSimb, 0) 
                        node (temp-final) {};
            \fi
            
            \ifnum\hayCambio=1
                \path (temp-mantiene) node (temp) {};
                \path ($ (temp-cambiar.center) + (\largoPorSimb, 0) $)
                    node (temp-mantiene) {};
                \path ($ (temp.center) + (\largoPorSimb, 0) $)
                    node (temp-cambiar) {};
            \else
                 \path ($ (temp-mantiene.center) + (\largoPorSimb, 0) $)
                    node (temp-mantiene) {};
                \path ($ (temp-cambiar.center) + (\largoPorSimb, 0) $)
                    node (temp-cambiar) {};               
            \fi
            
        }
    \end{scope}
    
    
\end{tikzpicture}
\end{document}
```

## Multilevel binary
---
Representan los códigos que utilizan más de $2$ niveles para mandar la información, donde Return to zero bipolar y  Return to zero AMI están incluidos en estos


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```