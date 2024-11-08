---
dia: 2024-08-27
tags:
  - ingeniería-electrónica/embebidos/Diseño-desarrollo-y-depuración
  - nota/facultad
aliases:
  - Sistemas duros#^HRT
  - HRT#^HRT
  - Sistemas blandos#^SRT
  - SRT#^SRT
---
# Definición
---
Nos preocupa tanto el [[Diseño de sistemas embebidos#^determinismo|determinismo]] como el tiempo de respuesta del [[Sistema|sistema]]

* Sistemas duros (Hard Real Time) ^HRT
    * Restricciones de tiempo rigurosas
    * Sistemas de control en los cuales se debe escrutar, procesar y actuar en un plazo perentorio
        * Si esto no se cumple el sistema queda a [[Lazo|lazo]] abierto, pudiendo tener consecuencias catastróficas

* Sistemas blandos (Soft Real Time) ^SRT
    * Restricciones de tiempo menos rigurosas
    * Sistemas de adquisición de datos o multimedia
        * Si esporádicamente se degrada o se pierde la respuesta, puede ser inconveniente/incómodo pero sin consecuencias catastróficas