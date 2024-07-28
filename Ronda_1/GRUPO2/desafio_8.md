# Thor lanzando microondas

Recientemente, ha alcanzado un enorme éxito un videojuego de simulación de lanzamientos.

En este juego se pueden combinar `n` personajes con `m` objetos, y cada combinación de un personaje con un objeto determina una distancia a la que ese personaje es capaz de lanzar ese objeto.

Por ejemplo, Thor (personaje) puede lanzar un microondas (objeto) a 182 metros de distancia.

Cada personaje tiene dos atributos: una altura `a` y una fuerza `f`. Cada objeto tiene
un cierto peso `p`. La fórmula utilizada para calcular la distancia `d` alcanzada es
sencilla: `d = a*f/p` (altura del personaje, por fuerza del personaje, dividido el peso del objeto).

Tu tarea consiste en calcular cuántas combinaciones de personaje con objeto existen, tales que el lanzamiento alcance al menos una cierta distancia objetivo `D`.

### Objetivo

- Debes implementar la función: `thor(a, f, p, D)`:
  - a,f: arreglos de tamaño `n`, de modo que el personaje `i` tiene altura `a[i]` y fuerza `f[i]` (0 ≤ i < n)
  - p: arreglo de tamaño `m`, de modo que el objeto i tiene peso `p[i]` (0 ≤ i < m)
  - D: un entero que indica la distancia objetivo.
- Debe retornar un entero: la cantidad de combinaciones de personaje y objeto que producen un lanzamiento con distancia `D` o superior.
