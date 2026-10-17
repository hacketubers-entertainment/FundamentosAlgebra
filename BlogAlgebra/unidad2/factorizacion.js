contenidoEntrada = `
<section>
  <h2>1. término común</h2>
  <div>
    <h3>Cómo reconocerlo</h3>
    <p>
      Se reconoce porque todos los términos de la expresión comparten una misma
      variable (con exponente) o un divisor común entre sus coeficientes
      numéricos.
    </p>

    <h3>Procedimiento</h3>
    <p>
      Se identifica el Máximo Común Divisor (MCD) de los coeficientes y las
      variables que se repiten en todos los términos elevadas a su menor
      exponente. Este término se coloca fuera de un paréntesis. Luego, se divide
      cada término original entre dicho término común y los resultados se
      escriben dentro del paréntesis.
    </p>

    <h3>Ejemplo resuelto</h3>
    <p><strong>Factorizar:</strong> 6x³ + 12x² - 18x</p>
    <p>
      <strong>Paso 1:</strong> El MCD de 6, 12 y 18 es 6. La variable común con
      menor exponente es x.
    </p>
    <p><strong>Paso 2:</strong> Dividimos cada término entre 6x:</p>
    <table id="tabla">
      <tr>
        <td>6x³</td>
        <td>12x²</td>
        <td>-18x</td>
      </tr>
      <tr>
        <td>&div; 6x</td>
        <td>&div; 6x</td>
        <td>&div; 6x</td>
      </tr>
      <tr>
        <td>x²</td>
        <td>2x</td>
        <td>-3</td>
      </tr>
    </table>
    <p><strong>Resultado:</strong> 6x(x² + 2x - 3)</p>

    <p><strong>Comprobación (multiplicando de regreso):</strong></p>
    <p>6x · x² + 6x · 2x + 6x · (-3) = 6x³ + 12x² - 18x</p>
  </div>
</section>

<section>
  <h2>2. trinomio cuadrado perfecto</h2>
  <div>
    <h3>Cómo reconocerlo</h3>
    <p>
      Es una expresión de tres términos donde el primero y el tercero son
      positivos y tienen raíz cuadrada exacta. Además, el segundo término es
      igual al doble producto de esas dos raíces cuadradas (puede ser positivo o
      negativo).
    </p>

    <h3>Procedimiento</h3>
    <p>
      Se extrae la raíz cuadrada del primer y del tercer término. Se unen ambas
      raíces con el signo del segundo término de la expresión original y todo el
      binomio resultante se eleva al cuadrado.
    </p>

    <h3>Ejemplo resuelto</h3>
    <p><strong>Factorizar:</strong> 9x² - 24x + 16</p>
    <p>
      <strong>Paso 1:</strong> Raíz cuadrada del primer término: √(9x²) = 3x.
    </p>
    <p><strong>Paso 2:</strong> Raíz cuadrada del tercer término: √(16) = 4.</p>
    <p>
      <strong>Paso 3:</strong> Verificación del término central: 2 · (3x) · (4)
      = 24x (coincide con el término del medio).
    </p>
    <p><strong>Resultado:</strong> (3x - 4)²</p>

    <p><strong>Comprobación (multiplicando de regreso):</strong></p>
    <p>
      (3x - 4)(3x - 4) = 3x(3x) + 3x(-4) - 4(3x) - 4(-4) = 9x² - 12x - 12x + 16
      = 9x² - 24x + 16
    </p>
  </div>
</section>

<section>
  <h2>3. diferencia de cuadrados.</h2>
  <div>
    <h3>Cómo reconocerlo</h3>
    <p>
      Se reconoce porque es un binomio (dos términos) separados por un signo
      menos, donde ambos términos tienen raíz cuadrada exacta.
    </p>

    <h3>Procedimiento</h3>
    <p>
      Se calcula la raíz cuadrada de cada uno de los dos términos. Después, se
      escriben dos paréntesis: en uno se coloca la suma de las raíces y en el
      otro la diferencia (resta) de las mismas.
    </p>

    <h3>Ejemplo resuelto</h3>
    <p><strong>Factorizar:</strong> 25x² - 49</p>
    <p><strong>Paso 1:</strong> Raíz del primer término: √(25x²) = 5x.</p>
    <p><strong>Paso 2:</strong> Raíz del segundo término: √(49) = 7.</p>
    <p><strong>Resultado:</strong> (5x + 7)(5x - 7)</p>

    <p><strong>Comprobación (multiplicando de regreso):</strong></p>
    <p>
      (5x + 7)(5x - 7) = 5x(5x) + 5x(-7) + 7(5x) + 7(-7) = 25x² - 35x + 35x - 49
      = 25x² - 49
    </p>
  </div>
</section>

<section>
  <h2>Ida y regreso</h2>
  <div>
    <p>
      Relación entre los casos de factorización y sus productos notables
      inversos:
    </p>
    <ul>
      <li>
        <strong>Término común:</strong> Es la operación inversa de la
        <em>propiedad distributiva</em> del producto respecto a la suma/resta
        [a(b + c) ↔ ab + ac].
      </li>
      <li>
        <strong>Trinomio cuadrado perfecto:</strong> Es el resultado inverso del
        <em>binomio al cuadrado</em> [(a ± b)² ↔ a² ± 2ab + b²].
      </li>
      <li>
        <strong>Diferencia de cuadrados:</strong> Es el resultado inverso del
        producto de <em>binomios conjugados</em> [(a + b)(a - b) ↔ a² - b²].
      </li>
    </ul>
  </div>
</section>
`;