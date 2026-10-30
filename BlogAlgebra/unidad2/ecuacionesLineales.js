contenidoEntrada = `
<h2>Procedimiento General</h2>
<p>Para resolver cualquier ecuación de primer grado (o lineal), se sigue el procedimiento general basado en la regla de la balanza:</p>
<ol>
    <li><strong>Elimina signos de agrupación:</strong> De adentro hacia afuera (paréntesis, corchetes, llaves) usando la propiedad distributiva.</li>
    <li><strong>Elimina denominadores:</strong> Multiplica cada término de ambos lados de la ecuación por el Mínimo Común Múltiplo (MCM) de los denominadores.</li>
    <li><strong>Agrupa:</strong> Coloca los términos con la incógnita x de un lado de la igualdad y los números (términos independientes) del otro.</li>
    <li><strong>Reduce términos semejantes:</strong> Simplifica cada miembro de la ecuación.</li>
    <li><strong>Despeja:</strong> Divide entre el coeficiente de la variable x.</li>
    <li><strong>Comprueba y valida:</strong> Sustituye el valor obtenido en la ecuación original y verifica que cumpla con el enunciado del problema.</li>
</ol>

<hr>

<h2>Ejemplos Resueltos por Tipo</h2>

<h3>3.1 Ecuaciones Enteras</h3>
<p><strong>Ecuación:</strong> 9x - 4 = 4x + 16</p>
<ul>
    <li><strong>Agrupa:</strong> 9x - 4x = 16 + 4</li>
    <li><strong>Reduce:</strong> 5x = 20</li>
    <li><strong>Despeja:</strong> x = 20 / 5</li>
    <li><strong>Solución:</strong> x = 4</li>
</ul>
<p><strong>Comprobación:</strong> 9(4) - 4 = 36 - 4 = 32 | 4(4) + 16 = 16 + 16 = 32 (32 = 32)</p>

<h3>3.2 Ecuaciones Fraccionarias</h3>
<p><strong>Ecuación:</strong> x / 3 + x / 4 = 7</p>
<ul>
    <li><strong>MCM de 3 y 4:</strong> 12</li>
    <li><strong>Multiplica todo por 12:</strong> 12(x / 3) + 12(x / 4) = 12(7)</li>
    <li><strong>Simplifica:</strong> 4x + 3x = 84</li>
    <li><strong>Reduce y despeja:</strong> 7x = 84 → x = 84 / 7</li>
    <li><strong>Solución:</strong> x = 12</li>
</ul>
<p><strong>Comprobación:</strong> 12 / 3 + 12 / 4 = 4 + 3 = 7</p>

<h3>3.3 Ecuaciones con Signos de Agrupación</h3>
<p><strong>Ecuación:</strong> 8x - (3x - 5) = 20</p>
<ul>
    <li><strong>Elimina paréntesis (cambiando signos por el signo negativo previo):</strong> 8x - 3x + 5 = 20</li>
    <li><strong>Reduce:</strong> 5x + 5 = 20</li>
    <li><strong>Agrupa y despeja:</strong> 5x = 20 - 5 → 5x = 15 → x = 15 / 5</li>
    <li><strong>Solución:</strong> x = 3</li>
</ul>
<p><strong>Comprobación:</strong> 8(3) - (3(3) - 5) = 24 - (9 - 5) = 24 - 4 = 20</p>

<h3>3.4 Ecuaciones con Literales</h3>
<p><strong>Ecuación (despejar x):</strong> mx - n = kx + p</p>
<ul>
    <li><strong>Agrupa términos con x:</strong> mx - kx = p + n</li>
    <li><strong>Factoriza x (término común):</strong> x(m - k) = p + n</li>
    <li><strong>Despeja x:</strong> x = (p + n) / (m - k), con la condición de que m ≠ k</li>
</ul>
<p><strong>Comprobación con números:</strong> Si m = 5, k = 2, n = 1, p = 7 → x = (7 + 1) / (5 - 2) = 8 / 3.</p>

<hr>

<h2>3.5 Planteamiento y Validación</h2>
<p><strong>Enunciado del problema:</strong> Un servidor en la nube cobra una tarifa fija de configuración de $20 dólares al mes más $0.10 dólares por cada hora de ejecución de contenedores. Si la factura de un mes específico fue de $50 dólares, ¿cuántas horas de ejecución consumió la aplicación?</p>

<ol>
    <li><strong>Incógnita:</strong> Sea x el número de horas de ejecución consumidas.</li>
    <li><strong>Traducción al lenguaje algebraico:</strong> Tarifa fija = 20; costo por hora = 0.10x; total = 50.</li>
    <li><strong>Ecuación:</strong> 20 + 0.10x = 50</li>
    <li><strong>Solución paso a paso:</strong>
        <ul>
            <li>Restar 20 en ambos lados: 0.10x = 50 - 20</li>
            <li>0.10x = 30</li>
            <li>Despejar x: x = 30 / 0.10</li>
            <li>x = 300 horas.</li>
        </ul>
    </li>
    <li><strong>Validación contra el enunciado:</strong> Si la aplicación se ejecuta 300 horas a $0.10 por hora, el costo por consumo es 300 × 0.10 = $30. Al sumar la tarifa fija de $20, el total es 30 + 20 = $50. El resultado tiene sentido lógico y cumple perfectamente con las condiciones del requerimiento.</li>
</ol>`;