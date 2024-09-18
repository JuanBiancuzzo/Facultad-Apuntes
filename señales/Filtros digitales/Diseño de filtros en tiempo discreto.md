---
dia: 2024-07-05
tags:
  - señales/Filtros-digitales
  - nota/facultad
---
# Definición
---
Las aplicaciones de [[Filtro|filtros]] en tiempo discreto son muchas, entre ellas
* Sistemas de comunicaciones
* Aplicaciones en ingeniería biomédicas
* Procesamiento de habla
* Procesamiento digital de audio
* Procesamiento de imágenes
* Técnicas de procesamiento de señales avanzadas
	* Bancos de filtros
	* [[Wavelets|Wavelets]]
	* etc
* Técnicas de estimación de procesos estocásticos
* Técnicas de beamforming y antenas inteligentes

## Etapas
---
Las etapas de diseño de un filtro en tiempo discreto son

1. Especificación de las propiedades deseadas
2. Aproximación de las especificaciones mediante un sistema en tiempo discreto
3. Realización del sistema

Las especificaciones siendo
* Frecuencia de paso: $\omega_p$
* Frecuencia de atenuación: $\omega_s$
* Ripple en la banda de paso
	* $\delta_p = \max\Set{\delta^+,~\delta^-}$
	* $A_p = 20 ~ \log_{10}(1 \pm \delta_o)$
* Ripple en la banda de atenuación
	* $\delta_s$
	* $A_s = -20 ~ \log_{10}(\delta_s)$

La aproximación se hará mediante funciones transferencias racionales, estables y causales
* [[Filtro de Respuesta Infinita al impulso|Filtros IIR]]
* [[Filtro de Respuesta Finita al impulso|Filtros FIR]]