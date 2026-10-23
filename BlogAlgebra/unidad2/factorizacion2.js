contenidoEntrada = `
<section>
  <h2>1. Suma/Resta cubos</h2>
  <div>
    <h3>Cómo reconocerlo</h3>
    <p>
      Es una expresión algebraica que tenga dos términos separados por un signo de + o - donde cada uno de esos términos sea un cubo perfecto
    </p>

    <h3>Procedimiento</h3>
    <p>
      Sacar la raiz cubica de los dos terminos, sustitur los valores y los signos segun la operacion, de la formula (a ± b)(a² ± ab + b²)
    </p>

    <h3>Ejemplo resuelto</h3>
    <p><strong>Factorizar:</strong> 27x³ + 64</p>
    <p>
      <strong>Paso 1:</strong> Raices cubicas
      <ul>
        <li>
            a= ³√27x³ = 3x
        </li>
        <li>
            b= ³√64 = 4
        </li>
      </ul>
    </p>
    <p><strong>Paso 2:</strong> Sustituir:</p>
    <table id="tabla">
      <tr>
        <td>a</td>
        <td>±</td>
        <td>b</td>
        <td>a²</td>
        <td>±</td>
        <td>ab</td>
        <td>+</td>
        <td>b²</td>
      </tr>
      <tr>
        <td>3x</td>
        <td>+</td>
        <td>4</td>
        <td>3x</td>
        <td>+</td>
        <td>3x * 4</td>
        <td>+</td>
        <td>4</td>
      </tr>
      <tr>
        <td>3x</td>
        <td>+</td>
        <td>4</td>
        <td>9x²</td>
        <td>-</td>
        <td>12</td>
        <td>+</td>
        <td>16</td>
      </tr>
    </table>
    <p><strong>Resultado:</strong> (3x + 4)(9x² - 12x + 16))</p>

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
