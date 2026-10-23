contenidoEntrada = `<section>
  <h2>1. Suma/Resta de cubos</h2>
  <div>
    <h3>Cómo reconocerlo</h3>
    <p>
      Es una expresión algebraica que consta de dos términos separados por un signo de suma (+) o resta (-), donde cada uno de esos términos tiene raíz cúbica exacta (es un cubo perfecto).
    </p>

    <h3>Procedimiento</h3>
    <p>
      Extraer la raíz cúbica de ambos términos para obtener los valores de <em>a</em> y <em>b</em>. Después, construir la factorización formando un binomio y un trinomio siguiendo la regla de signos <strong>MOS</strong>:
    </p>
    <ul>
      <li><strong>M (Mismo):</strong> El binomio lleva el mismo signo que el problema original.</li>
      <li><strong>O (Opuesto):</strong> El término de en medio del trinomio lleva el signo opuesto al original.</li>
      <li><strong>S (Siempre positivo):</strong> El último término del trinomio siempre es positivo.</li>
    </ul>
    <p>
      Fórmulas: <br>
      • <em>a³ + b³ = (a + b)(a² - ab + b²)</em><br>
      • <em>a³ - b³ = (a - b)(a² + ab + b²)</em>
    </p>

    <h3>Ejemplo resuelto</h3>
    <p><strong>Factorizar:</strong> 27x³ + 64</p>
    <p>
      <strong>Paso 1:</strong> Obtener raíces cúbicas:
      <ul>
        <li>a = ³√(27x³) = 3x</li>
        <li>b = ³√(64) = 4</li>
      </ul>
    </p>
    <p><strong>Paso 2:</strong> Sustituir valores y aplicar regla de signos MOS:</p>
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
        <td>(3x)²</td>
        <td>-</td>
        <td>(3x)(4)</td>
        <td>+</td>
        <td>(4)²</td>
      </tr>
      <tr>
        <td>3x</td>
        <td>+</td>
        <td>4</td>
        <td>9x²</td>
        <td>-</td>
        <td>12x</td>
        <td>+</td>
        <td>16</td>
      </tr>
    </table>
    <p><strong>Resultado:</strong> (3x + 4)(9x² - 12x + 16)</p>

    <p><strong>Comprobación (multiplicando de regreso):</strong></p>
    <p>
      Multiplicamos el binomio por el trinomio aplicando la propiedad distributiva:<br>
      (3x + 4)(9x² - 12x + 16) <br>
      = 3x(9x² - 12x + 16) + 4(9x² - 12x + 16) <br>
      = (27x³ - 36x² + 48x) + (36x² - 48x + 64) <br>
      <em>Los términos centrales se cancelan:</em><br>
      = <strong>27x³ + 64</strong> ✓
    </p>
  </div>
</section>

<section>
  <h2>2. Trinomios x² + bx + c</h2>
  <div>
    <h3>Cómo reconocerlo</h3>
    <p>
      Es un trinomio de segundo grado cuyo primer término tiene coeficiente 1 (x²), el segundo término tiene la variable x con exponente 1, y el tercero es un término independiente.
    </p>

    <h3>Procedimiento</h3>
    <p>
      Se abren dos paréntesis escribiendo en cada uno la raíz del primer término (x). Luego se buscan dos números (<em>m</em> y <em>n</em>) que multiplicados den el término independiente <em>c</em> y sumados o restados den el coeficiente de en medio <em>b</em>. 
    </p>
    <p><strong>Pista de signos:</strong></p>
    <ul>
      <li>Si <em>c</em> es positivo, ambos números tienen el mismo signo (el signo que tenga <em>b</em>).</li>
      <li>Si <em>c</em> es negativo, los números tienen signos contrarios y el número de mayor valor absoluto lleva el signo de <em>b</em>.</li>
    </ul>

    <h3>Ejemplo resuelto</h3>
    <p><strong>Factorizar:</strong> x² - 3x - 28</p>
    <p>
      <strong>Paso 1:</strong> Identificar la pista de signos. Como <em>c = -28</em> (negativo), buscamos dos números con signos contrarios donde el mayor sea negativo (como <em>b = -3</em>).<br>
      <strong>Paso 2:</strong> Probar factores de 28 cuyo resultado al restar sea -3:
      <ul>
        <li>1 · 28 = 28 → 1 - 28 = -27</li>
        <li>2 · 14 = 28 → 2 - 14 = -12</li>
        <li>4 · 7 = 28 → 4 - 7 = -3 ✓</li>
      </ul>
      Los números correspondientes son <strong>+4</strong> y <strong>-7</strong>.
    </p>
    <p><strong>Resultado:</strong> (x + 4)(x - 7)</p>

    <p><strong>Comprobación (multiplicando de regreso):</strong></p>
    <p>
      Multiplicamos los binomios con término común:<br>
      (x + 4)(x - 7) = x² - 7x + 4x - 28 <br>
      = <strong>x² - 3x - 28</strong> ✓
    </p>
  </div>
</section>

<section>
  <h2>3. Trinomios ax² + bx + c (Aspa simple)</h2>
  <div>
    <h3>Cómo reconocerlo</h3>
    <p>
      Es un trinomio de segundo grado en el que el coeficiente del primer término (<em>a</em>) es distinto de 1 y de 0.
    </p>

    <h3>Procedimiento</h3>
    <p>
      1. Descomponer el primer término (<em>ax²</em>) en dos factores (columna izquierda).<br>
      2. Descomponer el término independiente (<em>c</em>) en dos factores (columna derecha).<br>
      3. Multiplicar en cruz (en aspa) y sumar ambos productos.<br>
      4. Si la suma coincide con el término central (<em>bx</em>), la factorización se forma tomando los términos en posición horizontal (por renglón).
    </p>

    <h3>Ejemplo resuelto</h3>
    <p><strong>Factorizar:</strong> 3x² + 10x - 8</p>
    <p>
      Descomponemos 3x² en (3x)(x) y -8 en (-2)(+4):
    </p>
    <table id="tabla">
      <tr>
        <td>3x</td>
        <td>-2</td>
        <td>→ x · (-2) = -2x</td>
      </tr>
      <tr>
        <td>x</td>
        <td>+4</td>
        <td>→ 3x · (+4) = 12x</td>
      </tr>
    </table>
    <p>
      <strong>Suma del aspa:</strong> -2x + 12x = <strong>+10x</strong> (coincide con el término central).<br>
      Agrupamos los factores horizontalmente (por renglón):
    </p>
    <p><strong>Resultado:</strong> (3x - 2)(x + 4)</p>

    <p><strong>Comprobación (multiplicando de regreso):</strong></p>
    <p>
      Multiplicamos los factores obtenidos:<br>
      (3x - 2)(x + 4) = 3x(x) + 3x(4) - 2(x) - 2(4)<br>
      = 3x² + 12x - 2x - 8 <br>
      = <strong>3x² + 10x - 8</strong> ✓
    </p>
  </div>
</section>

<section>
  <h2>Estrategia de factorización</h2>
  <p>
    Para factorizar cualquier polinomio de forma ordenada y eficiente, sigue esta serie de pasos según sus características y el número de términos:
  </p>
  
  <ol>
    <li>
      <strong>Paso 1: ¿Hay factor común?</strong><br>
      Extráelo siempre primero antes de aplicar cualquier otro método para simplificar la expresión.
    </li>
    <li>
      <strong>Paso 2: Cuenta el número de términos que quedaron dentro del paréntesis:</strong>
      <ul>
        <li>
          <strong>Dos términos (Binomios):</strong>
          <ul>
            <li>¿Es una resta de términos con raíz cuadrada exacta? → <em>Diferencia de cuadrados: a² - b² = (a + b)(a - b)</em></li>
            <li>¿Es una suma o resta de términos con raíz cúbica exacta? → <em>Suma o diferencia de cubos: a³ ± b³ = (a ± b)(a² ∓ ab + b²)</em></li>
          </ul>
        </li>
        <li>
          <strong>Tres términos (Trinomios):</strong>
          <ul>
            <li>¿El primer y tercer término tienen raíz cuadrada exacta y el del centro es el doble producto de sus raíces? → <em>Trinomio Cuadrado Perfecto: a² ± 2ab + b² = (a ± b)²</em></li>
            <li>¿Tiene la forma x² + bx + c (coeficiente de x² es 1)? → <em>Buscar dos números que multiplicados den c y sumados den b</em></li>
            <li>¿Tiene la forma ax² + bx + c (coeficiente de x² es distinto de 1)? → <em>Aplicar Aspa Simple</em></li>
          </ul>
        </li>
        <li>
          <strong>Cuatro términos o más:</strong>
          <ul>
            <li>Intenta agrupar los términos de dos en dos (o de tres en tres) para extraer un factor común por agrupación.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <strong>Paso 3: Revisa si alguno de los factores resultantes se puede volver a factorizar.</strong><br>
      Continúa descomponiendo hasta que todos los factores sean primos.
    </li>
  </ol>
</section>`;
