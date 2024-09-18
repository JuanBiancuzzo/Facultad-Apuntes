---
dia: 2024-09-13
tags: 
 - primer-proyecto-de-robótica-auto-remoto
 - nota/proyecto 
---
# Progreso
---
Cambiamos el diseño del auto, decidimos no usar un motor, sino que dos stepper motor, para controlar la velocidad y la dirección, no por una cuestión de simplicidad sino de conveniencia para el modelo del auto

Estuve diseñando el control de los dos stepper motors, el cual recuerdo del otro día, que se controla su velocidad a partir del delay entre las $4$ instrucciones de control, por lo que hay que intercalar entre los delay de cada stepper para conseguir el delay correcto

Para aislarnos y separar el problema en bloques, podemos pensar que de alguna forma se nos da la información necesaria de cada stepper y un delay total de espera para la espera del sensor infrarrojo

Visualizando el problema, si tenemos que un stepper necesita $3$ ms de delay, el otro $5$ ms y el tiempo total es de $13$ ms, podes ver que así debería activarse

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
\begin{tikzpicture}[scale=1.2, transform shape, thick]
    \tikzmath { \yscale = -0.75; \sep = 4; \tick = 0.2; \delayTotal = 13; }
    
    \draw[|->] (-\sep, 0) node[above=2pt, align=center] {Tiempo\\total}
        -- ++(0, {(\delayTotal + 1) * \yscale})
            node[left=2pt] {$t$};    
    \draw[|->] (0, 0) node[above=2pt, align=center] {Delay\\stepper $1$}
        -- ++(0, {(\delayTotal + 1) * \yscale})
            node[left=2pt] {$t$};
    \draw[|->] (\sep, 0) node[above=2pt, align=center] {Delay\\stepper $2$}
        -- ++(0, {(\delayTotal + 1) * \yscale})
            node[left=2pt] {$t$};
            
    \tikzmath { \delayStepper1 = 3; \delayStepper2 = 5; }    
    \foreach \delay in {0, \delayTotal} {
        \draw ({-\tick/2 - \sep}, {\delay * \yscale}) 
                node[left=2pt] {$\delay$ ms}
            -- ++(\tick, 0);
    }
    \foreach \delay [count=\i] in {0, \delayStepper1, ..., \delayTotal} {
        \draw ({-\tick/2}, {\delay * \yscale}) 
                node (stepper1-\i) {}
                node[left=2pt] {$\delay$ ms}
            -- ++(\tick, 0);
    }
    \foreach \delay [count=\i] in {0, \delayStepper2, ..., \delayTotal} {
        \draw ({-\tick/2 + \sep}, {\delay * \yscale}) 
                node (stepper2-\i) {}
                node[left=2pt] {$\delay$ ms}
            -- ++(\tick, 0);
    }
    
    \tikzmath { 
        \puntoDer = 2.3 * \sep; 
        \cantStepper1 = ceil(\delayTotal / \delayStepper1);
        \cantStepper2 = ceil(\delayTotal / \delayStepper2);
    }
    
    \foreach \iStepper/\cant in {1/\cantStepper1, 2/\cantStepper2} {
        \foreach \i in {2, ..., \cant} {
            \path (stepper\iStepper-\i.center -| {(\iStepper - 0.5) * \sep}, 0) 
                node[align=center, scale=0.9] (temp)
                    {Activar\\Stepper $\iStepper$};
            \draw[->, dashed] (temp.west) 
                -- ($ (stepper\iStepper-\i.center)+({2 * \tick}, 0) $);
        }
    }    

\end{tikzpicture}
\end{document}
```

La información que terminé determinando necesaria para cada stepper, la agrupe en su propia struct, siendo esta

```c++
struct Dato {
  public:
    size_t Delay;
    bool Direccion_positiva;
  private:
    size_t _delay_parcial;
    size_t _pos;
    int* _pines;
};
```

Donde
* `Delay` la el tiempo total que hay entre instrucciones
* `Direccion_positiva` es el signo de la velocidad, donde se piensa como `true` al signo positivo
* `_delay_parcial` en el caso que se haga un delay menor al total, este guarda esa información
* `_pos` nos da la instrucción que se tiene que ejecutar
* `_pines` los $4$ pines que son necesarios para ejecutar la instrucción

Vamos a resolver esta situación suponiendo que determinar el delay de cada stepper y toda la información previamente mencionada, fue setteada correctamente y no es algo que tengamos que resolver al mismo tiempo que determinamos las instrucciones de cada stepper

Decidí solucionar este problema tomando el [[Mínimo|mínimo]] entre los $3$ delays que tenemos, donde esperamos ese delay, y contando cuanto delay paso en total esta ronda. Cada stepper avanza su delay parcial, y en el caso que el delay parcial llega a ser lo necesario para mandar la instrucción, esta automáticamente lo hace. Esta es mi implementación

```c++
void settear_stepper(Dato dato_izq, Dato dato_der, size_t delay_total) {
  if (dato_izq.Delay == 0 && dato_der.Delay == 0) {
    delay(delay_total);
    return;
  }

  if (dato_izq.Delay == 0 || dato_der.Delay == 0) {
    Dato dato = dato_izq.Delay == 0 ? dato_der ? dato_izq;

    while (delay_total > dato.Delay) {
      dato.avanzar(dato.Delay);
      delay_total -= dato.Delay;
    }
    dato.avanzar(delay_total);
    return;
  }

  size_t menor_delay = dato_izq.Delay < dato_der.Delay 
      ? dato_izq.Delay 
      : dato_der.Delay;  

  while (delay_total > menor_delay) {
    dato_izq.avanzar(menor_delay);
    dato_der.avanzar(menor_delay);

    delay_total -= menor_delay;

    menor_delay = dato_izq.Delay < dato_der.Delay 
        ? dato_izq.Delay 
        : dato_der.Delay
  }

  dato_izq.avanzar(delay_total);
  dato_der.avanzar(delay_total);
}
```

Notemos que tenemos $3$ casos
* Donde el delay de ambos es $0$, por lo que simplemente esperamos el `delay_total`
* Donde uno solo tiene delay $0$ y por lo tanto vamos avanzando su propio delay hasta llegar al `delay_total`
* Si ambos tienen un delay distinto de $0$, el cual sería como el ejemplo dado anteriormente, y tener que ir agarrando el mínimo delay entre los $3$

Ahora queda obtener la información de la velocidad que se busca y actualizar los delay de cada stepper para poder llamar a esta [[Función|función]]