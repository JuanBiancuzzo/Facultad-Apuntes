---
dia: 2023-03-20
materia: taller
capitulo: 2
---
### Definición
---
Son [[Módulo|modulos]] creados por otros, se pueden ver todos en https://crates.io/ ,por lo tanto para importarlo tenemos que agregarlo como dependencia en el archivo Cargo.toml

``` rust
[dependencies]
log = "0.4" // <- es la version del crate
```

y para usarlo es

``` rust
use log::info;

// ...

info!("logueando evento!");
```