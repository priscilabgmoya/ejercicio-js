# Bordar guarda

Ignacio quiere bordar una guarda para su mantel.

Ignacio solo sabe bordar cuadraditos de colores, y los unirá formando una cadena de cuadraditos, uno a continuación del otro, para formar su guarda de N cuadraditos en total.
Cada cuadradito será de algún color.

Hay 26 colores posibles, y cada color se identifica usando una de las 26 letras minúsculas del alfabeto inglés.
Por ejemplo `a` se usa para el azul, `b` para el bermellón, `c` para el carmín, y así siguiendo. Lo único importante para resolver el problema es que hay 26 colores, y cada letra representa un color distinto.

Para formar la guarda, la estrategia de Ignacio consiste en repetir muchas veces un cierto patrón.

Un patrón es una cadena de texto de longitud K que indica los colores a usar en el orden en que deben ser usados.

Por ejemplo `abb` indica que se debe usar primero un cuadradito azul, y luego dos cuadraditos seguidos de color bermellón.

Si se llega hasta el final del patrón y no se ha completado la guarda, Ignacio continúa agregando a la guarda nuevas copias del patrón hasta obtener una guarda de exactamente N cuadraditos.

Existen dos tipos de guardas que puede formar Ignacio:

- Guarda NORMAL: Cada vez que se termina el patrón, Ignacio agrega otra copia del patrón con los cuadraditos en el mismo orden. Es decir, todas las copias del patrón son idénticas. Por ejemplo para el patrón `abb` formando una guarda de tamaño `N = 8`, la guarda NORMAL correspondiente sería `abbabbab`.
- Guarda ESPEJADA: Cada vez que se termina el patrón, Ignacio agrega otra copia del patrón con los cuadraditos en orden exactamente inverso respecto del patrón que acaba de terminar. Es decir, las copias del patrón van alternando entre las que están “al derecho” y las que están “al revés” en la guarda. Por ejemplo para el patrón `abb` formando una guarda de tamaño `N = 8`, la guarda ESPEJADA correspondiente sería `abbbbaab`.

Debes escribir una función que ayude a Ignacio indicando cómo serán los colores de los N cuadraditos de la guarda.

### Objetivo

Debes implementar la función `formaguarda(N, tipo, patron)`
Sus parámetros son:

- N: Total de cuadraditos de la guarda
- tipo: El tipo de guarda
- patron: El patrón a utilizar
- La función debe retornar una cadena de texto de N caracteres, que indiquen los colores de los cuadraditos de la guarda.
