# Dividir varias veces

Maru está aprendiendo a dividir con números enteros positivos.
Más específicamente, a dividir por dos en forma entera, es decir, descartando la parte decimal.

Por ejemplo, `10 dividido 2 es 5`, con un resultado exacto `10 / 2 = 5`.
Por otro lado `13 dividido 2 es 6.5`, es decir `13 / 2 = 6.5`.
Al descartar la parte decimal se obtiene 6, que es lo que calcula Maru cuando hace 13 dividido 2.

Para practicar más, Maru realiza el proceso de dividir por dos de esta forma varias veces, a partir de un cierto número inicial. Por ejemplo, si parte del número 38 y realiza el proceso 4 veces, obtendrá primero el número 19, luego el número 9, a continuación el número 4 y por último el número 2, que es el resultado final del proceso si se empieza con el número 38 y se divide 4 veces.

Debes escribir una función que ayude a Maru a calcular el resultado final luego de las divisiones.

### Objetivos

- Debes implementar la función `dividiendo(numero, veces)`
- Sus parámetros son:
  - numero: El número inicial, con el que Maru inicia el proceso.
  - veces: La cantidad de veces que Maru dividirá por dos desde el número inicial.
- La función debe retornar un entero: el resultado final luego de las divisiones.
